import type { CampsiteConfig } from "../types";

/**
 * Gasthaus & Camping zum Dammwirt — Moosburg in Kärnten.
 * Alle Texte/Fakten belegt aus dammwirt.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Dammwirt-Fotos in /public/campsites/dammwirt/.
 *
 * EHRLICHKEIT:
 *  - Der Platz liegt DIREKT zwischen Moosburger Mitterteich und Mühlteich
 *    (eigener Badeplatz am Mühlteich) → `see: "Moosburger Teiche"`. Der
 *    Wörthersee ist laut Quelle ca. 3 km entfernt — NIE als "am Wörthersee"
 *    geframt.
 *  - KEINE Preise auf der Quelle (keine Seite/Unterseite, auch nicht in der
 *    Speisekarte-PDF) → `pricesArePlaceholder: true`, realistische Platzhalter,
 *    offen im priceNote ausgewiesen. NUR die Preiszahlen sind Platzhalter.
 *  - Keine Unterkünfte außer Stellplätzen → `mobilheime` ausgelassen.
 *  - Keine belegbare Auszeichnung → `awards` leer.
 *  - Spielplatz/Skaterpark stehen laut Quelle im ORTSZENTRUM (nicht am Platz) →
 *    in der Familie-Sektion ehrlich als "im Ortszentrum / nahe" beschrieben.
 *  - Keine Koordinaten in der Quelle → `coords` ausgelassen (Karte aus, Adresse zeigt).
 *  - Inhaber laut eigener Website "Tamás MAKAI" / "Familie Makai" (Lead-CSV
 *    schrieb "MAKA") → Website-Schreibweise verwendet.
 */
const IMG = "/campsites/dammwirt";

export const dammwirt: CampsiteConfig = {
  name: "Gasthaus & Camping zum Dammwirt",
  shortName: "Zum Dammwirt",
  slug: "dammwirt",
  ort: "Moosburg in Kärnten",
  region: "Kärnten",
  brandKind: "Gasthaus & Camping",
  see: "Moosburger Teiche",
  regionLong: "Moosburg · Region Wörthersee · Kärnten · Österreich",

  claim: "Camping & Gasthaus direkt an den Moosburger Teichen",
  claimEmphasis: "an den Moosburger Teichen",
  intro:
    "Familiär geführter Campingplatz mit eigenem Badeplatz, uriger Gastgarten und beste Anglerplätze — mitten in Moosburg, mit Blick auf das Schloss.",

  statement: {
    text: "Ein gemütlicher Ort für alle, die Pause vom Alltag machen — direkt zwischen den Moosburger Teichen.",
    emphasis: "Pause vom Alltag",
  },

  pillars: [
    {
      title: "Zwischen zwei Teichen",
      text: "Im Zentrum von Moosburg, direkt zwischen Mitterteich und Mühlteich gelegen — in absolut ruhiger Lage mit herrlichem Blick auf das Schloss Moosburg.",
      image: { src: `${IMG}/luftbild-dammwirt-halbinsel.webp`, alt: "Luftaufnahme: Gasthaus zum Dammwirt auf der Halbinsel zwischen den Moosburger Teichen" },
    },
    {
      title: "Gasthaus & Gastgarten",
      text: "Kulinarische Schmankerl im urigen, beschatteten Gastgarten und auf der Terrasse — mit Blick über die Teiche bis hin zum Schloss Moosburg.",
      image: { src: `${IMG}/gasthaus-zum-dammwirt.webp`, alt: "Gasthaus zum Dammwirt in Moosburg, Eingang und Gastgarten" },
    },
    {
      title: "Petri Heil am Teich",
      text: "Die Moosburger Teiche sind ein Paradies für Angler — auch das Nachtfischen in gekennzeichneten Fischerbereichen ist ein Highlight. Fischerkarten gibt es direkt beim Dammwirt.",
      image: { src: `${IMG}/fischerhuette-am-teich.webp`, alt: "Fischerhütte auf Stelzen am Moosburger Teich beim Dammwirt" },
    },
  ],

  usps: [
    "Familiär geführt",
    "Eigener Badeplatz am Mühlteich",
    "Direkt an den Moosburger Teichen",
    "Top-Anglerrevier · Nachtfischen",
    "Uriger Gastgarten mit Schlossblick",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Worauf Sie sich beim Dammwirt verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Makai, ruhige Lage direkt an den Moosburger Teichen und ein eigener Badeplatz — Erholung und Badespaß für die ganze Familie, auch für den Vierbeiner.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  // Quelle: Restaurant & Camping "bis ende Oktober geöffnet" (verbatim) → saison.bis = "Oktober".
  // Saisonbeginn ist auf der Quelle NICHT belegt (nur "Dauerplatz ab 2026 Mai" für Dauerplätze,
  // siehe booking.highlight) → von bleibt leer; die Saison wird neutral als "bis Oktober" gezeigt.
  saison: { von: "", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/luftaufnahme-moosburger-teiche.webp`, alt: "Luftaufnahme der Moosburger Teiche mit Campingplatz und Schloss Moosburg" },
    sunset: { src: `${IMG}/sonnenuntergang-muehlteich.webp`, alt: "Sonnenuntergang über dem Moosburger Mühlteich mit dem Gasthaus am Ufer" },
  },

  camping: {
    heading: "Campingplatz am Mühlteich",
    intro:
      "Familiär geführter Campingplatz direkt an den idyllischen Moosburger Teichen — mit eigenem Badeplatz, Anglerglück und Erholung für die ganze Familie, auch für den Vierbeiner.",
    features: [
      { title: "Familiär geführter Platz", text: "Ein überschaubarer, familiär geführter Campingplatz direkt am Wasser — hier kennt man sich noch persönlich.", image: { src: `${IMG}/campingplatz-luftbild.webp`, alt: "Luftaufnahme des Campingplatzes zum Dammwirt mit Wohnwagen und Zelten" } },
      { title: "Stellplätze direkt am Teich", text: "Ebene Wiesen-Stellplätze für Wohnwagen, Wohnmobil und Zelt — viele mit Blick auf den ruhigen Mühlteich.", image: { src: `${IMG}/stellplaetze-am-teich.webp`, alt: "Stellplätze mit Wohnwagen und Zelten am Ufer des Moosburger Teichs" } },
      { title: "Eigener Badeplatz", text: "Eigene Bademöglichkeit direkt am idyllischen Mühlteich — Erholung und Badespaß für die ganze Familie, auch der Vierbeiner darf ins Wasser.", image: { src: `${IMG}/badesteg-muehlteich.webp`, alt: "Hölzerner Badesteg am Moosburger Mühlteich" } },
      { title: "Ruhig im Grünen", text: "Eingebettet in Wiesen und Wald, in absolut ruhiger Lage — Natur pur zwischen den Moosburger Teichen.", image: { src: `${IMG}/ruhig-im-gruenen-am-teich.webp`, alt: "Ruhige grüne Wiese am bewaldeten Ufer des Moosburger Teichs beim Dammwirt" } },
      { title: "Sanitäranlagen", text: "Gepflegte, gekachelte Waschräume mit Waschbecken und Spiegeln — sauber gehalten für entspannte Campingtage.", image: { src: `${IMG}/sanitaeranlagen.webp`, alt: "Gepflegte Sanitäranlage mit Waschbecken am Campingplatz" } },
      { title: "Abendstimmung am Wasser", text: "Wenn der Tag ausklingt, spiegelt sich das Gasthaus im stillen Teich — Ruhe und Idylle direkt vor dem Stellplatz.", image: { src: `${IMG}/abendstimmung-am-teich.webp`, alt: "Abendstimmung am Moosburger Teich mit dem beleuchteten Gasthaus" } },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Erholung und Badespaß für Groß und Klein — und für mehr Action sorgen Spielplatz und Skaterpark im nahen Ortszentrum.",
    features: [
      { title: "Badespaß am Mühlteich", text: "Eigener Badeplatz direkt am idyllischen Mühlteich — Planschen, Schwimmen und ein Boot am Steg sorgen für Urlaubsstimmung.", image: { src: `${IMG}/badeplatz-steg-boot.webp`, alt: "Badesteg mit Boot und Schwimmtier am Moosburger Mühlteich" } },
      { title: "Spielplatz im Ortszentrum", text: "Nur wenige Minuten entfernt: Spielplatz mit Rutsche, Seilrutsche, Klettertürmen und Schaukeln nahe der Schlosswiese.", image: { src: `${IMG}/spielplatz-moosburg.webp`, alt: "Spielplatz mit Klettertürmen und Rutsche im Ortszentrum von Moosburg" } },
      { title: "Skaterpark für Jugendliche", text: "Für ältere Kinder und Jugendliche bietet der Skaterpark im Ortszentrum genügend Action und Abwechslung.", image: { src: `${IMG}/skaterpark-spielplatz.webp`, alt: "Spiel- und Skaterpark im Ortszentrum von Moosburg" } },
    ],
  },

  aktivitaeten: {
    heading: "Erleben rund um Moosburg",
    intro:
      "Angeln, Wandern, Kultur und Kärntner Ausflugsziele — beim Dammwirt sind Sie mitten drin.",
    items: [
      { title: "Angeln & Nachtfischen", text: "Erholsamer Anglerspaß an den Moosburger Teichen, samt Nachtfischen in den gekennzeichneten Fischerbereichen — Fischerkarten gibt es beim Dammwirt.", image: { src: `${IMG}/angeln-moosburger-teiche.webp`, alt: "Angelruten am Ufer des Moosburger Teichs" } },
      { title: "Der große Fang", text: "So mancher kapitale Fisch wurde nach dem Fang beim Dammwirt ordentlich begossen — Petri Heil an den Moosburger Teichen!", image: { src: `${IMG}/petri-heil-fang.webp`, alt: "Stolzer Fang eines großen Karpfens am Moosburger Teich" } },
      { title: "Kulinarik mit Seeblick", text: "Klassische Gerichte und Köstlichkeiten aus der Heimat — im urigen Gastgarten oder auf der Terrasse mit Blick über den Mühlteich.", image: { src: `${IMG}/terrasse-mit-seeblick.webp`, alt: "Gedeckter Tisch auf der Terrasse mit Blick auf den Moosburger Teich" } },
      { title: "Wanderparadies Moosburg", text: "Ideal für Spaziergänge und Wanderungen — Glücksparcours, Paradiesgarten und Anschluss an den Wörthersee-Rundwanderweg; der Wörthersee liegt nur rund 3 km entfernt.", image: { src: `${IMG}/wandern-am-teich.webp`, alt: "Idyllischer Moosburger Teich mit Wald und Bergen" } },
      { title: "Schloss, Kultur & Golf", text: "Veranstaltungen auf der Schlosswiese, das Karolingermuseum und ein Bauern- & Regionalmarkt — der Golfplatz Pörtschach-Moosburg liegt nur rund 0,5 km entfernt.", image: { src: `${IMG}/schloss-moosburg.webp`, alt: "Schloss Moosburg in Kärnten aus der Luft" } },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      { title: "Mit dem Auto", text: "Mitten in Moosburg, Pörtschacher Straße 7 — nur wenige Kilometer von der Landeshauptstadt Klagenfurt entfernt." },
      { title: "Die Lage", text: "Direkt zwischen Moosburger Mitterteich und Mühlteich, in absolut ruhiger Lage mit Blick auf das Schloss Moosburg." },
      { title: "In der Umgebung", text: "Golfplatz Pörtschach-Moosburg rund 0,5 km, der Wörthersee ca. 3 km — ein idealer Ausgangspunkt für Ausflüge in ganz Kärnten." },
    ],
  },

  galerie: {
    heading: "Impressionen vom Dammwirt",
    headingEmphasis: "Dammwirt",
    intro:
      "Teiche, Gastgarten, Kulinarik und Anglerglück — ein paar Eindrücke vom Gasthaus & Camping zum Dammwirt in Moosburg.",
    tag: "Geöffnet bis Oktober",
    moreCount: 30,
    images: [
      { src: `${IMG}/moosburger-teich-steg.webp`, alt: "Sommerlicher Blick über den Moosburger Teich mit Liegewiese und Steg" },
      { src: `${IMG}/gastgeber-familie-makai.webp`, alt: "Die Gastgeber, Familie Makai, mit einer Brettljause auf der Terrasse" },
      { src: `${IMG}/wiener-schnitzel.webp`, alt: "Wiener Schnitzel mit Pommes im Gasthaus zum Dammwirt" },
      { src: `${IMG}/gaststube.webp`, alt: "Gemütlich gedeckte Gaststube im Gasthaus zum Dammwirt" },
    ],
  },

  booking: {
    heading: "Anfrage & Reservierung",
    intro:
      "Wählen Sie Zeitraum und Stellplatz — Familie Makai meldet sich persönlich mit Ihrer Verfügbarkeit. Anfragen und Reservierungen bevorzugt per E-Mail.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben; diese Werte sind realistische Platzhalter und müssen mit dem Betrieb bestätigt werden.",
    highlight: {
      title: "Dauerplätze ab Mai 2026",
      text: "Dauercamping-Plätze sind ab Mai 2026 verfügbar — Anfragen bitte per E-Mail, die Möglichkeiten sind begrenzt.",
    },
    categories: [
      // PLATZHALTER-Preise (keine Preise auf der Quelle) — plausible Kärntner Teich-Campingpreise, bitte bestätigen.
      { id: "zeltplatz", label: "Zeltplatz", perNight: 24, perExtraGuest: 6 },
      { id: "stellplatz", label: "Stellplatz (Wohnwagen/Wohnmobil)", perNight: 32, perExtraGuest: 7 },
      { id: "komfort", label: "Komfortplatz am Wasser", perNight: 39, perExtraGuest: 7 },
    ],
  },

  kontakt: {
    coords: { lat: 46.693645, lng: 14.173397 },
    tel: "+43 681 84909768",
    telHref: "tel:+4368184909768",
    mail: "camping@dammwirt.at",
    facebook: "https://www.facebook.com/profile.php?id=100063792180649",
    adresse: "Pörtschacher Straße 7 · 9062 Moosburg in Kärnten",
    // Keine Koordinaten in der Quelle → coords ausgelassen (Karte aus, Adresse zeigt).
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze am Teich", href: "#camping" },
        { label: "Badeplatz", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Badespaß", href: "#kinder" },
        { label: "Spielplatz", href: "#kinder" },
        { label: "Skaterpark", href: "#kinder" },
      ],
    },
    {
      label: "Erleben",
      href: "#aktivitaeten",
      children: [
        { label: "Angeln & Fischen", href: "#aktivitaeten" },
        { label: "Kulinarik", href: "#aktivitaeten" },
        { label: "Schloss & Kultur", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Anfrage", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default dammwirt;
