// Données détaillées des destinations
const destinationData = {
  abidjan: {
    icon: '🏙️',
    bgClass: 'bg-orange',
    title: 'Abidjan',
    subtitle: 'La Perle des Lagunes — Capitale économique de la Côte d\'Ivoire',
    description: 'Abidjan est la métropole la plus dynamique d\'Afrique de l\'Ouest, surnommée "Paris de l\'Afrique". Avec ses gratte-ciel modernes qui surplombent la lagune Ébrié, ses marchés colorés et une scène culinaire et nocturne trépidante, elle offre une expérience unique entre tradition africaine et modernité internationale.',
    sights: [
      'Le Plateau — quartier d\'affaires avec ses tours emblématiques',
      'Cocody — villas coloniales et l\'Université Félix Houphouët-Boigny',
      'Treichville — marché animé, vie nocturne et maquis authentiques',
      'Parc du Banco — forêt tropicale urbaine classée UNESCO',
      'Cathédrale Saint-Paul — architecture exceptionnelle de Aldo Spirito',
      'Musée des Civilisations d\'Abidjan'
    ],
    activities: [
      'Dîner dans un maquis traditionnel',
      'Croisière sur la lagune Ébrié au coucher du soleil',
      'Shopping aux Deux Plateaux et au marché de Cocody',
      'Visite du marché de Port-Bouët au bord de la mer',
      'Sortie en boîte de nuit dans les clubs branchés',
      'Excursion d\'une journée à Grand-Bassam (40 km)'
    ],
    bestTime: 'Toute l\'année. Évitez la grande saison des pluies (mai–juillet) pour un séjour plus confortable.',
    practical: [
      'Vol direct depuis Paris Charles de Gaulle (environ 6h)',
      'Aéroport international Félix Houphouët-Boigny (ABJ)',
      'Transports : taxis, gbaka (minibus) et woro-woro',
      'Hébergements variés : hôtels luxe au Plateau, auberges à Treichville',
      'Visa requis — e-visa disponible en ligne'
    ]
  },
  yamoussoukro: {
    icon: '🏛️',
    bgClass: 'bg-yellow',
    title: 'Yamoussoukro',
    subtitle: 'La capitale politique — Ville des monuments et des crocodiles sacrés',
    description: 'Capitale officielle de la Côte d\'Ivoire depuis 1983, Yamoussoukro est une ville à l\'urbanisme grandiose imaginée par le président Félix Houphouët-Boigny. Ses larges avenues bordées de palmiers et ses monuments colossaux contrastent avec les traditions ancestrales préservées des villages environnants.',
    sights: [
      'Basilique Notre-Dame de la Paix — plus grande basilique du monde (UNESCO)',
      'Lac aux Crocodiles Sacrés — gardiens mystiques de la ville',
      'Fondation Félix Houphouët-Boigny — musée et centre culturel',
      'Palais Présidentiel — architecture majestueuse (extérieur)',
      'Institut Polytechnique Félix Houphouët-Boigny (INPHB)',
      'Hôtel Président — chef-d\'œuvre architectural des années 70'
    ],
    activities: [
      'Visite guidée de l\'intérieur de la basilique (gratuit)',
      'Assister à la messe dans la basilique le dimanche',
      'Cérémonie de nourrissage des crocodiles sacrés',
      'Promenade en barque autour du lac présidentiel',
      'Découverte de l\'histoire politique de la Côte d\'Ivoire'
    ],
    bestTime: 'Novembre à avril (saison sèche). La période des fêtes de fin d\'année est particulièrement animée.',
    practical: [
      'À 240 km d\'Abidjan — environ 3h de route sur l\'autoroute',
      'Bus depuis la gare routière Sud d\'Abidjan (départs fréquents)',
      'Hébergements : Hôtel Président, guest houses en ville',
      'Tenue correcte exigée pour l\'entrée dans la basilique',
      'Guides disponibles à l\'entrée de la basilique'
    ]
  },
  tai: {
    icon: '🌿',
    bgClass: 'bg-green',
    title: 'Parc National de Taï',
    subtitle: 'Réserve de Biosphère UNESCO — Joyau de la biodiversité africaine',
    description: 'Classé au Patrimoine Mondial de l\'UNESCO depuis 1982, le Parc National de Taï est le dernier grand massif de forêt tropicale humide primaire d\'Afrique de l\'Ouest. Sur 536 000 hectares de forêt vierge, il abrite une biodiversité extraordinaire qui fascine les scientifiques du monde entier depuis des décennies.',
    sights: [
      'Chimpanzés sauvages habituées — observés depuis 1979',
      'Hippopotame pygmée — espèce rarissime et menacée',
      'Plus de 1 300 espèces végétales dont 150 endémiques',
      '230 espèces d\'oiseaux dont 28 menacées d\'extinction',
      'Léopards, buffles de forêt et colobes bais',
      'Rivières et cascades au cœur de la forêt primaire'
    ],
    activities: [
      'Randonnées guidées dans la forêt primaire (1 à 3 jours)',
      'Observation et suivi des chimpanzés avec des primatologues',
      'Photographie animalière au lever du jour',
      'Programme de recherche participatif',
      'Nuitée en camp forestier sous les étoiles'
    ],
    bestTime: 'Novembre à mars (saison sèche). Meilleure visibilité pour la faune et chemins plus praticables.',
    practical: [
      'Accès depuis San-Pédro (2h) ou la ville de Taï',
      'Visites obligatoirement avec un guide agréé OIPR',
      'Prévoir minimum 2 à 3 jours pour une vraie immersion',
      'Équipement : bottes, imperméable, répulsif insectes',
      'Hébergement : lodges et campements en lisière de parc'
    ]
  },
  grandbassam: {
    icon: '🏖️',
    bgClass: 'bg-blue',
    title: 'Grand-Bassam',
    subtitle: 'Patrimoine Mondial UNESCO — L\'âme coloniale au bord de l\'Atlantique',
    description: 'Première capitale coloniale de la Côte d\'Ivoire (1893–1900), Grand-Bassam est inscrite au Patrimoine Mondial de l\'UNESCO depuis 2012. À seulement 40 km d\'Abidjan, cette ville d\'exception conjugue architecture coloniale restaurée, plages de l\'Atlantique et artisanat local de grande qualité.',
    sights: [
      'Quartier historique N\'zima — bâtiments coloniaux classés UNESCO',
      'Musée National du Costume — plus de 10 000 pièces ethniques',
      'Ancien Gouvernorat — joyau de l\'architecture coloniale',
      'Palais de Justice et Prison Coloniale historique',
      'Port de pêche traditionnel — scènes de vie authentiques',
      'Plages de l\'Atlantique — sable doré et cocotiers'
    ],
    activities: [
      'Balade architecturale dans le quartier colonial',
      'Baignade et surf sur les plages de l\'Atlantique',
      'Achat d\'artisanat local : masques, pagnes, bijoux',
      'Dégustation de fruits de mer frais en bord de mer',
      'Excursion en pirogue sur la lagune',
      'Cours de cuisine ivoirienne avec des locaux'
    ],
    bestTime: 'Toute l\'année. Avril : Semaine Nationale des Arts et de la Culture de Grand-Bassam. Évitez mai–juillet (houle forte).',
    practical: [
      'À 40 km d\'Abidjan — 45 min en taxi (depuis Treichville)',
      'Idéal pour un week-end depuis Abidjan',
      'Hébergements : hôtels boutique et guest houses en bord de mer',
      'Restaurants de fruits de mer au bord de la plage',
      'Accès libre au quartier historique (musée payant)'
    ]
  },
  man: {
    icon: '⛰️',
    bgClass: 'bg-teal',
    title: 'Man et les 18 Montagnes',
    subtitle: 'Le pays de la montagne — Culture Dan et paysages spectaculaires',
    description: 'Nichée dans l\'Ouest de la Côte d\'Ivoire, la région de Man est un paradis pour les amateurs de nature sauvage et de cultures authentiques. Porte d\'entrée de la région des 18 Montagnes, elle offre des paysages à couper le souffle et une immersion incomparable dans la culture Dan, l\'une des plus riches et mystérieuses d\'Afrique de l\'Ouest.',
    sights: [
      'Mont Tonkoui — point culminant du pays à 1 752 m',
      'La Dent de Man — formation rocheuse iconique et spectaculaire',
      'Cascades de Man — chutes majestueuses au cœur de la nature',
      'Villages Dan authentiques et leurs greniers à mil traditionnels',
      'Masques sacrés Dan, Guéré et Wobé — patrimoine vivant',
      'Grottes et formations géologiques de la région'
    ],
    activities: [
      'Randonnées vers le Mont Tonkoui et la Dent de Man',
      'Visite immersive des villages Dan avec guide local',
      'Assister aux cérémonies de masques sacrés (selon saison)',
      'Rencontre avec les artisans : tisserands, sculpteurs de masques',
      'Baignade au pied des cascades de Man',
      'Accrobranche et activités de plein air'
    ],
    bestTime: 'Novembre à février (saison sèche). Les paysages sont particulièrement verdoyants juste après les pluies (octobre).',
    practical: [
      'À 600 km d\'Abidjan — vol interne (1h) ou route (8h)',
      'Aéroport de Man (desservi par Air Côte d\'Ivoire)',
      'Guides locaux indispensables pour les randonnées en montagne',
      'Hébergements : hôtels en ville, campements en altitude',
      'Tenue respectueuse lors des visites de villages'
    ]
  },
  assinie: {
    icon: '🌅',
    bgClass: 'bg-pink',
    title: 'Assinie & San-Pédro',
    subtitle: 'Les joyaux balnéaires — Plages de rêve et lagunes poissonneuses',
    description: 'Assinie, station balnéaire de prestige à l\'Est d\'Abidjan, et San-Pédro, ville portuaire dynamique au Sud-Ouest, représentent les deux visages du littoral ivoirien. Leurs plages de sable fin balayées par l\'Atlantique, leurs lagunes aux eaux turquoise et leur atmosphère détendue en font des destinations idéales pour le ressourcement.',
    sights: [
      'Assinie — plages immaculées classées parmi les plus belles d\'Afrique',
      'Lagune Aby — 30 km de plan d\'eau, île aux oiseaux migrateurs',
      'Village de pêcheurs de Mondoukou — vie authentique',
      'San-Pédro — Plage de la Baz et falaises impressionnantes',
      'Port minéralier de San-Pédro — infrastructures modernes',
      'Parc National de Taï — accessible depuis San-Pédro (2h)'
    ],
    activities: [
      'Surf et kitesurf sur l\'Atlantique (juillet–octobre : houle idéale)',
      'Pêche sportive en mer au large',
      'Balades romantiques en pirogue sur la lagune Aby',
      'Plongée sous-marine et snorkeling',
      'Hammam et soins spa dans les resorts de luxe',
      'Farniente absolu face à l\'Atlantique'
    ],
    bestTime: 'Novembre à avril pour la mer calme et le soleil. Juillet à octobre pour le surf (houle atlantique puissante).',
    practical: [
      'Assinie à 90 km d\'Abidjan — 1h30 en voiture',
      'San-Pédro : vol interne depuis Abidjan (50 min) ou route (7h)',
      'Assinie : nombreux resorts et hôtels luxueux, tout inclus',
      'San-Pédro : hébergements variés pour tous les budgets',
      'Activités nautiques proposées par les clubs de plage'
    ]
  },

  // --- GASTRONOMIE ---
  attieke: {
    icon: '🍲',
    bgClass: 'bg-orange',
    title: 'Attiéké & Poisson braisé',
    subtitle: 'Le plat national — Semoule de manioc et poisson grillé sur braises',
    description: 'L\'attiéké est une semoule légère à base de manioc fermenté et râpé, pilier de la cuisine ivoirienne depuis des siècles. Associé à un poisson braisé sur braises de bois, relevé de piment et accompagné d\'oignons et tomates crus, ce duo emblématique se déguste à toute heure dans les maquis d\'Abidjan comme dans les villages les plus reculés du pays.',
    labels: {
      sights: '🥘 Ingrédients clés',
      activities: '👨‍🍳 Variantes & accompagnements',
      bestTime: '🌍 Origines',
      practical: '🍽️ Où goûter'
    },
    sights: [
      'Manioc fermenté et râpé (base de l\'attiéké)',
      'Poisson thiof, maquereau ou barracuda braisé',
      'Tomates fraîches et oignons crus',
      'Piment frais ou piment en poudre',
      'Huile végétale, sel et citron',
      'Cube Maggi — assaisonnement incontournable'
    ],
    activities: [
      'Garba — attiéké au thon (street food économique et savoureux)',
      'Attiéké au poulet grillé ou au porc rôti',
      'Attiéké sauce djoumblé (feuilles de gombo)',
      'Attiéké salade — servi froid avec oignons et tomates',
      'Repas complet avec alloco (plantain frit) en accompagnement'
    ],
    bestTime: 'Originaire des peuples Avikam et Adjoukrou des lagunes ivoiriennes (région de Dabou et Grand-Lahou). Aujourd\'hui exporté dans toute l\'Afrique de l\'Ouest et les diasporas.',
    practical: [
      'Maquis de Treichville et Adjamé — meilleur garba d\'Abidjan',
      'Marché d\'Abobo — attiéké frais à emporter dès le matin',
      'Restaurants populaires à Grand-Bassam et San-Pédro',
      'Partout en Côte d\'Ivoire — moins de 500 FCFA le plat'
    ]
  },

  saucegraine: {
    icon: '🥜',
    bgClass: 'bg-yellow',
    title: 'Sauce Graine (Palmnoix)',
    subtitle: 'La reine des sauces — Mijotée aux noix de palme pendant des heures',
    description: 'La sauce graine est préparée à partir de noix de palme fraîches broyées et filtrées, mijotées lentement avec viandes et poissons fumés. Elle dévoile des arômes profonds, une texture onctueuse et un goût terroir unique. Chaque région du pays possède sa propre version, jalousement transmise de génération en génération.',
    labels: {
      sights: '🥘 Ingrédients clés',
      activities: '👨‍🍳 Variantes & accompagnements',
      bestTime: '🌍 Origines',
      practical: '🍽️ Où goûter'
    },
    sights: [
      'Noix de palme fraîches ou concentré de palmiste',
      'Viande de bœuf, poulet fermier ou mouton',
      'Crabes de mer ou poisson fumé entier',
      'Aubergines africaines (garden eggs)',
      'Feuilles de taro gboman',
      'Piment, ail, oignons et cube d\'assaisonnement'
    ],
    activities: [
      'Sauce graine aux crabes de mer (version côtière)',
      'Sauce graine au poulet fermier (version de l\'intérieur)',
      'Servie sur riz blanc, foufou d\'igname ou placali',
      'Version végétarienne sans viande ni poisson',
      'Sauce graine froide en accompagnement de l\'attiéké'
    ],
    bestTime: 'Originaire des régions forestières du Sud de la Côte d\'Ivoire. Plat de fête et du dimanche chez les peuples Krou, Bété et Wé de l\'Ouest ivoirien.',
    practical: [
      'Restaurants traditionnels dans les quartiers populaires d\'Abidjan',
      'Maquis familiaux à Sassandra, San-Pédro et Gagnoa',
      'Marchés hebdomadaires de Gagnoa et Soubré (région d\'origine)',
      'Cuisinée en famille le dimanche — demandez à votre hôte !'
    ]
  },

  alloco: {
    icon: '🍌',
    bgClass: 'bg-green',
    title: 'Alloco & Kedjenou',
    subtitle: 'Le snack des rues et le ragoût de fête — Deux classiques ivoiriens',
    description: 'L\'alloco, banane plantain mûre frite dans l\'huile de palme jusqu\'à caramélisation, est le snack universel vendu à toute heure dans les rues d\'Abidjan. Le Kedjenou, lui, est un ragoût délicat de poulet ou de pintade mijoté dans une canari (pot en argile) scellé sans eau ni matière grasse — une technique ancestrale Baoulé qui concentre tous les arômes.',
    labels: {
      sights: '🥘 Ingrédients clés',
      activities: '👨‍🍳 Variantes & accompagnements',
      bestTime: '🌍 Origines',
      practical: '🍽️ Où goûter'
    },
    sights: [
      'Alloco : banane plantain bien mûre (jaune à taches noires)',
      'Alloco : huile de palme rouge, piment, sel',
      'Kedjenou : poulet fermier ou pintade entière',
      'Kedjenou : tomates, aubergines africaines, gombos',
      'Kedjenou : gingembre, ail, poivrons, feuilles de laurier',
      'Kedjenou : canari (pot en argile — l\'ustensile authentique)'
    ],
    activities: [
      'Alloco-œufs — alloco avec œufs au plat (breakfast ivoirien)',
      'Alloco au poisson frit ou au poulet grillé',
      'Kedjenou à la pintade — la version la plus traditionnelle',
      'Kedjenou au poulet de brousse cuit en canari scellé',
      'Déguster le Kedjenou avec du riz gras ou de l\'attiéké'
    ],
    bestTime: 'Alloco : snack d\'origine Akan, commun dans toute l\'Afrique de l\'Ouest depuis des siècles. Kedjenou : plat de cérémonie du peuple Baoulé du Centre de la Côte d\'Ivoire.',
    practical: [
      'Alloco : vendeurs ambulants partout à Abidjan (500–1 000 FCFA)',
      'Restaurant Chez Tantie (Abidjan, Cocody) — Kedjenou réputé',
      'Marchés de Bouaké et Yamoussoukro — Kedjenou traditionnel',
      'Villages Baoulé autour de Toumodi — expérience authentique'
    ]
  }
};

// Logique du modal
const modalOverlay      = document.getElementById('modal-overlay');
const modalHeader       = document.getElementById('modal-header');
const modalIcon         = document.getElementById('modal-icon');
const modalTitle        = document.getElementById('modal-title');
const modalSubtitle     = document.getElementById('modal-subtitle');
const modalDescription  = document.getElementById('modal-description');
const modalSights       = document.getElementById('modal-sights');
const modalActivities   = document.getElementById('modal-activities');
const modalBestTime     = document.getElementById('modal-besttime');
const modalPractical    = document.getElementById('modal-practical');
const modalLabelSights    = document.getElementById('modal-label-sights');
const modalLabelActivities = document.getElementById('modal-label-activities');
const modalLabelBestTime  = document.getElementById('modal-label-besttime');
const modalLabelPractical = document.getElementById('modal-label-practical');

const defaultLabels = {
  sights:     '📍 À voir',
  activities: '🎯 Activités',
  bestTime:   '🗓️ Meilleur moment',
  practical:  'ℹ️ Infos pratiques'
};

function openModal(key) {
  const data = destinationData[key];
  if (!data) return;

  const labels = { ...defaultLabels, ...(data.labels || {}) };

  modalIcon.textContent        = data.icon;
  modalTitle.textContent       = data.title;
  modalSubtitle.textContent    = data.subtitle;
  modalDescription.textContent = data.description;
  modalHeader.className        = 'modal-header ' + data.bgClass;

  modalLabelSights.textContent    = labels.sights;
  modalLabelActivities.textContent = labels.activities;
  modalLabelBestTime.textContent  = labels.bestTime;
  modalLabelPractical.textContent = labels.practical;

  modalSights.innerHTML     = data.sights.map(s => `<li>${s}</li>`).join('');
  modalActivities.innerHTML = data.activities.map(a => `<li>${a}</li>`).join('');
  modalBestTime.textContent = data.bestTime;
  modalPractical.innerHTML  = data.practical.map(p => `<li>${p}</li>`).join('');

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.dest));
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-close-bottom').addEventListener('click', closeModal);

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
});

// Défilement fluide pour les liens de navigation
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Lien actif dans la nav selon la section visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// Bouton retour en haut
const btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.classList.add('visible');
  } else {
    btnTop.classList.remove('visible');
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
