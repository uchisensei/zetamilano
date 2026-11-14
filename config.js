/* =====================================================================
 *  ZETA MILANO — configurazione esterna  (config.js)
 * ---------------------------------------------------------------------
 *  Questo file è caricato da index.html tramite <script src="config.js">.
 *  Qui ci sono le CHIAVI Supabase e i LINK reali del club.
 *
 *  Vantaggio: puoi sovrascrivere index.html quante volte vuoi
 *  (per aggiornare il gioco) SENZA dover reinserire le chiavi: restano qui.
 *
 *  COSA MODIFICARE:
 *    1) supabaseUrl      → Project URL (Supabase → Project Settings → API)
 *    2) supabaseAnonKey  → chiave "anon public"  (NON la service_role)
 *    3) (opzionale) real → i link del club reale, se cambiano
 *
 *  SICUREZZA: la chiave "anon" è pubblica per design di Supabase;
 *  la sicurezza dei dati è garantita da Row Level Security (vedi schema.sql).
 *  NON mettere MAI qui la chiave "service_role".
 * ===================================================================== */
window.ZM_CONFIG = {

  // --- Supabase (lascia i placeholder per restare in modalità LOCALE) ---
  supabaseUrl:     "https://zrazkxtjjqztdveyrzoy.supabase.co",          // es. "https://abcdefgh.supabase.co"
  supabaseAnonKey: "sb_publishable_md6rbjo7lSzlB2584d459Q_tsiItUZj",     // es. "eyJhbGciOiJIUzI1NiIsInR5cCI6..."

  // --- Link reali del club (opzionali: già precompilati per FC Zeta Milano) ---
  real: {
    wikiPage:   "FC_Zeta_Milano",
    wikipedia:  "https://en.wikipedia.org/wiki/FC_Zeta_Milano",
    tuttocampo: "https://www.tuttocampo.it/Lombardia/PrimaCategoria/GironeB/Squadra/FCZetaMilano/1238264",
    zetaworld:  "https://zetaworld.it"
  }

};
