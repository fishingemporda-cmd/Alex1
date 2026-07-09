// La web sempre ha de començar a dalt: no restauris la posició de scroll en recarregar
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

/* ============================================================
   TRADUCCIONS (CA / ES / EN / FR) — JavaScript pur
   ============================================================ */
const translations = {
  /* -------------------- CATALÀ -------------------- */
  ca: {
    page_title: "Excursions en vaixell a Llançà, Port de la Selva i Cap de Creus | Barca Tour Llançà",
    meta_description: "Rutes en barca des de Llançà, el Port de la Selva i Colera: descobreix el Cap de Creus, cales d'aigües cristal·lines, paddle surf i sortides de pesca per la Costa Brava.",
    nav_private: "TOUR PRIVAT",
    nav_shared: "TOUR COMPARTIT",
    nav_fishing: "PESCA",
    nav_prices: "PREUS",
    nav_bookings: "RESERVES",
    nav_excursions: "EXCURSIONS",
    nav_contact: "CONTACTE",
    dd_colera: "Ruta Llançà / Colera",
    dd_creus: "Ruta Cap de Creus",
    dd_personal: "Tour personalitzat",
    dd_sunset: "Tour Posta de Sol",
    pr_2h: "2 h — 180€",
    pr_4h: "4 h — 300€",
    pr_6h: "6 h — 410€",
    hero_title_main: "TOURS EN BARCA",
    hero_title_sub: "AMB PADDLE SURF",
    hero_subtitle: "Llançà, el Port de la Selva, Colera, Portbou i Cap de Creus",
    hero_cta: "Veure excursions",
    w1_title: "Ruta Llançà / Colera",
    w1_l1: "Durada 2h.", w1_l2: "Capacitat màxima 6p.", w1_l3: "Preu 180€.",
    w2_title: "Ruta Cap de Creus",
    w2_l1: "Durada 4h (300€)", w2_l2: "Durada 6h (410€)", w2_l3: "Capacitat màxima 6p.",
    w3_title: "Ruta Personalitzada",
    w3_l1: "Tu decideixes ruta i durada.", w3_l2: "Preu a convenir.",
    w4_title: "Ruta Posta de Sol",
    w4_l1: "Durada 2h.", w4_l2: "Capacitat màxima 6p.", w4_l3: "Preu 180€.",
    w5_title: "Ruta Tour Compartit",
    w5_l1: "Preu: a partir de 18€ per persona i hora.", w5_l2: "Ruta i durada a concretar.",
    w6_title: "Sortides de pesca",
    w6_l1: "Pesca per a adults i infantil.", w6_l2: "Preu: 50€ 2,5 hores per persona.",
    coming_soon: "Fotos pròximament",
    reserve_now: "RESERVA ARA",
    tag_private: "Privat",
    tag_shared: "Compartit",
    wa_reserve_msg: "Hola! M'agradaria reservar:",
    wa_reserve_generic: "Hola! M'agradaria fer una reserva.",
    includes_title: "Totes les rutes inclouen",
    inc_drink: "Beguda",
    inc_snack: "Aperitiu",
    inc_fuel: "Combustible",
    inc_boat: "Assegurança de barca",
    inc_pax: "Assegurança de passatgers (SOV)",
    inc_skipper: "Patró",
    gallery_title: "GALERIA",
    inc_seats: "Seients encoixinats",
    inc_paddle: "Paddle surf",
    inc_parasol: "Para-sol",
    inc_awning: "Toldo",
    intro_text: "Descobreix la Costa Brava i Cap de Creus a bord de la nostra barca. Navega per un parc natural d'una gran bellesa paisatgística, amb increïbles cales amagades, d'aigües cristal·lines, entre penya-segats esculpits per la tramuntana. Regala't el millor record de les teves vacances!",
    footer_tagline: "Tours en barca amb paddle surf per la Costa Brava.",
    footer_contact_title: "Contacte",
    footer_address: "Llançà, Girona",
    footer_follow_title: "Segueix-nos",
    footer_rights: "Tots els drets reservats.",
    route_view: "Veure la ruta",
    btn_desc: "Descripció",
    route_back: "Excursions",
    gallery_photos: "Galeria de fotos",
    route_soon: "Descripció detallada pròximament. Contacta'ns per a més informació!",
    nav_about: "QUI SÓC",
    back_home: "Tornar a l'inici",
    about_title: "Qui sóc",
    about_p1: "Sóc l'Àlex, fa més de 30 anys que visc a l'Empordà i el mar sempre ha format part de qui sóc.",
    about_p2: "Des de sempre he sentit una connexió especial amb la Costa Brava, les seves cales amagades, els seus penya-segats i les aigües cristal·lines que la fan única. La pesca, la navegació i la natura són les meves grans passions, i al llarg dels anys he tingut la sort de conèixer racons que només es poden descobrir des del mar.",
    about_p3: "M'agrada compartir aquesta passió amb les persones que m'acompanyen a bord. Per això organitzo passejades en barca pensades perquè pugueu descobrir la Costa Brava d'una manera autèntica, tranquil·la i propera. Cada sortida és diferent, però totes tenen una cosa en comú: l'amor per aquest entorn privilegiat que considero casa meva. L'objectiu és que els meus passatgers no siguin simples turistes, sinó convidats que descobreixen la nostra costa tal com la vivim els locals. Vull portar-te a sentir l'energia de la tramuntana esculpida a les roques, a banyar-te a les aigües cristal·lines de Cala Prona, a meravellar-te amb el contrast geològic de Cap Ras o a relaxar-te amb un bon aperitiu a la majestuosa Badia de Garbet.",
    about_p4: "Gaudeixo ensenyant els llocs més especials de la costa i fent que cada experiència sigui segura, agradable i plena de bons records. Si us agrada el mar tant com a mi, estaré encantat de compartir amb vosaltres els secrets i la bellesa d'aquest racó únic del Mediterrani.",
    about_p5: "A bord de la meva embarcació, tu marques el ritme. Vaig dissenyar aquestes rutes per oferir una experiència exclusiva, íntima i totalment flexible, on la seguretat i la comoditat són absolutes. M'encanta compartir les històries, llegendes i anècdotes marineres de cada racó que visitem, però també sé quan cedir el protagonisme al so de l'onatge perquè desconnectis per complet. Per a mi, no hi ha satisfacció més gran que veure la cara de sorpresa de qui puja a bord i saber que, en tornar a port, s'emporta un tros del cor de la Costa Brava més autèntica i salvatge. T'espero a bord per compartir aquesta aventura junts!",
  },

  /* -------------------- CASTELLÀ -------------------- */
  es: {
    page_title: "Excursiones en barco en Llançà, Port de la Selva y Cap de Creus | Barca Tour Llançà",
    meta_description: "Rutas en barca desde Llançà, el Port de la Selva y Colera: descubre el Cap de Creus, calas de aguas cristalinas, paddle surf y salidas de pesca por la Costa Brava.",
    nav_private: "TOUR PRIVADO",
    nav_shared: "TOUR COMPARTIDO",
    nav_fishing: "PESCA",
    nav_prices: "PRECIOS",
    nav_bookings: "RESERVAS",
    nav_excursions: "EXCURSIONES",
    nav_contact: "CONTACTO",
    dd_colera: "Ruta Llançà / Colera",
    dd_creus: "Ruta Cap de Creus",
    dd_personal: "Tour personalizado",
    dd_sunset: "Tour Puesta de Sol",
    pr_2h: "2 h — 180€",
    pr_4h: "4 h — 300€",
    pr_6h: "6 h — 410€",
    hero_title_main: "TOURS EN BARCA",
    hero_title_sub: "CON PADDLE SURF",
    hero_subtitle: "Llançà, el Port de la Selva, Colera, Portbou y Cap de Creus",
    hero_cta: "Ver excursiones",
    w1_title: "Ruta Llançà / Colera",
    w1_l1: "Duración 2h.", w1_l2: "Capacidad máxima 6p.", w1_l3: "Precio 180€.",
    w2_title: "Ruta Cap de Creus",
    w2_l1: "Duración 4h (300€)", w2_l2: "Duración 6h (410€)", w2_l3: "Capacidad máxima 6p.",
    w3_title: "Ruta Personalizada",
    w3_l1: "Tú decides ruta y duración.", w3_l2: "Precio a convenir.",
    w4_title: "Ruta Puesta de Sol",
    w4_l1: "Duración 2h.", w4_l2: "Capacidad máxima 6p.", w4_l3: "Precio 180€.",
    w5_title: "Ruta Tour Compartido",
    w5_l1: "Precio: desde 18€ por persona y hora.", w5_l2: "Ruta y duración a concretar.",
    w6_title: "Salidas de pesca",
    w6_l1: "Pesca adultos y pesca infantil.", w6_l2: "Precio: 50€ 2,5 horas por persona.",
    coming_soon: "Fotos próximamente",
    reserve_now: "RESERVA AHORA",
    tag_private: "Privado",
    tag_shared: "Compartido",
    wa_reserve_msg: "¡Hola! Me gustaría reservar:",
    wa_reserve_generic: "¡Hola! Me gustaría hacer una reserva.",
    includes_title: "Todas las rutas incluyen",
    inc_drink: "Bebida",
    inc_snack: "Aperitivo",
    inc_fuel: "Combustible",
    inc_boat: "Seguro de barca",
    inc_pax: "Seguro de pasajeros (SOV)",
    inc_skipper: "Patrón",
    gallery_title: "GALERÍA",
    inc_seats: "Asientos acolchados",
    inc_paddle: "Paddle surf",
    inc_parasol: "Parasol",
    inc_awning: "Toldo",
    intro_text: "Descubre la Costa Brava y Cap de Creus a bordo de nuestra barca. Navega por un parque natural de gran belleza paisajística, con increíbles calas escondidas, de aguas cristalinas, entre acantilados esculpidos por la tramontana. ¡Regálate el mejor recuerdo de tus vacaciones!",
    footer_tagline: "Tours en barca con paddle surf por la Costa Brava.",
    footer_contact_title: "Contacto",
    footer_address: "Llançà, Girona",
    footer_follow_title: "Síguenos",
    footer_rights: "Todos los derechos reservados.",
    route_view: "Ver la ruta",
    btn_desc: "Descripción",
    route_back: "Excursiones",
    gallery_photos: "Galería de fotos",
    route_soon: "Descripción detallada próximamente. ¡Contáctanos para más información!",
    nav_about: "SOBRE MÍ",
    back_home: "Volver al inicio",
    about_title: "Quién soy",
    about_p1: "Soy Àlex, llevo más de 30 años viviendo en el Empordà y el mar siempre ha formado parte de quien soy.",
    about_p2: "Desde siempre he sentido una conexión especial con la Costa Brava, sus calas escondidas, sus acantilados y las aguas cristalinas que la hacen única. La pesca, la navegación y la naturaleza son mis grandes pasiones, y a lo largo de los años he tenido la suerte de conocer rincones que solo se pueden descubrir desde el mar.",
    about_p3: "Me gusta compartir esta pasión con las personas que me acompañan a bordo. Por eso organizo paseos en barca pensados para que podáis descubrir la Costa Brava de una manera auténtica, tranquila y cercana. Cada salida es diferente, pero todas tienen algo en común: el amor por este entorno privilegiado que considero mi casa. El objetivo es que mis pasajeros no sean simples turistas, sino invitados que descubren nuestra costa tal como la vivimos los locales. Quiero llevarte a sentir la energía de la tramontana esculpida en las rocas, a bañarte en las aguas cristalinas de Cala Prona, a maravillarte con el contraste geológico de Cap Ras o a relajarte con un buen aperitivo en la majestuosa Bahía de Garbet.",
    about_p4: "Disfruto enseñando los lugares más especiales de la costa y haciendo que cada experiencia sea segura, agradable y llena de buenos recuerdos. Si os gusta el mar tanto como a mí, estaré encantado de compartir con vosotros los secretos y la belleza de este rincón único del Mediterráneo.",
    about_p5: "A bordo de mi embarcación, tú marcas el ritmo. Diseñé estas rutas para ofrecer una experiencia exclusiva, íntima y totalmente flexible, donde la seguridad y la comodidad son absolutas. Me encanta compartir las historias, leyendas y anécdotas marineras de cada rincón que visitamos, pero también sé cuándo ceder el protagonismo al sonido del oleaje para que desconectes por completo. Para mí, no hay mayor satisfacción que ver la cara de sorpresa de quien sube a bordo y saber que, al volver a puerto, se lleva un trozo del corazón de la Costa Brava más auténtica y salvaje. ¡Te espero a bordo para compartir esta aventura juntos!",
  },

  /* -------------------- ANGLÈS -------------------- */
  en: {
    page_title: "Boat tours in Llançà, Port de la Selva & Cap de Creus | Barca Tour Llançà",
    meta_description: "Boat trips from Llançà, Port de la Selva and Colera: discover Cap de Creus, crystal-clear coves, paddle surf and fishing outings along the Costa Brava.",
    nav_private: "PRIVATE TOUR",
    nav_shared: "SHARED TOUR",
    nav_fishing: "FISHING",
    nav_prices: "PRICES",
    nav_bookings: "BOOKINGS",
    nav_excursions: "EXCURSIONS",
    nav_contact: "CONTACT",
    dd_colera: "Llançà / Colera Route",
    dd_creus: "Cap de Creus Route",
    dd_personal: "Personalized Tour",
    dd_sunset: "Sunset Tour",
    pr_2h: "2 h — €180",
    pr_4h: "4 h — €300",
    pr_6h: "6 h — €410",
    hero_title_main: "BOAT TOURS",
    hero_title_sub: "WITH PADDLE SURF",
    hero_subtitle: "Llançà, Port de la Selva, Colera, Portbou and Cap de Creus",
    hero_cta: "View tours",
    w1_title: "Llançà / Colera Route",
    w1_l1: "Duration 2h.", w1_l2: "Max. capacity 6 people.", w1_l3: "Price €180.",
    w2_title: "Cap de Creus Route",
    w2_l1: "Duration 4h (€300)", w2_l2: "Duration 6h (€410)", w2_l3: "Max. capacity 6 people.",
    w3_title: "Custom Route",
    w3_l1: "You choose the route and duration.", w3_l2: "Price on request.",
    w4_title: "Sunset Route",
    w4_l1: "Duration 2h.", w4_l2: "Max. capacity 6 people.", w4_l3: "Price €180.",
    w5_title: "Shared Tour Route",
    w5_l1: "Price: from €18 per person per hour.", w5_l2: "Route and duration to be arranged.",
    w6_title: "Fishing trips",
    w6_l1: "Adult and children's fishing.", w6_l2: "Price: €50 2.5 hours per person.",
    coming_soon: "Photos coming soon",
    reserve_now: "BOOK NOW",
    tag_private: "Private",
    tag_shared: "Shared",
    wa_reserve_msg: "Hello! I'd like to book:",
    wa_reserve_generic: "Hello! I'd like to make a booking.",
    includes_title: "All routes include",
    inc_drink: "Drink",
    inc_snack: "Snack",
    inc_fuel: "Fuel",
    inc_boat: "Boat insurance",
    inc_pax: "Passenger insurance (SOV)",
    inc_skipper: "Skipper",
    gallery_title: "GALLERY",
    inc_seats: "Padded seats",
    inc_paddle: "Paddle surf",
    inc_parasol: "Parasol",
    inc_awning: "Awning",
    intro_text: "Discover the Costa Brava and Cap de Creus aboard our boat. Sail through a natural park of great scenic beauty, with incredible hidden coves of crystal-clear waters, among cliffs sculpted by the tramontana wind. Treat yourself to the best memory of your holidays!",
    footer_tagline: "Boat tours with paddle surf along the Costa Brava.",
    footer_contact_title: "Contact",
    footer_address: "Llançà, Girona",
    footer_follow_title: "Follow us",
    footer_rights: "All rights reserved.",
    route_view: "View route",
    btn_desc: "Description",
    route_back: "Excursions",
    gallery_photos: "Photo gallery",
    route_soon: "Detailed description coming soon. Contact us for more information!",
    nav_about: "ABOUT ME",
    back_home: "Back to home",
    about_title: "About me",
    about_p1: "I'm Àlex. I've lived in the Empordà for over 30 years, and the sea has always been part of who I am.",
    about_p2: "I've always felt a special connection with the Costa Brava, its hidden coves, its cliffs and the crystal-clear waters that make it unique. Fishing, sailing and nature are my great passions, and over the years I've been lucky enough to discover spots that can only be reached from the sea.",
    about_p3: "I love sharing this passion with the people who come aboard with me. That's why I organise boat trips designed for you to discover the Costa Brava in an authentic, relaxed and personal way. Every outing is different, but they all have one thing in common: the love for this privileged setting that I consider my home. My aim is for my passengers to be not mere tourists, but guests who discover our coast just as we locals live it. I want to take you to feel the energy of the tramontana wind sculpted into the rocks, to swim in the crystal-clear waters of Cala Prona, to marvel at the geological contrast of Cap Ras or to relax with a good aperitif in the majestic Garbet Bay.",
    about_p4: "I enjoy showing the most special places along the coast and making every experience safe, pleasant and full of good memories. If you love the sea as much as I do, I'll be delighted to share with you the secrets and the beauty of this unique corner of the Mediterranean.",
    about_p5: "Aboard my boat, you set the pace. I designed these routes to offer an exclusive, intimate and completely flexible experience, where safety and comfort are absolute. I love sharing the stories, legends and seafaring anecdotes of every spot we visit, but I also know when to let the sound of the waves take over so you can switch off completely. For me, there's no greater satisfaction than seeing the look of surprise on the face of someone who comes aboard, and knowing that, on returning to port, they take with them a piece of the heart of the wildest and most authentic Costa Brava. I'll be waiting for you on board to share this adventure together!",
  },

  /* -------------------- FRANCÈS -------------------- */
  fr: {
    page_title: "Excursions en bateau à Llançà, Port de la Selva et Cap de Creus | Barca Tour Llançà",
    meta_description: "Excursions en bateau depuis Llançà, le Port de la Selva et Colera : découvrez le Cap de Creus, criques cristallines, paddle surf et sorties de pêche sur la Costa Brava.",
    nav_private: "TOUR PRIVÉ",
    nav_shared: "TOUR PARTAGÉ",
    nav_fishing: "PÊCHE",
    nav_prices: "TARIFS",
    nav_bookings: "RÉSERVATIONS",
    nav_excursions: "EXCURSIONS",
    nav_contact: "CONTACT",
    dd_colera: "Route Llançà / Colera",
    dd_creus: "Route Cap de Creus",
    dd_personal: "Tour personnalisé",
    dd_sunset: "Tour coucher de soleil",
    pr_2h: "2 h — 180€",
    pr_4h: "4 h — 300€",
    pr_6h: "6 h — 410€",
    hero_title_main: "TOURS EN BATEAU",
    hero_title_sub: "AVEC PADDLE SURF",
    hero_subtitle: "Llançà, le Port de la Selva, Colera, Portbou et Cap de Creus",
    hero_cta: "Voir les excursions",
    w1_title: "Route Llançà / Colera",
    w1_l1: "Durée 2h.", w1_l2: "Capacité max. 6 pers.", w1_l3: "Prix 180€.",
    w2_title: "Route Cap de Creus",
    w2_l1: "Durée 4h (300€)", w2_l2: "Durée 6h (410€)", w2_l3: "Capacité max. 6 pers.",
    w3_title: "Itinéraire personnalisé",
    w3_l1: "Vous choisissez l'itinéraire et la durée.", w3_l2: "Prix à convenir.",
    w4_title: "Route coucher de soleil",
    w4_l1: "Durée 2h.", w4_l2: "Capacité max. 6 pers.", w4_l3: "Prix 180€.",
    w5_title: "Route Tour Partagé",
    w5_l1: "Prix : à partir de 18€ par personne et par heure.", w5_l2: "Itinéraire et durée à convenir.",
    w6_title: "Sorties de pêche",
    w6_l1: "Pêche adultes et enfants.", w6_l2: "Prix : 50€ 2,5 heures par personne.",
    coming_soon: "Photos bientôt disponibles",
    reserve_now: "RÉSERVER",
    tag_private: "Privé",
    tag_shared: "Partagé",
    wa_reserve_msg: "Bonjour ! Je souhaite réserver :",
    wa_reserve_generic: "Bonjour ! Je souhaite faire une réservation.",
    includes_title: "Tous les tours incluent",
    inc_drink: "Boisson",
    inc_snack: "Apéritif",
    inc_fuel: "Carburant",
    inc_boat: "Assurance bateau",
    inc_pax: "Assurance passagers (SOV)",
    inc_skipper: "Skipper",
    gallery_title: "GALERIE",
    inc_seats: "Sièges rembourrés",
    inc_paddle: "Paddle surf",
    inc_parasol: "Parasol",
    inc_awning: "Taud",
    intro_text: "Découvrez la Costa Brava et le Cap de Creus à bord de notre bateau. Naviguez dans un parc naturel d'une grande beauté paysagère, avec d'incroyables criques cachées aux eaux cristallines, entre des falaises sculptées par la tramontane. Offrez-vous le plus beau souvenir de vos vacances !",
    footer_tagline: "Tours en bateau avec paddle surf sur la Costa Brava.",
    footer_contact_title: "Contact",
    footer_address: "Llançà, Gérone",
    footer_follow_title: "Suivez-nous",
    footer_rights: "Tous droits réservés.",
    route_view: "Voir l'itinéraire",
    btn_desc: "Description",
    route_back: "Excursions",
    gallery_photos: "Galerie photos",
    route_soon: "Description détaillée bientôt disponible. Contactez-nous pour plus d'informations !",
    nav_about: "À PROPOS",
    back_home: "Retour à l'accueil",
    about_title: "Qui suis-je",
    about_p1: "Je suis Àlex, je vis dans l'Empordà depuis plus de 30 ans et la mer a toujours fait partie de qui je suis.",
    about_p2: "J'ai toujours ressenti une connexion particulière avec la Costa Brava, ses criques cachées, ses falaises et les eaux cristallines qui la rendent unique. La pêche, la navigation et la nature sont mes grandes passions, et au fil des années j'ai eu la chance de découvrir des coins que l'on ne peut atteindre que depuis la mer.",
    about_p3: "J'aime partager cette passion avec les personnes qui m'accompagnent à bord. C'est pourquoi j'organise des balades en bateau conçues pour que vous puissiez découvrir la Costa Brava d'une manière authentique, tranquille et proche. Chaque sortie est différente, mais toutes ont un point commun : l'amour de ce cadre privilégié que je considère comme ma maison. Mon objectif est que mes passagers ne soient pas de simples touristes, mais des invités qui découvrent notre côte telle que nous, les locaux, la vivons. Je veux vous emmener sentir l'énergie de la tramontane sculptée dans les roches, vous baigner dans les eaux cristallines de Cala Prona, vous émerveiller devant le contraste géologique de Cap Ras ou vous détendre avec un bon apéritif dans la majestueuse baie de Garbet.",
    about_p4: "J'aime montrer les endroits les plus spéciaux de la côte et faire en sorte que chaque expérience soit sûre, agréable et pleine de bons souvenirs. Si vous aimez la mer autant que moi, je serai ravi de partager avec vous les secrets et la beauté de ce coin unique de la Méditerranée.",
    about_p5: "À bord de mon bateau, c'est vous qui donnez le rythme. J'ai conçu ces itinéraires pour offrir une expérience exclusive, intime et totalement flexible, où la sécurité et le confort sont absolus. J'adore partager les histoires, les légendes et les anecdotes marines de chaque coin que nous visitons, mais je sais aussi quand laisser la place au bruit des vagues pour que vous déconnectiez complètement. Pour moi, il n'y a pas de plus grande satisfaction que de voir le visage surpris de celui qui monte à bord et de savoir que, en revenant au port, il emporte un morceau du cœur de la Costa Brava la plus authentique et sauvage. Je vous attends à bord pour partager cette aventure ensemble !",
  },

  /* -------------------- ALEMANY -------------------- */
  de: {
    page_title: "Bootstouren in Llançà, Port de la Selva & Cap de Creus | Barca Tour Llançà",
    meta_description: "Bootstouren ab Llançà, Port de la Selva und Colera: Entdecken Sie das Cap de Creus, kristallklare Buchten, Paddle-Surf und Angelausfahrten an der Costa Brava.",
    nav_private: "PRIVATE TOUR",
    nav_shared: "GETEILTE TOUR",
    nav_fishing: "ANGELN",
    nav_prices: "PREISE",
    nav_bookings: "BUCHUNGEN",
    nav_excursions: "AUSFLÜGE",
    nav_contact: "KONTAKT",
    dd_colera: "Route Llançà / Colera",
    dd_creus: "Route Cap de Creus",
    dd_personal: "Individuelle Tour",
    dd_sunset: "Sonnenuntergangstour",
    pr_2h: "2 Std. — 180€",
    pr_4h: "4 Std. — 300€",
    pr_6h: "6 Std. — 410€",
    hero_title_main: "BOOTSTOUREN",
    hero_title_sub: "MIT PADDLE-SURF",
    hero_subtitle: "Llançà, Port de la Selva, Colera, Portbou und Cap de Creus",
    hero_cta: "Ausflüge ansehen",
    w1_title: "Route Llançà / Colera",
    w1_l1: "Dauer 2 Std.", w1_l2: "Max. 6 Personen.", w1_l3: "Preis 180€.",
    w2_title: "Route Cap de Creus",
    w2_l1: "Dauer 4 Std. (300€)", w2_l2: "Dauer 6 Std. (410€)", w2_l3: "Max. 6 Personen.",
    w3_title: "Individuelle Route",
    w3_l1: "Sie bestimmen Route und Dauer.", w3_l2: "Preis nach Vereinbarung.",
    w4_title: "Sonnenuntergangsroute",
    w4_l1: "Dauer 2 Std.", w4_l2: "Max. 6 Personen.", w4_l3: "Preis 180€.",
    w5_title: "Route Geteilte Tour",
    w5_l1: "Preis: ab 18€ pro Person und Stunde.", w5_l2: "Route und Dauer nach Absprache.",
    w6_title: "Angelausfahrten",
    w6_l1: "Angeln für Erwachsene und Kinder.", w6_l2: "Preis: 50€ 2,5 Stunden pro Person.",
    coming_soon: "Fotos in Kürze",
    reserve_now: "JETZT BUCHEN",
    tag_private: "Privat",
    tag_shared: "Geteilt",
    wa_reserve_msg: "Hallo! Ich möchte gerne buchen:",
    wa_reserve_generic: "Hallo! Ich möchte gerne eine Buchung vornehmen.",
    includes_title: "Alle Touren beinhalten",
    inc_drink: "Getränk",
    inc_snack: "Snack",
    inc_fuel: "Kraftstoff",
    inc_boat: "Bootsversicherung",
    inc_pax: "Passagierversicherung (SOV)",
    inc_skipper: "Skipper",
    gallery_title: "GALERIE",
    inc_seats: "Gepolsterte Sitze",
    inc_paddle: "Paddle-Surf",
    inc_parasol: "Sonnenschirm",
    inc_awning: "Verdeck",
    intro_text: "Entdecken Sie die Costa Brava und das Cap de Creus an Bord unseres Bootes. Fahren Sie durch einen Naturpark von großer landschaftlicher Schönheit, mit unglaublichen versteckten Buchten mit kristallklarem Wasser, zwischen Felsküsten, die von der Tramuntana geformt wurden. Gönnen Sie sich die schönste Erinnerung an Ihren Urlaub!",
    footer_tagline: "Bootstouren mit Paddle-Surf entlang der Costa Brava.",
    footer_contact_title: "Kontakt",
    footer_address: "Llançà, Girona",
    footer_follow_title: "Folgen Sie uns",
    footer_rights: "Alle Rechte vorbehalten.",
    route_view: "Route ansehen",
    btn_desc: "Beschreibung",
    route_back: "Ausflüge",
    gallery_photos: "Fotogalerie",
    route_soon: "Detaillierte Beschreibung in Kürze. Kontaktieren Sie uns für weitere Informationen!",
    nav_about: "ÜBER MICH",
    back_home: "Zur Startseite",
    about_title: "Über mich",
    about_p1: "Ich bin Àlex und lebe seit über 30 Jahren im Empordà – das Meer war schon immer ein Teil von mir.",
    about_p2: "Seit jeher fühle ich eine besondere Verbindung zur Costa Brava, zu ihren versteckten Buchten, ihren Steilküsten und dem kristallklaren Wasser, das sie einzigartig macht. Angeln, Segeln und die Natur sind meine großen Leidenschaften, und im Laufe der Jahre hatte ich das Glück, Orte zu entdecken, die man nur vom Meer aus erreichen kann.",
    about_p3: "Ich teile diese Leidenschaft gerne mit den Menschen, die mich an Bord begleiten. Deshalb organisiere ich Bootsausflüge, die darauf ausgelegt sind, dass Sie die Costa Brava auf authentische, ruhige und persönliche Weise entdecken. Jede Ausfahrt ist anders, aber alle haben eines gemeinsam: die Liebe zu dieser privilegierten Umgebung, die ich als mein Zuhause betrachte. Mein Ziel ist es, dass meine Gäste keine bloßen Touristen sind, sondern Besucher, die unsere Küste so erleben, wie wir Einheimischen sie leben. Ich möchte Sie die Energie der in die Felsen gemeißelten Tramuntana spüren lassen, Sie im kristallklaren Wasser der Cala Prona baden lassen, Sie über den geologischen Kontrast von Cap Ras staunen lassen oder Sie bei einem guten Aperitif in der majestätischen Bucht von Garbet entspannen lassen.",
    about_p4: "Ich zeige mit Freude die schönsten Orte der Küste und sorge dafür, dass jedes Erlebnis sicher, angenehm und voller schöner Erinnerungen ist. Wenn Sie das Meer so lieben wie ich, teile ich gerne die Geheimnisse und die Schönheit dieses einzigartigen Winkels des Mittelmeers mit Ihnen.",
    about_p5: "An Bord meines Bootes bestimmen Sie das Tempo. Ich habe diese Routen entworfen, um ein exklusives, intimes und völlig flexibles Erlebnis zu bieten, bei dem Sicherheit und Komfort absolut im Vordergrund stehen. Ich liebe es, die Geschichten, Legenden und Seemannsanekdoten jedes Ortes zu teilen, den wir besuchen, aber ich weiß auch, wann ich dem Klang der Wellen die Bühne überlassen muss, damit Sie völlig abschalten können. Für mich gibt es keine größere Zufriedenheit, als das überraschte Gesicht derjenigen zu sehen, die an Bord kommen, und zu wissen, dass sie bei der Rückkehr in den Hafen ein Stück vom Herzen der ursprünglichsten und wildesten Costa Brava mitnehmen. Ich erwarte Sie an Bord, um dieses Abenteuer gemeinsam zu erleben!",
  },
};

/* ============================================================
   FOTOS DE CADA FINESTRA (el carrussel gira en passar-hi el cursor)
   La primera de cada llista és la que es veu de sortida.
   ============================================================ */
const slideshows = {
  1: ["img/v1-1.jpg", "img/v1-2.jpg", "img/v1-3.jpg", "img/v1-4.jpg", "img/v1-5.jpg"],
  2: ["img/v2-2.jpg", "img/v2-1.jpg", "img/v2-3.jpg", "img/v2-4.jpg", "img/v2-5.jpg"],
  3: ["img/v3-5.jpg", "img/v3-4.jpg", "img/v3-1.jpg", "img/v3-2.jpg", "img/v3-3.jpg"],
  4: ["img/v4-2.jpg", "img/v4-3.jpg", "img/v4-4.jpg", "img/v4-5.jpg", "img/v4-1.jpg"],
  5: ["img/v5-5.jpg", "img/v5-1.jpg", "img/v5-2.jpg", "img/v5-3.jpg", "img/v5-4.jpg"],
  6: ["img/v6-3.jpg", "img/v6-4.jpg", "img/v6-2.jpg", "img/v6-5.jpg", "img/v6-6.jpg", "img/v6-7.jpg", "img/v6-8.jpg", "img/v6-9.jpg", "img/v6-10.jpg"],
};

/* ============================================================
   CANVI D'IDIOMA
   ============================================================ */
function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] === undefined) return;
    if (el.tagName === "META") el.setAttribute("content", dict[key]);
    else el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );

  // Refà els enllaços de WhatsApp amb el missatge en aquest idioma
  updateReserveLinks(lang);

  localStorage.setItem("preferredLang", lang);
}

/* ============================================================
   SLIDESHOWS
   ============================================================ */
const WHATSAPP = "34635936170"; // +34 635 936 170

function buildSlideshows() {
  document.querySelectorAll(".slideshow").forEach((box) => {
    const imgs = slideshows[box.dataset.window] || [];

    // Sense fotos -> placeholder traduïble
    if (imgs.length === 0) {
      box.classList.add("no-photo");
      box.innerHTML = '<div class="no-photo-label" data-i18n="coming_soon">Fotos próximamente</div>';
      return;
    }

    // Text alt descriptiu (SEO) a partir de la ruta de la finestra
    const altBase = (box.closest(".window")?.getAttribute("data-route") || "Excursión en barco") +
                    " - Barca Tour Llançà";

    // Crea les diapositives apilades (la 1a [índex 0] és la que es veu de sortida)
    imgs.forEach((src, i) => {
      const im = document.createElement("img");
      im.src = src;
      im.alt = altBase;
      im.loading = "lazy";
      im.className = "slide" + (i === 0 ? " active" : "");
      box.appendChild(im);
    });

    if (imgs.length <= 1) return;

    const slides = box.querySelectorAll(".slide");
    let idx = 0;
    let timer = null;

    const goTo = (n) => {
      slides[idx].classList.remove("active");
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("active");
    };
    const startAuto = () => { if (!timer) timer = setInterval(() => goTo(idx + 1), 3000); };
    const stopAuto = () => { clearInterval(timer); timer = null; };

    // Fletxes estil Instagram
    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "slide-arrow prev";
    prev.setAttribute("aria-label", "Anterior");
    prev.innerHTML = "&#8249;";
    const next = document.createElement("button");
    next.type = "button";
    next.className = "slide-arrow next";
    next.setAttribute("aria-label", "Següent");
    next.innerHTML = "&#8250;";
    box.appendChild(prev);
    box.appendChild(next);

    // Clicar una fletxa: canvia i reinicia el comptador dels 3 s
    const manual = (dir) => (e) => {
      e.preventDefault();
      goTo(idx + dir);
      if (timer) { stopAuto(); startAuto(); }
    };
    prev.addEventListener("click", manual(-1));
    next.addEventListener("click", manual(1));

    // Gira (cada 3 s) mentre el cursor és a sobre; en sortir torna a la 1a foto
    box.addEventListener("mouseenter", startAuto);
    box.addEventListener("mouseleave", () => { stopAuto(); goTo(0); });
  });
}

/* Galeria gran: G1..G22, gira sola cada 3 s, fletxes per passar */
function buildGallery() {
  const box = document.getElementById("gallery");
  if (!box) return;
  const prevBtn = box.querySelector(".g-prev");
  const nextBtn = box.querySelector(".g-next");

  for (let i = 1; i <= 22; i++) {
    const im = document.createElement("img");
    im.src = "img/G" + i + ".jpg";
    im.alt = "Excursión en barco en Llançà y Cap de Creus - Barca Tour Llançà";
    im.loading = "lazy";
    im.className = "g-slide" + (i === 1 ? " active" : "");
    box.insertBefore(im, prevBtn); // les diapositives van abans de les fletxes
  }

  const slides = box.querySelectorAll(".g-slide");
  let idx = 0;
  let timer = null;
  const goTo = (n) => {
    slides[idx].classList.remove("active");
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add("active");
  };
  const startAuto = () => { if (!timer) timer = setInterval(() => goTo(idx + 1), 3000); };
  const restart = () => { clearInterval(timer); timer = null; startAuto(); };

  prevBtn.addEventListener("click", () => { goTo(idx - 1); restart(); });
  nextBtn.addEventListener("click", () => { goTo(idx + 1); restart(); });
  startAuto();
}

/* Enllaços de WhatsApp en l'idioma actual (missatge + nom de la ruta traduïts).
   Es torna a executar cada cop que es canvia d'idioma. */
function updateReserveLinks(lang) {
  const dict = translations[lang] || {};
  const base = "https://wa.me/" + WHATSAPP + "?text=";

  // Botó "RESERVA AHORA" de cada finestra
  document.querySelectorAll(".window").forEach((w) => {
    const btn = w.querySelector(".btn-reserve");
    if (!btn) return;
    const title = w.querySelector(".window-title");
    const route = title ? title.textContent.trim() : (w.getAttribute("data-route") || "");
    const msg = (dict.wa_reserve_msg || "Hola! M'agradaria reservar:") + " " + route;
    btn.href = base + encodeURIComponent(msg);
  });

  // Pestanya "RESERVAS" del menú (missatge genèric) — escriptori i mòbil
  document.querySelectorAll('a[data-i18n="nav_bookings"]').forEach((navBooking) => {
    navBooking.href = base + encodeURIComponent(dict.wa_reserve_generic || "Hola! M'agradaria fer una reserva.");
  });
}

/* ============================================================
   INICIALITZACIÓ
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // 0) Evita el salt automàtic en carregar: treu el # de la URL i controla l'scroll.
  //    EXCEPCIÓ: si s'arriba amb un # cap a una secció existent (#tours, #contacte...
  //    des d'una pàgina de ruta), baixa fins a aquella secció en comptes d'anar a dalt.
  const targetId = location.hash ? location.hash.slice(1) : "";
  const targetEl = targetId ? document.getElementById(targetId) : null;
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  if (targetEl) {
    const scrollToTarget = () => targetEl.scrollIntoView();
    scrollToTarget();
    // Reajusta quan les imatges ja han carregat (la pàgina canvia d'alçada)
    window.addEventListener("load", scrollToTarget);
  } else {
    window.scrollTo(0, 0);
  }

  // 1) Slideshows + galeria (els enllaços de reserva els posa setLanguage)
  buildSlideshows();
  buildGallery();

  // 2) Botons d'idioma
  document.querySelectorAll(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
  );

  // 3) Idioma inicial: preferència desada > navegador > castellà
  const saved = localStorage.getItem("preferredLang");
  const browser = (navigator.language || "es").slice(0, 2);
  setLanguage(saved || (translations[browser] ? browser : "es"));

  // 4) Any al peu
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // 5) Capçalera que s'encongeix amb l'scroll
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 6) Menú mòbil (3 botons: excursions, reserves, contacte)
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = mobileMenu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    // Es tanca en clicar un enllaç...
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    // ...en fer scroll...
    window.addEventListener("scroll", () => {
      if (mobileMenu.classList.contains("open")) closeMenu();
    }, { passive: true });
    // ...o en tocar fora del menú.
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("open") && !mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // 7) Animació d'aparició de les finestres en fer scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // 8) Navegació interna SENSE deixar el "#" a la URL (logo, menú, pestanyes de ruta...)
  function flashWindow(el) {
    el.classList.add("visible"); // per si encara no s'havia revelat
    setTimeout(() => {
      el.classList.remove("flash");
      void el.offsetWidth;        // reinicia l'animació
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 1700);
    }, 220);
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id) return;                          // enllaç "#" buit
    e.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });  // respecta el scroll-padding-top
      if (el.classList.contains("window")) flashWindow(el);
    }
    // Manté l'adreça neta: treu el "#..." de la URL
    history.replaceState(null, "", location.pathname + location.search);
  });

  // 9) Clicar una finestra obre la pàgina de detall de la ruta (mateixa pestanya).
  //    No s'activa si es clica una fletxa del carrussel, un enllaç o el botó de reserva.
  document.querySelectorAll(".window[data-href]").forEach((win) => {
    win.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest(".slide-arrow")) return;
      window.location.href = win.dataset.href;
    });
  });
});
