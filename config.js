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
 *    4) (opzionale) logoUrl  → percorso/URL del logo (default "logo.png": sostituisci il file)
 *    5) (opzionale) photos   → foto giocatori/staff, chiave = nome esatto, valore = URL foto.
 *                              Se una foto manca o non carica, appare un avatar con le iniziali.
 *
 *  SICUREZZA: la chiave "anon" è pubblica per design di Supabase;
 *  la sicurezza dei dati è garantita da Row Level Security (vedi schema.sql).
 *  NON mettere MAI qui la chiave "service_role".
 * ===================================================================== */
window.ZM_CONFIG = {

  // --- Supabase (lascia i placeholder per restare in modalità LOCALE) ---
  supabaseUrl:     "PASTE_SUPABASE_URL",          // es. "https://abcdefgh.supabase.co"
  supabaseAnonKey: "PASTE_SUPABASE_ANON_KEY",     // es. "eyJhbGciOiJIUzI1NiIsInR5cCI6..."

  // --- Logo dell'app (default: il file "logo.png" nella stessa cartella).
  //     Sostituisci logo.png col tuo logo reale (stesso nome) OPPURE punta qui a un URL. ---
  logoUrl: "logo.png",

  // --- Foto giocatori: prelevate da zetaworld.it/squadra.html (21 giocatori).
  //     Chiave = nome ESATTO come in rosa. Per aggiungere lo staff o nuove foto,
  //     segui lo stesso formato. Se un'immagine non carica, appare l'avatar iniziale.
  photos: {
    "Alessio Buono": "photos/buono-alessio.jpg",
    "Francesco Ambrosio": "photos/ambrosio-francesco.jpg",
    "Andrés Llamas Acuña": "photos/llamas-andres-acuna.jpg",
    "Andrea Tarasco": "photos/tarasco-andrea.jpg",
    "Niccolò Ciceri": "photos/ciceri-niccolo.jpg",
    "Alessio Marcone": "photos/marcone-alessio.jpg",
    "Duccio Guasti": "photos/guasti-duccio.jpg",
    "Lorenzo Mantovani": "photos/mantovani-lorenzo.jpg",
    "Mattia El Hilali": "photos/el-hilali-mattia.jpg",
    "Luca L'Erede": "photos/l-erede-luca.jpg",
    "Alessandro Fratus": "photos/fratus-alessandro.jpg",
    "Gioele Salvadore": "photos/salvadore-gioele.jpg",
    "Erick Diana": "photos/diana-erick.jpg",
    "Edoardo Maio": "photos/maio-edoardo.jpg",
    "Simone Soprano": "photos/soprano-simone.jpg",
    "Elia Ferrario": "photos/ferrario-elia.jpg",
    "Kevin Girgenti": "photos/girgenti-kevin.jpg",
    "Edoardo Matta": "photos/matta-edoardo.jpg",
    "Filippo Alberto Nahum": "photos/nahum-filippo-alberto.jpg",
    "Matteo Capitani": "photos/capitani-matteo.jpg",
    "Fallou Cisse": "photos/cisse-fallou.jpg",
  },

  // --- Link reali del club (opzionali: già precompilati per FC Zeta Milano) ---
  real: {
    wikiPage:   "FC_Zeta_Milano",
    wikipedia:  "https://en.wikipedia.org/wiki/FC_Zeta_Milano",
    tuttocampo: "https://www.tuttocampo.it/Lombardia/PrimaCategoria/GironeB/Squadra/FCZetaMilano/1238264",
    zetaworld:  "https://zetaworld.it"
  }

};
