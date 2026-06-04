// La web sempre ha de començar a dalt: no restauris la posició de scroll en recarregar
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

/* ============================================================
   TRADUCCIONS (CA / ES / EN / FR) — JavaScript pur
   ============================================================ */
const translations = {
  /* -------------------- CATALÀ -------------------- */
  ca: {
    page_title: "Excursions en vaixell a Llançà i Cap de Creus | Barca Tour Llançà",
    meta_description: "Descobreix la Costa Brava i el Cap de Creus en barca des de Llançà: cales d'aigües cristal·lines, paddle surf i sortides de pesca. El millor record de les teves vacances!",
    nav_private: "TOUR PRIVAT",
    nav_shared: "TOUR COMPARTIT",
    nav_fishing: "PESCA",
    nav_prices: "PREUS",
    nav_bookings: "RESERVES",
    nav_contact: "CONTACTE",
    dd_colera: "Ruta Llançà / Colera",
    dd_creus: "Ruta Cap de Creus",
    dd_personal: "Tour personal",
    dd_sunset: "Tour Posta de Sol",
    pr_2h: "2 h — 180€",
    pr_4h: "4 h — 300€",
    pr_6h: "6 h — 410€",
    hero_title_main: "TOURS EN BARCA",
    hero_title_sub: "AMB PADDLE SURF",
    hero_subtitle: "Llançà, Colera, Portbou i Cap de Creus",
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
    w5_l1: "Preu: a partir de 18€/hora.", w5_l2: "Ruta i durada a concretar.",
    w6_title: "Sortides de pesca",
    w6_l1: "Pesca per a adults i infantil.", w6_l2: "A partir de 18€/h.", w6_l3: "Ruta i durada a concretar.",
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
  },

  /* -------------------- CASTELLÀ -------------------- */
  es: {
    page_title: "Excursiones en barco en Llançà y Cap de Creus | Barca Tour Llançà",
    meta_description: "Descubre la Costa Brava y Cap de Creus en barca desde Llançà: calas de aguas cristalinas, paddle surf y salidas de pesca. ¡El mejor recuerdo de tus vacaciones!",
    nav_private: "TOUR PRIVADO",
    nav_shared: "TOUR COMPARTIDO",
    nav_fishing: "PESCA",
    nav_prices: "PRECIOS",
    nav_bookings: "RESERVAS",
    nav_contact: "CONTACTO",
    dd_colera: "Ruta Llançà / Colera",
    dd_creus: "Ruta Cap de Creus",
    dd_personal: "Tour personal",
    dd_sunset: "Tour Puesta de Sol",
    pr_2h: "2 h — 180€",
    pr_4h: "4 h — 300€",
    pr_6h: "6 h — 410€",
    hero_title_main: "TOURS EN BARCA",
    hero_title_sub: "CON PADDLE SURF",
    hero_subtitle: "Llançà, Colera, Portbou y Cap de Creus",
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
    w5_l1: "Precio: a partir de 18€/hora.", w5_l2: "Ruta y duración a concretar.",
    w6_title: "Salidas de pesca",
    w6_l1: "Pesca adultos y pesca infantil.", w6_l2: "A partir de 18€/h.", w6_l3: "Ruta y duración a concretar.",
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
  },

  /* -------------------- ANGLÈS -------------------- */
  en: {
    page_title: "Boat tours in Llançà & Cap de Creus | Barca Tour Llançà",
    meta_description: "Discover the Costa Brava and Cap de Creus by boat from Llançà: hidden coves of crystal-clear waters, paddle surf and fishing trips. The best holiday memory!",
    nav_private: "PRIVATE TOUR",
    nav_shared: "SHARED TOUR",
    nav_fishing: "FISHING",
    nav_prices: "PRICES",
    nav_bookings: "BOOKINGS",
    nav_contact: "CONTACT",
    dd_colera: "Llançà / Colera Route",
    dd_creus: "Cap de Creus Route",
    dd_personal: "Personal Tour",
    dd_sunset: "Sunset Tour",
    pr_2h: "2 h — €180",
    pr_4h: "4 h — €300",
    pr_6h: "6 h — €410",
    hero_title_main: "BOAT TOURS",
    hero_title_sub: "WITH PADDLE SURF",
    hero_subtitle: "Llançà, Colera, Portbou and Cap de Creus",
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
    w5_l1: "Price: from €18/hour.", w5_l2: "Route and duration to be arranged.",
    w6_title: "Fishing trips",
    w6_l1: "Adult and children's fishing.", w6_l2: "From €18/h.", w6_l3: "Route and duration to be arranged.",
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
  },

  /* -------------------- FRANCÈS -------------------- */
  fr: {
    page_title: "Excursions en bateau à Llançà et Cap de Creus | Barca Tour Llançà",
    meta_description: "Découvrez la Costa Brava et le Cap de Creus en bateau depuis Llançà : criques aux eaux cristallines, paddle surf et sorties de pêche. Le plus beau souvenir de vacances !",
    nav_private: "TOUR PRIVÉ",
    nav_shared: "TOUR PARTAGÉ",
    nav_fishing: "PÊCHE",
    nav_prices: "TARIFS",
    nav_bookings: "RÉSERVATIONS",
    nav_contact: "CONTACT",
    dd_colera: "Route Llançà / Colera",
    dd_creus: "Route Cap de Creus",
    dd_personal: "Tour personnel",
    dd_sunset: "Tour coucher de soleil",
    pr_2h: "2 h — 180€",
    pr_4h: "4 h — 300€",
    pr_6h: "6 h — 410€",
    hero_title_main: "TOURS EN BATEAU",
    hero_title_sub: "AVEC PADDLE SURF",
    hero_subtitle: "Llançà, Colera, Portbou et Cap de Creus",
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
    w5_l1: "Prix : à partir de 18€/heure.", w5_l2: "Itinéraire et durée à convenir.",
    w6_title: "Sorties de pêche",
    w6_l1: "Pêche adultes et enfants.", w6_l2: "À partir de 18€/h.", w6_l3: "Itinéraire et durée à convenir.",
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
  6: ["img/v6-4.jpg", "img/v6-3.jpg", "img/v6-2.jpg", "img/v6-5.jpg", "img/v6-6.jpg", "img/v6-7.jpg", "img/v6-8.jpg", "img/v6-9.jpg", "img/v6-10.jpg"],
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

  // Pestanya "RESERVAS" del menú (missatge genèric)
  const navBooking = document.querySelector('a[data-i18n="nav_bookings"]');
  if (navBooking) {
    navBooking.href = base + encodeURIComponent(dict.wa_reserve_generic || "Hola! M'agradaria fer una reserva.");
  }
}

/* ============================================================
   INICIALITZACIÓ
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // 0) Evita el salt automàtic en carregar: treu el # de la URL i posa't a dalt
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo(0, 0);

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

  // 6) Menú mòbil
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-row");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
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

  // 8) En clicar una pestanya de ruta, remarca la finestra corresponent
  function highlightWindow() {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (!el || !el.classList.contains("window")) return;
    el.classList.add("visible"); // per si encara no s'havia revelat
    setTimeout(() => {
      el.classList.remove("flash");
      void el.offsetWidth;        // reinicia l'animació
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 1700);
    }, 220);
  }
  window.addEventListener("hashchange", highlightWindow);
});
