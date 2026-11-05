package io.github.willou.diagsav;

import android.app.Activity;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;

import androidx.browser.customtabs.CustomTabColorSchemeParams;
import androidx.browser.customtabs.CustomTabsCallback;
import androidx.browser.trusted.TrustedWebActivityIntentBuilder;

import com.google.androidbrowserhelper.trusted.TwaLauncher;

/**
 * Ouvre Diag'SAV en plein écran (Trusted Web Activity) dans Chrome, même si un autre navigateur
 * (Samsung Internet…) est choisi par défaut : d'autres navigateurs affichent mal l'appli.
 * Sans Chrome sur l'appareil, on laisse Android choisir le navigateur.
 */
public class LanceurActivity extends Activity {
    private static final String ADRESSE = "https://willou.github.io/depannage-sav/";
    private static final String[] CHROME = { "com.android.chrome", "com.chrome.beta", "com.chrome.dev", "com.chrome.canary" };

    private TwaLauncher lanceur;
    private boolean ouvert;

    @Override
    protected void onCreate(Bundle etat) {
        super.onCreate(etat);
        if (etat != null && etat.getBoolean("ouvert")) { finish(); return; }
        Uri adresse = Uri.parse(ADRESSE);
        Uri lien = getIntent() != null ? getIntent().getData() : null;
        if (lien != null && "https".equals(lien.getScheme()) && "willou.github.io".equals(lien.getHost())
                && lien.getPath() != null && lien.getPath().startsWith("/depannage-sav")) adresse = lien;
        TrustedWebActivityIntentBuilder twa = new TrustedWebActivityIntentBuilder(adresse)
                .setDefaultColorSchemeParams(new CustomTabColorSchemeParams.Builder()
                        .setToolbarColor(Color.parseColor("#9B2424"))
                        .setNavigationBarColor(Color.parseColor("#0F0E0E"))
                        .build());
        lanceur = new TwaLauncher(this, chrome());
        lanceur.launch(twa, new CustomTabsCallback(), null, () -> ouvert = true, TwaLauncher.CCT_FALLBACK_STRATEGY);
    }

    /** Premier Chrome installé et activé, sinon null (choix d'Android). */
    private String chrome() {
        PackageManager pm = getPackageManager();
        for (String p : CHROME) {
            try { if (pm.getApplicationInfo(p, 0).enabled) return p; } catch (PackageManager.NameNotFoundException e) { /* absent */ }
        }
        return null;
    }

    @Override
    protected void onSaveInstanceState(Bundle etat) { super.onSaveInstanceState(etat); etat.putBoolean("ouvert", ouvert); }

    /** Retour depuis Chrome (bouton retour) : on ferme cette activité invisible. */
    @Override
    protected void onRestart() { super.onRestart(); if (ouvert) finish(); }

    @Override
    protected void onDestroy() { super.onDestroy(); if (lanceur != null) lanceur.destroy(); }
}
