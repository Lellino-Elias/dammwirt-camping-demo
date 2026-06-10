import type { CampsiteConfig } from "../types";

/**
 * Gasthaus & Camping zum Dammwirt — Moosburg in Kärnten.
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest/dammwirt) abgeleitet.
 * Preise: in der Quelle steht KEIN Preis (nur „Dauerplatz ab 2026 Mai.“) →
 * realistische Richtpreise + offene Disclosure (pricesArePlaceholder).
 */
const IMG = "/campsites/dammwirt";

const dammwirt: CampsiteConfig = {
  name: "Gasthaus & Camping zum Dammwirt",
  shortName: "Dammwirt",
  slug: "dammwirt",
  ort: "Moosburg",
  region: "Kärnten",
  brandKind: "Gasthaus & Camping",
  see: "Mühlteich",
  regionLong: "Moosburg · Wörthersee-Region · Kärnten · Österreich",

  theme: "alpin",
  heroVariant: "center",

  claim: "Dein Sommer zwischen zwei Teichen in Moosburg",
  claimEmphasis: "zwischen zwei Teichen",
  intro:
    "Familiär geführtes Camping direkt am Moosburger Mühlteich: eigener Badestrand, Schmankerln im Gasthaus und der Blick aufs Schloss Moosburg. Mittendrin im Grünen — und doch zu Fuß im Ortszentrum.",

  statement: {
    text: "Zwischen Mitterteich und Mühlteich sitzt du mitten im Wasser — mit dem Schloss Moosburg im Blick.",
    emphasis: "mitten im Wasser",
  },

  pillars: [
    {
      title: "Camping am Mühlteich",
      text: "Familiär geführter Platz direkt am idyllischen Moosburger Mühlteich — Wiese, Wasser und kurze Wege.",
      image: { src: `${IMG}/gallery-b7a1677a72.webp`, alt: "Camping-Stellplätze mit Wohnwagen und Zelten am Mühlteich beim Dammwirt" },
    },
    {
      title: "Eigener Badestrand",
      text: "Erholung und Badespaß für die ganze Familie — mit eigener Bademöglichkeit am Teich, auch für deinen Vierbeiner.",
      image: { src: `${IMG}/gallery-ebaf659dfe.webp`, alt: "Steg mit Boot und Badesachen am Mühlteich beim Camping Dammwirt" },
    },
    {
      title: "Schmankerln im Gasthaus",
      text: "Im Gasthaus „Zum Dammwirt“ genießt du klassische Gerichte und Köstlichkeiten aus der Heimat — direkt zwischen den Teichen.",
      image: { src: `${IMG}/gallery-cdf37d0caa.webp`, alt: "Beschatteter Gastgarten des Gasthauses Zum Dammwirt mit Sonnenschirmen" },
    },
  ],

  usps: [
    "Direkt am Mühlteich",
    "Eigener Badestrand",
    "Hunde willkommen",
    "Angeln & Nachtfischen",
    "Gasthaus & Gastgarten",
    "Blick aufs Schloss",
  ],

  trust: {
    heading: "Was den Dammwirt ausmacht",
    headingEmphasis: "Dammwirt",
    intro:
      "Familie Makai führt Gasthaus und Campingplatz mit Herz. Kurze Wege zum Wasser, ehrliche Küche und eine ruhige Lage zwischen zwei Teichen — hier kommst du wirklich an.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-0ecf75aba1.webp`, alt: "Luftaufnahme: Camping zum Dammwirt zwischen den Moosburger Teichen mit Schloss Moosburg" },
    sunset: { src: `${IMG}/gallery-9f4e147c28.webp`, alt: "Abendstimmung über dem Mühlteich mit dem Gasthaus zum Dammwirt" },
  },

  breather: {
    image: { src: `${IMG}/gallery-60cb6a3259.webp`, alt: "Beleuchtetes Gasthaus zum Dammwirt am Abend, gespiegelt im Mühlteich" },
    line: "Abendstimmung über dem Mühlteich.",
  },

  camping: {
    heading: "Camping am Wasser",
    intro:
      "Stellplatz auf der Wiese, ein paar Schritte zum eigenen Badestrand und das Gasthaus gleich nebenan — entspannter Campingurlaub am Moosburger Teich.",
    features: [
      {
        title: "Stellplätze am Teich",
        text: "Plätze auf der grünen Wiese direkt am Mühlteich — jetzt deinen Stellplatz reservieren. Dauerplätze ab Mai 2026, die Möglichkeiten sind begrenzt.",
        image: { src: `${IMG}/gallery-12b3992f69.webp`, alt: "Wiese mit Ruderboot und Steg am Ufer des Mühlteichs" },
      },
      {
        title: "Eigene Bademöglichkeit",
        text: "Liegewiese und Stege am Wasser — hier ist Badespaß für die ganze Familie garantiert.",
        image: { src: `${IMG}/gallery-5957abead2.webp`, alt: "Liegewiese mit Badestegen am Moosburger Teich beim Dammwirt" },
      },
      {
        title: "Ruhig & idyllisch gelegen",
        text: "Mitten im Grünen, in absolut ruhiger Lage zwischen Mitterteich und Mühlteich — und doch zentral in Moosburg.",
        image: { src: `${IMG}/gallery-39bcdab40c.webp`, alt: "Sonniger Blick durch die Bäume auf den Moosburger Teich" },
      },
      {
        title: "Blick aufs Schloss Moosburg",
        text: "Über die Teiche reicht der Blick bis hinauf zum Schloss Moosburg — ein Hauch von Balaton mitten in Kärnten.",
        image: { src: `${IMG}/gallery-c697c56777.webp`, alt: "Schloss Moosburg über dem Moosburger Teich" },
      },
      {
        title: "Gasthaus am Platz",
        text: "Das Gasthaus „Zum Dammwirt“ ist gleich am Campingplatz — von der Backerbsensuppe bis zum Wiener Schnitzel.",
        image: { src: `${IMG}/gallery-d3f3c0c23d.webp`, alt: "Gasthaus Zum Dammwirt in Moosburg von vorne" },
      },
      {
        title: "Gemütlicher Gastgarten",
        text: "Im urigen, beschatteten Gastgarten sitzt du mit Blick auf den Mitterteich — oder auf der Terrasse über dem Mühlteich.",
        image: { src: `${IMG}/gallery-21b0471ccd.webp`, alt: "Sonniger Gastgarten mit Sonnenschirmen beim Gasthaus zum Dammwirt" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Dammwirt",
    intro:
      "Angeln, Wandern, Wörthersee und Kultur in Moosburg — vom Platz aus liegt dir Kärnten zu Füßen.",
    items: [
      {
        title: "Angeln & Nachtfischen",
        text: "„Petri heil“ an den Moosburger Teichen, Nachtfischen in den gekennzeichneten Bereichen — Fischerkarten gibt es beim Dammwirt.",
        image: { src: `${IMG}/gallery-757755df42.webp`, alt: "Angler an einem Fischerkaten am Moosburger Teich" },
      },
      {
        title: "Wanderparadies Moosburg",
        text: "Ausgangspunkt für Spaziergänge und Wanderungen — vom Glücksparcours bis zum Anschluss an den Wörthersee-Rundwanderweg.",
        image: { src: `${IMG}/gallery-77795c9436.webp`, alt: "Blick über den Moosburger Teich auf die bewaldeten Hügel" },
      },
      {
        title: "Wörthersee in der Nähe",
        text: "Der Wörthersee ist nur rund 3 km entfernt — und der Golfplatz Pörtschach-Moosburg liegt gleich um die Ecke.",
        image: { src: `${IMG}/gallery-c09db52cc9.webp`, alt: "Bilderrahmen „Lust auf Wörthersee“ am Moosburger Teich" },
      },
      {
        title: "Schloss & Kultur",
        text: "Schloss Moosburg, das Karolingermuseum und Veranstaltungen auf der Schlosswiese — Geschichte und Brauchtum direkt vor der Tür.",
        image: { src: `${IMG}/gallery-ae05699e38.webp`, alt: "Luftaufnahme von Schloss Moosburg in Kärnten" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Moosburg",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Süd Autobahn, Abfahrt Pörtschach am Wörthersee oder Klagenfurt-West, dann nach Moosburg — der Dammwirt liegt im Ortszentrum, Pörtschacher Straße 7.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Pörtschach am Wörthersee an der Südbahn, wenige Minuten entfernt; Klagenfurt Hauptbahnhof liegt ebenfalls in der Nähe.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Klagenfurt ist rund 20 Minuten mit dem Auto entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Impressionen vom Dammwirt",
    headingEmphasis: "Dammwirt",
    intro: "Teiche, Gastgarten und gutes Essen — ein paar Eindrücke vom Platz und aus der Umgebung.",
    tag: "Mai bis Oktober",
    moreCount: 30,
    images: [
      { src: `${IMG}/gallery-715b82dd81.webp`, alt: "Luftaufnahme von Moosburg mit Schloss, Teich und Campingplatz" },
      { src: `${IMG}/gallery-c946189e4c.webp`, alt: "Gastgarten am Wasser mit grünen Sonnenschirmen beim Dammwirt" },
      { src: `${IMG}/gallery-a1dc967241.webp`, alt: "Angelruten am Ufer des Moosburger Teichs" },
      { src: `${IMG}/gallery-11c8620f95.webp`, alt: "Hausgemachtes Gericht im Gasthaus zum Dammwirt" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Sommer am Mühlteich?",
    headingEmphasis: "Sommer am Mühlteich",
    intro:
      "Sende uns deine Anfrage — Familie Makai meldet sich persönlich. Dauerplätze ab Mai 2026, die Möglichkeiten sind begrenzt; bitte per E-Mail anfragen.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Dauerplätze ab Mai 2026 auf Anfrage, zzgl. evtl. Ortstaxe.",
    highlight: {
      title: "Direkt am Mühlteich",
      text: "Vom Stellplatz sind es nur ein paar Schritte zum eigenen Badestrand.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 7 },
    ],
  },

  kontakt: {
    coords: { lat: 46.658997, lng: 14.165738 },
    tel: "+43 681 84909768",
    telHref: "tel:+4368184909768",
    mail: "camping@dammwirt.at",
    facebook: "https://www.facebook.com/profile.php?id=100063792180649",
    adresse: "Pörtschacher Straße 7 · 9062 Moosburg · Kärnten",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Baden", href: "#camping" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default dammwirt;
