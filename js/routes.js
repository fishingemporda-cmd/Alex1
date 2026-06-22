/* ============================================================
   PÀGINA DE DETALL DE RUTA (ruta.html?r=v1)
   Reutilitza "translations" i "slideshows" de i18n.js.
   Aquí només hi ha les descripcions llargues de cada ruta.
   Per afegir-ne una de nova: omple routeDesc["vX"] amb els 4 idiomes.
   ============================================================ */

/* Etiqueta (privat/compartit) de cada ruta — igual que a l'index */
const routeTagKey = {
  v1: "tag_private", v2: "tag_private", v3: "tag_private",
  v4: "tag_private", v5: "tag_shared",  v6: "tag_private",
};

/* Descripcions llargues per ruta i idioma.
   Cada idioma és una llista de blocs:
     { p: "..." }                              -> paràgraf
     { h: "..." }                              -> subtítol
     { ul: [ { lead:"...", text:"..." }, ... ] } -> llista
   Si una ruta no té descripció, es mostra un text de "pròximament". */
const routeDesc = {
  v1: {
    es: [
      { p: "Una ruta en barca de 2 horas desde el Port de Llançà hasta la paradisíaca Playa de Garbet es la experiencia perfecta para descubrir la Costa Brava más auténtica. Al ir acompañados por un patrón local, no tendréis que preocuparos por nada; él os guiará por los rincones más espectaculares, compartiendo las historias y secretos mejor guardados de nuestra costa." },
      { p: "Este es el itinerario exclusivo de lo que viviréis a bordo de esta aventura de dos horas:" },
      { h: "Navegación guiada por acantilados y calas secretas" },
      { p: "Al salir del puerto, el patrón pondrá rumbo al norte, bordeando un paisaje esculpido por el viento que solo se puede apreciar de verdad desde el mar:" },
      { ul: [
        { lead: "El emblemático Cap Ras", text: "Contemplaréis esta impresionante lengua de tierra virgen que separa Llançà de Colera, con sus singulares rocas oscuras." },
        { lead: "La «piscina natural» de Cala Bramant", text: "El patrón os acercará a este espectacular anfiteatro de roca cerrado, famoso por sus aguas mansas y transparentes." },
        { lead: "Panorámica de calas vírgenes", text: "Disfrutaréis desde primera línea de las vistas de la Platja de Grifeu y la recóndita Playa del Borró." },
      ] },
      { h: "Fondeo VIP en la Bahía de Garbet: diversión y relax" },
      { p: "El plato fuerte llega al echar el ancla en la majestuosa Playa de Garbet, una bahía muy resguardada y rodeada de viñedos que tocan el mar. Aquí el barco se convierte en vuestro club privado flotante:" },
      { ul: [
        { lead: "Exploración con snorkel", text: "Os facilitaremos las gafas de snorkel para que descubráis el impresionante fondo marino de posidonia, repleto de peces y vida local." },
        { lead: "Aventura en paddle surf", text: "Podréis descargar y utilizar la tabla de paddle surf incluida para deslizaros sobre las aguas turquesas y explorar la bahía a vuestro propio ritmo." },
        { lead: "Aperitivo y bebidas de cortesía", text: "Tras la acción, os relajaréis en cubierta disfrutando de un merecido refresco y un picoteo mientras os dejáis mecer por el oleaje." },
      ] },
      { p: "Tras este inolvidable descanso, el patrón os llevará de regreso al Port de Llançà planeando suavemente sobre las olas, poniendo el broche de oro a dos horas de pura desconexión mediterránea." },
    ],
    ca: [
      { p: "Una ruta en barca de 2 hores des del Port de Llançà fins a la paradisíaca Platja de Garbet és l'experiència perfecta per descobrir la Costa Brava més autèntica. Com que anireu acompanyats d'un patró local, no us haureu de preocupar de res; ell us guiarà pels racons més espectaculars, compartint les històries i els secrets més ben guardats de la nostra costa." },
      { p: "Aquest és l'itinerari exclusiu del que viureu a bord d'aquesta aventura de dues hores:" },
      { h: "Navegació guiada per penya-segats i cales secretes" },
      { p: "En sortir del port, el patró posarà rumb al nord, vorejant un paisatge esculpit pel vent que només es pot apreciar de veritat des del mar:" },
      { ul: [
        { lead: "L'emblemàtic Cap Ras", text: "Contemplareu aquesta impressionant llengua de terra verge que separa Llançà de Colera, amb les seves singulars roques fosques." },
        { lead: "La «piscina natural» de Cala Bramant", text: "El patró us acostarà a aquest espectacular amfiteatre de roca tancat, famós per les seves aigües calmes i transparents." },
        { lead: "Panoràmica de cales verges", text: "Gaudireu en primera línia de les vistes de la Platja de Grifeu i la recòndita Platja del Borró." },
      ] },
      { h: "Fondeig VIP a la Badia de Garbet: diversió i relax" },
      { p: "El plat fort arriba en tirar l'àncora a la majestuosa Platja de Garbet, una badia molt arrecerada i envoltada de vinyes que toquen el mar. Aquí la barca es converteix en el vostre club privat flotant:" },
      { ul: [
        { lead: "Exploració amb snorkel", text: "Us facilitarem les ulleres de snorkel perquè descobriu l'impressionant fons marí de posidònia, ple de peixos i vida local." },
        { lead: "Aventura amb paddle surf", text: "Podreu descarregar i fer servir la taula de paddle surf inclosa per lliscar sobre les aigües turqueses i explorar la badia al vostre ritme." },
        { lead: "Aperitiu i begudes de cortesia", text: "Després de l'acció, us relaxareu a coberta gaudint d'un merescut refresc i un mos mentre us deixeu bressolar per l'onatge." },
      ] },
      { p: "Després d'aquest inoblidable descans, el patró us tornarà al Port de Llançà lliscant suaument sobre les onades, posant el toc final a dues hores de pura desconnexió mediterrània." },
    ],
    en: [
      { p: "A 2-hour boat trip from the Port de Llançà to the paradisiacal Garbet Beach is the perfect way to discover the most authentic Costa Brava. With a local skipper on board, you won't have to worry about a thing; he'll guide you through the most spectacular spots, sharing the best-kept stories and secrets of our coast." },
      { p: "This is the exclusive itinerary of what you'll experience aboard this two-hour adventure:" },
      { h: "Guided cruise along cliffs and secret coves" },
      { p: "As you leave the harbour, the skipper will head north, hugging a landscape sculpted by the wind that can only truly be appreciated from the sea:" },
      { ul: [
        { lead: "The iconic Cap Ras", text: "Admire this stunning headland of untouched land that separates Llançà from Colera, with its distinctive dark rocks." },
        { lead: "The «natural pool» of Cala Bramant", text: "The skipper will take you close to this spectacular enclosed rock amphitheatre, famous for its calm, crystal-clear waters." },
        { lead: "Panorama of unspoilt coves", text: "Enjoy front-row views of Platja de Grifeu and the secluded Borró Beach." },
      ] },
      { h: "VIP anchoring in Garbet Bay: fun and relaxation" },
      { p: "The highlight comes when you drop anchor in the majestic Garbet Beach, a very sheltered bay surrounded by vineyards that reach down to the sea. Here the boat becomes your private floating club:" },
      { ul: [
        { lead: "Snorkelling", text: "We'll provide snorkel masks so you can discover the impressive posidonia seabed, teeming with fish and local marine life." },
        { lead: "Paddle surf adventure", text: "You can take out and use the included paddle surf board to glide over the turquoise waters and explore the bay at your own pace." },
        { lead: "Complimentary aperitif and drinks", text: "After the action, relax on deck with a well-deserved cold drink and a snack while you let the waves rock you gently." },
      ] },
      { p: "After this unforgettable break, the skipper will bring you back to the Port de Llançà, gliding gently over the waves — the perfect finishing touch to two hours of pure Mediterranean escape." },
    ],
    fr: [
      { p: "Une excursion en bateau de 2 heures depuis le Port de Llançà jusqu'à la paradisiaque plage de Garbet est l'expérience idéale pour découvrir la Costa Brava la plus authentique. Accompagnés d'un patron local, vous n'aurez à vous soucier de rien ; il vous guidera vers les coins les plus spectaculaires, en partageant les histoires et les secrets les mieux gardés de notre côte." },
      { p: "Voici l'itinéraire exclusif de ce que vous vivrez à bord de cette aventure de deux heures :" },
      { h: "Navigation guidée le long des falaises et des criques secrètes" },
      { p: "En quittant le port, le patron mettra le cap au nord, en longeant un paysage sculpté par le vent que l'on ne peut vraiment apprécier que depuis la mer :" },
      { ul: [
        { lead: "L'emblématique Cap Ras", text: "Contemplez cette impressionnante langue de terre vierge qui sépare Llançà de Colera, avec ses singulières roches sombres." },
        { lead: "La « piscine naturelle » de Cala Bramant", text: "Le patron vous approchera de ce spectaculaire amphithéâtre de roche fermé, célèbre pour ses eaux calmes et transparentes." },
        { lead: "Panorama de criques sauvages", text: "Profitez aux premières loges des vues sur la Platja de Grifeu et la plage isolée de Borró." },
      ] },
      { h: "Mouillage VIP dans la baie de Garbet : plaisir et détente" },
      { p: "Le clou du spectacle arrive lorsque l'on jette l'ancre dans la majestueuse plage de Garbet, une baie très abritée et entourée de vignes qui touchent la mer. Ici, le bateau devient votre club privé flottant :" },
      { ul: [
        { lead: "Exploration au tuba (snorkel)", text: "Nous vous fournirons des masques de snorkel pour découvrir l'impressionnant fond marin de posidonie, regorgeant de poissons et de vie locale." },
        { lead: "Aventure en paddle surf", text: "Vous pourrez mettre à l'eau et utiliser la planche de paddle surf incluse pour glisser sur les eaux turquoise et explorer la baie à votre rythme." },
        { lead: "Apéritif et boissons offerts", text: "Après l'effort, détendez-vous sur le pont en savourant une boisson fraîche bien méritée et un en-cas, bercés par les vagues." },
      ] },
      { p: "Après cette pause inoubliable, le patron vous ramènera au Port de Llançà en glissant doucement sur les vagues, apportant la touche finale à deux heures de pure évasion méditerranéenne." },
    ],
    de: [
      { p: "Eine 2-stündige Bootstour vom Port de Llançà zum paradiesischen Strand von Garbet ist das perfekte Erlebnis, um die authentischste Costa Brava zu entdecken. Da Sie von einem einheimischen Skipper begleitet werden, müssen Sie sich um nichts kümmern; er führt Sie zu den spektakulärsten Winkeln und teilt die bestgehüteten Geschichten und Geheimnisse unserer Küste mit Ihnen." },
      { p: "Dies ist die exklusive Route dessen, was Sie an Bord dieses zweistündigen Abenteuers erleben werden:" },
      { h: "Geführte Fahrt entlang Steilküsten und geheimer Buchten" },
      { p: "Beim Verlassen des Hafens nimmt der Skipper Kurs nach Norden und folgt einer vom Wind geformten Landschaft, die man nur vom Meer aus wirklich schätzen kann:" },
      { ul: [
        { lead: "Das markante Cap Ras", text: "Bewundern Sie diese beeindruckende, unberührte Landzunge, die Llançà von Colera trennt, mit ihren einzigartigen dunklen Felsen." },
        { lead: "Der «natürliche Pool» der Cala Bramant", text: "Der Skipper bringt Sie nah an dieses spektakuläre, geschlossene Felsenamphitheater heran, das für sein ruhiges und glasklares Wasser bekannt ist." },
        { lead: "Panorama unberührter Buchten", text: "Genießen Sie aus erster Reihe den Blick auf die Platja de Grifeu und den abgelegenen Strand Borró." },
      ] },
      { h: "VIP-Ankern in der Bucht von Garbet: Spaß und Entspannung" },
      { p: "Der Höhepunkt kommt, wenn Sie am majestätischen Strand von Garbet ankern, einer sehr geschützten, von Weinbergen bis ans Meer umgebenen Bucht. Hier wird das Boot zu Ihrem privaten schwimmenden Club:" },
      { ul: [
        { lead: "Schnorcheln", text: "Wir stellen Ihnen Schnorchelbrillen zur Verfügung, damit Sie den beeindruckenden Posidonia-Meeresboden voller Fische und lokalem Leben entdecken können." },
        { lead: "Paddle-Surf-Abenteuer", text: "Sie können das inkludierte Paddle-Surf-Board nutzen, um über das türkisfarbene Wasser zu gleiten und die Bucht in Ihrem eigenen Tempo zu erkunden." },
        { lead: "Aperitif und Getränke gratis", text: "Nach der Action entspannen Sie an Deck bei einem wohlverdienten kühlen Getränk und einem Snack, während Sie sich von den Wellen sanft wiegen lassen." },
      ] },
      { p: "Nach dieser unvergesslichen Pause bringt Sie der Skipper sanft über die Wellen gleitend zurück zum Port de Llançà – der perfekte Abschluss von zwei Stunden purer mediterraner Auszeit." },
    ],
  },

  v2: {
    es: [
      { p: "Una ruta de 4 o 6 horas en dirección sur desde el Port de Llançà hasta la mítica Cala Prona es la experiencia definitiva para descubrir el corazón del Parque Natural del Cap de Creus. Al contar con la experiencia de nuestro patrón local, disfrutaréis de un viaje exclusivo y totalmente flexible, ya que la duración de la ruta permite fondear en las calas que los propios pasajeros elijan a lo largo del camino." },
      { p: "Este es el fascinante itinerario de lo que viviréis y experimentaréis en esta aventura costera:" },
      { h: "Historia románica visible desde el mar" },
      { p: "Poco después de zarpar, mientras navegamos frente a la bahía de El Port de la Selva, alzaréis la vista hacia la imponente montaña de la Verdera. Allí arriba, desafiando al abismo a más de 500 metros de altitud, divisaréis las solemnes torres del Monestir de Sant Pere de Rodes. Joya del románico catalán del siglo IX, es un monasterio benedictino envuelto en leyendas de naufragios cristianos y reliquias ocultas, que en la Edad Media llegó a ser un centro de peregrinación tan importante como Roma o Santiago de Compostela. Su espectacular silueta recortada contra el cielo, diseñada estratégicamente en terrazas para vigilar la costa de los ataques piratas, os regalará una de las panorámicas más mágicas del viaje." },
      { h: "Navegación panorámica por el Cap de Creus salvaje" },
      { p: "Al dejar atrás la bahía, el barco se adentra en el tramo más abrupto y espectacular de la Costa Brava, un paisaje de roca volcánica y pizarra esculpido por la tramuntana:" },
      { ul: [
        { lead: "El mítico Cap de Creus", text: "Navegaréis frente a imponentes acantilados, islotes solitarios y cuevas marinas que el patrón os irá descubriendo y explicando." },
        { lead: "Tú eliges dónde parar", text: "Pasaréis por rincones idílicos como Cala Tavallera, Cala Galladera o Cala Culip. Los pasajeros deciden dónde echar el ancla para disfrutar del mar en total libertad." },
      ] },
      { h: "El paraíso de Cala Prona y diversión a bordo" },
      { p: "El destino estrella de la ruta es Cala Prona, una de las joyas más vírgenes y resguardadas de todo el cabo, famosa por su antigua caseta de pescadores y sus aguas de un verde esmeralda deslumbrante. Aquí, o en las calas elegidas, el barco se transforma en vuestro oasis privado:" },
      { ul: [
        { lead: "Paseos en paddle surf", text: "Utilizad la tabla de paddle surf incluida para explorar los rincones más escondidos de la cala o acercaros a la orilla virgen." },
        { lead: "Fondo marino con snorkel", text: "Con las gafas de snorkel a vuestra disposición, os sumergiréis en un acuario natural protegido, rebosante de posidonia, estrellas de mar y bancos de peces." },
        { lead: "Aperitivo y bebidas de cortesía", text: "Relajaos bajo el sol de la Costa Brava mientras el patrón os sirve un refrescante picoteo para reponer fuerzas en la mejor compañía." },
      ] },
      { h: "Un regreso inolvidable a Llançà" },
      { p: "Tras horas de desconexión, baños y risas en un entorno paradisíaco, el patrón pondrá rumbo de vuelta al Port de Llançà. Disfrutaréis del placer de planear sobre las olas, contemplando la inmensidad del Mediterráneo y la silueta de la costa, poniendo fin a una jornada marinera perfecta y a medida." },
    ],
    ca: [
      { p: "Una ruta de 4 o 6 hores en direcció sud des del Port de Llançà fins a la mítica Cala Prona és l'experiència definitiva per descobrir el cor del Parc Natural del Cap de Creus. Comptant amb l'experiència del nostre patró local, gaudireu d'un viatge exclusiu i totalment flexible, ja que la durada de la ruta permet fondejar a les cales que els mateixos passatgers triïn al llarg del camí." },
      { p: "Aquest és el fascinant itinerari del que viureu i experimentareu en aquesta aventura costanera:" },
      { h: "Història romànica visible des del mar" },
      { p: "Poc després de salpar, mentre naveguem davant de la badia del Port de la Selva, alçareu la vista cap a la imponent muntanya de la Verdera. Allà dalt, desafiant l'abisme a més de 500 metres d'altitud, divisareu les solemnes torres del Monestir de Sant Pere de Rodes. Joia del romànic català del segle IX, és un monestir benedictí envoltat de llegendes de naufragis cristians i relíquies ocultes, que a l'Edat Mitjana va arribar a ser un centre de pelegrinatge tan important com Roma o Santiago de Compostel·la. La seva espectacular silueta retallada contra el cel, dissenyada estratègicament en terrasses per vigilar la costa dels atacs pirates, us regalarà una de les panoràmiques més màgiques del viatge." },
      { h: "Navegació panoràmica pel Cap de Creus salvatge" },
      { p: "En deixar enrere la badia, la barca s'endinsa en el tram més abrupte i espectacular de la Costa Brava, un paisatge de roca volcànica i pissarra esculpit per la tramuntana:" },
      { ul: [
        { lead: "El mític Cap de Creus", text: "Navegareu davant d'imponents penya-segats, illots solitaris i coves marines que el patró us anirà descobrint i explicant." },
        { lead: "Tu tries on parar", text: "Passareu per racons idíl·lics com Cala Tavallera, Cala Galladera o Cala Culip. Els passatgers decideixen on tirar l'àncora per gaudir del mar amb total llibertat." },
      ] },
      { h: "El paradís de Cala Prona i diversió a bord" },
      { p: "La destinació estrella de la ruta és Cala Prona, una de les joies més verges i arrecerades de tot el cap, famosa per la seva antiga caseta de pescadors i les seves aigües d'un verd maragda enlluernador. Aquí, o a les cales triades, la barca es transforma en el vostre oasi privat:" },
      { ul: [
        { lead: "Passejades en paddle surf", text: "Feu servir la taula de paddle surf inclosa per explorar els racons més amagats de la cala o acostar-vos a la riba verge." },
        { lead: "Fons marí amb snorkel", text: "Amb les ulleres de snorkel a la vostra disposició, us submergireu en un aquari natural protegit, ple de posidònia, estrelles de mar i bancs de peixos." },
        { lead: "Aperitiu i begudes de cortesia", text: "Relaxeu-vos sota el sol de la Costa Brava mentre el patró us serveix un refrescant mos per recuperar forces en la millor companyia." },
      ] },
      { h: "Un retorn inoblidable a Llançà" },
      { p: "Després d'hores de desconnexió, banys i rialles en un entorn paradisíac, el patró posarà rumb de tornada al Port de Llançà. Gaudireu del plaer de lliscar sobre les onades, contemplant la immensitat del Mediterrani i la silueta de la costa, posant fi a una jornada marinera perfecta i a mida." },
    ],
    en: [
      { p: "A 4- or 6-hour trip heading south from the Port de Llançà to the legendary Cala Prona is the ultimate way to discover the heart of the Cap de Creus Natural Park. With the experience of our local skipper, you'll enjoy an exclusive and completely flexible journey, as the length of the route lets you anchor in the coves the passengers themselves choose along the way." },
      { p: "This is the fascinating itinerary of what you'll live and experience on this coastal adventure:" },
      { h: "Romanesque history visible from the sea" },
      { p: "Shortly after setting sail, as we cruise past the bay of El Port de la Selva, you'll look up towards the imposing Verdera mountain. Up there, defying the abyss at over 500 metres above sea level, you'll make out the solemn towers of the Monastery of Sant Pere de Rodes. A jewel of 9th-century Catalan Romanesque art, it is a Benedictine monastery shrouded in legends of Christian shipwrecks and hidden relics, which in the Middle Ages became a pilgrimage centre as important as Rome or Santiago de Compostela. Its spectacular silhouette set against the sky, strategically designed in terraces to watch over the coast against pirate attacks, will give you one of the most magical panoramas of the trip." },
      { h: "Panoramic cruise along the wild Cap de Creus" },
      { p: "Leaving the bay behind, the boat enters the most rugged and spectacular stretch of the Costa Brava, a landscape of volcanic rock and slate sculpted by the tramontana wind:" },
      { ul: [
        { lead: "The legendary Cap de Creus", text: "You'll sail past towering cliffs, lonely islets and sea caves that the skipper will reveal and explain along the way." },
        { lead: "You choose where to stop", text: "You'll pass idyllic spots such as Cala Tavallera, Cala Galladera or Cala Culip. The passengers decide where to drop anchor to enjoy the sea in complete freedom." },
      ] },
      { h: "The paradise of Cala Prona and fun on board" },
      { p: "The star destination of the route is Cala Prona, one of the most unspoilt and sheltered jewels of the entire cape, famous for its old fishermen's hut and its dazzling emerald-green waters. Here, or in the coves you choose, the boat becomes your private oasis:" },
      { ul: [
        { lead: "Paddle surf outings", text: "Use the included paddle surf board to explore the most hidden corners of the cove or get close to the untouched shore." },
        { lead: "Snorkelling the seabed", text: "With snorkel masks at your disposal, you'll dive into a protected natural aquarium, brimming with posidonia, starfish and shoals of fish." },
        { lead: "Complimentary aperitif and drinks", text: "Relax under the Costa Brava sun while the skipper serves you a refreshing snack to recharge in the best company." },
      ] },
      { h: "An unforgettable return to Llançà" },
      { p: "After hours of disconnection, swims and laughter in a paradisiacal setting, the skipper will set course back to the Port de Llançà. You'll enjoy the pleasure of gliding over the waves, taking in the vastness of the Mediterranean and the outline of the coast, bringing a perfect, tailor-made day at sea to a close." },
    ],
    fr: [
      { p: "Une excursion de 4 ou 6 heures en direction du sud depuis le Port de Llançà jusqu'à la mythique Cala Prona est l'expérience ultime pour découvrir le cœur du Parc Naturel du Cap de Creus. Grâce à l'expérience de notre patron local, vous profiterez d'un voyage exclusif et totalement flexible, car la durée de l'itinéraire permet de mouiller dans les criques que les passagers eux-mêmes choisissent en chemin." },
      { p: "Voici le fascinant itinéraire de ce que vous vivrez et découvrirez lors de cette aventure côtière :" },
      { h: "Histoire romane visible depuis la mer" },
      { p: "Peu après avoir levé l'ancre, en naviguant devant la baie d'El Port de la Selva, vous lèverez les yeux vers l'imposante montagne de la Verdera. Là-haut, défiant l'abîme à plus de 500 mètres d'altitude, vous apercevrez les solennelles tours du Monastère de Sant Pere de Rodes. Joyau de l'art roman catalan du IXe siècle, c'est un monastère bénédictin entouré de légendes de naufrages chrétiens et de reliques cachées, qui au Moyen Âge devint un centre de pèlerinage aussi important que Rome ou Saint-Jacques-de-Compostelle. Sa silhouette spectaculaire se découpant sur le ciel, conçue stratégiquement en terrasses pour surveiller la côte contre les attaques de pirates, vous offrira l'un des panoramas les plus magiques du voyage." },
      { h: "Navigation panoramique le long du Cap de Creus sauvage" },
      { p: "En laissant la baie derrière vous, le bateau s'engage dans le tronçon le plus abrupt et spectaculaire de la Costa Brava, un paysage de roche volcanique et d'ardoise sculpté par la tramontane :" },
      { ul: [
        { lead: "Le mythique Cap de Creus", text: "Vous naviguerez devant d'imposantes falaises, des îlots solitaires et des grottes marines que le patron vous fera découvrir et vous expliquera." },
        { lead: "Vous choisissez où vous arrêter", text: "Vous passerez par des coins idylliques comme Cala Tavallera, Cala Galladera ou Cala Culip. Les passagers décident où jeter l'ancre pour profiter de la mer en toute liberté." },
      ] },
      { h: "Le paradis de Cala Prona et l'amusement à bord" },
      { p: "La destination phare de l'itinéraire est Cala Prona, l'un des joyaux les plus sauvages et abrités de tout le cap, célèbre pour son ancienne cabane de pêcheurs et ses eaux d'un vert émeraude éblouissant. Ici, ou dans les criques choisies, le bateau se transforme en votre oasis privé :" },
      { ul: [
        { lead: "Balades en paddle surf", text: "Utilisez la planche de paddle surf incluse pour explorer les recoins les plus cachés de la crique ou vous approcher du rivage vierge." },
        { lead: "Fond marin en snorkel", text: "Avec les masques de snorkel à votre disposition, vous plongerez dans un aquarium naturel protégé, regorgeant de posidonie, d'étoiles de mer et de bancs de poissons." },
        { lead: "Apéritif et boissons offerts", text: "Détendez-vous sous le soleil de la Costa Brava pendant que le patron vous sert un en-cas rafraîchissant pour reprendre des forces en agréable compagnie." },
      ] },
      { h: "Un retour inoubliable à Llançà" },
      { p: "Après des heures de déconnexion, de baignades et de rires dans un cadre paradisiaque, le patron mettra le cap vers le Port de Llançà. Vous profiterez du plaisir de glisser sur les vagues, en contemplant l'immensité de la Méditerranée et la silhouette de la côte, mettant fin à une journée en mer parfaite et sur mesure." },
    ],
    de: [
      { p: "Eine 4- oder 6-stündige Tour in südlicher Richtung vom Port de Llançà zur legendären Cala Prona ist das ultimative Erlebnis, um das Herz des Naturparks Cap de Creus zu entdecken. Mit der Erfahrung unseres einheimischen Skippers genießen Sie eine exklusive und völlig flexible Reise, denn die Dauer der Route erlaubt es, in den Buchten zu ankern, die die Passagiere selbst unterwegs auswählen." },
      { p: "Dies ist die faszinierende Route dessen, was Sie auf diesem Küstenabenteuer erleben werden:" },
      { h: "Romanische Geschichte vom Meer aus sichtbar" },
      { p: "Kurz nach dem Auslaufen, während wir an der Bucht von El Port de la Selva vorbeifahren, richten Sie den Blick auf den imposanten Berg Verdera. Dort oben, dem Abgrund auf über 500 Metern Höhe trotzend, erkennen Sie die feierlichen Türme des Klosters Sant Pere de Rodes. Dieses Juwel der katalanischen Romanik aus dem 9. Jahrhundert ist ein Benediktinerkloster, umrankt von Legenden über christliche Schiffbrüche und verborgene Reliquien, das im Mittelalter zu einem ebenso bedeutenden Wallfahrtsort wie Rom oder Santiago de Compostela wurde. Seine spektakuläre, gegen den Himmel gezeichnete Silhouette, strategisch in Terrassen angelegt, um die Küste vor Piratenangriffen zu überwachen, schenkt Ihnen eines der magischsten Panoramen der Reise." },
      { h: "Panoramafahrt entlang des wilden Cap de Creus" },
      { p: "Wenn Sie die Bucht hinter sich lassen, dringt das Boot in den schroffsten und spektakulärsten Abschnitt der Costa Brava vor, eine von der Tramuntana geformte Landschaft aus Vulkangestein und Schiefer:" },
      { ul: [
        { lead: "Das legendäre Cap de Creus", text: "Sie fahren an imposanten Steilküsten, einsamen Inselchen und Meereshöhlen vorbei, die der Skipper Ihnen nach und nach zeigt und erklärt." },
        { lead: "Sie wählen, wo gehalten wird", text: "Sie kommen an idyllischen Winkeln wie Cala Tavallera, Cala Galladera oder Cala Culip vorbei. Die Passagiere entscheiden, wo geankert wird, um das Meer in völliger Freiheit zu genießen." },
      ] },
      { h: "Das Paradies der Cala Prona und Spaß an Bord" },
      { p: "Das Sternziel der Route ist die Cala Prona, eines der unberührtesten und geschütztesten Juwele des gesamten Kaps, berühmt für seine alte Fischerhütte und sein leuchtend smaragdgrünes Wasser. Hier oder in den gewählten Buchten verwandelt sich das Boot in Ihre private Oase:" },
      { ul: [
        { lead: "Paddle-Surf-Ausflüge", text: "Nutzen Sie das inkludierte Paddle-Surf-Board, um die verstecktesten Winkel der Bucht zu erkunden oder sich dem unberührten Ufer zu nähern." },
        { lead: "Meeresboden beim Schnorcheln", text: "Mit Schnorchelbrillen zu Ihrer Verfügung tauchen Sie in ein geschütztes natürliches Aquarium voller Posidonia, Seesterne und Fischschwärme ein." },
        { lead: "Aperitif und Getränke gratis", text: "Entspannen Sie unter der Sonne der Costa Brava, während der Skipper Ihnen einen erfrischenden Snack serviert, um in bester Gesellschaft neue Kräfte zu tanken." },
      ] },
      { h: "Eine unvergessliche Rückkehr nach Llançà" },
      { p: "Nach Stunden des Abschaltens, Badens und Lachens in paradiesischer Umgebung nimmt der Skipper Kurs zurück zum Port de Llançà. Sie genießen das Vergnügen, über die Wellen zu gleiten, die Weite des Mittelmeers und die Silhouette der Küste betrachtend, und beenden so einen perfekten, maßgeschneiderten Tag auf See." },
    ],
  },

  v4: {
    es: [
      { p: "Una ruta en barca de 2 horas desde el Port de Llançà hasta la Playa de Garbet durante la puesta de sol es la experiencia más romántica y mágica de la Costa Brava. Navegaréis en un ambiente íntimo y exclusivo mientras el cielo y el mar se transforman por completo, regalándoos un espectáculo visual inolvidable." },
      { p: "Este es el itinerario detallado de lo que viviréis durante estas dos horas doradas:" },
      { h: "Navegación bajo la luz dorada del atardecer" },
      { p: "Al zarpar del puerto a última hora de la tarde, la Costa Brava os recibirá con una atmósfera completamente diferente. El patrón pondrá rumbo al norte bordeando los acantilados justo cuando el sol empieza a bajar:" },
      { ul: [
        { lead: "El Cap Ras tintado de oro", text: "Contemplaréis cómo las rocas oscuras de esta lengua de tierra virgen se iluminan con destellos cobrizos y anaranjados." },
        { lead: "Los reflejos de Cala Bramant", text: "Pasaremos frente a esta «piscina natural», cuyas aguas cristalinas actúan como un espejo perfecto, duplicando los colores del cielo." },
        { lead: "Un paisaje de ensueño", text: "La Platja de Grifeu y la Playa del Borró se tiñen de tonos cálidos, ofreciendo el escenario idílico para capturar las mejores fotografías del viaje." },
      ] },
      { h: "Fondeo romántico en la Bahía de Garbet y brindis al sol" },
      { p: "El momento cumbre llega al echar el ancla en la majestuosa Playa de Garbet. Con los viñedos de fondo iluminados por los últimos rayos del día y el mar en absoluta calma, la bahía se convierte en vuestro oasis privado:" },
      { ul: [
        { lead: "Aperitivo y bebidas de cortesía", text: "Es el instante perfecto para relajaros en cubierta, tomar una copa bien fría y disfrutar de un picoteo mientras el sol se oculta lentamente tras las montañas de la Albera." },
        { lead: "Un baño crepuscular", text: "Si os apetece, podéis sumergiros en las aguas turquesas (que a esta hora adquieren tonos violáceos) utilizando nuestras gafas de snorkel, o dar un paseo tranquilo en la tabla de paddle surf bajo un cielo de tonos rosados y rojizos." },
      ] },
      { h: "Regreso bajo el manto del crepúsculo" },
      { p: "Con el sol ya escondido y el cielo encendido en un degradado de colores mágicos, el patrón iniciará el suave regreso al Port de Llançà. Navegaréis relajados, disfrutando de la brisa fresca del anochecer y contemplando cómo se encienden las primeras luces del puerto, poniendo el broche de oro a una tarde de pura desconexión mediterránea." },
    ],
    ca: [
      { p: "Una ruta en barca de 2 hores des del Port de Llançà fins a la Platja de Garbet durant la posta de sol és l'experiència més romàntica i màgica de la Costa Brava. Navegareu en un ambient íntim i exclusiu mentre el cel i el mar es transformen per complet, regalant-vos un espectacle visual inoblidable." },
      { p: "Aquest és l'itinerari detallat del que viureu durant aquestes dues hores daurades:" },
      { h: "Navegació sota la llum daurada del capvespre" },
      { p: "En salpar del port a última hora de la tarda, la Costa Brava us rebrà amb una atmosfera completament diferent. El patró posarà rumb al nord vorejant els penya-segats just quan el sol comença a baixar:" },
      { ul: [
        { lead: "El Cap Ras tenyit d'or", text: "Contemplareu com les roques fosques d'aquesta llengua de terra verge s'il·luminen amb reflexos coure i ataronjats." },
        { lead: "Els reflexos de Cala Bramant", text: "Passarem davant d'aquesta «piscina natural», les aigües cristal·lines de la qual actuen com un mirall perfecte, duplicant els colors del cel." },
        { lead: "Un paisatge de somni", text: "La Platja de Grifeu i la Platja del Borró es tenyeixen de tons càlids, oferint l'escenari idíl·lic per capturar les millors fotografies del viatge." },
      ] },
      { h: "Fondeig romàntic a la Badia de Garbet i brindis al sol" },
      { p: "El moment culminant arriba en tirar l'àncora a la majestuosa Platja de Garbet. Amb les vinyes de fons il·luminades pels últims raigs del dia i el mar en absoluta calma, la badia es converteix en el vostre oasi privat:" },
      { ul: [
        { lead: "Aperitiu i begudes de cortesia", text: "És l'instant perfecte per relaxar-vos a coberta, prendre una copa ben freda i gaudir d'un mos mentre el sol s'amaga lentament rere les muntanyes de l'Albera." },
        { lead: "Un bany crepuscular", text: "Si us ve de gust, podeu submergir-vos en les aigües turqueses (que a aquesta hora adquireixen tons violacis) fent servir les nostres ulleres de snorkel, o fer un passeig tranquil amb la taula de paddle surf sota un cel de tons rosats i vermellosos." },
      ] },
      { h: "Tornada sota el mantell del crepuscle" },
      { p: "Amb el sol ja amagat i el cel encès en un degradat de colors màgics, el patró iniciarà la suau tornada al Port de Llançà. Navegareu relaxats, gaudint de la brisa fresca del vespre i contemplant com s'encenen els primers llums del port, posant el toc final a una tarda de pura desconnexió mediterrània." },
    ],
    en: [
      { p: "A 2-hour boat trip from the Port de Llançà to Garbet Beach at sunset is the most romantic and magical experience on the Costa Brava. You'll sail in an intimate, exclusive atmosphere while the sky and the sea transform completely, treating you to an unforgettable visual spectacle." },
      { p: "This is the detailed itinerary of what you'll experience during these two golden hours:" },
      { h: "Cruising in the golden light of dusk" },
      { p: "As you set sail from the harbour in the late afternoon, the Costa Brava will greet you with a completely different atmosphere. The skipper will head north along the cliffs just as the sun begins to drop:" },
      { ul: [
        { lead: "Cap Ras tinged with gold", text: "Watch how the dark rocks of this untouched headland light up with coppery, orange glints." },
        { lead: "The reflections of Cala Bramant", text: "We'll pass in front of this «natural pool», whose crystal-clear waters act like a perfect mirror, doubling the colours of the sky." },
        { lead: "A dreamlike landscape", text: "Platja de Grifeu and Borró Beach take on warm tones, offering the idyllic setting to capture the best photographs of the trip." },
      ] },
      { h: "Romantic anchoring in Garbet Bay and a toast to the sun" },
      { p: "The peak moment comes when you drop anchor in the majestic Garbet Beach. With the vineyards in the background lit by the last rays of the day and the sea perfectly calm, the bay becomes your private oasis:" },
      { ul: [
        { lead: "Complimentary aperitif and drinks", text: "It's the perfect moment to relax on deck, enjoy an ice-cold drink and a snack while the sun slowly hides behind the Albera mountains." },
        { lead: "A twilight swim", text: "If you fancy it, you can dive into the turquoise waters (which at this hour take on violet tones) using our snorkel masks, or take a calm ride on the paddle surf board under a sky of pink and reddish hues." },
      ] },
      { h: "Returning under the cloak of twilight" },
      { p: "With the sun already gone and the sky ablaze in a gradient of magical colours, the skipper will begin the gentle return to the Port de Llançà. You'll sail relaxed, enjoying the cool evening breeze and watching the first harbour lights come on, the perfect finishing touch to an afternoon of pure Mediterranean escape." },
    ],
    fr: [
      { p: "Une excursion en bateau de 2 heures depuis le Port de Llançà jusqu'à la plage de Garbet au coucher du soleil est l'expérience la plus romantique et magique de la Costa Brava. Vous naviguerez dans une ambiance intime et exclusive tandis que le ciel et la mer se transforment complètement, vous offrant un spectacle visuel inoubliable." },
      { p: "Voici l'itinéraire détaillé de ce que vous vivrez durant ces deux heures dorées :" },
      { h: "Navigation sous la lumière dorée du crépuscule" },
      { p: "En quittant le port en fin d'après-midi, la Costa Brava vous accueillera avec une atmosphère totalement différente. Le patron mettra le cap au nord en longeant les falaises juste au moment où le soleil commence à descendre :" },
      { ul: [
        { lead: "Le Cap Ras teinté d'or", text: "Vous contemplerez comment les roches sombres de cette langue de terre vierge s'illuminent de reflets cuivrés et orangés." },
        { lead: "Les reflets de Cala Bramant", text: "Nous passerons devant cette « piscine naturelle », dont les eaux cristallines agissent comme un miroir parfait, dédoublant les couleurs du ciel." },
        { lead: "Un paysage de rêve", text: "La Platja de Grifeu et la plage de Borró se teintent de tons chauds, offrant le décor idyllique pour capturer les plus belles photographies du voyage." },
      ] },
      { h: "Mouillage romantique dans la baie de Garbet et toast au soleil" },
      { p: "Le moment culminant arrive lorsque l'on jette l'ancre dans la majestueuse plage de Garbet. Avec les vignes en arrière-plan illuminées par les derniers rayons du jour et la mer en parfait calme, la baie devient votre oasis privé :" },
      { ul: [
        { lead: "Apéritif et boissons offerts", text: "C'est l'instant parfait pour vous détendre sur le pont, savourer un verre bien frais et un en-cas pendant que le soleil se cache lentement derrière les montagnes de l'Albera." },
        { lead: "Une baignade crépusculaire", text: "Si le cœur vous en dit, vous pouvez plonger dans les eaux turquoise (qui à cette heure prennent des tons violacés) avec nos masques de snorkel, ou faire une balade tranquille sur la planche de paddle surf sous un ciel aux tons roses et rougeâtres." },
      ] },
      { h: "Retour sous le manteau du crépuscule" },
      { p: "Le soleil déjà couché et le ciel embrasé d'un dégradé de couleurs magiques, le patron entamera le doux retour vers le Port de Llançà. Vous naviguerez détendus, en profitant de la brise fraîche du soir et en contemplant l'allumage des premières lumières du port, apportant la touche finale à une après-midi de pure évasion méditerranéenne." },
    ],
    de: [
      { p: "Eine 2-stündige Bootstour vom Port de Llançà zum Strand von Garbet während des Sonnenuntergangs ist das romantischste und magischste Erlebnis der Costa Brava. Sie fahren in einer intimen und exklusiven Atmosphäre, während sich Himmel und Meer vollständig verwandeln und Ihnen ein unvergessliches visuelles Schauspiel schenken." },
      { p: "Dies ist die detaillierte Route dessen, was Sie während dieser zwei goldenen Stunden erleben werden:" },
      { h: "Fahrt im goldenen Licht der Abenddämmerung" },
      { p: "Wenn Sie am späten Nachmittag aus dem Hafen auslaufen, empfängt Sie die Costa Brava mit einer völlig anderen Atmosphäre. Der Skipper nimmt Kurs nach Norden entlang der Steilküsten, gerade wenn die Sonne zu sinken beginnt:" },
      { ul: [
        { lead: "Das goldgetönte Cap Ras", text: "Sie sehen, wie sich die dunklen Felsen dieser unberührten Landzunge mit kupfernen und orangefarbenen Reflexen erleuchten." },
        { lead: "Die Spiegelungen der Cala Bramant", text: "Wir fahren an diesem «natürlichen Pool» vorbei, dessen glasklares Wasser wie ein perfekter Spiegel wirkt und die Farben des Himmels verdoppelt." },
        { lead: "Eine traumhafte Landschaft", text: "Die Platja de Grifeu und der Strand Borró färben sich in warmen Tönen und bieten die ideale Kulisse für die schönsten Fotos der Reise." },
      ] },
      { h: "Romantisches Ankern in der Bucht von Garbet und ein Toast auf die Sonne" },
      { p: "Der Höhepunkt kommt, wenn Sie am majestätischen Strand von Garbet ankern. Mit den von den letzten Sonnenstrahlen beleuchteten Weinbergen im Hintergrund und dem völlig ruhigen Meer wird die Bucht zu Ihrer privaten Oase:" },
      { ul: [
        { lead: "Aperitif und Getränke gratis", text: "Es ist der perfekte Moment, um an Deck zu entspannen, ein eiskaltes Getränk und einen Snack zu genießen, während die Sonne langsam hinter den Bergen der Albera verschwindet." },
        { lead: "Ein Bad in der Dämmerung", text: "Wenn Sie möchten, können Sie mit unseren Schnorchelbrillen in das türkisfarbene Wasser eintauchen (das zu dieser Stunde violette Töne annimmt) oder eine ruhige Fahrt auf dem Paddle-Surf-Board unter einem rosa und rötlich getönten Himmel machen." },
      ] },
      { h: "Rückkehr unter dem Mantel der Dämmerung" },
      { p: "Wenn die Sonne bereits untergegangen ist und der Himmel in einem Verlauf magischer Farben erstrahlt, beginnt der Skipper die sanfte Rückkehr zum Port de Llançà. Sie fahren entspannt, genießen die frische Abendbrise und beobachten, wie die ersten Lichter des Hafens angehen – der perfekte Abschluss eines Nachmittags purer mediterraner Auszeit." },
    ],
  },

  v5: {
    es: [
      { p: "Una ruta en barca compartida desde el Port de Llançà es la opción ideal para vivir la magia del norte de la Costa Brava de forma accesible y dinámica. Al tratarse de un tour compartido, disfrutarás de toda la exclusividad de navegar con un patrón local, pero compartiendo gastos con otros viajeros, lo que se traduce en una ventaja clave: un precio significativamente inferior al de un chárter privado." },
      { p: "Dado que el recorrido y la duración exacta están por definir en cada salida, la travesía se convierte en una aventura flexible. Dependiendo de las condiciones del mar y de la duración que se acuerde para el grupo, estas son las fascinantes zonas que podréis descubrir juntos:" },
      { h: "Un abanico de rumbos por descubrir" },
      { p: "Al no tener un itinerario cerrado, cada salida es única y el patrón local adaptará la ruta para garantizar la mejor experiencia a bordo:" },
      { ul: [
        { lead: "Rumbo Norte (Colera y Portbou)", text: "Navegaréis rodeando el virgen Cap Ras hasta adentraros en las tranquilas aguas de la bahía de Colera. Podréis contemplar los imponentes acantilados fronterizos de Portbou y la majestuosa Punta Cervera, donde los Pirineos se hunden literalmente en el mar. Un paisaje de una belleza colosal, perfecto para hacer fotos espectaculares." },
        { lead: "Rumbo Sur (Parque Natural del Cap de Creus)", text: "Os adentraréis en el tramo más salvaje de la Costa Brava, contemplando desde el agua la silueta del histórico Monestir de Sant Pere de Rodes. Avanzaréis entre acantilados de roca oscura y pizarra esculpidos por la tramuntana, descubriendo calas míticas como Cala Tavallera o Cala Prona." },
      ] },
      { h: "Momentos de fondeo, relax y nuevas amistades" },
      { p: "Independientemente del rumbo elegido, el barco echará el ancla en alguna de las paradisíacas calas de la zona (como la famosa Playa de Garbet o los rincones del Cap de Creus). En ese momento, la embarcación se convertirá en un punto de encuentro único:" },
      { ul: [
        { lead: "Diversión en el agua compartida", text: "Podréis lanzaros al mar a explorar los ricos fondos marinos con las gafas de snorkel incluidas o divertiros manteniendo el equilibrio sobre la tabla de paddle surf." },
        { lead: "Aperitivo y buen ambiente", text: "Mientras os relajáis bajo el sol en la cubierta de nuestra Quicksilver, os serviremos un aperitivo y bebidas de cortesía. Es el momento perfecto para charlar, compartir anécdotas con vuestros compañeros de viaje y disfrutar del Mediterráneo en un ambiente distendido y divertido." },
      ] },
      { p: "El regreso al Port de Llançà se realiza planeando suavemente sobre las olas, con la satisfacción de haber explorado rincones increíbles, haber conocido a gente nueva y haber disfrutado de una experiencia náutica de primer nivel optimizando al máximo tu presupuesto." },
    ],
    ca: [
      { p: "Una ruta en barca compartida des del Port de Llançà és l'opció ideal per viure la màgia del nord de la Costa Brava de manera accessible i dinàmica. Com que es tracta d'un tour compartit, gaudiràs de tota l'exclusivitat de navegar amb un patró local, però compartint despeses amb altres viatgers, cosa que es tradueix en un avantatge clau: un preu significativament inferior al d'un xàrter privat." },
      { p: "Atès que el recorregut i la durada exacta estan per definir en cada sortida, la travessia es converteix en una aventura flexible. Depenent de les condicions del mar i de la durada que s'acordi per al grup, aquestes són les fascinants zones que podreu descobrir junts:" },
      { h: "Un ventall de rumbs per descobrir" },
      { p: "En no tenir un itinerari tancat, cada sortida és única i el patró local adaptarà la ruta per garantir la millor experiència a bord:" },
      { ul: [
        { lead: "Rumb Nord (Colera i Portbou)", text: "Navegareu envoltant el verge Cap Ras fins a endinsar-vos en les tranquil·les aigües de la badia de Colera. Podreu contemplar els imponents penya-segats fronterers de Portbou i la majestuosa Punta Cervera, on els Pirineus s'enfonsen literalment al mar. Un paisatge d'una bellesa colossal, perfecte per fer fotos espectaculars." },
        { lead: "Rumb Sud (Parc Natural del Cap de Creus)", text: "Us endinsareu en el tram més salvatge de la Costa Brava, contemplant des de l'aigua la silueta de l'històric Monestir de Sant Pere de Rodes. Avançareu entre penya-segats de roca fosca i pissarra esculpits per la tramuntana, descobrint cales mítiques com Cala Tavallera o Cala Prona." },
      ] },
      { h: "Moments de fondeig, relax i noves amistats" },
      { p: "Independentment del rumb triat, la barca tirarà l'àncora en alguna de les paradisíaques cales de la zona (com la famosa Platja de Garbet o els racons del Cap de Creus). En aquell moment, l'embarcació es convertirà en un punt de trobada únic:" },
      { ul: [
        { lead: "Diversió a l'aigua compartida", text: "Podreu llançar-vos al mar a explorar els rics fons marins amb les ulleres de snorkel incloses o divertir-vos mantenint l'equilibri sobre la taula de paddle surf." },
        { lead: "Aperitiu i bon ambient", text: "Mentre us relaxeu sota el sol a la coberta de la nostra Quicksilver, us servirem un aperitiu i begudes de cortesia. És el moment perfecte per xerrar, compartir anècdotes amb els vostres companys de viatge i gaudir del Mediterrani en un ambient distès i divertit." },
      ] },
      { p: "El retorn al Port de Llançà es fa lliscant suaument sobre les onades, amb la satisfacció d'haver explorat racons increïbles, haver conegut gent nova i haver gaudit d'una experiència nàutica de primer nivell optimitzant al màxim el teu pressupost." },
    ],
    en: [
      { p: "A shared boat trip from the Port de Llançà is the ideal option to experience the magic of the northern Costa Brava in an accessible and dynamic way. As it's a shared tour, you'll enjoy all the exclusivity of sailing with a local skipper, but sharing the costs with other travellers, which translates into a key advantage: a price significantly lower than a private charter." },
      { p: "Since the route and exact duration are yet to be defined for each departure, the voyage becomes a flexible adventure. Depending on the sea conditions and the duration agreed for the group, these are the fascinating areas you'll be able to discover together:" },
      { h: "A range of courses to discover" },
      { p: "With no fixed itinerary, each departure is unique and the local skipper will adapt the route to ensure the best experience on board:" },
      { ul: [
        { lead: "Northbound (Colera and Portbou)", text: "You'll sail around the untouched Cap Ras until you reach the calm waters of Colera bay. You'll be able to admire the imposing border cliffs of Portbou and the majestic Punta Cervera, where the Pyrenees literally plunge into the sea. A landscape of colossal beauty, perfect for taking spectacular photos." },
        { lead: "Southbound (Cap de Creus Natural Park)", text: "You'll venture into the wildest stretch of the Costa Brava, contemplating from the water the silhouette of the historic Monastery of Sant Pere de Rodes. You'll move among cliffs of dark rock and slate sculpted by the tramontana, discovering legendary coves such as Cala Tavallera or Cala Prona." },
      ] },
      { h: "Time to anchor, relax and make new friends" },
      { p: "Whichever course is chosen, the boat will drop anchor in one of the area's paradisiacal coves (such as the famous Garbet Beach or the corners of Cap de Creus). At that moment, the boat becomes a unique meeting point:" },
      { ul: [
        { lead: "Shared fun in the water", text: "You can jump into the sea to explore the rich seabed with the included snorkel masks, or have fun keeping your balance on the paddle surf board." },
        { lead: "Aperitif and good vibes", text: "While you relax in the sun on the deck of our Quicksilver, we'll serve you a complimentary aperitif and drinks. It's the perfect time to chat, share stories with your fellow travellers and enjoy the Mediterranean in a relaxed and fun atmosphere." },
      ] },
      { p: "The return to the Port de Llançà is made gliding gently over the waves, with the satisfaction of having explored incredible spots, met new people and enjoyed a top-level nautical experience while making the most of your budget." },
    ],
    fr: [
      { p: "Une excursion en bateau partagée depuis le Port de Llançà est l'option idéale pour vivre la magie du nord de la Costa Brava de manière accessible et dynamique. Comme il s'agit d'un tour partagé, vous profiterez de toute l'exclusivité de naviguer avec un patron local, mais en partageant les frais avec d'autres voyageurs, ce qui se traduit par un avantage clé : un prix nettement inférieur à celui d'un charter privé." },
      { p: "Étant donné que le parcours et la durée exacte restent à définir à chaque sortie, la traversée devient une aventure flexible. Selon les conditions de la mer et la durée convenue pour le groupe, voici les zones fascinantes que vous pourrez découvrir ensemble :" },
      { h: "Un éventail de caps à découvrir" },
      { p: "N'ayant pas d'itinéraire fixe, chaque sortie est unique et le patron local adaptera l'itinéraire pour garantir la meilleure expérience à bord :" },
      { ul: [
        { lead: "Cap au Nord (Colera et Portbou)", text: "Vous naviguerez en contournant le Cap Ras vierge jusqu'à pénétrer dans les eaux tranquilles de la baie de Colera. Vous pourrez contempler les imposantes falaises frontalières de Portbou et la majestueuse Punta Cervera, où les Pyrénées plongent littéralement dans la mer. Un paysage d'une beauté colossale, parfait pour faire des photos spectaculaires." },
        { lead: "Cap au Sud (Parc Naturel du Cap de Creus)", text: "Vous vous enfoncerez dans le tronçon le plus sauvage de la Costa Brava, en contemplant depuis l'eau la silhouette de l'historique Monastère de Sant Pere de Rodes. Vous avancerez entre des falaises de roche sombre et d'ardoise sculptées par la tramontane, en découvrant des criques mythiques comme Cala Tavallera ou Cala Prona." },
      ] },
      { h: "Moments de mouillage, de détente et de nouvelles amitiés" },
      { p: "Quel que soit le cap choisi, le bateau jettera l'ancre dans l'une des criques paradisiaques de la région (comme la célèbre plage de Garbet ou les recoins du Cap de Creus). À ce moment-là, l'embarcation se transformera en un point de rencontre unique :" },
      { ul: [
        { lead: "Du plaisir dans l'eau, à partager", text: "Vous pourrez vous jeter à la mer pour explorer les riches fonds marins avec les masques de snorkel inclus, ou vous amuser à garder l'équilibre sur la planche de paddle surf." },
        { lead: "Apéritif et bonne ambiance", text: "Pendant que vous vous détendez au soleil sur le pont de notre Quicksilver, nous vous servirons un apéritif et des boissons offerts. C'est le moment parfait pour bavarder, partager des anecdotes avec vos compagnons de voyage et profiter de la Méditerranée dans une ambiance détendue et amusante." },
      ] },
      { p: "Le retour au Port de Llançà se fait en glissant doucement sur les vagues, avec la satisfaction d'avoir exploré des coins incroyables, rencontré de nouvelles personnes et profité d'une expérience nautique de premier ordre tout en optimisant au maximum votre budget." },
    ],
    de: [
      { p: "Eine geteilte Bootstour vom Port de Llançà ist die ideale Option, um den Zauber der nördlichen Costa Brava auf zugängliche und dynamische Weise zu erleben. Da es sich um eine geteilte Tour handelt, genießen Sie die ganze Exklusivität einer Fahrt mit einem einheimischen Skipper, teilen sich aber die Kosten mit anderen Reisenden, was einen entscheidenden Vorteil bedeutet: einen deutlich niedrigeren Preis als bei einem privaten Charter." },
      { p: "Da Route und genaue Dauer bei jeder Ausfahrt noch festzulegen sind, wird die Überfahrt zu einem flexiblen Abenteuer. Je nach Meeresbedingungen und der für die Gruppe vereinbarten Dauer sind dies die faszinierenden Gebiete, die Sie gemeinsam entdecken können:" },
      { h: "Eine Vielfalt an Kursen zum Entdecken" },
      { p: "Ohne festen Reiseplan ist jede Ausfahrt einzigartig, und der einheimische Skipper passt die Route an, um das beste Erlebnis an Bord zu gewährleisten:" },
      { ul: [
        { lead: "Kurs Nord (Colera und Portbou)", text: "Sie umrunden das unberührte Cap Ras, bis Sie in die ruhigen Gewässer der Bucht von Colera gelangen. Sie können die imposanten Grenzklippen von Portbou und die majestätische Punta Cervera betrachten, wo die Pyrenäen buchstäblich ins Meer abtauchen. Eine Landschaft von kolossaler Schönheit, perfekt für spektakuläre Fotos." },
        { lead: "Kurs Süd (Naturpark Cap de Creus)", text: "Sie dringen in den wildesten Abschnitt der Costa Brava vor und betrachten vom Wasser aus die Silhouette des historischen Klosters Sant Pere de Rodes. Sie fahren zwischen von der Tramuntana geformten Klippen aus dunklem Gestein und Schiefer und entdecken legendäre Buchten wie Cala Tavallera oder Cala Prona." },
      ] },
      { h: "Momente zum Ankern, Entspannen und neue Freundschaften schließen" },
      { p: "Unabhängig vom gewählten Kurs ankert das Boot in einer der paradiesischen Buchten der Gegend (wie dem berühmten Strand von Garbet oder den Winkeln des Cap de Creus). In diesem Moment wird das Boot zu einem einzigartigen Treffpunkt:" },
      { ul: [
        { lead: "Geteilter Spaß im Wasser", text: "Sie können ins Meer springen, um mit den inkludierten Schnorchelbrillen den reichen Meeresboden zu erkunden, oder sich beim Balancieren auf dem Paddle-Surf-Board vergnügen." },
        { lead: "Aperitif und gute Stimmung", text: "Während Sie sich an Deck unserer Quicksilver in der Sonne entspannen, servieren wir Ihnen einen Aperitif und Getränke gratis. Es ist der perfekte Moment, um zu plaudern, Anekdoten mit Ihren Mitreisenden zu teilen und das Mittelmeer in entspannter und fröhlicher Atmosphäre zu genießen." },
      ] },
      { p: "Die Rückkehr zum Port de Llançà erfolgt sanft über die Wellen gleitend, mit der Zufriedenheit, unglaubliche Orte erkundet, neue Menschen kennengelernt und ein erstklassiges nautisches Erlebnis genossen zu haben, während Sie Ihr Budget optimal nutzen." },
    ],
  },

  v3: {
    es: [
      { h: "Un rumbo a vuestra medida (Norte o Sur)." },
      { p: "Dependiendo de lo que os apetezca descubrir y del tiempo elegido, el patrón trazará la ruta ideal adaptada a vuestros gustos:" },
      { ul: [
        { lead: "Rumbo Norte (Hasta Punta Cervera)", text: "Navegaréis junto a los espectaculares viñedos frente al mar de la Playa de Garbet, bordearéis los pueblos marineros de Colera y Portbou, y contemplaréis los vertiginosos acantilados fronterizos que conducen a la majestuosa Punta Cervera. Un paisaje abrupto, cargado de historia y de una belleza colosal." },
        { lead: "Rumbo Sur (Hasta el Cap de Creus)", text: "Os adentraréis en el corazón del Parque Natural del Cap de Creus. Pasaréis por delante de la bahía de El Port de la Selva divisando el imponente Monestir de Sant Pere de Rodes y exploraréis calas míticas como Cala Tavallera o Cala Prona, hasta alcanzar la mítica punta del cabo, el punto más oriental de la península." },
      ] },
      { h: "Vuestras calas favoritas, vuestro propio tiempo" },
      { p: "La gran ventaja de esta ruta es que el barco fondeará exclusivamente en las calas que vosotros elijáis y durante el tiempo que queráis. Vosotros marcáis el ritmo del día:" },
      { ul: [
        { lead: "Diversión y aventura en el agua", text: "Cuando elijáis vuestro rincón paradisíaco, podréis lanzaros al mar a explorar los ricos fondos marinos con nuestras gafas de snorkel o divertiros surcando las aguas mansas sobre la tabla de paddle surf." },
        { lead: "Relax y catering flotante", text: "Disfrutad de la estancia en la lancha sin preocuparos por nada. Mientras descansáis con el sonido de las olas, os serviremos un aperitivo y bebidas de cortesía para brindar por un día perfecto en el mar." },
      ] },
      { h: "Un regreso flexible con recuerdos imborrables" },
      { p: "Tanto si elegís una escapada rápida de 2 horas como una jornada entera de 8 horas de sol a sol, el viaje de vuelta al Port de Llançà será un momento de relax absoluto. Navegaréis planeando sobre las olas, contemplando el paisaje cambiante de la Costa Brava y sabiendo que habéis vivido una aventura completamente única, diseñada por y para vosotros." },
    ],
    ca: [
      { h: "Un rumb a la vostra mida (Nord o Sud)." },
      { p: "Depenent del que us vingui de gust descobrir i del temps triat, el patró traçarà la ruta ideal adaptada als vostres gustos:" },
      { ul: [
        { lead: "Rumb Nord (Fins a Punta Cervera)", text: "Navegareu al costat dels espectaculars vinyars davant del mar de la Platja de Garbet, vorejareu els pobles mariners de Colera i Portbou, i contemplareu els vertiginosos penya-segats fronterers que condueixen a la majestuosa Punta Cervera. Un paisatge abrupte, carregat d'història i d'una bellesa colossal." },
        { lead: "Rumb Sud (Fins al Cap de Creus)", text: "Us endinsareu al cor del Parc Natural del Cap de Creus. Passareu per davant de la badia del Port de la Selva divisant l'imponent Monestir de Sant Pere de Rodes i explorareu cales mítiques com Cala Tavallera o Cala Prona, fins a arribar a la mítica punta del cap, el punt més oriental de la península." },
      ] },
      { h: "Les vostres cales preferides, el vostre propi temps" },
      { p: "El gran avantatge d'aquesta ruta és que la barca fondejarà exclusivament a les cales que vosaltres trieu i durant el temps que vulgueu. Vosaltres marqueu el ritme del dia:" },
      { ul: [
        { lead: "Diversió i aventura a l'aigua", text: "Quan trieu el vostre racó paradisíac, podreu llançar-vos al mar a explorar els rics fons marins amb les nostres ulleres de snorkel o divertir-vos solcant les aigües calmes sobre la taula de paddle surf." },
        { lead: "Relax i càtering flotant", text: "Gaudiu de l'estada a la llanxa sense preocupar-vos de res. Mentre descanseu amb el so de les onades, us servirem un aperitiu i begudes de cortesia per brindar per un dia perfecte al mar." },
      ] },
      { h: "Una tornada flexible amb records inesborrables" },
      { p: "Tant si trieu una escapada ràpida de 2 hores com una jornada sencera de 8 hores de sol a sol, el viatge de tornada al Port de Llançà serà un moment de relax absolut. Navegareu lliscant sobre les onades, contemplant el paisatge canviant de la Costa Brava i sabent que heu viscut una aventura completament única, dissenyada per vosaltres i per a vosaltres." },
    ],
    en: [
      { h: "A course tailored to you (North or South)." },
      { p: "Depending on what you feel like discovering and the time chosen, the skipper will plot the ideal route adapted to your tastes:" },
      { ul: [
        { lead: "Northbound (up to Punta Cervera)", text: "You'll sail beside the spectacular seafront vineyards of Garbet Beach, skirt the fishing villages of Colera and Portbou, and gaze at the dizzying border cliffs leading to the majestic Punta Cervera. A rugged landscape, full of history and of colossal beauty." },
        { lead: "Southbound (up to Cap de Creus)", text: "You'll venture into the heart of the Cap de Creus Natural Park. You'll pass in front of the bay of El Port de la Selva, spotting the imposing Monastery of Sant Pere de Rodes, and explore legendary coves such as Cala Tavallera or Cala Prona, until you reach the legendary tip of the cape, the easternmost point of the peninsula." },
      ] },
      { h: "Your favourite coves, your own time" },
      { p: "The great advantage of this route is that the boat will anchor exclusively in the coves you choose and for as long as you like. You set the pace of the day:" },
      { ul: [
        { lead: "Fun and adventure in the water", text: "When you pick your slice of paradise, you can jump into the sea to explore the rich seabed with our snorkel masks, or have fun skimming over the calm waters on the paddle surf board." },
        { lead: "Relaxation and floating catering", text: "Enjoy your time on the boat without worrying about a thing. While you rest to the sound of the waves, we'll serve you a complimentary aperitif and drinks to toast a perfect day at sea." },
      ] },
      { h: "A flexible return with unforgettable memories" },
      { p: "Whether you choose a quick 2-hour getaway or a full 8-hour day from dawn to dusk, the journey back to the Port de Llançà will be a moment of absolute relaxation. You'll glide over the waves, taking in the ever-changing scenery of the Costa Brava and knowing that you've lived a completely unique adventure, designed by you and for you." },
    ],
    fr: [
      { h: "Un cap à votre mesure (Nord ou Sud)." },
      { p: "Selon ce que vous avez envie de découvrir et le temps choisi, le patron tracera l'itinéraire idéal adapté à vos goûts :" },
      { ul: [
        { lead: "Cap au Nord (jusqu'à Punta Cervera)", text: "Vous naviguerez le long des spectaculaires vignobles face à la mer de la plage de Garbet, longerez les villages de pêcheurs de Colera et Portbou, et contemplerez les vertigineuses falaises frontalières qui mènent à la majestueuse Punta Cervera. Un paysage abrupt, chargé d'histoire et d'une beauté colossale." },
        { lead: "Cap au Sud (jusqu'au Cap de Creus)", text: "Vous vous enfoncerez au cœur du Parc Naturel du Cap de Creus. Vous passerez devant la baie d'El Port de la Selva en apercevant l'imposant Monastère de Sant Pere de Rodes et explorerez des criques mythiques comme Cala Tavallera ou Cala Prona, jusqu'à atteindre la mythique pointe du cap, le point le plus oriental de la péninsule." },
      ] },
      { h: "Vos criques préférées, à votre propre rythme" },
      { p: "Le grand avantage de cet itinéraire est que le bateau mouillera exclusivement dans les criques que vous choisirez et pendant le temps que vous voudrez. C'est vous qui donnez le rythme de la journée :" },
      { ul: [
        { lead: "Plaisir et aventure dans l'eau", text: "Lorsque vous choisirez votre coin paradisiaque, vous pourrez vous jeter à la mer pour explorer les riches fonds marins avec nos masques de snorkel ou vous amuser à filer sur les eaux calmes sur la planche de paddle surf." },
        { lead: "Détente et restauration flottante", text: "Profitez de votre séjour sur le bateau sans vous soucier de rien. Pendant que vous vous reposez au son des vagues, nous vous servirons un apéritif et des boissons offerts pour trinquer à une journée parfaite en mer." },
      ] },
      { h: "Un retour flexible avec des souvenirs inoubliables" },
      { p: "Que vous choisissiez une escapade rapide de 2 heures ou une journée entière de 8 heures du lever au coucher du soleil, le retour au Port de Llançà sera un moment de détente absolue. Vous glisserez sur les vagues, en contemplant le paysage changeant de la Costa Brava et en sachant que vous avez vécu une aventure totalement unique, conçue par vous et pour vous." },
    ],
    de: [
      { h: "Ein Kurs nach Ihrem Maß (Nord oder Süd)." },
      { p: "Je nachdem, was Sie entdecken möchten, und der gewählten Zeit, plant der Skipper die ideale, an Ihren Geschmack angepasste Route:" },
      { ul: [
        { lead: "Kurs Nord (bis Punta Cervera)", text: "Sie fahren entlang der spektakulären Weinberge am Meer des Strandes von Garbet, umrunden die Fischerdörfer Colera und Portbou und betrachten die schwindelerregenden Grenzklippen, die zur majestätischen Punta Cervera führen. Eine schroffe Landschaft voller Geschichte und von kolossaler Schönheit." },
        { lead: "Kurs Süd (bis zum Cap de Creus)", text: "Sie dringen ins Herz des Naturparks Cap de Creus vor. Sie fahren an der Bucht von El Port de la Selva vorbei, erblicken das imposante Kloster Sant Pere de Rodes und erkunden legendäre Buchten wie Cala Tavallera oder Cala Prona, bis Sie die legendäre Spitze des Kaps erreichen, den östlichsten Punkt der Halbinsel." },
      ] },
      { h: "Ihre Lieblingsbuchten, in Ihrem eigenen Tempo" },
      { p: "Der große Vorteil dieser Route ist, dass das Boot ausschließlich in den Buchten ankert, die Sie auswählen, und so lange Sie möchten. Sie bestimmen das Tempo des Tages:" },
      { ul: [
        { lead: "Spaß und Abenteuer im Wasser", text: "Wenn Sie Ihren paradiesischen Winkel gewählt haben, können Sie ins Meer springen, um mit unseren Schnorchelbrillen den reichen Meeresboden zu erkunden, oder sich vergnügen, indem Sie auf dem Paddle-Surf-Board über das ruhige Wasser gleiten." },
        { lead: "Entspannung und schwimmendes Catering", text: "Genießen Sie den Aufenthalt auf dem Boot, ohne sich um etwas kümmern zu müssen. Während Sie beim Klang der Wellen ruhen, servieren wir Ihnen einen Aperitif und Getränke gratis, um auf einen perfekten Tag auf See anzustoßen." },
      ] },
      { h: "Eine flexible Rückkehr mit unauslöschlichen Erinnerungen" },
      { p: "Ob Sie eine kurze 2-stündige Auszeit oder einen ganzen 8-stündigen Tag von Sonnenaufgang bis Sonnenuntergang wählen, die Rückfahrt zum Port de Llançà wird ein Moment absoluter Entspannung sein. Sie gleiten über die Wellen, betrachten die wechselnde Landschaft der Costa Brava und wissen, dass Sie ein völlig einzigartiges Abenteuer erlebt haben, von Ihnen und für Sie gestaltet." },
    ],
  },

  v6: {
    es: [
      { p: "Una salida de pesca desde el Port de Llançà es la oportunidad perfecta para adentrarse en las ricas aguas de la Mar d'Amunt, explorando los mejores puntos entre Llançà, Colera, Portbou y el Parque Natural del Cap de Creus. Acompañados por nuestro patrón local, tanto los pescadores experimentados como los debutantes encontrarán su espacio ideal a bordo. Para vuestra total comodidad, podéis traer vuestro propio equipo o utilizar el material del barco de forma totalmente gratuita, aplicando únicamente un pequeño suplemento extra si necesitáis que os proporcionemos el cebo vivo o los señuelos." },
      { p: "Además, para que disfrutéis al máximo de la jornada, todas nuestras salidas incluyen refrescos y un apetitoso aperitivo de cortesía a bordo." },
      { p: "Navegaremos adaptándonos a vuestro nivel y preferencias a través de múltiples modalidades y especies objetivo:" },
      { h: "Modalidades técnicas y especies objetivo" },
      { p: "Ponemos a vuestra disposición las técnicas más dinámicas del panorama actual, adaptándonos al tipo de fondo marino:" },
      { ul: [
        { lead: "Modalidades a bordo", text: "Practicaremos técnicas como rockfishing (ligera y activa), jigging (vertical para grandes profundidades), casting (lances precisos), egging (específica para calamares y sepias) o spinning (búsqueda de depredadores con señuelos)." },
        { lead: "En zonas de roca", text: "Buscaremos los cotizados peces que habitan los fondos abruptos del Cap de Creus, como pargos, sargos, cabrachos, meros, serviolas, dentones y doradas." },
        { lead: "En zonas de arena", text: "Rastrearemos los fondos limpios en busca de especies activas y combativas como pageles, caballas, jureles, estorninos y alachas." },
      ] },
      { h: "Dos enfoques y duraciones a medida" },
      { p: "Esta actividad se moldea por completo según el perfil de los tripulantes que suban a bordo para garantizar la mejor experiencia:" },
      { ul: [
        { lead: "Tour para adultos y aficionados (Duración: de 3 a 5 horas)", text: "Una jornada intensa diseñada para pescadores que quieren exprimir el día al máximo, perfeccionar su técnica y buscar las mejores picadas en los puntos más estratégicos. Al finalizar, siempre que el pescado cumpla con la talla mínima legal, cada pescador podrá elegir libremente si practicar la captura y suelta o quedarse con las piezas para disfrutar de una excelente cena en casa." },
        { lead: "Salida en familia / Especial niños (Duración máxima recomendada: 2 horas)", text: "Un enfoque lúdico y dinámico para que los más pequeños experimenten la emoción de pescar su primer pez. Limitamos el tiempo a un máximo de 2 horas para evitar que los niños se cansen o se aburran, asegurando que toda la actividad sea divertida. El patrón les enseñará a lanzar la línea y a respetar la fauna marina, aplicando rigurosamente las tallas legales para concienciarlos sobre el cuidado del Mediterráneo." },
      ] },
      { h: "Regreso a puerto con grandes historias" },
      { p: "Tras recoger los aparejos, la lancha iniciará un placentero viaje de regreso planeando sobre las olas de la Costa Brava. Llegaréis de nuevo al Port de Llançà relajados, con la brisa marina en la cara y la satisfacción de haber vivido una jornada náutica auténtica. Desembarcaréis listos para compartir vuestras hazañas marineras, con la cámara llena de fotos de vuestras capturas y el recuerdo de una experiencia irrepetible en el mar." },
      { p: "Este Tour requiere que los participantes posean su respectiva licencia de pesca." },
    ],
    ca: [
      { p: "Una sortida de pesca des del Port de Llançà és l'oportunitat perfecta per endinsar-se en les riques aigües de la Mar d'Amunt, explorant els millors punts entre Llançà, Colera, Portbou i el Parc Natural del Cap de Creus. Acompanyats pel nostre patró local, tant els pescadors experimentats com els debutants trobaran el seu espai ideal a bord. Per a la vostra total comoditat, podeu portar el vostre propi equip o fer servir el material de la barca de manera totalment gratuïta, aplicant únicament un petit suplement extra si necessiteu que us proporcionem l'esquer viu o els enganys." },
      { p: "A més, perquè gaudiu al màxim de la jornada, totes les nostres sortides inclouen refrescos i un saborós aperitiu de cortesia a bord." },
      { p: "Navegarem adaptant-nos al vostre nivell i preferències a través de múltiples modalitats i espècies objectiu:" },
      { h: "Modalitats tècniques i espècies objectiu" },
      { p: "Posem a la vostra disposició les tècniques més dinàmiques del panorama actual, adaptant-nos al tipus de fons marí:" },
      { ul: [
        { lead: "Modalitats a bord", text: "Practicarem tècniques com el rockfishing (lleugera i activa), el jigging (vertical per a grans profunditats), el casting (llançaments precisos), l'egging (específica per a calamars i sípies) o el spinning (cerca de depredadors amb enganys)." },
        { lead: "A zones de roca", text: "Buscarem els cotitzats peixos que habiten els fons abruptes del Cap de Creus, com pagres, sargs, caps-roigs, neros, sírvies, déntols i orades." },
        { lead: "A zones de sorra", text: "Rastrejarem els fons nets a la recerca d'espècies actives i combatives com pagells, verats, sorells, bisos i alatxes." },
      ] },
      { h: "Dos enfocaments i durades a mida" },
      { p: "Aquesta activitat es modela completament segons el perfil dels tripulants que pugin a bord per garantir la millor experiència:" },
      { ul: [
        { lead: "Tour per a adults i aficionats (Durada: de 3 a 5 hores)", text: "Una jornada intensa dissenyada per a pescadors que volen treure el màxim partit del dia, perfeccionar la seva tècnica i buscar les millors picades als punts més estratègics. En acabar, sempre que el peix compleixi la talla mínima legal, cada pescador podrà triar lliurement si practicar la captura i alliberament o quedar-se les peces per gaudir d'un excel·lent sopar a casa." },
        { lead: "Sortida en família / Especial nens (Durada màxima recomanada: 2 hores)", text: "Un enfocament lúdic i dinàmic perquè els més petits experimentin l'emoció de pescar el seu primer peix. Limitem el temps a un màxim de 2 hores per evitar que els nens es cansin o s'avorreixin, assegurant que tota l'activitat sigui divertida. El patró els ensenyarà a llançar la línia i a respectar la fauna marina, aplicant rigorosament les talles legals per conscienciar-los sobre la cura del Mediterrani." },
      ] },
      { h: "Tornada a port amb grans històries" },
      { p: "Després de recollir els ormeigs, la llanxa iniciarà un plaent viatge de tornada lliscant sobre les onades de la Costa Brava. Arribareu de nou al Port de Llançà relaxats, amb la brisa marina a la cara i la satisfacció d'haver viscut una jornada nàutica autèntica. Desembarcareu llestos per compartir les vostres gestes marineres, amb la càmera plena de fotos de les vostres captures i el record d'una experiència irrepetible al mar." },
      { p: "Aquest tour requereix que els participants tinguin la seva respectiva llicència de pesca." },
    ],
    en: [
      { p: "A fishing trip from the Port de Llançà is the perfect opportunity to head into the rich waters of the Mar d'Amunt, exploring the best spots between Llançà, Colera, Portbou and the Cap de Creus Natural Park. Accompanied by our local skipper, both experienced anglers and beginners will find their ideal place on board. For your total comfort, you can bring your own gear or use the boat's equipment completely free of charge, with only a small extra supplement if you need us to provide live bait or lures." },
      { p: "What's more, so you can make the most of the day, all our trips include soft drinks and an appetising complimentary snack on board." },
      { p: "We'll sail adapting to your level and preferences through a variety of techniques and target species:" },
      { h: "Technical methods and target species" },
      { p: "We put at your disposal the most dynamic techniques on the current scene, adapting to the type of seabed:" },
      { ul: [
        { lead: "Methods on board", text: "We'll practise techniques such as rockfishing (light and active), jigging (vertical for great depths), casting (precise casts), egging (specifically for squid and cuttlefish) or spinning (hunting predators with lures)." },
        { lead: "In rocky areas", text: "We'll look for the prized fish that inhabit the rugged seabeds of Cap de Creus, such as red porgy, seabream, scorpionfish, grouper, amberjack, dentex and gilthead bream." },
        { lead: "In sandy areas", text: "We'll comb the clean seabeds in search of active, combative species such as pandora, mackerel, horse mackerel, chub mackerel and gilt sardine." },
      ] },
      { h: "Two approaches and tailor-made durations" },
      { p: "This activity is shaped entirely around the profile of the crew who come on board to guarantee the best experience:" },
      { ul: [
        { lead: "Tour for adults and enthusiasts (Duration: 3 to 5 hours)", text: "An intense day designed for anglers who want to make the most of the day, perfect their technique and look for the best bites at the most strategic spots. At the end, provided the fish meets the legal minimum size, each angler can freely choose whether to practise catch and release or keep their catch to enjoy an excellent dinner at home." },
        { lead: "Family outing / Kids' special (Recommended maximum duration: 2 hours)", text: "A fun, dynamic approach so that the little ones can experience the thrill of catching their first fish. We limit the time to a maximum of 2 hours to keep the children from getting tired or bored, ensuring the whole activity is fun. The skipper will teach them to cast the line and to respect marine life, rigorously applying the legal sizes to raise their awareness about caring for the Mediterranean." },
      ] },
      { h: "Back to port with great stories" },
      { p: "After packing up the tackle, the boat will begin a pleasant journey back, gliding over the waves of the Costa Brava. You'll arrive back at the Port de Llançà relaxed, with the sea breeze on your face and the satisfaction of having lived an authentic day at sea. You'll disembark ready to share your seafaring feats, with your camera full of photos of your catches and the memory of a one-of-a-kind experience at sea." },
      { p: "This tour requires participants to hold their respective fishing licence." },
    ],
    fr: [
      { p: "Une sortie de pêche depuis le Port de Llançà est l'occasion parfaite de s'aventurer dans les riches eaux de la Mar d'Amunt, en explorant les meilleurs spots entre Llançà, Colera, Portbou et le Parc Naturel du Cap de Creus. Accompagnés de notre patron local, aussi bien les pêcheurs expérimentés que les débutants trouveront leur place idéale à bord. Pour votre plus grand confort, vous pouvez apporter votre propre équipement ou utiliser le matériel du bateau de façon totalement gratuite, avec seulement un petit supplément si vous avez besoin que nous vous fournissions l'appât vivant ou les leurres." },
      { p: "De plus, pour que vous profitiez au maximum de la journée, toutes nos sorties incluent des boissons fraîches et un savoureux apéritif offert à bord." },
      { p: "Nous naviguerons en nous adaptant à votre niveau et à vos préférences à travers de multiples techniques et espèces cibles :" },
      { h: "Techniques et espèces cibles" },
      { p: "Nous mettons à votre disposition les techniques les plus dynamiques du moment, en nous adaptant au type de fond marin :" },
      { ul: [
        { lead: "Techniques à bord", text: "Nous pratiquerons des techniques comme le rockfishing (légère et active), le jigging (vertical pour les grandes profondeurs), le casting (lancers précis), l'egging (spécifique aux calamars et seiches) ou le spinning (recherche de prédateurs avec des leurres)." },
        { lead: "Dans les zones rocheuses", text: "Nous chercherons les poissons recherchés qui habitent les fonds abrupts du Cap de Creus, comme le pagre, le sar, la rascasse, le mérou, la sériole, le denté et la dorade." },
        { lead: "Dans les zones de sable", text: "Nous ratisserons les fonds propres à la recherche d'espèces actives et combatives comme le pageot, le maquereau, le chinchard, le maquereau espagnol et l'allache." },
      ] },
      { h: "Deux approches et des durées sur mesure" },
      { p: "Cette activité se façonne entièrement selon le profil des passagers qui montent à bord afin de garantir la meilleure expérience :" },
      { ul: [
        { lead: "Tour pour adultes et passionnés (Durée : de 3 à 5 heures)", text: "Une journée intense conçue pour les pêcheurs qui veulent profiter au maximum de la journée, perfectionner leur technique et chercher les meilleures touches aux endroits les plus stratégiques. À la fin, à condition que le poisson respecte la taille minimale légale, chaque pêcheur pourra choisir librement de pratiquer le no-kill (capture et relâche) ou de garder ses prises pour savourer un excellent dîner à la maison." },
        { lead: "Sortie en famille / Spécial enfants (Durée maximale recommandée : 2 heures)", text: "Une approche ludique et dynamique pour que les plus petits découvrent l'émotion d'attraper leur premier poisson. Nous limitons le temps à un maximum de 2 heures pour éviter que les enfants ne se fatiguent ou ne s'ennuient, en garantissant que toute l'activité soit amusante. Le patron leur apprendra à lancer la ligne et à respecter la faune marine, en appliquant rigoureusement les tailles légales pour les sensibiliser à la protection de la Méditerranée." },
      ] },
      { h: "Retour au port avec de belles histoires" },
      { p: "Après avoir rangé le matériel, le bateau entamera un agréable voyage de retour en glissant sur les vagues de la Costa Brava. Vous arriverez de nouveau au Port de Llançà détendus, avec la brise marine sur le visage et la satisfaction d'avoir vécu une véritable journée en mer. Vous débarquerez prêts à partager vos exploits de marins, avec l'appareil photo rempli de photos de vos prises et le souvenir d'une expérience inoubliable en mer." },
      { p: "Ce tour exige que les participants possèdent leur licence de pêche respective." },
    ],
    de: [
      { p: "Eine Angelausfahrt vom Port de Llançà ist die perfekte Gelegenheit, in die reichen Gewässer der Mar d'Amunt vorzudringen und die besten Spots zwischen Llançà, Colera, Portbou und dem Naturpark Cap de Creus zu erkunden. Begleitet von unserem einheimischen Skipper finden sowohl erfahrene Angler als auch Anfänger ihren idealen Platz an Bord. Zu Ihrem vollen Komfort können Sie Ihre eigene Ausrüstung mitbringen oder das Material des Bootes völlig kostenlos nutzen; lediglich ein kleiner Aufpreis fällt an, wenn Sie lebenden Köder oder Kunstköder benötigen." },
      { p: "Außerdem beinhalten alle unsere Ausfahrten Erfrischungsgetränke und einen appetitlichen Aperitif gratis an Bord, damit Sie den Tag in vollen Zügen genießen können." },
      { p: "Wir fahren und passen uns Ihrem Niveau und Ihren Vorlieben durch verschiedene Methoden und Zielarten an:" },
      { h: "Technische Methoden und Zielarten" },
      { p: "Wir stellen Ihnen die dynamischsten Techniken der aktuellen Szene zur Verfügung und passen uns der Art des Meeresbodens an:" },
      { ul: [
        { lead: "Methoden an Bord", text: "Wir praktizieren Techniken wie Rockfishing (leicht und aktiv), Jigging (vertikal für große Tiefen), Casting (präzise Würfe), Egging (speziell für Tintenfische und Sepien) oder Spinning (Jagd auf Raubfische mit Kunstködern)." },
        { lead: "In Felszonen", text: "Wir suchen die begehrten Fische, die die schroffen Gründe des Cap de Creus bewohnen, wie Rotbrasse, Geißbrasse, Drachenkopf, Zackenbarsch, Bernsteinmakrele, Zahnbrasse und Goldbrasse." },
        { lead: "In Sandzonen", text: "Wir durchkämmen die sauberen Gründe auf der Suche nach aktiven und kampfstarken Arten wie Rotbrasse, Makrele, Stöcker, Spanischer Makrele und Sardinelle." },
      ] },
      { h: "Zwei Ansätze und maßgeschneiderte Dauern" },
      { p: "Diese Aktivität wird vollständig nach dem Profil der Crew gestaltet, die an Bord kommt, um das beste Erlebnis zu garantieren:" },
      { ul: [
        { lead: "Tour für Erwachsene und Liebhaber (Dauer: 3 bis 5 Stunden)", text: "Ein intensiver Tag für Angler, die den Tag maximal auskosten, ihre Technik verfeinern und an den strategischsten Punkten die besten Bisse suchen möchten. Am Ende kann jeder Angler – sofern der Fisch das gesetzliche Mindestmaß erfüllt – frei wählen, ob er Catch and Release praktiziert oder seinen Fang behält, um zu Hause ein hervorragendes Abendessen zu genießen." },
        { lead: "Familienausflug / Spezial für Kinder (empfohlene Höchstdauer: 2 Stunden)", text: "Ein spielerischer und dynamischer Ansatz, damit die Kleinen die Aufregung erleben, ihren ersten Fisch zu fangen. Wir begrenzen die Zeit auf maximal 2 Stunden, um zu vermeiden, dass die Kinder müde werden oder sich langweilen, und sorgen dafür, dass die gesamte Aktivität Spaß macht. Der Skipper bringt ihnen bei, die Leine auszuwerfen und die Meeresfauna zu respektieren, wobei er die gesetzlichen Größen streng anwendet, um sie für den Schutz des Mittelmeers zu sensibilisieren." },
      ] },
      { h: "Rückkehr in den Hafen mit großartigen Geschichten" },
      { p: "Nach dem Einholen der Ausrüstung beginnt das Boot eine angenehme Rückfahrt, über die Wellen der Costa Brava gleitend. Sie kommen entspannt zurück zum Port de Llançà, mit der Meeresbrise im Gesicht und der Zufriedenheit, einen authentischen Tag auf See erlebt zu haben. Sie gehen von Bord, bereit, Ihre seemännischen Heldentaten zu teilen, mit der Kamera voller Fotos Ihrer Fänge und der Erinnerung an ein einzigartiges Erlebnis auf dem Meer." },
      { p: "Diese Tour setzt voraus, dass die Teilnehmer ihre jeweilige Angellizenz besitzen." },
    ],
  },
};

/* ============================================================
   RENDER
   ============================================================ */
function currentLang() {
  return document.documentElement.getAttribute("lang") ||
         localStorage.getItem("preferredLang") || "es";
}

function routeImages(id) {
  const n = Number(id.replace("v", ""));
  return (typeof slideshows !== "undefined" && slideshows[n]) ? slideshows[n] : [];
}

/* Crea els blocs HTML de la descripció en l'idioma donat */
function descToHtml(blocks, lang, dict) {
  if (!blocks || !blocks.length) {
    // Sense descripció encara: avís amable traduït
    return '<p class="route-soon">' + (dict.route_soon || "") + "</p>";
  }
  return blocks.map((b) => {
    if (b.p) return "<p>" + b.p + "</p>";
    if (b.h) return "<h2>" + b.h + "</h2>";
    if (b.ul) {
      const items = b.ul.map((li) =>
        li.lead ? "<li><strong>" + li.lead + ":</strong> " + li.text + "</li>"
                : "<li>" + li.text + "</li>"
      ).join("");
      return "<ul>" + items + "</ul>";
    }
    return "";
  }).join("");
}

/* Galeria: si el nombre de fotos és imparell -> 1 de gran + la resta petites;
   si és parell -> totes de la mateixa mida. */
function buildPhotoGallery(box, imgs, altBase) {
  box.innerHTML = "";
  const odd = imgs.length % 2 === 1;
  let rest = imgs;

  if (odd && imgs.length > 1) {
    const feat = document.createElement("a");
    feat.className = "pg-item pg-featured";
    feat.href = imgs[0];
    feat.setAttribute("data-full", imgs[0]);
    feat.innerHTML = '<img src="' + imgs[0] + '" alt="' + altBase + '" loading="lazy">';
    box.appendChild(feat);
    rest = imgs.slice(1);
  }

  const grid = document.createElement("div");
  grid.className = "pg-grid";
  rest.forEach((src) => {
    const a = document.createElement("a");
    a.className = "pg-item";
    a.href = src;
    a.setAttribute("data-full", src);
    a.innerHTML = '<img src="' + src + '" alt="' + altBase + '" loading="lazy">';
    grid.appendChild(a);
  });
  box.appendChild(grid);
}

/* Caixa de llum (lightbox) per veure les fotos a mida completa */
function setupLightbox(galleryBox) {
  let lb = document.querySelector(".lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lb-btn lb-close" aria-label="Cerrar">&times;</button>' +
      '<button class="lb-btn lb-nav lb-prev" aria-label="Anterior">&#8249;</button>' +
      '<img alt="">' +
      '<button class="lb-btn lb-nav lb-next" aria-label="Siguiente">&#8250;</button>';
    document.body.appendChild(lb);
  }
  const img = lb.querySelector("img");
  let list = [], idx = 0;

  const show = (i) => { idx = (i + list.length) % list.length; img.src = list[idx]; };
  const open = (i) => { lb.classList.add("open"); show(i); document.body.style.overflow = "hidden"; };
  const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };

  galleryBox.addEventListener("click", (e) => {
    const item = e.target.closest(".pg-item");
    if (!item) return;
    e.preventDefault();
    list = [...galleryBox.querySelectorAll(".pg-item")].map((a) => a.getAttribute("data-full"));
    open(list.indexOf(item.getAttribute("data-full")));
  });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); show(idx - 1); });
  lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); show(idx + 1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(idx - 1);
    else if (e.key === "ArrowRight") show(idx + 1);
  });
}

/* Omple tota la pàgina en l'idioma actiu (es torna a cridar en canviar d'idioma) */
function renderRoute(id, lang) {
  const dict = (typeof translations !== "undefined" && translations[lang]) ? translations[lang] : {};
  const title = dict["w" + id.replace("v", "") + "_title"] || dict.page_title || "Ruta";
  const tag = dict[routeTagKey[id]] || "";

  // Etiqueta + títol
  const tagEl = document.querySelector(".route-hero .route-tag");
  if (tagEl) tagEl.textContent = tag;
  const titleEl = document.querySelector(".route-title");
  if (titleEl) titleEl.textContent = title;

  // Línies d'informació (durada / capacitat / preu)
  const metaEl = document.querySelector(".route-meta");
  if (metaEl) {
    const n = id.replace("v", "");
    const lines = ["w" + n + "_l1", "w" + n + "_l2", "w" + n + "_l3"]
      .map((k) => dict[k]).filter(Boolean);
    metaEl.innerHTML = lines.map((t) => "<li>" + t + "</li>").join("");
  }

  // Botó de reserva (WhatsApp amb el nom de la ruta)
  const cta = document.querySelector(".route-cta");
  if (cta) {
    const msg = (dict.wa_reserve_msg || "Hola!") + " " + title;
    cta.href = "https://wa.me/34635936170?text=" + encodeURIComponent(msg);
  }

  // Descripció
  const descEl = document.querySelector(".route-desc");
  if (descEl) {
    const blocks = (routeDesc[id] && routeDesc[id][lang]) || (routeDesc[id] && routeDesc[id].es);
    descEl.innerHTML = descToHtml(blocks, lang, dict);
  }

  // Títol de la galeria
  const galTitle = document.querySelector(".route-gallery-title");
  if (galTitle) galTitle.textContent = dict.gallery_photos || "";

  // Metadades de la pàgina (SEO)
  document.title = title + " | Barca Tour Llançà";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const firstP = (routeDesc[id] && routeDesc[id][lang] || [])[0];
    if (firstP && firstP.p) metaDesc.setAttribute("content", firstP.p);
  }
}

/* ============================================================
   INICIALITZACIÓ (només a ruta.html)
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".route-detail");
  if (!page) return; // no és la pàgina de detall

  const params = new URLSearchParams(location.search);
  let id = (params.get("r") || "v1").toLowerCase();
  if (!routeTagKey[id]) id = "v1"; // ruta desconeguda -> primera

  const imgs = routeImages(id);
  const altBase = (translations?.es?.["w" + id.replace("v", "") + "_title"] || "Ruta") + " - Barca Tour Llançà";

  // Foto de fons de la capçalera = primera foto de la ruta
  const hero = document.querySelector(".route-hero");
  if (hero && imgs[0]) hero.style.backgroundImage = "url('" + imgs[0] + "')";

  // Enllaç de reserva del CTA cap a la ruta correcta (l'href real el posa renderRoute)
  // Galeria de fotos
  const galleryBox = document.querySelector(".photo-gallery");
  if (galleryBox) {
    buildPhotoGallery(galleryBox, imgs, altBase);
    setupLightbox(galleryBox);
  }

  // Render inicial + re-render en canviar d'idioma
  renderRoute(id, currentLang());
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => renderRoute(id, b.dataset.lang))
  );

  // A la pàgina de ruta el contingut apareix amb la transició de seguida en carregar
  // (mateixa animació que les altres, però sense haver de baixar perquè es reveli).
  setTimeout(() => {
    document.querySelectorAll(".route-detail .reveal").forEach((el) => el.classList.add("visible"));
  }, 120);

  // Canònica de la pàgina
  const canon = document.querySelector('link[rel="canonical"]');
  if (canon) canon.setAttribute("href", "https://www.barcatourllanca.com/ruta.html?r=" + id);
});
