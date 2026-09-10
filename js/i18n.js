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
    pr_2h: "2 h — 190€",
    pr_4h: "4 h — 320€",
    pr_6h: "6 h — 430€",
    hero_title_main: "TOURS EN BARCA",
    hero_title_sub: "AMB PADDLE SURF",
    hero_subtitle: "Llançà, el Port de la Selva, Colera, Portbou i Cap de Creus",
    hero_cta: "Veure excursions",
    w1_title: "Ruta Llançà / Colera",
    w1_l1: "Durada 2h.", w1_l2: "Capacitat màxima 6p.", w1_l3: "Preu 190€.",
    w2_title: "Ruta Cap de Creus",
    w2_l1: "Durada 4h (320€)", w2_l2: "Durada 6h (430€)", w2_l3: "Capacitat màxima 6p.",
    w3_title: "Ruta Personalitzada",
    w3_l1: "Tu decideixes ruta i durada.", w3_l2: "Preu a convenir.",
    w4_title: "Ruta Posta de Sol",
    w4_l1: "Durada 2h.", w4_l2: "Capacitat màxima 6p.", w4_l3: "Preu 190€.",
    w5_title: "Ruta Tour Compartit",
    w5_l1: "Preu: 50€ per persona per 2h.", w5_l2: "Ruta i durada a concretar.",
    w6_title: "Sortides de pesca",
    w6_l1: "Pesca per a adults i infantil.", w6_l2: "Preu a consultar.",
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

    /* --- Pagines legals --- */
    legal_updated: "Última actualització: 10 de setembre de 2026",
    footer_legal: "Avís legal",
    footer_privacy: "Política de privacitat",
    prices_vat: "Tots els preus són en euros i inclouen l'IVA.",
    al_title: "Avís legal",
    al_h_owner: "1. Dades identificatives del titular",
    al_owner_intro: "En compliment de l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa de les dades del titular d'aquest lloc web:",
    al_lbl_owner: "Titular",
    al_lbl_nif: "NIF",
    al_lbl_tradename: "Nom comercial",
    al_lbl_address: "Adreça",
    al_lbl_email: "Correu electrònic",
    al_lbl_phone: "Telèfon",
    al_lbl_site: "Lloc web",
    al_lbl_activity: "Activitat",
    al_activity: "Excursions i passejades en embarcació per la Costa Brava",
    al_h_object: "2. Objecte del lloc web",
    al_object: "Aquest lloc web té una finalitat exclusivament informativa i de promoció de les excursions en barca que ofereix el titular. No s'hi fan vendes ni pagaments en línia: les reserves se sol·liciten i es confirmen per telèfon, WhatsApp o correu electrònic.",
    al_h_prices: "3. Preus",
    al_prices: "Tots els preus que apareixen en aquest lloc web estan expressats en euros i inclouen l'IVA aplicable. Els preus poden variar; el preu vàlid és el que es confirmi en el moment d'acceptar la reserva.",
    al_h_booking: "4. Reserves i condicions de l'activitat",
    al_booking: "La navegació depèn de les condicions meteorològiques i de l'estat de la mar. Per motius de seguretat, el patró pot modificar l'itinerari, escurçar la sortida o cancel·lar-la, i en aquest cas ofereix un canvi de data o la devolució de l'import pagat. A bord cal seguir en tot moment les instruccions del patró.",
    al_h_use: "5. Condicions d'ús",
    al_use: "L'accés a aquest lloc web és gratuït i no requereix registre. Qui hi accedeixi es compromet a fer un ús lícit dels continguts i a no dur a terme accions que puguin danyar, inutilitzar o sobrecarregar el lloc o impedir-ne l'ús normal.",
    al_h_ip: "6. Propietat intel·lectual",
    al_ip: "Els textos, fotografies i logotip d'aquest lloc web són obra i propietat del seu titular, i estan protegits per la normativa de propietat intel·lectual. Totes les fotografies del lloc han estat fetes pel mateix titular. No se'n permet la reproducció, distribució ni ús comercial sense autorització prèvia i per escrit.",
    al_h_liability: "7. Responsabilitat i enllaços externs",
    al_liability: "El titular procura que la informació publicada sigui correcta i estigui actualitzada, però no pot garantir que estigui lliure d'errors. Aquest lloc conté enllaços a serveis de tercers (WhatsApp, Instagram, Facebook i Google Maps); el titular no es responsabilitza dels seus continguts ni de les seves polítiques de privacitat.",
    al_h_law: "8. Legislació aplicable",
    al_law: "Aquesta relació es regeix per la legislació espanyola. En cas de conflicte, la persona consumidora es pot adreçar als jutjats del seu domicili i, si ho vol, als organismes de consum de la Generalitat de Catalunya o a la Junta Arbitral de Consum.",
    al_h_lang: "9. Versions idiomàtiques",
    al_lang: "Aquest avís legal s'ofereix en diversos idiomes per facilitar-ne la comprensió. En cas de discrepància entre versions, preval la versió en castellà.",
    pp_title: "Política de privacitat",
    pp_h_resp: "1. Responsable del tractament",
    pp_h_data: "2. Quines dades tractem i d'on surten",
    pp_data1: "Aquest lloc web no té formularis i no recull dades per si mateix: no hi ha registre, ni compra en línia, ni cap eina que reculli informació sobre qui el visita.",
    pp_data2: "Només tractem les dades que ens facilites voluntàriament quan contactes amb nosaltres per telèfon, WhatsApp o correu electrònic: el teu nom, el teu telèfon o correu i les dades necessàries per a la reserva (data, nombre de persones i el que ens vulguis explicar sobre la sortida).",
    pp_h_purpose: "3. Per a què les fem servir",
    pp_purpose: "Per respondre les teves consultes, gestionar i confirmar les reserves, organitzar la sortida i complir les obligacions fiscals i comptables derivades del servei prestat. No fem enviaments comercials ni elaborem perfils, i no hi ha decisions automatitzades de cap mena.",
    pp_h_legal: "4. Base legal",
    pp_legal: "El tractament de les dades d'una consulta o reserva es basa en l'aplicació de mesures precontractuals i en l'execució del contracte (article 6.1.b del RGPD). La conservació de factures i registres comptables es basa en el compliment d'obligacions legals (article 6.1.c del RGPD).",
    pp_h_time: "5. Quant de temps les conservem",
    pp_time: "Les dades d'una reserva es conserven mentre dura la relació i després durant els terminis que exigeix la normativa fiscal i mercantil. Els missatges que no acaben en reserva s'eliminen quan deixen de ser necessaris per atendre la consulta.",
    pp_h_share: "6. Amb qui es comparteixen",
    pp_share: "No venem ni cedim les teves dades a ningú. Només hi accedeixen les administracions públiques quan la llei ho exigeix i els proveïdors necessaris per poder treballar:",
    pp_share_l1: "Microsoft (Outlook), per al correu electrònic.",
    pp_share_l2: "WhatsApp Ireland Ltd. (grup Meta), per als missatges de WhatsApp.",
    pp_share_l3: "GitHub, Inc., que allotja aquest lloc web i registra l'adreça IP de les visites als seus registres tècnics de servidor.",
    pp_share_l4: "L'assessoria fiscal que porta la comptabilitat, quan correspon.",
    pp_share2: "Alguns d'aquests proveïdors poden tractar dades fora de l'Espai Econòmic Europeu. En aquest cas, les transferències s'emparen en les garanties que preveu el RGPD, com ara les clàusules contractuals tipus aprovades per la Comissió Europea o el marc d'adequació aplicable.",
    pp_h_rights: "7. Els teus drets",
    pp_rights1: "Pots demanar-nos accedir a les teves dades, rectificar-les, suprimir-les, limitar-ne o oposar-te al tractament i sol·licitar-ne la portabilitat. Per fer-ho, escriu a",
    pp_rights2: "indicant quin dret vols exercir. Si consideres que no hem atès bé la teva petició, pots reclamar davant l'Agència Espanyola de Protecció de Dades:",
    pp_h_cookies: "8. Galetes i emmagatzematge local",
    pp_cookies1: "Aquest lloc web no utilitza galetes, ni eines d'analítica, ni píxels publicitaris, ni cap sistema de seguiment. Per això no hi veuràs cap avís de galetes.",
    pp_cookies2: "L'única cosa que es desa al teu navegador és l'idioma que tries, mitjançant l'emmagatzematge local (localStorage), per no haver-lo de tornar a triar a cada visita. És una preferència teva, no t'identifica i no s'envia a cap servidor. La pots esborrar des de les opcions del navegador.",
    pp_cookies3: "La tipografia del web està allotjada al nostre propi servidor. En carregar la pàgina no es fa cap connexió a servidors externs, ni tan sols per a la lletra.",
    pp_h_photos: "9. Fotografies",
    pp_photos: "Si durant una sortida es fan fotografies en què apareguis de manera identificable i les volem publicar al lloc web o a les xarxes socials, abans et demanarem el consentiment exprés. En el cas de menors d'edat, caldrà el consentiment de la mare, el pare o el tutor legal. Pots retirar aquest consentiment en qualsevol moment escrivint-nos.",
    pp_h_security: "10. Seguretat",
    pp_security: "Apliquem mesures raonables per protegir les dades que ens facilites i evitar que es perdin o que hi accedeixin persones no autoritzades.",
    pp_h_changes: "11. Canvis en aquesta política",
    pp_changes: "Aquesta política es pot actualitzar si canvia l'activitat o la normativa. La data que apareix al principi indica l'última versió publicada. En cas de discrepància entre versions idiomàtiques, preval la versió en castellà.",
    al_lbl_fiscal: "Domicili fiscal",
    al_lbl_activity_addr: "Adreça de l'activitat",
    al_lbl_boat: "Embarcació",
    al_lbl_reg: "Matrícula",
    al_boat_list: "llista 6a (xàrter i transport de passatgers)",
    al_lbl_insurance: "Assegurança de responsabilitat civil",
    al_lbl_policy: "pòlissa",
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
    pr_2h: "2 h — 190€",
    pr_4h: "4 h — 320€",
    pr_6h: "6 h — 430€",
    hero_title_main: "TOURS EN BARCA",
    hero_title_sub: "CON PADDLE SURF",
    hero_subtitle: "Llançà, el Port de la Selva, Colera, Portbou y Cap de Creus",
    hero_cta: "Ver excursiones",
    w1_title: "Ruta Llançà / Colera",
    w1_l1: "Duración 2h.", w1_l2: "Capacidad máxima 6p.", w1_l3: "Precio 190€.",
    w2_title: "Ruta Cap de Creus",
    w2_l1: "Duración 4h (320€)", w2_l2: "Duración 6h (430€)", w2_l3: "Capacidad máxima 6p.",
    w3_title: "Ruta Personalizada",
    w3_l1: "Tú decides ruta y duración.", w3_l2: "Precio a convenir.",
    w4_title: "Ruta Puesta de Sol",
    w4_l1: "Duración 2h.", w4_l2: "Capacidad máxima 6p.", w4_l3: "Precio 190€.",
    w5_title: "Ruta Tour Compartido",
    w5_l1: "Precio: 50€ por persona por 2h.", w5_l2: "Ruta y duración a concretar.",
    w6_title: "Salidas de pesca",
    w6_l1: "Pesca adultos y pesca infantil.", w6_l2: "Precio a consultar.",
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

    /* --- Pagines legals --- */
    legal_updated: "Última actualización: 10 de septiembre de 2026",
    footer_legal: "Aviso legal",
    footer_privacy: "Política de privacidad",
    prices_vat: "Todos los precios están en euros e incluyen el IVA.",
    al_title: "Aviso legal",
    al_h_owner: "1. Datos identificativos del titular",
    al_owner_intro: "En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:",
    al_lbl_owner: "Titular",
    al_lbl_nif: "NIF",
    al_lbl_tradename: "Nombre comercial",
    al_lbl_address: "Dirección",
    al_lbl_email: "Correo electrónico",
    al_lbl_phone: "Teléfono",
    al_lbl_site: "Sitio web",
    al_lbl_activity: "Actividad",
    al_activity: "Excursiones y paseos en embarcación por la Costa Brava",
    al_h_object: "2. Objeto del sitio web",
    al_object: "Este sitio web tiene una finalidad exclusivamente informativa y de promoción de las excursiones en barca ofrecidas por el titular. No se realizan ventas ni pagos en línea: las reservas se solicitan y se confirman por teléfono, WhatsApp o correo electrónico.",
    al_h_prices: "3. Precios",
    al_prices: "Todos los precios que aparecen en este sitio web están expresados en euros e incluyen el IVA aplicable. Los precios pueden variar; el precio válido es el que se confirme en el momento de aceptar la reserva.",
    al_h_booking: "4. Reservas y condiciones de la actividad",
    al_booking: "La navegación depende de las condiciones meteorológicas y del estado del mar. Por motivos de seguridad, el patrón puede modificar el itinerario, acortar la salida o cancelarla, ofreciendo en ese caso un cambio de fecha o la devolución del importe abonado. A bordo deben seguirse en todo momento las instrucciones del patrón.",
    al_h_use: "5. Condiciones de uso",
    al_use: "El acceso a este sitio web es gratuito y no requiere registro. Quien acceda se compromete a hacer un uso lícito de sus contenidos y a no realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio o impedir su uso normal.",
    al_h_ip: "6. Propiedad intelectual",
    al_ip: "Los textos, fotografías y logotipo de este sitio web son obra y propiedad de su titular, y están protegidos por la normativa de propiedad intelectual. Todas las fotografías del sitio han sido realizadas por el propio titular. No se permite su reproducción, distribución ni uso comercial sin autorización previa y por escrito.",
    al_h_liability: "7. Responsabilidad y enlaces externos",
    al_liability: "El titular procura que la información publicada sea correcta y esté actualizada, pero no puede garantizar que esté libre de errores. Este sitio contiene enlaces a servicios de terceros (WhatsApp, Instagram, Facebook y Google Maps); el titular no se responsabiliza de sus contenidos ni de sus políticas de privacidad.",
    al_h_law: "8. Legislación aplicable",
    al_law: "Esta relación se rige por la legislación española. En caso de conflicto, la persona consumidora podrá dirigirse a los juzgados de su domicilio y, si lo desea, a los organismos de consumo de la Generalitat de Catalunya o a la Junta Arbitral de Consumo.",
    al_h_lang: "9. Versiones idiomáticas",
    al_lang: "Este aviso legal se ofrece en varios idiomas para facilitar su comprensión. En caso de discrepancia entre versiones, prevalece la versión en castellano.",
    pp_title: "Política de privacidad",
    pp_h_resp: "1. Responsable del tratamiento",
    pp_h_data: "2. Qué datos tratamos y de dónde salen",
    pp_data1: "Este sitio web no tiene formularios y no recoge datos por sí mismo: no hay registro, ni compra en línea, ni ninguna herramienta que recopile información sobre quien lo visita.",
    pp_data2: "Solo tratamos los datos que nos facilitas voluntariamente cuando contactas con nosotros por teléfono, WhatsApp o correo electrónico: tu nombre, tu teléfono o correo y los datos necesarios para la reserva (fecha, número de personas y lo que quieras contarnos sobre la salida).",
    pp_h_purpose: "3. Para qué los usamos",
    pp_purpose: "Para responder a tus consultas, gestionar y confirmar las reservas, organizar la salida y cumplir con las obligaciones fiscales y contables derivadas del servicio prestado. No hacemos envíos comerciales ni elaboramos perfiles, y no hay decisiones automatizadas de ningún tipo.",
    pp_h_legal: "4. Base legal",
    pp_legal: "El tratamiento de los datos de una consulta o reserva se basa en la aplicación de medidas precontractuales y en la ejecución del contrato (artículo 6.1.b del RGPD). La conservación de facturas y registros contables se basa en el cumplimiento de obligaciones legales (artículo 6.1.c del RGPD).",
    pp_h_time: "5. Cuánto tiempo los conservamos",
    pp_time: "Los datos de una reserva se conservan mientras dura la relación y después durante los plazos que exige la normativa fiscal y mercantil. Los mensajes que no acaban en reserva se eliminan cuando dejan de ser necesarios para atender la consulta.",
    pp_h_share: "6. Con quién se comparten",
    pp_share: "No vendemos ni cedemos tus datos a nadie. Solo acceden a ellos las administraciones públicas cuando la ley lo exige y los proveedores necesarios para poder trabajar:",
    pp_share_l1: "Microsoft (Outlook), para el correo electrónico.",
    pp_share_l2: "WhatsApp Ireland Ltd. (grupo Meta), para los mensajes de WhatsApp.",
    pp_share_l3: "GitHub, Inc., que aloja este sitio web y registra la dirección IP de las visitas en sus registros técnicos de servidor.",
    pp_share_l4: "La asesoría fiscal que lleva la contabilidad, cuando corresponde.",
    pp_share2: "Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En ese caso, las transferencias se amparan en las garantías que prevé el RGPD, como las cláusulas contractuales tipo aprobadas por la Comisión Europea o el marco de adecuación aplicable.",
    pp_h_rights: "7. Tus derechos",
    pp_rights1: "Puedes pedirnos acceder a tus datos, rectificarlos, suprimirlos, limitar u oponerte a su tratamiento y solicitar su portabilidad. Para hacerlo, escribe a",
    pp_rights2: "indicando qué derecho quieres ejercer. Si consideras que no hemos atendido bien tu petición, puedes reclamar ante la Agencia Española de Protección de Datos:",
    pp_h_cookies: "8. Cookies y almacenamiento local",
    pp_cookies1: "Este sitio web no utiliza cookies, ni herramientas de analítica, ni píxeles publicitarios, ni ningún sistema de seguimiento. Por eso no verás ningún aviso de cookies.",
    pp_cookies2: "Lo único que se guarda en tu navegador es el idioma que eliges, mediante el almacenamiento local (localStorage), para no tener que volver a elegirlo en cada visita. Es una preferencia tuya, no te identifica y no se envía a ningún servidor. Puedes borrarla desde las opciones de tu navegador.",
    pp_cookies3: "La tipografía del sitio está alojada en nuestro propio servidor. Al cargar la página no se realiza ninguna conexión a servidores externos, ni siquiera para la fuente.",
    pp_h_photos: "9. Fotografías",
    pp_photos: "Si durante una salida se toman fotografías en las que aparezcas de forma identificable y queremos publicarlas en el sitio web o en las redes sociales, te pediremos antes tu consentimiento expreso. En el caso de menores de edad, hará falta el consentimiento de su madre, padre o tutor legal. Puedes retirar ese consentimiento en cualquier momento escribiéndonos.",
    pp_h_security: "10. Seguridad",
    pp_security: "Aplicamos medidas razonables para proteger los datos que nos facilitas y evitar que se pierdan o que accedan a ellos personas no autorizadas.",
    pp_h_changes: "11. Cambios en esta política",
    pp_changes: "Esta política puede actualizarse si cambia la actividad o la normativa. La fecha que aparece al principio indica la última versión publicada. En caso de discrepancia entre versiones idiomáticas, prevalece la versión en castellano.",
    al_lbl_fiscal: "Domicilio fiscal",
    al_lbl_activity_addr: "Dirección de la actividad",
    al_lbl_boat: "Embarcación",
    al_lbl_reg: "Matrícula",
    al_boat_list: "lista 6ª (chárter y transporte de pasajeros)",
    al_lbl_insurance: "Seguro de responsabilidad civil",
    al_lbl_policy: "póliza",
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
    pr_2h: "2 h — €190",
    pr_4h: "4 h — €320",
    pr_6h: "6 h — €430",
    hero_title_main: "BOAT TOURS",
    hero_title_sub: "WITH PADDLE SURF",
    hero_subtitle: "Llançà, Port de la Selva, Colera, Portbou and Cap de Creus",
    hero_cta: "View tours",
    w1_title: "Llançà / Colera Route",
    w1_l1: "Duration 2h.", w1_l2: "Max. capacity 6 people.", w1_l3: "Price €190.",
    w2_title: "Cap de Creus Route",
    w2_l1: "Duration 4h (€320)", w2_l2: "Duration 6h (€430)", w2_l3: "Max. capacity 6 people.",
    w3_title: "Custom Route",
    w3_l1: "You choose the route and duration.", w3_l2: "Price on request.",
    w4_title: "Sunset Route",
    w4_l1: "Duration 2h.", w4_l2: "Max. capacity 6 people.", w4_l3: "Price €190.",
    w5_title: "Shared Tour Route",
    w5_l1: "Price: €50 per person for 2h.", w5_l2: "Route and duration to be arranged.",
    w6_title: "Fishing trips",
    w6_l1: "Adult and children's fishing.", w6_l2: "Price on request.",
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

    /* --- Pagines legals --- */
    legal_updated: "Last updated: 10 September 2026",
    footer_legal: "Legal notice",
    footer_privacy: "Privacy policy",
    prices_vat: "All prices are in euros and include VAT.",
    al_title: "Legal notice",
    al_h_owner: "1. Owner identification",
    al_owner_intro: "In accordance with Article 10 of Spanish Act 34/2002 on information society services and electronic commerce (LSSI-CE), the details of the owner of this website are as follows:",
    al_lbl_owner: "Owner",
    al_lbl_nif: "Tax ID (NIF)",
    al_lbl_tradename: "Trade name",
    al_lbl_address: "Address",
    al_lbl_email: "Email",
    al_lbl_phone: "Phone",
    al_lbl_site: "Website",
    al_lbl_activity: "Activity",
    al_activity: "Boat trips and excursions along the Costa Brava",
    al_h_object: "2. Purpose of this website",
    al_object: "This website is for information and promotional purposes only, regarding the boat trips offered by the owner. No sales or payments are made online: bookings are requested and confirmed by phone, WhatsApp or email.",
    al_h_prices: "3. Prices",
    al_prices: "All prices shown on this website are in euros and include the applicable VAT. Prices may change; the valid price is the one confirmed when the booking is accepted.",
    al_h_booking: "4. Bookings and conditions of the activity",
    al_booking: "Sailing depends on the weather and sea conditions. For safety reasons, the skipper may change the route, shorten the trip or cancel it, in which case a new date or a refund of the amount paid will be offered. The skipper's instructions must be followed at all times on board.",
    al_h_use: "5. Terms of use",
    al_use: "Access to this website is free and requires no registration. Users agree to make lawful use of its content and not to carry out actions that could damage, disable or overload the site or prevent its normal use.",
    al_h_ip: "6. Intellectual property",
    al_ip: "The texts, photographs and logo on this website are the work and property of its owner and are protected by intellectual property law. All the photographs on this site were taken by the owner. Their reproduction, distribution or commercial use without prior written authorisation is not permitted.",
    al_h_liability: "7. Liability and external links",
    al_liability: "The owner endeavours to keep the published information correct and up to date but cannot guarantee that it is free of errors. This site contains links to third-party services (WhatsApp, Instagram, Facebook and Google Maps); the owner is not responsible for their content or their privacy policies.",
    al_h_law: "8. Applicable law",
    al_law: "This relationship is governed by Spanish law. In the event of a dispute, consumers may go to the courts of their place of residence and, if they wish, to the consumer protection bodies of the Generalitat de Catalunya or to the Consumer Arbitration Board.",
    al_h_lang: "9. Language versions",
    al_lang: "This legal notice is provided in several languages for ease of understanding. In the event of any discrepancy between versions, the Spanish version prevails.",
    pp_title: "Privacy policy",
    pp_h_resp: "1. Data controller",
    pp_h_data: "2. What data we process and where it comes from",
    pp_data1: "This website has no forms and does not collect any data by itself: there is no registration, no online purchase and no tool that gathers information about visitors.",
    pp_data2: "We only process the data you voluntarily give us when you contact us by phone, WhatsApp or email: your name, your phone number or email address, and the details needed for the booking (date, number of people and anything you wish to tell us about the trip).",
    pp_h_purpose: "3. What we use it for",
    pp_purpose: "To answer your enquiries, manage and confirm bookings, organise the trip and comply with the tax and accounting obligations arising from the service provided. We do not send marketing communications, we do not build profiles and there is no automated decision-making of any kind.",
    pp_h_legal: "4. Legal basis",
    pp_legal: "Processing the data of an enquiry or booking is based on pre-contractual measures and performance of the contract (Article 6(1)(b) GDPR). Keeping invoices and accounting records is based on compliance with legal obligations (Article 6(1)(c) GDPR).",
    pp_h_time: "5. How long we keep it",
    pp_time: "Booking data is kept for as long as the relationship lasts and afterwards for the periods required by tax and commercial law. Messages that do not lead to a booking are deleted once they are no longer needed to deal with the enquiry.",
    pp_h_share: "6. Who it is shared with",
    pp_share: "We do not sell or transfer your data to anyone. It is only accessed by public authorities where the law requires it and by the providers we need in order to work:",
    pp_share_l1: "Microsoft (Outlook), for email.",
    pp_share_l2: "WhatsApp Ireland Ltd. (Meta group), for WhatsApp messages.",
    pp_share_l3: "GitHub, Inc., which hosts this website and records visitors' IP addresses in its technical server logs.",
    pp_share_l4: "The tax advisor who handles the accounts, where applicable.",
    pp_share2: "Some of these providers may process data outside the European Economic Area. In that case, transfers rely on the safeguards provided for by the GDPR, such as the standard contractual clauses approved by the European Commission or the applicable adequacy framework.",
    pp_h_rights: "7. Your rights",
    pp_rights1: "You may ask us to access, rectify or erase your data, to restrict or object to its processing and to request its portability. To do so, write to",
    pp_rights2: "stating which right you wish to exercise. If you believe we have not handled your request properly, you may lodge a complaint with the Spanish Data Protection Agency:",
    pp_h_cookies: "8. Cookies and local storage",
    pp_cookies1: "This website does not use cookies, analytics tools, advertising pixels or any tracking system. That is why you will not see any cookie banner.",
    pp_cookies2: "The only thing stored in your browser is the language you choose, using local storage (localStorage), so that you do not have to select it again on every visit. It is your own preference, it does not identify you and it is not sent to any server. You can delete it from your browser settings.",
    pp_cookies3: "The site's typeface is hosted on our own server. Loading the page makes no connection to any external server, not even for the font.",
    pp_h_photos: "9. Photographs",
    pp_photos: "If photographs in which you are identifiable are taken during a trip and we wish to publish them on the website or on social media, we will ask for your express consent beforehand. In the case of minors, the consent of their mother, father or legal guardian is required. You may withdraw that consent at any time by writing to us.",
    pp_h_security: "10. Security",
    pp_security: "We apply reasonable measures to protect the data you provide and to prevent it from being lost or accessed by unauthorised persons.",
    pp_h_changes: "11. Changes to this policy",
    pp_changes: "This policy may be updated if the activity or the applicable regulations change. The date shown at the top indicates the latest published version. In the event of any discrepancy between language versions, the Spanish version prevails.",
    al_lbl_fiscal: "Registered address",
    al_lbl_activity_addr: "Business address",
    al_lbl_boat: "Vessel",
    al_lbl_reg: "Registration",
    al_boat_list: "list 6 (charter and passenger transport)",
    al_lbl_insurance: "Public liability insurance",
    al_lbl_policy: "policy no.",
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
    pr_2h: "2 h — 190€",
    pr_4h: "4 h — 320€",
    pr_6h: "6 h — 430€",
    hero_title_main: "TOURS EN BATEAU",
    hero_title_sub: "AVEC PADDLE SURF",
    hero_subtitle: "Llançà, le Port de la Selva, Colera, Portbou et Cap de Creus",
    hero_cta: "Voir les excursions",
    w1_title: "Route Llançà / Colera",
    w1_l1: "Durée 2h.", w1_l2: "Capacité max. 6 pers.", w1_l3: "Prix 190€.",
    w2_title: "Route Cap de Creus",
    w2_l1: "Durée 4h (320€)", w2_l2: "Durée 6h (430€)", w2_l3: "Capacité max. 6 pers.",
    w3_title: "Itinéraire personnalisé",
    w3_l1: "Vous choisissez l'itinéraire et la durée.", w3_l2: "Prix à convenir.",
    w4_title: "Route coucher de soleil",
    w4_l1: "Durée 2h.", w4_l2: "Capacité max. 6 pers.", w4_l3: "Prix 190€.",
    w5_title: "Route Tour Partagé",
    w5_l1: "Prix : 50€ par personne pour 2h.", w5_l2: "Itinéraire et durée à convenir.",
    w6_title: "Sorties de pêche",
    w6_l1: "Pêche adultes et enfants.", w6_l2: "Prix sur demande.",
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

    /* --- Pagines legals --- */
    legal_updated: "Dernière mise à jour : 10 septembre 2026",
    footer_legal: "Mentions légales",
    footer_privacy: "Politique de confidentialité",
    prices_vat: "Tous les prix sont en euros, TVA comprise.",
    al_title: "Mentions légales",
    al_h_owner: "1. Identification du titulaire",
    al_owner_intro: "Conformément à l'article 10 de la loi espagnole 34/2002 relative aux services de la société de l'information et au commerce électronique (LSSI-CE), les données du titulaire de ce site web sont les suivantes :",
    al_lbl_owner: "Titulaire",
    al_lbl_nif: "NIF (numéro fiscal)",
    al_lbl_tradename: "Nom commercial",
    al_lbl_address: "Adresse",
    al_lbl_email: "Courriel",
    al_lbl_phone: "Téléphone",
    al_lbl_site: "Site web",
    al_lbl_activity: "Activité",
    al_activity: "Excursions et promenades en bateau sur la Costa Brava",
    al_h_object: "2. Objet du site web",
    al_object: "Ce site web a une finalité exclusivement informative et promotionnelle concernant les excursions en bateau proposées par le titulaire. Aucune vente ni aucun paiement n'est effectué en ligne : les réservations sont demandées et confirmées par téléphone, WhatsApp ou courriel.",
    al_h_prices: "3. Prix",
    al_prices: "Tous les prix indiqués sur ce site sont exprimés en euros et incluent la TVA applicable. Les prix peuvent varier ; le prix valable est celui confirmé au moment de l'acceptation de la réservation.",
    al_h_booking: "4. Réservations et conditions de l'activité",
    al_booking: "La navigation dépend des conditions météorologiques et de l'état de la mer. Pour des raisons de sécurité, le skipper peut modifier l'itinéraire, écourter la sortie ou l'annuler ; dans ce cas, un changement de date ou le remboursement du montant versé est proposé. À bord, les instructions du skipper doivent être suivies à tout moment.",
    al_h_use: "5. Conditions d'utilisation",
    al_use: "L'accès à ce site web est gratuit et ne nécessite aucune inscription. L'utilisateur s'engage à faire un usage licite de son contenu et à ne pas réaliser d'actions susceptibles d'endommager, de rendre inutilisable ou de surcharger le site, ou d'en empêcher l'usage normal.",
    al_h_ip: "6. Propriété intellectuelle",
    al_ip: "Les textes, photographies et logo de ce site web sont l'œuvre et la propriété de son titulaire, et sont protégés par la législation sur la propriété intellectuelle. Toutes les photographies du site ont été réalisées par le titulaire lui-même. Leur reproduction, distribution ou utilisation commerciale sans autorisation écrite préalable n'est pas permise.",
    al_h_liability: "7. Responsabilité et liens externes",
    al_liability: "Le titulaire veille à ce que les informations publiées soient correctes et à jour, mais ne peut garantir qu'elles soient exemptes d'erreurs. Ce site contient des liens vers des services tiers (WhatsApp, Instagram, Facebook et Google Maps) ; le titulaire n'est pas responsable de leurs contenus ni de leurs politiques de confidentialité.",
    al_h_law: "8. Législation applicable",
    al_law: "Cette relation est régie par la législation espagnole. En cas de litige, le consommateur peut s'adresser aux tribunaux de son domicile et, s'il le souhaite, aux organismes de consommation de la Generalitat de Catalunya ou à la Junta Arbitral de Consumo.",
    al_h_lang: "9. Versions linguistiques",
    al_lang: "Ces mentions légales sont proposées en plusieurs langues pour en faciliter la compréhension. En cas de divergence entre les versions, la version espagnole prévaut.",
    pp_title: "Politique de confidentialité",
    pp_h_resp: "1. Responsable du traitement",
    pp_h_data: "2. Quelles données nous traitons et d'où elles proviennent",
    pp_data1: "Ce site web ne comporte aucun formulaire et ne collecte aucune donnée par lui-même : ni inscription, ni achat en ligne, ni outil recueillant des informations sur les visiteurs.",
    pp_data2: "Nous traitons uniquement les données que vous nous communiquez volontairement lorsque vous nous contactez par téléphone, WhatsApp ou courriel : votre nom, votre téléphone ou courriel et les données nécessaires à la réservation (date, nombre de personnes et ce que vous souhaitez nous indiquer sur la sortie).",
    pp_h_purpose: "3. À quelles fins nous les utilisons",
    pp_purpose: "Pour répondre à vos demandes, gérer et confirmer les réservations, organiser la sortie et respecter les obligations fiscales et comptables découlant du service fourni. Nous n'envoyons pas de communications commerciales, nous n'établissons pas de profils et il n'existe aucune décision automatisée.",
    pp_h_legal: "4. Base légale",
    pp_legal: "Le traitement des données d'une demande ou d'une réservation repose sur les mesures précontractuelles et l'exécution du contrat (article 6.1.b du RGPD). La conservation des factures et des registres comptables repose sur le respect d'obligations légales (article 6.1.c du RGPD).",
    pp_h_time: "5. Combien de temps nous les conservons",
    pp_time: "Les données d'une réservation sont conservées pendant la durée de la relation, puis pendant les délais exigés par la réglementation fiscale et commerciale. Les messages qui n'aboutissent pas à une réservation sont supprimés lorsqu'ils ne sont plus nécessaires au traitement de la demande.",
    pp_h_share: "6. Avec qui elles sont partagées",
    pp_share: "Nous ne vendons ni ne cédons vos données à quiconque. Seules les administrations publiques, lorsque la loi l'exige, et les prestataires nécessaires à notre activité y ont accès :",
    pp_share_l1: "Microsoft (Outlook), pour le courrier électronique.",
    pp_share_l2: "WhatsApp Ireland Ltd. (groupe Meta), pour les messages WhatsApp.",
    pp_share_l3: "GitHub, Inc., qui héberge ce site web et enregistre l'adresse IP des visites dans ses journaux techniques de serveur.",
    pp_share_l4: "Le cabinet comptable qui gère la comptabilité, le cas échéant.",
    pp_share2: "Certains de ces prestataires peuvent traiter des données en dehors de l'Espace économique européen. Dans ce cas, les transferts s'appuient sur les garanties prévues par le RGPD, telles que les clauses contractuelles types approuvées par la Commission européenne ou le cadre d'adéquation applicable.",
    pp_h_rights: "7. Vos droits",
    pp_rights1: "Vous pouvez nous demander d'accéder à vos données, de les rectifier, de les supprimer, d'en limiter le traitement ou de vous y opposer, ainsi que d'en demander la portabilité. Pour cela, écrivez à",
    pp_rights2: "en indiquant le droit que vous souhaitez exercer. Si vous estimez que votre demande n'a pas été correctement traitée, vous pouvez saisir l'Agence espagnole de protection des données :",
    pp_h_cookies: "8. Cookies et stockage local",
    pp_cookies1: "Ce site web n'utilise ni cookies, ni outils d'analyse, ni pixels publicitaires, ni aucun système de suivi. C'est pourquoi aucun bandeau de cookies n'apparaît.",
    pp_cookies2: "La seule chose enregistrée dans votre navigateur est la langue que vous choisissez, au moyen du stockage local (localStorage), afin de ne pas avoir à la sélectionner à chaque visite. Il s'agit de votre préférence, elle ne vous identifie pas et n'est envoyée à aucun serveur. Vous pouvez la supprimer depuis les options de votre navigateur.",
    pp_cookies3: "La typographie du site est hébergée sur notre propre serveur. Le chargement de la page n'établit aucune connexion vers des serveurs externes, pas même pour la police.",
    pp_h_photos: "9. Photographies",
    pp_photos: "Si des photographies sur lesquelles vous êtes identifiable sont prises pendant une sortie et que nous souhaitons les publier sur le site web ou sur les réseaux sociaux, nous vous demanderons au préalable votre consentement exprès. Dans le cas de mineurs, le consentement de la mère, du père ou du tuteur légal est nécessaire. Vous pouvez retirer ce consentement à tout moment en nous écrivant.",
    pp_h_security: "10. Sécurité",
    pp_security: "Nous appliquons des mesures raisonnables pour protéger les données que vous nous fournissez et éviter qu'elles ne soient perdues ou consultées par des personnes non autorisées.",
    pp_h_changes: "11. Modifications de cette politique",
    pp_changes: "Cette politique peut être mise à jour en cas de changement d'activité ou de réglementation. La date indiquée au début correspond à la dernière version publiée. En cas de divergence entre les versions linguistiques, la version espagnole prévaut.",
    al_lbl_fiscal: "Domicile fiscal",
    al_lbl_activity_addr: "Adresse de l'activité",
    al_lbl_boat: "Bateau",
    al_lbl_reg: "Immatriculation",
    al_boat_list: "liste 6 (charter et transport de passagers)",
    al_lbl_insurance: "Assurance responsabilité civile",
    al_lbl_policy: "police n°",
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
    pr_2h: "2 Std. — 190€",
    pr_4h: "4 Std. — 320€",
    pr_6h: "6 Std. — 430€",
    hero_title_main: "BOOTSTOUREN",
    hero_title_sub: "MIT PADDLE-SURF",
    hero_subtitle: "Llançà, Port de la Selva, Colera, Portbou und Cap de Creus",
    hero_cta: "Ausflüge ansehen",
    w1_title: "Route Llançà / Colera",
    w1_l1: "Dauer 2 Std.", w1_l2: "Max. 6 Personen.", w1_l3: "Preis 190€.",
    w2_title: "Route Cap de Creus",
    w2_l1: "Dauer 4 Std. (320€)", w2_l2: "Dauer 6 Std. (430€)", w2_l3: "Max. 6 Personen.",
    w3_title: "Individuelle Route",
    w3_l1: "Sie bestimmen Route und Dauer.", w3_l2: "Preis nach Vereinbarung.",
    w4_title: "Sonnenuntergangsroute",
    w4_l1: "Dauer 2 Std.", w4_l2: "Max. 6 Personen.", w4_l3: "Preis 190€.",
    w5_title: "Route Geteilte Tour",
    w5_l1: "Preis: 50€ pro Person für 2 Std.", w5_l2: "Route und Dauer nach Absprache.",
    w6_title: "Angelausfahrten",
    w6_l1: "Angeln für Erwachsene und Kinder.", w6_l2: "Preis auf Anfrage.",
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

    /* --- Pagines legals --- */
    legal_updated: "Letzte Aktualisierung: 10. September 2026",
    footer_legal: "Impressum",
    footer_privacy: "Datenschutzerklärung",
    prices_vat: "Alle Preise verstehen sich in Euro inklusive MwSt.",
    al_title: "Impressum",
    al_h_owner: "1. Angaben zum Anbieter",
    al_owner_intro: "Gemäß Artikel 10 des spanischen Gesetzes 34/2002 über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI-CE) werden nachfolgend die Angaben zum Anbieter dieser Website aufgeführt:",
    al_lbl_owner: "Anbieter",
    al_lbl_nif: "Steuernummer (NIF)",
    al_lbl_tradename: "Handelsname",
    al_lbl_address: "Anschrift",
    al_lbl_email: "E-Mail",
    al_lbl_phone: "Telefon",
    al_lbl_site: "Website",
    al_lbl_activity: "Tätigkeit",
    al_activity: "Bootsausflüge und Bootsfahrten entlang der Costa Brava",
    al_h_object: "2. Zweck dieser Website",
    al_object: "Diese Website dient ausschließlich der Information über und der Bewerbung von Bootsausflügen des Anbieters. Es finden keine Verkäufe oder Zahlungen online statt: Buchungen werden telefonisch, per WhatsApp oder per E-Mail angefragt und bestätigt.",
    al_h_prices: "3. Preise",
    al_prices: "Alle auf dieser Website angegebenen Preise verstehen sich in Euro einschließlich der geltenden Mehrwertsteuer. Preise können sich ändern; maßgeblich ist der bei Annahme der Buchung bestätigte Preis.",
    al_h_booking: "4. Buchungen und Bedingungen der Aktivität",
    al_booking: "Die Ausfahrt hängt von den Wetter- und Seebedingungen ab. Aus Sicherheitsgründen kann der Skipper die Route ändern, die Ausfahrt verkürzen oder absagen; in diesem Fall wird ein Ersatztermin oder die Erstattung des gezahlten Betrags angeboten. An Bord sind die Anweisungen des Skippers jederzeit zu befolgen.",
    al_h_use: "5. Nutzungsbedingungen",
    al_use: "Der Zugang zu dieser Website ist kostenlos und erfordert keine Registrierung. Nutzer verpflichten sich, die Inhalte rechtmäßig zu verwenden und keine Handlungen vorzunehmen, die die Website beschädigen, unbrauchbar machen, überlasten oder ihre normale Nutzung verhindern könnten.",
    al_h_ip: "6. Geistiges Eigentum",
    al_ip: "Die Texte, Fotografien und das Logo dieser Website sind Werk und Eigentum des Anbieters und urheberrechtlich geschützt. Sämtliche Fotografien der Website wurden vom Anbieter selbst aufgenommen. Ihre Vervielfältigung, Verbreitung oder kommerzielle Nutzung ohne vorherige schriftliche Genehmigung ist nicht gestattet.",
    al_h_liability: "7. Haftung und externe Links",
    al_liability: "Der Anbieter bemüht sich, die veröffentlichten Informationen korrekt und aktuell zu halten, kann jedoch nicht garantieren, dass sie fehlerfrei sind. Diese Website enthält Links zu Diensten Dritter (WhatsApp, Instagram, Facebook und Google Maps); für deren Inhalte und Datenschutzbestimmungen übernimmt der Anbieter keine Verantwortung.",
    al_h_law: "8. Anwendbares Recht",
    al_law: "Dieses Verhältnis unterliegt spanischem Recht. Im Streitfall können sich Verbraucher an die Gerichte ihres Wohnsitzes und, sofern gewünscht, an die Verbraucherschutzstellen der Generalitat de Catalunya oder an die Schiedsstelle für Verbraucherangelegenheiten wenden.",
    al_h_lang: "9. Sprachfassungen",
    al_lang: "Dieses Impressum wird zum besseren Verständnis in mehreren Sprachen bereitgestellt. Bei Abweichungen zwischen den Fassungen ist die spanische Fassung maßgeblich.",
    pp_title: "Datenschutzerklärung",
    pp_h_resp: "1. Verantwortlicher",
    pp_h_data: "2. Welche Daten wir verarbeiten und woher sie stammen",
    pp_data1: "Diese Website enthält keine Formulare und erhebt selbst keine Daten: Es gibt keine Registrierung, keinen Online-Kauf und kein Werkzeug, das Informationen über Besucher sammelt.",
    pp_data2: "Wir verarbeiten nur die Daten, die Sie uns freiwillig mitteilen, wenn Sie uns per Telefon, WhatsApp oder E-Mail kontaktieren: Ihren Namen, Ihre Telefonnummer oder E-Mail-Adresse sowie die für die Buchung erforderlichen Angaben (Datum, Personenzahl und was Sie uns zur Ausfahrt mitteilen möchten).",
    pp_h_purpose: "3. Wofür wir sie verwenden",
    pp_purpose: "Um Ihre Anfragen zu beantworten, Buchungen zu verwalten und zu bestätigen, die Ausfahrt zu organisieren und die steuerlichen und buchhalterischen Pflichten aus der erbrachten Leistung zu erfüllen. Wir versenden keine Werbung, erstellen keine Profile und treffen keinerlei automatisierte Entscheidungen.",
    pp_h_legal: "4. Rechtsgrundlage",
    pp_legal: "Die Verarbeitung der Daten einer Anfrage oder Buchung stützt sich auf vorvertragliche Maßnahmen und die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Die Aufbewahrung von Rechnungen und Buchhaltungsunterlagen stützt sich auf die Erfüllung rechtlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO).",
    pp_h_time: "5. Wie lange wir sie speichern",
    pp_time: "Buchungsdaten werden für die Dauer der Geschäftsbeziehung und anschließend für die gesetzlich vorgeschriebenen steuer- und handelsrechtlichen Fristen aufbewahrt. Nachrichten, die nicht zu einer Buchung führen, werden gelöscht, sobald sie zur Bearbeitung der Anfrage nicht mehr erforderlich sind.",
    pp_h_share: "6. An wen sie weitergegeben werden",
    pp_share: "Wir verkaufen oder übermitteln Ihre Daten an niemanden. Zugriff haben nur Behörden, sofern gesetzlich vorgeschrieben, sowie die für unsere Arbeit erforderlichen Dienstleister:",
    pp_share_l1: "Microsoft (Outlook) für E-Mails.",
    pp_share_l2: "WhatsApp Ireland Ltd. (Meta-Gruppe) für WhatsApp-Nachrichten.",
    pp_share_l3: "GitHub, Inc., das diese Website hostet und die IP-Adressen der Besuche in seinen technischen Serverprotokollen speichert.",
    pp_share_l4: "Die Steuerberatung, die die Buchhaltung führt, sofern zutreffend.",
    pp_share2: "Einige dieser Dienstleister können Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten. In diesem Fall stützen sich die Übermittlungen auf die in der DSGVO vorgesehenen Garantien, etwa die von der Europäischen Kommission genehmigten Standardvertragsklauseln oder den geltenden Angemessenheitsrahmen.",
    pp_h_rights: "7. Ihre Rechte",
    pp_rights1: "Sie können Auskunft über Ihre Daten verlangen, deren Berichtigung oder Löschung, die Einschränkung der Verarbeitung oder Widerspruch dagegen sowie die Datenübertragbarkeit. Schreiben Sie dazu an",
    pp_rights2: "und geben Sie an, welches Recht Sie ausüben möchten. Wenn Sie der Ansicht sind, dass wir Ihr Anliegen nicht ordnungsgemäß bearbeitet haben, können Sie sich bei der spanischen Datenschutzbehörde beschweren:",
    pp_h_cookies: "8. Cookies und lokale Speicherung",
    pp_cookies1: "Diese Website verwendet keine Cookies, keine Analysewerkzeuge, keine Werbe-Pixel und kein Tracking-System. Deshalb sehen Sie auch keinen Cookie-Hinweis.",
    pp_cookies2: "Im Browser wird lediglich die von Ihnen gewählte Sprache über die lokale Speicherung (localStorage) abgelegt, damit Sie sie nicht bei jedem Besuch erneut auswählen müssen. Es handelt sich um Ihre eigene Einstellung, sie identifiziert Sie nicht und wird an keinen Server übermittelt. Sie können sie in den Browsereinstellungen löschen.",
    pp_cookies3: "Die Schriftart der Website wird auf unserem eigenen Server gehostet. Beim Laden der Seite wird keine Verbindung zu externen Servern hergestellt, auch nicht für die Schrift.",
    pp_h_photos: "9. Fotografien",
    pp_photos: "Wenn während einer Ausfahrt Fotos entstehen, auf denen Sie erkennbar sind, und wir diese auf der Website oder in sozialen Netzwerken veröffentlichen möchten, holen wir zuvor Ihre ausdrückliche Einwilligung ein. Bei Minderjährigen ist die Einwilligung der Mutter, des Vaters oder des gesetzlichen Vormunds erforderlich. Sie können diese Einwilligung jederzeit durch eine Nachricht an uns widerrufen.",
    pp_h_security: "10. Sicherheit",
    pp_security: "Wir treffen angemessene Maßnahmen, um die von Ihnen bereitgestellten Daten zu schützen und zu verhindern, dass sie verloren gehen oder Unbefugte darauf zugreifen.",
    pp_h_changes: "11. Änderungen dieser Erklärung",
    pp_changes: "Diese Erklärung kann aktualisiert werden, wenn sich die Tätigkeit oder die Rechtslage ändert. Das oben angegebene Datum bezeichnet die zuletzt veröffentlichte Fassung. Bei Abweichungen zwischen den Sprachfassungen ist die spanische Fassung maßgeblich.",
    al_lbl_fiscal: "Steuerlicher Sitz",
    al_lbl_activity_addr: "Anschrift des Betriebs",
    al_lbl_boat: "Boot",
    al_lbl_reg: "Registriernummer",
    al_boat_list: "Liste 6 (Charter und Personenbeförderung)",
    al_lbl_insurance: "Haftpflichtversicherung",
    al_lbl_policy: "Police Nr.",
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
