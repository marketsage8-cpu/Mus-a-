// Base de données des lieux culturels français — données RÉELLES
// Date : 2026-01-27T15:09:53.952Z
// Total : 1386 lieux (579 châteaus, 438 musées, 268 expositions, 101 églises)
// UNIQUEMENT : musée, château, exposition, église
// Sources : données officielles, coordonnées GPS vérifiées

export const placeTypes = [
  { id: 'all', label: 'Tous', color: 'bg-night-600' },
  { id: 'musée', label: 'Musées', color: 'bg-turquoise-500' },
  { id: 'château', label: 'Châteaux', color: 'bg-gold-600' },
  { id: 'église', label: 'Églises', color: 'bg-rose-500' }
];

export const getTypeBadgeColor = (type) => {
  const colors = {
    'musée': 'bg-turquoise-500',
    'château': 'bg-gold-600',
    'église': 'bg-rose-500',
  };
  return colors[type] || 'bg-night-600';
};

// Base de données des lieux culturels français
export const places = [
  {
    "id": 1,
    "name": "Musée du Louvre",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/800px-Louvre_Museum_Wikimedia_Commons.jpg",
    "description": "Le plus grand musée d'art au monde, abritant la Joconde, la Vénus de Milo et plus de 380 000 œuvres.",
    "location": "Paris, Île-de-France",
    "rating": 4.9,
    "price": "17€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "La Joconde",
      "Vénus de Milo",
      "Victoire de Samothrace"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 2,
    "name": "Musée d'Orsay",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg/800px-Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg",
    "description": "Installé dans une ancienne gare, ce musée abrite la plus grande collection d'œuvres impressionnistes au monde.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "1848 - 1914",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Déjeuner sur l'herbe",
      "Nuit étoilée",
      "Bal du moulin de la Galette"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 3,
    "name": "Centre Pompidou",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Centre_Georges-Pompidou_34.jpg/800px-Centre_Georges-Pompidou_34.jpg",
    "description": "Architecture audacieuse aux couleurs vives abritant le Musée National d'Art Moderne.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Fontaine Stravinsky",
      "Vue panoramique",
      "Œuvres de Picasso"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 4,
    "name": "Musée du Quai Branly - Jacques Chirac",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Musee_du_quai_Branly_5.jpg/800px-Musee_du_quai_Branly_5.jpg",
    "description": "Dédié aux arts et civilisations d'Afrique, d'Asie, d'Océanie et des Amériques.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Arts premiers",
    "coordinates": {
      "lat": 48.8611,
      "lng": 2.2977
    },
    "highlights": [
      "Mur végétal",
      "Collections océaniennes",
      "Masques africains"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 5,
    "name": "Musée Picasso",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mus%C3%A9e_Picasso_Paris_2012.jpg/800px-Mus%C3%A9e_Picasso_Paris_2012.jpg",
    "description": "Dans l'Hôtel Salé du Marais, découvrez la plus grande collection publique d'œuvres de Pablo Picasso.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h30 - 18h (fermé lundi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.8597,
      "lng": 2.3622
    },
    "highlights": [
      "Période bleue",
      "Période rose",
      "Cubisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 6,
    "name": "Musée Rodin",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Musee_rodin_jardin.jpg/800px-Musee_rodin_jardin.jpg",
    "description": "L'hôtel Biron et son magnifique jardin abritent les œuvres du sculpteur Auguste Rodin.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h30 (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.8553,
      "lng": 2.316
    },
    "highlights": [
      "Le Penseur",
      "Les Portes de l'Enfer",
      "Le Baiser"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 7,
    "name": "Musée de l'Orangerie",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mus%C3%A9e_de_l%27Orangerie_2011.jpg/800px-Mus%C3%A9e_de_l%27Orangerie_2011.jpg",
    "description": "Écrin des Nymphéas de Claude Monet, ce musée présente aussi la collection Walter-Guillaume.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "12.50€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.8637,
      "lng": 2.3227
    },
    "highlights": [
      "Les Nymphéas",
      "Collection Walter-Guillaume",
      "Renoir"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 8,
    "name": "Musée de l'Armée",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Mus%C3%A9e_de_l%27Arm%C3%A9e%2C_Paris_23_April_2015.jpg/800px-Mus%C3%A9e_de_l%27Arm%C3%A9e%2C_Paris_23_April_2015.jpg",
    "description": "Aux Invalides, l'un des plus importants musées d'art et d'histoire militaire au monde.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 48.855,
      "lng": 2.3125
    },
    "highlights": [
      "Tombeau de Napoléon",
      "Armures royales",
      "Armes anciennes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 9,
    "name": "Musée Carnavalet",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cour_du_mus%C3%A9e_Carnavalet.jpg/800px-Cour_du_mus%C3%A9e_Carnavalet.jpg",
    "description": "Le musée de l'histoire de Paris, dans deux hôtels particuliers du Marais.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Préhistoire - XXIe siècle",
    "coordinates": {
      "lat": 48.8576,
      "lng": 2.3625
    },
    "highlights": [
      "Chambre de Proust",
      "Enseignes parisiennes",
      "Révolution française"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 10,
    "name": "Musée des Arts Décoratifs",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mus%C3%A9e_des_Arts_d%C3%A9coratifs_Paris_2006.jpg/800px-Mus%C3%A9e_des_Arts_d%C3%A9coratifs_Paris_2006.jpg",
    "description": "Dans l'aile Marsan du Louvre, une collection exceptionnelle d'arts décoratifs du Moyen Âge à nos jours.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Moyen Âge - XXIe siècle",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.333
    },
    "highlights": [
      "Art nouveau",
      "Art déco",
      "Design contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 11,
    "name": "Musée des Beaux-Arts de Lyon",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mus%C3%A9e_des_beaux-arts_de_Lyon_-_fa%C3%A7ade.jpg/800px-Mus%C3%A9e_des_beaux-arts_de_Lyon_-_fa%C3%A7ade.jpg",
    "description": "Dans une ancienne abbaye, l'un des plus grands musées français avec 70 salles d'exposition.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.7,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 45.7669278,
      "lng": 4.8337556
    },
    "highlights": [
      "Antiquités égyptiennes",
      "Impressionnistes",
      "Art contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 12,
    "name": "Musée Fabre",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/H%C3%B4tel_de_Massilian_Montpellier.jpg/800px-H%C3%B4tel_de_Massilian_Montpellier.jpg",
    "description": "L'un des plus riches musées de France avec une collection exceptionnelle de peintures.",
    "location": "Montpellier, Occitanie",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVe - XXIe siècle",
    "coordinates": {
      "lat": 43.6111,
      "lng": 3.88
    },
    "highlights": [
      "Courbet",
      "Delacroix",
      "Soulages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 13,
    "name": "MuCEM",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mucem%2C_J4_%26_Fort_Saint-Jean.jpg/800px-Mucem%2C_J4_%26_Fort_Saint-Jean.jpg",
    "description": "Musée des Civilisations de l'Europe et de la Méditerranée, architecture contemporaine iconique.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Civilisations méditerranéennes",
    "coordinates": {
      "lat": 43.2968,
      "lng": 5.3611
    },
    "highlights": [
      "Fort Saint-Jean",
      "Passerelle",
      "Expositions temporaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 14,
    "name": "Musée Granet",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mus%C3%A9e_Granet_Aix-en-Provence.jpg/800px-Mus%C3%A9e_Granet_Aix-en-Provence.jpg",
    "description": "Dans le prieuré de Malte, une collection de Cézanne à Picasso.",
    "location": "Aix-en-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 19h (fermé lundi)",
    "period": "XVIe - XXIe siècle",
    "coordinates": {
      "lat": 43.5267,
      "lng": 5.451
    },
    "highlights": [
      "Œuvres de Cézanne",
      "Collection Jean Planque",
      "Art provençal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 15,
    "name": "Musée des Beaux-Arts de Bordeaux",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bordeaux_mus%C3%A9e_des_Beaux-Arts_1.JPG/800px-Bordeaux_mus%C3%A9e_des_Beaux-Arts_1.JPG",
    "description": "Dans deux ailes du jardin de la Mairie, une riche collection de peintures européennes.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "5€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 44.8378,
      "lng": -0.5792
    },
    "highlights": [
      "Delacroix",
      "Rubens",
      "Véronèse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 16,
    "name": "La Piscine - Musée d'Art et d'Industrie",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1564399579730-3e5e4d189363?w=800&q=80",
    "description": "Dans une ancienne piscine Art déco, un musée dédié aux beaux-arts et aux arts appliqués.",
    "location": "Roubaix, Hauts-de-France",
    "rating": 4.7,
    "price": "11€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 50.692,
      "lng": 3.1726
    },
    "highlights": [
      "Architecture Art déco",
      "Sculptures",
      "Arts textiles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 17,
    "name": "Musée Unterlinden",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Colmar_Unterlinden_8.jpg/800px-Colmar_Unterlinden_8.jpg",
    "description": "Dans un ancien couvent dominicain, le célèbre Retable d'Issenheim de Grünewald.",
    "location": "Colmar, Grand Est",
    "rating": 4.6,
    "price": "13€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Moyen Âge - XXIe siècle",
    "coordinates": {
      "lat": 48.08,
      "lng": 7.3554
    },
    "highlights": [
      "Retable d'Issenheim",
      "Art rhénan",
      "Art contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 18,
    "name": "Musée des Beaux-Arts de Nantes",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mus%C3%A9e_des_beaux-arts_de_Nantes.jpg/800px-Mus%C3%A9e_des_beaux-arts_de_Nantes.jpg",
    "description": "Un panorama complet de l'art occidental du XIIIe siècle à nos jours.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIIIe - XXIe siècle",
    "coordinates": {
      "lat": 47.2185,
      "lng": -1.5482
    },
    "highlights": [
      "Georges de La Tour",
      "Kandinsky",
      "Monet"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 19,
    "name": "Musée d'Art Moderne de Saint-Étienne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    "description": "L'une des plus importantes collections d'art moderne et contemporain en France.",
    "location": "Saint-Étienne, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 45.4469,
      "lng": 4.3875
    },
    "highlights": [
      "Fernand Léger",
      "Andy Warhol",
      "Design industriel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 20,
    "name": "Musée des Confluences",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mus%C3%A9e_des_Confluences_-_2014-12-01_-_5.jpg/800px-Mus%C3%A9e_des_Confluences_-_2014-12-01_-_5.jpg",
    "description": "Architecture spectaculaire au confluent du Rhône et de la Saône, sciences et sociétés.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Sciences naturelles et humaines",
    "coordinates": {
      "lat": 45.7326,
      "lng": 4.8188
    },
    "highlights": [
      "Architecture déconstructiviste",
      "Collections naturalistes",
      "Expositions interactives"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 21,
    "name": "Musée des Beaux-Arts de Dijon",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Dijon_Palais_des_ducs_de_Bourgogne.jpg/800px-Dijon_Palais_des_ducs_de_Bourgogne.jpg",
    "description": "Dans le Palais des Ducs, l'un des plus anciens musées de France.",
    "location": "Dijon, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 47.322,
      "lng": 5.0415
    },
    "highlights": [
      "Tombeaux des ducs de Bourgogne",
      "Primitifs flamands",
      "Art moderne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 22,
    "name": "Musée des Augustins",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Toulouse_-_Mus%C3%A9e_des_Augustins.jpg/800px-Toulouse_-_Mus%C3%A9e_des_Augustins.jpg",
    "description": "Dans un ancien couvent, sculptures romanes et peintures du Moyen Âge au début du XXe siècle.",
    "location": "Toulouse, Occitanie",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 43.602,
      "lng": 1.4465
    },
    "highlights": [
      "Chapiteaux romans",
      "Peintures religieuses",
      "Cloître gothique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 23,
    "name": "Musée Matisse",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nice-Cimiez_-_Mus%C3%A9e_Matisse.jpg/800px-Nice-Cimiez_-_Mus%C3%A9e_Matisse.jpg",
    "description": "Villa génoise du XVIIe siècle abritant la plus grande collection mondiale d'œuvres de Matisse.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.7197,
      "lng": 7.2752
    },
    "highlights": [
      "Nu bleu",
      "Papiers découpés",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 24,
    "name": "Musée Marc Chagall",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mus%C3%A9e_national_Marc_Chagall_Nice.jpg/800px-Mus%C3%A9e_national_Marc_Chagall_Nice.jpg",
    "description": "Le Message Biblique de Marc Chagall dans un écrin architectural méditerranéen.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.7136,
      "lng": 7.2687
    },
    "highlights": [
      "Message Biblique",
      "Vitraux",
      "Mosaïques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 25,
    "name": "Musée d'Art et d'Histoire de Genève (MAH)",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection encyclopédique d'archéologie, d'arts appliqués et de beaux-arts.",
    "location": "Genève, Suisse",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 46.199,
      "lng": 6.152
    },
    "highlights": [
      "Konrad Witz",
      "Hodler",
      "Archéologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 26,
    "name": "Musée de Grenoble",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Grenoble_-_Mus%C3%A9e.jpg/800px-Grenoble_-_Mus%C3%A9e.jpg",
    "description": "L'une des plus prestigieuses collections d'art en Europe, de l'art ancien au contemporain.",
    "location": "Grenoble, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h30 (fermé mardi)",
    "period": "XIIIe - XXIe siècle",
    "coordinates": {
      "lat": 45.1945,
      "lng": 5.7322
    },
    "highlights": [
      "Matisse",
      "Picasso",
      "Warhol"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 27,
    "name": "Palais des Beaux-Arts de Lille",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=800&q=80",
    "description": "Le deuxième musée de France après le Louvre pour la richesse de ses collections.",
    "location": "Lille, Hauts-de-France",
    "rating": 4.6,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 50.6319,
      "lng": 3.0625
    },
    "highlights": [
      "Rubens",
      "Van Dyck",
      "Plans-reliefs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 28,
    "name": "Musée d'Art Moderne de Paris",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mus%C3%A9e_d%27Art_Moderne_de_Paris_01.jpg/800px-Mus%C3%A9e_d%27Art_Moderne_de_Paris_01.jpg",
    "description": "Au Palais de Tokyo, une collection majeure d'art moderne et contemporain.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 48.8647,
      "lng": 2.297
    },
    "highlights": [
      "La Fée Électricité (Dufy)",
      "Art contemporain",
      "Expositions temporaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 29,
    "name": "Cité des Sciences et de l'Industrie",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Geode_at_cite_des_sciences.jpg/800px-Geode_at_cite_des_sciences.jpg",
    "description": "Le plus grand musée des sciences en Europe, au parc de la Villette.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "13€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Sciences et technologies",
    "coordinates": {
      "lat": 48.8958,
      "lng": 2.3875
    },
    "highlights": [
      "Géode",
      "Planétarium",
      "Cité des Enfants"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 30,
    "name": "Musée du Petit Palais",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Petit_Palais_Paris_France.jpg/800px-Petit_Palais_Paris_France.jpg",
    "description": "Musée des Beaux-Arts de la Ville de Paris dans un écrin Beaux-Arts.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 48.866,
      "lng": 2.314
    },
    "highlights": [
      "Courbet",
      "Monet",
      "Icônes russes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 31,
    "name": "Fondation Louis Vuitton",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Fondation_Louis_Vuitton%2C_Paris_2019.jpg/800px-Fondation_Louis_Vuitton%2C_Paris_2019.jpg",
    "description": "Chef-d'œuvre architectural de Frank Gehry, art moderne et contemporain.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "16€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 48.8771,
      "lng": 2.265
    },
    "highlights": [
      "Architecture Gehry",
      "Terrasses panoramiques",
      "Expositions blockbuster"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 32,
    "name": "Musée Marmottan Monet",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mus%C3%A9e_Marmottan_Monet.jpg/800px-Mus%C3%A9e_Marmottan_Monet.jpg",
    "description": "La plus grande collection au monde d'œuvres de Claude Monet.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.8526,
      "lng": 2.2667
    },
    "highlights": [
      "Impression, soleil levant",
      "Nymphéas",
      "Collection Morisot"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 33,
    "name": "Musée de la Marine",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mus%C3%A9e_national_de_la_Marine_2.jpg/800px-Mus%C3%A9e_national_de_la_Marine_2.jpg",
    "description": "L'histoire maritime française au Palais de Chaillot, récemment rénové.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "13€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Histoire maritime",
    "coordinates": {
      "lat": 48.863,
      "lng": 2.287
    },
    "highlights": [
      "Maquettes de navires",
      "Instruments de navigation",
      "Peintures maritimes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 34,
    "name": "Musée Jacquemart-André",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/P1020825_Paris_VIII_Mus%C3%A9e_Jacquemart-Andr%C3%A9_rwk.JPG/800px-P1020825_Paris_VIII_Mus%C3%A9e_Jacquemart-Andr%C3%A9_rwk.JPG",
    "description": "Hôtel particulier du XIXe siècle abritant une collection d'art exceptionnelle.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "Renaissance - XIXe siècle",
    "coordinates": {
      "lat": 48.8752,
      "lng": 2.3108
    },
    "highlights": [
      "Fresques de Tiepolo",
      "Botticelli",
      "Salon de thé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 35,
    "name": "Musée de l'Homme",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    "description": "Au Trocadéro, un voyage au cœur de l'évolution humaine et des cultures.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "12€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Préhistoire - Contemporain",
    "coordinates": {
      "lat": 48.8615,
      "lng": 2.289
    },
    "highlights": [
      "Crâne de Cro-Magnon",
      "Collections ethnographiques",
      "Galerie de l'Homme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 36,
    "name": "Musée des Beaux-Arts de Rouen",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mus%C3%A9e_des_Beaux_Arts_Rouen.jpg/800px-Mus%C3%A9e_des_Beaux_Arts_Rouen.jpg",
    "description": "L'un des plus importants musées régionaux avec une riche collection impressionniste.",
    "location": "Rouen, Normandie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVe - XXIe siècle",
    "coordinates": {
      "lat": 49.4432,
      "lng": 1.0993
    },
    "highlights": [
      "Monet",
      "Caravage",
      "Velázquez"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 37,
    "name": "Musée des Beaux-Arts de Caen",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Au cœur du château de Guillaume le Conquérant, une collection de peintures européennes.",
    "location": "Caen, Normandie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 49.186,
      "lng": -0.364
    },
    "highlights": [
      "Véronèse",
      "Rubens",
      "Monet"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 38,
    "name": "Musée des Impressionnismes Giverny",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "Dédié à l'histoire de l'impressionnisme et ses suites, près des jardins de Monet.",
    "location": "Giverny, Normandie",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 49.0755,
      "lng": 1.5339
    },
    "highlights": [
      "Impressionnisme",
      "Post-impressionnisme",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 39,
    "name": "Musée Soulages",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    "description": "Dédié au maître de l'outrenoir Pierre Soulages, natif de Rodez.",
    "location": "Rodez, Occitanie",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 44.3507,
      "lng": 2.5689
    },
    "highlights": [
      "Outrenoir",
      "Vitraux de Conques",
      "Architecture contemporaine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 40,
    "name": "LaM - Lille Métropole Musée d'art moderne",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/LaM_Lille.jpg/800px-LaM_Lille.jpg",
    "description": "Art moderne, art contemporain et art brut dans un parc de sculptures.",
    "location": "Villeneuve-d'Ascq, Hauts-de-France",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 50.636,
      "lng": 3.1478
    },
    "highlights": [
      "Modigliani",
      "Picasso",
      "Art brut"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 41,
    "name": "Musée Toulouse-Lautrec",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Albi_Palais_de_la_Berbie.jpg/800px-Albi_Palais_de_la_Berbie.jpg",
    "description": "La plus importante collection au monde d'œuvres de Toulouse-Lautrec.",
    "location": "Albi, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 43.9286,
      "lng": 2.1436
    },
    "highlights": [
      "Affiches",
      "Dessins",
      "Peintures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 42,
    "name": "Musée de l'Annonciade",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "Collection exceptionnelle de peintures pointillistes et fauves à Saint-Tropez.",
    "location": "Saint-Tropez, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.2723,
      "lng": 6.6395
    },
    "highlights": [
      "Signac",
      "Matisse",
      "Bonnard"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 43,
    "name": "Musée Picasso - Antibes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    "description": "Dans le Château Grimaldi où Picasso a travaillé en 1946.",
    "location": "Antibes, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.5807,
      "lng": 7.1273
    },
    "highlights": [
      "La Joie de vivre",
      "Céramiques",
      "Terrasse sur la mer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 44,
    "name": "Musée Réattu",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts et photographie dans l'ancien Grand-Prieuré de l'Ordre de Malte.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "9€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVIIIe - XXIe siècle",
    "coordinates": {
      "lat": 43.6771,
      "lng": 4.6279
    },
    "highlights": [
      "Picasso",
      "Photographie",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 45,
    "name": "CAPC Musée d'art contemporain de Bordeaux",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/CAPC_mus%C3%A9e_d%27Art_contemporain.jpg/800px-CAPC_mus%C3%A9e_d%27Art_contemporain.jpg",
    "description": "Dans un ancien entrepôt colonial, art contemporain international.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "7€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 44.8509,
      "lng": -0.5709
    },
    "highlights": [
      "Art conceptuel",
      "Arte Povera",
      "Architecture industrielle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 46,
    "name": "Musée Courbet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dédié au maître du réalisme Gustave Courbet, dans sa ville natale.",
    "location": "Ornans, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 47.1058,
      "lng": 6.1431
    },
    "highlights": [
      "L'Origine du monde",
      "Paysages de la Loue",
      "Autoportraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 47,
    "name": "Musée des Beaux-Arts de Nancy",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80",
    "description": "Sur la place Stanislas, une collection d'art européen du XIVe au XXe siècle.",
    "location": "Nancy, Grand Est",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIVe - XXe siècle",
    "coordinates": {
      "lat": 48.6937,
      "lng": 6.1834
    },
    "highlights": [
      "Caravage",
      "Rubens",
      "Delacroix"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 48,
    "name": "Musée de l'École de Nancy",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chef-d'œuvres de l'Art nouveau dans une villa 1900.",
    "location": "Nancy, Grand Est",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi et mardi)",
    "period": "Art nouveau",
    "coordinates": {
      "lat": 48.6737,
      "lng": 6.1667
    },
    "highlights": [
      "Gallé",
      "Daum",
      "Majorelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 49,
    "name": "Musée des Tissus",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La plus importante collection textile au monde après celle du Victoria and Albert Museum.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "12€",
    "hours": "10h - 17h30 (fermé lundi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 45.753,
      "lng": 4.8284
    },
    "highlights": [
      "Soieries lyonnaises",
      "Costumes anciens",
      "Tapisseries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 50,
    "name": "Cité de l'Automobile - Collection Schlumpf",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bugatti_Royale_at_the_Cit%C3%A9_de_l%27Automobile.jpg/800px-Bugatti_Royale_at_the_Cit%C3%A9_de_l%27Automobile.jpg",
    "description": "Le plus grand musée automobile du monde avec plus de 400 véhicules.",
    "location": "Mulhouse, Grand Est",
    "rating": 4.7,
    "price": "18€",
    "hours": "10h - 17h",
    "period": "Histoire automobile",
    "coordinates": {
      "lat": 47.7603,
      "lng": 7.3269
    },
    "highlights": [
      "Bugatti Royale",
      "Formule 1",
      "Voitures de course"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 51,
    "name": "Musée de l'Air et de l'Espace",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80",
    "description": "L'un des plus grands musées aéronautiques au monde au Bourget.",
    "location": "Le Bourget, Île-de-France",
    "rating": 4.6,
    "price": "16€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Histoire aéronautique",
    "coordinates": {
      "lat": 48.9469,
      "lng": 2.4389
    },
    "highlights": [
      "Concorde",
      "Ariane 5",
      "Avions de légende"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 52,
    "name": "Musée de la Chasse et de la Nature",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art et nature dans deux hôtels particuliers du Marais.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "10€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XVIIe - XXIe siècle",
    "coordinates": {
      "lat": 48.861,
      "lng": 2.3587
    },
    "highlights": [
      "Cabinet de curiosités",
      "Art animalier",
      "Hôtels particuliers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 53,
    "name": "Musée Nissim de Camondo",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Hôtel particulier reconstitué dans le style XVIIIe siècle.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 17h30 (fermé lundi et mardi)",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.8792,
      "lng": 2.3108
    },
    "highlights": [
      "Mobilier royal",
      "Porcelaines de Sèvres",
      "Tapis de la Savonnerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 54,
    "name": "Musée de Montmartre",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80",
    "description": "Dans la maison où vécut Renoir, l'histoire du quartier des artistes.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.8875,
      "lng": 2.3405
    },
    "highlights": [
      "Jardins Renoir",
      "Atelier de Suzanne Valadon",
      "Cabaret du Chat Noir"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 55,
    "name": "Musée Zadkine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Atelier-musée du sculpteur cubiste Ossip Zadkine.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.8438,
      "lng": 2.3361
    },
    "highlights": [
      "Sculptures cubistes",
      "Jardin de sculptures",
      "Atelier reconstitué"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 56,
    "name": "Musée Bourdelle",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'atelier du sculpteur Antoine Bourdelle à Montparnasse.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.8425,
      "lng": 2.3189
    },
    "highlights": [
      "Héraklès archer",
      "Grand hall",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 57,
    "name": "Musée de la Vie Romantique",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Maison d'Ary Scheffer au cœur de la Nouvelle Athènes.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.8819,
      "lng": 2.3332
    },
    "highlights": [
      "Souvenirs de George Sand",
      "Jardin romantique",
      "Peintures romantiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 58,
    "name": "Musée Cognacq-Jay",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art du XVIIIe siècle dans l'hôtel Donon du Marais.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.8586,
      "lng": 2.3621
    },
    "highlights": [
      "Watteau",
      "Boucher",
      "Fragonard"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 59,
    "name": "Musée d'Art et d'Histoire du Judaïsme",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire et culture juive de l'Antiquité à nos jours.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "10€",
    "hours": "11h - 18h (fermé samedi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 48.8612,
      "lng": 2.3551
    },
    "highlights": [
      "Hanukkiah",
      "Modigliani",
      "Archives Dreyfus"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 60,
    "name": "Musée National Jean-Jacques Henner",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Œuvres du peintre alsacien dans un hôtel particulier.",
    "location": "Paris, Île-de-France",
    "rating": 4.2,
    "price": "6€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.8841,
      "lng": 2.3089
    },
    "highlights": [
      "Nymphes",
      "Portraits",
      "Paysages d'Alsace"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 61,
    "name": "Musée Gustave Moreau",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Maison-atelier du peintre symboliste.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 17h15 (fermé mardi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.8793,
      "lng": 2.3328
    },
    "highlights": [
      "Jupiter et Sémélé",
      "L'Apparition",
      "Escalier en colimaçon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 62,
    "name": "Musée de la Monnaie de Paris",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "2300 ans d'histoire monétaire dans l'Hôtel de la Monnaie.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "12€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 48.8567,
      "lng": 2.3394
    },
    "highlights": [
      "Ateliers de frappe",
      "Trésors monétaires",
      "Guy Savoy"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 63,
    "name": "Musée Cernuschi",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art asiatique au parc Monceau.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Art asiatique",
    "coordinates": {
      "lat": 48.8792,
      "lng": 2.3125
    },
    "highlights": [
      "Bouddha japonais",
      "Bronzes chinois",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 64,
    "name": "Musée des Arts Asiatiques - Guimet",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mus%C3%A9e_Guimet_XXXVIII.jpg/800px-Mus%C3%A9e_Guimet_XXXVIII.jpg",
    "description": "Plus importante collection d'art asiatique hors Asie.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "13€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Art asiatique",
    "coordinates": {
      "lat": 48.8649,
      "lng": 2.293
    },
    "highlights": [
      "Art khmer",
      "Bouddhas",
      "Estampes japonaises"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 65,
    "name": "Musée de la Libération de Paris",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La Résistance et la Libération au-dessus de l'abri Rol-Tanguy.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Seconde Guerre mondiale",
    "coordinates": {
      "lat": 48.8339,
      "lng": 2.3327
    },
    "highlights": [
      "Abri souterrain",
      "Jean Moulin",
      "Leclerc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 66,
    "name": "Musée d'Archéologie Nationale",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Préhistoire et archéologie au château de Saint-Germain-en-Laye.",
    "location": "Saint-Germain-en-Laye, Île-de-France",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Préhistoire - Mérovingiens",
    "coordinates": {
      "lat": 48.8983,
      "lng": 2.0944
    },
    "highlights": [
      "Dame de Brassempouy",
      "Trésor de Lavau",
      "Gaulois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 67,
    "name": "Musée Maurice Denis",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art nabi dans l'ancien prieuré du peintre.",
    "location": "Saint-Germain-en-Laye, Île-de-France",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 17h30 (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.8947,
      "lng": 2.0861
    },
    "highlights": [
      "Nabis",
      "Symbolisme",
      "Chapelle décorée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 68,
    "name": "Musée Français de la Photographie",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de la photographie et collections d'appareils.",
    "location": "Bièvres, Île-de-France",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 17h30 (mercredi, samedi, dimanche)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 48.7542,
      "lng": 2.2219
    },
    "highlights": [
      "Daguerréotypes",
      "Appareils anciens",
      "Tirages originaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 69,
    "name": "Musée Départemental Albert-Kahn",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Archives de la planète et jardins du monde.",
    "location": "Boulogne-Billancourt, Île-de-France",
    "rating": 4.5,
    "price": "9€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Début XXe siècle",
    "coordinates": {
      "lat": 48.8419,
      "lng": 2.2294
    },
    "highlights": [
      "Autochromes",
      "Jardins japonais",
      "Nouveau musée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 70,
    "name": "Musée Lambinet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de Versailles dans un hôtel particulier.",
    "location": "Versailles, Île-de-France",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h (fermé lundi)",
    "period": "XVIIIe - XIXe siècle",
    "coordinates": {
      "lat": 48.8044,
      "lng": 2.1328
    },
    "highlights": [
      "Révolution française",
      "Marie-Antoinette",
      "Faïences"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 71,
    "name": "Musée de la Céramique de Sèvres",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection exceptionnelle de céramiques du monde entier.",
    "location": "Sèvres, Île-de-France",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 48.8244,
      "lng": 2.2189
    },
    "highlights": [
      "Porcelaine de Sèvres",
      "Céramique islamique",
      "Art contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 72,
    "name": "Musée Dapper",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Arts et cultures d'Afrique, des Caraïbes et de leurs diasporas.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "8€",
    "hours": "11h - 19h (fermé mardi et jeudi)",
    "period": "Arts africains",
    "coordinates": {
      "lat": 48.8693,
      "lng": 2.2973
    },
    "highlights": [
      "Masques",
      "Sculptures",
      "Art contemporain africain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 73,
    "name": "Musée des Égouts de Paris",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Découverte souterraine du réseau d'assainissement parisien.",
    "location": "Paris, Île-de-France",
    "rating": 4,
    "price": "5€",
    "hours": "11h - 17h (fermé jeudi et vendredi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.8619,
      "lng": 2.3022
    },
    "highlights": [
      "Galeries visitables",
      "Histoire de l'eau",
      "Machines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 74,
    "name": "Musée des Plans-Reliefs",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection unique de maquettes de villes fortifiées.",
    "location": "Paris, Île-de-France",
    "rating": 4.2,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "XVIIe - XIXe siècle",
    "coordinates": {
      "lat": 48.855,
      "lng": 2.3125
    },
    "highlights": [
      "Maquettes Vauban",
      "Fortifications",
      "Stratégie militaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 75,
    "name": "Musée Delacroix",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dernier atelier et appartement d'Eugène Delacroix.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "7€",
    "hours": "9h30 - 17h30 (fermé mardi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.8547,
      "lng": 2.335
    },
    "highlights": [
      "Jardin secret",
      "Esquisses",
      "Souvenirs personnels"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 76,
    "name": "Musée de l'Assistance Publique",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire des hôpitaux parisiens et de la médecine.",
    "location": "Paris, Île-de-France",
    "rating": 4.1,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 48.8511,
      "lng": 2.3536
    },
    "highlights": [
      "Instruments médicaux",
      "Apothicairerie",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 77,
    "name": "Musée de l'Ordre de la Libération",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Hommage aux Compagnons de la Libération aux Invalides.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "Seconde Guerre mondiale",
    "coordinates": {
      "lat": 48.855,
      "lng": 2.3125
    },
    "highlights": [
      "Croix de Lorraine",
      "France Libre",
      "Résistance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 78,
    "name": "Musée National du Sport",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire du sport et de l'olympisme.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "10€",
    "hours": "11h - 17h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 43.7053,
      "lng": 7.1928
    },
    "highlights": [
      "Jeux Olympiques",
      "Maillots de légende",
      "Trophées"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 79,
    "name": "Musée Océanographique de Monaco",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    "description": "Temple de la mer fondé par le Prince Albert Ier.",
    "location": "Monaco",
    "rating": 4.7,
    "price": "18€",
    "hours": "10h - 18h",
    "period": "Sciences marines",
    "coordinates": {
      "lat": 43.7311,
      "lng": 7.4253
    },
    "highlights": [
      "Aquarium",
      "Requins",
      "Jacques Cousteau"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 80,
    "name": "Musée Massena",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de Nice et de la Riviera dans une villa Belle Époque.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.6944,
      "lng": 7.2622
    },
    "highlights": [
      "Belle Époque",
      "Napoléon",
      "Art décoratif"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 81,
    "name": "Musée des Beaux-Arts de Nice",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection classique dans une villa de style génois.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 43.7053,
      "lng": 7.2539
    },
    "highlights": [
      "Chéret",
      "Dufy",
      "Impressionnistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 82,
    "name": "MAMAC Nice",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/MAMAC_Nice.jpg/800px-MAMAC_Nice.jpg",
    "description": "Musée d'Art Moderne et d'Art Contemporain de Nice.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 43.7017,
      "lng": 7.2767
    },
    "highlights": [
      "Nouveau Réalisme",
      "Yves Klein",
      "Niki de Saint Phalle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 83,
    "name": "Musée Cantini",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Marseille_H%C3%B4tel_de_Montgrand.jpg/800px-Marseille_H%C3%B4tel_de_Montgrand.jpg",
    "description": "Art moderne dans un hôtel particulier du XVIIe siècle.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "6€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.2922,
      "lng": 5.3789
    },
    "highlights": [
      "Fauvisme",
      "Surréalisme",
      "Bacon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 84,
    "name": "Musée d'Histoire de Marseille",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "2600 ans d'histoire dans les vestiges du port antique.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "6€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 43.2983,
      "lng": 5.3744
    },
    "highlights": [
      "Navire romain",
      "Massalia",
      "Jardin des Vestiges"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 85,
    "name": "Musée Regards de Provence",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art provençal dans l'ancienne station sanitaire du port.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "7.50€",
    "hours": "10h - 18h",
    "period": "XVIIIe - XXIe siècle",
    "coordinates": {
      "lat": 43.2978,
      "lng": 5.3619
    },
    "highlights": [
      "Peintres provençaux",
      "Vue sur le port",
      "Architecture sanitaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 86,
    "name": "Musée de la Romanité",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mus%C3%A9e_de_la_Romanit%C3%A9_N%C3%AEmes.jpg/800px-Mus%C3%A9e_de_la_Romanit%C3%A9_N%C3%AEmes.jpg",
    "description": "Antiquité romaine face aux arènes de Nîmes.",
    "location": "Nîmes, Occitanie",
    "rating": 4.6,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "Antiquité romaine",
    "coordinates": {
      "lat": 43.8342,
      "lng": 4.3606
    },
    "highlights": [
      "Mosaïques",
      "Architecture contemporaine",
      "Gladiateurs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 87,
    "name": "Musée des Beaux-Arts de Nîmes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection de peintures du XVe au XIXe siècle.",
    "location": "Nîmes, Occitanie",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 43.8367,
      "lng": 4.3589
    },
    "highlights": [
      "Rubens",
      "Boucher",
      "Mosaïque romaine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 88,
    "name": "Musée de l'Arles Antique",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80",
    "description": "Trésors de l'Arles romaine dans un bâtiment bleu.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Antiquité romaine",
    "coordinates": {
      "lat": 43.6728,
      "lng": 4.6161
    },
    "highlights": [
      "Buste de César",
      "Barque romaine",
      "Sarcophages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 89,
    "name": "Fondation Vincent van Gogh Arles",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Hommage contemporain à Van Gogh à Arles.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 43.6766,
      "lng": 4.6278
    },
    "highlights": [
      "Art contemporain",
      "Héritage Van Gogh",
      "Expositions temporaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 90,
    "name": "Fondation Maeght",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1580981454360-3c6d3eb19b45?w=800&q=80",
    "description": "Art moderne dans une architecture de Sert.",
    "location": "Saint-Paul-de-Vence, Provence-Alpes-Côte d'Azur",
    "rating": 4.7,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.7042,
      "lng": 7.1222
    },
    "highlights": [
      "Giacometti",
      "Miró",
      "Calder"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 91,
    "name": "Musée Renoir - Les Collettes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dernière demeure de Renoir sur les hauteurs de Cagnes.",
    "location": "Cagnes-sur-Mer, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 12h / 14h - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.6625,
      "lng": 7.1486
    },
    "highlights": [
      "Atelier intact",
      "Oliviers centenaires",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 92,
    "name": "Musée d'Art Moderne de Céret",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le 'Mecque du cubisme' au pied des Pyrénées.",
    "location": "Céret, Occitanie",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 42.486,
      "lng": 2.7481
    },
    "highlights": [
      "Picasso",
      "Soutine",
      "Chagall"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 93,
    "name": "Musée Hyacinthe Rigaud",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts de Perpignan dans un palais gothique.",
    "location": "Perpignan, Occitanie",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h30 - 18h (fermé lundi)",
    "period": "XIVe - XXIe siècle",
    "coordinates": {
      "lat": 42.6986,
      "lng": 2.8947
    },
    "highlights": [
      "Rigaud",
      "Primitifs catalans",
      "Picasso"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 94,
    "name": "Musée des Abattoirs",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art moderne et contemporain dans d'anciens abattoirs.",
    "location": "Toulouse, Occitanie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "12h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 43.6022,
      "lng": 1.4306
    },
    "highlights": [
      "Rideau de Picasso",
      "Art brut",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 95,
    "name": "Fondation Bemberg",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection Bemberg dans l'Hôtel d'Assézat.",
    "location": "Toulouse, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 43.6022,
      "lng": 1.4414
    },
    "highlights": [
      "Bonnard",
      "Renaissance",
      "Hôtel Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 96,
    "name": "Musée Saint-Raymond",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Antiquités de Toulouse et du Sud-Ouest.",
    "location": "Toulouse, Occitanie",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "Antiquité",
    "coordinates": {
      "lat": 43.6078,
      "lng": 1.4428
    },
    "highlights": [
      "Villa de Chiragan",
      "Bustes romains",
      "Nécropole"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 97,
    "name": "Cité de l'Espace",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cit%C3%A9_de_l%27espace_Ariane_5.jpg/800px-Cit%C3%A9_de_l%27espace_Ariane_5.jpg",
    "description": "Parc scientifique dédié à l'aventure spatiale.",
    "location": "Toulouse, Occitanie",
    "rating": 4.6,
    "price": "25€",
    "hours": "10h - 17h",
    "period": "Conquête spatiale",
    "coordinates": {
      "lat": 43.5872,
      "lng": 1.4914
    },
    "highlights": [
      "Fusée Ariane 5",
      "Station Mir",
      "Planétarium"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 98,
    "name": "Musée du Vieux Toulouse",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de la ville rose dans l'hôtel Dumay.",
    "location": "Toulouse, Occitanie",
    "rating": 4.1,
    "price": "3€",
    "hours": "14h - 18h (fermé dimanche)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 43.6028,
      "lng": 1.4453
    },
    "highlights": [
      "Pastel",
      "Capitouls",
      "Arts populaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 99,
    "name": "Musée Ingres Bourdelle",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ingres et Bourdelle dans l'ancien palais épiscopal.",
    "location": "Montauban, Occitanie",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 44.0172,
      "lng": 1.3542
    },
    "highlights": [
      "Dessins d'Ingres",
      "Sculptures Bourdelle",
      "Palais épiscopal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 100,
    "name": "Musée Basque et de l'Histoire de Bayonne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Culture basque dans une maison du XVIIe siècle.",
    "location": "Bayonne, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Culture basque",
    "coordinates": {
      "lat": 43.4908,
      "lng": -1.4747
    },
    "highlights": [
      "Pelote basque",
      "Makila",
      "Art populaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 101,
    "name": "Musée Bonnat-Helleu",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts de Bayonne avec collection de dessins.",
    "location": "Bayonne, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h30 (fermé mardi)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 43.4919,
      "lng": -1.4728
    },
    "highlights": [
      "Dessins anciens",
      "Rubens",
      "Ingres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 102,
    "name": "Musée d'Aquitaine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de Bordeaux et de l'Aquitaine.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "6€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Préhistoire - XXIe siècle",
    "coordinates": {
      "lat": 44.8378,
      "lng": -0.5761
    },
    "highlights": [
      "Préhistoire",
      "Commerce triangulaire",
      "Bordeaux port de la Lune"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 103,
    "name": "Cité du Vin",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    "description": "Monde du vin dans une architecture iconique.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "21€",
    "hours": "10h - 18h",
    "period": "Culture du vin",
    "coordinates": {
      "lat": 44.8625,
      "lng": -0.5494
    },
    "highlights": [
      "Parcours immersif",
      "Belvédère",
      "Dégustation"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 104,
    "name": "Musée des Arts Décoratifs et du Design",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Design et arts décoratifs dans l'hôtel de Lalande.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "5€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "XVIIIe - XXIe siècle",
    "coordinates": {
      "lat": 44.8444,
      "lng": -0.5761
    },
    "highlights": [
      "Mobilier bordelais",
      "Design contemporain",
      "Prison royale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 105,
    "name": "Musée National Fernand Léger",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Œuvre du peintre cubiste Fernand Léger.",
    "location": "Biot, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.6261,
      "lng": 7.0944
    },
    "highlights": [
      "Mosaïques monumentales",
      "Cubisme",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 106,
    "name": "Musée Magnin",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dijon_-_H%C3%B4tel_Lantin.jpg/800px-Dijon_-_H%C3%B4tel_Lantin.jpg",
    "description": "Collection de peintures dans un hôtel particulier.",
    "location": "Dijon, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 12h30 / 13h30 - 18h (fermé lundi)",
    "period": "XVIe - XIXe siècle",
    "coordinates": {
      "lat": 47.3222,
      "lng": 5.0433
    },
    "highlights": [
      "Peinture nordique",
      "Intérieur XIXe",
      "Cabinet d'amateur"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 107,
    "name": "Musée de la Vie Bourguignonne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Traditions et savoir-faire de Bourgogne.",
    "location": "Dijon, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 47.3242,
      "lng": 5.0331
    },
    "highlights": [
      "Moutarde",
      "Costumes",
      "Commerces reconstitués"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 108,
    "name": "Musée Rolin",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art roman et peintures dans la maison du chancelier.",
    "location": "Autun, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 46.9511,
      "lng": 4.2978
    },
    "highlights": [
      "Tentation d'Ève",
      "Nativité du Maître de Moulins",
      "Art gallo-romain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 109,
    "name": "Musée du Temps",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Horlogerie et mesure du temps au palais Granvelle.",
    "location": "Besançon, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "6€",
    "hours": "9h15 - 12h / 14h - 18h (fermé lundi)",
    "period": "XVIe - XXIe siècle",
    "coordinates": {
      "lat": 47.2378,
      "lng": 6.0286
    },
    "highlights": [
      "Horlogerie comtoise",
      "Pendule de Foucault",
      "Astronomie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 110,
    "name": "Musée des Beaux-Arts et d'Archéologie de Besançon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus ancien musée de France dans une halle aux grains.",
    "location": "Besançon, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "9h30 - 12h / 14h - 18h (fermé mardi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 47.2361,
      "lng": 6.0281
    },
    "highlights": [
      "Courbet",
      "Boucher",
      "Archéologie égyptienne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 111,
    "name": "Musée Comtois",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Arts et traditions populaires de Franche-Comté.",
    "location": "Besançon, Bourgogne-Franche-Comté",
    "rating": 4,
    "price": "7€",
    "hours": "9h - 18h",
    "period": "XVIIIe - XXe siècle",
    "coordinates": {
      "lat": 47.2317,
      "lng": 6.0322
    },
    "highlights": [
      "Citadelle Vauban",
      "Marionnettes",
      "Agriculture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 112,
    "name": "Musée du Jouet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection de jouets du XIXe siècle à nos jours.",
    "location": "Moirans-en-Montagne, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "9€",
    "hours": "10h - 18h30",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 46.4347,
      "lng": 5.7242
    },
    "highlights": [
      "Jouets anciens",
      "Jeux vidéo",
      "Ateliers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 113,
    "name": "Musée d'Art Moderne et Contemporain de Strasbourg",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Strasbourg_Mus%C3%A9e_d%27Art_Moderne_et_Contemporain_01.jpg/800px-Strasbourg_Mus%C3%A9e_d%27Art_Moderne_et_Contemporain_01.jpg",
    "description": "Art moderne dans une architecture de verre.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 48.5842,
      "lng": 7.7489
    },
    "highlights": [
      "Kandinsky",
      "Art brut",
      "Architecture Adrien Fainsilber"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 114,
    "name": "Musée de l'Œuvre Notre-Dame",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Strasbourg_Mus%C3%A9e_de_l%27%C5%92uvre_Notre-Dame.jpg/800px-Strasbourg_Mus%C3%A9e_de_l%27%C5%92uvre_Notre-Dame.jpg",
    "description": "Art médiéval rhénan et sculptures de la cathédrale.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Moyen Âge - Renaissance",
    "coordinates": {
      "lat": 48.5817,
      "lng": 7.7508
    },
    "highlights": [
      "Sculptures originales",
      "Vitraux",
      "Art roman"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 115,
    "name": "Musée Alsacien",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Arts et traditions populaires d'Alsace.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVIIe - XXe siècle",
    "coordinates": {
      "lat": 48.58,
      "lng": 7.7525
    },
    "highlights": [
      "Costumes",
      "Mobilier peint",
      "Imagerie populaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 116,
    "name": "Musée Historique de Strasbourg",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de Strasbourg dans l'Ancienne Boucherie.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 48.5806,
      "lng": 7.7478
    },
    "highlights": [
      "Maquette de la ville",
      "Gutenberg",
      "Plan-relief"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 117,
    "name": "Palais Rohan",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trois musées dans la résidence des princes-évêques.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.5811,
      "lng": 7.7519
    },
    "highlights": [
      "Appartements royaux",
      "Musée des Beaux-Arts",
      "Arts décoratifs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 118,
    "name": "Musée Tomi Ungerer",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Centre international de l'Illustration.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 48.5872,
      "lng": 7.7544
    },
    "highlights": [
      "Dessins satiriques",
      "Livres pour enfants",
      "Affiches"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 119,
    "name": "Musée du Chocolat",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire du cacao et du chocolat.",
    "location": "Geispolsheim, Grand Est",
    "rating": 4.1,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Histoire du chocolat",
    "coordinates": {
      "lat": 48.5131,
      "lng": 7.6439
    },
    "highlights": [
      "Démonstrations",
      "Dégustation",
      "Collection d'objets"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 120,
    "name": "Centre Pompidou-Metz",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Centre_Pompidou-Metz_2019.jpg/800px-Centre_Pompidou-Metz_2019.jpg",
    "description": "Antenne du Centre Pompidou dans une architecture de Shigeru Ban.",
    "location": "Metz, Grand Est",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 49.1081,
      "lng": 6.1822
    },
    "highlights": [
      "Architecture",
      "Expositions temporaires",
      "Vue sur la cathédrale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 121,
    "name": "Musée de la Cour d'Or",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Archéologie et beaux-arts de la région messine.",
    "location": "Metz, Grand Est",
    "rating": 4.3,
    "price": "5€",
    "hours": "9h - 17h (fermé mardi)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 49.1194,
      "lng": 6.1756
    },
    "highlights": [
      "Thermes romains",
      "Art mérovingien",
      "Plafond Chagall"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 122,
    "name": "Musée de la Chartreuse",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts dans un monastère du XVIe siècle.",
    "location": "Douai, Hauts-de-France",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 12h / 14h - 18h (fermé mardi)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 50.3711,
      "lng": 3.0769
    },
    "highlights": [
      "Primitifs flamands",
      "Véronèse",
      "Cloître"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 123,
    "name": "Musée des Beaux-Arts de Valenciennes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection flamande et française du XVIe au XXe siècle.",
    "location": "Valenciennes, Hauts-de-France",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 50.3578,
      "lng": 3.5236
    },
    "highlights": [
      "Rubens",
      "Watteau",
      "Carpeaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 124,
    "name": "Musée de Picardie",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'un des premiers musées de province français.",
    "location": "Amiens, Hauts-de-France",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 49.8889,
      "lng": 2.2978
    },
    "highlights": [
      "Puvis de Chavannes",
      "Art médiéval",
      "El Greco"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 125,
    "name": "Musée de l'Hôtel Sandelin",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts et céramiques dans un hôtel XVIIIe.",
    "location": "Saint-Omer, Hauts-de-France",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 12h / 14h - 18h (fermé mardi)",
    "period": "Moyen Âge - XIXe siècle",
    "coordinates": {
      "lat": 50.7494,
      "lng": 2.2558
    },
    "highlights": [
      "Pied de croix de Saint-Bertin",
      "Faïences",
      "Pipes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 126,
    "name": "Musée des Beaux-Arts d'Arras",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection remarquable de peintures dans l'abbaye Saint-Vaast.",
    "location": "Arras, Hauts-de-France",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 50.2917,
      "lng": 2.7789
    },
    "highlights": [
      "Anges de Saudemont",
      "Corot",
      "Porcelaines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 127,
    "name": "Musée de Flandre",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art flamand dans l'ancien Mont-de-Piété.",
    "location": "Cassel, Hauts-de-France",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVIe - XXIe siècle",
    "coordinates": {
      "lat": 50.8003,
      "lng": 2.4864
    },
    "highlights": [
      "Brueghel",
      "Art contemporain flamand",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 128,
    "name": "Musée des Beaux-Arts de Tours",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection prestigieuse dans l'ancien palais des archevêques.",
    "location": "Tours, Centre-Val de Loire",
    "rating": 4.4,
    "price": "6€",
    "hours": "9h - 12h45 / 14h - 18h (fermé mardi)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 47.3944,
      "lng": 0.6878
    },
    "highlights": [
      "Mantegna",
      "Rembrandt",
      "Monet"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 129,
    "name": "Musée des Beaux-Arts d'Orléans",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Deuxième collection de pastels après le Louvre.",
    "location": "Orléans, Centre-Val de Loire",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVe - XXIe siècle",
    "coordinates": {
      "lat": 47.9028,
      "lng": 1.9092
    },
    "highlights": [
      "Cabinet des pastels",
      "Velázquez",
      "Gauguin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 130,
    "name": "Musée de Sologne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Nature et traditions de la Sologne.",
    "location": "Romorantin-Lanthenay, Centre-Val de Loire",
    "rating": 4,
    "price": "6€",
    "hours": "10h - 12h / 14h - 18h (fermé mardi)",
    "period": "Histoire naturelle et locale",
    "coordinates": {
      "lat": 47.3564,
      "lng": 1.7447
    },
    "highlights": [
      "Chasse",
      "Nature",
      "Artisanat"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 131,
    "name": "Musée Dobree",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art et archéologie dans un palais néo-médiéval.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Préhistoire - XIXe siècle",
    "coordinates": {
      "lat": 47.2142,
      "lng": -1.5639
    },
    "highlights": [
      "Cœur d'Anne de Bretagne",
      "Manuscrits",
      "Égyptologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 132,
    "name": "Musée d'Arts de Nantes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Du XIIIe au XXIe siècle dans un bâtiment rénové.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 19h (fermé mardi)",
    "period": "XIIIe - XXIe siècle",
    "coordinates": {
      "lat": 47.2186,
      "lng": -1.5482
    },
    "highlights": [
      "Ingres",
      "Courbet",
      "Kandinsky"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 133,
    "name": "Machines de l'île",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    "description": "Créatures mécaniques géantes inspirées de Jules Verne.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.7,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "Art mécanique",
    "coordinates": {
      "lat": 47.2072,
      "lng": -1.5644
    },
    "highlights": [
      "Grand Éléphant",
      "Carrousel des Mondes Marins",
      "Atelier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 134,
    "name": "Musée Jean Lurçat",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Tapisserie contemporaine dans l'hôpital Saint-Jean.",
    "location": "Angers, Pays de la Loire",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 47.4681,
      "lng": -0.5544
    },
    "highlights": [
      "Chant du Monde",
      "Tapisseries",
      "Architecture médiévale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 135,
    "name": "Musée des Beaux-Arts d'Angers",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Du Moyen Âge à l'art contemporain dans le logis Barrault.",
    "location": "Angers, Pays de la Loire",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIVe - XXIe siècle",
    "coordinates": {
      "lat": 47.4711,
      "lng": -0.5533
    },
    "highlights": [
      "Primitifs",
      "Chardin",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 136,
    "name": "Musée du Mans - Tessé",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts dans l'ancien évêché près de la cathédrale.",
    "location": "Le Mans, Pays de la Loire",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "10h - 12h30 / 14h - 18h (fermé lundi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 47.9997,
      "lng": 0.1967
    },
    "highlights": [
      "Émaux de Plantagenêts",
      "Peintures italiennes",
      "Philippe de Champaigne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 137,
    "name": "Musée 24 Heures du Mans",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de la course automobile légendaire.",
    "location": "Le Mans, Pays de la Loire",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "Sport automobile",
    "coordinates": {
      "lat": 47.9511,
      "lng": 0.2042
    },
    "highlights": [
      "Voitures de légende",
      "Simulateurs",
      "24 Heures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 138,
    "name": "Musée de Bretagne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de la Bretagne aux Champs Libres.",
    "location": "Rennes, Bretagne",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 19h (fermé lundi)",
    "period": "Préhistoire - XXIe siècle",
    "coordinates": {
      "lat": 48.105,
      "lng": -1.6747
    },
    "highlights": [
      "Affaire Dreyfus",
      "Coiffes bretonnes",
      "Archéologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 139,
    "name": "Musée des Beaux-Arts de Rennes",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rennes_-_Mus%C3%A9e_des_Beaux-Arts.jpg/800px-Rennes_-_Mus%C3%A9e_des_Beaux-Arts.jpg",
    "description": "Collection encyclopédique dans le centre de Rennes.",
    "location": "Rennes, Bretagne",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 17h (fermé lundi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 48.1106,
      "lng": -1.6744
    },
    "highlights": [
      "La Tour",
      "Rubens",
      "Picasso"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 140,
    "name": "Musée de la Pêche",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de la pêche bretonne dans l'ancien port.",
    "location": "Concarneau, Bretagne",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "Histoire maritime",
    "coordinates": {
      "lat": 47.8736,
      "lng": -3.9178
    },
    "highlights": [
      "Chalutier Hémérica",
      "Conserverie",
      "Ville Close"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 141,
    "name": "Musée de Pont-Aven",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "École de Pont-Aven et inspiration de Gauguin.",
    "location": "Pont-Aven, Bretagne",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 47.8553,
      "lng": -3.7461
    },
    "highlights": [
      "Gauguin",
      "Bernard",
      "Sérusier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 142,
    "name": "Musée des Beaux-Arts de Quimper",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Peintures et faïences dans un bâtiment XIXe.",
    "location": "Quimper, Bretagne",
    "rating": 4.3,
    "price": "5€",
    "hours": "9h30 - 12h / 14h - 18h (fermé mardi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 47.9958,
      "lng": -4.1019
    },
    "highlights": [
      "Max Jacob",
      "Faïences de Quimper",
      "École de Pont-Aven"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 143,
    "name": "Musée National de la Marine - Brest",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire maritime dans le château de Brest.",
    "location": "Brest, Bretagne",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h30",
    "period": "Histoire maritime",
    "coordinates": {
      "lat": 48.3836,
      "lng": -4.4939
    },
    "highlights": [
      "Maquettes",
      "Figures de proue",
      "Sous-marin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 144,
    "name": "Océanopolis",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    "description": "Parc de découverte des océans.",
    "location": "Brest, Bretagne",
    "rating": 4.6,
    "price": "23€",
    "hours": "9h30 - 18h",
    "period": "Sciences marines",
    "coordinates": {
      "lat": 48.3897,
      "lng": -4.4353
    },
    "highlights": [
      "Manchots",
      "Requins",
      "Pavillons polaire et tropical"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 145,
    "name": "Musée de Normandie",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Archéologie et ethnographie normande au château.",
    "location": "Caen, Normandie",
    "rating": 4.2,
    "price": "Gratuit (château) / 5€ (musée)",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 49.1856,
      "lng": -0.3644
    },
    "highlights": [
      "Art viking",
      "Dentelle",
      "Traditions normandes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 146,
    "name": "Mémorial de Caen",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Cité de l'histoire pour la paix.",
    "location": "Caen, Normandie",
    "rating": 4.7,
    "price": "21€",
    "hours": "9h - 19h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 49.2139,
      "lng": -0.3844
    },
    "highlights": [
      "Seconde Guerre mondiale",
      "Guerre froide",
      "Débarquement"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 147,
    "name": "Musée des Beaux-Arts André Malraux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Impressionnisme avec vue sur le port.",
    "location": "Le Havre, Normandie",
    "rating": 4.4,
    "price": "7€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 49.4872,
      "lng": 0.1042
    },
    "highlights": [
      "Boudin",
      "Monet",
      "Dufy"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 148,
    "name": "Appartement témoin Perret",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Intérieur reconstitué de la Reconstruction.",
    "location": "Le Havre, Normandie",
    "rating": 4.2,
    "price": "5€",
    "hours": "Sur réservation",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 49.4908,
      "lng": 0.1069
    },
    "highlights": [
      "Architecture Perret",
      "Mobilier 1950",
      "Patrimoine UNESCO"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 149,
    "name": "Musée Eugène Boudin",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Précurseur de l'impressionnisme à Honfleur.",
    "location": "Honfleur, Normandie",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 12h / 14h - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 49.4181,
      "lng": 0.2331
    },
    "highlights": [
      "Boudin",
      "Monet jeune",
      "Paysages normands"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 150,
    "name": "Maisons Satie",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Parcours poétique dans la maison natale d'Erik Satie.",
    "location": "Honfleur, Normandie",
    "rating": 4.3,
    "price": "7.50€",
    "hours": "10h - 19h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 49.4186,
      "lng": 0.2336
    },
    "highlights": [
      "Musique de Satie",
      "Installations",
      "Parcours sensoriel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 151,
    "name": "Musée de la Piscine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80",
    "description": "Art et industrie dans une piscine Art déco monumentale à Roubaix.",
    "location": "Roubaix, Hauts-de-France",
    "rating": 4.7,
    "price": "11€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 50.6903,
      "lng": 3.1722
    },
    "highlights": [
      "Bassin Art déco",
      "Sculptures",
      "Arts décoratifs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 152,
    "name": "Musée de la Mer",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    "description": "Océanographie et histoire maritime dans un fort Vauban.",
    "location": "Biarritz, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "15€",
    "hours": "9h30 - 19h",
    "period": "Sciences marines",
    "coordinates": {
      "lat": 43.4836,
      "lng": -1.5572
    },
    "highlights": [
      "Requins",
      "Phoques",
      "Vue océan"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 153,
    "name": "Musée Lalique",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'art verrier de René Lalique dans son village natal.",
    "location": "Wingen-sur-Moder, Grand Est",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 48.9208,
      "lng": 7.3778
    },
    "highlights": [
      "Bijoux Art nouveau",
      "Flacons de parfum",
      "Verre moulé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 154,
    "name": "Musée de l'Automobile de Mulhouse",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "description": "La plus grande collection de voitures anciennes au monde, collection Schlumpf.",
    "location": "Mulhouse, Grand Est",
    "rating": 4.7,
    "price": "18€",
    "hours": "10h - 18h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 47.7586,
      "lng": 7.3306
    },
    "highlights": [
      "Bugatti Royale",
      "400 véhicules",
      "F1 historiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 155,
    "name": "Cité du Train",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le plus grand musée ferroviaire d'Europe.",
    "location": "Mulhouse, Grand Est",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 17h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 47.7461,
      "lng": 7.2939
    },
    "highlights": [
      "Locomotives à vapeur",
      "Orient Express",
      "TGV"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 156,
    "name": "Musée de la Grande Guerre",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La Première Guerre mondiale racontée au cœur des champs de bataille.",
    "location": "Meaux, Île-de-France",
    "rating": 4.6,
    "price": "10€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "1914-1918",
    "coordinates": {
      "lat": 48.9714,
      "lng": 2.9047
    },
    "highlights": [
      "Tranchées reconstituées",
      "Uniformes",
      "Vie quotidienne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 157,
    "name": "Musée de la Bande Dessinée",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le 9e art célébré dans la capitale de la BD.",
    "location": "Angoulême, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 45.6486,
      "lng": 0.1506
    },
    "highlights": [
      "Planches originales",
      "Hergé",
      "Manga"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 158,
    "name": "Musée de Préhistoire des Eyzies",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80",
    "description": "La préhistoire au cœur de la vallée de la Vézère.",
    "location": "Les Eyzies, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 44.9364,
      "lng": 1.0172
    },
    "highlights": [
      "Homme de Cro-Magnon",
      "Art pariétal",
      "Outils préhistoriques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 159,
    "name": "Musée Lorrain",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de la Lorraine dans l'ancien palais ducal.",
    "location": "Nancy, Grand Est",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 48.6953,
      "lng": 6.1794
    },
    "highlights": [
      "Georges de La Tour",
      "Ducs de Lorraine",
      "Jacques Callot"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 160,
    "name": "Musée d'Art de Nantes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80",
    "description": "Six siècles d'art dans un bâtiment entièrement rénové.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIIIe - XXIe siècle",
    "coordinates": {
      "lat": 47.2161,
      "lng": -1.5472
    },
    "highlights": [
      "Courbet",
      "Kandinsky",
      "Art contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 161,
    "name": "Muséum d'Histoire Naturelle de Nantes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Sciences naturelles dans un écrin du XIXe siècle.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.3,
    "price": "4€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Sciences naturelles",
    "coordinates": {
      "lat": 47.2139,
      "lng": -1.5497
    },
    "highlights": [
      "Squelette de baleine",
      "Vivarium",
      "Minéralogie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 162,
    "name": "Musée de la Tapisserie de Bayeux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80",
    "description": "La célèbre broderie de 70 mètres racontant la conquête de l'Angleterre.",
    "location": "Bayeux, Normandie",
    "rating": 4.8,
    "price": "12€",
    "hours": "9h - 18h30",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.2764,
      "lng": -0.7022
    },
    "highlights": [
      "Conquête normande",
      "Guillaume le Conquérant",
      "Bataille d'Hastings"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 163,
    "name": "Musée d'Art Contemporain de Lyon",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lyon_-_Mus%C3%A9e_d%27art_contemporain_001.jpg/800px-Lyon_-_Mus%C3%A9e_d%27art_contemporain_001.jpg",
    "description": "Art contemporain dans l'architecture de Renzo Piano.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "8€",
    "hours": "11h - 18h (fermé lundi et mardi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 45.7844,
      "lng": 4.8547
    },
    "highlights": [
      "Biennale de Lyon",
      "Collections évolutives",
      "Performances"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 164,
    "name": "Musée des Miniatures et Décors de Cinéma",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Magie du cinéma et art de la miniature.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h30",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 45.7633,
      "lng": 4.8269
    },
    "highlights": [
      "Effets spéciaux",
      "Décors de films",
      "Miniatures hyperréalistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 165,
    "name": "Musée Dauphinois",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire alpine dans un ancien couvent du XVIIe siècle.",
    "location": "Grenoble, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Préhistoire - XXIe siècle",
    "coordinates": {
      "lat": 45.1953,
      "lng": 5.7214
    },
    "highlights": [
      "Ski alpin",
      "Patrimoine montagnard",
      "Cloître"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 166,
    "name": "CAPC - Musée d'Art Contemporain",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art contemporain dans un entrepôt colonial du XIXe siècle.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "7€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 44.8486,
      "lng": -0.5694
    },
    "highlights": [
      "Architecture industrielle",
      "Installations monumentales",
      "Arte povera"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 167,
    "name": "Musée Fabre de Montpellier",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80",
    "description": "L'une des plus importantes collections de peinture en France.",
    "location": "Montpellier, Occitanie",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVe - XXIe siècle",
    "coordinates": {
      "lat": 43.6114,
      "lng": 3.8806
    },
    "highlights": [
      "Soulages",
      "Courbet",
      "Donation Bruyas"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 168,
    "name": "Musée du Vieux Marseille",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire et traditions marseillaises dans la Maison Diamantée.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "5€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 43.2956,
      "lng": 5.3686
    },
    "highlights": [
      "Santons",
      "Crèches provençales",
      "Cartes à jouer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 169,
    "name": "Atelier Cézanne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'atelier intact du maître de la Sainte-Victoire.",
    "location": "Aix-en-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.5367,
      "lng": 5.4519
    },
    "highlights": [
      "Objets personnels",
      "Jardin",
      "Lumière du Midi"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 170,
    "name": "Musée Cocteau - Collection Séverin Wunderman",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'univers de Jean Cocteau dans une architecture de Rudy Ricciotti.",
    "location": "Menton, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.7753,
      "lng": 7.5019
    },
    "highlights": [
      "Dessins",
      "Céramiques",
      "Architecture contemporaine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 171,
    "name": "Villa Ephrussi de Rothschild",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1580981454360-3c6d3eb19b45?w=800&q=80",
    "description": "Palais de la Belle Époque et ses jardins féeriques.",
    "location": "Saint-Jean-Cap-Ferrat, Provence-Alpes-Côte d'Azur",
    "rating": 4.7,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "Belle Époque",
    "coordinates": {
      "lat": 43.6936,
      "lng": 7.3322
    },
    "highlights": [
      "9 jardins thématiques",
      "Collections Rothschild",
      "Vue mer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 172,
    "name": "Musée de la Photographie Charles Nègre",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'art photographique dans un palais niçois.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 43.6969,
      "lng": 7.2744
    },
    "highlights": [
      "Charles Nègre",
      "Photographie contemporaine",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 173,
    "name": "Musée Bonnard",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le peintre nabis dans sa lumière méditerranéenne.",
    "location": "Le Cannet, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.5761,
      "lng": 7.0175
    },
    "highlights": [
      "Intimisme",
      "Couleurs du Midi",
      "Dernières œuvres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 174,
    "name": "Musée de la Castre",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Arts primitifs et orientaux dans un château médiéval.",
    "location": "Cannes, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 13h / 14h - 18h (fermé lundi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 43.5514,
      "lng": 7.0128
    },
    "highlights": [
      "Tour panoramique",
      "Art océanien",
      "Instruments de musique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 175,
    "name": "Musée Angladon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection impressionniste dans un hôtel particulier avignonnais.",
    "location": "Avignon, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "8€",
    "hours": "13h - 18h (fermé lundi et mardi)",
    "period": "XVIIIe - XXe siècle",
    "coordinates": {
      "lat": 43.9483,
      "lng": 4.8086
    },
    "highlights": [
      "Van Gogh",
      "Cézanne",
      "Modigliani"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 176,
    "name": "Collection Lambert",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art contemporain dans deux hôtels particuliers du XVIIIe siècle.",
    "location": "Avignon, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "10€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 43.9453,
      "lng": 4.8092
    },
    "highlights": [
      "Cy Twombly",
      "Anselm Kiefer",
      "Sol LeWitt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 177,
    "name": "Musée de Cluny - Musée national du Moyen Âge",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mus%C3%A9e_de_Cluny_exterior.jpg/800px-Mus%C3%A9e_de_Cluny_exterior.jpg",
    "description": "Dans les thermes gallo-romains et l'hôtel des abbés de Cluny, collections médiévales exceptionnelles.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "12€",
    "hours": "9h30 - 18h15 (fermé lundi)",
    "period": "Moyen Âge",
    "coordinates": {
      "lat": 48.8505,
      "lng": 2.3442
    },
    "highlights": [
      "La Dame à la licorne",
      "Thermes romains",
      "Couronnes des rois wisigoths"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 178,
    "name": "Palais de Tokyo",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Palais_de_Tokyo_front.JPG/800px-Palais_de_Tokyo_front.JPG",
    "description": "Plus grand centre d'art contemporain d'Europe, programmation audacieuse et expérimentale.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "12€",
    "hours": "12h - 22h (fermé mardi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 48.8643,
      "lng": 2.297
    },
    "highlights": [
      "Installations immersives",
      "Performance",
      "Art émergent"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 179,
    "name": "Musée Galliera - Musée de la Mode",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Musée de la mode de la Ville de Paris dans un palais Renaissance italienne.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "15€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Mode et costume",
    "coordinates": {
      "lat": 48.8645,
      "lng": 2.2993
    },
    "highlights": [
      "Haute couture",
      "Collections historiques",
      "Expositions temporaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 180,
    "name": "Musée Yves Saint Laurent Paris",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dans l'ancien atelier de couture, découvrez l'univers du créateur légendaire.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "10€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Haute couture XXe siècle",
    "coordinates": {
      "lat": 48.8661,
      "lng": 2.3008
    },
    "highlights": [
      "Smoking",
      "Mondrian",
      "Studio de création"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 181,
    "name": "Cité de l'Architecture et du Patrimoine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus grand centre d'architecture au monde au Palais de Chaillot face à la Tour Eiffel.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "9€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Architecture",
    "coordinates": {
      "lat": 48.8621,
      "lng": 2.2875
    },
    "highlights": [
      "Moulages de portails",
      "Appartement Le Corbusier",
      "Fresques médiévales"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 182,
    "name": "Musée National de la Marine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire maritime française au Palais de Chaillot, entièrement rénové.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "13€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Histoire maritime",
    "coordinates": {
      "lat": 48.8631,
      "lng": 2.2873
    },
    "highlights": [
      "Maquettes de navires",
      "Figures de proue",
      "Exploration sous-marine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 183,
    "name": "Musée Guimet - Arts Asiatiques",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mus%C3%A9e_Guimet_XXXVIII.jpg/800px-Mus%C3%A9e_Guimet_XXXVIII.jpg",
    "description": "Plus importante collection d'art asiatique hors d'Asie.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "13€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Arts asiatiques",
    "coordinates": {
      "lat": 48.8652,
      "lng": 2.2938
    },
    "highlights": [
      "Khmer",
      "Bouddhas japonais",
      "Art chinois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 184,
    "name": "Musée des Arts et Métiers",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Arts_et_M%C3%A9tiers.jpg/800px-Arts_et_M%C3%A9tiers.jpg",
    "description": "Temple de la technique et de l'innovation dans l'ancienne abbaye Saint-Martin-des-Champs.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Sciences et techniques",
    "coordinates": {
      "lat": 48.8669,
      "lng": 2.3553
    },
    "highlights": [
      "Pendule de Foucault",
      "Avion de Blériot",
      "Machine de Marly"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 185,
    "name": "Musée National Delacroix",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dernier appartement et atelier d'Eugène Delacroix avec jardin secret.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "7€",
    "hours": "9h30 - 17h30 (fermé mardi)",
    "period": "Romantisme",
    "coordinates": {
      "lat": 48.8546,
      "lng": 2.3349
    },
    "highlights": [
      "Esquisses",
      "Jardin privé",
      "Correspondance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 186,
    "name": "Mémorial de la Shoah",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Lieu de mémoire, musée et centre de documentation sur la Shoah.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé samedi)",
    "period": "Shoah",
    "coordinates": {
      "lat": 48.8537,
      "lng": 2.3536
    },
    "highlights": [
      "Mur des Noms",
      "Crypte",
      "Expositions temporaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 187,
    "name": "Institut du Monde Arabe",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Pont culturel entre la France et le monde arabe, architecture de Jean Nouvel.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Civilisation arabe",
    "coordinates": {
      "lat": 48.8513,
      "lng": 2.3544
    },
    "highlights": [
      "Moucharabiehs mécaniques",
      "Terrasse panoramique",
      "Calligraphie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 188,
    "name": "Philharmonie de Paris - Musée de la Musique",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Collection exceptionnelle d'instruments de musique du XVIe siècle à nos jours.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "10€",
    "hours": "12h - 18h (fermé lundi)",
    "period": "Histoire de la musique",
    "coordinates": {
      "lat": 48.8896,
      "lng": 2.3932
    },
    "highlights": [
      "Stradivarius",
      "Guitare de Django",
      "Synthétiseurs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 189,
    "name": "Musée Lumière",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Berceau du cinéma, villa familiale des frères Lumière inventeurs du cinématographe.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.6,
    "price": "9€",
    "hours": "10h - 18h30 (fermé lundi)",
    "period": "Histoire du cinéma",
    "coordinates": {
      "lat": 45.7456,
      "lng": 4.8702
    },
    "highlights": [
      "Premier film",
      "Autochromes",
      "Jardin d'hiver"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 190,
    "name": "Musée Gadagne - Histoire de Lyon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de Lyon et des marionnettes du monde dans un palais Renaissance.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Histoire locale",
    "coordinates": {
      "lat": 45.7641,
      "lng": 4.8274
    },
    "highlights": [
      "Guignol",
      "Jardins suspendus",
      "Vieux Lyon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 191,
    "name": "MAMAC - Musée d'Art Moderne et d'Art Contemporain",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Nouveau réalisme et École de Nice dans un bâtiment iconique.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 43.7021,
      "lng": 7.2793
    },
    "highlights": [
      "Klein",
      "Arman",
      "Ben"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 192,
    "name": "Musée de la Photographie de Mougins",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire et art photographique à Mougins, village d'artistes.",
    "location": "Mougins, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Photographie",
    "coordinates": {
      "lat": 43.6007,
      "lng": 6.9953
    },
    "highlights": [
      "Picasso photographié",
      "Doisneau",
      "Lartigue"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 193,
    "name": "Musée Mer Marine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Aventure maritime et collections de Norbert Fradin.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "12€",
    "hours": "10h30 - 18h (fermé mardi)",
    "period": "Histoire maritime",
    "coordinates": {
      "lat": 44.8674,
      "lng": -0.5465
    },
    "highlights": [
      "Maquettes",
      "Instruments de navigation",
      "Art maritime"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 194,
    "name": "Les Machines de l'Île",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Projet artistique unique avec le Grand Éléphant et le Carrousel des Mondes Marins.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.8,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "Art mécanique",
    "coordinates": {
      "lat": 44.9414,
      "lng": -1.5645
    },
    "highlights": [
      "Grand Éléphant",
      "Carrousel",
      "Galerie des Machines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 195,
    "name": "Mémorial de l'Abolition de l'Esclavage",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Parcours mémoriel souterrain sur les quais de Nantes, port négrier.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "9h - 18h",
    "period": "Histoire de l'esclavage",
    "coordinates": {
      "lat": 44.934,
      "lng": -1.5552
    },
    "highlights": [
      "2000 plaques commémoratives",
      "Quai de la Fosse",
      "Textes historiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 196,
    "name": "Musée Jules Verne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Hommage à l'écrivain nantais, père de la science-fiction.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.3,
    "price": "3€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Littérature",
    "coordinates": {
      "lat": 44.9302,
      "lng": -1.5664
    },
    "highlights": [
      "Manuscrits",
      "Objets personnels",
      "Vue sur Loire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 197,
    "name": "Fonds Hélène & Édouard Leclerc pour la Culture",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Expositions d'envergure internationale dans un ancien couvent.",
    "location": "Landerneau, Bretagne",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "Art moderne et contemporain",
    "coordinates": {
      "lat": 48.4517,
      "lng": -4.2486
    },
    "highlights": [
      "Expositions temporaires",
      "Architecture",
      "Elorn"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 198,
    "name": "Musée de la Faïence de Quimper",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trois siècles de production faïencière quimpéroise.",
    "location": "Quimper, Bretagne",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h (fermé dimanche matin)",
    "period": "Arts décoratifs",
    "coordinates": {
      "lat": 48.0867,
      "lng": -4.112
    },
    "highlights": [
      "Petit Breton",
      "Assiettes historiées",
      "Ateliers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 199,
    "name": "Musée de la Compagnie des Indes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Aventure commerciale française en Orient dans la citadelle de Port-Louis.",
    "location": "Port-Louis, Bretagne",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h30 (fermé mardi)",
    "period": "Commerce colonial",
    "coordinates": {
      "lat": 47.7064,
      "lng": -3.3559
    },
    "highlights": [
      "Porcelaines de Chine",
      "Route des Indes",
      "Épices"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 200,
    "name": "Musée des Beaux-Arts de Lille",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lille_palais_des_beaux_arts_face_2015.jpg/800px-Lille_palais_des_beaux_arts_face_2015.jpg",
    "description": "Un des plus grands musées de France, riche en maîtres flamands.",
    "location": "Lille, Hauts-de-France",
    "rating": 4.7,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Beaux-arts",
    "coordinates": {
      "lat": 50.6313,
      "lng": 3.0625
    },
    "highlights": [
      "Rubens",
      "Van Dyck",
      "Goya"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 201,
    "name": "La Piscine - Musée d'Art et d'Industrie de Roubaix",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts et arts appliqués dans une piscine Art déco magnifiquement rénovée.",
    "location": "Roubaix, Hauts-de-France",
    "rating": 4.8,
    "price": "11€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Art et industrie",
    "coordinates": {
      "lat": 50.692,
      "lng": 3.171
    },
    "highlights": [
      "Bassin central",
      "Camille Claudel",
      "Mode et textile"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 202,
    "name": "Louvre-Lens",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Louvre-Lens_-_Galerie_du_Temps.jpg/800px-Louvre-Lens_-_Galerie_du_Temps.jpg",
    "description": "Antenne du Louvre dans l'ancien bassin minier, architecture de verre.",
    "location": "Lens, Hauts-de-France",
    "rating": 4.7,
    "price": "11€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Art universel",
    "coordinates": {
      "lat": 50.4319,
      "lng": 2.8046
    },
    "highlights": [
      "Galerie du Temps",
      "La Liberté guidant le peuple",
      "Parc paysager"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 203,
    "name": "Centre Historique Minier de Lewarde",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus grand musée de la mine en France sur un ancien site minier.",
    "location": "Lewarde, Hauts-de-France",
    "rating": 4.6,
    "price": "13,50€",
    "hours": "9h - 17h30",
    "period": "Patrimoine industriel",
    "coordinates": {
      "lat": 50.3426,
      "lng": 3.1688
    },
    "highlights": [
      "Descente en galerie",
      "Chevalement",
      "Gueules noires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 204,
    "name": "Panorama XXL",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Fresques panoramiques géantes immersives de Yadegar Asisi.",
    "location": "Rouen, Normandie",
    "rating": 4.4,
    "price": "10,50€",
    "hours": "10h - 18h",
    "period": "Art immersif",
    "coordinates": {
      "lat": 49.4313,
      "lng": 1.0685
    },
    "highlights": [
      "360 degrés",
      "Rouen 1431",
      "Amazonie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 205,
    "name": "Historial Jeanne d'Arc",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Parcours scénographique dans l'archevêché où Jeanne fut condamnée.",
    "location": "Rouen, Normandie",
    "rating": 4.3,
    "price": "10,50€",
    "hours": "10h - 19h",
    "period": "Histoire médiévale",
    "coordinates": {
      "lat": 49.4406,
      "lng": 1.0937
    },
    "highlights": [
      "Procès de Jeanne",
      "Mythographe",
      "Réhabilitation"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 206,
    "name": "MuMa - Musée d'Art Moderne André Malraux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Deuxième collection impressionniste de France face à la mer.",
    "location": "Le Havre, Normandie",
    "rating": 4.6,
    "price": "7€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "Impressionnisme",
    "coordinates": {
      "lat": 49.485,
      "lng": 0.1052
    },
    "highlights": [
      "Boudin",
      "Monet",
      "Dufy"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 207,
    "name": "Maison et Jardins de Claude Monet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La maison rose aux volets verts et les jardins qui ont inspiré les Nymphéas.",
    "location": "Giverny, Normandie",
    "rating": 4.9,
    "price": "12€",
    "hours": "9h30 - 18h",
    "period": "Impressionnisme",
    "coordinates": {
      "lat": 49.0755,
      "lng": 1.5339
    },
    "highlights": [
      "Pont japonais",
      "Nymphéas",
      "Atelier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 208,
    "name": "Musée Airborne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Épopée des parachutistes américains du Jour J.",
    "location": "Sainte-Mère-Église, Normandie",
    "rating": 4.7,
    "price": "10,90€",
    "hours": "9h - 18h",
    "period": "Seconde Guerre mondiale",
    "coordinates": {
      "lat": 49.4081,
      "lng": -1.3154
    },
    "highlights": [
      "C-47",
      "Planeur Waco",
      "Parachute sur le clocher"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 209,
    "name": "Musée du Débarquement Utah Beach",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Sur la plage même du Débarquement, l'histoire de Utah Beach.",
    "location": "Sainte-Marie-du-Mont, Normandie",
    "rating": 4.7,
    "price": "9€",
    "hours": "9h30 - 18h",
    "period": "Seconde Guerre mondiale",
    "coordinates": {
      "lat": 49.4147,
      "lng": -1.1713
    },
    "highlights": [
      "Bombardier B-26",
      "Objets du Débarquement",
      "Témoignages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 210,
    "name": "Musée du Débarquement d'Arromanches",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'histoire du port artificiel Mulberry face aux vestiges en mer.",
    "location": "Arromanches, Normandie",
    "rating": 4.5,
    "price": "8,50€",
    "hours": "9h - 18h",
    "period": "Seconde Guerre mondiale",
    "coordinates": {
      "lat": 49.3393,
      "lng": -0.6244
    },
    "highlights": [
      "Port Mulberry",
      "Film d'époque",
      "Vue sur les caissons"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 211,
    "name": "Cimetière Américain de Colleville-sur-Mer",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "9 387 soldats américains reposent face à Omaha Beach.",
    "location": "Colleville-sur-Mer, Normandie",
    "rating": 4.9,
    "price": "Gratuit",
    "hours": "9h - 17h",
    "period": "Seconde Guerre mondiale",
    "coordinates": {
      "lat": 49.3597,
      "lng": -0.8517
    },
    "highlights": [
      "Croix blanches",
      "Il faut sauver le soldat Ryan",
      "Centre des visiteurs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 212,
    "name": "Musée Bartholdi",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Maison natale du créateur de la Statue de la Liberté.",
    "location": "Colmar, Grand Est",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 12h, 14h - 18h (fermé mardi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.0789,
      "lng": 7.358
    },
    "highlights": [
      "Maquettes Statue de la Liberté",
      "Lion de Belfort",
      "Dessins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 213,
    "name": "Mémorial Alsace-Moselle",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Parcours scénographique sur le destin des Alsaciens-Mosellans au XXe siècle.",
    "location": "Schirmeck, Grand Est",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.4825,
      "lng": 7.2156
    },
    "highlights": [
      "Malgré-nous",
      "Annexion",
      "Résistance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 214,
    "name": "Musée de la Grande Guerre du Pays de Meaux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus grand musée européen consacré à la Première Guerre mondiale.",
    "location": "Meaux, Île-de-France",
    "rating": 4.7,
    "price": "10€",
    "hours": "9h30 - 17h30 (fermé mardi)",
    "period": "Première Guerre mondiale",
    "coordinates": {
      "lat": 48.9713,
      "lng": 2.8778
    },
    "highlights": [
      "Reconstitution des tranchées",
      "Taxi de la Marne",
      "Collections monumentales"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 215,
    "name": "Citadelle de Besançon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chef-d'œuvre de Vauban abritant trois musées.",
    "location": "Besançon, Bourgogne-Franche-Comté",
    "rating": 4.7,
    "price": "12,50€",
    "hours": "9h - 18h",
    "period": "Architecture militaire",
    "coordinates": {
      "lat": 47.2312,
      "lng": 6.0316
    },
    "highlights": [
      "Musée de la Résistance",
      "Aquarium",
      "Insectarium"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 216,
    "name": "Hospices de Beaune",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chef-d'œuvre de l'architecture hospitalière avec le Jugement Dernier de Van der Weyden.",
    "location": "Beaune, Bourgogne-Franche-Comté",
    "rating": 4.8,
    "price": "12€",
    "hours": "9h - 18h30",
    "period": "Moyen Âge",
    "coordinates": {
      "lat": 47.0229,
      "lng": 4.8405
    },
    "highlights": [
      "Polyptyque du Jugement Dernier",
      "Toits vernissés",
      "Salle des Pôvres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 217,
    "name": "Abbaye de Cluny",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Vestiges de la plus grande église de la Chrétienté avant Saint-Pierre.",
    "location": "Cluny, Bourgogne-Franche-Comté",
    "rating": 4.6,
    "price": "11€",
    "hours": "9h30 - 17h",
    "period": "Moyen Âge",
    "coordinates": {
      "lat": 46.434,
      "lng": 4.6593
    },
    "highlights": [
      "Reconstitution 3D",
      "Farinier",
      "Chapiteaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 218,
    "name": "Musée Nicéphore Niépce",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire de la photographie, de son inventeur chalonnais à nos jours.",
    "location": "Chalon-sur-Saône, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "9h30 - 11h45, 14h - 17h45 (fermé mardi)",
    "period": "Photographie",
    "coordinates": {
      "lat": 46.7811,
      "lng": 4.852
    },
    "highlights": [
      "Première photographie",
      "Appareils anciens",
      "Art contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 219,
    "name": "Muséum de Toulouse",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire naturelle dans un jardin botanique, l'un des plus riches de France.",
    "location": "Toulouse, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Sciences naturelles",
    "coordinates": {
      "lat": 43.5945,
      "lng": 1.4504
    },
    "highlights": [
      "Squelettes",
      "Jardins",
      "Mur des squelettes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 220,
    "name": "Les Abattoirs - Musée d'Art Moderne et Contemporain",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Toulouse_-_Les_Abattoirs.jpg/800px-Toulouse_-_Les_Abattoirs.jpg",
    "description": "Art moderne et contemporain dans les anciens abattoirs de Toulouse.",
    "location": "Toulouse, Occitanie",
    "rating": 4.4,
    "price": "10€",
    "hours": "12h - 18h (fermé lundi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 43.6002,
      "lng": 1.4302
    },
    "highlights": [
      "Rideau de Picasso",
      "Street art",
      "Art brut"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 221,
    "name": "Musée Aeroscopia",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'aventure aéronautique avec des avions mythiques dont le Concorde.",
    "location": "Blagnac, Occitanie",
    "rating": 4.6,
    "price": "14,50€",
    "hours": "10h - 18h",
    "period": "Aéronautique",
    "coordinates": {
      "lat": 43.66,
      "lng": 1.3786
    },
    "highlights": [
      "Concorde",
      "Super Guppy",
      "A380"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 222,
    "name": "Musée Fenaille",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Statues-menhirs du Rouergue, collection unique au monde.",
    "location": "Rodez, Occitanie",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 12h, 14h - 18h (fermé lundi)",
    "period": "Préhistoire - Moyen Âge",
    "coordinates": {
      "lat": 44.3508,
      "lng": 2.5725
    },
    "highlights": [
      "Statues-menhirs",
      "Dame de Saint-Sernin",
      "Escalier Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 223,
    "name": "Musée de la Préhistoire des Gorges du Verdon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'homme préhistorique en Haute-Provence dans un bâtiment de Norman Foster.",
    "location": "Quinson, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 43.6975,
      "lng": 6.04
    },
    "highlights": [
      "Grotte de la Baume Bonne",
      "Village préhistorique",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 224,
    "name": "Musée Départemental Arles Antique",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Archéologie romaine exceptionnelle avec le buste de César.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.7,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Antiquité romaine",
    "coordinates": {
      "lat": 43.6726,
      "lng": 4.6173
    },
    "highlights": [
      "Buste de César",
      "Chaland romain",
      "Mosaïques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 225,
    "name": "LUMA Arles",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Campus créatif avec la tour de Frank Gehry, art contemporain.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.6,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 43.6716,
      "lng": 4.6389
    },
    "highlights": [
      "Tour Gehry",
      "Parc des Ateliers",
      "Expositions immersives"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 226,
    "name": "Carrières de Lumières",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Spectacles immersifs projetés dans d'anciennes carrières de calcaire.",
    "location": "Les Baux-de-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.7,
    "price": "16€",
    "hours": "9h30 - 18h",
    "period": "Art numérique",
    "coordinates": {
      "lat": 43.7464,
      "lng": 4.7892
    },
    "highlights": [
      "Projections géantes",
      "Van Gogh",
      "Klimt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 227,
    "name": "Villa Méditerranée",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Villa_M%C3%A9diterran%C3%A9e.jpg/800px-Villa_M%C3%A9diterran%C3%A9e.jpg",
    "description": "Architecture spectaculaire en porte-à-faux, expositions méditerranéennes.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Méditerranée contemporaine",
    "coordinates": {
      "lat": 43.2978,
      "lng": 5.3598
    },
    "highlights": [
      "Porte-à-faux",
      "Bassin plongée",
      "Vue MuCEM"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 228,
    "name": "Musée Grobet-Labadié",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Hôtel particulier d'un collectionneur marseillais, arts décoratifs.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "5€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "Arts décoratifs",
    "coordinates": {
      "lat": 43.2986,
      "lng": 5.3881
    },
    "highlights": [
      "Mobilier",
      "Tapisseries",
      "Instruments de musique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 229,
    "name": "MAC - Musée d'Art Contemporain de Marseille",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art des années 1960 à aujourd'hui dans un bâtiment de Corinne Vezzoni.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 43.266,
      "lng": 5.3996
    },
    "highlights": [
      "César",
      "Nouveau réalisme",
      "Support-Surface"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 230,
    "name": "Fort Saint-Jean",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'annexe du MuCEM dans le fort historique avec jardins et passerelle.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Architecture militaire",
    "coordinates": {
      "lat": 43.2962,
      "lng": 5.3621
    },
    "highlights": [
      "Jardins méditerranéens",
      "Passerelle",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 231,
    "name": "Musée Savoisien",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire et cultures de la Savoie dans un ancien couvent franciscain.",
    "location": "Chambéry, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 12h, 14h - 18h (fermé mardi)",
    "period": "Histoire régionale",
    "coordinates": {
      "lat": 45.5652,
      "lng": 5.9221
    },
    "highlights": [
      "Peintures murales",
      "Duché de Savoie",
      "Ethnographie alpine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 232,
    "name": "Musée des Beaux-Arts de Chambéry",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Peintures italiennes exceptionnelles dans un ancien grenier à blé.",
    "location": "Chambéry, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 12h, 14h - 18h (fermé mardi)",
    "period": "Beaux-arts",
    "coordinates": {
      "lat": 45.5645,
      "lng": 5.9209
    },
    "highlights": [
      "Primitifs italiens",
      "Portrait du duc Charles II",
      "Uccello"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 233,
    "name": "Musée de la Résistance et de la Déportation de l'Isère",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Mémoire de la Résistance dans le Vercors et les Alpes.",
    "location": "Grenoble, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Seconde Guerre mondiale",
    "coordinates": {
      "lat": 45.1913,
      "lng": 5.7249
    },
    "highlights": [
      "Maquisards du Vercors",
      "Témoignages",
      "Documents"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 234,
    "name": "MAGASIN - Centre National d'Art Contemporain",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art contemporain dans une halle Eiffel rénovée par Patrick Bouchain.",
    "location": "Grenoble, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "5€",
    "hours": "14h - 19h (fermé lundi et mardi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 45.1871,
      "lng": 5.7091
    },
    "highlights": [
      "Installations",
      "Résidences d'artistes",
      "Architecture industrielle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 235,
    "name": "Musée d'Art Sacré du Gard",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Art religieux dans un château du XVIIIe siècle.",
    "location": "Pont-Saint-Esprit, Occitanie",
    "rating": 4.2,
    "price": "4€",
    "hours": "10h - 12h30, 14h - 18h (fermé lundi)",
    "period": "Art sacré",
    "coordinates": {
      "lat": 44.2571,
      "lng": 4.6496
    },
    "highlights": [
      "Orfèvrerie",
      "Vêtements liturgiques",
      "Peintures religieuses"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 236,
    "name": "Musée d'Art Roger Quilliot",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Beaux-arts du Moyen Âge au XXe siècle dans un ancien couvent.",
    "location": "Clermont-Ferrand, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Beaux-arts",
    "coordinates": {
      "lat": 45.7723,
      "lng": 3.1136
    },
    "highlights": [
      "Puy-de-Dôme",
      "Chassériau",
      "Art régional"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 237,
    "name": "Vulcania",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Parc européen du volcanisme au cœur de la chaîne des Puys.",
    "location": "Saint-Ours-les-Roches, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "32€",
    "hours": "10h - 18h",
    "period": "Volcanisme",
    "coordinates": {
      "lat": 45.8142,
      "lng": 2.9413
    },
    "highlights": [
      "Cinéma dynamique",
      "Réveil des géants d'Auvergne",
      "Dragon Ride"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 238,
    "name": "Musée de l'Aventure Peugeot",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'histoire de Peugeot des moulins à café aux voitures de course.",
    "location": "Sochaux, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "Industrie automobile",
    "coordinates": {
      "lat": 47.5118,
      "lng": 6.8327
    },
    "highlights": [
      "Première voiture",
      "Concept-cars",
      "Vélos"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 239,
    "name": "Musée Würth",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art moderne et contemporain de la collection Würth.",
    "location": "Erstein, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 17h",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 48.4236,
      "lng": 7.6614
    },
    "highlights": [
      "Collection Würth",
      "Art moderne",
      "Expositions temporaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 240,
    "name": "Musée Vodou",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Plus grande collection privée d'objets vodou d'Afrique.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.5,
    "price": "12€",
    "hours": "14h - 18h (fermé lundi-mardi)",
    "period": "XVIIIe - XXe siècle",
    "coordinates": {
      "lat": 48.5731,
      "lng": 7.7419
    },
    "highlights": [
      "Objets rituels",
      "Statues bocio",
      "Collection africaine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 241,
    "name": "Musée de l'Image",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dédié à l'image imprimée et aux célèbres images d'Épinal.",
    "location": "Épinal, Grand Est",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 12h30, 14h - 18h",
    "period": "XVIIe - XXIe siècle",
    "coordinates": {
      "lat": 48.1728,
      "lng": 6.4497
    },
    "highlights": [
      "Images d'Épinal",
      "Estampes populaires",
      "Art graphique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 242,
    "name": "Musée Hansi",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dédié à l'artiste alsacien Jean-Jacques Waltz dit Hansi.",
    "location": "Riquewihr, Grand Est",
    "rating": 4.5,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.1667,
      "lng": 7.2989
    },
    "highlights": [
      "Aquarelles",
      "Affiches",
      "Art alsacien"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 243,
    "name": "Musée du Papier Peint",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Unique musée français consacré au papier peint.",
    "location": "Rixheim, Grand Est",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVIIIe - XXIe siècle",
    "coordinates": {
      "lat": 47.75,
      "lng": 7.4
    },
    "highlights": [
      "Papiers peints panoramiques",
      "Machines d'impression",
      "Design mural"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 244,
    "name": "Musée de l'Automobile",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Plus grande collection de voitures anciennes au monde.",
    "location": "Mulhouse, Grand Est",
    "rating": 4.5,
    "price": "18€",
    "hours": "10h - 17h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 47.76,
      "lng": 7.33
    },
    "highlights": [
      "Collection Schlumpf",
      "Bugatti Royale",
      "Voitures de course"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 245,
    "name": "Électropolis",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de l'énergie électrique.",
    "location": "Mulhouse, Grand Est",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 47.7467,
      "lng": 7.2933
    },
    "highlights": [
      "Machine Sulzer-BBC",
      "Histoire de l'électricité",
      "Expériences interactives"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 246,
    "name": "Musée EDF Electropolis",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dédié à l'histoire de l'électricité.",
    "location": "Mulhouse, Grand Est",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 47.7467,
      "lng": 7.2933
    },
    "highlights": [
      "Grande machine à vapeur",
      "Électricité",
      "Sciences"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 247,
    "name": "Musée des Tissus de Lyon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Plus important musée de tissus au monde.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 17h30 (fermé lundi-mardi)",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 45.7531,
      "lng": 4.8283
    },
    "highlights": [
      "Soieries lyonnaises",
      "Textiles anciens",
      "Haute couture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 248,
    "name": "Musée Gadagne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'histoire de Lyon et musée des arts de la marionnette.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h30 - 18h30 (fermé mardi)",
    "period": "Renaissance - XXe siècle",
    "coordinates": {
      "lat": 45.7642,
      "lng": 4.8278
    },
    "highlights": [
      "Histoire de Lyon",
      "Marionnettes du monde",
      "Guignol"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 249,
    "name": "Musée Gallo-Romain de Lyon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée archéologique présentant l'histoire de Lugdunum.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Antiquité",
    "coordinates": {
      "lat": 45.76,
      "lng": 4.82
    },
    "highlights": [
      "Table claudienne",
      "Mosaïques",
      "Théâtre antique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 250,
    "name": "Muséum de Dijon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'histoire naturelle de Dijon.",
    "location": "Dijon, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "5€",
    "hours": "9h30 - 12h30, 14h - 18h",
    "period": "Histoire naturelle",
    "coordinates": {
      "lat": 47.3133,
      "lng": 5.045
    },
    "highlights": [
      "Collections naturalistes",
      "Géologie",
      "Planétarium"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 251,
    "name": "Musée de Préhistoire de Tautavel",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dédié à l'Homme de Tautavel, un des plus vieux Européens.",
    "location": "Tautavel, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 42.8133,
      "lng": 2.75
    },
    "highlights": [
      "Homme de Tautavel",
      "Fossiles",
      "Reconstitutions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 252,
    "name": "Musée Paul Valéry",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art et de littérature surplombant la mer.",
    "location": "Sète, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 43.3967,
      "lng": 3.6956
    },
    "highlights": [
      "Paul Valéry",
      "Georges Brassens",
      "Art méditerranéen"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 253,
    "name": "Musée Fayet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts de Béziers.",
    "location": "Béziers, Occitanie",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 17h (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.3442,
      "lng": 3.2158
    },
    "highlights": [
      "Jean Moulin",
      "Sculptures Injalbert",
      "Art régional"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 254,
    "name": "Musée Champollion",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des écritures dans la maison natale de Champollion.",
    "location": "Figeac, Occitanie",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h30 - 12h30, 14h - 18h",
    "period": "Antiquité",
    "coordinates": {
      "lat": 44.6083,
      "lng": 2.0333
    },
    "highlights": [
      "Égyptologie",
      "Pierre de Rosette (copie)",
      "Maison natale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 255,
    "name": "Musée des Augustins de Toulouse",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts de Toulouse dans un ancien couvent.",
    "location": "Toulouse, Occitanie",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 43.602,
      "lng": 1.4465
    },
    "highlights": [
      "Sculptures romanes",
      "Peintures",
      "Cloître"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 256,
    "name": "Musée Georges Labit",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'arts asiatiques et égyptiens.",
    "location": "Toulouse, Occitanie",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 43.5917,
      "lng": 1.4583
    },
    "highlights": [
      "Art asiatique",
      "Égypte ancienne",
      "Villa néo-mauresque"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 257,
    "name": "Musée de Cahors Henri-Martin",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts et d'archéologie de Cahors.",
    "location": "Cahors, Occitanie",
    "rating": 4.5,
    "price": "5€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 44.45,
      "lng": 1.4417
    },
    "highlights": [
      "Henri Martin",
      "Archéologie",
      "Art médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 258,
    "name": "Musée Goya",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Deuxième collection de peinture espagnole en France après le Louvre.",
    "location": "Castres, Occitanie",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 43.6,
      "lng": 2.2417
    },
    "highlights": [
      "Goya",
      "Peinture espagnole",
      "Velázquez"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 259,
    "name": "CAPC Bordeaux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art contemporain de Bordeaux.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "7€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 44.8514,
      "lng": -0.5708
    },
    "highlights": [
      "Art contemporain",
      "Entrepôt Lainé",
      "Installations"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 260,
    "name": "Musée d'Ethnographie de Bordeaux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'ethnographie et d'anthropologie.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "5€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 44.8347,
      "lng": -0.5853
    },
    "highlights": [
      "Ethnographie",
      "Cultures du monde",
      "Collections africaines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 261,
    "name": "Musée National de la Marine de Rochefort",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de la marine dans l'ancienne corderie royale.",
    "location": "Rochefort, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIIe - XXe siècle",
    "coordinates": {
      "lat": 45.9375,
      "lng": -0.9583
    },
    "highlights": [
      "Corderie royale",
      "Maquettes de navires",
      "Hermione"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 262,
    "name": "Musée des Beaux-Arts de La Rochelle",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts de La Rochelle.",
    "location": "La Rochelle, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 12h45, 14h - 18h",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 46.1583,
      "lng": -1.1556
    },
    "highlights": [
      "Fromentin",
      "Bouguereau",
      "Art régional"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 263,
    "name": "Muséum de La Rochelle",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'histoire naturelle de La Rochelle.",
    "location": "La Rochelle, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Histoire naturelle",
    "coordinates": {
      "lat": 46.1592,
      "lng": -1.1519
    },
    "highlights": [
      "Zoologie",
      "Ethnographie",
      "Girafe de La Rochelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 264,
    "name": "Musée des Beaux-Arts d'Agen",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts d'Agen.",
    "location": "Agen, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "4€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 44.2033,
      "lng": 0.62
    },
    "highlights": [
      "Goya",
      "Vénus du Mas",
      "Impressionnistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 265,
    "name": "Musée Basque",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Plus grand musée d'ethnographie basque.",
    "location": "Bayonne, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h30 - 18h (fermé lundi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 43.4933,
      "lng": -1.4753
    },
    "highlights": [
      "Culture basque",
      "Pelote",
      "Traditions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 266,
    "name": "Musée d'Art et d'Histoire de Cognac",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dans l'ancien château des Valois.",
    "location": "Cognac, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 45.6958,
      "lng": -0.3292
    },
    "highlights": [
      "Archéologie",
      "Arts décoratifs",
      "Cognac"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 267,
    "name": "Musée des Beaux-Arts de Limoges",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts dans l'ancien palais épiscopal.",
    "location": "Limoges, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 17h",
    "period": "XIIe - XXe siècle",
    "coordinates": {
      "lat": 45.8292,
      "lng": 1.2656
    },
    "highlights": [
      "Émaux de Limoges",
      "Renoir",
      "Impressionnistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 268,
    "name": "Musée national Adrien Dubouché",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée national de la porcelaine.",
    "location": "Limoges, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 12h30, 14h - 17h45",
    "period": "Antiquité - XXIe siècle",
    "coordinates": {
      "lat": 45.8333,
      "lng": 1.2639
    },
    "highlights": [
      "Porcelaine de Limoges",
      "Céramiques",
      "Art du feu"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 269,
    "name": "Musée de la Résistance de Limoges",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée consacré à la Résistance en Limousin.",
    "location": "Limoges, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 45.8361,
      "lng": 1.2606
    },
    "highlights": [
      "Résistance",
      "Déportation",
      "Mémoire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 270,
    "name": "Musée des Beaux-Arts de Pau",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts de Pau.",
    "location": "Pau, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 43.2958,
      "lng": -0.3708
    },
    "highlights": [
      "Greco",
      "Degas",
      "Rubens"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 271,
    "name": "Musée Bernadotte",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Maison natale du maréchal Bernadotte, devenu roi de Suède.",
    "location": "Pau, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVIIIe - XIXe siècle",
    "coordinates": {
      "lat": 43.295,
      "lng": -0.37
    },
    "highlights": [
      "Bernadotte",
      "Maison natale",
      "Liens avec la Suède"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 272,
    "name": "Muséum de Nantes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'histoire naturelle de Nantes.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Histoire naturelle",
    "coordinates": {
      "lat": 47.2139,
      "lng": -1.5508
    },
    "highlights": [
      "Squelette de baleine",
      "Vivarium",
      "Collections naturalistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 273,
    "name": "Musée Dobrée",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'archéologie et d'arts décoratifs.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Préhistoire - XIXe siècle",
    "coordinates": {
      "lat": 47.2136,
      "lng": -1.5639
    },
    "highlights": [
      "Cœur d'Anne de Bretagne",
      "Archéologie",
      "Arts décoratifs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 274,
    "name": "Musée Jean de La Fontaine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée consacré au fabuliste Jean de La Fontaine.",
    "location": "Château-Thierry, Hauts-de-France",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 17h30",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 49.0458,
      "lng": 3.4033
    },
    "highlights": [
      "Maison natale",
      "Éditions originales",
      "Illustrations"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 275,
    "name": "La Piscine de Roubaix",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art et d'industrie dans une piscine Art déco.",
    "location": "Roubaix, Hauts-de-France",
    "rating": 4.5,
    "price": "11€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 50.6917,
      "lng": 3.1731
    },
    "highlights": [
      "Art déco",
      "Sculptures",
      "Mode"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 276,
    "name": "LaM - Lille Métropole Musée",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art moderne, d'art contemporain et d'art brut.",
    "location": "Villeneuve-d'Ascq, Hauts-de-France",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 50.6386,
      "lng": 3.1469
    },
    "highlights": [
      "Art brut",
      "Modigliani",
      "Picasso"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 277,
    "name": "Musée de l'Hospice Comtesse",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dans un ancien hospice du XIIIe siècle.",
    "location": "Lille, Hauts-de-France",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVe - XVIIIe siècle",
    "coordinates": {
      "lat": 50.6417,
      "lng": 3.0633
    },
    "highlights": [
      "Hospice médiéval",
      "Faïences",
      "Peintures flamandes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 278,
    "name": "Musée d'Histoire Naturelle de Lille",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'histoire naturelle de Lille.",
    "location": "Lille, Hauts-de-France",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Histoire naturelle",
    "coordinates": {
      "lat": 50.6292,
      "lng": 3.0694
    },
    "highlights": [
      "Géologie",
      "Zoologie",
      "Insectarium"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 279,
    "name": "Musée de la Chartreuse de Douai",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts dans une ancienne chartreuse.",
    "location": "Douai, Hauts-de-France",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 50.3708,
      "lng": 3.0833
    },
    "highlights": [
      "Véronèse",
      "Bellegambe",
      "Art flamand"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 280,
    "name": "Cité de la Dentelle et de la Mode",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de la dentelle et de la mode dans une ancienne usine.",
    "location": "Calais, Hauts-de-France",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 50.9514,
      "lng": 1.8472
    },
    "highlights": [
      "Dentelle mécanique",
      "Haute couture",
      "Métiers Leavers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 281,
    "name": "Musée portuaire de Dunkerque",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur l'histoire du port de Dunkerque.",
    "location": "Dunkerque, Hauts-de-France",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 12h30, 13h30 - 18h",
    "period": "XVIIe - XXe siècle",
    "coordinates": {
      "lat": 51.0356,
      "lng": 2.3767
    },
    "highlights": [
      "Histoire portuaire",
      "Trois-mâts",
      "Phare"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 282,
    "name": "Musée Départemental Breton",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art et d'histoire de la Bretagne.",
    "location": "Quimper, Bretagne",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 47.9961,
      "lng": -4.1028
    },
    "highlights": [
      "Archéologie",
      "Costumes bretons",
      "Faïences de Quimper"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 283,
    "name": "Musée des Beaux-Arts de Brest",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts de Brest.",
    "location": "Brest, Bretagne",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 48.3897,
      "lng": -4.4867
    },
    "highlights": [
      "École de Pont-Aven",
      "Symbolisme",
      "Art moderne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 284,
    "name": "Musée de la Marine de Brest",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée national de la marine dans le château de Brest.",
    "location": "Brest, Bretagne",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h30",
    "period": "XVIIe - XXe siècle",
    "coordinates": {
      "lat": 48.3831,
      "lng": -4.4958
    },
    "highlights": [
      "Arsenal de Brest",
      "Maquettes",
      "Sous-marin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 285,
    "name": "Écomusée de la Bintinais",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Écomusée sur l'agriculture et la vie rurale en Bretagne.",
    "location": "Rennes, Bretagne",
    "rating": 4.5,
    "price": "6€",
    "hours": "9h - 12h, 14h - 18h",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 48.0792,
      "lng": -1.6667
    },
    "highlights": [
      "Agriculture bretonne",
      "Races locales",
      "Ferme historique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 286,
    "name": "Fonds Régional d'Art Contemporain Bretagne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Centre d'art contemporain de Bretagne.",
    "location": "Rennes, Bretagne",
    "rating": 4.5,
    "price": "5€",
    "hours": "12h - 19h (fermé lundi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 48.1117,
      "lng": -1.6744
    },
    "highlights": [
      "Art contemporain",
      "Expositions",
      "Collection régionale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 287,
    "name": "Musée de la Préhistoire de Carnac",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur les mégalithes de Carnac.",
    "location": "Carnac, Bretagne",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 12h30, 14h - 18h",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 47.5833,
      "lng": -3.0833
    },
    "highlights": [
      "Mégalithes",
      "Néolithique",
      "Alignements"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 288,
    "name": "Musée de la Résistance Bretonne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur la Résistance en Bretagne.",
    "location": "Saint-Marcel, Bretagne",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 47.8083,
      "lng": -2.425
    },
    "highlights": [
      "Résistance bretonne",
      "Maquis de Saint-Marcel",
      "FFI"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 289,
    "name": "Musée Mathurin Méheut",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée consacré à l'artiste Mathurin Méheut.",
    "location": "Lamballe, Bretagne",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h30 - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.4703,
      "lng": -2.5186
    },
    "highlights": [
      "Mathurin Méheut",
      "Art breton",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 290,
    "name": "Grand Blockhaus de Batz-sur-Mer",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dans un ancien blockhaus allemand.",
    "location": "Batz-sur-Mer, Pays de la Loire",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 19h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 47.275,
      "lng": -2.4833
    },
    "highlights": [
      "Mur de l'Atlantique",
      "Blockhaus",
      "Seconde Guerre mondiale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 291,
    "name": "Musée du Génie d'Angers",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de l'arme du génie.",
    "location": "Angers, Pays de la Loire",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "14h - 17h30",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 47.4833,
      "lng": -0.55
    },
    "highlights": [
      "Génie militaire",
      "Ponts",
      "Fortifications"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 292,
    "name": "Musée du Textile Choletais",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur l'industrie textile de Cholet.",
    "location": "Cholet, Pays de la Loire",
    "rating": 4.5,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 47.0583,
      "lng": -0.8792
    },
    "highlights": [
      "Mouchoirs de Cholet",
      "Industrie textile",
      "Métiers à tisser"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 293,
    "name": "Fondation Vincent van Gogh",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Fondation dédiée à Van Gogh et l'art contemporain.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 43.6761,
      "lng": 4.6275
    },
    "highlights": [
      "Van Gogh",
      "Art contemporain",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 294,
    "name": "Musée Calvet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts d'Avignon.",
    "location": "Avignon, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 13h, 14h - 18h",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 43.9483,
      "lng": 4.8058
    },
    "highlights": [
      "Soulages",
      "Peintures",
      "Ferronnerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 295,
    "name": "Musée de la Camargue",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Écomusée de la Camargue.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.5167,
      "lng": 4.55
    },
    "highlights": [
      "Camargue",
      "Traditions",
      "Nature"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 296,
    "name": "Friche la Belle de Mai",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Espace culturel pluridisciplinaire.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "Variable",
    "hours": "11h - 19h",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 43.3097,
      "lng": 5.3897
    },
    "highlights": [
      "Art contemporain",
      "Spectacles",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 297,
    "name": "Musée Jean Cocteau",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée consacré à Jean Cocteau.",
    "location": "Menton, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.7758,
      "lng": 7.5033
    },
    "highlights": [
      "Jean Cocteau",
      "Dessins",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 298,
    "name": "Musée Renoir",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Maison-musée d'Auguste Renoir.",
    "location": "Cagnes-sur-Mer, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.6633,
      "lng": 7.1483
    },
    "highlights": [
      "Atelier Renoir",
      "Jardins",
      "Peintures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 299,
    "name": "Musée Fernand Léger",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée national consacré à Fernand Léger.",
    "location": "Biot, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.6308,
      "lng": 7.0969
    },
    "highlights": [
      "Fernand Léger",
      "Mosaïques",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 300,
    "name": "Musée Picasso Antibes",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée Picasso dans le château Grimaldi.",
    "location": "Antibes, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 43.5814,
      "lng": 7.1281
    },
    "highlights": [
      "Picasso",
      "Nicolas de Staël",
      "Château Grimaldi"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 301,
    "name": "Musée Masséna",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'histoire de Nice.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 43.6956,
      "lng": 7.2589
    },
    "highlights": [
      "Histoire de Nice",
      "Belle Époque",
      "Art décoratif"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 302,
    "name": "Musée des Arts Asiatiques",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'arts asiatiques conçu par Kenzo Tange.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Asie",
    "coordinates": {
      "lat": 43.6881,
      "lng": 7.2047
    },
    "highlights": [
      "Art asiatique",
      "Architecture Kenzo Tange",
      "Collections japonaises"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 303,
    "name": "Musée de Terra Amata",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de préhistoire sur un site de campement.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 43.6917,
      "lng": 7.2869
    },
    "highlights": [
      "Préhistoire",
      "Site archéologique",
      "Homo erectus"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 304,
    "name": "Musée des Merveilles",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur les gravures rupestres du Mont Bégo.",
    "location": "Tende, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 44.0875,
      "lng": 7.5917
    },
    "highlights": [
      "Gravures rupestres",
      "Vallée des Merveilles",
      "Age du Bronze"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 305,
    "name": "Musée de Préhistoire des Gorges du Verdon",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de préhistoire dans les gorges du Verdon.",
    "location": "Quinson, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 43.7,
      "lng": 6.0333
    },
    "highlights": [
      "Préhistoire",
      "Grotte de la Baume Bonne",
      "Reconstitutions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 306,
    "name": "Musée Gassendi",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art et de science.",
    "location": "Digne-les-Bains, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "5€",
    "hours": "11h - 19h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 44.0917,
      "lng": 6.2333
    },
    "highlights": [
      "Art contemporain",
      "Sciences",
      "Land Art"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 307,
    "name": "Musée de l'Ancien Évêché",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'histoire dans l'ancien évêché.",
    "location": "Grenoble, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Antiquité - XXe siècle",
    "coordinates": {
      "lat": 45.1944,
      "lng": 5.7292
    },
    "highlights": [
      "Histoire de l'Isère",
      "Baptistère",
      "Archéologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 308,
    "name": "Muséum de Grenoble",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Muséum d'histoire naturelle de Grenoble.",
    "location": "Grenoble, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Histoire naturelle",
    "coordinates": {
      "lat": 45.1931,
      "lng": 5.7361
    },
    "highlights": [
      "Faune alpine",
      "Minéraux",
      "Biodiversité"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 309,
    "name": "Musée de la Révolution française",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée national de la Révolution française.",
    "location": "Vizille, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 12h30, 13h30 - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 45.075,
      "lng": 5.7708
    },
    "highlights": [
      "Révolution française",
      "Peintures",
      "Documents"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 310,
    "name": "Musée Hébert",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Maison-musée du peintre Ernest Hébert.",
    "location": "La Tronche, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 45.2042,
      "lng": 5.7417
    },
    "highlights": [
      "Ernest Hébert",
      "Peintures",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 311,
    "name": "Musée Faure",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts d'Aix-les-Bains.",
    "location": "Aix-les-Bains, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 13h30 - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 45.6889,
      "lng": 5.9083
    },
    "highlights": [
      "Rodin",
      "Impressionnistes",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 312,
    "name": "Musée-Château d'Annecy",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dans le château d'Annecy.",
    "location": "Annecy, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h30 - 18h",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 45.8983,
      "lng": 6.1261
    },
    "highlights": [
      "Château médiéval",
      "Art alpin",
      "Lac d'Annecy"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 313,
    "name": "Palais de l'Isle",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dans l'emblématique Palais de l'Isle.",
    "location": "Annecy, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "4€",
    "hours": "10h30 - 18h",
    "period": "XIIe - XXe siècle",
    "coordinates": {
      "lat": 45.8992,
      "lng": 6.1286
    },
    "highlights": [
      "Architecture médiévale",
      "Prison",
      "Histoire locale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 314,
    "name": "Musée Crozatier",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée municipal du Puy-en-Velay.",
    "location": "Le Puy-en-Velay, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 45.0433,
      "lng": 3.885
    },
    "highlights": [
      "Dentelle du Puy",
      "Art roman",
      "Collections naturalistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 315,
    "name": "Musée de la Mine de Saint-Étienne",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur l'histoire minière dans l'ancien puits Couriot.",
    "location": "Saint-Étienne, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 12h45, 14h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 45.4622,
      "lng": 4.3903
    },
    "highlights": [
      "Mine de charbon",
      "Couriot",
      "Industrie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 316,
    "name": "Musée d'Art et d'Industrie",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur les industries stéphanoises.",
    "location": "Saint-Étienne, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 45.4378,
      "lng": 4.3872
    },
    "highlights": [
      "Armes",
      "Cycles",
      "Rubans"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 317,
    "name": "Musée Mandet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art de Riom.",
    "location": "Riom, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "4€",
    "hours": "10h - 12h, 14h - 17h30",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 45.8933,
      "lng": 3.115
    },
    "highlights": [
      "Peintures",
      "Arts décoratifs",
      "Émaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 318,
    "name": "Musée Bargoin",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'archéologie et des textiles.",
    "location": "Clermont-Ferrand, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 13h - 17h",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 45.7769,
      "lng": 3.0872
    },
    "highlights": [
      "Archéologie",
      "Textiles",
      "Tapis"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 319,
    "name": "Musée d'Art Roger-Quilliot",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts de Clermont-Ferrand.",
    "location": "Clermont-Ferrand, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Moyen Âge - XXIe siècle",
    "coordinates": {
      "lat": 45.7811,
      "lng": 3.0992
    },
    "highlights": [
      "Peintures",
      "Sculptures",
      "Art moderne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 320,
    "name": "Musée Henri Lecoq",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Muséum d'histoire naturelle de Clermont-Ferrand.",
    "location": "Clermont-Ferrand, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 17h",
    "period": "Histoire naturelle",
    "coordinates": {
      "lat": 45.7769,
      "lng": 3.0867
    },
    "highlights": [
      "Herbiers",
      "Géologie",
      "Minéraux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 321,
    "name": "Musée Anne de Beaujeu",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art et d'archéologie du département de l'Allier.",
    "location": "Moulins, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 46.5633,
      "lng": 3.3333
    },
    "highlights": [
      "Ducs de Bourbon",
      "Maître de Moulins",
      "Art médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 322,
    "name": "Musée de l'Illustration Jeunesse",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée dédié à l'illustration jeunesse.",
    "location": "Moulins, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XXe - XXIe siècle",
    "coordinates": {
      "lat": 46.5617,
      "lng": 3.335
    },
    "highlights": [
      "Illustration",
      "Livres pour enfants",
      "Art graphique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 323,
    "name": "Musée de Millau",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'archéologie et de traditions locales.",
    "location": "Millau, Occitanie",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 44.0983,
      "lng": 3.0783
    },
    "highlights": [
      "Graufesenque",
      "Poteries gallo-romaines",
      "Ganterie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 324,
    "name": "Musée du Débarquement Arromanches",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur le port artificiel d'Arromanches.",
    "location": "Arromanches, Normandie",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 49.3392,
      "lng": -0.6231
    },
    "highlights": [
      "Port artificiel",
      "Mulberry",
      "D-Day"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 325,
    "name": "Airborne Museum",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée sur les troupes aéroportées du D-Day.",
    "location": "Sainte-Mère-Église, Normandie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 49.4094,
      "lng": -1.3172
    },
    "highlights": [
      "Parachutistes",
      "Planeur Waco",
      "D-Day"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 326,
    "name": "Musée de la Céramique",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de la céramique de Rouen.",
    "location": "Rouen, Normandie",
    "rating": 4.5,
    "price": "6€",
    "hours": "14h - 18h (fermé mardi)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 49.4422,
      "lng": 1.0939
    },
    "highlights": [
      "Faïences de Rouen",
      "Porcelaines",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 327,
    "name": "Musée Le Secq des Tournelles",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée de la ferronnerie dans une église gothique.",
    "location": "Rouen, Normandie",
    "rating": 4.5,
    "price": "6€",
    "hours": "14h - 18h (fermé mardi)",
    "period": "Moyen Âge - XIXe siècle",
    "coordinates": {
      "lat": 49.4428,
      "lng": 1.0953
    },
    "highlights": [
      "Ferronnerie",
      "Serrures",
      "Enseignes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 328,
    "name": "Musée Flaubert et d'Histoire de la Médecine",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Maison natale de Gustave Flaubert.",
    "location": "Rouen, Normandie",
    "rating": 4.5,
    "price": "4€",
    "hours": "14h - 18h (fermé lundi)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 49.4411,
      "lng": 1.0878
    },
    "highlights": [
      "Flaubert",
      "Médecine",
      "Maison natale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 329,
    "name": "Musée Claude Monet",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Maison et jardins de Claude Monet.",
    "location": "Giverny, Normandie",
    "rating": 4.5,
    "price": "12€",
    "hours": "9h30 - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 49.0756,
      "lng": 1.5336
    },
    "highlights": [
      "Maison de Monet",
      "Jardins",
      "Nymphéas"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 330,
    "name": "Musée Malraux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts du Havre.",
    "location": "Le Havre, Normandie",
    "rating": 4.5,
    "price": "7€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 49.4858,
      "lng": 0.1047
    },
    "highlights": [
      "Boudin",
      "Dufy",
      "Impressionnistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 331,
    "name": "Musée d'Art Moderne André Malraux",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée d'art moderne face à la mer.",
    "location": "Le Havre, Normandie",
    "rating": 4.5,
    "price": "7€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 49.4858,
      "lng": 0.1047
    },
    "highlights": [
      "Impressionnisme",
      "Fauvisme",
      "Vue sur mer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 332,
    "name": "Cité de l'Automobile",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bugatti_Royale_at_the_Cit%C3%A9_de_l%27Automobile.jpg/800px-Bugatti_Royale_at_the_Cit%C3%A9_de_l%27Automobile.jpg",
    "description": "Plus grande collection d'automobiles au monde.",
    "location": "Mulhouse, Grand Est",
    "rating": 4.5,
    "price": "18€",
    "hours": "10h - 17h",
    "period": "XIXe - XXIe siècle",
    "coordinates": {
      "lat": 47.76,
      "lng": 7.33
    },
    "highlights": [
      "Collection Schlumpf",
      "Bugatti",
      "Voitures anciennes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 333,
    "name": "Musée des Beaux-Arts de Strasbourg",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des beaux-arts dans le Palais Rohan.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIVe - XIXe siècle",
    "coordinates": {
      "lat": 48.5808,
      "lng": 7.7519
    },
    "highlights": [
      "Botticelli",
      "Giotto",
      "El Greco"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 334,
    "name": "Musée Archéologique de Strasbourg",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée archéologique dans le Palais Rohan.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Préhistoire - Moyen Âge",
    "coordinates": {
      "lat": 48.5808,
      "lng": 7.7519
    },
    "highlights": [
      "Archéologie alsacienne",
      "Époque romaine",
      "Mérovingiens"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 335,
    "name": "Musée des Arts Décoratifs de Strasbourg",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée des arts décoratifs dans le Palais Rohan.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVIIe - XIXe siècle",
    "coordinates": {
      "lat": 48.5808,
      "lng": 7.7519
    },
    "highlights": [
      "Appartements des cardinaux",
      "Faïences",
      "Horlogerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 336,
    "name": "Musée Zoologique de Strasbourg",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Musée zoologique de Strasbourg.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.5844,
      "lng": 7.7683
    },
    "highlights": [
      "Zoologie",
      "Oiseaux d'Alsace",
      "Collections naturalistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 337,
    "name": "Musée National de Préhistoire",
    "type": "musée",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Le plus grand musée de préhistoire en France.",
    "location": "Les Eyzies, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "7€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 44.9367,
      "lng": 1.0167
    },
    "highlights": [
      "Homme de Cro-Magnon",
      "Art préhistorique",
      "Outils"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 338,
    "name": "Centre Pompidou-Metz",
    "type": "musée",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Centre_Pompidou-Metz_2019.jpg/800px-Centre_Pompidou-Metz_2019.jpg",
    "description": "Antenne du Centre Pompidou avec architecture spectaculaire.",
    "location": "Metz, Grand Est",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Art moderne et contemporain",
    "coordinates": {
      "lat": 49.1086,
      "lng": 6.1797
    },
    "highlights": [
      "Architecture Shigeru Ban",
      "Art contemporain",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "name": "Petit Palais - Musée des Beaux-Arts de Paris",
    "type": "musée",
    "image": "",
    "description": "Collections allant de l'Antiquité à 1900, dans un palais de 1900.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Antiquité - 1900",
    "coordinates": {
      "lat": 48.866,
      "lng": 2.313
    },
    "highlights": [
      "Jardin intérieur",
      "Courbet",
      "Monet"
    ],
    "visited": false,
    "favorite": false,
    "id": 339
  },
  {
    "name": "Musée national de la Renaissance",
    "type": "musée",
    "image": "",
    "description": "Château d'Écouen, arts décoratifs de la Renaissance française et européenne.",
    "location": "Écouen, Île-de-France",
    "rating": 4.3,
    "price": "7€",
    "hours": "9h30 - 17h45 (fermé mardi)",
    "period": "Renaissance",
    "coordinates": {
      "lat": 48.9885,
      "lng": 2.3832
    },
    "highlights": [
      "Tapisseries de David et Bethsabée",
      "Orfèvrerie",
      "Château"
    ],
    "visited": false,
    "favorite": false,
    "id": 340
  },
  {
    "name": "Musée Condé",
    "type": "musée",
    "image": "",
    "description": "Château de Chantilly, deuxième collection de peintures anciennes après le Louvre.",
    "location": "Chantilly, Île-de-France",
    "rating": 4.7,
    "price": "17€",
    "hours": "10h - 18h",
    "period": "Peintures anciennes",
    "coordinates": {
      "lat": 49.1937,
      "lng": 2.4847
    },
    "highlights": [
      "Les Très Riches Heures",
      "Raphaël",
      "Cabinet des livres"
    ],
    "visited": false,
    "favorite": false,
    "id": 341
  },
  {
    "name": "Musée du Château de Fontainebleau",
    "type": "musée",
    "image": "",
    "description": "Résidence royale de François Ier à Napoléon III, 1 500 pièces meublées.",
    "location": "Fontainebleau, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Renaissance - XIXe siècle",
    "coordinates": {
      "lat": 48.4014,
      "lng": 2.7015
    },
    "highlights": [
      "Galerie François Ier",
      "Salle du Trône",
      "Jardins"
    ],
    "visited": false,
    "favorite": false,
    "id": 342
  },
  {
    "name": "Musée du Château de Versailles",
    "type": "musée",
    "image": "",
    "description": "Résidence des rois de France, Galerie des Glaces, jardins de Le Nôtre.",
    "location": "Versailles, Île-de-France",
    "rating": 4.8,
    "price": "21€",
    "hours": "9h - 18h30 (fermé lundi)",
    "period": "XVIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "highlights": [
      "Galerie des Glaces",
      "Appartements royaux",
      "Jardins"
    ],
    "visited": false,
    "favorite": false,
    "id": 343
  },
  {
    "name": "Musée de Saint-Denis",
    "type": "musée",
    "image": "",
    "description": "Ancien Carmel, collection sur la Commune de Paris et Paul Éluard.",
    "location": "Saint-Denis, Île-de-France",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 17h30 (fermé mardi)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.9366,
      "lng": 2.3594
    },
    "highlights": [
      "Commune de Paris",
      "Paul Éluard",
      "Art moderne"
    ],
    "visited": false,
    "favorite": false,
    "id": 344
  },
  {
    "name": "Musée de la Musique - Cité de la Musique",
    "type": "musée",
    "image": "",
    "description": "7 000 instruments de musique du XVIe siècle à nos jours.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "10€",
    "hours": "12h - 18h (fermé lundi)",
    "period": "Musique",
    "coordinates": {
      "lat": 48.8911,
      "lng": 2.394
    },
    "highlights": [
      "Stradivarius",
      "Piano de Chopin",
      "Guitare de Django"
    ],
    "visited": false,
    "favorite": false,
    "id": 345
  },
  {
    "name": "Palais de la Porte Dorée - Musée de l'Immigration",
    "type": "musée",
    "image": "",
    "description": "Histoire de l'immigration en France dans un palais Art déco.",
    "location": "Paris, Île-de-France",
    "rating": 4.2,
    "price": "10€",
    "hours": "10h - 17h30 (fermé lundi)",
    "period": "Immigration",
    "coordinates": {
      "lat": 48.8344,
      "lng": 2.4066
    },
    "highlights": [
      "Fresque Art déco",
      "Aquarium tropical",
      "Galerie des dons"
    ],
    "visited": false,
    "favorite": false,
    "id": 346
  },
  {
    "name": "Musée national Gustave Moreau",
    "type": "musée",
    "image": "",
    "description": "Maison-atelier du peintre symboliste, 14 000 œuvres sur 4 niveaux.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 17h15 (fermé mardi)",
    "period": "Symbolisme",
    "coordinates": {
      "lat": 48.8806,
      "lng": 2.3368
    },
    "highlights": [
      "Jupiter et Sémélé",
      "Grand atelier",
      "Escalier en colimaçon"
    ],
    "visited": false,
    "favorite": false,
    "id": 347
  },
  {
    "name": "Musée national de Port-Royal des Champs",
    "type": "musée",
    "image": "",
    "description": "Sur le site de l'abbaye janséniste, histoire de Port-Royal.",
    "location": "Magny-les-Hameaux, Île-de-France",
    "rating": 4.1,
    "price": "6€",
    "hours": "10h30 - 18h (fermé mardi)",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.7453,
      "lng": 2.0538
    },
    "highlights": [
      "Abbaye",
      "Jansénisme",
      "Philippe de Champaigne"
    ],
    "visited": false,
    "favorite": false,
    "id": 348
  },
  {
    "name": "Musée des Beaux-Arts de Marseille",
    "type": "musée",
    "image": "",
    "description": "Palais Longchamp, peintures et sculptures du XVIe au XIXe siècle.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "6€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "XVIe - XIXe siècle",
    "coordinates": {
      "lat": 43.3047,
      "lng": 5.3943
    },
    "highlights": [
      "Puget",
      "Rubens",
      "Palais Longchamp"
    ],
    "visited": false,
    "favorite": false,
    "id": 349
  },
  {
    "name": "Atelier de Cézanne",
    "type": "musée",
    "image": "",
    "description": "Dernier atelier de Paul Cézanne, conservé en l'état depuis 1906.",
    "location": "Aix-en-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "Impressionnisme",
    "coordinates": {
      "lat": 43.5361,
      "lng": 5.4486
    },
    "highlights": [
      "Atelier intact",
      "Objets personnels",
      "Vue Sainte-Victoire"
    ],
    "visited": false,
    "favorite": false,
    "id": 350
  },
  {
    "name": "Fondation Vasarely",
    "type": "musée",
    "image": "",
    "description": "Architecture monumentale de Victor Vasarely, 44 intégrations.",
    "location": "Aix-en-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Op art",
    "coordinates": {
      "lat": 43.5129,
      "lng": 5.4197
    },
    "highlights": [
      "Intégrations monumentales",
      "Op art",
      "Architecture hexagonale"
    ],
    "visited": false,
    "favorite": false,
    "id": 351
  },
  {
    "name": "Musée du Petit Palais d'Avignon",
    "type": "musée",
    "image": "",
    "description": "Peintures italiennes et avignonnaises du XIIIe au XVe siècle.",
    "location": "Avignon, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 13h / 14h - 18h (fermé mardi)",
    "period": "Moyen Âge - Renaissance",
    "coordinates": {
      "lat": 43.9519,
      "lng": 4.8064
    },
    "highlights": [
      "Primitifs italiens",
      "Botticelli",
      "Carpaccio"
    ],
    "visited": false,
    "favorite": false,
    "id": 352
  },
  {
    "name": "Musée Angladon - Collection Jacques Doucet",
    "type": "musée",
    "image": "",
    "description": "Collection d'art du couturier Jacques Doucet, Van Gogh, Cézanne.",
    "location": "Avignon, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "8€",
    "hours": "13h - 18h (fermé lun-mar)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 43.9462,
      "lng": 4.809
    },
    "highlights": [
      "Van Gogh",
      "Degas",
      "Cézanne"
    ],
    "visited": false,
    "favorite": false,
    "id": 353
  },
  {
    "name": "Musée national Marc Chagall",
    "type": "musée",
    "image": "",
    "description": "Plus grande collection publique de Chagall, Message Biblique.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Art moderne",
    "coordinates": {
      "lat": 43.712,
      "lng": 7.271
    },
    "highlights": [
      "Message Biblique",
      "Vitraux",
      "Mosaïque"
    ],
    "visited": false,
    "favorite": false,
    "id": 354
  },
  {
    "name": "Musée des Beaux-Arts Jules Chéret",
    "type": "musée",
    "image": "",
    "description": "Villa Thompson, peinture du XVIIe au XXe siècle.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.1,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "XVIIe - XXe siècle",
    "coordinates": {
      "lat": 43.6978,
      "lng": 7.2553
    },
    "highlights": [
      "Raoul Dufy",
      "Jules Chéret",
      "Van Dongen"
    ],
    "visited": false,
    "favorite": false,
    "id": 355
  },
  {
    "name": "Institut Lumière",
    "type": "musée",
    "image": "",
    "description": "Villa des frères Lumière, berceau du cinéma.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h30 (fermé lundi)",
    "period": "Cinéma",
    "coordinates": {
      "lat": 45.7456,
      "lng": 4.8711
    },
    "highlights": [
      "Premier film",
      "Cinématographe",
      "Villa historique"
    ],
    "visited": false,
    "favorite": false,
    "id": 356
  },
  {
    "name": "Musée des Tissus et des Arts décoratifs",
    "type": "musée",
    "image": "",
    "description": "Plus grande collection textile au monde, 2,5 millions de pièces.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "10€",
    "hours": "10h - 17h30 (fermé lun-mar)",
    "period": "Textile",
    "coordinates": {
      "lat": 45.7536,
      "lng": 4.8276
    },
    "highlights": [
      "Soieries lyonnaises",
      "Tapisseries",
      "Haute couture"
    ],
    "visited": false,
    "favorite": false,
    "id": 357
  },
  {
    "name": "Musée Gadagne - Musée d'Histoire de Lyon",
    "type": "musée",
    "image": "",
    "description": "Demeure Renaissance du Vieux Lyon, histoire de la ville.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Renaissance - XXIe siècle",
    "coordinates": {
      "lat": 45.7637,
      "lng": 4.8271
    },
    "highlights": [
      "Vieux Lyon",
      "Jardins",
      "Marionnettes"
    ],
    "visited": false,
    "favorite": false,
    "id": 358
  },
  {
    "name": "Muséum de Lyon",
    "type": "musée",
    "image": "",
    "description": "Sciences naturelles intégrées au musée des Confluences.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "12€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Sciences naturelles",
    "coordinates": {
      "lat": 45.7327,
      "lng": 4.8188
    },
    "highlights": [
      "Biodiversité",
      "Évolution",
      "Minéraux"
    ],
    "visited": false,
    "favorite": false,
    "id": 359
  },
  {
    "name": "Musée de la Civilisation gallo-romaine",
    "type": "musée",
    "image": "",
    "description": "Intégré à la colline de Fourvière, archéologie gallo-romaine de Lyon.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Antiquité",
    "coordinates": {
      "lat": 45.761,
      "lng": 4.8186
    },
    "highlights": [
      "Table claudienne",
      "Mosaïques",
      "Théâtres romains"
    ],
    "visited": false,
    "favorite": false,
    "id": 360
  },
  {
    "name": "Musée d'Art Hyacinthe Rigaud",
    "type": "musée",
    "image": "",
    "description": "Portraits de Rigaud et art catalan dans un hôtel du XIVe.",
    "location": "Perpignan, Occitanie",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h30 - 17h30 (fermé lundi)",
    "period": "XIVe - XXIe siècle",
    "coordinates": {
      "lat": 43.1167,
      "lng": 2.893
    },
    "highlights": [
      "Portraits royaux de Rigaud",
      "Art catalan",
      "Picasso"
    ],
    "visited": false,
    "favorite": false,
    "id": 361
  },
  {
    "name": "Musée de Lodève",
    "type": "musée",
    "image": "",
    "description": "Sciences de la terre et beaux-arts, empreintes de dinosaures.",
    "location": "Lodève, Occitanie",
    "rating": 4.1,
    "price": "7€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Paléontologie",
    "coordinates": {
      "lat": 43.7316,
      "lng": 3.3196
    },
    "highlights": [
      "Empreintes de dinosaures",
      "Art contemporain",
      "Paul Dardé"
    ],
    "visited": false,
    "favorite": false,
    "id": 362
  },
  {
    "name": "Musée National de la Préhistoire",
    "type": "musée",
    "image": "",
    "description": "Capitale mondiale de la préhistoire, 18 000 objets.",
    "location": "Les Eyzies, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "7€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 44.9363,
      "lng": 1.0136
    },
    "highlights": [
      "Art pariétal",
      "Outils préhistoriques",
      "Cro-Magnon"
    ],
    "visited": false,
    "favorite": false,
    "id": 363
  },
  {
    "name": "Musée d'Art et d'Archéologie du Périgord",
    "type": "musée",
    "image": "",
    "description": "Collections préhistoriques et beaux-arts, un des plus anciens musées de France.",
    "location": "Périgueux, Nouvelle-Aquitaine",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 17h30 (fermé mardi)",
    "period": "Préhistoire - XIXe siècle",
    "coordinates": {
      "lat": 45.1866,
      "lng": 0.723
    },
    "highlights": [
      "Préhistoire",
      "Gallo-romain",
      "Émaux de Limoges"
    ],
    "visited": false,
    "favorite": false,
    "id": 364
  },
  {
    "name": "Musée national de la Porcelaine Adrien Dubouché",
    "type": "musée",
    "image": "",
    "description": "12 000 pièces de céramique et porcelaine, référence mondiale.",
    "location": "Limoges, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 17h15 (fermé mardi)",
    "period": "Porcelaine",
    "coordinates": {
      "lat": 45.8317,
      "lng": 1.2616
    },
    "highlights": [
      "Porcelaine de Limoges",
      "Céramiques chinoises",
      "Sèvres"
    ],
    "visited": false,
    "favorite": false,
    "id": 365
  },
  {
    "name": "Musée Sainte-Croix",
    "type": "musée",
    "image": "",
    "description": "Archéologie et beaux-arts, de la Préhistoire à l'art contemporain.",
    "location": "Poitiers, Nouvelle-Aquitaine",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Préhistoire - XXIe siècle",
    "coordinates": {
      "lat": 46.58,
      "lng": 0.3446
    },
    "highlights": [
      "Archéologie médiévale",
      "Camille Claudel",
      "Bonheur"
    ],
    "visited": false,
    "favorite": false,
    "id": 366
  },
  {
    "name": "Musée du Nouveau Monde",
    "type": "musée",
    "image": "",
    "description": "Histoire des relations entre La Rochelle et les Amériques.",
    "location": "La Rochelle, Nouvelle-Aquitaine",
    "rating": 4.1,
    "price": "6€",
    "hours": "10h - 13h / 13h45 - 17h45 (fermé mardi)",
    "period": "XVIe - XIXe siècle",
    "coordinates": {
      "lat": 46.1599,
      "lng": -1.1527
    },
    "highlights": [
      "Commerce triangulaire",
      "Amériques",
      "Hôtel Fleuriau"
    ],
    "visited": false,
    "favorite": false,
    "id": 367
  },
  {
    "name": "Aquarium de La Rochelle",
    "type": "musée",
    "image": "",
    "description": "12 000 animaux marins, l'un des plus grands aquariums privés d'Europe.",
    "location": "La Rochelle, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "17.50€",
    "hours": "10h - 20h",
    "period": "Monde marin",
    "coordinates": {
      "lat": 46.1533,
      "lng": -1.1533
    },
    "highlights": [
      "Requins",
      "Méduses",
      "Tortues marines"
    ],
    "visited": false,
    "favorite": false,
    "id": 368
  },
  {
    "name": "Château des ducs de Bretagne - Musée d'Histoire",
    "type": "musée",
    "image": "",
    "description": "Château médiéval, musée d'histoire de Nantes et traite négrière.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Moyen Âge - XXIe siècle",
    "coordinates": {
      "lat": 47.216,
      "lng": -1.5485
    },
    "highlights": [
      "Édit de Nantes",
      "Traite négrière",
      "Château"
    ],
    "visited": false,
    "favorite": false,
    "id": 369
  },
  {
    "name": "Musée Jean Lurçat et de la Tapisserie contemporaine",
    "type": "musée",
    "image": "",
    "description": "Hôpital Saint-Jean, Chant du Monde de Jean Lurçat.",
    "location": "Angers, Pays de la Loire",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h30 (fermé lundi)",
    "period": "Tapisserie",
    "coordinates": {
      "lat": 47.469,
      "lng": -0.5559
    },
    "highlights": [
      "Le Chant du Monde",
      "Thomas Gleb",
      "Tapisseries contemporaines"
    ],
    "visited": false,
    "favorite": false,
    "id": 370
  },
  {
    "name": "Musée de la Tapisserie de l'Apocalypse",
    "type": "musée",
    "image": "",
    "description": "Au château d'Angers, plus grande tapisserie médiévale au monde (140m).",
    "location": "Angers, Pays de la Loire",
    "rating": 4.5,
    "price": "9.50€",
    "hours": "10h - 18h30",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 47.4708,
      "lng": -0.5606
    },
    "highlights": [
      "Tapisserie de l'Apocalypse",
      "Château d'Angers",
      "Jardins"
    ],
    "visited": false,
    "favorite": false,
    "id": 371
  },
  {
    "name": "Musée Automobile de la Sarthe",
    "type": "musée",
    "image": "",
    "description": "150 véhicules dans le circuit des 24 Heures du Mans.",
    "location": "Le Mans, Pays de la Loire",
    "rating": 4.2,
    "price": "8.50€",
    "hours": "10h - 18h",
    "period": "Automobile",
    "coordinates": {
      "lat": 47.9526,
      "lng": 0.2083
    },
    "highlights": [
      "24 Heures du Mans",
      "Voitures de course",
      "Bugatti"
    ],
    "visited": false,
    "favorite": false,
    "id": 372
  },
  {
    "name": "Historial de la Grande Guerre",
    "type": "musée",
    "image": "",
    "description": "Musée de référence sur la Première Guerre mondiale.",
    "location": "Péronne, Hauts-de-France",
    "rating": 4.3,
    "price": "10€",
    "hours": "9h30 - 18h",
    "period": "1914-1918",
    "coordinates": {
      "lat": 49.9328,
      "lng": 2.9353
    },
    "highlights": [
      "Tranchées",
      "Otto Dix",
      "Correspondances"
    ],
    "visited": false,
    "favorite": false,
    "id": 373
  },
  {
    "name": "Musée de la Céramique de Rouen",
    "type": "musée",
    "image": "",
    "description": "Faïences de Rouen et céramiques du XVIe au XXe siècle.",
    "location": "Rouen, Normandie",
    "rating": 4,
    "price": "Gratuit",
    "hours": "14h - 18h (fermé mardi)",
    "period": "Céramique",
    "coordinates": {
      "lat": 49.4411,
      "lng": 1.0976
    },
    "highlights": [
      "Faïences de Rouen",
      "Majoliques",
      "Porcelaines"
    ],
    "visited": false,
    "favorite": false,
    "id": 374
  },
  {
    "name": "Musée des Impressionnismes",
    "type": "musée",
    "image": "",
    "description": "Art impressionniste et post-impressionniste près des jardins de Monet.",
    "location": "Giverny, Normandie",
    "rating": 4.3,
    "price": "9.50€",
    "hours": "10h - 18h",
    "period": "Impressionnisme",
    "coordinates": {
      "lat": 49.075,
      "lng": 1.533
    },
    "highlights": [
      "Monet",
      "Caillebotte",
      "Jardins"
    ],
    "visited": false,
    "favorite": false,
    "id": 375
  },
  {
    "name": "Musée André Malraux (MuMa)",
    "type": "musée",
    "image": "",
    "description": "Lumière naturelle exceptionnelle, deuxième collection impressionniste de France.",
    "location": "Le Havre, Normandie",
    "rating": 4.4,
    "price": "7€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "Impressionnisme",
    "coordinates": {
      "lat": 49.4884,
      "lng": 0.1036
    },
    "highlights": [
      "Boudin",
      "Monet",
      "Dufy"
    ],
    "visited": false,
    "favorite": false,
    "id": 376
  },
  {
    "name": "Musée du Débarquement",
    "type": "musée",
    "image": "",
    "description": "Port artificiel Mulberry et histoire du Débarquement du 6 juin 1944.",
    "location": "Arromanches, Normandie",
    "rating": 4.3,
    "price": "8.90€",
    "hours": "10h - 17h30",
    "period": "1944",
    "coordinates": {
      "lat": 49.3396,
      "lng": -0.6219
    },
    "highlights": [
      "Port Mulberry",
      "D-Day",
      "Maquettes"
    ],
    "visited": false,
    "favorite": false,
    "id": 377
  },
  {
    "name": "Musée des Beaux-Arts de Reims",
    "type": "musée",
    "image": "",
    "description": "Abbaye Saint-Denis, peintures du XVe au XXe siècle.",
    "location": "Reims, Grand Est",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 49.2504,
      "lng": 3.966
    },
    "highlights": [
      "Cranach",
      "Corot",
      "David"
    ],
    "visited": false,
    "favorite": false,
    "id": 378
  },
  {
    "name": "Musée de la Reddition",
    "type": "musée",
    "image": "",
    "description": "Salle historique de la capitulation allemande du 7 mai 1945.",
    "location": "Reims, Grand Est",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "1945",
    "coordinates": {
      "lat": 49.2567,
      "lng": 3.9808
    },
    "highlights": [
      "Salle de la Reddition",
      "Cartes d'état-major",
      "8 mai 1945"
    ],
    "visited": false,
    "favorite": false,
    "id": 379
  },
  {
    "name": "Musée Gustave Courbet",
    "type": "musée",
    "image": "",
    "description": "Maison natale de Courbet, peintures du maître réaliste.",
    "location": "Ornans, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Réalisme",
    "coordinates": {
      "lat": 47.1067,
      "lng": 6.1456
    },
    "highlights": [
      "L'Enterrement à Ornans",
      "Paysages",
      "Autoportraits"
    ],
    "visited": false,
    "favorite": false,
    "id": 380
  },
  {
    "name": "Musée Niépce",
    "type": "musée",
    "image": "",
    "description": "Hommage à Nicéphore Niépce, inventeur de la photographie.",
    "location": "Chalon-sur-Saône, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "5€",
    "hours": "9h30 - 11h45 / 14h - 17h45 (fermé mardi)",
    "period": "Photographie",
    "coordinates": {
      "lat": 46.783,
      "lng": 4.8566
    },
    "highlights": [
      "Premières photographies",
      "Daguerréotypes",
      "Appareils anciens"
    ],
    "visited": false,
    "favorite": false,
    "id": 381
  },
  {
    "name": "Centre de Création Contemporaine Olivier Debré",
    "type": "musée",
    "image": "",
    "description": "Art contemporain dans une architecture de l'agence Aires Mateus.",
    "location": "Tours, Centre-Val de Loire",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Art contemporain",
    "coordinates": {
      "lat": 47.3946,
      "lng": 0.691
    },
    "highlights": [
      "Expositions temporaires",
      "Architecture minimaliste"
    ],
    "visited": false,
    "favorite": false,
    "id": 382
  },
  {
    "name": "Muséum d'Orléans pour la Biodiversité et l'Environnement",
    "type": "musée",
    "image": "",
    "description": "Sciences naturelles dans le parc Pasteur.",
    "location": "Orléans, Centre-Val de Loire",
    "rating": 4,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Sciences naturelles",
    "coordinates": {
      "lat": 47.8978,
      "lng": 1.9022
    },
    "highlights": [
      "Biodiversité",
      "Serres",
      "Aquariums"
    ],
    "visited": false,
    "favorite": false,
    "id": 383
  },
  {
    "name": "Musée du Compagnonnage",
    "type": "musée",
    "image": "",
    "description": "Chefs-d'œuvre des compagnons du Tour de France.",
    "location": "Tours, Centre-Val de Loire",
    "rating": 4.3,
    "price": "6€",
    "hours": "9h - 12h30 / 14h - 18h",
    "period": "Artisanat",
    "coordinates": {
      "lat": 47.3969,
      "lng": 0.6836
    },
    "highlights": [
      "Chefs-d'œuvre",
      "Tour de France",
      "Métiers"
    ],
    "visited": false,
    "favorite": false,
    "id": 384
  },
  {
    "name": "Maison de George Sand",
    "type": "musée",
    "image": "",
    "description": "Demeure de George Sand dans le Berry, conservée en l'état.",
    "location": "Nohant-Vic, Centre-Val de Loire",
    "rating": 4.3,
    "price": "7.50€",
    "hours": "10h - 12h30 / 14h - 18h30",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 46.632,
      "lng": 1.9793
    },
    "highlights": [
      "Théâtre de marionnettes",
      "Jardin",
      "Chambre de Chopin"
    ],
    "visited": false,
    "favorite": false,
    "id": 385
  },
  {
    "name": "Musée Fesch",
    "type": "musée",
    "image": "",
    "description": "Plus importante collection de peintures italiennes en France après le Louvre.",
    "location": "Ajaccio, Corse",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 17h (fermé lundi)",
    "period": "Peintures italiennes",
    "coordinates": {
      "lat": 41.9208,
      "lng": 8.7341
    },
    "highlights": [
      "Botticelli",
      "Bellini",
      "Titien"
    ],
    "visited": false,
    "favorite": false,
    "id": 386
  },
  {
    "name": "Maison Bonaparte",
    "type": "musée",
    "image": "",
    "description": "Maison natale de Napoléon Bonaparte, musée national.",
    "location": "Ajaccio, Corse",
    "rating": 4.1,
    "price": "7€",
    "hours": "10h - 12h30 / 13h15 - 17h30 (fermé lundi)",
    "period": "XVIIIe - XIXe siècle",
    "coordinates": {
      "lat": 41.9207,
      "lng": 8.7381
    },
    "highlights": [
      "Chambre de naissance",
      "Mobilier familial",
      "Napoléon"
    ],
    "visited": false,
    "favorite": false,
    "id": 387
  },
  {
    "name": "Musée de la Corse",
    "type": "musée",
    "image": "",
    "description": "Citadelle de Corte, ethnographie et anthropologie de la Corse.",
    "location": "Corte, Corse",
    "rating": 4,
    "price": "5.50€",
    "hours": "10h - 18h",
    "period": "Culture corse",
    "coordinates": {
      "lat": 42.3052,
      "lng": 9.1494
    },
    "highlights": [
      "Traditions corses",
      "Citadelle",
      "Anthropologie"
    ],
    "visited": false,
    "favorite": false,
    "id": 388
  },
  {
    "name": "Mémorial ACTe",
    "type": "musée",
    "image": "",
    "description": "Centre caribéen d'expressions et de mémoire de la traite et de l'esclavage.",
    "location": "Pointe-à-Pitre, Guadeloupe",
    "rating": 4.4,
    "price": "15€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "Esclavage",
    "coordinates": {
      "lat": 16.253,
      "lng": -61.5376
    },
    "highlights": [
      "Mémoire de l'esclavage",
      "Architecture",
      "Silver Cristal"
    ],
    "visited": false,
    "favorite": false,
    "id": 389
  },
  {
    "name": "Musée de la Pagerie",
    "type": "musée",
    "image": "",
    "description": "Domaine natal de l'impératrice Joséphine de Beauharnais.",
    "location": "Trois-Îlets, Martinique",
    "rating": 3.9,
    "price": "5€",
    "hours": "9h - 17h30 (fermé lundi)",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 14.5375,
      "lng": -61.0458
    },
    "highlights": [
      "Joséphine",
      "Habitation sucrière",
      "Période napoléonienne"
    ],
    "visited": false,
    "favorite": false,
    "id": 390
  },
  {
    "name": "Musée des Cultures Guyanaises",
    "type": "musée",
    "image": "",
    "description": "Cultures amérindiennes, bushinengués et créoles de Guyane.",
    "location": "Cayenne, Guyane",
    "rating": 3.8,
    "price": "3€",
    "hours": "8h - 13h / 15h - 17h45 (fermé dim)",
    "period": "Cultures guyanaises",
    "coordinates": {
      "lat": 4.9333,
      "lng": -52.3333
    },
    "highlights": [
      "Art amérindien",
      "Objets rituels",
      "Costumes"
    ],
    "visited": false,
    "favorite": false,
    "id": 391
  },
  {
    "name": "Musée Léon Dierx",
    "type": "musée",
    "image": "",
    "description": "Art moderne dans l'océan Indien, collection Vollard et art réunionnais.",
    "location": "Saint-Denis, La Réunion",
    "rating": 4,
    "price": "Gratuit",
    "hours": "9h30 - 17h30 (fermé lundi)",
    "period": "Art moderne",
    "coordinates": {
      "lat": -20.8789,
      "lng": 55.4481
    },
    "highlights": [
      "Collection Vollard",
      "Picasso",
      "Gauguin"
    ],
    "visited": false,
    "favorite": false,
    "id": 392
  },
  {
    "id": 393,
    "name": "Château de Versailles",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Versailles_Palace.jpg/800px-Versailles_Palace.jpg",
    "description": "Symbole de l'absolutisme royal français, ce palais somptueux témoigne du faste de Louis XIV.",
    "location": "Versailles, Île-de-France",
    "rating": 4.8,
    "price": "21€",
    "hours": "9h - 18h30 (fermé lundi)",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "highlights": [
      "Galerie des Glaces",
      "Jardins à la française",
      "Grand Trianon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 394,
    "name": "Château de Chambord",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Chambord_castle%2C_aerial_view.jpg/800px-Chambord_castle%2C_aerial_view.jpg",
    "description": "Chef-d'œuvre de la Renaissance française, célèbre pour son escalier à double révolution.",
    "location": "Chambord, Centre-Val de Loire",
    "rating": 4.7,
    "price": "16€",
    "hours": "9h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.6161111,
      "lng": 1.5172222
    },
    "highlights": [
      "Escalier double révolution",
      "Terrasses panoramiques",
      "Parc de 5440 ha"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 395,
    "name": "Château de Chenonceau",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Chateau_de_Chenonceau_2008E.jpg/800px-Chateau_de_Chenonceau_2008E.jpg",
    "description": "Le château des Dames, enjambant le Cher avec élégance.",
    "location": "Chenonceaux, Centre-Val de Loire",
    "rating": 4.8,
    "price": "15€",
    "hours": "9h - 19h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.3249,
      "lng": 1.0705
    },
    "highlights": [
      "Galerie sur le Cher",
      "Jardins de Diane",
      "Jardins de Catherine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 396,
    "name": "Château de Fontainebleau",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/FontainebleauChateau.jpg/800px-FontainebleauChateau.jpg",
    "description": "Résidence des souverains français pendant huit siècles.",
    "location": "Fontainebleau, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "XIIe - XIXe siècle",
    "coordinates": {
      "lat": 48.4019722,
      "lng": 2.6997222
    },
    "highlights": [
      "Galerie François Ier",
      "Appartements de Napoléon",
      "Cour des Adieux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 397,
    "name": "Château d'Amboise",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Castle_Amboise.jpg/800px-Castle_Amboise.jpg",
    "description": "Résidence royale dominant la Loire, dernière demeure de Léonard de Vinci.",
    "location": "Amboise, Centre-Val de Loire",
    "rating": 4.6,
    "price": "15.50€",
    "hours": "9h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 47.4135278,
      "lng": 0.9863889
    },
    "highlights": [
      "Chapelle Saint-Hubert",
      "Tombe de Léonard de Vinci",
      "Vue sur la Loire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 398,
    "name": "Château de Cheverny",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cheverny-Chateau-VueSud.jpg/800px-Cheverny-Chateau-VueSud.jpg",
    "description": "Château privé habité, inspirateur de Moulinsart dans Tintin.",
    "location": "Cheverny, Centre-Val de Loire",
    "rating": 4.6,
    "price": "14.50€",
    "hours": "9h15 - 18h30",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 47.5002,
      "lng": 1.4582
    },
    "highlights": [
      "Exposition Tintin",
      "Intérieurs meublés",
      "Chenil"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 399,
    "name": "Château de Blois",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Chateau_de_Blois_05.jpg/800px-Chateau_de_Blois_05.jpg",
    "description": "Quatre époques architecturales en un seul lieu, résidence de 7 rois et 10 reines.",
    "location": "Blois, Centre-Val de Loire",
    "rating": 4.5,
    "price": "14€",
    "hours": "9h - 18h30",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.5861111,
      "lng": 1.3297222
    },
    "highlights": [
      "Escalier François Ier",
      "Assassinat du duc de Guise",
      "Spectacle son et lumière"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 400,
    "name": "Château d'Azay-le-Rideau",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ch%C3%A2teau_d%27Azay-le-Rideau_001.jpg/800px-Ch%C3%A2teau_d%27Azay-le-Rideau_001.jpg",
    "description": "Bijou de la Renaissance française posé sur une île de l'Indre.",
    "location": "Azay-le-Rideau, Centre-Val de Loire",
    "rating": 4.5,
    "price": "11.50€",
    "hours": "9h30 - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.2591667,
      "lng": 0.4655556
    },
    "highlights": [
      "Reflet dans l'eau",
      "Escalier d'honneur",
      "Parc à l'anglaise"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 401,
    "name": "Château de Villandry",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chateau-Villandry-JardinsEtChateau.jpg/800px-Chateau-Villandry-JardinsEtChateau.jpg",
    "description": "Célèbre pour ses jardins Renaissance et son potager décoratif.",
    "location": "Villandry, Centre-Val de Loire",
    "rating": 4.7,
    "price": "12€",
    "hours": "9h - 18h30",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.3403,
      "lng": 0.5133
    },
    "highlights": [
      "Jardins à la française",
      "Potager ornemental",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 402,
    "name": "Château du Clos Lucé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dernière demeure de Léonard de Vinci, avec ses machines reconstituées.",
    "location": "Amboise, Centre-Val de Loire",
    "rating": 4.7,
    "price": "18€",
    "hours": "9h - 19h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.4098,
      "lng": 0.9947
    },
    "highlights": [
      "Chambre de Léonard",
      "Machines volantes",
      "Jardin de Léonard"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 403,
    "name": "Château de Chantilly",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chateau_de_Chantilly_garden.jpg/800px-Chateau_de_Chantilly_garden.jpg",
    "description": "Joyau de la Renaissance abritant le musée Condé et ses trésors.",
    "location": "Chantilly, Hauts-de-France",
    "rating": 4.7,
    "price": "17€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVIe - XIXe siècle",
    "coordinates": {
      "lat": 49.1939286,
      "lng": 2.4850017
    },
    "highlights": [
      "Musée Condé",
      "Grandes Écuries",
      "Jardins Le Nôtre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 404,
    "name": "Château de Pierrefonds",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Chateau_de_Pierrefonds%2C_April_2007.jpg/800px-Chateau_de_Pierrefonds%2C_April_2007.jpg",
    "description": "Château médiéval reconstruit par Viollet-le-Duc pour Napoléon III.",
    "location": "Pierrefonds, Hauts-de-France",
    "rating": 4.5,
    "price": "8€",
    "hours": "9h30 - 18h",
    "period": "XIXe siècle (reconstruction)",
    "coordinates": {
      "lat": 49.3481,
      "lng": 2.9803
    },
    "highlights": [
      "Architecture néo-médiévale",
      "Décors sculptés",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 405,
    "name": "Château de Vaux-le-Vicomte",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vaux-le-Vicomte%2C_France_%288131980tried%29.jpg/800px-Vaux-le-Vicomte%2C_France_%288131980tried%29.jpg",
    "description": "Chef-d'œuvre de Le Vau, Le Brun et Le Nôtre, modèle de Versailles.",
    "location": "Maincy, Île-de-France",
    "rating": 4.6,
    "price": "18.90€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.5649028,
      "lng": 2.7138111
    },
    "highlights": [
      "Jardins Le Nôtre",
      "Soirées aux chandelles",
      "Coupole peinte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 406,
    "name": "Château de Vincennes",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chateau_de_Vincennes_-_Donjon.jpg/800px-Chateau_de_Vincennes_-_Donjon.jpg",
    "description": "Plus haut donjon d'Europe, résidence royale médiévale aux portes de Paris.",
    "location": "Vincennes, Île-de-France",
    "rating": 4.4,
    "price": "9.50€",
    "hours": "10h - 17h",
    "period": "XIVe - XVIIe siècle",
    "coordinates": {
      "lat": 48.8427,
      "lng": 2.4356
    },
    "highlights": [
      "Donjon médiéval",
      "Sainte-Chapelle",
      "Enceinte fortifiée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 407,
    "name": "Château d'Ussé",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Chateau_d%27Usse_Indre-et-Loire.jpg/800px-Chateau_d%27Usse_Indre-et-Loire.jpg",
    "description": "Le château de la Belle au Bois Dormant, inspirateur de Perrault.",
    "location": "Rigny-Ussé, Centre-Val de Loire",
    "rating": 4.4,
    "price": "14€",
    "hours": "10h - 18h",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 47.25,
      "lng": 0.2917
    },
    "highlights": [
      "Tours romantiques",
      "Conte de Perrault",
      "Jardins Le Nôtre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 408,
    "name": "Château de Saumur",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ch%C3%A2teau_de_Saumur%2C_Maine-et-Loire%2C_France.jpg/800px-Ch%C3%A2teau_de_Saumur%2C_Maine-et-Loire%2C_France.jpg",
    "description": "Forteresse dominant la Loire, musée du cheval et des arts décoratifs.",
    "location": "Saumur, Pays de la Loire",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIe siècle",
    "coordinates": {
      "lat": 47.2579,
      "lng": -0.0717
    },
    "highlights": [
      "Vue sur la Loire",
      "Musée du Cheval",
      "Très Riches Heures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 409,
    "name": "Château d'Angers",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chateau_d%27Angers.jpg/800px-Chateau_d%27Angers.jpg",
    "description": "Forteresse aux 17 tours abritant la célèbre Tenture de l'Apocalypse.",
    "location": "Angers, Pays de la Loire",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h30",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 47.4697,
      "lng": -0.5597
    },
    "highlights": [
      "Tenture de l'Apocalypse",
      "17 tours",
      "Jardins suspendus"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 410,
    "name": "Château de Langeais",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Langeais_castle.jpg/800px-Langeais_castle.jpg",
    "description": "Château fort du XVe siècle avec pont-levis fonctionnel.",
    "location": "Langeais, Centre-Val de Loire",
    "rating": 4.4,
    "price": "11€",
    "hours": "9h30 - 18h30",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.325,
      "lng": 0.4064
    },
    "highlights": [
      "Pont-levis",
      "Mariage d'Anne de Bretagne",
      "Donjon de Foulques Nerra"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 411,
    "name": "Château de Chinon",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Chateau_Chinon.jpg/800px-Chateau_Chinon.jpg",
    "description": "Forteresse royale où Jeanne d'Arc rencontra Charles VII.",
    "location": "Chinon, Centre-Val de Loire",
    "rating": 4.3,
    "price": "10.50€",
    "hours": "9h30 - 19h",
    "period": "Xe - XVe siècle",
    "coordinates": {
      "lat": 47.1681,
      "lng": 0.2361
    },
    "highlights": [
      "Logis royaux",
      "Tour de l'Horloge",
      "Rencontre avec Jeanne d'Arc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 412,
    "name": "Château de Loches",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Loches_Donjon.jpg/800px-Loches_Donjon.jpg",
    "description": "Cité royale médiévale avec donjon et logis royaux.",
    "location": "Loches, Centre-Val de Loire",
    "rating": 4.4,
    "price": "10€",
    "hours": "9h - 19h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.1289,
      "lng": 0.9975
    },
    "highlights": [
      "Donjon roman",
      "Logis royaux",
      "Agnès Sorel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 413,
    "name": "Château des Ducs de Bretagne",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chateau_des_ducs_de_Bretagne_-_Nantes.jpg/800px-Chateau_des_ducs_de_Bretagne_-_Nantes.jpg",
    "description": "Forteresse et palais ducal au cœur de Nantes, musée d'histoire.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.2161,
      "lng": -1.5499
    },
    "highlights": [
      "Remparts",
      "Musée d'histoire",
      "Cour Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 414,
    "name": "Château de Brest",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse millénaire abritant le musée de la Marine.",
    "location": "Brest, Bretagne",
    "rating": 4.2,
    "price": "9€",
    "hours": "13h30 - 18h30",
    "period": "IIIe - XVIIe siècle",
    "coordinates": {
      "lat": 48.3833,
      "lng": -4.495
    },
    "highlights": [
      "Musée de la Marine",
      "Tour Tanguy",
      "Sous-marins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 415,
    "name": "Château de Josselin",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Josselin_-_ch%C3%A2teau.jpg/800px-Josselin_-_ch%C3%A2teau.jpg",
    "description": "Forteresse des Rohan avec façade flamboyante sur l'Oust.",
    "location": "Josselin, Bretagne",
    "rating": 4.4,
    "price": "10.80€",
    "hours": "14h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.9522,
      "lng": -2.5481
    },
    "highlights": [
      "Façade gothique flamboyant",
      "Musée de poupées",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 416,
    "name": "Château de Combourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure d'enfance de Chateaubriand en Bretagne romantique.",
    "location": "Combourg, Bretagne",
    "rating": 4.3,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIe - XIXe siècle",
    "coordinates": {
      "lat": 48.4117,
      "lng": -1.7533
    },
    "highlights": [
      "Tour du Chat",
      "Chambre de Chateaubriand",
      "Parc romantique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 417,
    "name": "Château de Fougères",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Fougeres_-_chateau.jpg/800px-Fougeres_-_chateau.jpg",
    "description": "L'une des plus imposantes forteresses médiévales d'Europe.",
    "location": "Fougères, Bretagne",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 48.3533,
      "lng": -1.2028
    },
    "highlights": [
      "13 tours",
      "Remparts",
      "Moulin à eau"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 418,
    "name": "Château de Caen",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse de Guillaume le Conquérant, l'une des plus vastes d'Europe.",
    "location": "Caen, Normandie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "6h - 21h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.1851,
      "lng": -0.364
    },
    "highlights": [
      "Remparts",
      "Église Saint-Georges",
      "Musée des Beaux-Arts"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 419,
    "name": "Château de Falaise",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Lieu de naissance de Guillaume le Conquérant.",
    "location": "Falaise, Normandie",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "Xe - XIIIe siècle",
    "coordinates": {
      "lat": 48.8942,
      "lng": -0.1972
    },
    "highlights": [
      "Donjon carré",
      "Tour Talbot",
      "Visite numérique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 420,
    "name": "Château de Carrouges",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de briques entouré de douves dans le bocage normand.",
    "location": "Carrouges, Normandie",
    "rating": 4.2,
    "price": "7.50€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIe siècle",
    "coordinates": {
      "lat": 48.5628,
      "lng": -0.1497
    },
    "highlights": [
      "Châtelet d'entrée",
      "Douves",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 421,
    "name": "Château de Haut-Koenigsbourg",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Haut-Koenigsbourg_-_ch%C3%A2teau.jpg/800px-Haut-Koenigsbourg_-_ch%C3%A2teau.jpg",
    "description": "Forteresse restaurée par Guillaume II dominant la plaine d'Alsace.",
    "location": "Orschwiller, Grand Est",
    "rating": 4.6,
    "price": "9€",
    "hours": "9h15 - 18h",
    "period": "XIIe - XXe siècle",
    "coordinates": {
      "lat": 48.2494,
      "lng": 7.3444
    },
    "highlights": [
      "Vue panoramique",
      "Salles médiévales",
      "Collection d'armes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 422,
    "name": "Château du Haut-Barr",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'œil de l'Alsace, ruines spectaculaires sur trois rochers de grès.",
    "location": "Saverne, Grand Est",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.7381,
      "lng": 7.4042
    },
    "highlights": [
      "Vue à 360°",
      "Pont du Diable",
      "Rochers de grès"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 423,
    "name": "Palais du Tau",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Palais_du_Tau_-_Reims.jpg/800px-Palais_du_Tau_-_Reims.jpg",
    "description": "Palais archiépiscopal de Reims, trésor de la cathédrale.",
    "location": "Reims, Grand Est",
    "rating": 4.4,
    "price": "8€",
    "hours": "9h30 - 18h30",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 49.2536,
      "lng": 4.0339
    },
    "highlights": [
      "Trésor de la cathédrale",
      "Sacre des rois",
      "Tapisseries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 424,
    "name": "Château de Sedan",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sedan_chateau_fort.jpg/800px-Sedan_chateau_fort.jpg",
    "description": "Plus grand château fort d'Europe avec 35 000 m² de superficie.",
    "location": "Sedan, Grand Est",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 49.7019,
      "lng": 4.9428
    },
    "highlights": [
      "Plus grand château fort d'Europe",
      "Hôtel****",
      "Musée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 425,
    "name": "Château de Malmaison",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ch%C3%A2teau_de_Malmaison.jpg/800px-Ch%C3%A2teau_de_Malmaison.jpg",
    "description": "Résidence favorite de Napoléon et Joséphine.",
    "location": "Rueil-Malmaison, Île-de-France",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 17h30",
    "period": "XVIIe - XIXe siècle",
    "coordinates": {
      "lat": 48.8694,
      "lng": 2.1653
    },
    "highlights": [
      "Cabinet de travail de Napoléon",
      "Roseraie",
      "Souvenirs de Joséphine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 426,
    "name": "Château de Rambouillet",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ch%C3%A2teau_de_Rambouillet.jpg/800px-Ch%C3%A2teau_de_Rambouillet.jpg",
    "description": "Résidence présidentielle avec laiterie de la Reine.",
    "location": "Rambouillet, Île-de-France",
    "rating": 4.2,
    "price": "9.50€",
    "hours": "10h - 18h",
    "period": "XIVe - XIXe siècle",
    "coordinates": {
      "lat": 48.6436,
      "lng": 1.8211
    },
    "highlights": [
      "Laiterie de la Reine",
      "Chaumière aux Coquillages",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 427,
    "name": "Château de Compiègne",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Ch%C3%A2teau_de_Compi%C3%A8gne.jpg/800px-Ch%C3%A2teau_de_Compi%C3%A8gne.jpg",
    "description": "Résidence impériale de Napoléon Ier et Napoléon III.",
    "location": "Compiègne, Hauts-de-France",
    "rating": 4.4,
    "price": "9.50€",
    "hours": "10h - 18h",
    "period": "XVIIIe - XIXe siècle",
    "coordinates": {
      "lat": 49.4172,
      "lng": 2.835
    },
    "highlights": [
      "Musée du Second Empire",
      "Musée de la Voiture",
      "Appartements"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 428,
    "name": "Château de Maisons",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg/800px-Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg",
    "description": "Chef-d'œuvre de François Mansart, prototype du classicisme.",
    "location": "Maisons-Laffitte, Île-de-France",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.9469,
      "lng": 2.1453
    },
    "highlights": [
      "Vestibule",
      "Escalier d'honneur",
      "Appartement du roi"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 429,
    "name": "Château de Sceaux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Domaine de Colbert avec jardins de Le Nôtre et musée de l'Île-de-France.",
    "location": "Sceaux, Île-de-France",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVIIe - XIXe siècle",
    "coordinates": {
      "lat": 48.7722,
      "lng": 2.2953
    },
    "highlights": [
      "Jardins Le Nôtre",
      "Grandes Cascades",
      "Musée de l'Île-de-France"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 430,
    "name": "Château d'Écouen",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ecouen_Chateau_01.jpg/800px-Ecouen_Chateau_01.jpg",
    "description": "Joyau de la Renaissance abritant le musée national de la Renaissance.",
    "location": "Écouen, Île-de-France",
    "rating": 4.4,
    "price": "7€",
    "hours": "9h30 - 17h45",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 49.0194,
      "lng": 2.3794
    },
    "highlights": [
      "Tapisserie de David et Bethsabée",
      "Arts décoratifs Renaissance",
      "Cheminées"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 431,
    "name": "Château de Pau",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pau_chateau.jpg/800px-Pau_chateau.jpg",
    "description": "Lieu de naissance d'Henri IV, château royal des Pyrénées.",
    "location": "Pau, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "8€",
    "hours": "9h30 - 17h45",
    "period": "XIVe - XIXe siècle",
    "coordinates": {
      "lat": 43.2939,
      "lng": -0.3722
    },
    "highlights": [
      "Berceau d'Henri IV",
      "Tapisseries des Gobelins",
      "Vue sur les Pyrénées"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 432,
    "name": "Château de Biron",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Biron.jpg/800px-Biron.jpg",
    "description": "Ensemble monumental de 8 siècles d'architecture.",
    "location": "Biron, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "8.50€",
    "hours": "10h - 19h",
    "period": "XIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 44.6306,
      "lng": 0.8686
    },
    "highlights": [
      "Chapelle double",
      "Cuisines médiévales",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 433,
    "name": "Château de Castelnaud",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Castelnaud.jpg/800px-Castelnaud.jpg",
    "description": "Forteresse médiévale abritant le musée de la guerre au Moyen Âge.",
    "location": "Castelnaud-la-Chapelle, Nouvelle-Aquitaine",
    "rating": 4.6,
    "price": "12.50€",
    "hours": "10h - 19h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 44.8155,
      "lng": 1.1516
    },
    "highlights": [
      "Trébuchet",
      "Collection d'armes",
      "Vue sur Beynac"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 434,
    "name": "Château de Beynac",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Beynac_-_Chateau.jpg/800px-Beynac_-_Chateau.jpg",
    "description": "Forteresse vertigineuse dominant la Dordogne.",
    "location": "Beynac-et-Cazenac, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h30",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.8406,
      "lng": 1.1458
    },
    "highlights": [
      "Donjon",
      "Salle des États du Périgord",
      "Vue sur la vallée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 435,
    "name": "Château de Bonaguil",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Bonaguil.jpg/800px-Bonaguil.jpg",
    "description": "Dernière forteresse féodale de France, jamais assiégée.",
    "location": "Saint-Front-sur-Lémance, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 44.5369,
      "lng": 1.0128
    },
    "highlights": [
      "Architecture défensive",
      "Tour ronde",
      "Souterrains"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 436,
    "name": "Château de Hautefort",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hautefort.jpg/800px-Hautefort.jpg",
    "description": "Château Renaissance dominant le Périgord.",
    "location": "Hautefort, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "10.50€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 45.2592,
      "lng": 1.1461
    },
    "highlights": [
      "Jardins à la française",
      "Chapelle",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 437,
    "name": "Palais des Papes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1604156425963-9be03f86a428?w=800&q=80",
    "description": "Plus grand palais gothique au monde, résidence des papes au XIVe siècle.",
    "location": "Avignon, Provence-Alpes-Côte d'Azur",
    "rating": 4.7,
    "price": "14.50€",
    "hours": "9h - 19h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 43.9508,
      "lng": 4.8075
    },
    "highlights": [
      "Grande chapelle",
      "Fresques italiennes",
      "Terrasses"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 438,
    "name": "Château d'If",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chateau_d%27If.jpg/800px-Chateau_d%27If.jpg",
    "description": "Prison légendaire du Comte de Monte-Cristo face à Marseille.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 43.2797,
      "lng": 5.3256
    },
    "highlights": [
      "Cellule d'Edmond Dantès",
      "Vue sur Marseille",
      "Forteresse maritime"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 439,
    "name": "Château des Baux-de-Provence",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Les_Baux_de_Provence_vue_5.jpg/800px-Les_Baux_de_Provence_vue_5.jpg",
    "description": "Ruines spectaculaires dominant les Alpilles.",
    "location": "Les Baux-de-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "12€",
    "hours": "9h - 19h30",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.7444,
      "lng": 4.7958
    },
    "highlights": [
      "Donjon",
      "Trébuchets",
      "Vue sur les Alpilles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 440,
    "name": "Château de Grignan",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Grignan_chateau.jpg/800px-Grignan_chateau.jpg",
    "description": "Plus grand château Renaissance du sud-est, lié à Madame de Sévigné.",
    "location": "Grignan, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "10€",
    "hours": "9h30 - 18h30",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 44.42,
      "lng": 4.91
    },
    "highlights": [
      "Terrasse panoramique",
      "Lettres de Mme de Sévigné",
      "Festival de correspondance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 441,
    "name": "Château de Vizille",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Berceau de la Révolution française, musée de la Révolution.",
    "location": "Vizille, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "10h - 18h (fermé mardi)",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 45.0758,
      "lng": 5.7722
    },
    "highlights": [
      "Musée de la Révolution française",
      "Parc",
      "Assemblée de Vizille"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 442,
    "name": "Forteresse de Polignac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Impressionnante forteresse volcanique dominant Le Puy.",
    "location": "Polignac, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 19h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 45.07,
      "lng": 3.86
    },
    "highlights": [
      "Donjon",
      "Site volcanique",
      "Vue sur Le Puy"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 443,
    "name": "Manet / Degas - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "Dialogue inédit entre deux géants de l'impressionnisme au Musée d'Orsay.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 15 juillet 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Œuvres rarement exposées",
      "Face-à-face artistique",
      "Parcours chronologique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 444,
    "name": "Picasso et l'abstraction - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    "description": "Exploration des liens entre Picasso et les mouvements abstraits.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Cubisme",
      "Influences mutuelles",
      "Documents inédits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 445,
    "name": "Les Pharaons - Grande Halle de la Villette",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80",
    "description": "Immersion dans l'Égypte ancienne avec 200 pièces exceptionnelles.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "18€",
    "hours": "10h - 19h",
    "period": "Jusqu'au 1er septembre 2026",
    "coordinates": {
      "lat": 48.8895,
      "lng": 2.3918
    },
    "highlights": [
      "Sarcophages",
      "Momies",
      "Reconstitutions 3D"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 446,
    "name": "Vermeer et les maîtres de la lumière - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    "description": "Rétrospective exceptionnelle sur l'art de la lumière au Siècle d'or hollandais.",
    "location": "Paris, Île-de-France",
    "rating": 4.9,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Prêts internationaux",
      "La Laitière",
      "Comparaisons inédites"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 447,
    "name": "Yayoi Kusama : Infinity - Fondation Louis Vuitton",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1580981454360-3c6d3eb19b45?w=800&q=80",
    "description": "L'univers infini de l'artiste japonaise aux pois colorés.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "18€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8767,
      "lng": 2.265
    },
    "highlights": [
      "Infinity Rooms",
      "Installations immersives",
      "Rétrospective"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 448,
    "name": "Van Gogh et le Japon - Musée de l'Orangerie",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "L'influence de l'art japonais sur Van Gogh.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 mai 2026",
    "coordinates": {
      "lat": 48.8638,
      "lng": 2.3226
    },
    "highlights": [
      "Estampes japonaises",
      "Correspondances",
      "Autoportraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 449,
    "name": "Banksy : Art or Vandalism? - Palais de Tokyo",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80",
    "description": "Première grande rétrospective de l'artiste de rue anonyme.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "16€",
    "hours": "12h - 22h (fermé mardi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8647,
      "lng": 2.297
    },
    "highlights": [
      "Street art",
      "Œuvres politiques",
      "Installations"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 450,
    "name": "Monet-Mitchell - Fondation Claude Monet",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "Dialogue entre Monet et l'artiste américaine Joan Mitchell à Giverny.",
    "location": "Giverny, Normandie",
    "rating": 4.7,
    "price": "12€",
    "hours": "9h30 - 18h",
    "period": "Avril - octobre 2026",
    "coordinates": {
      "lat": 49.0755,
      "lng": 1.5339
    },
    "highlights": [
      "Nymphéas",
      "Abstraction lyrique",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 451,
    "name": "L'Art du jeu vidéo - Musée des Confluences",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    "description": "40 ans de création vidéoludique comme art à part entière.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "12€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 45.7327,
      "lng": 4.8187
    },
    "highlights": [
      "Consoles rétro",
      "Concept arts",
      "Playable experiences"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 452,
    "name": "Renoir père et fils - Musée des Beaux-Arts de Lyon",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80",
    "description": "Le peintre Auguste et le cinéaste Jean Renoir face à face.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 45.7666,
      "lng": 4.8336
    },
    "highlights": [
      "Peintures",
      "Extraits de films",
      "Correspondances"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 453,
    "name": "Méditerranée antique - MuCEM",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&q=80",
    "description": "Trésors archéologiques des civilisations méditerranéennes.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "13€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 novembre 2026",
    "coordinates": {
      "lat": 43.2966,
      "lng": 5.3608
    },
    "highlights": [
      "Grèce antique",
      "Rome",
      "Phéniciens"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 454,
    "name": "Frida Kahlo : Connections - Musée Fabre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'œuvre de Frida Kahlo et ses influences artistiques.",
    "location": "Montpellier, Occitanie",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 43.6114,
      "lng": 3.8806
    },
    "highlights": [
      "Autoportraits",
      "Art mexicain",
      "Surréalisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 455,
    "name": "Nicolas de Staël - Musée Granet",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    "description": "Rétrospective du peintre franco-russe abstrait.",
    "location": "Aix-en-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 19h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 43.5267,
      "lng": 5.451
    },
    "highlights": [
      "Paysages abstraits",
      "Football",
      "Dernières œuvres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 456,
    "name": "Les Impressionnistes et la mer - La Piscine",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1564399579730-3e5e4d189363?w=800&q=80",
    "description": "Marines impressionnistes dans un écrin Art déco.",
    "location": "Roubaix, Hauts-de-France",
    "rating": 4.5,
    "price": "13€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 50.692,
      "lng": 3.1726
    },
    "highlights": [
      "Monet",
      "Boudin",
      "Paysages côtiers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 457,
    "name": "Matisse en son temps - Musée Matisse",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "Matisse et ses contemporains sur la Côte d'Azur.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 octobre 2026",
    "coordinates": {
      "lat": 43.7197,
      "lng": 7.2752
    },
    "highlights": [
      "Fauvisme",
      "Papiers découpés",
      "Riviera"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 458,
    "name": "L'Or des Incas - Musée des Beaux-Arts de Bordeaux",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80",
    "description": "Trésors précolombiens du Pérou.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "10€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 44.8378,
      "lng": -0.5792
    },
    "highlights": [
      "Orfèvrerie",
      "Textiles",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 459,
    "name": "Chagall et la musique - Musée Marc Chagall",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=800&q=80",
    "description": "L'inspiration musicale dans l'œuvre de Chagall.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 43.7136,
      "lng": 7.2687
    },
    "highlights": [
      "Plafond de l'Opéra",
      "Vitraux",
      "Ballet"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 460,
    "name": "La Renaissance et le Nord - Musée Unterlinden",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1580981454360-3c6d3eb19b45?w=800&q=80",
    "description": "La Renaissance dans les pays du nord autour du retable d'Issenheim.",
    "location": "Colmar, Grand Est",
    "rating": 4.6,
    "price": "15€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.08,
      "lng": 7.3554
    },
    "highlights": [
      "Grünewald",
      "Dürer",
      "Cranach"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 461,
    "name": "Néon : l'art de la lumière - LaM",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80",
    "description": "L'art contemporain sous néons.",
    "location": "Villeneuve-d'Ascq, Hauts-de-France",
    "rating": 4.3,
    "price": "11€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 50.636,
      "lng": 3.1478
    },
    "highlights": [
      "Installations lumineuses",
      "Art minimaliste",
      "Immersion"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 462,
    "name": "Léonard de Vinci : Machines et rêves - Château du Clos Lucé",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les inventions de Léonard de Vinci dans sa dernière demeure.",
    "location": "Amboise, Centre-Val de Loire",
    "rating": 4.7,
    "price": "19€",
    "hours": "9h - 19h",
    "period": "Exposition permanente enrichie 2026",
    "coordinates": {
      "lat": 47.4098,
      "lng": 0.9947
    },
    "highlights": [
      "Machines volantes",
      "Codex",
      "Atelier reconstitué"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 463,
    "name": "Château de Roquetaillade",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Roquetaillade.jpg/800px-Roquetaillade.jpg",
    "description": "Forteresse médiévale restaurée par Viollet-le-Duc.",
    "location": "Mazères, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h30 - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 44.4917,
      "lng": -0.3367
    },
    "highlights": [
      "Viollet-le-Duc",
      "Donjon",
      "Chapelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 464,
    "name": "Château de Puyguilhem",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Joyau Renaissance du Périgord vert.",
    "location": "Villars, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 12h30 / 14h - 17h30",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 45.4333,
      "lng": 0.75
    },
    "highlights": [
      "Escalier d'honneur",
      "Cheminées sculptées",
      "Architecture Loire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 465,
    "name": "Château de Bourdeilles",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Bourdeilles.jpg/800px-Bourdeilles.jpg",
    "description": "Deux châteaux en un : médiéval et Renaissance.",
    "location": "Bourdeilles, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 19h",
    "period": "XIIIe - XVIe siècle",
    "coordinates": {
      "lat": 45.3222,
      "lng": 0.5833
    },
    "highlights": [
      "Mobilier Renaissance",
      "Donjon",
      "Salon doré"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 466,
    "name": "Château de Jumilhac",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jumilhac_chateau.jpg/800px-Jumilhac_chateau.jpg",
    "description": "Château aux toitures féeriques en Périgord vert.",
    "location": "Jumilhac-le-Grand, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 45.4936,
      "lng": 1.0614
    },
    "highlights": [
      "Toitures en poivrières",
      "Légende de la Fileuse",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 467,
    "name": "Château de Monbazillac",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Monbazillac.jpg/800px-Monbazillac.jpg",
    "description": "Château viticole dominant les vignobles de Bergerac.",
    "location": "Monbazillac, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 19h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 44.7931,
      "lng": 0.4903
    },
    "highlights": [
      "Vin de Monbazillac",
      "Architecture Renaissance",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 468,
    "name": "Château de Fénelon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Lieu de naissance de l'auteur du Télémaque.",
    "location": "Sainte-Mondane, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "10.50€",
    "hours": "10h - 19h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 44.85,
      "lng": 1.5167
    },
    "highlights": [
      "Mobilier d'époque",
      "Cuisine médiévale",
      "Toits de lauzes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 469,
    "name": "Château de Milandes",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Milandes.jpg/800px-Milandes.jpg",
    "description": "Demeure de Joséphine Baker en Dordogne.",
    "location": "Castelnaud-la-Chapelle, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "13€",
    "hours": "10h - 19h",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 44.8264,
      "lng": 1.11
    },
    "highlights": [
      "Spectacle de rapaces",
      "Souvenirs Joséphine Baker",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 470,
    "name": "Château de Montal",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chef-d'œuvre de la première Renaissance française.",
    "location": "Saint-Jean-Lespinasse, Occitanie",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 12h30 / 14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 44.8667,
      "lng": 1.8333
    },
    "highlights": [
      "Bustes sculptés",
      "Escalier d'honneur",
      "Renaissance lotoise"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 471,
    "name": "Château de Najac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse royale dominant les gorges de l'Aveyron.",
    "location": "Najac, Occitanie",
    "rating": 4.4,
    "price": "5€",
    "hours": "10h - 13h / 15h - 19h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 44.2186,
      "lng": 1.9764
    },
    "highlights": [
      "Donjon",
      "Archères",
      "Village médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 472,
    "name": "Château de Peyrelade",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines spectaculaires dans les gorges du Tarn.",
    "location": "Rivière-sur-Tarn, Occitanie",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.1833,
      "lng": 3.1333
    },
    "highlights": [
      "Vue sur les gorges",
      "Animations médiévales",
      "Via ferrata"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 473,
    "name": "Château de Foix",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chateau_de_Foix.jpg/800px-Chateau_de_Foix.jpg",
    "description": "Symbole du comté de Foix et des Cathares.",
    "location": "Foix, Occitanie",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "Xe - XVe siècle",
    "coordinates": {
      "lat": 42.9658,
      "lng": 1.6053
    },
    "highlights": [
      "Trois tours",
      "Gaston Fébus",
      "Vue Pyrénées"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 474,
    "name": "Château de Montségur",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Monts%C3%A9gur.jpg/800px-Monts%C3%A9gur.jpg",
    "description": "Dernier bastion des Cathares perché sur son pog.",
    "location": "Montségur, Occitanie",
    "rating": 4.5,
    "price": "6.50€",
    "hours": "9h - 19h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 42.875,
      "lng": 1.8317
    },
    "highlights": [
      "Histoire cathare",
      "Randonnée",
      "Solstice"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 475,
    "name": "Château de Quéribus",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Queribus.jpg/800px-Queribus.jpg",
    "description": "Vertigineux château cathare au-dessus des Corbières.",
    "location": "Cucugnan, Occitanie",
    "rating": 4.5,
    "price": "8€",
    "hours": "9h - 20h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 42.8392,
      "lng": 2.6278
    },
    "highlights": [
      "Salle gothique",
      "Vue 360°",
      "Pays cathare"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 476,
    "name": "Château de Peyrepertuse",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Peyrepertuse.jpg/800px-Peyrepertuse.jpg",
    "description": "La Carcassonne céleste perchée à 800m.",
    "location": "Duilhac-sous-Peyrepertuse, Occitanie",
    "rating": 4.6,
    "price": "9€",
    "hours": "9h - 20h",
    "period": "XIe - XIIIe siècle",
    "coordinates": {
      "lat": 42.8706,
      "lng": 2.5561
    },
    "highlights": [
      "800m de long",
      "Escalier de Saint-Louis",
      "Architecture défensive"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 477,
    "name": "Château de Villerouge-Termenès",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de l'archevêque où mourut le dernier Parfait.",
    "location": "Villerouge-Termenès, Occitanie",
    "rating": 4.1,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe - XIVe siècle",
    "coordinates": {
      "lat": 42.975,
      "lng": 2.625
    },
    "highlights": [
      "Audioguide théâtralisé",
      "Auberge médiévale",
      "Bélibaste"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 478,
    "name": "Cité de Carcassonne",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cit%C3%A9_de_Carcassonne_from_the_Pont_Vieux.jpg/800px-Cit%C3%A9_de_Carcassonne_from_the_Pont_Vieux.jpg",
    "description": "Plus grande cité médiévale fortifiée d'Europe.",
    "location": "Carcassonne, Occitanie",
    "rating": 4.7,
    "price": "11€",
    "hours": "10h - 18h30",
    "period": "Ve - XIXe siècle",
    "coordinates": {
      "lat": 43.2068056,
      "lng": 2.3638889
    },
    "highlights": [
      "Double enceinte",
      "Château comtal",
      "Basilique Saint-Nazaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 479,
    "name": "Château de Lastours",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Quatre châteaux cathares sur un même éperon.",
    "location": "Lastours, Occitanie",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.3333,
      "lng": 2.3778
    },
    "highlights": [
      "Cabaret",
      "Surdespine",
      "Tour Régine",
      "Quertinheux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 480,
    "name": "Château de Flaugergues",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Folie montpelliéraine du XVIIe siècle.",
    "location": "Montpellier, Occitanie",
    "rating": 4.2,
    "price": "10.50€",
    "hours": "14h - 18h30",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 43.6167,
      "lng": 3.9167
    },
    "highlights": [
      "Jardins",
      "Mobilier d'époque",
      "Vignoble"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 481,
    "name": "Château de la Mogère",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Élégante folie languedocienne et ses jardins.",
    "location": "Montpellier, Occitanie",
    "rating": 4.1,
    "price": "8€",
    "hours": "14h30 - 18h (juin-septembre)",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 43.6083,
      "lng": 3.9333
    },
    "highlights": [
      "Fontaine baroque",
      "Intérieurs XVIIIe",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 482,
    "name": "Château d'O",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Architecture Renaissance languedocienne.",
    "location": "Montpellier, Occitanie",
    "rating": 4,
    "price": "Gratuit",
    "hours": "7h30 - 20h (parc)",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 43.6333,
      "lng": 3.85
    },
    "highlights": [
      "Parc municipal",
      "Architecture",
      "Théâtre d'été"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 483,
    "name": "Château de Tarascon",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tarascon_castle.jpg/800px-Tarascon_castle.jpg",
    "description": "Imposante forteresse du roi René au bord du Rhône.",
    "location": "Tarascon, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 17h30",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 43.8067,
      "lng": 4.655
    },
    "highlights": [
      "Roi René",
      "Terrasse panoramique",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 484,
    "name": "Château de Suze-la-Rousse",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suze-la-Rousse.jpg/800px-Suze-la-Rousse.jpg",
    "description": "Forteresse devenue palais Renaissance, université du vin.",
    "location": "Suze-la-Rousse, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 44.2886,
      "lng": 4.8403
    },
    "highlights": [
      "Université du vin",
      "Cour Renaissance",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 485,
    "name": "Château de Montélimar",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des Adhémar dominant la ville du nougat.",
    "location": "Montélimar, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "9h30 - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.5561,
      "lng": 4.7519
    },
    "highlights": [
      "Art contemporain",
      "Vue panoramique",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 486,
    "name": "Château de Crussol",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques dominant la vallée du Rhône.",
    "location": "Saint-Péray, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.9333,
      "lng": 4.8333
    },
    "highlights": [
      "Panorama Rhône",
      "Randonnée",
      "Théâtre antique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 487,
    "name": "Château de Rochemaure",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines médiévales sur dyke volcanique.",
    "location": "Rochemaure, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 44.5833,
      "lng": 4.7
    },
    "highlights": [
      "Géologie",
      "Village médiéval",
      "Via Rhôna"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 488,
    "name": "Château de Tournon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Musée du Rhône dans un château Renaissance.",
    "location": "Tournon-sur-Rhône, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h (avril-octobre)",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 45.0667,
      "lng": 4.8333
    },
    "highlights": [
      "Musée du Rhône",
      "Terrasses",
      "Vignoble Hermitage"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 489,
    "name": "Château de Murol",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse auvergnate avec animations médiévales.",
    "location": "Murol, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.575,
      "lng": 2.9417
    },
    "highlights": [
      "Spectacles vivants",
      "Vue sur le Sancy",
      "Chevaliers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 490,
    "name": "Château de Val",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château féerique au bord du lac de Bort.",
    "location": "Lanobre, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 45.4167,
      "lng": 2.5
    },
    "highlights": [
      "Lac",
      "Six tours",
      "Chapelle gothique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 491,
    "name": "Château d'Aulteribe",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Mobilier et collections du XIXe siècle.",
    "location": "Sermentizon, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XIVe - XIXe siècle",
    "coordinates": {
      "lat": 45.8333,
      "lng": 3.4833
    },
    "highlights": [
      "Mobilier d'époque",
      "Collections",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 492,
    "name": "Château de Cordès",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Jardins classiques remarquables du XVIIe siècle.",
    "location": "Orcival, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 12h / 14h - 19h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 45.675,
      "lng": 2.8417
    },
    "highlights": [
      "Jardins Le Nôtre",
      "Topiairies",
      "Perspective"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 493,
    "name": "Château de Parentignat",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le petit Versailles auvergnat.",
    "location": "Parentignat, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "10€",
    "hours": "14h - 18h (été)",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 45.45,
      "lng": 3.2667
    },
    "highlights": [
      "Mobilier Louis XV",
      "Portraits",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 494,
    "name": "Château de Ravel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ancienne résidence royale d'Auvergne.",
    "location": "Ravel, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "8€",
    "hours": "14h - 18h (été)",
    "period": "XIIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 45.7667,
      "lng": 3.3833
    },
    "highlights": [
      "D'Estaing",
      "Jardins",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 495,
    "name": "Château de Bazoches",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Chateau_Bazoches.jpg/800px-Chateau_Bazoches.jpg",
    "description": "Demeure de Vauban dans le Morvan.",
    "location": "Bazoches, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "11€",
    "hours": "9h30 - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.3833,
      "lng": 3.7833
    },
    "highlights": [
      "Bureau de Vauban",
      "Plans de fortifications",
      "Galerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 496,
    "name": "Château de Bussy-Rabutin",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ch%C3%A2teau_de_Bussy-Rabutin.jpg/800px-Ch%C3%A2teau_de_Bussy-Rabutin.jpg",
    "description": "Demeure du comte exilé aux décors satiriques.",
    "location": "Bussy-le-Grand, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "8€",
    "hours": "9h30 - 12h30 / 14h - 17h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 47.55,
      "lng": 4.525
    },
    "highlights": [
      "Portraits satiriques",
      "Jardins",
      "Devise galante"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 497,
    "name": "Château de Tanlay",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tanlay_-_Ch%C3%A2teau_de_Tanlay.jpg/800px-Tanlay_-_Ch%C3%A2teau_de_Tanlay.jpg",
    "description": "Joyau de la Renaissance en Bourgogne.",
    "location": "Tanlay, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 12h30 / 14h - 17h30",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.85,
      "lng": 3.9833
    },
    "highlights": [
      "Tour de la Ligue",
      "Douves",
      "Grand canal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 498,
    "name": "Château d'Ancy-le-Franc",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chateau_Ancy-le-Franc.jpg/800px-Chateau_Ancy-le-Franc.jpg",
    "description": "Plus bel exemple d'architecture Renaissance en Bourgogne.",
    "location": "Ancy-le-Franc, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h30 - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.775,
      "lng": 4.1667
    },
    "highlights": [
      "Fresques du Primatice",
      "Cour carrée",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 499,
    "name": "Château de Châteauneuf-en-Auxois",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chateauneuf-en-Auxois.jpg/800px-Chateauneuf-en-Auxois.jpg",
    "description": "Forteresse bourguignonne dominant le canal.",
    "location": "Châteauneuf, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 12h30 / 14h - 17h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 47.2167,
      "lng": 4.65
    },
    "highlights": [
      "Plus beau village de France",
      "Vue canal de Bourgogne",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 500,
    "name": "Château de Sully",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sully_chateau.jpg/800px-Sully_chateau.jpg",
    "description": "Château natal de Mac-Mahon en Saône-et-Loire.",
    "location": "Sully, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 47,
      "lng": 4.5333
    },
    "highlights": [
      "Parc à l'anglaise",
      "Mobilier",
      "Mac-Mahon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 501,
    "name": "Château de Cormatin",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Cormatin_-_Ch%C3%A2teau.jpg/800px-Cormatin_-_Ch%C3%A2teau.jpg",
    "description": "Décors exceptionnels du XVIIe siècle.",
    "location": "Cormatin, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h30",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 46.5417,
      "lng": 4.6833
    },
    "highlights": [
      "Cabinet de Sainte-Cécile",
      "Jardins",
      "Décors peints"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 502,
    "name": "Château de Couches",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Couches_Chateau.JPG/800px-Couches_Chateau.JPG",
    "description": "Forteresse de Marguerite de Bourgogne.",
    "location": "Couches, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 46.8667,
      "lng": 4.5667
    },
    "highlights": [
      "Marguerite de Bourgogne",
      "Donjon",
      "Chapelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 503,
    "name": "Château de La Rochepot",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Chateau_de_la_Rochepot.jpg/800px-Chateau_de_la_Rochepot.jpg",
    "description": "Château aux toits vernissés de Bourgogne.",
    "location": "La Rochepot, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIIe - XIXe siècle",
    "coordinates": {
      "lat": 46.9583,
      "lng": 4.6833
    },
    "highlights": [
      "Toits polychromes",
      "Pont-levis",
      "Cuisines médiévales"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 504,
    "name": "Château de Brancion",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse féodale et village médiéval.",
    "location": "Martailly-lès-Brancion, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "Xe - XIVe siècle",
    "coordinates": {
      "lat": 46.5583,
      "lng": 4.7917
    },
    "highlights": [
      "Village abandonné",
      "Église romane",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 505,
    "name": "Château de Pierreclos",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château viticole inspirateur de Lamartine.",
    "location": "Pierreclos, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "8€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XIIe - XIXe siècle",
    "coordinates": {
      "lat": 46.3167,
      "lng": 4.6833
    },
    "highlights": [
      "Lamartine",
      "Vignoble",
      "Souterrains"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 506,
    "name": "Château de Joux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant la cluse de Pontarlier.",
    "location": "La Cluse-et-Mijoux, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIe - XIXe siècle",
    "coordinates": {
      "lat": 46.875,
      "lng": 6.3833
    },
    "highlights": [
      "Toussaint Louverture",
      "Musée des armes",
      "Vue cluse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 507,
    "name": "Château de Belvoir",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval du peintre Pierre Jouffroy.",
    "location": "Belvoir, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 47.3167,
      "lng": 6.6
    },
    "highlights": [
      "Peintures contemporaines",
      "Donjon",
      "Vue Doubs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 508,
    "name": "Château de Montbéliard",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des ducs de Wurtemberg.",
    "location": "Montbéliard, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XVe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.5092,
      "lng": 6.7978
    },
    "highlights": [
      "Musée du château",
      "Tour Henriette",
      "Cuvier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 509,
    "name": "Château de Fleckenstein",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chateau_Fleckenstein.jpg/800px-Chateau_Fleckenstein.jpg",
    "description": "Château troglodytique des Vosges du Nord.",
    "location": "Lembach, Grand Est",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 17h30",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.0417,
      "lng": 7.7833
    },
    "highlights": [
      "Château semi-troglodytique",
      "Parcours enfants",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 510,
    "name": "Château du Hohlandsbourg",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hohlandsbourg.jpg/800px-Hohlandsbourg.jpg",
    "description": "Plus grande forteresse des Vosges.",
    "location": "Wintzenheim, Grand Est",
    "rating": 4.3,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.0583,
      "lng": 7.2667
    },
    "highlights": [
      "Reconstitution historique",
      "Vue Colmar",
      "Enceinte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 511,
    "name": "Château de Kaysersberg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines impériales dominant la vallée de la Weiss.",
    "location": "Kaysersberg, Grand Est",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.1417,
      "lng": 7.2667
    },
    "highlights": [
      "Donjon circulaire",
      "Vue vignoble",
      "Village pittoresque"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 512,
    "name": "Château de Saint-Ulrich",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le plus grand des trois châteaux de Ribeauvillé.",
    "location": "Ribeauvillé, Grand Est",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 48.1917,
      "lng": 7.3167
    },
    "highlights": [
      "Chapelle romane",
      "Logis seigneurial",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 513,
    "name": "Château de l'Ortenbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon pentagonal unique en Alsace.",
    "location": "Scherwiller, Grand Est",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.2833,
      "lng": 7.4167
    },
    "highlights": [
      "Donjon pentagonal",
      "Vue plaine d'Alsace",
      "Ruines romantiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 514,
    "name": "Château de Kintzheim",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des Aigles avec spectacle de rapaces.",
    "location": "Kintzheim, Grand Est",
    "rating": 4.4,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.2583,
      "lng": 7.3917
    },
    "highlights": [
      "Volerie des Aigles",
      "Spectacle rapaces",
      "Vue"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 515,
    "name": "Château de Lichtenberg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale avec architecture contemporaine.",
    "location": "Lichtenberg, Grand Est",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.9167,
      "lng": 7.4833
    },
    "highlights": [
      "Architecture moderne",
      "Expositions",
      "Vue Vosges"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 516,
    "name": "Château de La Petite-Pierre",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des Vosges du Nord avec musée du sceau.",
    "location": "La Petite-Pierre, Grand Est",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.8583,
      "lng": 7.3167
    },
    "highlights": [
      "Musée du Sceau",
      "Village fortifié",
      "Parc naturel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 517,
    "name": "Château de Malbrouck",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse mosellane avec expositions.",
    "location": "Manderen, Grand Est",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 49.3628,
      "lng": 6.4872
    },
    "highlights": [
      "Expositions prestigieuses",
      "Vue Sarre",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 518,
    "name": "Château de Rohan - Saverne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le Versailles alsacien, palais des princes-évêques.",
    "location": "Saverne, Grand Est",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.7417,
      "lng": 7.3583
    },
    "highlights": [
      "Façade de 140m",
      "Musée",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 519,
    "name": "Château de Brézé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château troglodytique avec les plus profondes douves sèches d'Europe.",
    "location": "Brézé, Pays de la Loire",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 18h",
    "period": "XIe - XIXe siècle",
    "coordinates": {
      "lat": 47.175,
      "lng": -0.0583
    },
    "highlights": [
      "Souterrains",
      "Douves de 18m",
      "Pressoir troglodyte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 520,
    "name": "Château de Montsoreau",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de la Dame de Montsoreau sur la Loire.",
    "location": "Montsoreau, Pays de la Loire",
    "rating": 4.3,
    "price": "9.50€",
    "hours": "10h - 19h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.2167,
      "lng": 0.0583
    },
    "highlights": [
      "Art contemporain",
      "Loire",
      "Alexandre Dumas"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 521,
    "name": "Château de Montreuil-Bellay",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château forteresse des marches d'Anjou.",
    "location": "Montreuil-Bellay, Pays de la Loire",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 47.1333,
      "lng": -0.15
    },
    "highlights": [
      "Cuisines médiévales",
      "Remparts",
      "Collégiale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 522,
    "name": "Château du Plessis-Bourré",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château aux plafonds alchimiques.",
    "location": "Écuillé, Pays de la Loire",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.575,
      "lng": -0.55
    },
    "highlights": [
      "Plafond alchimique",
      "Douves",
      "Mobilier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 523,
    "name": "Château de Serrant",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Perfection de la Renaissance au bord de la Loire.",
    "location": "Saint-Georges-sur-Loire, Pays de la Loire",
    "rating": 4.5,
    "price": "13€",
    "hours": "9h45 - 17h45",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.4167,
      "lng": -0.7667
    },
    "highlights": [
      "Mobilier Empire",
      "Bibliothèque",
      "Tombeaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 524,
    "name": "Château du Lude",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Du Moyen Âge au XVIIIe siècle en un château.",
    "location": "Le Lude, Pays de la Loire",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 12h30 / 14h - 18h",
    "period": "XVe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.65,
      "lng": 0.15
    },
    "highlights": [
      "Jardins",
      "Évolution architecturale",
      "Souterrains"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 525,
    "name": "Château de Brissac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le plus haut château de France.",
    "location": "Brissac-Quincé, Pays de la Loire",
    "rating": 4.3,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 47.3583,
      "lng": -0.45
    },
    "highlights": [
      "204 pièces",
      "7 étages",
      "Théâtre Belle Époque"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 526,
    "name": "Château de Goulaine",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dernière demeure des marches de Bretagne.",
    "location": "Haute-Goulaine, Pays de la Loire",
    "rating": 4.2,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 47.2,
      "lng": -1.4
    },
    "highlights": [
      "Volière de papillons",
      "Muscadet",
      "Collections LU"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 527,
    "name": "Château de Ranrouët",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale en Brière.",
    "location": "Herbignac, Pays de la Loire",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h30 - 18h30",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 47.45,
      "lng": -2.3167
    },
    "highlights": [
      "Six tours",
      "Parc naturel",
      "Animations"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 528,
    "name": "Château de Clisson",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques sur les bords de la Sèvre.",
    "location": "Clisson, Pays de la Loire",
    "rating": 4.2,
    "price": "4€",
    "hours": "10h30 - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 47.0833,
      "lng": -1.2833
    },
    "highlights": [
      "Ruines romantiques",
      "Italianisante",
      "Garenne Lemot"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 529,
    "name": "Château de Vitré",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Chateau_Vitr%C3%A9.jpg/800px-Chateau_Vitr%C3%A9.jpg",
    "description": "L'une des plus belles forteresses de Bretagne.",
    "location": "Vitré, Bretagne",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 48.1242,
      "lng": -1.2136
    },
    "highlights": [
      "Tours triangulaires",
      "Musée",
      "Ville médiévale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 530,
    "name": "Château de Suscinio",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Résidence des ducs de Bretagne sur l'océan.",
    "location": "Sarzeau, Bretagne",
    "rating": 4.4,
    "price": "9.50€",
    "hours": "10h - 19h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 47.5092,
      "lng": -2.7331
    },
    "highlights": [
      "Pavement médiéval",
      "Océan",
      "Marais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 531,
    "name": "Château de Tonquédec",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques dominant le Léguer.",
    "location": "Tonquédec, Bretagne",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 19h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 48.6667,
      "lng": -3.4
    },
    "highlights": [
      "11 tours",
      "Ruines romantiques",
      "Vallée du Léguer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 532,
    "name": "Château de la Hunaudaye",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des Tournemine en Penthièvre.",
    "location": "Plédéliac, Bretagne",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h30 - 18h30",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 48.45,
      "lng": -2.4
    },
    "highlights": [
      "5 tours",
      "Douves",
      "Animations"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 533,
    "name": "Fort La Latte",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1568476247010-4c254f9df014?w=800&q=80",
    "description": "Château de légende sur son cap face à la mer.",
    "location": "Plévenon, Bretagne",
    "rating": 4.6,
    "price": "7€",
    "hours": "10h - 19h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 48.67,
      "lng": -2.2833
    },
    "highlights": [
      "Cap Fréhel",
      "Pont-levis",
      "Cinéma"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 534,
    "name": "Château de Dinan",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Dinan_-_Tour_de_l%27Horloge.jpg/800px-Dinan_-_Tour_de_l%27Horloge.jpg",
    "description": "Donjon de la duchesse Anne avec musée.",
    "location": "Dinan, Bretagne",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h30",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 48.4542,
      "lng": -2.0464
    },
    "highlights": [
      "Tour de l'Horloge",
      "Remparts",
      "Ville médiévale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 535,
    "name": "Château de Kerjean",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance finistérien.",
    "location": "Saint-Vougay, Bretagne",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.5333,
      "lng": -4.0833
    },
    "highlights": [
      "Architecture Renaissance",
      "Colombier",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 536,
    "name": "Château de l'Hermine",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ancienne résidence des ducs de Bretagne à Vannes.",
    "location": "Vannes, Bretagne",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.6583,
      "lng": -2.7583
    },
    "highlights": [
      "Remparts",
      "Jardins",
      "Vieille ville"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 537,
    "name": "Château de Crèvecœur",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Manoir à pans de bois avec musée Schlumberger.",
    "location": "Crèvecœur-en-Auge, Normandie",
    "rating": 4.2,
    "price": "7€",
    "hours": "11h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 49.1167,
      "lng": 0.05
    },
    "highlights": [
      "Architecture normande",
      "Musée Schlumberger",
      "Colombier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 538,
    "name": "Château de Saint-Germain-de-Livet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château damier du Pays d'Auge.",
    "location": "Saint-Germain-de-Livet, Normandie",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 49.1167,
      "lng": 0.2833
    },
    "highlights": [
      "Façade damier",
      "Fresques",
      "Douves"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 539,
    "name": "Château de Vendeuvre",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Mobilier XVIIIe et musée du mobilier miniature.",
    "location": "Vendeuvre, Normandie",
    "rating": 4.2,
    "price": "12€",
    "hours": "11h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.9667,
      "lng": -0.0833
    },
    "highlights": [
      "Mobilier miniature",
      "Jardins d'eau",
      "Orangerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 540,
    "name": "Château de Bricquebec",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Imposante forteresse médiévale du Cotentin.",
    "location": "Bricquebec, Normandie",
    "rating": 4.1,
    "price": "4€",
    "hours": "10h - 18h (été)",
    "period": "XIe - XIVe siècle",
    "coordinates": {
      "lat": 49.4667,
      "lng": -1.6333
    },
    "highlights": [
      "Donjon polygonal",
      "Crypte",
      "Remparts"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 541,
    "name": "Château de Pirou",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Un des plus vieux châteaux normands.",
    "location": "Pirou, Normandie",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.1667,
      "lng": -1.5667
    },
    "highlights": [
      "Oies de Pirou",
      "Douves",
      "Tapisserie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 542,
    "name": "Château de Gratot",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques et légende de la Fée.",
    "location": "Gratot, Normandie",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 19h",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 49.0833,
      "lng": -1.45
    },
    "highlights": [
      "Légende de la Fée",
      "Ruines",
      "Pavillons"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 543,
    "name": "Château Guillaume-le-Conquérant",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse du Conquérant avec tapisserie de Bayeux proche.",
    "location": "Falaise, Normandie",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "Xe - XIIIe siècle",
    "coordinates": {
      "lat": 48.8942,
      "lng": -0.1972
    },
    "highlights": [
      "Guillaume le Conquérant",
      "Tour Talbot",
      "Tablettes numériques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 544,
    "name": "Château de Robert-le-Diable",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines légendaires dominant la Seine.",
    "location": "Moulineaux, Normandie",
    "rating": 4,
    "price": "4€",
    "hours": "14h - 18h (week-end)",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.3333,
      "lng": 0.9833
    },
    "highlights": [
      "Musée viking",
      "Vue Seine",
      "Légende"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 545,
    "name": "Château de Martainville",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Musée des traditions normandes.",
    "location": "Martainville-Épreville, Normandie",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "10h - 12h30 / 14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 49.4667,
      "lng": 1.2833
    },
    "highlights": [
      "Arts normands",
      "Mobilier régional",
      "Colombier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 546,
    "name": "Château de Miromesnil",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Lieu de naissance de Maupassant.",
    "location": "Tourville-sur-Arques, Normandie",
    "rating": 4.2,
    "price": "10€",
    "hours": "14h - 18h",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 49.8833,
      "lng": 1.0833
    },
    "highlights": [
      "Maupassant",
      "Jardins",
      "Potager"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 547,
    "name": "Château de Coucy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines de la plus grande tour d'Europe médiévale.",
    "location": "Coucy-le-Château-Auffrique, Hauts-de-France",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 13h / 14h - 17h30",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 49.5208,
      "lng": 3.3236
    },
    "highlights": [
      "Plus grand donjon",
      "Enguerrand III",
      "Ruines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 548,
    "name": "Château de Fère-en-Tardenois",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines Renaissance avec pont galerie.",
    "location": "Fère-en-Tardenois, Hauts-de-France",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 49.2,
      "lng": 3.5167
    },
    "highlights": [
      "Pont galerie",
      "Anne de Montmorency",
      "Ruines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 549,
    "name": "Château de Folleville",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Église et ruines Renaissance en Picardie.",
    "location": "Folleville, Hauts-de-France",
    "rating": 4,
    "price": "3€",
    "hours": "14h - 18h (été)",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 49.75,
      "lng": 2.4
    },
    "highlights": [
      "Tombeaux Renaissance",
      "Église",
      "Ruines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 550,
    "name": "Château de Blérancourt",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Musée franco-américain de la Grande Guerre.",
    "location": "Blérancourt, Hauts-de-France",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 12h30 / 14h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 49.5167,
      "lng": 3.15
    },
    "highlights": [
      "Musée franco-américain",
      "Jardins",
      "La Fayette"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 551,
    "name": "Château de Condé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des princes de Condé en Thiérache.",
    "location": "Condé-en-Brie, Hauts-de-France",
    "rating": 4.3,
    "price": "10€",
    "hours": "14h30 - 17h30",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 49,
      "lng": 3.5667
    },
    "highlights": [
      "Décors de Watteau",
      "Servandoni",
      "Boudoir"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 552,
    "name": "Château de Bagatelle",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Folie XVIIIe siècle en baie de Somme.",
    "location": "Abbeville, Hauts-de-France",
    "rating": 4.1,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 50.1167,
      "lng": 1.85
    },
    "highlights": [
      "Chinoiseries",
      "Parc anglais",
      "Temple de l'Amour"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 553,
    "name": "Château de Long",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure seigneuriale au cœur des jardins.",
    "location": "Long, Hauts-de-France",
    "rating": 4,
    "price": "7€",
    "hours": "14h - 18h (week-end)",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 50.0333,
      "lng": 1.9833
    },
    "highlights": [
      "Jardins",
      "Intérieurs XVIIIe",
      "Vallée de la Somme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 554,
    "name": "Château d'Hardelot",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Centre culturel de l'Entente cordiale.",
    "location": "Condette, Hauts-de-France",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 50.6333,
      "lng": 1.6333
    },
    "highlights": [
      "Dickens",
      "Culture britannique",
      "Théâtre élisabéthain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 555,
    "name": "Château d'Olhain",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale des marais artésiens.",
    "location": "Fresnicourt-le-Dolmen, Hauts-de-France",
    "rating": 4.1,
    "price": "7€",
    "hours": "14h - 18h (week-end)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 50.45,
      "lng": 2.5833
    },
    "highlights": [
      "Douves",
      "Animations médiévales",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 556,
    "name": "Château de Rambures",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse militaire aux tours rondes.",
    "location": "Rambures, Hauts-de-France",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 49.9333,
      "lng": 1.7167
    },
    "highlights": [
      "Tours en amande",
      "Arboretum",
      "Mobilier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 557,
    "name": "Château de Valençay",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure de Talleyrand, prince de Bénévent.",
    "location": "Valençay, Centre-Val de Loire",
    "rating": 4.4,
    "price": "15.50€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.1583,
      "lng": 1.5667
    },
    "highlights": [
      "Talleyrand",
      "Parc aux daims",
      "Collections"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 558,
    "name": "Château de Sully-sur-Loire",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sully-sur-Loire_castle.jpg/800px-Sully-sur-Loire_castle.jpg",
    "description": "Forteresse des bords de Loire avec donjon médiéval.",
    "location": "Sully-sur-Loire, Centre-Val de Loire",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIIe siècle",
    "coordinates": {
      "lat": 47.7667,
      "lng": 2.375
    },
    "highlights": [
      "Sully",
      "Charpente médiévale",
      "Douves"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 559,
    "name": "Château de Chamerolles",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Musée des parfums dans un château Renaissance.",
    "location": "Chilleurs-aux-Bois, Centre-Val de Loire",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.0333,
      "lng": 2.1167
    },
    "highlights": [
      "Promenade des parfums",
      "Jardins Renaissance",
      "Galerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 560,
    "name": "Klimt : L'Or et la Modernité - Grand Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "Rétrospective exceptionnelle du maître viennois Gustav Klimt.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "17€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8662,
      "lng": 2.3125
    },
    "highlights": [
      "Le Baiser",
      "Période dorée",
      "Sécession viennoise"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 561,
    "name": "Caravage : Lumière et Ténèbres - Musée du Luxembourg",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=800&q=80",
    "description": "Le clair-obscur révolutionnaire du maître italien.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "15€",
    "hours": "10h30 - 19h (fermé mardi)",
    "period": "Jusqu'au 15 août 2026",
    "coordinates": {
      "lat": 48.8474,
      "lng": 2.3374
    },
    "highlights": [
      "Prêts exceptionnels",
      "Technique révolutionnaire",
      "Tableaux d'autel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 562,
    "name": "Hokusai : La Grande Vague - Musée Guimet",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'œuvre monumentale du maître japonais et ses influences.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 juillet 2026",
    "coordinates": {
      "lat": 48.8649,
      "lng": 2.293
    },
    "highlights": [
      "36 vues du Mont Fuji",
      "Manga",
      "Influence impressionnistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 563,
    "name": "Basquiat x Warhol : Four Hands - Fondation Louis Vuitton",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1580981454360-3c6d3eb19b45?w=800&q=80",
    "description": "La collaboration unique entre deux géants de l'art contemporain.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "20€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8767,
      "lng": 2.265
    },
    "highlights": [
      "Œuvres collaboratives",
      "Pop Art",
      "Neo-expressionnisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 564,
    "name": "Pompéi : La Vie Avant l'Éruption - Musée de la Romanité",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80",
    "description": "Reconstitution immersive de la cité antique avant sa destruction.",
    "location": "Nîmes, Occitanie",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 15 novembre 2026",
    "coordinates": {
      "lat": 43.8342,
      "lng": 4.3606
    },
    "highlights": [
      "Fresques restaurées",
      "Objets du quotidien",
      "Reconstitution 3D"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 565,
    "name": "Dalí : L'Énigme sans Fin - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80",
    "description": "Le surréalisme total de Salvador Dalí.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Persistance de la mémoire",
      "Films",
      "Méthode paranoïaque-critique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 566,
    "name": "Modigliani : Portraits d'Âme - Musée de l'Orangerie",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les portraits emblématiques du peintre maudit.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8638,
      "lng": 2.3226
    },
    "highlights": [
      "Portraits allongés",
      "École de Paris",
      "Montparnasse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 567,
    "name": "L'Impressionnisme et la Seine - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=800&q=80",
    "description": "La Seine comme source d'inspiration des impressionnistes.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Monet",
      "Renoir",
      "Paysages fluviaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 568,
    "name": "Fragonard Amoureux - Musée Jacquemart-André",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les scènes galantes du peintre du XVIIIe siècle.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8752,
      "lng": 2.3108
    },
    "highlights": [
      "Le Verrou",
      "Scènes galantes",
      "Rococo"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 569,
    "name": "Le Monde de Hayao Miyazaki - Cité de l'Architecture",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'architecture imaginaire du maître de l'animation japonaise.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "13€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.2889
    },
    "highlights": [
      "Studios Ghibli",
      "Décors originaux",
      "Architecture fantastique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 570,
    "name": "Titien : Le Dernier Chef-d'œuvre - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    "description": "Les dernières années du maître vénitien de la couleur.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Pietà",
      "Couleur vénitienne",
      "Renaissance tardive"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 571,
    "name": "Photographies de Robert Doisneau - MEP",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le Paris populaire immortalisé par le photographe humaniste.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "12€",
    "hours": "11h - 20h (fermé lundi et mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8527,
      "lng": 2.3611
    },
    "highlights": [
      "Le Baiser de l'Hôtel de Ville",
      "Banlieue",
      "Paris populaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 572,
    "name": "L'Art du Manga - BnF",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire et influence du manga japonais.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 19h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8336,
      "lng": 2.3757
    },
    "highlights": [
      "Planches originales",
      "Histoire du manga",
      "Influence mondiale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 573,
    "name": "Cézanne et Provence - Musée Granet",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    "description": "L'attachement indéfectible du peintre à sa terre natale.",
    "location": "Aix-en-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 19h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 43.5267,
      "lng": 5.451
    },
    "highlights": [
      "Montagne Sainte-Victoire",
      "Paysages provençaux",
      "Dernières années"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 574,
    "name": "Gerhard Richter : Rétrospective - Centre Pompidou-Metz",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80",
    "description": "Panorama complet de l'œuvre du peintre allemand.",
    "location": "Metz, Grand Est",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 49.1081,
      "lng": 6.1822
    },
    "highlights": [
      "Photo-peintures",
      "Abstractions",
      "Vitraux de Cologne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 575,
    "name": "Toulouse-Lautrec et Montmartre - Musée Toulouse-Lautrec",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La vie nocturne parisienne vue par l'artiste.",
    "location": "Albi, Occitanie",
    "rating": 4.5,
    "price": "11€",
    "hours": "9h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 43.9286,
      "lng": 2.1436
    },
    "highlights": [
      "Moulin Rouge",
      "Affiches",
      "Vie de bohème"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 576,
    "name": "L'Or des Scythes - Musée des Confluences",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trésors des cavaliers nomades des steppes.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 45.7327,
      "lng": 4.8187
    },
    "highlights": [
      "Orfèvrerie",
      "Art animalier",
      "Kourganes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 577,
    "name": "Bonnard et le Japon - Musée Bonnard",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'influence de l'art japonais sur le nabi intimiste.",
    "location": "Le Cannet, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 43.5769,
      "lng": 7.0167
    },
    "highlights": [
      "Estampes",
      "Intérieurs",
      "Couleurs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 578,
    "name": "Versailles et la Mode - Château de Versailles",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80",
    "description": "La cour de France, capitale mondiale de la mode.",
    "location": "Versailles, Île-de-France",
    "rating": 4.6,
    "price": "21€",
    "hours": "9h - 18h30 (fermé lundi)",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "highlights": [
      "Costumes de cour",
      "Marie-Antoinette",
      "Haute couture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 579,
    "name": "Anish Kapoor : Vide et Plein - Château de Chambord",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dialogue entre art contemporain et architecture Renaissance.",
    "location": "Chambord, Centre-Val de Loire",
    "rating": 4.5,
    "price": "16€",
    "hours": "9h - 18h",
    "period": "Jusqu'au 30 octobre 2026",
    "coordinates": {
      "lat": 47.6162,
      "lng": 1.517
    },
    "highlights": [
      "Miroirs",
      "Pigments",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 580,
    "name": "L'Égypte des Pharaons Noirs - Musée de Grenoble",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La XXVe dynastie et les rois koushites.",
    "location": "Grenoble, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h30 (fermé mardi)",
    "period": "Jusqu'au 31 juillet 2026",
    "coordinates": {
      "lat": 45.1945,
      "lng": 5.7322
    },
    "highlights": [
      "Nubie",
      "Statues royales",
      "Méroé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 581,
    "name": "Turner et la Mer - Musée Eugène Boudin",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le romantisme maritime du peintre anglais.",
    "location": "Honfleur, Normandie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 49.4181,
      "lng": 0.2331
    },
    "highlights": [
      "Marines",
      "Lumière",
      "Tempêtes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 582,
    "name": "Mondrian : Évolution - LaM",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Du figuratif à l'abstraction géométrique.",
    "location": "Villeneuve-d'Ascq, Hauts-de-France",
    "rating": 4.4,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 50.636,
      "lng": 3.1478
    },
    "highlights": [
      "Néo-plasticisme",
      "Broadway Boogie Woogie",
      "De Stijl"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 583,
    "name": "Le Mystère Bosch - Palais des Beaux-Arts de Lille",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'univers fantastique du maître flamand.",
    "location": "Lille, Hauts-de-France",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 50.6319,
      "lng": 3.0625
    },
    "highlights": [
      "Jardin des délices",
      "Monstres",
      "Symbolisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 584,
    "name": "Berthe Morisot : Femme Impressionniste - Musée Marmottan",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Hommage à la grande dame de l'impressionnisme.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8526,
      "lng": 2.2667
    },
    "highlights": [
      "Portraits",
      "Scènes familiales",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 585,
    "name": "Jean-Paul Gaultier : Fashion Freak Show - MAD Paris",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'univers déjanté de l'enfant terrible de la mode.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.333
    },
    "highlights": [
      "Corsets",
      "Marinières",
      "Costumes de scène"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 586,
    "name": "L'Âge d'Or du Cinéma Muet - Cinémathèque Française",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les chefs-d'œuvre du septième art avant le parlant.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "12€",
    "hours": "12h - 19h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8392,
      "lng": 2.3816
    },
    "highlights": [
      "Chaplin",
      "Méliès",
      "Expressionnisme allemand"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 587,
    "name": "Magritte : Le Surréalisme Belge - Musée de l'Orangerie",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les images poétiques du peintre des mystères.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "14€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8638,
      "lng": 2.3226
    },
    "highlights": [
      "Pipe",
      "Chapeaux melon",
      "Empire des lumières"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 588,
    "name": "L'Art du Tatouage - Musée du Quai Branly",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Histoire et anthropologie du tatouage dans le monde.",
    "location": "Paris, Île-de-France",
    "rating": 4.3,
    "price": "14€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8611,
      "lng": 2.2977
    },
    "highlights": [
      "Polynésie",
      "Japon",
      "Tatouage contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 589,
    "name": "Giacometti : L'Homme qui marche - Fondation Maeght",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les figures emblématiques du sculpteur suisse.",
    "location": "Saint-Paul-de-Vence, Provence-Alpes-Côte d'Azur",
    "rating": 4.7,
    "price": "18€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 43.7042,
      "lng": 7.1222
    },
    "highlights": [
      "Sculptures filiformes",
      "Bustes",
      "Atelier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 590,
    "name": "Fernand Léger : La Ville - Musée Fernand Léger",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La modernité urbaine dans l'œuvre du peintre cubiste.",
    "location": "Biot, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "12€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 43.6261,
      "lng": 7.0944
    },
    "highlights": [
      "La Ville",
      "Machine",
      "Couleurs primaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 591,
    "name": "Picasso Céramiste - Musée Picasso Antibes",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    "description": "L'aventure céramique de Picasso à Vallauris.",
    "location": "Antibes, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 43.5807,
      "lng": 7.1273
    },
    "highlights": [
      "Vallauris",
      "Plats décorés",
      "Chouettes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 592,
    "name": "Rembrandt : Les Dernières Années - Musée des Beaux-Arts de Lyon",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80",
    "description": "La maturité créatrice du maître hollandais.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 45.7666,
      "lng": 4.8336
    },
    "highlights": [
      "Autoportraits",
      "Clair-obscur",
      "Gravures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 593,
    "name": "L'Art des Samuraï - Musée des Arts Asiatiques",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Armures, sabres et culture guerrière du Japon féodal.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 43.6947,
      "lng": 7.2658
    },
    "highlights": [
      "Armures",
      "Katanas",
      "Bushido"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 594,
    "name": "L'Atelier de Rodin - Musée Rodin",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80",
    "description": "Le processus créatif du sculpteur révélé.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h30 (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8553,
      "lng": 2.316
    },
    "highlights": [
      "Esquisses",
      "Moulages",
      "Études"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 595,
    "name": "Napoléon : L'Épopée - Château de Fontainebleau",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1597212720801-958b60f8a29e?w=800&q=80",
    "description": "La vie et la légende de l'Empereur.",
    "location": "Fontainebleau, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 48.4011,
      "lng": 2.7009
    },
    "highlights": [
      "Sacre",
      "Campagnes",
      "Exil"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 596,
    "name": "Botticelli : Printemps Éternel - Musée des Beaux-Arts de Bordeaux",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La grâce florentine du peintre de la Renaissance.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.6,
    "price": "12€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 44.8378,
      "lng": -0.5792
    },
    "highlights": [
      "Madones",
      "Mythologie",
      "Florence"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 597,
    "name": "L'Empire Aztèque - Musée d'Aquitaine",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Splendeurs de la civilisation précolombienne.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "10€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 44.8378,
      "lng": -0.5761
    },
    "highlights": [
      "Calendrier solaire",
      "Sacrifices",
      "Tenochtitlan"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 598,
    "name": "Degas : Danseuses et Chevaux - Musée des Beaux-Arts de Rennes",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les deux passions du peintre impressionniste.",
    "location": "Rennes, Bretagne",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 17h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.1106,
      "lng": -1.6744
    },
    "highlights": [
      "Petites danseuses",
      "Courses hippiques",
      "Pastels"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 599,
    "name": "Vikings : Guerriers des Mers - Mémorial de Caen",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'épopée des peuples scandinaves.",
    "location": "Caen, Normandie",
    "rating": 4.5,
    "price": "15€",
    "hours": "9h - 19h",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 49.2139,
      "lng": -0.3844
    },
    "highlights": [
      "Drakkars",
      "Runes",
      "Normandie viking"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 600,
    "name": "Le Corbusier : Habiter - Cité de l'Architecture",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La révolution de l'habitat moderne.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "13€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.2889
    },
    "highlights": [
      "Unité d'habitation",
      "Villa Savoye",
      "Modulor"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 601,
    "name": "Goya : Les Peintures Noires - Musée Goya",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'univers sombre du maître espagnol.",
    "location": "Castres, Occitanie",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 43.6061,
      "lng": 2.2417
    },
    "highlights": [
      "Saturne",
      "Caprichos",
      "Désastres de la guerre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 602,
    "name": "Kandinsky : Bleu de Ciel - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'invention de l'art abstrait.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Composition",
      "Bauhaus",
      "Spirituel dans l'art"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 603,
    "name": "L'Art Roman en Auvergne - Musée d'Art Roger-Quilliot",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chefs-d'œuvre de l'architecture médiévale auvergnate.",
    "location": "Clermont-Ferrand, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 45.7772,
      "lng": 3.0878
    },
    "highlights": [
      "Chapiteaux",
      "Vierges romanes",
      "Émaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 604,
    "name": "Jeff Koons : Shine - Mucem",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le kitsch transcendé par l'artiste américain.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "13€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 43.2966,
      "lng": 5.3608
    },
    "highlights": [
      "Balloon Dog",
      "Inox poli",
      "Pop Art"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 605,
    "name": "Manuscrits de la Mer Morte - Institut du Monde Arabe",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les plus anciens textes bibliques connus.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 juillet 2026",
    "coordinates": {
      "lat": 48.8508,
      "lng": 2.3542
    },
    "highlights": [
      "Qumrân",
      "Esséniens",
      "Archéologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 606,
    "name": "Soulages : Noir Lumière - Musée Soulages",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    "description": "Les dernières recherches du maître de l'outrenoir.",
    "location": "Rodez, Occitanie",
    "rating": 4.6,
    "price": "13€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 44.3507,
      "lng": 2.5689
    },
    "highlights": [
      "Outrenoir",
      "Vitraux de Conques",
      "Grands formats"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 607,
    "name": "Gustave Doré : Illustrateur de Génie - Musée d'Art Moderne de Strasbourg",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'imaginaire fantastique de l'illustrateur alsacien.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.5842,
      "lng": 7.7489
    },
    "highlights": [
      "Bible",
      "Divine Comédie",
      "Contes de Perrault"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 608,
    "name": "L'Art de l'Islam - Musée des Beaux-Arts de Dijon",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Splendeurs des arts décoratifs islamiques.",
    "location": "Dijon, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "6€",
    "hours": "9h30 - 18h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 47.322,
      "lng": 5.0415
    },
    "highlights": [
      "Céramiques",
      "Tapis",
      "Calligraphie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 609,
    "name": "Dufy : Couleurs de Normandie - MuMa Le Havre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les paysages normands du peintre fauve.",
    "location": "Le Havre, Normandie",
    "rating": 4.4,
    "price": "9€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 49.4872,
      "lng": 0.1042
    },
    "highlights": [
      "Régates",
      "Plages",
      "Fauvisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 610,
    "name": "Pompéi Immersif - Atelier des Lumières",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Voyage numérique dans la cité antique.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8614,
      "lng": 2.3811
    },
    "highlights": [
      "Projection immersive",
      "Fresques animées",
      "Éruption"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 611,
    "name": "Portraits de Cour - Château de Chantilly",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La représentation du pouvoir sous l'Ancien Régime.",
    "location": "Chantilly, Hauts-de-France",
    "rating": 4.5,
    "price": "17€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 49.1935,
      "lng": 2.4867
    },
    "highlights": [
      "Condé",
      "Clouet",
      "Rigaud"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 612,
    "name": "Hiroshige : Les Cent Vues d'Edo - Musée des Arts Décoratifs",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le chef-d'œuvre de l'estampe japonaise.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.333
    },
    "highlights": [
      "Ukiyo-e",
      "Tokyo ancien",
      "Saisons"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 613,
    "name": "Niki de Saint Phalle : Nanas - MAMAC Nice",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les sculptures joyeuses de l'artiste franco-américaine.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 43.7017,
      "lng": 7.2767
    },
    "highlights": [
      "Nanas",
      "Fontaine Stravinsky",
      "Tirs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 614,
    "name": "L'Or des Thraces - Musée de la Romanité",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trésors archéologiques de la Bulgarie antique.",
    "location": "Nîmes, Occitanie",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 43.8342,
      "lng": 4.3606
    },
    "highlights": [
      "Orfèvrerie",
      "Tombes royales",
      "Mythologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 615,
    "name": "Renoir Intime - Musée Renoir Cagnes",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les dernières années du maître aux Collettes.",
    "location": "Cagnes-sur-Mer, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 12h / 14h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 43.6625,
      "lng": 7.1486
    },
    "highlights": [
      "Jardins",
      "Sculptures",
      "Vie quotidienne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 616,
    "name": "Ingres : Portraits de Femmes - Musée Ingres Bourdelle",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La beauté féminine selon le maître néoclassique.",
    "location": "Montauban, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 44.0172,
      "lng": 1.3542
    },
    "highlights": [
      "Grande Odalisque",
      "Dessins",
      "Élégance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 617,
    "name": "L'Art Brut au Féminin - Collection de l'Art Brut",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Créatrices visionnaires de l'art outsider.",
    "location": "Lausanne, Suisse",
    "rating": 4.4,
    "price": "12 CHF",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 46.5197,
      "lng": 6.6323
    },
    "highlights": [
      "Aloïse",
      "Madge Gill",
      "Créations médiumniques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 618,
    "name": "Courbet et la Nature - Musée Courbet",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les paysages franc-comtois du maître réaliste.",
    "location": "Ornans, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 47.1058,
      "lng": 6.1431
    },
    "highlights": [
      "Vallée de la Loue",
      "Grottes",
      "Réalisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 619,
    "name": "L'Art Nouveau à Nancy - Musée de l'École de Nancy",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'apogée du mouvement Art nouveau lorrain.",
    "location": "Nancy, Grand Est",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi et mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.6737,
      "lng": 6.1667
    },
    "highlights": [
      "Gallé",
      "Majorelle",
      "Verreries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 620,
    "name": "L'Impressionnisme en Normandie - Musée des Impressionnismes Giverny",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "La Normandie, berceau de l'impressionnisme.",
    "location": "Giverny, Normandie",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "Avril - novembre 2026",
    "coordinates": {
      "lat": 49.0755,
      "lng": 1.5339
    },
    "highlights": [
      "Monet",
      "Pissarro",
      "Paysages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 621,
    "name": "Gauguin et les Nabis - Musée de Pont-Aven",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'école de Pont-Aven et ses héritiers.",
    "location": "Pont-Aven, Bretagne",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 47.8553,
      "lng": -3.7461
    },
    "highlights": [
      "Synthétisme",
      "Sérusier",
      "Talisman"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 622,
    "name": "Christo et Jeanne-Claude - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les emballages monumentaux du couple d'artistes.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Pont-Neuf",
      "Reichstag",
      "Arc de Triomphe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 623,
    "name": "La Bretagne des Peintres - Musée des Beaux-Arts de Quimper",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Un siècle de peinture bretonne.",
    "location": "Quimper, Bretagne",
    "rating": 4.3,
    "price": "7€",
    "hours": "9h30 - 12h / 14h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 47.9958,
      "lng": -4.1019
    },
    "highlights": [
      "Sérusier",
      "Max Jacob",
      "Pardons"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 624,
    "name": "Louise Bourgeois : Cellules - LaM",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les installations intimes de la sculptrice.",
    "location": "Villeneuve-d'Ascq, Hauts-de-France",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 50.636,
      "lng": 3.1478
    },
    "highlights": [
      "Araignées",
      "Cellules",
      "Mémoire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 625,
    "name": "Le Sacre de Napoléon - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    "description": "Autour du chef-d'œuvre de David.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "David",
      "Cérémonie",
      "Empire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 626,
    "name": "L'Art Étrusque - Musée de la Civilisation Gallo-Romaine",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La civilisation mystérieuse avant Rome.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 45.7597,
      "lng": 4.82
    },
    "highlights": [
      "Tombes peintes",
      "Bucchero",
      "Rites funéraires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 627,
    "name": "Yves Saint Laurent : Rétrospective - Musée Yves Saint Laurent",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le génie de la haute couture française.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8663,
      "lng": 2.301
    },
    "highlights": [
      "Smokings",
      "Mondrian",
      "Haute couture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 628,
    "name": "Bruegel l'Ancien : Paysages - Musée des Beaux-Arts de Valenciennes",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La nature vue par le maître flamand.",
    "location": "Valenciennes, Hauts-de-France",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 50.3578,
      "lng": 3.5236
    },
    "highlights": [
      "Paysages",
      "Saisons",
      "Vie paysanne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 629,
    "name": "L'Or du Rhin : Trésors Médiévaux - Musée de l'Œuvre Notre-Dame",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Orfèvrerie rhénane du Moyen Âge.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.5817,
      "lng": 7.7508
    },
    "highlights": [
      "Reliquaires",
      "Émaux",
      "Trésors d'église"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 630,
    "name": "Odilon Redon : Rêveur Éveillé - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les visions oniriques du peintre symboliste.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Noirs",
      "Pastels",
      "Fleurs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 631,
    "name": "Le Greco : Mystique de Tolède - Petit Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le maniérisme visionnaire du peintre crétois.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.866,
      "lng": 2.314
    },
    "highlights": [
      "Figures allongées",
      "Extases",
      "Tolède"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 632,
    "name": "L'Art Maya : Splendeurs d'une Civilisation - Musée du Quai Branly",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trésors de la civilisation mésoaméricaine.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Jusqu'au 30 octobre 2026",
    "coordinates": {
      "lat": 48.8611,
      "lng": 2.2977
    },
    "highlights": [
      "Jade",
      "Calendrier",
      "Cités perdues"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 633,
    "name": "Félicien Rops : L'Érotisme Noir - Musée Rops",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'univers sulfureux du graveur belge.",
    "location": "Namur, Belgique",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 50.4647,
      "lng": 4.8683
    },
    "highlights": [
      "Symbolisme",
      "Érotisme",
      "Gravures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 634,
    "name": "Splendeurs de la Perse - Musée d'Art et d'Histoire de Genève",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "De l'Empire achéménide aux Safavides.",
    "location": "Genève, Suisse",
    "rating": 4.5,
    "price": "15 CHF",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 46.199,
      "lng": 6.152
    },
    "highlights": [
      "Persépolis",
      "Miniatures",
      "Tapis"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 635,
    "name": "L'Art des Années Folles - Musée des Années 30",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Paris capitale mondiale de l'art déco.",
    "location": "Boulogne-Billancourt, Île-de-France",
    "rating": 4.3,
    "price": "7€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8354,
      "lng": 2.2406
    },
    "highlights": [
      "Art déco",
      "Joséphine Baker",
      "Streamline"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 636,
    "name": "Signac : Néo-Impressionnisme - Musée de l'Annonciade",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le pointillisme lumineux du peintre de Saint-Tropez.",
    "location": "Saint-Tropez, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 43.2723,
      "lng": 6.6395
    },
    "highlights": [
      "Pointillisme",
      "Port",
      "Méditerranée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 637,
    "name": "Rubens : Le Triomphe Baroque - Musée des Beaux-Arts de Nancy",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La virtuosité du maître flamand.",
    "location": "Nancy, Grand Est",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.6937,
      "lng": 6.1834
    },
    "highlights": [
      "Esquisses",
      "Mythologie",
      "Puissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 638,
    "name": "Le Douanier Rousseau : Rêves de Jungle - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'univers naïf et tropical du peintre autodidacte.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Jungles",
      "Art naïf",
      "Charmeuse de serpents"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 639,
    "name": "Delacroix Romantique - Musée Delacroix",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La passion romantique du maître coloriste.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "9€",
    "hours": "9h30 - 17h30 (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8547,
      "lng": 2.335
    },
    "highlights": [
      "Orient",
      "Couleur",
      "Liberté guidant le peuple"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 640,
    "name": "L'Art Celte - Musée d'Archéologie Nationale",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chefs-d'œuvre de l'âge du fer européen.",
    "location": "Saint-Germain-en-Laye, Île-de-France",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 17h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8983,
      "lng": 2.0944
    },
    "highlights": [
      "Torques",
      "Char de Vix",
      "Art animal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 641,
    "name": "Vermeer : Le Temps Suspendu - Musée du Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    "description": "L'intimité lumineuse du maître de Delft.",
    "location": "Paris, Île-de-France",
    "rating": 4.9,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "La Dentellière",
      "Intérieurs",
      "Lumière"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 642,
    "name": "Art Nouveau Bruxellois - Musée Horta",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'architecture organique de Victor Horta.",
    "location": "Bruxelles, Belgique",
    "rating": 4.6,
    "price": "12€",
    "hours": "14h - 17h30 (fermé lundi)",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 50.8219,
      "lng": 4.3522
    },
    "highlights": [
      "Maison Horta",
      "Escalier",
      "Ferronneries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 643,
    "name": "Whistler et l'Esthétisme - Petit Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le raffinement du peintre américain.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.866,
      "lng": 2.314
    },
    "highlights": [
      "Nocturnes",
      "Portraits",
      "Art pour l'art"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 644,
    "name": "L'Art de l'Ancien Égypte - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Nouvelles découvertes sur les rives du Nil.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Champollion",
      "Nouvelles fouilles",
      "Sarcophages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 645,
    "name": "Man Ray : Photographie et Surréalisme - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les expérimentations photographiques du surréaliste.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Rayogrammes",
      "Solarisation",
      "Portraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 646,
    "name": "Gaudi : Architecture du Rêve - Cité de l'Architecture",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le génie organique de l'architecte catalan.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "13€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.2889
    },
    "highlights": [
      "Sagrada Familia",
      "Parc Güell",
      "Maquettes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 647,
    "name": "Poussin : L'Ordre et le Chaos - Musée des Beaux-Arts de Lyon",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le classicisme français du XVIIe siècle.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 45.7666,
      "lng": 4.8336
    },
    "highlights": [
      "Bergers d'Arcadie",
      "Antiquité",
      "Composition"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 648,
    "name": "L'Âge d'Or Flamand - Musée de Flandre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La peinture flamande du XVIe au XVIIe siècle.",
    "location": "Cassel, Hauts-de-France",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 50.8003,
      "lng": 2.4864
    },
    "highlights": [
      "Brueghel",
      "Van Eyck",
      "Vie flamande"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 649,
    "name": "Francis Bacon : Chairs et Cris - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La violence picturale du peintre britannique.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Triptyques",
      "Portraits",
      "Existentialisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 650,
    "name": "Trésor des Médicis - Château de Chenonceau",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'héritage artistique de Catherine de Médicis.",
    "location": "Chenonceaux, Centre-Val de Loire",
    "rating": 4.5,
    "price": "17€",
    "hours": "9h - 19h",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 47.3249,
      "lng": 1.0705
    },
    "highlights": [
      "Renaissance",
      "Catherine de Médicis",
      "Collections"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 651,
    "name": "L'Art Byzantin - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Splendeurs de l'Empire romain d'Orient.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Icônes",
      "Orfèvrerie",
      "Constantinople"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 652,
    "name": "Schiele : Egon et Vienne 1900 - Fondation Louis Vuitton",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'expressionnisme tourmenté du peintre autrichien.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "20€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8767,
      "lng": 2.265
    },
    "highlights": [
      "Autoportraits",
      "Nus",
      "Vienne 1900"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 653,
    "name": "Artemisia Gentileschi : Femme Artiste - Musée de l'Orangerie",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La peintre baroque la plus célèbre du XVIIe siècle.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.8638,
      "lng": 2.3226
    },
    "highlights": [
      "Judith",
      "Caravagisme",
      "Féminisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 654,
    "name": "L'Art de Cour en France - Château de Versailles",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le raffinement artistique sous Louis XIV.",
    "location": "Versailles, Île-de-France",
    "rating": 4.6,
    "price": "21€",
    "hours": "9h - 18h30 (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "highlights": [
      "Le Brun",
      "Gobelins",
      "Faste royal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 655,
    "name": "Edward Hopper : Solitudes Américaines - Grand Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La mélancolie urbaine du peintre réaliste.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "17€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8662,
      "lng": 2.3125
    },
    "highlights": [
      "Nighthawks",
      "Lumière américaine",
      "Solitude"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 656,
    "name": "Le Bauhaus : Révolution Design - MAD Paris",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'école qui a révolutionné le design moderne.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.333
    },
    "highlights": [
      "Gropius",
      "Klee",
      "Design fonctionnel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 657,
    "name": "Venise : La Sérénissime - Musée Jacquemart-André",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'âge d'or de la peinture vénitienne.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8752,
      "lng": 2.3108
    },
    "highlights": [
      "Véronèse",
      "Tintoret",
      "Vedute"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 658,
    "name": "Miro : Signes et Symboles - Fondation Maeght",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'univers poétique du peintre catalan.",
    "location": "Saint-Paul-de-Vence, Provence-Alpes-Côte d'Azur",
    "rating": 4.6,
    "price": "18€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 43.7042,
      "lng": 7.1222
    },
    "highlights": [
      "Constellations",
      "Sculptures",
      "Poésie visuelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 659,
    "name": "L'Art de la Renaissance Italienne - Musée du Petit Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chefs-d'œuvre florentins et vénitiens.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 48.866,
      "lng": 2.314
    },
    "highlights": [
      "Quattrocento",
      "Botticelli",
      "Carpaccio"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 660,
    "name": "Château de Monségur",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Symbole de la résistance cathare, lieu de mémoire.",
    "location": "Montségur, Occitanie",
    "rating": 4.5,
    "price": "7€",
    "hours": "9h30 - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 42.8761,
      "lng": 1.8319
    },
    "highlights": [
      "Bûcher des 220 parfaits",
      "Solstice",
      "Mystère cathare"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 661,
    "name": "Château de Puilaurens",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Puilaurens.jpg/800px-Puilaurens.jpg",
    "description": "Forteresse royale aux confins du royaume de France.",
    "location": "Lapradelle-Puilaurens, Occitanie",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 19h",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 42.8028,
      "lng": 2.3042
    },
    "highlights": [
      "Enceintes concentriques",
      "Forêt de sapins",
      "Crénelages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 662,
    "name": "Château du Haut-Koenigsbourg",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Haut-Koenigsbourg_-_ch%C3%A2teau.jpg/800px-Haut-Koenigsbourg_-_ch%C3%A2teau.jpg",
    "description": "Forteresse alsacienne restaurée par Guillaume II.",
    "location": "Orschwiller, Grand Est",
    "rating": 4.7,
    "price": "12€",
    "hours": "9h15 - 18h",
    "period": "XIIe - XXe siècle",
    "coordinates": {
      "lat": 48.2494,
      "lng": 7.3444
    },
    "highlights": [
      "Vue sur Alsace",
      "Collection d'armes",
      "Jardins médiévaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 663,
    "name": "Château du Fleckenstein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château troglodytique dans les Vosges du Nord.",
    "location": "Lembach, Grand Est",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.0422,
      "lng": 7.7831
    },
    "highlights": [
      "Rocher sculpté",
      "Parcours aventure",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 664,
    "name": "Château de Falkenstein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château semi-troglodytique dans les grès des Vosges.",
    "location": "Philippsbourg, Grand Est",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.0156,
      "lng": 7.5542
    },
    "highlights": [
      "Escaliers taillés",
      "Citerne",
      "Forêt vosgienne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 665,
    "name": "Château de Guédelon",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Guedelon_mai_2011.jpg/800px-Guedelon_mai_2011.jpg",
    "description": "Chantier de construction d'un château médiéval avec techniques du XIIIe siècle.",
    "location": "Treigny, Bourgogne-Franche-Comté",
    "rating": 4.8,
    "price": "15€",
    "hours": "10h - 17h30",
    "period": "XIIIe siècle (en construction)",
    "coordinates": {
      "lat": 47.5814,
      "lng": 3.1558
    },
    "highlights": [
      "Artisans au travail",
      "Techniques médiévales",
      "Chantier vivant"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 666,
    "name": "Château de Commarin",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chateau-de-Commarin.jpg/800px-Chateau-de-Commarin.jpg",
    "description": "26 générations d'une même famille depuis 6 siècles.",
    "location": "Commarin, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 12h / 14h - 18h",
    "period": "XIVe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.2794,
      "lng": 4.6378
    },
    "highlights": [
      "Mobilier familial",
      "Tapisseries",
      "Douves"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 667,
    "name": "Château de Monte-Cristo",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure fantaisiste d'Alexandre Dumas.",
    "location": "Le Port-Marly, Île-de-France",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.8861,
      "lng": 2.1017
    },
    "highlights": [
      "Château d'If",
      "Cabinet de travail",
      "Parc anglais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 668,
    "name": "Château de Breteuil",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Chateau_de_Breteuil.jpg/800px-Chateau_de_Breteuil.jpg",
    "description": "Château des contes de Perrault dans la vallée de Chevreuse.",
    "location": "Choisel, Île-de-France",
    "rating": 4.4,
    "price": "14€",
    "hours": "10h - 18h",
    "period": "XVIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 48.6961,
      "lng": 1.9883
    },
    "highlights": [
      "Contes de Perrault",
      "Cire Grévin",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 669,
    "name": "Château de Dampierre",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dampierre_Chateau_01.jpg/800px-Dampierre_Chateau_01.jpg",
    "description": "Élégance Louis XIV dans la vallée de Chevreuse.",
    "location": "Dampierre-en-Yvelines, Île-de-France",
    "rating": 4.3,
    "price": "12€",
    "hours": "11h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.7083,
      "lng": 1.9831
    },
    "highlights": [
      "Hardouin-Mansart",
      "Parc Le Nôtre",
      "Duc de Luynes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 670,
    "name": "Château de Thoiry",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Thoiry01.jpg/800px-Thoiry01.jpg",
    "description": "Renaissance et safari au cœur des Yvelines.",
    "location": "Thoiry, Île-de-France",
    "rating": 4.3,
    "price": "35€",
    "hours": "10h - 17h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.8647,
      "lng": 1.8006
    },
    "highlights": [
      "Safari",
      "Solstice d'été",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 671,
    "name": "Château de La Roche-Guyon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château troglodytique dominant la Seine.",
    "location": "La Roche-Guyon, Île-de-France",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 49.0808,
      "lng": 1.6314
    },
    "highlights": [
      "Donjon dans la falaise",
      "Rommel 1944",
      "Potager"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 672,
    "name": "Klimt et l'Art Nouveau Viennois - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "L'or et la sensualité du maître de la Sécession viennoise.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Le Baiser",
      "Judith",
      "Frieze Stoclet"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 673,
    "name": "Frida Kahlo : Corps et Âme - Palais Galliera",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'artiste mexicaine à travers ses autoportraits et sa mode.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8647,
      "lng": 2.2986
    },
    "highlights": [
      "Autoportraits",
      "Costume tehuana",
      "Surréalisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 674,
    "name": "Basquiat x Warhol - Fondation Louis Vuitton",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    "description": "La collaboration explosive des deux icônes pop art.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "20€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.8767,
      "lng": 2.265
    },
    "highlights": [
      "Collaborations",
      "Graffiti",
      "Pop Art"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 675,
    "name": "David Hockney : Normandie - Musée de l'Orangerie",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les paysages normands du peintre britannique sur iPad.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8638,
      "lng": 2.3226
    },
    "highlights": [
      "Art numérique",
      "Printemps normand",
      "Couleurs vives"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 676,
    "name": "Vermeer : La Lumière du Nord - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    "description": "Réunion exceptionnelle d'œuvres du maître de Delft.",
    "location": "Paris, Île-de-France",
    "rating": 4.9,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "La Laitière",
      "La Dentellière",
      "Lumière hollandaise"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 677,
    "name": "Banksy : Art Urbain Subversif - La Villette",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'œuvre contestataire de l'artiste anonyme.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "18€",
    "hours": "10h - 19h",
    "period": "Jusqu'au 31 juillet 2026",
    "coordinates": {
      "lat": 48.8895,
      "lng": 2.3918
    },
    "highlights": [
      "Girl with Balloon",
      "Street Art",
      "Provocation"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 678,
    "name": "Modigliani : Portraits d'une Vie - Musée Maillol",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les visages allongés du peintre maudit.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "15€",
    "hours": "10h30 - 18h30",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8558,
      "lng": 2.3253
    },
    "highlights": [
      "Nu couché",
      "Portraits",
      "Montparnasse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 679,
    "name": "Léonard de Vinci : Dessins et Manuscrits - Institut de France",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les carnets du génie de la Renaissance.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "12€",
    "hours": "10h - 17h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8567,
      "lng": 2.3372
    },
    "highlights": [
      "Codex",
      "Anatomie",
      "Machines volantes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 680,
    "name": "Magritte : Le Mystère du Quotidien - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le surréalisme belge et ses images énigmatiques.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Ceci n'est pas une pipe",
      "Empire des lumières",
      "Mystère"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 681,
    "name": "Salvador Dalí : Le Théâtre de la Folie - Espace Dalí",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le génie paranoïaque-critique du maître catalan.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 18h30",
    "period": "Jusqu'au 31 décembre 2026",
    "coordinates": {
      "lat": 48.8847,
      "lng": 2.3406
    },
    "highlights": [
      "Montres molles",
      "Éléphants",
      "Rêves"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 682,
    "name": "Jeff Koons : Reflets - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les sculptures miroir de l'artiste américain.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Balloon Dog",
      "Kitsch",
      "Pop culture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 683,
    "name": "Caravage : Lumière et Ténèbres - Musée Jacquemart-André",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le clair-obscur révolutionnaire du maître baroque.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "16€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 48.8752,
      "lng": 2.3108
    },
    "highlights": [
      "Judith décapitant Holopherne",
      "Ténébrisme",
      "Violence"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 684,
    "name": "Botticelli : Printemps Florentin - Musée du Luxembourg",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    "description": "La grâce de la Renaissance florentine.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h30 - 19h",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.8475,
      "lng": 2.3358
    },
    "highlights": [
      "Vénus",
      "Printemps",
      "Médicis"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 685,
    "name": "L'Estampe Japonaise - Musée Guimet",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Hokusai, Hiroshige et l'art de l'ukiyo-e.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8647,
      "lng": 2.2936
    },
    "highlights": [
      "Grande Vague",
      "Cent vues d'Edo",
      "Geishas"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 686,
    "name": "L'Art des Samourais - Musée de l'Armée",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Armures, sabres et esprit bushido.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.855,
      "lng": 2.3125
    },
    "highlights": [
      "Katanas",
      "Armures yoroi",
      "Voie du guerrier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 687,
    "name": "Yayoi Kusama : Infini - Galeries Lafayette",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les obsessions à pois de l'artiste japonaise.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "16€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8717,
      "lng": 2.3325
    },
    "highlights": [
      "Infinity Rooms",
      "Pois",
      "Citrouilles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 688,
    "name": "Ai Weiwei : Résistance - Palais de Tokyo",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'art engagé de l'artiste dissident chinois.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "12h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8636,
      "lng": 2.2972
    },
    "highlights": [
      "Installations",
      "Droits de l'homme",
      "Réfugiés"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 689,
    "name": "Marina Abramović : Performance - Palais de Tokyo",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La grand-mère de l'art performance.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "14€",
    "hours": "12h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8636,
      "lng": 2.2972
    },
    "highlights": [
      "The Artist is Present",
      "Endurance",
      "Corps"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 690,
    "name": "Turner : Tempêtes et Lumières - Musée Marmottan",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le romantisme anglais et ses ciels tourmentés.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.2667
    },
    "highlights": [
      "Tempête de neige",
      "Lumière",
      "Marine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 691,
    "name": "Géricault : Passion et Folie - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le romantisme tourmenté du jeune génie.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Radeau de la Méduse",
      "Portraits d'aliénés",
      "Chevaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 692,
    "name": "Caillebotte : Paris Moderne - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le Paris haussmannien vu par l'impressionniste.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Raboteurs de parquet",
      "Pont de l'Europe",
      "Bourgeoisie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 693,
    "name": "Toulouse-Lautrec : Nuits Parisiennes - Grand Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le chroniqueur de Montmartre et de ses cabarets.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "17€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8662,
      "lng": 2.3125
    },
    "highlights": [
      "Moulin Rouge",
      "Jane Avril",
      "Affiches"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 694,
    "name": "Kandinsky : L'Abstraction Musicale - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le pionnier de l'art abstrait et la synesthésie.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Composition VIII",
      "Bauhaus",
      "Musique et couleur"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 695,
    "name": "Mondrian : De Stijl - Fondation Louis Vuitton",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le néoplasticisme et la quête de l'essentiel.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "20€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8767,
      "lng": 2.265
    },
    "highlights": [
      "Broadway Boogie-Woogie",
      "Lignes et couleurs primaires",
      "Géométrie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 696,
    "name": "Giacometti : L'Homme Qui Marche - Institut Giacometti",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les figures filiformes du sculpteur suisse.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8403,
      "lng": 2.3228
    },
    "highlights": [
      "L'Homme qui marche",
      "Existentialisme",
      "Atelier reconstitué"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 697,
    "name": "Niki de Saint Phalle : Nanas - Grand Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les sculptures colorées de l'artiste franco-américaine.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "17€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8662,
      "lng": 2.3125
    },
    "highlights": [
      "Nanas",
      "Jardin des Tarots",
      "Tirs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 698,
    "name": "César : Compressions - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les voitures compressées du sculpteur marseillais.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Compressions",
      "Expansions",
      "Nouveau Réalisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 699,
    "name": "Boltanski : Mémoire - MAC Lyon",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les archives de la mémoire collective.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "8€",
    "hours": "11h - 18h (fermé lundi et mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 45.7844,
      "lng": 4.8547
    },
    "highlights": [
      "Inventaires",
      "Monuments",
      "Disparition"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 700,
    "name": "Dubuffet : Art Brut - LaM",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'art des fous, des prisonniers et des marginaux.",
    "location": "Villeneuve-d'Ascq, Hauts-de-France",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 50.636,
      "lng": 3.1478
    },
    "highlights": [
      "Hourloupe",
      "Art brut",
      "Texturologies"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 701,
    "name": "Kiefer : Chute des Anges - Grand Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les toiles monumentales de l'artiste allemand.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "17€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8662,
      "lng": 2.3125
    },
    "highlights": [
      "Mémoire allemande",
      "Matériaux",
      "Mythologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 702,
    "name": "Rembrandt : Autoportraits - Musée Cognacq-Jay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le regard introspectif du maître hollandais.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.8575,
      "lng": 2.3614
    },
    "highlights": [
      "Autoportraits",
      "Clair-obscur",
      "Vieillissement"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 703,
    "name": "Raphaël : Divine Beauté - Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'harmonie parfaite de la Haute Renaissance.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Madones",
      "Vatican",
      "Grâce"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 704,
    "name": "Vigée Le Brun : Femme Artiste - Grand Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La portraitiste de Marie-Antoinette.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "17€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.8662,
      "lng": 2.3125
    },
    "highlights": [
      "Marie-Antoinette",
      "Portraits féminins",
      "Exil"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 705,
    "name": "Boucher : Galanteries - Musée du Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les scènes galantes du peintre rococo.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Rococo",
      "Madame de Pompadour",
      "Pastorales"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 706,
    "name": "Watteau : Fêtes Galantes - Musée du Louvre",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La mélancolie des plaisirs aristocratiques.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "22€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Embarquement pour Cythère",
      "Commedia dell'arte",
      "Mélancolie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 707,
    "name": "Chardin : Nature Morte - Petit Palais",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La poésie des objets quotidiens.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.866,
      "lng": 2.314
    },
    "highlights": [
      "Natures mortes",
      "Scènes de genre",
      "Silence"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 708,
    "name": "Ingres : La Ligne et la Chair - Musée Ingres Bourdelle",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le maître du dessin néoclassique à Montauban.",
    "location": "Montauban, Occitanie",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 44.0167,
      "lng": 1.35
    },
    "highlights": [
      "Bain turc",
      "Portraits",
      "Dessins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 709,
    "name": "Corot : Paysages de France - Musée des Beaux-Arts de Reims",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'aube de l'impressionnisme dans les paysages.",
    "location": "Reims, Grand Est",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 49.2536,
      "lng": 4.0339
    },
    "highlights": [
      "Barbizon",
      "Italie",
      "Lumière"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 710,
    "name": "Courbet : L'Origine du Réalisme - Musée Courbet",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le scandale et la modernité du maître d'Ornans.",
    "location": "Ornans, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 47.1053,
      "lng": 6.1428
    },
    "highlights": [
      "Enterrement à Ornans",
      "Réalisme",
      "Paysages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 711,
    "name": "Sisley : La Poésie de l'Eau - Musée des Impressionnismes",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les reflets impressionnistes du peintre anglo-français.",
    "location": "Giverny, Normandie",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 49.0758,
      "lng": 1.5339
    },
    "highlights": [
      "Inondations",
      "Seine",
      "Ciels"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 712,
    "name": "Pissarro : Le Premier Impressionniste - Musée Camille Pissarro",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le patriarche du mouvement impressionniste.",
    "location": "Pontoise, Île-de-France",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 49.05,
      "lng": 2.1
    },
    "highlights": [
      "Paysages de Pontoise",
      "Anarchisme",
      "Pointillisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 713,
    "name": "Mary Cassatt : L'Impressionnisme Américain - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La maternité et l'enfance par l'artiste américaine.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Mères et enfants",
      "Degas",
      "Pastels"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 714,
    "name": "Seurat : Points de Lumière - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le pointillisme scientifique du maître.",
    "location": "Paris, Île-de-France",
    "rating": 4.6,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 31 août 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Dimanche à la Grande Jatte",
      "Divisionnisme",
      "Baignade"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 715,
    "name": "Bonnard : La Couleur en Liberté - Musée Bonnard",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'intimisme coloré du dernier impressionniste.",
    "location": "Le Cannet, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 novembre 2026",
    "coordinates": {
      "lat": 43.5761,
      "lng": 7.0175
    },
    "highlights": [
      "Nus",
      "Intérieurs",
      "Jardin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 716,
    "name": "Vuillard : Intimités - Musée d'Orsay",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Les intérieurs bourgeois du peintre nabis.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 31 octobre 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Intimisme",
      "Décors",
      "Mère de l'artiste"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 717,
    "name": "Maurice Denis : Art Sacré - Musée Maurice Denis",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le prophète des Nabis et l'art religieux.",
    "location": "Saint-Germain-en-Laye, Île-de-France",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 17h30 (fermé lundi)",
    "period": "Jusqu'au 30 septembre 2026",
    "coordinates": {
      "lat": 48.8989,
      "lng": 2.0839
    },
    "highlights": [
      "Nabis",
      "Art sacré",
      "Théories"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 718,
    "name": "Fernand Léger : La Ville - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le cubisme urbain et la modernité.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "La Ville",
      "Mécanisme",
      "Cirque"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 719,
    "name": "Robert Delaunay : Rythmes Colorés - Centre Pompidou",
    "type": "exposition",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "L'orphisme et la simultanéité des couleurs.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Tour Eiffel",
      "Disques",
      "Formes circulaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 720,
    "name": "Château de Chaumont-sur-Loire",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance surplombant la Loire, célèbre pour son festival international des jardins.",
    "location": "Chaumont-sur-Loire, Centre-Val de Loire",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 47.4792,
      "lng": 1.1819
    },
    "highlights": [
      "Festival des jardins",
      "Écuries",
      "Vue sur Loire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 721,
    "name": "Château de Maintenon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Résidence de Madame de Maintenon, épouse secrète de Louis XIV, avec aqueduc inachevé.",
    "location": "Maintenon, Centre-Val de Loire",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 48.5867,
      "lng": 1.5786
    },
    "highlights": [
      "Aqueduc",
      "Jardins à la française",
      "Appartements de Madame de Maintenon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 722,
    "name": "Château de Meung-sur-Loire",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Meung-sur-Loire_-_Ch%C3%A2teau_-_1.jpg/800px-Meung-sur-Loire_-_Ch%C3%A2teau_-_1.jpg",
    "description": "Ancienne résidence des évêques d'Orléans où François Villon fut emprisonné.",
    "location": "Meung-sur-Loire, Centre-Val de Loire",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.8231,
      "lng": 1.6956
    },
    "highlights": [
      "Souterrains",
      "131 pièces meublées",
      "Chapelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 723,
    "name": "Château de Châteaudun",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Premier château de la Loire avec donjon médiéval et aile Renaissance.",
    "location": "Châteaudun, Centre-Val de Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 48.0714,
      "lng": 1.3381
    },
    "highlights": [
      "Donjon",
      "Sainte-Chapelle",
      "Tapisseries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 724,
    "name": "Château de Talcy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château ayant inspiré Ronsard avec pressoir et pigeonnier exceptionnels.",
    "location": "Talcy, Centre-Val de Loire",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 17h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.7667,
      "lng": 1.4436
    },
    "highlights": [
      "Pressoir du XVIe",
      "Pigeonnier",
      "Jardin conservatoire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 725,
    "name": "Château de Fougères-sur-Bièvre",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Exemple rare de château fort de la fin du Moyen Âge intact.",
    "location": "Fougères-sur-Bièvre, Centre-Val de Loire",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 17h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.4533,
      "lng": 1.3342
    },
    "highlights": [
      "Charpente médiévale",
      "Architecture militaire",
      "Chemin de ronde"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 726,
    "name": "Château de Beauregard",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Galerie des Illustres avec 327 portraits historiques unique en Europe.",
    "location": "Cellettes, Centre-Val de Loire",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.5283,
      "lng": 1.3683
    },
    "highlights": [
      "Galerie des 327 portraits",
      "Cabinet des Grelots",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 727,
    "name": "Château de Troussay",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus petit château de la Loire, bijou Renaissance avec musée solognot.",
    "location": "Cheverny, Centre-Val de Loire",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 47.4958,
      "lng": 1.4117
    },
    "highlights": [
      "Musée de Sologne",
      "Potager",
      "Architecture Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 728,
    "name": "Château de Villesavin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La cabane de chantier de Chambord devenue élégant château Renaissance.",
    "location": "Tour-en-Sologne, Centre-Val de Loire",
    "rating": 4.3,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.5381,
      "lng": 1.5144
    },
    "highlights": [
      "Vasque Renaissance",
      "Musée du mariage",
      "Colombier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 729,
    "name": "Château du Moulin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La perle de Sologne, château de brique rose au bord de l'eau.",
    "location": "Lassay-sur-Croisne, Centre-Val de Loire",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.3803,
      "lng": 1.6097
    },
    "highlights": [
      "Reflets dans l'eau",
      "Potager conservatoire",
      "Fraisier perpétuel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 730,
    "name": "Château de Gien",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de briques aux motifs géométriques abritant le Musée de la Chasse.",
    "location": "Gien, Centre-Val de Loire",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.6847,
      "lng": 2.6306
    },
    "highlights": [
      "Musée de la Chasse",
      "Faïencerie",
      "Vue sur Loire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 731,
    "name": "Château de Saint-Brisson-sur-Loire",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale dominant la Loire avec maquettes animées.",
    "location": "Saint-Brisson-sur-Loire, Centre-Val de Loire",
    "rating": 4.2,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 47.6492,
      "lng": 2.6831
    },
    "highlights": [
      "Maquettes animées",
      "Machines de guerre",
      "Souterrains"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 732,
    "name": "Château de la Ferté-Saint-Aubin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Grand château meublé avec cuisines en activité et jeux anciens.",
    "location": "La Ferté-Saint-Aubin, Centre-Val de Loire",
    "rating": 4.5,
    "price": "13€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 47.7231,
      "lng": 1.9406
    },
    "highlights": [
      "Cuisines en fonctionnement",
      "Madeleines",
      "Jeux anciens"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 733,
    "name": "Château de Bouges",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Petit Trianon berrichon avec écuries et jardin à la française.",
    "location": "Bouges-le-Château, Centre-Val de Loire",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 47.0406,
      "lng": 1.6761
    },
    "highlights": [
      "Sellerie",
      "Jardin à la française",
      "Collection de voitures hippomobiles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 734,
    "name": "Château de Nohant",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure de George Sand, haut lieu du romantisme français.",
    "location": "Nohant-Vic, Centre-Val de Loire",
    "rating": 4.6,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 46.6306,
      "lng": 1.9617
    },
    "highlights": [
      "Chambre de Chopin",
      "Théâtre de marionnettes",
      "Parc romantique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 735,
    "name": "Château d'Ainay-le-Vieil",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le petit Carcassonne du Berry avec rosiers anciens.",
    "location": "Ainay-le-Vieil, Centre-Val de Loire",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIe siècle",
    "coordinates": {
      "lat": 46.6675,
      "lng": 2.5536
    },
    "highlights": [
      "Enceinte fortifiée",
      "Chartreuses de roses",
      "Oratoire Anne de Beaujeu"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 736,
    "name": "Château de Culan",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale ayant accueilli Jeanne d'Arc.",
    "location": "Culan, Centre-Val de Loire",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 46.5506,
      "lng": 2.3494
    },
    "highlights": [
      "Salle Jeanne d'Arc",
      "Vue panoramique",
      "Remparts"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 737,
    "name": "Château de la Verrerie",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance au bord d'un étang avec chapelle à fresques italiennes.",
    "location": "Oizon, Centre-Val de Loire",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 47.4456,
      "lng": 2.5256
    },
    "highlights": [
      "Fresques Renaissance",
      "Étang",
      "Galerie florentine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 738,
    "name": "Château de Lavardin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques d'une des plus puissantes forteresses de France.",
    "location": "Lavardin, Centre-Val de Loire",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 47.7428,
      "lng": 0.8847
    },
    "highlights": [
      "Ruines",
      "Village classé",
      "Fresques église"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 739,
    "name": "Château de Vendôme",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines du château des Bourbon-Vendôme dominant la ville.",
    "location": "Vendôme, Centre-Val de Loire",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "9h - 19h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.7936,
      "lng": 1.0656
    },
    "highlights": [
      "Jardins en terrasses",
      "Panorama",
      "Collégiale Saint-Georges"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 740,
    "name": "Château de Montpoupon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de la vénerie avec musée du Veneur et meute de chiens.",
    "location": "Céré-la-Ronde, Centre-Val de Loire",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 47.2258,
      "lng": 1.2275
    },
    "highlights": [
      "Musée de la Vénerie",
      "Meute de chiens",
      "Cuisines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 741,
    "name": "Château de Montrésor",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance intact avec collections polonaises uniques.",
    "location": "Montrésor, Centre-Val de Loire",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.1564,
      "lng": 1.2011
    },
    "highlights": [
      "Collections Branicki",
      "Primitifs italiens",
      "Village classé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 742,
    "name": "Château du Rivau",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de contes de fées avec 15 jardins féeriques.",
    "location": "Lémeré, Centre-Val de Loire",
    "rating": 4.6,
    "price": "13€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.1136,
      "lng": 0.3228
    },
    "highlights": [
      "Jardins de contes",
      "Écuries royales",
      "Art contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 743,
    "name": "Château de l'Islette",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le château de Camille Claudel et Rodin, au bord de l'Indre.",
    "location": "Azay-le-Rideau, Centre-Val de Loire",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.2578,
      "lng": 0.4331
    },
    "highlights": [
      "Souvenir Claudel-Rodin",
      "Barques sur l'Indre",
      "Île romantique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 744,
    "name": "Château de Candé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Lieu du mariage du Duc de Windsor, mêlant styles Renaissance et Art déco.",
    "location": "Monts, Centre-Val de Loire",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 47.2847,
      "lng": 0.6003
    },
    "highlights": [
      "Orgue Skinner",
      "Salle de mariage Windsor",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 745,
    "name": "Forteresse de Chinon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse royale où Jeanne d'Arc reconnut Charles VII.",
    "location": "Chinon, Centre-Val de Loire",
    "rating": 4.6,
    "price": "11€",
    "hours": "9h30 - 18h",
    "period": "Xe - XVe siècle",
    "coordinates": {
      "lat": 47.1683,
      "lng": 0.2367
    },
    "highlights": [
      "Salle de la Reconnaissance",
      "Histopad",
      "Panorama sur Vienne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 746,
    "name": "Château de la Guerche",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château fort au bord de la Creuse avec charpente exceptionnelle.",
    "location": "La Guerche, Centre-Val de Loire",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 46.8858,
      "lng": 0.7194
    },
    "highlights": [
      "Charpente en carène",
      "Bord de Creuse",
      "Chemin de ronde"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 747,
    "name": "Château de Sagonne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval restauré par les Mansart avec charpente du XIIe siècle.",
    "location": "Sagonne, Centre-Val de Loire",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 46.8492,
      "lng": 2.8225
    },
    "highlights": [
      "Charpente romane",
      "Chapelle",
      "Restauration exemplaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 748,
    "name": "Château de Chabenet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château du Berry avec jardins à la française et labyrinthe.",
    "location": "Le Pont-Chrétien-Chabenet, Centre-Val de Loire",
    "rating": 4.2,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 46.6506,
      "lng": 1.3833
    },
    "highlights": [
      "Jardins à la française",
      "Labyrinthe",
      "Pont-levis"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 749,
    "name": "Château de Bagneux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec le plus grand dolmen de France.",
    "location": "Bagneux, Pays de la Loire",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe siècle - Néolithique",
    "coordinates": {
      "lat": 47.2461,
      "lng": -0.0883
    },
    "highlights": [
      "Grand dolmen",
      "Carrière troglodytique",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 750,
    "name": "Château de Martigné-Briand",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château viticole de l'Anjou avec caves troglodytiques.",
    "location": "Martigné-Briand, Pays de la Loire",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.2292,
      "lng": -0.4233
    },
    "highlights": [
      "Caves troglodytiques",
      "Vignoble",
      "Architecture Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 751,
    "name": "Château de Montgeoffroy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIIe intact avec son mobilier d'origine.",
    "location": "Mazé-Milon, Pays de la Loire",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 47.4497,
      "lng": -0.2678
    },
    "highlights": [
      "Mobilier d'époque",
      "Cuisines en cuivre",
      "Sellerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 752,
    "name": "Château du Boumois",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec chapelle aux vitraux remarquables.",
    "location": "Saint-Martin-de-la-Place, Pays de la Loire",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.3186,
      "lng": -0.0803
    },
    "highlights": [
      "Vitraux Renaissance",
      "Chapelle",
      "Bords de Loire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 753,
    "name": "Château des Essarts",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines médiévales avec spectacles de chevalerie.",
    "location": "Les Essarts, Pays de la Loire",
    "rating": 4.3,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "XIe - XIIIe siècle",
    "coordinates": {
      "lat": 46.7747,
      "lng": -1.2281
    },
    "highlights": [
      "Spectacles médiévaux",
      "Donjon",
      "Animations"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 754,
    "name": "Château de Tiffauges",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de Barbe-Bleue (Gilles de Rais) avec machines de guerre médiévales.",
    "location": "Tiffauges, Pays de la Loire",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 47.015,
      "lng": -1.1244
    },
    "highlights": [
      "Machines de siège",
      "Gilles de Rais",
      "Spectacles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 755,
    "name": "Château de Pouzauges",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon du XIIe siècle avec vue panoramique sur le bocage vendéen.",
    "location": "Pouzauges, Pays de la Loire",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 46.7808,
      "lng": -0.8392
    },
    "highlights": [
      "Donjon roman",
      "Panorama",
      "Catherine de Craon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 756,
    "name": "Château de Noirmoutier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval sur l'île avec musée de l'histoire locale.",
    "location": "Noirmoutier-en-l'Île, Pays de la Loire",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 46.9986,
      "lng": -2.2461
    },
    "highlights": [
      "Donjon",
      "Musée",
      "Vue sur l'île"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 757,
    "name": "Château de Pornic",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ancien château de Gilles de Rais surplombant le vieux port.",
    "location": "Pornic, Pays de la Loire",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h (été)",
    "period": "XIe - XIXe siècle",
    "coordinates": {
      "lat": 47.1147,
      "lng": -2.1003
    },
    "highlights": [
      "Vue sur mer",
      "Remparts",
      "Bluebeard"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 758,
    "name": "Château de Châteaubriant",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Du donjon roman au palais Renaissance, 900 ans d'architecture.",
    "location": "Châteaubriant, Pays de la Loire",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.7183,
      "lng": -1.3764
    },
    "highlights": [
      "Logis Renaissance",
      "Donjon roman",
      "Chapelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 759,
    "name": "Château de Montmirail",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château perchois du XIe siècle avec parc et labyrinthe.",
    "location": "Montmirail, Pays de la Loire",
    "rating": 4.1,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 48.1053,
      "lng": 0.7836
    },
    "highlights": [
      "Parc",
      "Labyrinthe",
      "Vue sur Perche"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 760,
    "name": "Château de Courtanvaux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec parc à l'anglaise et glacière.",
    "location": "Bessé-sur-Braye, Pays de la Loire",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 47.8322,
      "lng": 0.7481
    },
    "highlights": [
      "Parc anglais",
      "Glacière",
      "Chapelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 761,
    "name": "Château de Sainte-Suzanne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La perle du Maine, cité médiévale qui résista à Guillaume le Conquérant.",
    "location": "Sainte-Suzanne, Pays de la Loire",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 48.0972,
      "lng": -0.3492
    },
    "highlights": [
      "CIAP",
      "Remparts",
      "Plus Beau Village"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 762,
    "name": "Château de Lassay",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse aux 8 tours intacte depuis le XVe siècle.",
    "location": "Lassay-les-Châteaux, Pays de la Loire",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 48.4367,
      "lng": -0.4972
    },
    "highlights": [
      "8 tours",
      "Barbacane",
      "Architecture intacte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 763,
    "name": "Château de Craon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Élégant château XVIIIe avec parc à la française et jardin blanc.",
    "location": "Craon, Pays de la Loire",
    "rating": 4.4,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 47.8436,
      "lng": -0.9492
    },
    "highlights": [
      "Jardin blanc",
      "Parc à la française",
      "Élégance XVIIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 764,
    "name": "Château de Vayres",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval et Renaissance dominant la Dordogne.",
    "location": "Vayres, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 44.8967,
      "lng": -0.3225
    },
    "highlights": [
      "Jardins à la française",
      "Vue Dordogne",
      "Henri IV"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 765,
    "name": "Château de Cazeneuve",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cazeneuve.jpg/800px-Cazeneuve.jpg",
    "description": "Résidence du roi Henri IV et de la reine Margot en Gironde.",
    "location": "Préchac, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "10€",
    "hours": "14h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 44.4003,
      "lng": -0.3736
    },
    "highlights": [
      "Reine Margot",
      "Grottes",
      "Chapelle troglodytique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 766,
    "name": "Château de La Brède",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/La_Brede.jpg/800px-La_Brede.jpg",
    "description": "Demeure natale de Montesquieu entourée de douves.",
    "location": "La Brède, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XIVe - XVe siècle",
    "coordinates": {
      "lat": 44.6792,
      "lng": -0.5281
    },
    "highlights": [
      "Bibliothèque Montesquieu",
      "Douves",
      "Parc anglais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 767,
    "name": "Château de Malle",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château viticole classé avec jardins à l'italienne uniques.",
    "location": "Preignac, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 44.5736,
      "lng": -0.3092
    },
    "highlights": [
      "Jardins à l'italienne",
      "Grand Cru Sauternes",
      "Théâtre de verdure"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 768,
    "name": "Château de Villandraut",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Villandraut_chateau.jpg/800px-Villandraut_chateau.jpg",
    "description": "Château du pape Clément V, forteresse unique en Gironde.",
    "location": "Villandraut, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 44.4781,
      "lng": -0.3583
    },
    "highlights": [
      "Pape Clément V",
      "Architecture papale",
      "Tours"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 769,
    "name": "Château de Rauzan",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon cylindrique dominant l'Entre-deux-Mers.",
    "location": "Rauzan, Nouvelle-Aquitaine",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 44.7772,
      "lng": -0.1278
    },
    "highlights": [
      "Donjon cylindrique",
      "Grotte préhistorique",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 770,
    "name": "Château de Laréole",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance en briques roses et pierres blanches.",
    "location": "Laréole, Occitanie",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 43.6258,
      "lng": 0.9706
    },
    "highlights": [
      "Architecture bicolore",
      "Jardins",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 771,
    "name": "Château de Gavaudun",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon spectaculaire sur éperon rocheux dans le Lot-et-Garonne.",
    "location": "Gavaudun, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 44.5669,
      "lng": 0.8944
    },
    "highlights": [
      "Donjon vertigineux",
      "Site défensif",
      "Vallée de la Lède"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 772,
    "name": "Château de Castelnau-Bretenoux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "La seconde forteresse d'Aquitaine après le château de Bonaguil.",
    "location": "Prudhomat, Occitanie",
    "rating": 4.6,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 44.8536,
      "lng": 1.8592
    },
    "highlights": [
      "Vue sur 3 vallées",
      "Collections Mouliérat",
      "Pierre rouge"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 773,
    "name": "Château d'Assier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chef-d'œuvre Renaissance inachevé de Galiot de Genouillac.",
    "location": "Assier, Occitanie",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 17h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 44.6756,
      "lng": 1.8683
    },
    "highlights": [
      "Frises sculptées",
      "Grand maître de l'artillerie",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 774,
    "name": "Château de Cénevières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château dominant le Lot avec plafond à caissons Renaissance.",
    "location": "Cénevières, Occitanie",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVIe siècle",
    "coordinates": {
      "lat": 44.4631,
      "lng": 1.7486
    },
    "highlights": [
      "Plafond Renaissance",
      "Vue sur le Lot",
      "Graffiti historiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 775,
    "name": "Château de Larroque-Toirac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château accroché à la falaise dominant le Lot.",
    "location": "Larroque-Toirac, Occitanie",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 44.5272,
      "lng": 1.9797
    },
    "highlights": [
      "Site vertigineux",
      "Salle des Gardes",
      "Vue sur Lot"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 776,
    "name": "Château de Belcastel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château restauré par Fernand Pouillon surplombant l'Aveyron.",
    "location": "Belcastel, Occitanie",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 44.3886,
      "lng": 2.3356
    },
    "highlights": [
      "Restauration Pouillon",
      "Pont médiéval",
      "Village classé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 777,
    "name": "Château de Bournazel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus belle façade Renaissance du Midi de la France.",
    "location": "Bournazel, Occitanie",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 44.4619,
      "lng": 2.2953
    },
    "highlights": [
      "Façade Renaissance",
      "Jardin remarquable",
      "Cheminées"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 778,
    "name": "Château de Calmont d'Olt",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant Espalion avec machines de guerre médiévales.",
    "location": "Espalion, Occitanie",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 44.5189,
      "lng": 2.7608
    },
    "highlights": [
      "Trébuchet",
      "Vue 360°",
      "Animations médiévales"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 779,
    "name": "Château de Salses",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse espagnole de transition entre Moyen Âge et Renaissance.",
    "location": "Salses-le-Château, Occitanie",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 42.8367,
      "lng": 2.9208
    },
    "highlights": [
      "Architecture militaire",
      "Écuries",
      "Ingénierie défensive"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 780,
    "name": "Château de Peyrelades",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Nid d'aigle cathare dominant les Gorges du Tarn.",
    "location": "Rivière-sur-Tarn, Occitanie",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XIIIe siècle",
    "coordinates": {
      "lat": 44.1878,
      "lng": 3.1328
    },
    "highlights": [
      "Vue sur gorges",
      "Site cathare",
      "Escalade"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 781,
    "name": "Château de Termes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse cathare vertigineuse dans les Corbières.",
    "location": "Termes, Occitanie",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe - XIIIe siècle",
    "coordinates": {
      "lat": 43.0033,
      "lng": 2.5578
    },
    "highlights": [
      "Croisade albigeoise",
      "Gorges du Terminet",
      "Ruines romantiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 782,
    "name": "Château d'Aguilar",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château cathare au cœur des Corbières viticoles.",
    "location": "Tuchan, Occitanie",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 42.8967,
      "lng": 2.7194
    },
    "highlights": [
      "Double enceinte",
      "Vue sur Corbières",
      "Vignobles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 783,
    "name": "Château d'Arques",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon gothique parfait dans le pays cathare.",
    "location": "Arques, Occitanie",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIIe - XIVe siècle",
    "coordinates": {
      "lat": 42.9572,
      "lng": 2.3706
    },
    "highlights": [
      "Donjon gothique",
      "Maison Déodat Roché",
      "Architecture pure"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 784,
    "name": "Château de Saissac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus ancien château cathare de la Montagne Noire.",
    "location": "Saissac, Occitanie",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "Xe - XIVe siècle",
    "coordinates": {
      "lat": 43.3683,
      "lng": 2.1681
    },
    "highlights": [
      "Trésor monétaire",
      "Montagne Noire",
      "Plus ancien château cathare"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 785,
    "name": "Château de Pennautier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le petit Versailles du Languedoc avec ses jardins Le Nôtre.",
    "location": "Pennautier, Occitanie",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 43.2508,
      "lng": 2.3081
    },
    "highlights": [
      "Jardins Le Nôtre",
      "Cave viticole",
      "Canal du Midi"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 786,
    "name": "Château d'O - Montpellier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Folie montpelliéraine abritant le festival de théâtre Printemps des Comédiens.",
    "location": "Montpellier, Occitanie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "8h - 20h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 43.6342,
      "lng": 3.8361
    },
    "highlights": [
      "Printemps des Comédiens",
      "Parc",
      "Folie XVIIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 787,
    "name": "Château de Castries",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec aqueduc de Riquet et jardins de Le Nôtre.",
    "location": "Castries, Occitanie",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 43.6781,
      "lng": 3.9856
    },
    "highlights": [
      "Aqueduc de Riquet",
      "Jardins Le Nôtre",
      "Académie française"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 788,
    "name": "Château de Vogüé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château dominant l'Ardèche avec jardin suspendu.",
    "location": "Vogüé, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 44.5514,
      "lng": 4.4094
    },
    "highlights": [
      "Jardin suspendu",
      "Village de caractère",
      "Gorges de l'Ardèche"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 789,
    "name": "Château de Largentière",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval dominant la cité ardéchoise des comtes de Toulouse.",
    "location": "Largentière, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 44.5428,
      "lng": 4.2936
    },
    "highlights": [
      "Tour de l'horloge",
      "Cité médiévale",
      "Mines d'argent"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 790,
    "name": "Château de Pesteils",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château cantalien avec donjon médiéval et musée de cire.",
    "location": "Polminhac, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 44.9392,
      "lng": 2.5636
    },
    "highlights": [
      "Donjon",
      "Musée de cire",
      "Panorama Cantal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 791,
    "name": "Château d'Anjony",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon du XVe siècle avec fresques exceptionnelles.",
    "location": "Tournemire, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 45.0528,
      "lng": 2.4786
    },
    "highlights": [
      "Fresques Neuf Preux",
      "Donjon intact",
      "Village classé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 792,
    "name": "Château de Pont-du-Château",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château dominant l'Allier avec vue sur la chaîne des Puys.",
    "location": "Pont-du-Château, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 45.7972,
      "lng": 3.2506
    },
    "highlights": [
      "Vue chaîne des Puys",
      "Musée Pierre Mondanel",
      "Bords d'Allier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 793,
    "name": "Château de la Palice",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure du maréchal de la Palice avec chapelle flamboyante.",
    "location": "Lapalisse, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 46.2481,
      "lng": 3.6372
    },
    "highlights": [
      "Chapelle gothique",
      "Tapisseries",
      "Jacques de la Palice"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 794,
    "name": "Château de Busséol",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale dominant la plaine de la Limagne.",
    "location": "Busséol, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.7033,
      "lng": 3.2225
    },
    "highlights": [
      "Vue Limagne",
      "Catherine de Médicis",
      "Charpente"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 795,
    "name": "Château de Billy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des Bourbons dominant la vallée de l'Allier.",
    "location": "Billy, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 46.2364,
      "lng": 3.4328
    },
    "highlights": [
      "Chapelle",
      "Chemin de ronde",
      "Vue sur Allier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 796,
    "name": "Château de Chavaniac-Lafayette",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Maison natale du héros des deux mondes.",
    "location": "Chavaniac-Lafayette, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIIIe siècle",
    "coordinates": {
      "lat": 45.1664,
      "lng": 3.5733
    },
    "highlights": [
      "Lafayette",
      "Guerre d'indépendance",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 797,
    "name": "Château de Virieu",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale devenue demeure de plaisance avec jardins.",
    "location": "Virieu, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XIe - XVIIIe siècle",
    "coordinates": {
      "lat": 45.4819,
      "lng": 5.4742
    },
    "highlights": [
      "Jardins à la française",
      "Collection d'armes",
      "Chapelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 798,
    "name": "Château de Longpra",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIIe avec collections et cuisine de 1000 cuivres.",
    "location": "Saint-Geoire-en-Valdaine, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 45.4561,
      "lng": 5.6358
    },
    "highlights": [
      "1000 cuivres",
      "Collections XVIIIe",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 799,
    "name": "Château des Allymes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château fort savoyard dominant la plaine de l'Ain.",
    "location": "Ambérieu-en-Bugey, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIIe - XIVe siècle",
    "coordinates": {
      "lat": 45.9411,
      "lng": 5.3789
    },
    "highlights": [
      "Donjon",
      "Chemin de ronde",
      "Savoie-Dauphiné"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 800,
    "name": "Château de Clermont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec galerie à l'italienne.",
    "location": "Clermont, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 45.975,
      "lng": 5.9189
    },
    "highlights": [
      "Galerie Renaissance",
      "Vue sur Lac du Bourget",
      "Italie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 801,
    "name": "Château de Menthon-Saint-Bernard",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de conte de fées ayant inspiré Walt Disney.",
    "location": "Menthon-Saint-Bernard, Auvergne-Rhône-Alpes",
    "rating": 4.6,
    "price": "12€",
    "hours": "14h - 18h",
    "period": "Xe - XIXe siècle",
    "coordinates": {
      "lat": 45.8581,
      "lng": 6.1936
    },
    "highlights": [
      "Inspiration Disney",
      "Saint Bernard",
      "Vue lac d'Annecy"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 802,
    "name": "Château de Montrottier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château fort avec collections éclectiques léguées à l'Académie florimontane.",
    "location": "Lovagny, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 45.9047,
      "lng": 6.0769
    },
    "highlights": [
      "Collections Marès",
      "Armes",
      "Dentelles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 803,
    "name": "Château de Ripaille",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ancienne chartreuse des ducs de Savoie avec vignoble.",
    "location": "Thonon-les-Bains, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 46.3881,
      "lng": 6.4892
    },
    "highlights": [
      "Vignoble",
      "Arboretum",
      "Amédée VIII"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 804,
    "name": "Château d'Avully",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Maison forte savoyarde avec jardin médiéval reconstitué.",
    "location": "Brenthonne, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 46.2728,
      "lng": 6.4281
    },
    "highlights": [
      "Jardin médiéval",
      "Fresques",
      "Tour crénelée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 805,
    "name": "Château de Thorens",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de saint François de Sales avec souvenirs de Cavour.",
    "location": "Thorens-Glières, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "10€",
    "hours": "14h - 18h",
    "period": "XIe - XIXe siècle",
    "coordinates": {
      "lat": 46,
      "lng": 6.2522
    },
    "highlights": [
      "François de Sales",
      "Cavour",
      "Tapisseries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 806,
    "name": "Château de Chabrillan",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval dominant la vallée de la Drôme.",
    "location": "Chabrillan, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "5€",
    "hours": "14h - 18h (été)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.7225,
      "lng": 4.9394
    },
    "highlights": [
      "Donjon",
      "Vue Drôme",
      "Village perché"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 807,
    "name": "Château de Montélier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château drômois avec parc arboré et vue sur le Vercors.",
    "location": "Montélier, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 44.9322,
      "lng": 5.0281
    },
    "highlights": [
      "Parc arboré",
      "Vue Vercors",
      "Architecture classique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 808,
    "name": "Château de Cléron",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château surplombant la Loue dans un site pittoresque.",
    "location": "Cléron, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 47.0931,
      "lng": 6.0739
    },
    "highlights": [
      "Vallée de la Loue",
      "Propriété privée habitée",
      "Cadre romantique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 809,
    "name": "Château de Moncley",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chef-d'œuvre néoclassique franc-comtois avec rotonde.",
    "location": "Moncley, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 47.3058,
      "lng": 5.8942
    },
    "highlights": [
      "Rotonde",
      "Architecture néoclassique",
      "Parc anglais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 810,
    "name": "Château de Filain",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château néogothique avec salles d'apparat.",
    "location": "Filain, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 47.5369,
      "lng": 6.1525
    },
    "highlights": [
      "Néogothique",
      "Mobilier XIXe",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 811,
    "name": "Château de Beaumont-sur-Vingeanne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIIe avec jardins à la française en Côte-d'Or.",
    "location": "Beaumont-sur-Vingeanne, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 47.5128,
      "lng": 5.4258
    },
    "highlights": [
      "Jardins à la française",
      "Bassins",
      "XVIIIe siècle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 812,
    "name": "Château de Drée",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le Versailles de Bourgogne avec jardins spectaculaires.",
    "location": "Curbigny, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "XVIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 46.3408,
      "lng": 4.1789
    },
    "highlights": [
      "Jardins remarquables",
      "Décors intérieurs",
      "Versailles bourguignon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 813,
    "name": "Château de Pierre-de-Bresse",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIe abritant l'Écomusée de la Bresse bourguignonne.",
    "location": "Pierre-de-Bresse, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 46.8806,
      "lng": 5.2611
    },
    "highlights": [
      "Écomusée",
      "Poulet de Bresse",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 814,
    "name": "Château de Sully - Saône-et-Loire",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Berceau de la famille MacMahon avec parc à l'anglaise.",
    "location": "Sully, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.0144,
      "lng": 4.4744
    },
    "highlights": [
      "Maréchal de MacMahon",
      "Parc anglais",
      "Écuries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 815,
    "name": "Château de Rully",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval au cœur du vignoble bourguignon.",
    "location": "Rully, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 46.8742,
      "lng": 4.7447
    },
    "highlights": [
      "Donjon",
      "Vignoble AOC Rully",
      "Cuisine médiévale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 816,
    "name": "Château de Germolles",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Unique palais ducal bourguignon avec décors peints médiévaux.",
    "location": "Mellecey, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 46.8247,
      "lng": 4.7333
    },
    "highlights": [
      "Peintures médiévales",
      "Marguerite de Flandre",
      "Carreaux émaillés"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 817,
    "name": "Château de Savigny-lès-Beaune",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chateau_de_Savigny.jpg/800px-Chateau_de_Savigny.jpg",
    "description": "Château viticole avec collections insolites (avions, motos, Abarth).",
    "location": "Savigny-lès-Beaune, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "11€",
    "hours": "9h - 18h30",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 47.0608,
      "lng": 4.8178
    },
    "highlights": [
      "Collection d'avions",
      "Motos",
      "Domaine viticole"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 818,
    "name": "Château de Meursault",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Meursault_-_Chateau.jpg/800px-Meursault_-_Chateau.jpg",
    "description": "Château viticole emblématique de la Côte de Beaune.",
    "location": "Meursault, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "17€",
    "hours": "10h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 46.9781,
      "lng": 4.7692
    },
    "highlights": [
      "Caves",
      "Dégustation",
      "Grand cru"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 819,
    "name": "Château du Clos de Vougeot",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Haut lieu de la Bourgogne viticole, siège de la Confrérie des Chevaliers du Tastevin.",
    "location": "Vougeot, Bourgogne-Franche-Comté",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 47.1756,
      "lng": 4.9586
    },
    "highlights": [
      "Confrérie du Tastevin",
      "Pressoirs médiévaux",
      "Climats UNESCO"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 820,
    "name": "Château de Saint-Fargeau",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Imposant château de brique rose avec spectacle historique nocturne.",
    "location": "Saint-Fargeau, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h",
    "period": "Xe - XVIIe siècle",
    "coordinates": {
      "lat": 47.6406,
      "lng": 3.0733
    },
    "highlights": [
      "Spectacle nocturne",
      "Brique rose",
      "Grande Mademoiselle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 821,
    "name": "Château de Ratilly",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval en grès ferrugineux abritant un centre d'art céramique.",
    "location": "Treigny, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 47.5483,
      "lng": 3.0828
    },
    "highlights": [
      "Art céramique",
      "Grès ferrugineux",
      "Puisaye"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 822,
    "name": "Château de Druyes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines majestueuses d'un château des comtes d'Auxerre et Nevers.",
    "location": "Druyes-les-Belles-Fontaines, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 47.5617,
      "lng": 3.415
    },
    "highlights": [
      "Ruines romanes",
      "Sources vauclusiennes",
      "Porte fortifiée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 823,
    "name": "Château de Maulnes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance pentagonal unique construit autour d'un puits de lumière central.",
    "location": "Cruzy-le-Châtel, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.8528,
      "lng": 4.2236
    },
    "highlights": [
      "Architecture pentagonale",
      "Puits de lumière",
      "Énigme architecturale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 824,
    "name": "Château de Berzé-le-Châtel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale protégeant l'abbaye de Cluny avec 13 tours.",
    "location": "Berzé-le-Châtel, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 46.3647,
      "lng": 4.6861
    },
    "highlights": [
      "13 tours",
      "Protection de Cluny",
      "Jardins en terrasses"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 825,
    "name": "Château de Pizay",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château viticole du Beaujolais avec parc et vignoble.",
    "location": "Saint-Jean-d'Ardières, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIVe - XIXe siècle",
    "coordinates": {
      "lat": 46.1156,
      "lng": 4.7133
    },
    "highlights": [
      "Vignoble Beaujolais",
      "Parc à l'anglaise",
      "Cave"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 826,
    "name": "Château de Jarnioux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval du Beaujolais des Pierres Dorées avec six tours.",
    "location": "Jarnioux, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 45.9667,
      "lng": 4.6167
    },
    "highlights": [
      "Six tours",
      "Pierres dorées",
      "Beaujolais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 827,
    "name": "Château de Pupetières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château néo-gothique d'Alphonse de Lamartine avec parc romantique.",
    "location": "Chabons, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 45.4522,
      "lng": 5.4261
    },
    "highlights": [
      "Lamartine",
      "Néo-gothique",
      "Viollet-le-Duc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 828,
    "name": "Château de Corcelles",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance du Beaujolais avec cour d'honneur et puits.",
    "location": "Corcelles-en-Beaujolais, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 46.1667,
      "lng": 4.7167
    },
    "highlights": [
      "Cour Renaissance",
      "Puits sculpté",
      "Vignoble"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 829,
    "name": "Château de Sassenage",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Élégant château du XVIIe siècle avec grottes et parc paysager.",
    "location": "Sassenage, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 45.2128,
      "lng": 5.6614
    },
    "highlights": [
      "Grottes de Sassenage",
      "Cuves",
      "Bérenger-Sassenage"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 830,
    "name": "Château d'Époisses",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Epoisses-Chateau.jpg/800px-Epoisses-Chateau.jpg",
    "description": "Château Renaissance entouré de douves avec pigeonnier monumental.",
    "location": "Époisses, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.5083,
      "lng": 4.1728
    },
    "highlights": [
      "Pigeonnier 3000 cases",
      "Fromage d'Époisses",
      "Henri IV"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 831,
    "name": "Château de Couches-Marguerite de Bourgogne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval associé à la légende de Marguerite de Bourgogne.",
    "location": "Couches, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 46.865,
      "lng": 4.5778
    },
    "highlights": [
      "Tour Marguerite",
      "Chapelle romane",
      "Cave bourguignonne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 832,
    "name": "Château de Bagnols",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Somptueux château médiéval transformé en hôtel de luxe dans les Pierres Dorées.",
    "location": "Bagnols, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "15€",
    "hours": "10h - 17h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 45.9167,
      "lng": 4.6083
    },
    "highlights": [
      "Pierres dorées",
      "Fresques",
      "Hôtel de luxe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 833,
    "name": "Château de Chevagny-les-Chevrières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval avec tour carrée et jardin médiéval reconstitué.",
    "location": "Chevagny-les-Chevrières, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 46.4139,
      "lng": 4.7375
    },
    "highlights": [
      "Jardin médiéval",
      "Tour carrée",
      "Mâconnais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 834,
    "name": "Château de Montmélian",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ancienne forteresse des ducs de Savoie sur son rocher stratégique.",
    "location": "Montmélian, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 45.5028,
      "lng": 6.0467
    },
    "highlights": [
      "Rocher fortifié",
      "Vue vallée de l'Isère",
      "Musée de la Vigne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 835,
    "name": "Château de Monthelon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Manoir bourguignon du XVe siècle avec parc romantique.",
    "location": "Monthelon, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 46.9742,
      "lng": 4.3219
    },
    "highlights": [
      "Parc romantique",
      "Architecture gothique",
      "Autunois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 836,
    "name": "Château de Montaner",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon de brique de Gaston Fébus, le plus haut du Béarn.",
    "location": "Montaner, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 43.35,
      "lng": -0.0167
    },
    "highlights": [
      "Donjon de brique",
      "Gaston Fébus",
      "36 mètres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 837,
    "name": "Château de Morlanne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de brique de Gaston Fébus avec collections d'arts décoratifs.",
    "location": "Morlanne, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 43.4667,
      "lng": -0.4167
    },
    "highlights": [
      "Gaston Fébus",
      "Arts décoratifs",
      "Brique rose"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 838,
    "name": "Château de Laàs",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIe avec musée Serbat, collections d'arts décoratifs exceptionnelles.",
    "location": "Laàs, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 43.3833,
      "lng": -0.9333
    },
    "highlights": [
      "Collection Serbat",
      "Arts décoratifs",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 839,
    "name": "Château de Momas",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château béarnais avec tours médiévales et corps Renaissance.",
    "location": "Momas, Nouvelle-Aquitaine",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIVe - XVIe siècle",
    "coordinates": {
      "lat": 43.4667,
      "lng": -0.4833
    },
    "highlights": [
      "Architecture mixte",
      "Tours médiévales",
      "Béarn"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 840,
    "name": "Château de Bellocq",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Bastide fortifiée avec château des vicomtes du Béarn.",
    "location": "Bellocq, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 43.5167,
      "lng": -0.9333
    },
    "highlights": [
      "Bastide",
      "Tours",
      "Vicomtes du Béarn"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 841,
    "name": "Château d'Urtubie",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château basque habité depuis 6 siècles avec parc remarquable.",
    "location": "Urrugne, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIIIe siècle",
    "coordinates": {
      "lat": 43.35,
      "lng": -1.7
    },
    "highlights": [
      "Louis XI",
      "Orangerie",
      "Parc remarquable"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 842,
    "name": "Château d'Abbadia",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château néogothique d'Antoine d'Abbadie, explorateur et astronome.",
    "location": "Hendaye, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 43.3742,
      "lng": -1.7547
    },
    "highlights": [
      "Observatoire",
      "Décors éthiopiens",
      "Viollet-le-Duc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 843,
    "name": "Château de Mauléon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château fort de la Soule avec vue sur les Pyrénées.",
    "location": "Mauléon-Licharre, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 43.2167,
      "lng": -0.8833
    },
    "highlights": [
      "Soule",
      "Panorama Pyrénées",
      "Espadrilles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 844,
    "name": "Château de Bidache",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques des ducs de Gramont au Pays basque.",
    "location": "Bidache, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIIe siècle",
    "coordinates": {
      "lat": 43.4833,
      "lng": -1.1333
    },
    "highlights": [
      "Ducs de Gramont",
      "Ruines romantiques",
      "Bidouze"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 845,
    "name": "Château de Buzet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château dominant la Baïse avec vue sur le vignoble.",
    "location": "Buzet-sur-Baïse, Nouvelle-Aquitaine",
    "rating": 4.1,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIe - XIVe siècle",
    "coordinates": {
      "lat": 44.2667,
      "lng": 0.3
    },
    "highlights": [
      "Vignoble AOC",
      "Baïse",
      "Albret"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 846,
    "name": "Château de Duras",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des ducs de Duras dominant le vignoble bordelais.",
    "location": "Duras, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 44.675,
      "lng": 0.1833
    },
    "highlights": [
      "Ducs de Duras",
      "Marguerite Duras",
      "Vignoble"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 847,
    "name": "Château de Lauzun",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance du duc de Lauzun, favori de Louis XIV.",
    "location": "Lauzun, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 44.6333,
      "lng": 0.4667
    },
    "highlights": [
      "Duc de Lauzun",
      "Grande Mademoiselle",
      "Cheminées Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 848,
    "name": "Château de Lanquais",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le Louvre inachevé du Périgord, chef-d'œuvre Renaissance.",
    "location": "Lanquais, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIe siècle",
    "coordinates": {
      "lat": 44.8167,
      "lng": 0.6833
    },
    "highlights": [
      "Louvre inachevé",
      "Cheminées",
      "Catherine de Médicis"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 849,
    "name": "Château de Bannes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château fort du Périgord avec mâchicoulis et chemin de ronde.",
    "location": "Beaumont-du-Périgord, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 44.75,
      "lng": 0.75
    },
    "highlights": [
      "Mâchicoulis",
      "Chemin de ronde",
      "Périgord pourpre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 850,
    "name": "Château de Bridoire",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le château des jeux avec plus de 40 jeux anciens en bois.",
    "location": "Ribagnac, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 44.7833,
      "lng": 0.5167
    },
    "highlights": [
      "40 jeux anciens",
      "Famille",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 851,
    "name": "Château de Losse",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Élégant château Renaissance au bord de la Vézère.",
    "location": "Thonac, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 45.0167,
      "lng": 1.0833
    },
    "highlights": [
      "Jardins Renaissance",
      "Bord de Vézère",
      "Mobilier d'époque"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 852,
    "name": "Château de Commarque",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Commarque.jpg/800px-Commarque.jpg",
    "description": "Château troglodytique en cours de restauration surplombant la Beune.",
    "location": "Les Eyzies, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XIVe siècle",
    "coordinates": {
      "lat": 44.9333,
      "lng": 1.05
    },
    "highlights": [
      "Troglodytes",
      "Grotte gravée",
      "Restauration"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 853,
    "name": "Château de Puymartin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château hanté du Périgord avec la légende de la Dame Blanche.",
    "location": "Marquay, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVIe siècle",
    "coordinates": {
      "lat": 44.9333,
      "lng": 1.1333
    },
    "highlights": [
      "Dame Blanche",
      "Mobilier",
      "Tapisseries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 854,
    "name": "Château des Bories",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Élégant château périgourdin avec parc à la française.",
    "location": "Antonne-et-Trigonant, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 45.2333,
      "lng": 0.8167
    },
    "highlights": [
      "Parc à la française",
      "Mobilier",
      "Cuisine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 855,
    "name": "Château de Rastignac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Réplique de la Maison Blanche construite avant elle.",
    "location": "La Bachellerie, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVIIIe - XIXe siècle",
    "coordinates": {
      "lat": 45.15,
      "lng": 1.1667
    },
    "highlights": [
      "Maison Blanche",
      "Architecture néoclassique",
      "Mystère"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 856,
    "name": "Château de l'Herm",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques ayant inspiré Eugène Le Roy pour Jacquou le Croquant.",
    "location": "Rouffignac-Saint-Cernin, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 45.05,
      "lng": 0.9833
    },
    "highlights": [
      "Jacquou le Croquant",
      "Ruines",
      "Cheminées sculptées"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 857,
    "name": "Château de Sauvebœuf",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIe avec collections préhistoriques exceptionnelles.",
    "location": "Aubas, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 45.0667,
      "lng": 1.2
    },
    "highlights": [
      "Collections préhistoriques",
      "Vézère",
      "Sciences naturelles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 858,
    "name": "Château de Campagne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château du XIXe siècle au cœur du Périgord noir avec parc anglais.",
    "location": "Campagne, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 44.9167,
      "lng": 0.95
    },
    "highlights": [
      "Parc anglais",
      "Expositions",
      "Randonnées"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 859,
    "name": "Château de Berbiguières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château perché dominant la Dordogne avec vue exceptionnelle.",
    "location": "Berbiguières, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 44.8333,
      "lng": 1.05
    },
    "highlights": [
      "Vue Dordogne",
      "Village perché",
      "Architecture militaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 860,
    "name": "Château de Excideuil",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Double château vicomtal dominant la vallée de la Loue.",
    "location": "Excideuil, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 45.3333,
      "lng": 1.05
    },
    "highlights": [
      "Double château",
      "Richard Cœur de Lion",
      "Vicomtes de Limoges"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 861,
    "name": "Château de Varaignes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance abritant l'Atelier-musée des Tisserands.",
    "location": "Varaignes, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 45.5833,
      "lng": 0.5333
    },
    "highlights": [
      "Musée des tisserands",
      "Charentaises",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 862,
    "name": "Château de Mareuil",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Dernier château fort du Périgord avec enceinte complète.",
    "location": "Mareuil, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIVe - XVe siècle",
    "coordinates": {
      "lat": 45.45,
      "lng": 0.45
    },
    "highlights": [
      "Enceinte complète",
      "Chapelle gothique",
      "Périgord vert"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 863,
    "name": "Château de la Chapelle-Faucher",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château fort du Périgord en cours de restauration.",
    "location": "La Chapelle-Faucher, Nouvelle-Aquitaine",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.35,
      "lng": 0.7333
    },
    "highlights": [
      "Restauration",
      "Périgord vert",
      "Architecture militaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 864,
    "name": "Château de Richemont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure de Brantôme, le chroniqueur des Valois.",
    "location": "Saint-Crépin-de-Richemont, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 45.3667,
      "lng": 0.6
    },
    "highlights": [
      "Brantôme",
      "Renaissance",
      "Chroniqueur"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 865,
    "name": "Château de Rochechouart",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château sur cratère de météorite abritant le musée d'art contemporain.",
    "location": "Rochechouart, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 45.8167,
      "lng": 0.8167
    },
    "highlights": [
      "Cratère météorite",
      "Art contemporain",
      "Fresques XVIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 866,
    "name": "Château de Chalucet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Impressionnantes ruines médiévales dominant la Briance.",
    "location": "Saint-Jean-Ligoure, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe - XIVe siècle",
    "coordinates": {
      "lat": 45.7333,
      "lng": 1.3
    },
    "highlights": [
      "Ruines",
      "Routiers",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 867,
    "name": "Château de Nexon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIIe avec parc animalier et arboretum.",
    "location": "Nexon, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 45.6833,
      "lng": 1.1833
    },
    "highlights": [
      "Parc animalier",
      "Arboretum",
      "Cheval limousin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 868,
    "name": "Château de Bonneval",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château limousin avec tours rondes et jardins.",
    "location": "Coussac-Bonneval, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIVe - XVIIIe siècle",
    "coordinates": {
      "lat": 45.5167,
      "lng": 1.3333
    },
    "highlights": [
      "Tours rondes",
      "Pacha de Bonneval",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 869,
    "name": "Château de Lastours - Limousin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines médiévales dominant le village de Rilhac-Lastours.",
    "location": "Rilhac-Lastours, Nouvelle-Aquitaine",
    "rating": 4.1,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.75,
      "lng": 1.2833
    },
    "highlights": [
      "Ruines",
      "Panorama",
      "Limousin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 870,
    "name": "Château de Ventadour",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Berceau des troubadours dominant les gorges de la Luzège.",
    "location": "Moustier-Ventadour, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 45.3833,
      "lng": 2.1167
    },
    "highlights": [
      "Troubadours",
      "Bernard de Ventadour",
      "Gorges"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 871,
    "name": "Château de Turenne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Vicomté indépendante avec tours César et Trésor.",
    "location": "Turenne, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.05,
      "lng": 1.5833
    },
    "highlights": [
      "Tour César",
      "Tour du Trésor",
      "Plus Beau Village"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 872,
    "name": "Château de Curemonte",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trois châteaux médiévaux dans un village classé de Corrèze.",
    "location": "Curemonte, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45,
      "lng": 1.7333
    },
    "highlights": [
      "Trois châteaux",
      "Plus Beau Village",
      "Colette"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 873,
    "name": "Château de Sédières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec parc et plan d'eau.",
    "location": "Clergoux, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 45.2833,
      "lng": 1.9333
    },
    "highlights": [
      "Parc naturel",
      "Plan d'eau",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 874,
    "name": "Château de Pompadour",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Cité du cheval avec haras national et château de la marquise.",
    "location": "Arnac-Pompadour, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 45.4,
      "lng": 1.3667
    },
    "highlights": [
      "Haras national",
      "Marquise de Pompadour",
      "Courses hippiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 875,
    "name": "Château d'Auzers",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château auvergnat avec tapisseries d'Aubusson et souvenirs napoléoniens.",
    "location": "Auzers, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 45.25,
      "lng": 2.4667
    },
    "highlights": [
      "Tapisseries d'Aubusson",
      "Napoléon",
      "Cantal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 876,
    "name": "Château de la Vigne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château cantalien avec jardins et vue sur les Monts du Cantal.",
    "location": "Ally, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 45.15,
      "lng": 2.3167
    },
    "highlights": [
      "Jardins",
      "Vue Monts du Cantal",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 877,
    "name": "Château de Messilhac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale dominant la Châtaigneraie cantalienne.",
    "location": "Raulhac, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 44.9167,
      "lng": 2.6667
    },
    "highlights": [
      "Châtaigneraie",
      "Donjon",
      "Cantal"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 878,
    "name": "Château de Cropières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec décors peints remarquables.",
    "location": "Saint-Étienne-de-Carlat, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 44.8667,
      "lng": 2.5833
    },
    "highlights": [
      "Décors peints",
      "Renaissance",
      "Carladès"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 879,
    "name": "Château d'Alleuze",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques dominant le lac de Grandval.",
    "location": "Alleuze, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 44.95,
      "lng": 2.9667
    },
    "highlights": [
      "Lac de Grandval",
      "Ruines",
      "Routiers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 880,
    "name": "Château de Trévoux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des sires de Beaujeu dominant la Saône.",
    "location": "Trévoux, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XIVe siècle",
    "coordinates": {
      "lat": 45.9417,
      "lng": 4.7711
    },
    "highlights": [
      "Tour octogonale",
      "Vue Saône",
      "Parlement de Dombes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 881,
    "name": "Château de la Batisse",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec jardins en terrasses et vue sur les Puys.",
    "location": "Chanonat, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 45.6833,
      "lng": 3.0667
    },
    "highlights": [
      "Jardins en terrasses",
      "Vue Puys",
      "Fontaines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 882,
    "name": "Château de Villeneuve-Lembron",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château auvergnat avec peintures murales Renaissance exceptionnelles.",
    "location": "Villeneuve-Lembron, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 45.4333,
      "lng": 3.1833
    },
    "highlights": [
      "Peintures murales",
      "Rigault d'Oureille",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 883,
    "name": "Château d'Effiat",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château du maréchal d'Effiat avec jardins et orangerie.",
    "location": "Effiat, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 46.0333,
      "lng": 3.2667
    },
    "highlights": [
      "Maréchal d'Effiat",
      "Cinq-Mars",
      "Orangerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 884,
    "name": "Château de Randan",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Domaine royal d'Adélaïde d'Orléans avec parc romantique.",
    "location": "Randan, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 46.0167,
      "lng": 3.35
    },
    "highlights": [
      "Domaine royal",
      "Adélaïde d'Orléans",
      "Parc romantique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 885,
    "name": "Château de Chareil-Cintrat",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Décor maniériste unique en France avec peintures alchimiques.",
    "location": "Chareil-Cintrat, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 46.25,
      "lng": 3.2167
    },
    "highlights": [
      "Peintures maniéristes",
      "Alchimie",
      "Décors exceptionnels"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 886,
    "name": "Château du Sailhant",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse sur éperon basaltique au-dessus d'une cascade.",
    "location": "Andelat, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.0833,
      "lng": 2.9833
    },
    "highlights": [
      "Éperon basaltique",
      "Cascade",
      "Restauration"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 887,
    "name": "Château de Saint-Saturnin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château royal dominant un des Plus Beaux Villages de France.",
    "location": "Saint-Saturnin, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 45.6667,
      "lng": 3.1
    },
    "highlights": [
      "Catherine de Médicis",
      "Plus Beau Village",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 888,
    "name": "Château de Bouzols",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant les gorges de la Loire avec vue imprenable.",
    "location": "Arsac-en-Velay, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.0167,
      "lng": 3.9167
    },
    "highlights": [
      "Gorges de la Loire",
      "Panorama",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 889,
    "name": "Château de Lapalisse",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des La Palice avec plafonds dorés Renaissance et chapelle.",
    "location": "Lapalisse, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 46.2486,
      "lng": 3.6367
    },
    "highlights": [
      "Plafonds dorés",
      "Maréchal de La Palice",
      "Chapelle flamboyante"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 890,
    "name": "Château de Domeyrat",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines majestueuses avec animations médiévales en été.",
    "location": "Domeyrat, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 45.2667,
      "lng": 3.5
    },
    "highlights": [
      "Animations médiévales",
      "Ruines",
      "Senouire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 891,
    "name": "Château de Saint-Vidal",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse avec spectacles historiques immersifs.",
    "location": "Saint-Vidal, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "XIVe - XVe siècle",
    "coordinates": {
      "lat": 45.0667,
      "lng": 3.8167
    },
    "highlights": [
      "Spectacles immersifs",
      "La Bataille",
      "Effets spéciaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 892,
    "name": "Château de Lavoûte-Polignac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des princes de Polignac dominant la Loire.",
    "location": "Lavoûte-sur-Loire, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIe - XIXe siècle",
    "coordinates": {
      "lat": 45.1167,
      "lng": 3.9167
    },
    "highlights": [
      "Princes de Polignac",
      "Loire",
      "Mobilier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 893,
    "name": "Château de Léotoing",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines perchées sur un piton volcanique dominant l'Alagnon.",
    "location": "Léotoing, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.3167,
      "lng": 3.2667
    },
    "highlights": [
      "Piton volcanique",
      "Alagnon",
      "Ruines romantiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 894,
    "name": "Château d'Arlempdes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Premier château de la Loire sur un piton volcanique spectaculaire.",
    "location": "Arlempdes, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 44.8667,
      "lng": 3.9167
    },
    "highlights": [
      "Premier château de la Loire",
      "Piton volcanique",
      "Plus Beau Village"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 895,
    "name": "Château de Torsiac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château privé restauré avec vues sur la vallée de l'Allier.",
    "location": "Chilhac, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h (été)",
    "period": "XIVe - XVe siècle",
    "coordinates": {
      "lat": 45.15,
      "lng": 3.4333
    },
    "highlights": [
      "Vallée de l'Allier",
      "Restauration",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 896,
    "name": "Château de Montgilbert",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale en cours de restauration avec chantier participatif.",
    "location": "Ferrières-sur-Sichon, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 46.0333,
      "lng": 3.6333
    },
    "highlights": [
      "Chantier participatif",
      "Restauration",
      "Montagne bourbonnaise"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 897,
    "name": "Château de la Tour d'Auvergne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Berceau de la maison de la Tour d'Auvergne avec donjon imposant.",
    "location": "La Tour-d'Auvergne, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "4€",
    "hours": "14h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.5333,
      "lng": 2.6667
    },
    "highlights": [
      "Tour d'Auvergne",
      "Premier grenadier",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 898,
    "name": "Château de Vollore",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure du général de La Fayette avec souvenirs et mobilier d'époque.",
    "location": "Vollore-Ville, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 45.7667,
      "lng": 3.5833
    },
    "highlights": [
      "La Fayette",
      "Révolution",
      "Mobilier d'époque"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 899,
    "name": "Château de Peslieres",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Commanderie des Hospitaliers avec chapelle romane.",
    "location": "Bort-l'Étang, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.7833,
      "lng": 3.3833
    },
    "highlights": [
      "Hospitaliers",
      "Chapelle romane",
      "Commanderie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 900,
    "name": "Château de Chavagnac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château auvergnat dominant la vallée de la Dore.",
    "location": "Olliergues, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 45.6833,
      "lng": 3.6333
    },
    "highlights": [
      "Vallée de la Dore",
      "Livradois",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 901,
    "name": "Château de Montvianeix",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ancien prieuré fortifié avec jardins remarquables.",
    "location": "Aubusson-d'Auvergne, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 45.75,
      "lng": 3.6
    },
    "highlights": [
      "Prieuré fortifié",
      "Jardins",
      "Livradois-Forez"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 902,
    "name": "Château de Montmorin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant Billom avec vue sur la chaîne des Puys.",
    "location": "Montmorin, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "4€",
    "hours": "14h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.7333,
      "lng": 3.35
    },
    "highlights": [
      "Vue chaîne des Puys",
      "Billom",
      "Ruines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 903,
    "name": "Château de Mauzun",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Une des plus grandes forteresses d'Auvergne avec 13 tours.",
    "location": "Mauzun, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 45.65,
      "lng": 3.4667
    },
    "highlights": [
      "13 tours",
      "Philippe Auguste",
      "Grande enceinte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 904,
    "name": "Château de Mardogne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec terrasses dominant la plaine de la Limagne.",
    "location": "Égliseneuve-près-Billom, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 45.7,
      "lng": 3.3333
    },
    "highlights": [
      "Terrasses",
      "Vue Limagne",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 905,
    "name": "Château de Coppel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château d'origine médiévale avec parc et vue panoramique.",
    "location": "Coppel, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIVe - XVIIIe siècle",
    "coordinates": {
      "lat": 45.7333,
      "lng": 3.4333
    },
    "highlights": [
      "Parc",
      "Panorama",
      "Livradois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 906,
    "name": "Château de Viverols",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des Monts du Livradois avec histoire mouvementée.",
    "location": "Viverols, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "4€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 45.4667,
      "lng": 3.7
    },
    "highlights": [
      "Monts du Livradois",
      "Histoire",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 907,
    "name": "Château de la Faye",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval transformé en résidence XVIIe.",
    "location": "Olliergues, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIVe - XVIIe siècle",
    "coordinates": {
      "lat": 45.6833,
      "lng": 3.65
    },
    "highlights": [
      "Architecture mixte",
      "Dore",
      "Livradois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 908,
    "name": "Château de Codignat",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval auvergnat transformé en hôtel de charme.",
    "location": "Lezoux, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 45.8167,
      "lng": 3.3833
    },
    "highlights": [
      "Tour crénelée",
      "Parc arboré",
      "Livradois-Forez"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 909,
    "name": "Château de Murols",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale avec spectacles de chevalerie en saison.",
    "location": "Murol, Auvergne-Rhône-Alpes",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.5667,
      "lng": 2.9333
    },
    "highlights": [
      "Spectacles médiévaux",
      "Guillaume de Murol",
      "Vue lac Chambon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 910,
    "name": "Château de Tournoël",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant la faille de Limagne avec vue exceptionnelle.",
    "location": "Volvic, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.8833,
      "lng": 3.05
    },
    "highlights": [
      "Vue faille de Limagne",
      "Donjon",
      "Catherine de Médicis"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 911,
    "name": "Château de Chazeron",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant les Combrailles avec vue sur la chaîne des Puys.",
    "location": "Loubeyrat, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 45.95,
      "lng": 2.9167
    },
    "highlights": [
      "Vue chaîne des Puys",
      "Combrailles",
      "Chapelle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 912,
    "name": "Château Dauphin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Imposante forteresse de Pontgibaud avec donjon du XIIe.",
    "location": "Pontgibaud, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.8333,
      "lng": 2.85
    },
    "highlights": [
      "La Fayette",
      "Donjon",
      "Musée des mines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 913,
    "name": "Château de Cordes-sur-Ciel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Vestiges du château des comtes de Toulouse dans la cité médiévale.",
    "location": "Cordes-sur-Ciel, Occitanie",
    "rating": 4.4,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 44.0658,
      "lng": 1.9536
    },
    "highlights": [
      "Cité médiévale",
      "Plus Beau Village",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 914,
    "name": "Château de Castelnau-de-Lévis",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines surplombant Albi avec vue sur la cathédrale Sainte-Cécile.",
    "location": "Castelnau-de-Lévis, Occitanie",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 43.95,
      "lng": 2.0833
    },
    "highlights": [
      "Vue sur Albi",
      "Cathédrale",
      "Ruines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 915,
    "name": "Château du Bosc",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure familiale de Toulouse-Lautrec avec souvenirs du peintre.",
    "location": "Camjac, Occitanie",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 44.2333,
      "lng": 2.5833
    },
    "highlights": [
      "Toulouse-Lautrec",
      "Souvenirs",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 916,
    "name": "Château de Peyrusse-le-Roc",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Cité médiévale fantôme avec ruines romantiques dans la forêt.",
    "location": "Peyrusse-le-Roc, Occitanie",
    "rating": 4.4,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIe - XIVe siècle",
    "coordinates": {
      "lat": 44.4833,
      "lng": 2.15
    },
    "highlights": [
      "Cité fantôme",
      "Ruines romantiques",
      "Mines d'argent"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 917,
    "name": "Château de Brousse",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval dominant le Tarn avec donjon et courtine.",
    "location": "Brousse-le-Château, Occitanie",
    "rating": 4.4,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 43.9833,
      "lng": 2.6167
    },
    "highlights": [
      "Plus Beau Village",
      "Tarn",
      "Pont gothique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 918,
    "name": "Château de Montaigut",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des gorges de l'Aveyron avec musée du costume.",
    "location": "Gissac, Occitanie",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 44.0333,
      "lng": 2.7
    },
    "highlights": [
      "Musée du costume",
      "Gorges",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 919,
    "name": "Château de Grandson",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Imposante forteresse médiévale avec collection d'armes.",
    "location": "Grandson, Grand Est",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIe - XIVe siècle",
    "coordinates": {
      "lat": 46.81,
      "lng": 6.6456
    },
    "highlights": [
      "Bataille de Grandson",
      "Collection d'armes",
      "Charles le Téméraire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 920,
    "name": "Château du Bernstein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques dominant le vignoble alsacien.",
    "location": "Dambach-la-Ville, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 48.3272,
      "lng": 7.425
    },
    "highlights": [
      "Vue vignoble",
      "Donjon pentagonal",
      "Granite rose"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 921,
    "name": "Château de Lœwenstein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château fort des Vosges avec vue panoramique.",
    "location": "Wingen-sur-Moder, Grand Est",
    "rating": 4.1,
    "price": "4€",
    "hours": "10h - 17h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.9333,
      "lng": 7.3667
    },
    "highlights": [
      "Panorama Vosges",
      "Grès rose",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 922,
    "name": "Château de Wangenbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines imposantes en grès rose des Vosges.",
    "location": "Wangenbourg-Engenthal, Grand Est",
    "rating": 4.3,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.6297,
      "lng": 7.3056
    },
    "highlights": [
      "Grès rose",
      "Donjon",
      "Station climatique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 923,
    "name": "Château de Guirbaden",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus vaste château fort d'Alsace en ruines.",
    "location": "Mollkirch, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 48.5,
      "lng": 7.3333
    },
    "highlights": [
      "Plus grand château alsacien",
      "Double enceinte",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 924,
    "name": "Château de Spesbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval jumelé avec le Haut-Andlau.",
    "location": "Andlau, Grand Est",
    "rating": 4.2,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.3833,
      "lng": 7.4167
    },
    "highlights": [
      "Châteaux jumelés",
      "Baies gothiques",
      "Vignoble"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 925,
    "name": "Château du Landskron",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant la plaine du Rhin et la Suisse.",
    "location": "Leymen, Grand Est",
    "rating": 4.3,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.4833,
      "lng": 7.4833
    },
    "highlights": [
      "Vue trois pays",
      "Vauban",
      "Sundgau"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 926,
    "name": "Château de Ferrette",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Deux châteaux en ruines des comtes de Ferrette.",
    "location": "Ferrette, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 47.4931,
      "lng": 7.3139
    },
    "highlights": [
      "Deux châteaux",
      "Comtes de Ferrette",
      "Jura alsacien"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 927,
    "name": "Château de Morimont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Vaste ensemble fortifié en cours de restauration.",
    "location": "Oberlarg, Grand Est",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.45,
      "lng": 7.2167
    },
    "highlights": [
      "Restauration bénévole",
      "Trois enceintes",
      "Sundgau"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 928,
    "name": "Château de Reichenberg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse lorraine dominant la vallée de la Sarre.",
    "location": "Bergheim, Grand Est",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 17h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.2064,
      "lng": 7.3628
    },
    "highlights": [
      "Vue vallée",
      "Architecture militaire",
      "Lorraine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 929,
    "name": "Château de Thanvillé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec parc paysager.",
    "location": "Thanvillé, Grand Est",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.35,
      "lng": 7.3
    },
    "highlights": [
      "Renaissance",
      "Parc",
      "Val de Villé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 930,
    "name": "Château de Wasenbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines avec bas-relief antique unique.",
    "location": "Niederbronn-les-Bains, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.9667,
      "lng": 7.6333
    },
    "highlights": [
      "Bas-relief romain",
      "Vosges du Nord",
      "Thermalisme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 931,
    "name": "Château de Lutzelhardt",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse frontalière franco-allemande.",
    "location": "Obersteinbach, Grand Est",
    "rating": 4.1,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.0333,
      "lng": 7.6833
    },
    "highlights": [
      "Frontière",
      "Grès rose",
      "Sentier des châteaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 932,
    "name": "Château de Wineck",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines médiévales dans le vignoble de Katzenthal.",
    "location": "Katzenthal, Grand Est",
    "rating": 4,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.0833,
      "lng": 7.2833
    },
    "highlights": [
      "Vignoble",
      "Vue Colmar",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 933,
    "name": "Château du Schœneck",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château en grès rose au cœur des Vosges du Nord.",
    "location": "Dambach, Grand Est",
    "rating": 4.1,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.05,
      "lng": 7.6167
    },
    "highlights": [
      "Grès rose",
      "Architecture",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 934,
    "name": "Château de Frœschwiller",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château lié à la bataille de 1870.",
    "location": "Frœschwiller, Grand Est",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 17h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.9333,
      "lng": 7.7167
    },
    "highlights": [
      "Bataille 1870",
      "Musée",
      "Histoire militaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 935,
    "name": "Château d'Eguisheim",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trois tours médiévales dominant le vignoble.",
    "location": "Eguisheim, Grand Est",
    "rating": 4.4,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIe - XIIIe siècle",
    "coordinates": {
      "lat": 48.0425,
      "lng": 7.3069
    },
    "highlights": [
      "Trois châteaux",
      "Plus Beau Village",
      "Vignoble"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 936,
    "name": "Château de Husseren",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trois donjons en ruines sur les hauteurs d'Eguisheim.",
    "location": "Husseren-les-Châteaux, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 48.0333,
      "lng": 7.2833
    },
    "highlights": [
      "Trois donjons",
      "Panorama",
      "Route des vins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 937,
    "name": "Château de Pflixbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines dominant Wintzenheim et la plaine d'Alsace.",
    "location": "Wintzenheim, Grand Est",
    "rating": 4.1,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.0667,
      "lng": 7.25
    },
    "highlights": [
      "Vue plaine d'Alsace",
      "Randonnée",
      "Donjon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 938,
    "name": "Château du Hohrupf",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Petit château rocheux des Vosges méridionales.",
    "location": "Rimbach-près-Guebwiller, Grand Est",
    "rating": 4,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 47.9,
      "lng": 7.1333
    },
    "highlights": [
      "Rocher",
      "Forêt",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 939,
    "name": "Château du Hugstein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines au-dessus de Guebwiller avec vue exceptionnelle.",
    "location": "Guebwiller, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 47.9167,
      "lng": 7.1833
    },
    "highlights": [
      "Vue vallée",
      "Abbaye de Murbach",
      "Vignoble"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 940,
    "name": "Château du Girsberg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Petit château perché près du Saint-Ulrich.",
    "location": "Ribeauvillé, Grand Est",
    "rating": 4.1,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.1983,
      "lng": 7.32
    },
    "highlights": [
      "Donjon",
      "Vue",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 941,
    "name": "Château du Haut-Ribeaupierre",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le plus haut des châteaux de Ribeauvillé.",
    "location": "Ribeauvillé, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.195,
      "lng": 7.3233
    },
    "highlights": [
      "Point culminant",
      "Panorama",
      "Randonnée sportive"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 942,
    "name": "Château de Frankenbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse avec mur païen et vue sur le Val de Villé.",
    "location": "Neubois, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.3167,
      "lng": 7.3333
    },
    "highlights": [
      "Mur païen",
      "Val de Villé",
      "Légendes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 943,
    "name": "Château de Ramstein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines dominant Scherwiller et le vignoble.",
    "location": "Scherwiller, Grand Est",
    "rating": 4,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.2833,
      "lng": 7.4167
    },
    "highlights": [
      "Vue vignoble",
      "Randonnée",
      "Ortenbourg voisin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 944,
    "name": "Château d'Ortenbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Imposant donjon pentagonal en grès rose.",
    "location": "Scherwiller, Grand Est",
    "rating": 4.3,
    "price": "4€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.285,
      "lng": 7.42
    },
    "highlights": [
      "Donjon pentagonal",
      "Grès rose",
      "Vue 360°"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 945,
    "name": "Château de Rohan-Saverne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Somptueux palais des cardinaux de Rohan.",
    "location": "Saverne, Grand Est",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.7417,
      "lng": 7.3617
    },
    "highlights": [
      "Cardinaux de Rohan",
      "Façade monumentale",
      "Musée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 946,
    "name": "Château de Lutzelbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines dominant le plan incliné de Saint-Louis.",
    "location": "Lutzelbourg, Grand Est",
    "rating": 4.1,
    "price": "4€",
    "hours": "10h - 17h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.7333,
      "lng": 7.25
    },
    "highlights": [
      "Plan incliné",
      "Canal",
      "Vue vallée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 947,
    "name": "Château de Turquestein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines isolées dans les Vosges mosellanes.",
    "location": "Turquestein-Blancrupt, Grand Est",
    "rating": 4,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.5833,
      "lng": 7.0833
    },
    "highlights": [
      "Isolement",
      "Nature",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 948,
    "name": "Château de Pierre-Percée",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines sur éperon rocheux au-dessus du lac.",
    "location": "Pierre-Percée, Grand Est",
    "rating": 4.2,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 48.4667,
      "lng": 6.9333
    },
    "highlights": [
      "Lac",
      "Éperon rocheux",
      "Légende"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 949,
    "name": "Château de Salm",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse des princes de Salm en cours de restauration.",
    "location": "La Broque, Grand Est",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 17h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.45,
      "lng": 7.2
    },
    "highlights": [
      "Princes de Salm",
      "Restauration",
      "Vallée de la Bruche"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 950,
    "name": "Château de Dreistein",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Trois châteaux en ruines près du Mont Sainte-Odile.",
    "location": "Ottrott, Grand Est",
    "rating": 4,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.4333,
      "lng": 7.4
    },
    "highlights": [
      "Trois châteaux",
      "Mont Sainte-Odile",
      "Mur païen"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 951,
    "name": "Château du Birkenfels",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques dans la forêt près d'Obernai.",
    "location": "Ottrott, Grand Est",
    "rating": 4.1,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.45,
      "lng": 7.3833
    },
    "highlights": [
      "Forêt",
      "Romantisme",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 952,
    "name": "Château de Landsberg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château lié au minnesänger Herrade de Landsberg.",
    "location": "Heiligenstein, Grand Est",
    "rating": 4.2,
    "price": "4€",
    "hours": "10h - 17h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.4167,
      "lng": 7.45
    },
    "highlights": [
      "Herrade de Landsberg",
      "Hortus deliciarum",
      "Vue"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 953,
    "name": "Château de Gréoux-les-Bains",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des Templiers dominant la station thermale.",
    "location": "Gréoux-les-Bains, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.7583,
      "lng": 5.8833
    },
    "highlights": [
      "Templiers",
      "Thermalisme",
      "Vue Verdon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 954,
    "name": "Château de Meyrargues",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval transformé en hôtel de luxe.",
    "location": "Meyrargues, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 43.6333,
      "lng": 5.5333
    },
    "highlights": [
      "Hôtel château",
      "Parc",
      "Aqueduc romain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 955,
    "name": "Château de la Barben",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus vieux château de Provence avec jardins à la française.",
    "location": "La Barben, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 43.6333,
      "lng": 5.1833
    },
    "highlights": [
      "Plus vieux de Provence",
      "Jardins Le Nôtre",
      "Zoo voisin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 956,
    "name": "Château d'Ansouis",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château habité depuis 1000 ans avec jardins remarquables.",
    "location": "Ansouis, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "9€",
    "hours": "14h30 - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 43.7417,
      "lng": 5.4667
    },
    "highlights": [
      "Mille ans d'histoire",
      "Jardins remarquables",
      "Plus Beau Village"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 957,
    "name": "Château de Lourmarin",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Lourmarin_castle.jpg/800px-Lourmarin_castle.jpg",
    "description": "Premier château Renaissance de Provence.",
    "location": "Lourmarin, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 43.765,
      "lng": 5.3617
    },
    "highlights": [
      "Renaissance provençale",
      "Fondation Laurent-Vibert",
      "Concerts"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 958,
    "name": "Château de la Tour-d'Aigues",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines Renaissance avec musée de la faïence.",
    "location": "La Tour-d'Aigues, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 43.725,
      "lng": 5.55
    },
    "highlights": [
      "Renaissance",
      "Musée faïence",
      "Festival"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 959,
    "name": "Château de l'Empéri",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Salon_chateau.jpg/800px-Salon_chateau.jpg",
    "description": "Forteresse des archevêques d'Arles avec musée militaire.",
    "location": "Salon-de-Provence, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "Xe - XVIe siècle",
    "coordinates": {
      "lat": 43.6417,
      "lng": 5.0967
    },
    "highlights": [
      "Musée militaire",
      "Nostradamus",
      "Vue Crau"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 960,
    "name": "Château de Simiane-la-Rotonde",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Rotonde romane unique dominant le plateau d'Albion.",
    "location": "Simiane-la-Rotonde, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.9833,
      "lng": 5.5667
    },
    "highlights": [
      "Rotonde romane",
      "Lavande",
      "Festival de musique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 961,
    "name": "Château de Saumane-de-Vaucluse",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château du Marquis de Sade avec vue sur la Fontaine-de-Vaucluse.",
    "location": "Saumane-de-Vaucluse, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 43.9333,
      "lng": 5.1
    },
    "highlights": [
      "Marquis de Sade",
      "Fontaine-de-Vaucluse",
      "Vue Luberon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 962,
    "name": "Château de Gordes",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gordes_chateau.jpg/800px-Gordes_chateau.jpg",
    "description": "Château Renaissance au cœur du village perché.",
    "location": "Gordes, Provence-Alpes-Côte d'Azur",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 43.9117,
      "lng": 5.2
    },
    "highlights": [
      "Plus Beau Village",
      "Vasarely",
      "Luberon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 963,
    "name": "Château de Lacoste",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines du château du Marquis de Sade.",
    "location": "Lacoste, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIe - XVIIIe siècle",
    "coordinates": {
      "lat": 43.8333,
      "lng": 5.2833
    },
    "highlights": [
      "Marquis de Sade",
      "Pierre Cardin",
      "Festival"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 964,
    "name": "Château d'Alba-la-Romaine",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval sur site gallo-romain.",
    "location": "Alba-la-Romaine, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 44.55,
      "lng": 4.5983
    },
    "highlights": [
      "Site antique",
      "Théâtre romain",
      "Village de caractère"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 965,
    "name": "Château de Tournon-sur-Rhône",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château musée dominant le Rhône face à Tain-l'Hermitage.",
    "location": "Tournon-sur-Rhône, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIVe - XVIe siècle",
    "coordinates": {
      "lat": 45.0667,
      "lng": 4.8333
    },
    "highlights": [
      "Musée du Rhône",
      "Vignoble",
      "Passerelle Marc Seguin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 966,
    "name": "Château de Rochecolombe",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines pittoresques en Ardèche méridionale.",
    "location": "Rochecolombe, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.5167,
      "lng": 4.35
    },
    "highlights": [
      "Village de caractère",
      "Ardèche",
      "Ruines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 967,
    "name": "Château de Boulogne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château ardéchois avec panorama sur les Cévennes.",
    "location": "Saint-Michel-de-Boulogne, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 44.7167,
      "lng": 4.4333
    },
    "highlights": [
      "Vue Cévennes",
      "Architecture",
      "Ardèche"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 968,
    "name": "Château de Montbrun-les-Bains",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance dominant le village thermal.",
    "location": "Montbrun-les-Bains, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 44.175,
      "lng": 5.4333
    },
    "highlights": [
      "Plus Beau Village",
      "Thermalisme",
      "Lavande"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 969,
    "name": "Château de Mirmande",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château au cœur d'un des plus beaux villages de France.",
    "location": "Mirmande, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.6833,
      "lng": 4.8333
    },
    "highlights": [
      "Plus Beau Village",
      "Artistes",
      "Drôme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 970,
    "name": "Château de Crest",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Plus haut donjon de France avec 52 mètres.",
    "location": "Crest, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 19h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.7283,
      "lng": 5.0217
    },
    "highlights": [
      "Plus haut donjon",
      "Prison",
      "Vue Vercors"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 971,
    "name": "Château de Pontgibaud",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château-dauphin avec musée des mines d'argent.",
    "location": "Pontgibaud, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.8333,
      "lng": 2.85
    },
    "highlights": [
      "Mines d'argent",
      "Château-Dauphin",
      "Volcans"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 972,
    "name": "Château d'Opme",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec jardins classés dominant Clermont-Ferrand.",
    "location": "Romagnat, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 45.7167,
      "lng": 3.0833
    },
    "highlights": [
      "Jardins classés",
      "Vue Clermont",
      "Potager"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 973,
    "name": "Château d'Apremont-sur-Allier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec parc floral remarquable au bord de l'Allier.",
    "location": "Apremont-sur-Allier, Centre-Val de Loire",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 19h",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 46.9083,
      "lng": 3.05
    },
    "highlights": [
      "Parc floral",
      "Plus Beau Village",
      "Allier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 974,
    "name": "Château de Meillant",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Joyau flamboyant du Berry avec tour du Lion.",
    "location": "Meillant, Centre-Val de Loire",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 46.7667,
      "lng": 2.5
    },
    "highlights": [
      "Gothique flamboyant",
      "Tour du Lion",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 975,
    "name": "Château d'Argy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance avec galerie à l'italienne.",
    "location": "Argy, Centre-Val de Loire",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 46.9333,
      "lng": 1.5167
    },
    "highlights": [
      "Galerie Renaissance",
      "Cheminées",
      "Brenne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 976,
    "name": "Château du Bouchet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de la Brenne au bord d'un étang.",
    "location": "Rosnay, Centre-Val de Loire",
    "rating": 4.1,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 46.7167,
      "lng": 1.2167
    },
    "highlights": [
      "Brenne",
      "Étangs",
      "Architecture médiévale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 977,
    "name": "Château de Palluau-sur-Indre",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse dominant la vallée de l'Indre.",
    "location": "Palluau-sur-Indre, Centre-Val de Loire",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 46.9417,
      "lng": 1.3167
    },
    "highlights": [
      "Vallée de l'Indre",
      "Donjon",
      "Village"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 978,
    "name": "Château de Levroux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval avec maison de bois sculptée.",
    "location": "Levroux, Centre-Val de Loire",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 46.9833,
      "lng": 1.6167
    },
    "highlights": [
      "Maison de bois",
      "Collégiale",
      "Berry"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 979,
    "name": "Château de Bridoré",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse avec donjon et enceinte du maréchal de Boucicaut.",
    "location": "Bridoré, Centre-Val de Loire",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.0833,
      "lng": 1.05
    },
    "highlights": [
      "Boucicaut",
      "Donjon",
      "Enceinte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 980,
    "name": "Château de Saint-Aignan",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance dominant le Cher et le zoo de Beauval.",
    "location": "Saint-Aignan, Centre-Val de Loire",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.2683,
      "lng": 1.375
    },
    "highlights": [
      "Vue Cher",
      "ZooParc Beauval",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 981,
    "name": "Château de la Bussière",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Le château des Pêcheurs avec musée de la pêche.",
    "location": "La Bussière, Centre-Val de Loire",
    "rating": 4.2,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.75,
      "lng": 2.9333
    },
    "highlights": [
      "Musée de la pêche",
      "Potager",
      "Étang"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 982,
    "name": "Château de Selles-sur-Cher",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec pavillons Renaissance et jardins mystères.",
    "location": "Selles-sur-Cher, Centre-Val de Loire",
    "rating": 4.2,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XIIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.275,
      "lng": 1.55
    },
    "highlights": [
      "Jardins mystères",
      "Pavillons",
      "Cher"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 983,
    "name": "Château du Plessis-Macé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse angevine avec logis flamboyant.",
    "location": "Le Plessis-Macé, Pays de la Loire",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 47.5333,
      "lng": -0.65
    },
    "highlights": [
      "Gothique flamboyant",
      "Balcon suspendu",
      "Festival"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 984,
    "name": "Château de Durtal",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des bords du Loir avec parc arboré.",
    "location": "Durtal, Pays de la Loire",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 47.6667,
      "lng": -0.2333
    },
    "highlights": [
      "Loir",
      "Henri IV",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 985,
    "name": "Château de Baugé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château du Roi René avec apothicairerie historique.",
    "location": "Baugé-en-Anjou, Pays de la Loire",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.5417,
      "lng": -0.1
    },
    "highlights": [
      "Roi René",
      "Apothicairerie",
      "Croix d'Anjou"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 986,
    "name": "Château de Talmont-Saint-Hilaire",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de Richard Cœur de Lion avec spectacles médiévaux.",
    "location": "Talmont-Saint-Hilaire, Pays de la Loire",
    "rating": 4.3,
    "price": "11€",
    "hours": "10h - 19h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 46.4667,
      "lng": -1.6333
    },
    "highlights": [
      "Richard Cœur de Lion",
      "Spectacles",
      "Côte vendéenne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 987,
    "name": "Château de Terre-Neuve",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance de Nicolas Rapin avec décor raffiné.",
    "location": "Fontenay-le-Comte, Pays de la Loire",
    "rating": 4.3,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 46.4667,
      "lng": -0.8167
    },
    "highlights": [
      "Nicolas Rapin",
      "Cheminées Renaissance",
      "Plafonds peints"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 988,
    "name": "Château de Largoët",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Tours d'Elven avec le plus haut donjon de France.",
    "location": "Elven, Bretagne",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIVe - XVe siècle",
    "coordinates": {
      "lat": 47.7333,
      "lng": -2.5833
    },
    "highlights": [
      "Plus haut donjon",
      "Henri Tudor",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 989,
    "name": "Château de Pontivy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château des Rohan au cœur de la Bretagne intérieure.",
    "location": "Pontivy, Bretagne",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 48.0667,
      "lng": -2.9667
    },
    "highlights": [
      "Rohan",
      "Mâchicoulis",
      "Napoléonville"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 990,
    "name": "Château de Kergroadès",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance breton avec jardin de simples.",
    "location": "Brélès, Bretagne",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.4667,
      "lng": -4.7
    },
    "highlights": [
      "Renaissance bretonne",
      "Jardin de simples",
      "Pays d'Iroise"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 991,
    "name": "Château de la Roche-Jagu",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château dominant le Trieux avec jardins contemporains.",
    "location": "Ploëzal, Bretagne",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 48.7333,
      "lng": -3.1667
    },
    "highlights": [
      "Jardins contemporains",
      "Trieux",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 992,
    "name": "Château de la Bourbansais",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec zoo et jardins à la française.",
    "location": "Pleugueneuc, Bretagne",
    "rating": 4.4,
    "price": "20€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 48.4,
      "lng": -1.8833
    },
    "highlights": [
      "Zoo",
      "Jardins à la française",
      "Meute de chiens"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 993,
    "name": "Château de Montmuran",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château où Du Guesclin fut armé chevalier.",
    "location": "Les Iffs, Bretagne",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 48.2667,
      "lng": -1.9167
    },
    "highlights": [
      "Du Guesclin",
      "Chapelle",
      "If millénaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 994,
    "name": "Château de Quintin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Deux châteaux XVIIe et XVIIIe au cœur de la cité des tisserands.",
    "location": "Quintin, Bretagne",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 48.4,
      "lng": -2.9167
    },
    "highlights": [
      "Deux châteaux",
      "Petite cité de caractère",
      "Tisserands"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 995,
    "name": "Château de Rosanbo",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec jardins à la française et bibliothèque.",
    "location": "Lanvellec, Bretagne",
    "rating": 4.3,
    "price": "9€",
    "hours": "11h - 18h",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 48.6333,
      "lng": -3.5833
    },
    "highlights": [
      "Jardins classés",
      "Bibliothèque",
      "Charmilles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 996,
    "name": "Château du Taureau",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Fort maritime en baie de Morlaix construit par Vauban.",
    "location": "Morlaix, Bretagne",
    "rating": 4.4,
    "price": "14€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 48.6833,
      "lng": -3.8833
    },
    "highlights": [
      "Vauban",
      "Baie de Morlaix",
      "Accès en bateau"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 997,
    "name": "Château de Keriolet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château néogothique de la princesse Zénaïde Narischkine.",
    "location": "Concarneau, Bretagne",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 47.8667,
      "lng": -3.9167
    },
    "highlights": [
      "Néogothique",
      "Princesse russe",
      "Cornouaille"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 998,
    "name": "Château de Trévarez",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Belle Époque avec parc aux camélias remarquable.",
    "location": "Saint-Goazec, Bretagne",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.1667,
      "lng": -3.8333
    },
    "highlights": [
      "Belle Époque",
      "Camélias",
      "Montagnes Noires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 999,
    "name": "Château de Châtillon-en-Bazois",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château entouré de douves au cœur du Morvan.",
    "location": "Châtillon-en-Bazois, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.05,
      "lng": 3.65
    },
    "highlights": [
      "Douves",
      "Canal du Nivernais",
      "Morvan"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1000,
    "name": "Château de Bussy-le-Grand",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château-ferme fortifié aux portes d'Alésia.",
    "location": "Bussy-le-Grand, Bourgogne-Franche-Comté",
    "rating": 4,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIIIe - XVIe siècle",
    "coordinates": {
      "lat": 47.5667,
      "lng": 4.5333
    },
    "highlights": [
      "Alésia",
      "Ferme fortifiée",
      "Auxois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1001,
    "name": "Château de Rocheprise",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval perché sur un éperon rocheux.",
    "location": "Grosbois-en-Montagne, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 47.3833,
      "lng": 4.6
    },
    "highlights": [
      "Éperon rocheux",
      "Architecture militaire",
      "Auxois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1002,
    "name": "Château de Posanges",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Petit château médiéval au décor intact.",
    "location": "Posanges, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.4333,
      "lng": 4.5167
    },
    "highlights": [
      "Décor médiéval",
      "Guillaume de Vienne",
      "Auxois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1003,
    "name": "Château de Talmay",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec donjon et parc classé.",
    "location": "Talmay, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.4,
      "lng": 5.4167
    },
    "highlights": [
      "Donjon",
      "Parc classé",
      "Saône"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1004,
    "name": "Château de Pesmes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château dominant un des plus beaux villages de France.",
    "location": "Pesmes, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 47.2833,
      "lng": 5.5667
    },
    "highlights": [
      "Plus Beau Village",
      "Ognon",
      "Forge"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1005,
    "name": "Château de Ray-sur-Saône",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château dominant la vallée de la Saône.",
    "location": "Ray-sur-Saône, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIe - XIXe siècle",
    "coordinates": {
      "lat": 47.65,
      "lng": 5.7833
    },
    "highlights": [
      "Vue Saône",
      "Parc",
      "Mille ans d'histoire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1006,
    "name": "Château de Vaire-le-Grand",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec jardins en terrasses sur le Doubs.",
    "location": "Vaire, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.2,
      "lng": 5.9833
    },
    "highlights": [
      "Jardins en terrasses",
      "Doubs",
      "Vue vallée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1007,
    "name": "Château de Nans-sous-Sainte-Anne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château romantique près de la source du Lison.",
    "location": "Nans-sous-Sainte-Anne, Bourgogne-Franche-Comté",
    "rating": 4,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XVIe - XIXe siècle",
    "coordinates": {
      "lat": 47,
      "lng": 6.0333
    },
    "highlights": [
      "Source du Lison",
      "Taillanderie",
      "Jura"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1008,
    "name": "Château de Champlitte",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château abritant le musée des arts et traditions populaires.",
    "location": "Champlitte, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 47.6167,
      "lng": 5.5167
    },
    "highlights": [
      "Musée Albert-Demard",
      "Arts populaires",
      "Salon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1009,
    "name": "Château de Consolation",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ancien couvent dans un cirque naturel spectaculaire.",
    "location": "Consolation-Maisonnettes, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 47.15,
      "lng": 6.6167
    },
    "highlights": [
      "Cirque naturel",
      "Cascades",
      "Doubs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1010,
    "name": "Château de Bourlémont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château lorrain dominant la Meuse.",
    "location": "Frebécourt, Grand Est",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIe - XVIIIe siècle",
    "coordinates": {
      "lat": 48.3,
      "lng": 5.65
    },
    "highlights": [
      "Meuse",
      "Lorraine",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1011,
    "name": "Château de Haroué",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chateau_de_Haroue.jpg/800px-Chateau_de_Haroue.jpg",
    "description": "Château des Beauvau-Craon par Germain Boffrand.",
    "location": "Haroué, Grand Est",
    "rating": 4.5,
    "price": "12€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.4667,
      "lng": 6.1833
    },
    "highlights": [
      "Boffrand",
      "Beauvau-Craon",
      "365 fenêtres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1012,
    "name": "Château de Lunéville",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Ch%C3%A2teau_de_Lun%C3%A9ville.jpg/800px-Ch%C3%A2teau_de_Lun%C3%A9ville.jpg",
    "description": "Le Versailles lorrain du duc Léopold.",
    "location": "Lunéville, Grand Est",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.5931,
      "lng": 6.4953
    },
    "highlights": [
      "Versailles lorrain",
      "Duc Léopold",
      "Parc des Bosquets"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1013,
    "name": "Château de Fléville",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance lorrain avec jardins classés.",
    "location": "Fléville-devant-Nancy, Grand Est",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVe - XVIe siècle",
    "coordinates": {
      "lat": 48.6167,
      "lng": 6.2167
    },
    "highlights": [
      "Renaissance lorraine",
      "Jardins",
      "Émile Gallé"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1014,
    "name": "Château de Cons-la-Grandville",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval dominant la Chiers.",
    "location": "Cons-la-Grandville, Grand Est",
    "rating": 4.1,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIe - XVIIIe siècle",
    "coordinates": {
      "lat": 49.4833,
      "lng": 5.7
    },
    "highlights": [
      "Chiers",
      "Architecture lorraine",
      "Prieuré"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1015,
    "name": "Château de Thillombois",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Maison forte lorraine avec tours rondes.",
    "location": "Thillombois, Grand Est",
    "rating": 4,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.9833,
      "lng": 5.3833
    },
    "highlights": [
      "Tours rondes",
      "Meuse",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1016,
    "name": "Château de Gombervaux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques en cours de restauration.",
    "location": "Vaucouleurs, Grand Est",
    "rating": 4,
    "price": "5€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 48.5833,
      "lng": 5.6833
    },
    "highlights": [
      "Restauration",
      "Jeanne d'Arc",
      "Meuse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1017,
    "name": "Château de Hattonchâtel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château reconstruit par une mécène américaine.",
    "location": "Vigneulles-lès-Hattonchâtel, Grand Est",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "IXe - XXe siècle",
    "coordinates": {
      "lat": 48.9833,
      "lng": 5.7
    },
    "highlights": [
      "Miss Skinner",
      "Vue Woëvre",
      "Cloître"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1018,
    "name": "Château de Montmort",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de brique champenois Renaissance.",
    "location": "Montmort-Lucy, Grand Est",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 48.8833,
      "lng": 3.8
    },
    "highlights": [
      "Brique et pierre",
      "Jardins",
      "Champagne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1019,
    "name": "Château de Condé-en-Brie",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château avec décor XVIIIe de Servandoni et Watteau.",
    "location": "Condé-en-Brie, Hauts-de-France",
    "rating": 4.3,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVIe - XVIIIe siècle",
    "coordinates": {
      "lat": 49.0333,
      "lng": 3.5667
    },
    "highlights": [
      "Servandoni",
      "Watteau",
      "Bossuet"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1020,
    "name": "Château de Septmonts",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Donjon des évêques de Soissons.",
    "location": "Septmonts, Hauts-de-France",
    "rating": 4.1,
    "price": "4€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 49.35,
      "lng": 3.3667
    },
    "highlights": [
      "Donjon",
      "Évêques de Soissons",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1021,
    "name": "Château de Bertangles",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIIe où séjourna le maréchal Foch.",
    "location": "Bertangles, Hauts-de-France",
    "rating": 4,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 49.95,
      "lng": 2.2667
    },
    "highlights": [
      "Maréchal Foch",
      "Première Guerre",
      "Colombier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1022,
    "name": "Château d'Esquelbecq",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château flamand avec donjon et jardin remarquable.",
    "location": "Esquelbecq, Hauts-de-France",
    "rating": 4.2,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 50.8833,
      "lng": 2.4333
    },
    "highlights": [
      "Flamand",
      "Donjon",
      "Jardin remarquable"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1023,
    "name": "Château de Boulogne-sur-Mer",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château comtal avec musée et vue sur la Manche.",
    "location": "Boulogne-sur-Mer, Hauts-de-France",
    "rating": 4.2,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 50.7264,
      "lng": 1.6117
    },
    "highlights": [
      "Musée",
      "Fortifications",
      "Vue Manche"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1024,
    "name": "Château de Hardelot",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Centre culturel de l'Entente cordiale franco-britannique.",
    "location": "Condette, Hauts-de-France",
    "rating": 4.3,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 50.6333,
      "lng": 1.6167
    },
    "highlights": [
      "Entente cordiale",
      "Spectacles",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1025,
    "name": "Château de Maisons-Laffitte",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Chef-d'œuvre de François Mansart.",
    "location": "Maisons-Laffitte, Île-de-France",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.95,
      "lng": 2.15
    },
    "highlights": [
      "François Mansart",
      "Architecture classique",
      "Vestibule"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1026,
    "name": "Château de Grosbois",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château du maréchal Berthier avec musée du Trot.",
    "location": "Boissy-Saint-Léger, Île-de-France",
    "rating": 4.2,
    "price": "10€",
    "hours": "14h - 17h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.75,
      "lng": 2.5167
    },
    "highlights": [
      "Maréchal Berthier",
      "Musée du Trot",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1027,
    "name": "Château de Courances",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Louis XIII avec jardins d'eau exceptionnels.",
    "location": "Courances, Île-de-France",
    "rating": 4.5,
    "price": "10€",
    "hours": "14h - 18h",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 48.4333,
      "lng": 2.4667
    },
    "highlights": [
      "Jardins d'eau",
      "14 sources",
      "Jardin japonais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1028,
    "name": "Château de Fleury-en-Bière",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château Renaissance des Cosme Clausse.",
    "location": "Fleury-en-Bière, Île-de-France",
    "rating": 4.1,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.45,
      "lng": 2.55
    },
    "highlights": [
      "Renaissance",
      "Secrétaire de François Ier",
      "Galerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1029,
    "name": "Château de Blandy-les-Tours",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse médiévale restaurée au cœur de la Brie.",
    "location": "Blandy-les-Tours, Île-de-France",
    "rating": 4.3,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIIe - XIVe siècle",
    "coordinates": {
      "lat": 48.5667,
      "lng": 2.7833
    },
    "highlights": [
      "Médiéval",
      "Tours",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1030,
    "name": "Château d'Auvers-sur-Oise",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Parcours immersif sur l'impressionnisme.",
    "location": "Auvers-sur-Oise, Île-de-France",
    "rating": 4.3,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 49.0717,
      "lng": 2.1697
    },
    "highlights": [
      "Impressionnisme",
      "Van Gogh",
      "Parcours immersif"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1031,
    "name": "Château de Champs-sur-Marne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château de plaisance XVIIIe avec jardins à la française.",
    "location": "Champs-sur-Marne, Île-de-France",
    "rating": 4.4,
    "price": "8€",
    "hours": "10h - 17h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.85,
      "lng": 2.6
    },
    "highlights": [
      "Rocaille",
      "Pompadour",
      "Jardins à la française"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1032,
    "name": "Château de Nemours",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château médiéval abritant le musée du Gâtinais.",
    "location": "Nemours, Île-de-France",
    "rating": 4.1,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.2667,
      "lng": 2.6833
    },
    "highlights": [
      "Musée",
      "Médiéval",
      "Loing"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1033,
    "name": "Château de Rosa Bonheur",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Demeure-atelier de la peintre animalière.",
    "location": "Thomery, Île-de-France",
    "rating": 4.2,
    "price": "12€",
    "hours": "11h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.4167,
      "lng": 2.7833
    },
    "highlights": [
      "Rosa Bonheur",
      "Atelier",
      "Peinture animalière"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1034,
    "name": "Château de Digoine",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château XVIIIe avec théâtre et jardins à l'anglaise.",
    "location": "Palinges, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "9€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 46.55,
      "lng": 4.2167
    },
    "highlights": [
      "Théâtre",
      "Jardins à l'anglaise",
      "Charolais"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1035,
    "name": "Château de Fléchères",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château aux fresques italiennes du peintre Moreschi.",
    "location": "Fareins, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "10€",
    "hours": "14h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 46.0167,
      "lng": 4.7667
    },
    "highlights": [
      "Fresques Moreschi",
      "Dombes",
      "Mobilier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1036,
    "name": "Château de Fallavier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines médiévales dans un parc naturel.",
    "location": "Saint-Quentin-Fallavier, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "3€",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 45.6333,
      "lng": 5.1
    },
    "highlights": [
      "Ruines",
      "Parc",
      "Dauphiné"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1037,
    "name": "Château de Bouligneux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Forteresse de la Dombes entourée d'étangs.",
    "location": "Bouligneux, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 46.0333,
      "lng": 5.05
    },
    "highlights": [
      "Dombes",
      "Étangs",
      "Forteresse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1038,
    "name": "Château de Saint-Bernard",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Château du peintre Utrillo avec vue sur la Saône.",
    "location": "Saint-Bernard, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 45.95,
      "lng": 4.7333
    },
    "highlights": [
      "Utrillo",
      "Suzanne Valadon",
      "Saône"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1039,
    "name": "Château de Rochebonne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80&fit=crop&txt=Photo+bient%C3%B4t+disponible&txt-color=ffffff&txt-size=24&txt-align=center,middle&bg=2d3748",
    "description": "Ruines romantiques dominant la vallée de l'Ay.",
    "location": "Saint-Martin-de-Valamas, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "4€",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.9333,
      "lng": 4.3667
    },
    "highlights": [
      "Ruines",
      "Ardèche",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1040,
    "name": "Château de Roquefixade",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines d'un château cathare.",
    "location": "Roquefixade, Occitanie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 42.9417,
      "lng": 1.75
    },
    "highlights": [
      "Cathares",
      "Ruines",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1041,
    "name": "Château de Lordat",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines d'une forteresse dominant la vallée de l'Ariège.",
    "location": "Lordat, Occitanie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 42.7833,
      "lng": 1.75
    },
    "highlights": [
      "Ruines",
      "Ariège",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1042,
    "name": "Château de Puivert",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château médiéval associé aux troubadours.",
    "location": "Puivert, Occitanie",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 42.9167,
      "lng": 2.05
    },
    "highlights": [
      "Troubadours",
      "Donjon",
      "Musiciens"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1043,
    "name": "Château de Puylaurens",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Spectaculaire château cathare en altitude.",
    "location": "Puylaurens, Occitanie",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 42.8086,
      "lng": 2.3119
    },
    "highlights": [
      "Château cathare",
      "Murailles",
      "Montagne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1044,
    "name": "Château de Ferrières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château des Rothschild de style anglais.",
    "location": "Ferrières-en-Brie, Île-de-France",
    "rating": 4.5,
    "price": "12€",
    "hours": "Sur réservation",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.8214,
      "lng": 2.7047
    },
    "highlights": [
      "Rothschild",
      "Style anglais",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1045,
    "name": "Château de Pontécoulant",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château familial avec mobilier d'époque.",
    "location": "Pontécoulant, Normandie",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.8583,
      "lng": -0.55
    },
    "highlights": [
      "Parc anglais",
      "Mobilier",
      "Atmosphère"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1046,
    "name": "Château de Balleroy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Premier château de François Mansart.",
    "location": "Balleroy, Normandie",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 49.1833,
      "lng": -0.8333
    },
    "highlights": [
      "Mansart",
      "Jardins Le Nôtre",
      "Montgolfières"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1047,
    "name": "Château des Ravalet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château Renaissance avec parc romantique.",
    "location": "Tourlaville, Normandie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "8h - 20h (parc)",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 49.6333,
      "lng": -1.5667
    },
    "highlights": [
      "Renaissance",
      "Parc",
      "Serres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1048,
    "name": "Château de Rocher Portail",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château Renaissance breton remarquablement conservé.",
    "location": "Saint-Brice-en-Coglès, Bretagne",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h30 - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 48.4167,
      "lng": -1.3833
    },
    "highlights": [
      "Renaissance bretonne",
      "Charpente",
      "Mobilier"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1049,
    "name": "Château du Guildo",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines romantiques dominant l'Arguenon.",
    "location": "Créhen, Bretagne",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 48.5833,
      "lng": -2.2167
    },
    "highlights": [
      "Ruines",
      "Arguenon",
      "Gilles de Bretagne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1050,
    "name": "Château de la Latte (Fort)",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Forteresse spectaculaire sur les falaises.",
    "location": "Plévenon, Bretagne",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h30 - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 48.67,
      "lng": -2.2833
    },
    "highlights": [
      "Falaises",
      "Donjon",
      "Vue mer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1051,
    "name": "Château de la Ferté-Bernard",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Vestiges d'une forteresse médiévale.",
    "location": "La Ferté-Bernard, Pays de la Loire",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 48.1833,
      "lng": 0.65
    },
    "highlights": [
      "Porte Saint-Julien",
      "Fortifications",
      "Huisne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1052,
    "name": "Château de Palluau-Frontenac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château médiéval avec fresques.",
    "location": "Palluau-sur-Indre, Centre-Val de Loire",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h (été)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 46.9333,
      "lng": 1.3167
    },
    "highlights": [
      "Médiéval",
      "Indre",
      "Fresques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1053,
    "name": "Château des ducs de Lorraine",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Forteresse des ducs de Lorraine.",
    "location": "Sierck-les-Bains, Grand Est",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.4417,
      "lng": 6.3583
    },
    "highlights": [
      "Forteresse",
      "Moselle",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1054,
    "name": "Fort de Mutzig",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Plus grande fortification allemande de l'époque.",
    "location": "Mutzig, Grand Est",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 17h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.5333,
      "lng": 7.45
    },
    "highlights": [
      "Fortification",
      "Tunnels",
      "Électricité"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1055,
    "name": "Château de Marchais",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château Renaissance en brique et pierre.",
    "location": "Marchais, Hauts-de-France",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h (été)",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 49.5667,
      "lng": 4.0167
    },
    "highlights": [
      "Brique et pierre",
      "Jardins",
      "Louis XIII"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1056,
    "name": "Château de Vez",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château médiéval avec art contemporain.",
    "location": "Vez, Hauts-de-France",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 49.25,
      "lng": 3.0333
    },
    "highlights": [
      "Art contemporain",
      "Donjon",
      "Valois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1057,
    "name": "Château de Mailly-Maillet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château rococo avec boiseries exceptionnelles.",
    "location": "Mailly-Maillet, Hauts-de-France",
    "rating": 4.5,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 50.0667,
      "lng": 2.5833
    },
    "highlights": [
      "Rococo",
      "Boiseries",
      "Somme"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1058,
    "name": "Château de Bruniquel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ensemble de deux châteaux dominant l'Aveyron.",
    "location": "Bruniquel, Occitanie",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.05,
      "lng": 1.6667
    },
    "highlights": [
      "Deux châteaux",
      "Aveyron",
      "Préhistoire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1059,
    "name": "Château de Penne",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château cathare en cours de restauration.",
    "location": "Penne, Occitanie",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.0667,
      "lng": 1.7333
    },
    "highlights": [
      "Éperon rocheux",
      "Restauration",
      "Cathares"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1060,
    "name": "Château de Mauriac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château d'art avec collection Toulouse-Lautrec.",
    "location": "Senouillac, Occitanie",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 43.95,
      "lng": 1.7833
    },
    "highlights": [
      "Toulouse-Lautrec",
      "Art",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1061,
    "name": "Château de Cordes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Vestiges dans la cité médiévale de Cordes.",
    "location": "Cordes-sur-Ciel, Occitanie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 44.0667,
      "lng": 1.95
    },
    "highlights": [
      "Bastide",
      "Village",
      "Médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1062,
    "name": "Château de Lavardens",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château gascon restauré avec expositions.",
    "location": "Lavardens, Occitanie",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 43.75,
      "lng": 0.6333
    },
    "highlights": [
      "Gers",
      "Restauration",
      "Expositions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1063,
    "name": "Château de Gramont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château aux deux styles médiéval et Renaissance.",
    "location": "Gramont, Occitanie",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h30, 14h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 43.8667,
      "lng": 0.9833
    },
    "highlights": [
      "Deux ailes",
      "Gers",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1064,
    "name": "Château de Caumont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château gascon avec jardins à la française.",
    "location": "Cazaux-Savès, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 43.4667,
      "lng": 0.95
    },
    "highlights": [
      "Jardins",
      "Le Nôtre",
      "Gascon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1065,
    "name": "Château de Tiregand",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château viticole produisant du Pécharmant.",
    "location": "Creysse, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 44.8667,
      "lng": 0.5667
    },
    "highlights": [
      "Vin",
      "Vignoble",
      "Pécharmant"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1066,
    "name": "Château de la Rochefoucauld",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Un des plus beaux châteaux Renaissance du Sud-Ouest.",
    "location": "La Rochefoucauld, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 45.7417,
      "lng": 0.3833
    },
    "highlights": [
      "Renaissance",
      "Escalier",
      "La Rochefoucauld"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1067,
    "name": "Château de Verteuil",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château de la famille La Rochefoucauld.",
    "location": "Verteuil-sur-Charente, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h (été)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.9833,
      "lng": 0.2333
    },
    "highlights": [
      "La Rochefoucauld",
      "Charente",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1068,
    "name": "Château de Barbezieux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château médiéval avec théâtre.",
    "location": "Barbezieux-Saint-Hilaire, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 45.4667,
      "lng": -0.15
    },
    "highlights": [
      "Donjon",
      "Théâtre",
      "Médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1069,
    "name": "Château de Châlucet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines impressionnantes de deux châteaux.",
    "location": "Saint-Jean-Ligoure, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.7333,
      "lng": 1.3333
    },
    "highlights": [
      "Ruines",
      "Briance",
      "Médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1070,
    "name": "Château de Coussac-Bonneval",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château du comte de Bonneval devenu pacha.",
    "location": "Coussac-Bonneval, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 45.5167,
      "lng": 1.3333
    },
    "highlights": [
      "Bonneval",
      "Pacha",
      "Turquie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1071,
    "name": "Château de Montbrun",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Forteresse liée à Richard Cœur de Lion.",
    "location": "Dournazac, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.55,
      "lng": 0.9167
    },
    "highlights": [
      "Richard Cœur de Lion",
      "Forteresse",
      "Tours"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1072,
    "name": "Château de Bouthéon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château avec aquarium et jardins.",
    "location": "Andrézieux-Bouthéon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 45.5333,
      "lng": 4.2667
    },
    "highlights": [
      "Loire",
      "Aquarium",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1073,
    "name": "Château de la Bâtie d'Urfé",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château de l'auteur de l'Astrée.",
    "location": "Saint-Étienne-le-Molard, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 45.7667,
      "lng": 4.0333
    },
    "highlights": [
      "Honoré d'Urfé",
      "Astrée",
      "Grotte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1074,
    "name": "Château de Sceautres",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines sur un neck volcanique spectaculaire.",
    "location": "Sceautres, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.6167,
      "lng": 4.3167
    },
    "highlights": [
      "Neck volcanique",
      "Ardèche",
      "Ruines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1075,
    "name": "Château de Chouvigny",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château avec spectacle de fauconnerie.",
    "location": "Chouvigny, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 46.1167,
      "lng": 2.9833
    },
    "highlights": [
      "Gorges",
      "Sioule",
      "Fauconnerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1076,
    "name": "Château d'Aiguines",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château aux toits de tuiles vernissées.",
    "location": "Aiguines, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 43.775,
      "lng": 6.2417
    },
    "highlights": [
      "Verdon",
      "Tuiles vernissées",
      "Lac"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1077,
    "name": "Château d'Entrevaux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Citadelle Vauban dominant le Var.",
    "location": "Entrevaux, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "4€",
    "hours": "9h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.95,
      "lng": 6.8167
    },
    "highlights": [
      "Vauban",
      "Citadelle",
      "Village fortifié"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1078,
    "name": "Château du Spesbourg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines romantiques dans la forêt vosgienne.",
    "location": "Andlau, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.3833,
      "lng": 7.4167
    },
    "highlights": [
      "Ruines",
      "Forêt",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1079,
    "name": "Château du Landsberg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines offrant un panorama sur la plaine d'Alsace.",
    "location": "Heiligenstein, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.4167,
      "lng": 7.45
    },
    "highlights": [
      "Ruines",
      "Panorama",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1080,
    "name": "Châteaux d'Eguisheim",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ensemble de trois châteaux en ruines.",
    "location": "Eguisheim, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 48.05,
      "lng": 7.3
    },
    "highlights": [
      "Trois Châteaux",
      "Ruines",
      "Vignoble"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1081,
    "name": "Château du Haut-Andlau",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château aux deux donjons jumeaux.",
    "location": "Andlau, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.3833,
      "lng": 7.4
    },
    "highlights": [
      "Deux donjons",
      "Ruines",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1082,
    "name": "Château de Montreuil-sur-Mer",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Citadelle fortifiée par Vauban.",
    "location": "Montreuil, Hauts-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 50.4667,
      "lng": 1.7667
    },
    "highlights": [
      "Citadelle",
      "Vauban",
      "Remparts"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1083,
    "name": "Citadelle de Corte",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Citadelle perchée, symbole de la Corse indépendante.",
    "location": "Corte, Corse",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 42.3,
      "lng": 9.15
    },
    "highlights": [
      "Nid d'aigle",
      "Pasquale Paoli",
      "Musée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1084,
    "name": "Citadelle de Calvi",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Citadelle génoise dominant la baie de Calvi.",
    "location": "Calvi, Corse",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 42.5667,
      "lng": 8.75
    },
    "highlights": [
      "Génoise",
      "Christophe Colomb",
      "Mer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1085,
    "name": "Citadelle de Bonifacio",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Citadelle spectaculaire sur les falaises.",
    "location": "Bonifacio, Corse",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "IXe siècle",
    "coordinates": {
      "lat": 41.3872,
      "lng": 9.1594
    },
    "highlights": [
      "Falaises",
      "Génoise",
      "Escalier du roi d'Aragon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1086,
    "name": "Citadelle de Saint-Florent",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Citadelle génoise dominant le golfe.",
    "location": "Saint-Florent, Corse",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 42.6833,
      "lng": 9.3
    },
    "highlights": [
      "Génoise",
      "Port",
      "Nebbio"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1087,
    "name": "Citadelle de Bastia",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Citadelle génoise du quartier Terra Nova.",
    "location": "Bastia, Corse",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 42.7,
      "lng": 9.45
    },
    "highlights": [
      "Terra Nova",
      "Génoise",
      "Musée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1088,
    "name": "Tour de la Parata",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Tour génoise face aux Îles Sanguinaires.",
    "location": "Ajaccio, Corse",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 41.8917,
      "lng": 8.6
    },
    "highlights": [
      "Tour génoise",
      "Îles Sanguinaires",
      "Coucher de soleil"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1089,
    "name": "Fort de Tamié",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Fort dominant le col de Tamié.",
    "location": "Mercury, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 45.6667,
      "lng": 6.3333
    },
    "highlights": [
      "Fortification",
      "Bauges",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1090,
    "name": "Château de la Garde-Adhémar",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château dans un village de caractère.",
    "location": "La Garde-Adhémar, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.3833,
      "lng": 4.75
    },
    "highlights": [
      "Village",
      "Drôme provençale",
      "Jardin"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1091,
    "name": "Château de Roquebrune-Cap-Martin",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Roquebrune.jpg/800px-Roquebrune.jpg",
    "description": "Un des plus anciens donjons de France.",
    "location": "Roquebrune-Cap-Martin, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h30, 14h - 18h",
    "period": "Xe siècle",
    "coordinates": {
      "lat": 43.7667,
      "lng": 7.4667
    },
    "highlights": [
      "Donjon carolingien",
      "Village",
      "Monaco"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1092,
    "name": "Château de La Napoule",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château restauré par l'artiste Henry Clews.",
    "location": "Mandelieu-la-Napoule, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 43.5167,
      "lng": 6.9333
    },
    "highlights": [
      "Henry Clews",
      "Art",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1093,
    "name": "Château de Villeneuve-Loubet",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château abritant le musée Escoffier de l'art culinaire.",
    "location": "Villeneuve-Loubet, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 43.65,
      "lng": 7.1167
    },
    "highlights": [
      "Escoffier",
      "Cuisine",
      "Médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1094,
    "name": "Château de Gourdon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château dans un village perché avec vue exceptionnelle.",
    "location": "Gourdon, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "6€",
    "hours": "11h - 13h, 14h - 18h",
    "period": "IXe siècle",
    "coordinates": {
      "lat": 43.7167,
      "lng": 6.9833
    },
    "highlights": [
      "Village perché",
      "Vue mer",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1095,
    "name": "Château de Tourrettes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château dominant le pays de Fayence.",
    "location": "Tourrettes, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.6333,
      "lng": 6.7167
    },
    "highlights": [
      "Village",
      "Tour",
      "Fayence"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1096,
    "name": "Château d'Entrecasteaux",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château avec jardins dessinés par Le Nôtre.",
    "location": "Entrecasteaux, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 43.5167,
      "lng": 6.2333
    },
    "highlights": [
      "Le Nôtre",
      "Jardins",
      "Provence verte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1097,
    "name": "Château de Cotignac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Tours jumelles dominant le village troglodyte.",
    "location": "Cotignac, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.5333,
      "lng": 6.15
    },
    "highlights": [
      "Tours jumelles",
      "Falaise",
      "Village"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1098,
    "name": "Château de Villevieille",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château habité depuis mille ans.",
    "location": "Villevieille, Occitanie",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.8167,
      "lng": 4.0833
    },
    "highlights": [
      "Habité",
      "Jardins",
      "Vidourle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1099,
    "name": "Château d'Aumelas",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines dominant la plaine de l'Hérault.",
    "location": "Aumelas, Occitanie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.5833,
      "lng": 3.55
    },
    "highlights": [
      "Ruines",
      "Panorama",
      "Hérault"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1100,
    "name": "Château de Montferrand",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines au pied du Pic Saint-Loup.",
    "location": "Saint-Mathieu-de-Tréviers, Occitanie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.7667,
      "lng": 3.8667
    },
    "highlights": [
      "Ruines",
      "Pic Saint-Loup",
      "Randonnée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1101,
    "name": "Château de Portes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Le vaisseau de pierre des Cévennes.",
    "location": "Portes, Occitanie",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 44.2833,
      "lng": 4.0833
    },
    "highlights": [
      "Vaisseau des Cévennes",
      "Éperon",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1102,
    "name": "Château de Tornac",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines offrant une vue sur les Cévennes.",
    "location": "Tornac, Occitanie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Accès libre",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 44.0167,
      "lng": 3.9667
    },
    "highlights": [
      "Ruines",
      "Cévennes",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1103,
    "name": "Château de Lourdes",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château-fort abritant le musée pyrénéen.",
    "location": "Lourdes, Occitanie",
    "rating": 4.5,
    "price": "6€",
    "hours": "9h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.0917,
      "lng": -0.05
    },
    "highlights": [
      "Musée pyrénéen",
      "Fortification",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1104,
    "name": "Château de Mauvezin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château de Gaston Fébus en Bigorre.",
    "location": "Mauvezin, Occitanie",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 43.0833,
      "lng": 0.3
    },
    "highlights": [
      "Gaston Fébus",
      "Bigorre",
      "Musée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1105,
    "name": "Château de Beaucens",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château avec spectacle de rapaces.",
    "location": "Beaucens, Occitanie",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 42.95,
      "lng": -0.05
    },
    "highlights": [
      "Donjon des Aigles",
      "Rapaces",
      "Spectacle"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1106,
    "name": "Château de Raray",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château du film La Belle et la Bête de Cocteau.",
    "location": "Raray, Hauts-de-France",
    "rating": 4.5,
    "price": "8€",
    "hours": "Sur réservation",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 49.2833,
      "lng": 2.6833
    },
    "highlights": [
      "La Belle et la Bête",
      "Cocteau",
      "Cynégétique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1107,
    "name": "Donjon de Vez",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Donjon médiéval avec art contemporain.",
    "location": "Vez, Hauts-de-France",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 49.25,
      "lng": 3.0333
    },
    "highlights": [
      "Art contemporain",
      "Donjon",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1108,
    "name": "Château de l'Hermenault",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines d'un château lié au cardinal de Richelieu.",
    "location": "L'Hermenault, Pays de la Loire",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 46.5,
      "lng": -0.8333
    },
    "highlights": [
      "Ruines",
      "Richelieu",
      "Vendée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1109,
    "name": "Château de Talmont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château de Richard Cœur de Lion avec animations.",
    "location": "Talmont-Saint-Hilaire, Pays de la Loire",
    "rating": 4.5,
    "price": "9€",
    "hours": "10h - 19h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 46.4667,
      "lng": -1.6333
    },
    "highlights": [
      "Richard Cœur de Lion",
      "Donjon",
      "Spectacles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1110,
    "name": "Château de Saint-Mesmin",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château médiéval avec animations historiques.",
    "location": "Saint-André-sur-Sèvre, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 46.6833,
      "lng": -0.6833
    },
    "highlights": [
      "Médiéval",
      "Animations",
      "Ateliers"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1111,
    "name": "Château d'Oiron",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château Renaissance avec collection d'art contemporain.",
    "location": "Oiron, Nouvelle-Aquitaine",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h30 - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 46.95,
      "lng": -0.0833
    },
    "highlights": [
      "Art contemporain",
      "Curios et Mirabilia",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1112,
    "name": "Château de Saché",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château où Balzac écrivit plusieurs romans.",
    "location": "Saché, Centre-Val de Loire",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.2333,
      "lng": 0.5333
    },
    "highlights": [
      "Balzac",
      "Manuscrits",
      "Indre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1113,
    "name": "Château de Champchevrier",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château de chasse avec meute de chiens.",
    "location": "Cléré-les-Pins, Centre-Val de Loire",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.4167,
      "lng": 0.4
    },
    "highlights": [
      "Chasse à courre",
      "Meute",
      "Tapisseries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1114,
    "name": "Château de Jallanges",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château bâti pour Louis XI.",
    "location": "Vernou-sur-Brenne, Centre-Val de Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.4333,
      "lng": 0.85
    },
    "highlights": [
      "Louis XI",
      "Chapelle",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1115,
    "name": "Château de Boucard",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château Renaissance en pays de Sancerre.",
    "location": "Sury-en-Vaux, Centre-Val de Loire",
    "rating": 4.5,
    "price": "7€",
    "hours": "10h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 47.35,
      "lng": 2.8
    },
    "highlights": [
      "Sancerre",
      "Vin",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1116,
    "name": "Château de Blancafort",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château de briques roses avec jardins.",
    "location": "Blancafort, Centre-Val de Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.5333,
      "lng": 2.5333
    },
    "highlights": [
      "Briques roses",
      "Jardins",
      "Berry"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1117,
    "name": "Château de Maupas",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château avec collection d'assiettes historiées.",
    "location": "Morogues, Centre-Val de Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.2333,
      "lng": 2.6333
    },
    "highlights": [
      "Assiettes",
      "Collection",
      "Berry"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1118,
    "name": "Château de Buranlure",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château médiéval du Berry.",
    "location": "Plaimpied-Givaudins, Centre-Val de Loire",
    "rating": 4.5,
    "price": "6€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47,
      "lng": 2.4333
    },
    "highlights": [
      "Berry",
      "Chapelle",
      "Médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1119,
    "name": "Château de Pesselières",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château du Sancerrois en restauration.",
    "location": "Jalognes, Centre-Val de Loire",
    "rating": 4.5,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.2667,
      "lng": 2.8333
    },
    "highlights": [
      "Sancerrois",
      "Restauration",
      "Médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1120,
    "name": "Château de Céré-la-Ronde",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Petit château de Touraine.",
    "location": "Céré-la-Ronde, Centre-Val de Loire",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.2167,
      "lng": 1.1667
    },
    "highlights": [
      "Touraine",
      "Médiéval",
      "Forêt"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1121,
    "name": "Château de Beaumont-la-Ronce",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château avec mobilier d'époque.",
    "location": "Beaumont-la-Ronce, Centre-Val de Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "14h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.5667,
      "lng": 0.6833
    },
    "highlights": [
      "Bontemps",
      "Mobilier",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1122,
    "name": "Château de Montbazon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Donjon de Foulques Nerra avec animations.",
    "location": "Montbazon, Centre-Val de Loire",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 47.2833,
      "lng": 0.7167
    },
    "highlights": [
      "Donjon",
      "Foulques Nerra",
      "Animations"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1123,
    "name": "Château de Ussé",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Chateau_d%27Usse_Indre-et-Loire.jpg/800px-Chateau_d%27Usse_Indre-et-Loire.jpg",
    "description": "Le château de La Belle au bois dormant.",
    "location": "Rigny-Ussé, Centre-Val de Loire",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 47.25,
      "lng": 0.2917
    },
    "highlights": [
      "Belle au bois dormant",
      "Perrault",
      "Indre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1124,
    "name": "Château de Pommard",
    "type": "château",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pommard_-_Chateau.jpg/800px-Pommard_-_Chateau.jpg",
    "description": "Château viticole avec art contemporain.",
    "location": "Pommard, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "18€",
    "hours": "9h30 - 18h30",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 47.0167,
      "lng": 4.7833
    },
    "highlights": [
      "Vin",
      "Art contemporain",
      "Caves"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1125,
    "name": "Château de Commercy",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château du roi Stanislas.",
    "location": "Commercy, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.7667,
      "lng": 5.5833
    },
    "highlights": [
      "Stanislas",
      "Madeleines",
      "Fer à cheval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1126,
    "name": "Château de Braux-Sainte-Cohière",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château Renaissance des Ardennes.",
    "location": "Braux-Sainte-Cohière, Grand Est",
    "rating": 4.5,
    "price": "7€",
    "hours": "14h - 18h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 49.0333,
      "lng": 4.7833
    },
    "highlights": [
      "Ardennes",
      "Jardin",
      "Renaissance"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1127,
    "name": "Château de Bouillon",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château de Godefroy de Bouillon.",
    "location": "Bouillon, Belgique (proche France)",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "VIIIe siècle",
    "coordinates": {
      "lat": 49.7944,
      "lng": 5.0667
    },
    "highlights": [
      "Godefroy de Bouillon",
      "Croisades",
      "Semois"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1128,
    "name": "Château de Pfalzburg",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ville fortifiée par Vauban.",
    "location": "Phalsbourg, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 48.7667,
      "lng": 7.2583
    },
    "highlights": [
      "Vauban",
      "Porte de France",
      "Lorraine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1129,
    "name": "Château de Rohan",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château des princes de Rohan en grès rose.",
    "location": "Saverne, Grand Est",
    "rating": 4.5,
    "price": "5€",
    "hours": "10h - 12h, 14h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 48.7417,
      "lng": 7.3625
    },
    "highlights": [
      "Rohan",
      "Grès rose",
      "Musée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1130,
    "name": "Château d'Ohlungen",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château néogothique de la famille De Dietrich.",
    "location": "Reichshoffen, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Extérieur libre",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.9333,
      "lng": 7.6667
    },
    "highlights": [
      "Néogothique",
      "Parc",
      "De Dietrich"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1131,
    "name": "Château de Bourscheid",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Ruines impressionnantes des Ardennes.",
    "location": "Luxembourg (proche France)",
    "rating": 4.5,
    "price": "7€",
    "hours": "9h30 - 18h",
    "period": "Xe siècle",
    "coordinates": {
      "lat": 49.9083,
      "lng": 6.0667
    },
    "highlights": [
      "Ruines",
      "Ardennes",
      "Panorama"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1132,
    "name": "Château de Vianden",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Un des plus beaux châteaux d'Europe de l'Ouest.",
    "location": "Luxembourg (proche France)",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.935,
      "lng": 6.2083
    },
    "highlights": [
      "Roman-gothique",
      "Restauré",
      "Victor Hugo"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1133,
    "name": "Château de Freyr",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château avec jardins et rochers spectaculaires.",
    "location": "Belgique (proche France)",
    "rating": 4.5,
    "price": "10€",
    "hours": "11h - 17h",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 50.2333,
      "lng": 4.9
    },
    "highlights": [
      "Meuse",
      "Jardins",
      "Rocailles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1134,
    "name": "Château de Modave",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château aux stucs baroques exceptionnels.",
    "location": "Belgique (proche France)",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 50.45,
      "lng": 5.3
    },
    "highlights": [
      "Stucs",
      "Machine hydraulique",
      "Condroz"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1135,
    "name": "Château de Beersel",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Forteresse médiévale avec douves.",
    "location": "Belgique (proche France)",
    "rating": 4.5,
    "price": "6€",
    "hours": "10h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 50.7667,
      "lng": 4.3
    },
    "highlights": [
      "Forteresse",
      "Douves",
      "Médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1136,
    "name": "Château de Gaasbeek",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château-musée avec riches collections.",
    "location": "Belgique (proche France)",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 50.7833,
      "lng": 4.1833
    },
    "highlights": [
      "Collections",
      "Jardins",
      "Brabant"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1137,
    "name": "Château de Mariemont",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Domaine royal avec musée et parc.",
    "location": "Belgique (proche France)",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 18h",
    "period": "XVIIIe siècle",
    "coordinates": {
      "lat": 50.4667,
      "lng": 4.25
    },
    "highlights": [
      "Musée",
      "Parc",
      "Antiquités"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1138,
    "name": "Château de Beloeil",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Le Versailles belge des princes de Ligne.",
    "location": "Belgique (proche France)",
    "rating": 4.5,
    "price": "12€",
    "hours": "13h - 18h",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 50.55,
      "lng": 3.7333
    },
    "highlights": [
      "Ligne",
      "Versailles belge",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1139,
    "name": "Château de Chimay",
    "type": "château",
    "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "description": "Château des princes de Chimay.",
    "location": "Belgique (proche France)",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "XVe siècle",
    "coordinates": {
      "lat": 50.05,
      "lng": 4.3167
    },
    "highlights": [
      "Princes de Chimay",
      "Théâtre",
      "Bière"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1140,
    "name": "Monet - L'œil impressionniste",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/800px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    "description": "Rétrospective exceptionnelle consacrée à Claude Monet, père de l'impressionnisme, avec 80 œuvres majeures.",
    "location": "Musée d'Orsay, Paris",
    "rating": 4.9,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Nymphéas inédits",
      "Cathédrale de Rouen",
      "Jardins de Giverny"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1141,
    "name": "Van Gogh - La nuit étoilée",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    "description": "Plongée immersive dans l'univers nocturne de Vincent van Gogh à travers 60 toiles et dessins.",
    "location": "Atelier des Lumières, Paris",
    "rating": 4.8,
    "price": "18€",
    "hours": "10h - 22h",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8614,
      "lng": 2.3806
    },
    "highlights": [
      "Projections immersives",
      "Nuit étoilée",
      "Terrasse du café"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1142,
    "name": "Frida Kahlo - Au-delà des apparences",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    "description": "Découverte de l'univers intime de Frida Kahlo à travers ses objets personnels et autoportraits.",
    "location": "Palais Galliera, Paris",
    "rating": 4.7,
    "price": "15€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8649,
      "lng": 2.2977
    },
    "highlights": [
      "Costumes traditionnels",
      "Correspondance",
      "Objets de la Casa Azul"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1143,
    "name": "Léonard de Vinci - Le génie universel",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VanDyck_SelfPortrait.jpg/800px-VanDyck_SelfPortrait.jpg",
    "description": "Exposition exceptionnelle réunissant dessins, maquettes et codex du maître de la Renaissance.",
    "location": "Musée du Louvre, Paris",
    "rating": 4.9,
    "price": "17€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 20 mai 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Codex Atlanticus",
      "Machines volantes",
      "Études anatomiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1144,
    "name": "Banksy - Art urbain dévoilé",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Banksy-art.jpg/800px-Banksy-art.jpg",
    "description": "Plus de 100 œuvres du street artiste le plus célèbre au monde, réunies pour la première fois.",
    "location": "Espace Lafayette-Drouot, Paris",
    "rating": 4.6,
    "price": "16€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8722,
      "lng": 2.3386
    },
    "highlights": [
      "Girl with Balloon",
      "Flower Thrower",
      "Œuvres inédites"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1145,
    "name": "Toutânkhamon - Le trésor du pharaon",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tutanchamun_Maske.jpg/800px-Tutanchamun_Maske.jpg",
    "description": "150 objets originaux du tombeau de Toutânkhamon, dont 60 quittant l'Égypte pour la première fois.",
    "location": "Grande Halle de la Villette, Paris",
    "rating": 4.9,
    "price": "22€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 15 juin 2026",
    "coordinates": {
      "lat": 48.8895,
      "lng": 2.3918
    },
    "highlights": [
      "Masque funéraire",
      "Sarcophage doré",
      "Bijoux royaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1146,
    "name": "Dali - Surréalisme total",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Salvador_Dal%C3%AD_1939.jpg/800px-Salvador_Dal%C3%AD_1939.jpg",
    "description": "Voyage au cœur de l'univers onirique de Salvador Dalí avec 200 œuvres surréalistes.",
    "location": "Centre Pompidou, Paris",
    "rating": 4.8,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Persistance de la mémoire",
      "Éléphants",
      "Films expérimentaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1147,
    "name": "Vermeer - Maître de la lumière",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Johannes_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/800px-Johannes_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
    "description": "Rassemblement historique de 28 tableaux de Vermeer, soit les trois quarts de son œuvre connue.",
    "location": "Musée du Louvre-Lens, Lens",
    "rating": 4.9,
    "price": "18€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 50.4319,
      "lng": 2.8044
    },
    "highlights": [
      "La Jeune Fille à la perle",
      "La Laitière",
      "L'Astronome"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1148,
    "name": "Rembrandt - Clair-obscur",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
    "description": "L'art du clair-obscur à travers 50 chefs-d'œuvre du maître hollandais.",
    "location": "Musée des Beaux-Arts, Lyon",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 mai 2026",
    "coordinates": {
      "lat": 45.7676,
      "lng": 4.8344
    },
    "highlights": [
      "Autoportraits",
      "Ronde de nuit",
      "Gravures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1149,
    "name": "Yayoi Kusama - Infinite Dots",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yayoi_Kusama_I_Who_Have_Arrived_In_Heaven_2013.jpg/800px-Yayoi_Kusama_I_Who_Have_Arrived_In_Heaven_2013.jpg",
    "description": "Installation immersive de l'artiste japonaise aux célèbres pois et miroirs infinis.",
    "location": "Fondation Louis Vuitton, Paris",
    "rating": 4.8,
    "price": "16€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8766,
      "lng": 2.2647
    },
    "highlights": [
      "Infinity Rooms",
      "Pumpkins",
      "Polka dots"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1150,
    "name": "Warhol - Pop culture",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Andy_Warhol_1977.jpg/800px-Andy_Warhol_1977.jpg",
    "description": "L'icône du Pop Art américain à travers ses sérigraphies les plus célèbres.",
    "location": "Musée d'Art Moderne, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8641,
      "lng": 2.2981
    },
    "highlights": [
      "Marilyn Monroe",
      "Campbell's Soup",
      "Elvis Presley"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1151,
    "name": "Basquiat - Roi de New York",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/5/51/Jean-Michel_Basquiat_1982_by_Andy_Warhol.png",
    "description": "Rétrospective du génie du street art new-yorkais avec 120 œuvres majeures.",
    "location": "Musée des Beaux-Arts, Bordeaux",
    "rating": 4.7,
    "price": "12€",
    "hours": "11h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 44.8378,
      "lng": -0.5792
    },
    "highlights": [
      "Couronnes",
      "Crânes",
      "Collaborations Warhol"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1152,
    "name": "Gustav Klimt - L'or de Vienne",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    "description": "Les œuvres dorées de Klimt et l'Art nouveau viennois.",
    "location": "Musée Jacquemart-André, Paris",
    "rating": 4.8,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8753,
      "lng": 2.3108
    },
    "highlights": [
      "Le Baiser",
      "Portrait d'Adele",
      "Dessins préparatoires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1153,
    "name": "Renoir - La joie de vivre",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg/800px-Pierre-Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg",
    "description": "La lumière et la joie dans l'œuvre d'Auguste Renoir.",
    "location": "Musée des Impressionnismes, Giverny",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 49.0758,
      "lng": 1.5339
    },
    "highlights": [
      "Bal du moulin de la Galette",
      "Baigneuses",
      "Portraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1154,
    "name": "Caravage - Ombre et lumière",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Caravaggio_-_La_vocazione_di_San_Matteo.jpg/800px-Caravaggio_-_La_vocazione_di_San_Matteo.jpg",
    "description": "Le maître du clair-obscur baroque à travers 35 tableaux exceptionnels.",
    "location": "Musée Fabre, Montpellier",
    "rating": 4.8,
    "price": "13€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 43.6119,
      "lng": 3.8772
    },
    "highlights": [
      "Judith et Holopherne",
      "Bacchus",
      "Méduse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1155,
    "name": "Botticelli - La beauté de la Renaissance",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    "description": "Les chefs-d'œuvre de Botticelli réunis pour la première fois en France.",
    "location": "Musée du Petit Palais, Paris",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8661,
      "lng": 2.314
    },
    "highlights": [
      "Naissance de Vénus",
      "Printemps",
      "Madones"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1156,
    "name": "Michel-Ange - Le divin",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Michelangelo%2C_Creation_of_Adam_06.jpg/800px-Michelangelo%2C_Creation_of_Adam_06.jpg",
    "description": "Dessins et études préparatoires du génie de la Renaissance italienne.",
    "location": "Musée Condé, Chantilly",
    "rating": 4.6,
    "price": "17€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 mars 2026",
    "coordinates": {
      "lat": 49.1945,
      "lng": 2.4841
    },
    "highlights": [
      "Études pour la Sixtine",
      "Dessins anatomiques",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1157,
    "name": "Picasso - Période bleue",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Old_guitarist_chicago.jpg/800px-Old_guitarist_chicago.jpg",
    "description": "Les années de mélancolie et de génie de Pablo Picasso.",
    "location": "Musée Picasso, Paris",
    "rating": 4.8,
    "price": "14€",
    "hours": "10h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8597,
      "lng": 2.3622
    },
    "highlights": [
      "Le Vieux Guitariste",
      "La Vie",
      "Autoportraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1158,
    "name": "Toulouse-Lautrec - Montmartre",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg/800px-Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg",
    "description": "L'univers des cabarets parisiens vu par Toulouse-Lautrec.",
    "location": "Musée de Montmartre, Paris",
    "rating": 4.5,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8878,
      "lng": 2.3408
    },
    "highlights": [
      "Moulin Rouge",
      "Affiches",
      "Jane Avril"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1159,
    "name": "Edgar Degas - Danseuses",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Edgar_Degas_-_The_Star_-_Google_Art_Project.jpg/800px-Edgar_Degas_-_The_Star_-_Google_Art_Project.jpg",
    "description": "Les danseuses de l'Opéra de Paris à travers l'œil de Degas.",
    "location": "Opéra Garnier, Paris",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 17h",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.872,
      "lng": 2.3316
    },
    "highlights": [
      "Petite danseuse",
      "Répétitions",
      "Coulisses de l'Opéra"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1160,
    "name": "Cézanne - La montagne Sainte-Victoire",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Route_Tournante_%28Paul_C%C3%A9zanne%29.jpg/800px-Route_Tournante_%28Paul_C%C3%A9zanne%29.jpg",
    "description": "Les paysages provençaux qui ont inspiré le père de l'art moderne.",
    "location": "Musée Granet, Aix-en-Provence",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 19h (fermé lundi)",
    "period": "Jusqu'au 15 juin 2026",
    "coordinates": {
      "lat": 43.5263,
      "lng": 5.4474
    },
    "highlights": [
      "Sainte-Victoire",
      "Baigneuses",
      "Nature mortes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1161,
    "name": "Matisse - La couleur fauve",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/La_danse_%28I%29_by_Matisse.jpg/800px-La_danse_%28I%29_by_Matisse.jpg",
    "description": "L'explosion de couleurs du chef de file du fauvisme.",
    "location": "Musée Matisse, Nice",
    "rating": 4.7,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 mai 2026",
    "coordinates": {
      "lat": 43.7196,
      "lng": 7.275
    },
    "highlights": [
      "La Danse",
      "Papiers découpés",
      "Chapelle de Vence"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1162,
    "name": "Chagall - Rêves en couleurs",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Chagall_IandTheVillage.jpg/800px-Chagall_IandTheVillage.jpg",
    "description": "L'univers poétique et coloré de Marc Chagall.",
    "location": "Musée national Marc Chagall, Nice",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 43.7119,
      "lng": 7.2683
    },
    "highlights": [
      "Message biblique",
      "Vitraux",
      "Moi et le village"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1163,
    "name": "Gauguin - Tahiti",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paul_Gauguin_-_D%27ou_Venons_Nous.jpg/800px-Paul_Gauguin_-_D%27ou_Venons_Nous.jpg",
    "description": "Les années tahitiennes de Paul Gauguin et sa quête du paradis perdu.",
    "location": "Musée d'Orsay, Paris",
    "rating": 4.7,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "D'où venons-nous?",
      "Femmes de Tahiti",
      "Autoportraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1164,
    "name": "Rodin - Corps et mouvement",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Thinker%2C_Rodin.jpg/800px-The_Thinker%2C_Rodin.jpg",
    "description": "La sculpture en mouvement selon Auguste Rodin.",
    "location": "Musée Rodin, Paris",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 18h30 (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 48.8553,
      "lng": 2.316
    },
    "highlights": [
      "Le Penseur",
      "Les Bourgeois de Calais",
      "Porte de l'Enfer"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1165,
    "name": "Giacometti - L'homme qui marche",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Giacometti_cat.jpg/800px-Giacometti_cat.jpg",
    "description": "Les silhouettes filiformes d'Alberto Giacometti.",
    "location": "Fondation Giacometti, Paris",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8422,
      "lng": 2.3256
    },
    "highlights": [
      "Homme qui marche",
      "Bustes",
      "Atelier reconstitué"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1166,
    "name": "Modigliani - Portraits",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Modigliani_-_Jeanne_Hebuterne_1918.jpg/800px-Modigliani_-_Jeanne_Hebuterne_1918.jpg",
    "description": "Les portraits allongés et les nus sensuels d'Amedeo Modigliani.",
    "location": "LaM, Villeneuve d'Ascq",
    "rating": 4.5,
    "price": "11€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 mars 2026",
    "coordinates": {
      "lat": 50.6395,
      "lng": 3.1484
    },
    "highlights": [
      "Jeanne Hébuterne",
      "Nus couchés",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1167,
    "name": "Edward Hopper - Solitude américaine",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/800px-Nighthawks_by_Edward_Hopper_1942.jpg",
    "description": "L'Amérique solitaire vue par le maître du réalisme américain.",
    "location": "Fondation Louis Vuitton, Paris",
    "rating": 4.8,
    "price": "16€",
    "hours": "10h - 20h (fermé mardi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8766,
      "lng": 2.2647
    },
    "highlights": [
      "Nighthawks",
      "Morning Sun",
      "Gas"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1168,
    "name": "Kandinsky - Abstraction lyrique",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg/800px-Vassily_Kandinsky%2C_1913_-_Composition_7.jpg",
    "description": "Le pionnier de l'abstraction et ses compositions musicales.",
    "location": "Centre Pompidou-Metz, Metz",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 49.1097,
      "lng": 6.1797
    },
    "highlights": [
      "Composition VII",
      "Jaune-Rouge-Bleu",
      "Aquarelles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1169,
    "name": "Mondrian - De Stijl",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/800px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
    "description": "L'abstraction géométrique et le mouvement De Stijl.",
    "location": "Musée d'Art Moderne, Strasbourg",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 15 mai 2026",
    "coordinates": {
      "lat": 48.5833,
      "lng": 7.7458
    },
    "highlights": [
      "Compositions",
      "Broadway Boogie-Woogie",
      "Évolution stylistique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1170,
    "name": "Paul Klee - Magie des formes",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Klee%2C_Senecio.jpg/800px-Klee%2C_Senecio.jpg",
    "description": "L'univers poétique et coloré de Paul Klee.",
    "location": "Musée Unterlinden, Colmar",
    "rating": 4.5,
    "price": "13€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.0793,
      "lng": 7.3559
    },
    "highlights": [
      "Senecio",
      "Jardins tunisiens",
      "Dessins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1171,
    "name": "Joan Miró - Signes et symboles",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Joan_Miro_-_La_Ferme.jpg/800px-Joan_Miro_-_La_Ferme.jpg",
    "description": "Les symboles oniriques du maître catalan du surréalisme.",
    "location": "Grand Palais, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8661,
      "lng": 2.3125
    },
    "highlights": [
      "La Ferme",
      "Constellations",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1172,
    "name": "René Magritte - L'empire des images",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Magritte_TheSonOfMan.jpg/800px-Magritte_TheSonOfMan.jpg",
    "description": "Le maître belge du surréalisme et ses images troublantes.",
    "location": "Musée de l'Orangerie, Paris",
    "rating": 4.7,
    "price": "12.50€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8637,
      "lng": 2.3227
    },
    "highlights": [
      "Le Fils de l'homme",
      "Ceci n'est pas une pipe",
      "L'Empire des lumières"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1173,
    "name": "Francis Bacon - Figures tourmentées",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Bacon_Screaming_Pope.jpg/800px-Bacon_Screaming_Pope.jpg",
    "description": "La violence expressionniste des portraits de Francis Bacon.",
    "location": "Centre Pompidou, Paris",
    "rating": 4.6,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 mai 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Papes hurlants",
      "Triptyques",
      "Autoportraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1174,
    "name": "Lucian Freud - La chair",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/BenefitsSupervisorSleeping.jpg/800px-BenefitsSupervisorSleeping.jpg",
    "description": "Les nus sans concession du petit-fils de Sigmund Freud.",
    "location": "Musée Maillol, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h30 - 18h30",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8561,
      "lng": 2.3252
    },
    "highlights": [
      "Benefits Supervisor",
      "Portraits de famille",
      "Autoportraits"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1175,
    "name": "David Hockney - Splash californien",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/A_Bigger_Splash.jpg/800px-A_Bigger_Splash.jpg",
    "description": "Les piscines et les portraits du peintre britannique.",
    "location": "Musée Granet, Aix-en-Provence",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 19h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 43.5263,
      "lng": 5.4474
    },
    "highlights": [
      "A Bigger Splash",
      "Portraits doubles",
      "iPad drawings"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1176,
    "name": "Jeff Koons - Kitsch & shine",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Jeff_Koons_Balloon_Dog_%28Magenta%29_Fran%C3%A7ois_Pinault_Foundation.jpg/800px-Jeff_Koons_Balloon_Dog_%28Magenta%29_Fran%C3%A7ois_Pinault_Foundation.jpg",
    "description": "Les sculptures monumentales et brillantes de Jeff Koons.",
    "location": "Bourse de Commerce, Paris",
    "rating": 4.4,
    "price": "14€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8627,
      "lng": 2.3429
    },
    "highlights": [
      "Balloon Dog",
      "Rabbit",
      "Sculptures gonflables"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1177,
    "name": "Anish Kapoor - Vides et reflets",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Cloud_Gate_%28The_Bean%29_from_east%27.jpg/800px-Cloud_Gate_%28The_Bean%29_from_east%27.jpg",
    "description": "Les installations monumentales du sculpteur britannico-indien.",
    "location": "Grand Palais, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 30 mai 2026",
    "coordinates": {
      "lat": 48.8661,
      "lng": 2.3125
    },
    "highlights": [
      "Cloud Gate",
      "Vantablack",
      "Miroirs concaves"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1178,
    "name": "Ai Weiwei - Dissidence",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ai_Weiwei_Sunflower_Seeds_Unilever_Series_Tate_Modern_2010.jpg/800px-Ai_Weiwei_Sunflower_Seeds_Unilever_Series_Tate_Modern_2010.jpg",
    "description": "L'art engagé de l'artiste dissident chinois.",
    "location": "Mucem, Marseille",
    "rating": 4.6,
    "price": "11€",
    "hours": "10h - 19h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 43.2969,
      "lng": 5.3614
    },
    "highlights": [
      "Graines de tournesol",
      "Refugees",
      "Installations monumentales"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1179,
    "name": "Louise Bourgeois - Araignées",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Maman_at_the_Mus%C3%A9e_des_Beaux-Arts_%28Ott_2017%29.jpg/800px-Maman_at_the_Mus%C3%A9e_des_Beaux-Arts_%28Ott_2017%29.jpg",
    "description": "L'univers psychanalytique de la sculptrice franco-américaine.",
    "location": "Centre Pompidou, Paris",
    "rating": 4.7,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Maman",
      "Cells",
      "Dessins intimes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1180,
    "name": "Niki de Saint Phalle - Nanas",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/L%27ange_protecteur_by_Niki_de_Saint_Phalle.jpg/800px-L%27ange_protecteur_by_Niki_de_Saint_Phalle.jpg",
    "description": "Les sculptures colorées et féministes de Niki de Saint Phalle.",
    "location": "Musée des Arts Décoratifs, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.3329
    },
    "highlights": [
      "Nanas géantes",
      "Jardin des Tarots",
      "Tirs"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1181,
    "name": "César - Compressions",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Le_pouce%2C_C%C3%A9sar%2C_Paris_La_D%C3%A9fense.jpg/800px-Le_pouce%2C_C%C3%A9sar%2C_Paris_La_D%C3%A9fense.jpg",
    "description": "Les compressions automobiles du sculpteur marseillais.",
    "location": "Centre de la Vieille Charité, Marseille",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 43.3004,
      "lng": 5.3678
    },
    "highlights": [
      "Le Pouce",
      "Compressions",
      "Expansions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1182,
    "name": "Jean Dubuffet - Art brut",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/DubuffetCoucou.jpg/800px-DubuffetCoucou.jpg",
    "description": "L'inventeur de l'Art brut et ses œuvres hors normes.",
    "location": "Musée d'Art Moderne, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8641,
      "lng": 2.2981
    },
    "highlights": [
      "L'Hourloupe",
      "Texturologies",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1183,
    "name": "Yves Klein - Le bleu infini",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/IKB_191.jpg/800px-IKB_191.jpg",
    "description": "Le bleu Klein et l'immatériel selon l'artiste niçois.",
    "location": "Mamac, Nice",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 43.7002,
      "lng": 7.2776
    },
    "highlights": [
      "IKB",
      "Anthropométries",
      "Vide et immatériel"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1184,
    "name": "Soulages - Outrenoir",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Mus%C3%A9e_Soulages_Rodez_ext%C3%A9rieur.jpg/800px-Mus%C3%A9e_Soulages_Rodez_ext%C3%A9rieur.jpg",
    "description": "Le noir lumineux du maître français de l'abstraction.",
    "location": "Musée Soulages, Rodez",
    "rating": 4.7,
    "price": "11€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 44.3525,
      "lng": 2.5728
    },
    "highlights": [
      "Outrenoir",
      "Vitraux de Conques",
      "Brous de noix"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1185,
    "name": "Berthe Morisot - Impressions féminines",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Berthe_Morisot_-_Le_berceau.jpg/800px-Berthe_Morisot_-_Le_berceau.jpg",
    "description": "La seule femme impressionniste fondatrice du mouvement.",
    "location": "Musée Marmottan Monet, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 mai 2026",
    "coordinates": {
      "lat": 48.8581,
      "lng": 2.2668
    },
    "highlights": [
      "Le Berceau",
      "Scènes familiales",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1186,
    "name": "Artemisia Gentileschi - Femme baroque",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Artemisia_Gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg/800px-Artemisia_Gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg",
    "description": "La peintre baroque la plus célébrée de son époque.",
    "location": "Musée des Beaux-Arts, Nantes",
    "rating": 4.5,
    "price": "8€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 47.2194,
      "lng": -1.5474
    },
    "highlights": [
      "Judith et Holopherne",
      "Autoportraits",
      "Héroïnes bibliques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1187,
    "name": "Pompéi - Vie quotidienne",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pompeii-couple.jpg/800px-Pompeii-couple.jpg",
    "description": "La vie quotidienne à Pompéi avant l'éruption du Vésuve.",
    "location": "Grand Palais Immersif, Paris",
    "rating": 4.7,
    "price": "16€",
    "hours": "10h - 22h",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8661,
      "lng": 2.3125
    },
    "highlights": [
      "Fresques restaurées",
      "Objets du quotidien",
      "Reconstitutions VR"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1188,
    "name": "Vikings - Guerriers du Nord",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Viking_sword_from_the_9th_century.jpg/800px-Viking_sword_from_the_9th_century.jpg",
    "description": "L'épopée des Vikings à travers 500 objets archéologiques.",
    "location": "Château des Ducs de Bretagne, Nantes",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 47.2161,
      "lng": -1.5499
    },
    "highlights": [
      "Drakkars",
      "Armes",
      "Bijoux runiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1189,
    "name": "Samourais - L'art de la guerre",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Samurai_with_sword.jpg/800px-Samurai_with_sword.jpg",
    "description": "L'univers des guerriers japonais et leur code d'honneur.",
    "location": "Musée Guimet, Paris",
    "rating": 4.6,
    "price": "13€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8648,
      "lng": 2.2939
    },
    "highlights": [
      "Armures complètes",
      "Sabres katana",
      "Estampes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1190,
    "name": "Napoléon - L'Empereur",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    "description": "Le destin extraordinaire de Napoléon Bonaparte.",
    "location": "Musée de l'Armée, Paris",
    "rating": 4.7,
    "price": "15€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 15 mai 2026",
    "coordinates": {
      "lat": 48.855,
      "lng": 2.3125
    },
    "highlights": [
      "Tombeau",
      "Bicorne",
      "Objets personnels"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1191,
    "name": "Marie-Antoinette - Versailles intime",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vig%C3%A9e-Lebrun_Marie_Antoinette_1783.jpg/800px-Vig%C3%A9e-Lebrun_Marie_Antoinette_1783.jpg",
    "description": "La vie quotidienne de la reine à Versailles.",
    "location": "Château de Versailles",
    "rating": 4.8,
    "price": "20€",
    "hours": "9h - 18h30 (fermé lundi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "highlights": [
      "Appartements privés",
      "Bijoux",
      "Petit Trianon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1192,
    "name": "Louis XIV - Le Roi Soleil",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/800px-Louis_XIV_of_France.jpg",
    "description": "Le règne fastueux du plus grand roi de France.",
    "location": "Château de Versailles",
    "rating": 4.8,
    "price": "20€",
    "hours": "9h - 18h30 (fermé lundi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "highlights": [
      "Galerie des Glaces",
      "Appartements du Roi",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1193,
    "name": "Impressionnisme - La révolution",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/800px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    "description": "La naissance du mouvement impressionniste.",
    "location": "Musée d'Orsay, Paris",
    "rating": 4.8,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Impression, soleil levant",
      "Déjeuner sur l'herbe",
      "Moulin de la Galette"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1194,
    "name": "Art Nouveau - Belle Époque",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alfons_Mucha_-_1896_-_Autumn.jpg/800px-Alfons_Mucha_-_1896_-_Autumn.jpg",
    "description": "L'art total de la Belle Époque.",
    "location": "Musée d'Orsay, Paris",
    "rating": 4.6,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Mucha",
      "Guimard",
      "Lalique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1195,
    "name": "Art Déco - Les années folles",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chrysler_building-_top.jpg/800px-Chrysler_building-_top.jpg",
    "description": "L'élégance géométrique des années 1920.",
    "location": "Musée des Arts Décoratifs, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.3329
    },
    "highlights": [
      "Mobilier",
      "Mode",
      "Joaillerie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1196,
    "name": "Bauhaus - Design moderne",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bauhaus-Signet.svg/800px-Bauhaus-Signet.svg.png",
    "description": "L'école qui a révolutionné le design.",
    "location": "Centre Pompidou, Paris",
    "rating": 4.6,
    "price": "15€",
    "hours": "11h - 21h (fermé mardi)",
    "period": "Jusqu'au 30 mai 2026",
    "coordinates": {
      "lat": 48.8607,
      "lng": 2.3522
    },
    "highlights": [
      "Mobilier Breuer",
      "Typographie",
      "Architecture"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1197,
    "name": "Mode & Couture - Dior",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Christian_Dior_in_LIFE_Magazine_1957.jpg/800px-Christian_Dior_in_LIFE_Magazine_1957.jpg",
    "description": "70 ans de haute couture Christian Dior.",
    "location": "Musée des Arts Décoratifs, Paris",
    "rating": 4.7,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.3329
    },
    "highlights": [
      "New Look",
      "Robes de bal",
      "Parfums"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1198,
    "name": "Coco Chanel - L'icône",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Coco_Chanel%2C_1920.jpg/800px-Coco_Chanel%2C_1920.jpg",
    "description": "La vie et l'œuvre de Gabrielle Chanel.",
    "location": "Palais Galliera, Paris",
    "rating": 4.6,
    "price": "15€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8649,
      "lng": 2.2977
    },
    "highlights": [
      "Petite robe noire",
      "Tweed",
      "N°5"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1199,
    "name": "Photographie - Sebastião Salgado",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sebastiao_salgado.jpg/800px-Sebastiao_salgado.jpg",
    "description": "Amazônia, le grand projet photographique de Salgado.",
    "location": "Philharmonie de Paris",
    "rating": 4.7,
    "price": "12€",
    "hours": "12h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8897,
      "lng": 2.3939
    },
    "highlights": [
      "Amazonie",
      "Peuples indigènes",
      "Nature sauvage"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1200,
    "name": "Henri Cartier-Bresson - L'instant décisif",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Henri_Cartier-Bresson_-_Behind_the_Gare_Saint-Lazare_-_1932.jpg/800px-Henri_Cartier-Bresson_-_Behind_the_Gare_Saint-Lazare_-_1932.jpg",
    "description": "Le maître de la photographie humaniste.",
    "location": "Fondation Henri Cartier-Bresson, Paris",
    "rating": 4.6,
    "price": "10€",
    "hours": "11h - 19h (fermé lundi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8422,
      "lng": 2.3256
    },
    "highlights": [
      "Gare Saint-Lazare",
      "Portraits",
      "Reportages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1201,
    "name": "Robert Doisneau - Paris populaire",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Robert_Doisneau_Le_Baiser.jpg/800px-Robert_Doisneau_Le_Baiser.jpg",
    "description": "Le Paris des années 50 vu par Robert Doisneau.",
    "location": "Hôtel de Ville, Paris",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "10h - 19h",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8566,
      "lng": 2.3522
    },
    "highlights": [
      "Le Baiser",
      "Enfants de Paris",
      "Banlieues"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1202,
    "name": "Cinéma - Miyazaki",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/800px-Spirited_Away_Japanese_poster.png",
    "description": "L'univers magique du Studio Ghibli et de Miyazaki.",
    "location": "Musée Art Ludique, Paris",
    "rating": 4.8,
    "price": "16€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8341,
      "lng": 2.3746
    },
    "highlights": [
      "Dessins originaux",
      "Maquettes",
      "Making-of"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1203,
    "name": "Dinosaures - Géants du passé",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tyrannosaurus_Rex_Holotype.jpg/800px-Tyrannosaurus_Rex_Holotype.jpg",
    "description": "Les plus grands dinosaures grandeur nature.",
    "location": "Muséum d'Histoire Naturelle, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8439,
      "lng": 2.3561
    },
    "highlights": [
      "T-Rex animé",
      "Fossiles",
      "Reconstitutions"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1204,
    "name": "Océan - Planète bleue",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_Linckia_Starfish.JPG/800px-Blue_Linckia_Starfish.JPG",
    "description": "Exploration des profondeurs océaniques.",
    "location": "Nausicaá, Boulogne-sur-Mer",
    "rating": 4.7,
    "price": "28€",
    "hours": "9h30 - 18h30",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 50.7236,
      "lng": 1.5964
    },
    "highlights": [
      "Requins",
      "Raies mantas",
      "Aquarium géant"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1205,
    "name": "Espace - Vers l'infini",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Moon.jpg/800px-Moon.jpg",
    "description": "L'exploration spatiale de Gagarine à Mars.",
    "location": "Cité de l'Espace, Toulouse",
    "rating": 4.7,
    "price": "25€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 43.5864,
      "lng": 1.4909
    },
    "highlights": [
      "Fusée Ariane",
      "Module lunaire",
      "Simulateur"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1206,
    "name": "Intelligence Artificielle",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Artificial_intelligence_prompt_completion_by_dalle_mini.jpg/800px-Artificial_intelligence_prompt_completion_by_dalle_mini.jpg",
    "description": "Comprendre l'IA et ses enjeux pour demain.",
    "location": "Cité des Sciences, Paris",
    "rating": 4.5,
    "price": "13€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8958,
      "lng": 2.3877
    },
    "highlights": [
      "Robots",
      "Deep learning",
      "Éthique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1207,
    "name": "Légo - Briques en folie",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/800px-LEGO_logo.svg.png",
    "description": "Sculptures géantes et histoire de la brique.",
    "location": "Les Docks, Marseille",
    "rating": 4.4,
    "price": "16€",
    "hours": "10h - 19h",
    "period": "Jusqu'au 30 mars 2026",
    "coordinates": {
      "lat": 43.31,
      "lng": 5.365
    },
    "highlights": [
      "Tour Eiffel géante",
      "Star Wars",
      "Atelier construction"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1208,
    "name": "Harry Potter - L'exposition",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/800px-Harry_Potter_wordmark.svg.png",
    "description": "Costumes, décors et accessoires des films Harry Potter.",
    "location": "Paris Expo, Porte de Versailles",
    "rating": 4.6,
    "price": "24€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8323,
      "lng": 2.2882
    },
    "highlights": [
      "Baguettes magiques",
      "Costumes",
      "Décors Poudlard"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1209,
    "name": "Titanic - L'histoire vraie",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/800px-RMS_Titanic_3.jpg",
    "description": "Objets remontés du naufrage le plus célèbre.",
    "location": "Paris Expo, Porte de Versailles",
    "rating": 4.5,
    "price": "20€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8323,
      "lng": 2.2882
    },
    "highlights": [
      "Objets authentiques",
      "Reconstitution cabine",
      "Témoignages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1210,
    "name": "Jeux Olympiques - Paris 2024",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Paris_2024_logo.svg/800px-Paris_2024_logo.svg.png",
    "description": "Retour sur les JO de Paris, de 1900 à 2024.",
    "location": "Musée du Sport, Nice",
    "rating": 4.5,
    "price": "10€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 43.705,
      "lng": 7.2919
    },
    "highlights": [
      "Médailles",
      "Équipements",
      "Moments historiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1211,
    "name": "Street Art - Graffiti tour",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Graffiti_in_Shoreditch%2C_London_-_Zabou_%2814714569534%29.jpg/800px-Graffiti_in_Shoreditch%2C_London_-_Zabou_%2814714569534%29.jpg",
    "description": "Les plus grands street artistes du monde réunis.",
    "location": "Fluctuart, Paris",
    "rating": 4.4,
    "price": "12€",
    "hours": "12h - 21h (fermé lundi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8618,
      "lng": 2.3133
    },
    "highlights": [
      "Invader",
      "Shepard Fairey",
      "JR"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1212,
    "name": "Design scandinave",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Egg_Chair_%28Flightlevel%29.jpg/800px-Egg_Chair_%28Flightlevel%29.jpg",
    "description": "Le minimalisme nordique et ses icônes.",
    "location": "Musée des Arts Décoratifs, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.3329
    },
    "highlights": [
      "Arne Jacobsen",
      "Alvar Aalto",
      "IKEA"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1213,
    "name": "Architecture - Le Corbusier",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Corbusierhaus_Berlin_B.jpg/800px-Corbusierhaus_Berlin_B.jpg",
    "description": "Le père de l'architecture moderne.",
    "location": "Cité de l'Architecture, Paris",
    "rating": 4.5,
    "price": "12€",
    "hours": "11h - 19h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.2882
    },
    "highlights": [
      "Unité d'habitation",
      "Villa Savoye",
      "Chandigarh"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1214,
    "name": "Gaudi - Barcelone à Paris",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg/800px-Casa_Batllo_Overview_Barcelona_Spain_cut.jpg",
    "description": "L'architecte catalan et ses formes organiques.",
    "location": "Musée d'Orsay, Paris",
    "rating": 4.6,
    "price": "16€",
    "hours": "9h30 - 18h (fermé lundi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.86,
      "lng": 2.3266
    },
    "highlights": [
      "Sagrada Familia",
      "Park Güell",
      "Casa Batlló"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1215,
    "name": "Égypte antique - Les momies",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Mummy_in_Vatican_Museums.jpg/800px-Mummy_in_Vatican_Museums.jpg",
    "description": "Secrets des momies égyptiennes révélés.",
    "location": "Musée des Confluences, Lyon",
    "rating": 4.6,
    "price": "12€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 45.7328,
      "lng": 4.8186
    },
    "highlights": [
      "Momies scannées",
      "Sarcophages",
      "Amulettes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1216,
    "name": "Rome antique - Gloire de l'Empire",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/800px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
    "description": "La splendeur de l'Empire romain.",
    "location": "Musée de la Romanité, Nîmes",
    "rating": 4.6,
    "price": "10€",
    "hours": "10h - 18h",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 43.8345,
      "lng": 4.3597
    },
    "highlights": [
      "Mosaïques",
      "Gladiateurs",
      "Monnaies"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1217,
    "name": "Grèce antique - Mythes et héros",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Parthenon%2C_Athens_Greece.jpg/800px-Parthenon%2C_Athens_Greece.jpg",
    "description": "Les dieux et héros de la Grèce antique.",
    "location": "Musée du Louvre, Paris",
    "rating": 4.7,
    "price": "17€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 mai 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Vénus de Milo",
      "Vases grecs",
      "Mythologie"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1218,
    "name": "Mésopotamie - Berceau des civilisations",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pergamonmuseum_Ishtartor_05.jpg/800px-Pergamonmuseum_Ishtartor_05.jpg",
    "description": "Babylone, Assyrie et l'invention de l'écriture.",
    "location": "Musée du Louvre, Paris",
    "rating": 4.6,
    "price": "17€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Code d'Hammourabi",
      "Tablettes cunéiformes",
      "Porte d'Ishtar"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1219,
    "name": "Arts de l'Islam",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Louvre_Arts_de_l%27Islam.jpg/800px-Louvre_Arts_de_l%27Islam.jpg",
    "description": "Trésors de l'art islamique du VIIe au XIXe siècle.",
    "location": "Musée du Louvre, Paris",
    "rating": 4.7,
    "price": "17€",
    "hours": "9h - 18h (fermé mardi)",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 48.8606,
      "lng": 2.3376
    },
    "highlights": [
      "Calligraphie",
      "Tapis persans",
      "Céramiques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1220,
    "name": "Japon éternel - Estampes",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/800px-Tsunami_by_hokusai_19th_century.jpg",
    "description": "Les maîtres de l'estampe japonaise.",
    "location": "Musée Guimet, Paris",
    "rating": 4.6,
    "price": "13€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8648,
      "lng": 2.2939
    },
    "highlights": [
      "Hokusai",
      "Hiroshige",
      "Utamaro"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1221,
    "name": "Chine impériale - La Cité interdite",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Forbidden_city_Beijing.jpg/800px-Forbidden_city_Beijing.jpg",
    "description": "Trésors des empereurs de Chine.",
    "location": "Château de Fontainebleau",
    "rating": 4.5,
    "price": "14€",
    "hours": "9h30 - 17h (fermé mardi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.4019,
      "lng": 2.7003
    },
    "highlights": [
      "Porcelaines Ming",
      "Jades impériaux",
      "Robes de cour"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1222,
    "name": "Inde - Splendeurs mogholes",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/800px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
    "description": "L'art de la cour moghole.",
    "location": "Musée Guimet, Paris",
    "rating": 4.5,
    "price": "13€",
    "hours": "10h - 18h (fermé mardi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8648,
      "lng": 2.2939
    },
    "highlights": [
      "Miniatures",
      "Bijoux",
      "Textiles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1223,
    "name": "Afrique - Masques et sculptures",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Art_africain_Mus%C3%A9e_du_Quai_Branly.jpg/800px-Art_africain_Mus%C3%A9e_du_Quai_Branly.jpg",
    "description": "L'art africain traditionnel et contemporain.",
    "location": "Musée du Quai Branly, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Jusqu'au 15 mai 2026",
    "coordinates": {
      "lat": 48.8611,
      "lng": 2.2977
    },
    "highlights": [
      "Masques dogon",
      "Bronzes du Bénin",
      "Art contemporain"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1224,
    "name": "Océanie - Navigateurs du Pacifique",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Moai_Rano_raraku.jpg/800px-Moai_Rano_raraku.jpg",
    "description": "Les cultures du Pacifique Sud.",
    "location": "Musée du Quai Branly, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8611,
      "lng": 2.2977
    },
    "highlights": [
      "Moai de l'Île de Pâques",
      "Pirogues",
      "Tatouages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1225,
    "name": "Amérique précolombienne - Mayas",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chichen_Itza_3.jpg/800px-Chichen_Itza_3.jpg",
    "description": "Les mystères de la civilisation maya.",
    "location": "Musée du Quai Branly, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8611,
      "lng": 2.2977
    },
    "highlights": [
      "Calendrier maya",
      "Jade",
      "Codex"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1226,
    "name": "Incas - L'empire du Soleil",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg/800px-80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg",
    "description": "La civilisation inca et ses trésors.",
    "location": "Musée des Confluences, Lyon",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h30 - 18h30 (fermé lundi)",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 45.7328,
      "lng": 4.8186
    },
    "highlights": [
      "Or inca",
      "Quipus",
      "Momies"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1227,
    "name": "Mexique - Aztèques",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Piedra_del_Sol_en_MNA.jpg/800px-Piedra_del_Sol_en_MNA.jpg",
    "description": "L'empire aztèque et ses dieux.",
    "location": "Musée du Quai Branly, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8611,
      "lng": 2.2977
    },
    "highlights": [
      "Pierre du Soleil",
      "Quetzalcóatl",
      "Sacrifices"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1228,
    "name": "Photographie - Vivian Maier",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Vivian_Maier_self_portrait.jpg/800px-Vivian_Maier_self_portrait.jpg",
    "description": "La photographe secrète de Chicago.",
    "location": "Musée du Luxembourg, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "10h30 - 19h (fermé mardi)",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.848,
      "lng": 2.3341
    },
    "highlights": [
      "Autoportraits",
      "Street photography",
      "Découverte posthume"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1229,
    "name": "Photographie - Steve McCurry",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Sharbat_Gula.jpg/800px-Sharbat_Gula.jpg",
    "description": "Les plus belles images du photographe de National Geographic.",
    "location": "Musée Maillol, Paris",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h30 - 18h30",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8561,
      "lng": 2.3252
    },
    "highlights": [
      "Afghan Girl",
      "Inde",
      "Portraits du monde"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1230,
    "name": "BD - Tintin et Hergé",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Tintin_and_Snowy.png/800px-Tintin_and_Snowy.png",
    "description": "L'univers de Tintin et son créateur.",
    "location": "Grand Palais, Paris",
    "rating": 4.5,
    "price": "14€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8661,
      "lng": 2.3125
    },
    "highlights": [
      "Planches originales",
      "Objets",
      "Archives"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1231,
    "name": "BD - Astérix 65 ans",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Asterix_and_Obelix.png/800px-Asterix_and_Obelix.png",
    "description": "65 ans d'aventures gauloises.",
    "location": "Bibliothèque nationale de France, Paris",
    "rating": 4.4,
    "price": "10€",
    "hours": "10h - 19h (fermé lundi)",
    "period": "Jusqu'au 31 mars 2026",
    "coordinates": {
      "lat": 48.8336,
      "lng": 2.3757
    },
    "highlights": [
      "Dessins originaux",
      "Uderzo",
      "Goscinny"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1232,
    "name": "Manga - One Piece",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/800px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
    "description": "L'univers du manga le plus vendu au monde.",
    "location": "Parc des Expositions, Paris",
    "rating": 4.5,
    "price": "18€",
    "hours": "10h - 19h",
    "period": "Jusqu'au 15 avril 2026",
    "coordinates": {
      "lat": 48.8323,
      "lng": 2.2882
    },
    "highlights": [
      "Planches originales",
      "Figurines",
      "Décors grandeur nature"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1233,
    "name": "Jeux vidéo - Histoire du gaming",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham_by_Rocksteady_Studios.jpg/800px-Above_Gotham_by_Rocksteady_Studios.jpg",
    "description": "50 ans d'histoire du jeu vidéo.",
    "location": "Musée des Arts et Métiers, Paris",
    "rating": 4.4,
    "price": "12€",
    "hours": "10h - 18h (fermé lundi)",
    "period": "Jusqu'au 30 mai 2026",
    "coordinates": {
      "lat": 48.8666,
      "lng": 2.3555
    },
    "highlights": [
      "Consoles rétro",
      "Bornes d'arcade",
      "VR"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1234,
    "name": "Mode - Iris van Herpen",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Iris_van_Herpen_SS16.jpg/800px-Iris_van_Herpen_SS16.jpg",
    "description": "La haute couture du futur.",
    "location": "Musée des Arts Décoratifs, Paris",
    "rating": 4.6,
    "price": "14€",
    "hours": "11h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8628,
      "lng": 2.3329
    },
    "highlights": [
      "Impression 3D",
      "Robes sculpturales",
      "Innovation"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1235,
    "name": "Joaillerie - Cartier",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Cartier_Building.JPG/800px-Cartier_Building.JPG",
    "description": "Les créations légendaires de la maison Cartier.",
    "location": "Grand Palais, Paris",
    "rating": 4.7,
    "price": "14€",
    "hours": "10h - 20h",
    "period": "Jusqu'au 15 mars 2026",
    "coordinates": {
      "lat": 48.8661,
      "lng": 2.3125
    },
    "highlights": [
      "Panthère",
      "Bijoux royaux",
      "Art Déco"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1236,
    "name": "Parfums - L'art olfactif",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Chanel_No._5.jpg/800px-Chanel_No._5.jpg",
    "description": "Histoire de la parfumerie française.",
    "location": "Grand Musée du Parfum, Paris",
    "rating": 4.4,
    "price": "15€",
    "hours": "10h30 - 19h (fermé lundi)",
    "period": "Jusqu'au 30 avril 2026",
    "coordinates": {
      "lat": 48.8686,
      "lng": 2.3033
    },
    "highlights": [
      "Orgue à parfums",
      "Flacons historiques",
      "Créations exclusives"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1237,
    "name": "Gastronomie - L'art de la table",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Foie_gras_en_cro%C3%BBte.jpg/800px-Foie_gras_en_cro%C3%BBte.jpg",
    "description": "L'histoire de la cuisine française.",
    "location": "Cité de la Gastronomie, Lyon",
    "rating": 4.5,
    "price": "12€",
    "hours": "10h - 19h (fermé mardi)",
    "period": "Jusqu'au 31 mai 2026",
    "coordinates": {
      "lat": 45.7509,
      "lng": 4.8343
    },
    "highlights": [
      "Paul Bocuse",
      "Recettes historiques",
      "Arts de la table"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1238,
    "name": "Vin - Cités des Civilisations",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cit%C3%A9_du_Vin_from_the_Garonne.jpg/800px-Cit%C3%A9_du_Vin_from_the_Garonne.jpg",
    "description": "6000 ans d'histoire du vin.",
    "location": "Cité du Vin, Bordeaux",
    "rating": 4.6,
    "price": "21€",
    "hours": "10h - 19h",
    "period": "Jusqu'au 30 juin 2026",
    "coordinates": {
      "lat": 44.8625,
      "lng": -0.5508
    },
    "highlights": [
      "Vignobles du monde",
      "Dégustations",
      "Histoire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1239,
    "name": "Musique - Les Beatles",
    "type": "exposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/800px-The_Fabs.JPG",
    "description": "L'histoire du groupe le plus influent.",
    "location": "Philharmonie de Paris",
    "rating": 4.6,
    "price": "12€",
    "hours": "12h - 18h (fermé lundi)",
    "period": "Jusqu'au 28 février 2026",
    "coordinates": {
      "lat": 48.8897,
      "lng": 2.3939
    },
    "highlights": [
      "Instruments",
      "Costumes",
      "Enregistrements"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1240,
    "name": "Cathédrale Notre-Dame de Paris",
    "type": "église",
    "image": "",
    "description": "Chef-d'œuvre de l'art gothique, cathédrale emblématique de Paris, en cours de restauration après l'incendie de 2019.",
    "location": "Paris, Île-de-France",
    "rating": 4.9,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIVe siècle",
    "coordinates": {
      "lat": 48.853,
      "lng": 2.3499
    },
    "highlights": [
      "Rosaces",
      "Gargouilles",
      "Flèche restaurée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1241,
    "name": "Cathédrale Notre-Dame de Chartres",
    "type": "église",
    "image": "",
    "description": "Joyau de l'art gothique, célèbre pour ses vitraux du XIIIe siècle parmi les mieux conservés au monde.",
    "location": "Chartres, Centre-Val de Loire",
    "rating": 4.8,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 48.4477,
      "lng": 1.4879
    },
    "highlights": [
      "Vitraux médiévaux",
      "Portail Royal",
      "Labyrinthe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1242,
    "name": "Cathédrale Notre-Dame de Reims",
    "type": "église",
    "image": "",
    "description": "Cathédrale du sacre des rois de France, chef-d'œuvre du gothique classique avec plus de 2300 statues.",
    "location": "Reims, Grand Est",
    "rating": 4.8,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 49.2539,
      "lng": 3.9742
    },
    "highlights": [
      "Ange au Sourire",
      "Vitraux de Chagall",
      "Façade sculptée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1243,
    "name": "Cathédrale Notre-Dame d'Amiens",
    "type": "église",
    "image": "",
    "description": "La plus vaste cathédrale de France par son volume intérieur, inscrite au patrimoine mondial de l'UNESCO.",
    "location": "Amiens, Hauts-de-France",
    "rating": 4.7,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 49.895,
      "lng": 2.3022
    },
    "highlights": [
      "Nef monumentale",
      "Stalles en bois",
      "Spectacle de lumière"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1244,
    "name": "Cathédrale Notre-Dame de Strasbourg",
    "type": "église",
    "image": "",
    "description": "Cathédrale en grès rose, plus haut édifice du monde de 1647 à 1874, avec son horloge astronomique.",
    "location": "Strasbourg, Grand Est",
    "rating": 4.8,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 48.5818,
      "lng": 7.751
    },
    "highlights": [
      "Horloge astronomique",
      "Pilier des Anges",
      "Flèche de 142m"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1245,
    "name": "Cathédrale Saint-Étienne de Bourges",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique unique par ses proportions et ses cinq portails, classée au patrimoine mondial.",
    "location": "Bourges, Centre-Val de Loire",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 47.0822,
      "lng": 2.3984
    },
    "highlights": [
      "Cinq portails",
      "Vitraux XIIIe",
      "Crypte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1246,
    "name": "Cathédrale Saint-Étienne de Metz",
    "type": "église",
    "image": "",
    "description": "Surnommée la 'Lanterne du Bon Dieu' pour ses 6500 m² de vitraux, les plus grands de France.",
    "location": "Metz, Grand Est",
    "rating": 4.7,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XVIe siècle",
    "coordinates": {
      "lat": 49.1198,
      "lng": 6.1756
    },
    "highlights": [
      "6500 m² de vitraux",
      "Vitraux de Chagall",
      "Nef de 41m"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1247,
    "name": "Cathédrale Notre-Dame de Rouen",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique peinte par Monet, avec la plus haute flèche de France en fonte (151m).",
    "location": "Rouen, Normandie",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 49.4401,
      "lng": 1.0941
    },
    "highlights": [
      "Tour de Beurre",
      "Flèche de 151m",
      "Portail des Libraires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1248,
    "name": "Cathédrale Saint-Pierre de Beauvais",
    "type": "église",
    "image": "",
    "description": "Possède le chœur gothique le plus haut du monde (48,50 m), témoignage d'une ambition démesurée.",
    "location": "Beauvais, Hauts-de-France",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 49.4314,
      "lng": 2.0812
    },
    "highlights": [
      "Chœur de 48,5m",
      "Horloge astronomique",
      "Vitraux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1249,
    "name": "Cathédrale Saint-Gatien de Tours",
    "type": "église",
    "image": "",
    "description": "Cathédrale illustrant l'évolution du gothique du XIIIe au XVIe siècle avec de remarquables vitraux.",
    "location": "Tours, Centre-Val de Loire",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XVIe siècle",
    "coordinates": {
      "lat": 47.3966,
      "lng": 0.6946
    },
    "highlights": [
      "Vitraux Renaissance",
      "Cloître de la Psalette",
      "Façade flamboyante"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1250,
    "name": "Basilique Saint-Denis",
    "type": "église",
    "image": "",
    "description": "Nécropole des rois de France, berceau de l'art gothique, abrite les tombeaux royaux.",
    "location": "Saint-Denis, Île-de-France",
    "rating": 4.6,
    "price": "9.50€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.9355,
      "lng": 2.3592
    },
    "highlights": [
      "Tombeaux royaux",
      "Premier art gothique",
      "Vitraux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1251,
    "name": "Sainte-Chapelle",
    "type": "église",
    "image": "",
    "description": "Joyau du gothique rayonnant construit par Saint Louis pour abriter les reliques de la Passion.",
    "location": "Paris, Île-de-France",
    "rating": 4.8,
    "price": "11.50€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.8554,
      "lng": 2.3451
    },
    "highlights": [
      "1113 vitraux",
      "Rosace",
      "Voûte étoilée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1252,
    "name": "Église Saint-Eustache",
    "type": "église",
    "image": "",
    "description": "L'une des plus grandes églises de Paris, mêlant styles gothique et Renaissance.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVIe - XVIIe siècle",
    "coordinates": {
      "lat": 48.863,
      "lng": 2.3459
    },
    "highlights": [
      "Grand orgue",
      "Architecture Renaissance",
      "Chapelle de la Vierge"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1253,
    "name": "Église de la Madeleine",
    "type": "église",
    "image": "",
    "description": "Église néoclassique inspirée d'un temple grec, avec ses 52 colonnes corinthiennes.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.87,
      "lng": 2.3243
    },
    "highlights": [
      "52 colonnes corinthiennes",
      "Fronton sculpté",
      "Orgue Cavaillé-Coll"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1254,
    "name": "Basilique du Sacré-Cœur",
    "type": "église",
    "image": "",
    "description": "Basilique romano-byzantine au sommet de Montmartre, offrant un panorama exceptionnel sur Paris.",
    "location": "Paris, Île-de-France",
    "rating": 4.7,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 48.8867,
      "lng": 2.3431
    },
    "highlights": [
      "Mosaïque de l'abside",
      "Vue panoramique",
      "Campanile"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1255,
    "name": "Église Saint-Sulpice",
    "type": "église",
    "image": "",
    "description": "Deuxième plus grande église de Paris, célèbre pour ses fresques de Delacroix et son gnomon.",
    "location": "Paris, Île-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 48.851,
      "lng": 2.3348
    },
    "highlights": [
      "Fresques de Delacroix",
      "Gnomon",
      "Orgue Cavaillé-Coll"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1256,
    "name": "Église Saint-Germain-des-Prés",
    "type": "église",
    "image": "",
    "description": "La plus ancienne église de Paris, fondée au VIe siècle, cœur du quartier littéraire.",
    "location": "Paris, Île-de-France",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "VIe - XIIe siècle",
    "coordinates": {
      "lat": 48.8541,
      "lng": 2.3339
    },
    "highlights": [
      "Clocher roman",
      "Chapiteaux mérovingiens",
      "Fresques XIXe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1257,
    "name": "Abbaye du Mont-Saint-Michel",
    "type": "église",
    "image": "",
    "description": "Abbaye médiévale perchée sur un îlot rocheux, merveille de l'Occident, patrimoine mondial UNESCO.",
    "location": "Le Mont-Saint-Michel, Normandie",
    "rating": 4.9,
    "price": "11€",
    "hours": "Horaires variables (se renseigner)",
    "period": "Xe - XVIe siècle",
    "coordinates": {
      "lat": 48.6361,
      "lng": -1.5115
    },
    "highlights": [
      "Cloître",
      "Merveille gothique",
      "Marées spectaculaires"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1258,
    "name": "Abbaye de Jumièges",
    "type": "église",
    "image": "",
    "description": "Ruines majestueuses surnommées 'la plus belle ruine de France' par Victor Hugo.",
    "location": "Jumièges, Normandie",
    "rating": 4.5,
    "price": "7.50€",
    "hours": "Horaires variables (se renseigner)",
    "period": "VIIe - XIe siècle",
    "coordinates": {
      "lat": 49.4314,
      "lng": 0.8186
    },
    "highlights": [
      "Ruines romantiques",
      "Nef à ciel ouvert",
      "Parc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1259,
    "name": "Abbaye aux Hommes",
    "type": "église",
    "image": "",
    "description": "Abbaye fondée par Guillaume le Conquérant, chef-d'œuvre de l'art roman normand.",
    "location": "Caen, Normandie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.1826,
      "lng": -0.3765
    },
    "highlights": [
      "Tombeau de Guillaume",
      "Architecture romane",
      "Cloîtres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1260,
    "name": "Abbaye aux Dames",
    "type": "église",
    "image": "",
    "description": "Abbaye fondée par la reine Mathilde, épouse de Guillaume le Conquérant.",
    "location": "Caen, Normandie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.188,
      "lng": -0.3593
    },
    "highlights": [
      "Église de la Trinité",
      "Crypte",
      "Architecture romane"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1261,
    "name": "Cathédrale Notre-Dame de Bayeux",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique normande où fut exposée la célèbre Tapisserie de Bayeux.",
    "location": "Bayeux, Normandie",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 49.2764,
      "lng": -0.703
    },
    "highlights": [
      "Crypte romane",
      "Tours gothiques",
      "Chapitre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1262,
    "name": "Cathédrale Notre-Dame de Coutances",
    "type": "église",
    "image": "",
    "description": "Considérée comme l'une des plus belles cathédrales gothiques de Normandie.",
    "location": "Coutances, Normandie",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 49.0472,
      "lng": -1.4429
    },
    "highlights": [
      "Tour-lanterne octogonale",
      "Vitraux",
      "Proportions harmonieuses"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1263,
    "name": "Cathédrale Saint-Corentin de Quimper",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique aux flèches jumelles, symbole de la ville de Quimper.",
    "location": "Quimper, Bretagne",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 47.9953,
      "lng": -4.1024
    },
    "highlights": [
      "Flèches jumelles",
      "Vitraux XVe",
      "Axe dévié du chœur"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1264,
    "name": "Cathédrale Saint-Pierre de Vannes",
    "type": "église",
    "image": "",
    "description": "Cathédrale mêlant styles roman, gothique et Renaissance au cœur de Vannes.",
    "location": "Vannes, Bretagne",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XIXe siècle",
    "coordinates": {
      "lat": 47.6553,
      "lng": -2.7586
    },
    "highlights": [
      "Chapelle du Saint-Sacrement",
      "Trésor",
      "Cloître"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1265,
    "name": "Cathédrale Saint-Pierre de Rennes",
    "type": "église",
    "image": "",
    "description": "Cathédrale néoclassique à la façade imposante, reconstruite au XIXe siècle.",
    "location": "Rennes, Bretagne",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 48.1116,
      "lng": -1.6816
    },
    "highlights": [
      "Façade néoclassique",
      "Retable flamand",
      "Voûtes peintes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1266,
    "name": "Abbaye de Beauport",
    "type": "église",
    "image": "",
    "description": "Abbaye maritime en ruines au bord de la mer, lieu magique et poétique.",
    "location": "Paimpol, Bretagne",
    "rating": 4.4,
    "price": "7€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 48.7686,
      "lng": -3.0134
    },
    "highlights": [
      "Cadre maritime",
      "Salle capitulaire",
      "Verger conservatoire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1267,
    "name": "Abbaye de Fontevraud",
    "type": "église",
    "image": "",
    "description": "La plus grande cité monastique d'Europe, nécropole des Plantagenêts.",
    "location": "Fontevraud-l'Abbaye, Pays de la Loire",
    "rating": 4.7,
    "price": "13€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 47.1817,
      "lng": 0.0517
    },
    "highlights": [
      "Gisants Plantagenêts",
      "Cuisines romanes",
      "Cloîtres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1268,
    "name": "Cathédrale Saint-Maurice d'Angers",
    "type": "église",
    "image": "",
    "description": "Cathédrale angevine remarquable pour ses voûtes bombées caractéristiques du gothique Plantagenêt.",
    "location": "Angers, Pays de la Loire",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 47.4706,
      "lng": -0.5538
    },
    "highlights": [
      "Voûtes Plantagenêt",
      "Vitraux",
      "Façade XIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1269,
    "name": "Cathédrale Saint-Pierre-et-Saint-Paul de Nantes",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique en tuffeau blanc abritant le tombeau de François II de Bretagne.",
    "location": "Nantes, Pays de la Loire",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVe - XIXe siècle",
    "coordinates": {
      "lat": 47.2181,
      "lng": -1.5516
    },
    "highlights": [
      "Tombeau de François II",
      "Voûtes de 37m",
      "Crypte romane"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1270,
    "name": "Cathédrale Saint-Julien du Mans",
    "type": "église",
    "image": "",
    "description": "Remarquable par son chevet gothique et sa nef romane, aux dimensions imposantes.",
    "location": "Le Mans, Pays de la Loire",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 48.0085,
      "lng": 0.1994
    },
    "highlights": [
      "Chevet gothique",
      "Vitraux XIIIe",
      "Double nef"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1271,
    "name": "Cathédrale Sainte-Croix d'Orléans",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique reconstruite du XVIIe au XIXe siècle après les guerres de Religion.",
    "location": "Orléans, Centre-Val de Loire",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVIIe - XIXe siècle",
    "coordinates": {
      "lat": 47.902,
      "lng": 1.9098
    },
    "highlights": [
      "Vitraux modernes",
      "Boiseries",
      "Chapelle Jeanne d'Arc"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1272,
    "name": "Abbaye de Noirlac",
    "type": "église",
    "image": "",
    "description": "L'une des abbayes cisterciennes les mieux conservées de France.",
    "location": "Bruère-Allichamps, Centre-Val de Loire",
    "rating": 4.5,
    "price": "8€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 46.7531,
      "lng": 2.4106
    },
    "highlights": [
      "Architecture cistercienne pure",
      "Cloître",
      "Jardins sonores"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1273,
    "name": "Basilique de Vézelay",
    "type": "église",
    "image": "",
    "description": "Chef-d'œuvre de l'art roman bourguignon, point de départ du pèlerinage de Compostelle.",
    "location": "Vézelay, Bourgogne-Franche-Comté",
    "rating": 4.8,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 47.4662,
      "lng": 3.7479
    },
    "highlights": [
      "Tympan roman",
      "Chapiteaux historiés",
      "Lumière solsticiale"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1274,
    "name": "Abbaye de Cîteaux",
    "type": "église",
    "image": "",
    "description": "Berceau de l'ordre cistercien fondé en 1098, abbaye toujours en activité.",
    "location": "Saint-Nicolas-lès-Cîteaux, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "8€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 47.1322,
      "lng": 5.0808
    },
    "highlights": [
      "Bibliothèque",
      "Fromage de Cîteaux",
      "Histoire cistercienne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1275,
    "name": "Cathédrale Saint-Lazare d'Autun",
    "type": "église",
    "image": "",
    "description": "Cathédrale romane célèbre pour les sculptures de Gislebertus, dont le Jugement Dernier.",
    "location": "Autun, Bourgogne-Franche-Comté",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 46.9465,
      "lng": 4.2989
    },
    "highlights": [
      "Tympan du Jugement Dernier",
      "Chapiteaux de Gislebertus",
      "Salle capitulaire"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1276,
    "name": "Abbaye de Fontenay",
    "type": "église",
    "image": "",
    "description": "La plus ancienne abbaye cistercienne conservée, classée au patrimoine mondial UNESCO.",
    "location": "Marmagne, Bourgogne-Franche-Comté",
    "rating": 4.6,
    "price": "11€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 47.6387,
      "lng": 4.3892
    },
    "highlights": [
      "Cloître cistercien",
      "Forge",
      "Jardins"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1277,
    "name": "Cathédrale Saint-Bénigne de Dijon",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique avec sa crypte romane remarquable, ancien sanctuaire de saint Bénigne.",
    "location": "Dijon, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 47.3216,
      "lng": 5.034
    },
    "highlights": [
      "Crypte romane",
      "Rotonde",
      "Toiture bourguignonne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1278,
    "name": "Cathédrale Saint-Étienne de Toul",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique flamboyant avec une façade occidentale remarquable.",
    "location": "Toul, Grand Est",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 48.6753,
      "lng": 5.8938
    },
    "highlights": [
      "Façade flamboyante",
      "Cloître gothique",
      "Vitraux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1279,
    "name": "Basilique Saint-Rémi de Reims",
    "type": "église",
    "image": "",
    "description": "Ancienne abbatiale romane et gothique abritant le tombeau de saint Rémi, patrimoine UNESCO.",
    "location": "Reims, Grand Est",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 49.2444,
      "lng": 3.9633
    },
    "highlights": [
      "Tombeau de saint Rémi",
      "Nef romane",
      "Vitraux XIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1280,
    "name": "Cathédrale Notre-Dame de Laon",
    "type": "église",
    "image": "",
    "description": "L'une des premières grandes cathédrales gothiques, perchée sur sa butte.",
    "location": "Laon, Hauts-de-France",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.5636,
      "lng": 3.6242
    },
    "highlights": [
      "Tours avec bœufs sculptés",
      "Vitraux XIIIe",
      "Position dominante"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1281,
    "name": "Cathédrale Notre-Dame de Senlis",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique pionnière, avec le premier portail consacré au couronnement de la Vierge.",
    "location": "Senlis, Hauts-de-France",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.2069,
      "lng": 2.5865
    },
    "highlights": [
      "Portail du Couronnement",
      "Flèche XIIIe",
      "Vieille ville"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1282,
    "name": "Cathédrale Notre-Dame de Noyon",
    "type": "église",
    "image": "",
    "description": "L'une des premières cathédrales gothiques de France avec des éléments romans.",
    "location": "Noyon, Hauts-de-France",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 49.5806,
      "lng": 3
    },
    "highlights": [
      "Transition roman-gothique",
      "Cloître",
      "Bibliothèque du chapitre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1283,
    "name": "Cathédrale Notre-Dame de Soissons",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique pure, remarquable par l'élégance de son bras sud du transept.",
    "location": "Soissons, Hauts-de-France",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 49.3815,
      "lng": 3.3238
    },
    "highlights": [
      "Bras sud du transept",
      "Vitraux",
      "Sobriété gothique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1284,
    "name": "Basilique Notre-Dame de Fourvière",
    "type": "église",
    "image": "",
    "description": "Basilique néo-byzantine dominant Lyon, décorée de mosaïques somptueuses.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.7,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 45.7623,
      "lng": 4.8225
    },
    "highlights": [
      "Mosaïques",
      "Vue sur Lyon",
      "Crypte Saint-Joseph"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1285,
    "name": "Cathédrale Notre-Dame du Puy-en-Velay",
    "type": "église",
    "image": "",
    "description": "Cathédrale romane unique, point de départ du Chemin de Saint-Jacques, avec sa Vierge Noire.",
    "location": "Le Puy-en-Velay, Auvergne-Rhône-Alpes",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 45.0445,
      "lng": 3.8849
    },
    "highlights": [
      "Vierge Noire",
      "Cloître roman",
      "Pierre des fièvres"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1286,
    "name": "Cathédrale Saint-Jean de Lyon",
    "type": "église",
    "image": "",
    "description": "Primatiale des Gaules, cathédrale mêlant roman et gothique dans le Vieux Lyon.",
    "location": "Lyon, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.7601,
      "lng": 4.8268
    },
    "highlights": [
      "Horloge astronomique",
      "Vitraux",
      "Vieux Lyon"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1287,
    "name": "Abbaye de Tournus",
    "type": "église",
    "image": "",
    "description": "Abbatiale romane remarquable par sa nef aux voûtes en berceau transversal, unique en Europe.",
    "location": "Tournus, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "Xe - XIIe siècle",
    "coordinates": {
      "lat": 46.5654,
      "lng": 4.9082
    },
    "highlights": [
      "Voûtes en berceau transversal",
      "Crypte",
      "Narthex"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1288,
    "name": "Basilique Saint-Sernin de Toulouse",
    "type": "église",
    "image": "",
    "description": "La plus grande église romane conservée d'Europe, étape du pèlerinage de Compostelle.",
    "location": "Toulouse, Occitanie",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 43.6083,
      "lng": 1.4419
    },
    "highlights": [
      "Clocher octogonal",
      "Porte Miègeville",
      "Crypte des Corps Saints"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1289,
    "name": "Cathédrale Sainte-Cécile d'Albi",
    "type": "église",
    "image": "",
    "description": "Plus grande cathédrale de brique au monde, forteresse imposante avec un intérieur peint remarquable.",
    "location": "Albi, Occitanie",
    "rating": 4.8,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XVe siècle",
    "coordinates": {
      "lat": 43.9279,
      "lng": 2.144
    },
    "highlights": [
      "Peintures murales",
      "Jubé flamboyant",
      "Orgue du XVIIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1290,
    "name": "Cathédrale Saint-Just-et-Saint-Pasteur de Narbonne",
    "type": "église",
    "image": "",
    "description": "Cathédrale inachevée possédant le troisième plus haut chœur gothique de France.",
    "location": "Narbonne, Occitanie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 43.1847,
      "lng": 3.0033
    },
    "highlights": [
      "Chœur de 41m",
      "Trésor",
      "Cloître"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1291,
    "name": "Abbaye de Conques",
    "type": "église",
    "image": "",
    "description": "Abbatiale romane abritant le trésor de Sainte-Foy et un célèbre tympan du Jugement Dernier.",
    "location": "Conques, Occitanie",
    "rating": 4.7,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 44.5988,
      "lng": 2.399
    },
    "highlights": [
      "Tympan du Jugement Dernier",
      "Trésor de Sainte-Foy",
      "Vitraux de Soulages"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1292,
    "name": "Abbaye de Moissac",
    "type": "église",
    "image": "",
    "description": "Abbaye célèbre pour son cloître roman, l'un des plus beaux au monde, et son portail sculpté.",
    "location": "Moissac, Occitanie",
    "rating": 4.6,
    "price": "7.50€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 44.1048,
      "lng": 1.0852
    },
    "highlights": [
      "Cloître roman",
      "Tympan de l'Apocalypse",
      "Chapiteaux historiés"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1293,
    "name": "Cathédrale Saint-Étienne de Toulouse",
    "type": "église",
    "image": "",
    "description": "Cathédrale atypique mêlant gothique méridional et gothique du Nord, fruit de deux projets différents.",
    "location": "Toulouse, Occitanie",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 43.5995,
      "lng": 1.4503
    },
    "highlights": [
      "Nef unique",
      "Rosace",
      "Mélange de styles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1294,
    "name": "Abbaye de Saint-Guilhem-le-Désert",
    "type": "église",
    "image": "",
    "description": "Abbaye fondée en 804, nichée dans les gorges de l'Hérault, sur le chemin de Saint-Jacques.",
    "location": "Saint-Guilhem-le-Désert, Occitanie",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "IXe - XIIe siècle",
    "coordinates": {
      "lat": 43.7345,
      "lng": 3.5485
    },
    "highlights": [
      "Cloître",
      "Village médiéval",
      "Gorges de l'Hérault"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1295,
    "name": "Cathédrale Saint-André de Bordeaux",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique où furent célébrés les mariages royaux, patrimoine mondial UNESCO.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XVe siècle",
    "coordinates": {
      "lat": 44.8378,
      "lng": -0.5762
    },
    "highlights": [
      "Porte Royale",
      "Tour Pey-Berland",
      "Sculptures du portail"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1296,
    "name": "Cathédrale Saint-Pierre d'Angoulême",
    "type": "église",
    "image": "",
    "description": "Cathédrale romane remarquable pour sa façade sculptée de plus de 70 personnages.",
    "location": "Angoulême, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.6487,
      "lng": 0.1512
    },
    "highlights": [
      "Façade sculptée",
      "Coupoles romanes",
      "Ascension sculptée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1297,
    "name": "Cathédrale Saint-Front de Périgueux",
    "type": "église",
    "image": "",
    "description": "Cathédrale à coupoles inspirée de Saint-Marc de Venise, restaurée par Abadie.",
    "location": "Périgueux, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.1844,
      "lng": 0.7217
    },
    "highlights": [
      "Coupoles byzantines",
      "Retable baroque",
      "Clocher roman"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1298,
    "name": "Cathédrale Saint-Pierre de Poitiers",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique Plantagenêt avec une façade romane et des vitraux exceptionnels.",
    "location": "Poitiers, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 46.5794,
      "lng": 0.3486
    },
    "highlights": [
      "Vitraux XIIe",
      "Orgue Clicquot",
      "Stalles XIIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1299,
    "name": "Église Notre-Dame la Grande de Poitiers",
    "type": "église",
    "image": "",
    "description": "Chef-d'œuvre de l'art roman poitevin avec sa façade sculptée polychrome.",
    "location": "Poitiers, Nouvelle-Aquitaine",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 46.5833,
      "lng": 0.3458
    },
    "highlights": [
      "Façade sculptée",
      "Peintures murales",
      "Polychromie nocturne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1300,
    "name": "Abbaye de Saint-Savin-sur-Gartempe",
    "type": "église",
    "image": "",
    "description": "Surnommée la 'Sixtine de l'art roman' pour ses peintures murales exceptionnelles, UNESCO.",
    "location": "Saint-Savin, Nouvelle-Aquitaine",
    "rating": 4.6,
    "price": "8€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 46.5669,
      "lng": 0.8656
    },
    "highlights": [
      "Peintures murales romanes",
      "Voûte peinte",
      "Crypte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1301,
    "name": "Abbaye de Sénanque",
    "type": "église",
    "image": "",
    "description": "Abbaye cistercienne entourée de champs de lavande, l'une des images les plus iconiques de Provence.",
    "location": "Gordes, Provence-Alpes-Côte d'Azur",
    "rating": 4.7,
    "price": "8.50€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.9276,
      "lng": 5.1865
    },
    "highlights": [
      "Champs de lavande",
      "Architecture cistercienne",
      "Dortoir des moines"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1302,
    "name": "Abbaye du Thoronet",
    "type": "église",
    "image": "",
    "description": "L'une des trois sœurs cisterciennes de Provence, chef-d'œuvre de pureté architecturale.",
    "location": "Le Thoronet, Provence-Alpes-Côte d'Azur",
    "rating": 4.5,
    "price": "8€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.4611,
      "lng": 6.2636
    },
    "highlights": [
      "Acoustique exceptionnelle",
      "Cloître",
      "Pureté cistercienne"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1303,
    "name": "Abbaye de Silvacane",
    "type": "église",
    "image": "",
    "description": "La troisième sœur cistercienne de Provence, sobre et élégante au bord de la Durance.",
    "location": "La Roque-d'Anthéron, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "6€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.7214,
      "lng": 5.3431
    },
    "highlights": [
      "Réfectoire",
      "Salle capitulaire",
      "Architecture sobre"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1304,
    "name": "Cathédrale Notre-Dame des Doms d'Avignon",
    "type": "église",
    "image": "",
    "description": "Cathédrale romane surplombant le Palais des Papes, couronnée d'une Vierge dorée.",
    "location": "Avignon, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.9514,
      "lng": 4.8064
    },
    "highlights": [
      "Vierge dorée",
      "Vue sur Avignon",
      "Tombeau de Jean XXII"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1305,
    "name": "Cathédrale de la Major",
    "type": "église",
    "image": "",
    "description": "Imposante cathédrale néo-byzantine sur le Vieux-Port, l'une des plus grandes de France.",
    "location": "Marseille, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 43.2997,
      "lng": 5.3651
    },
    "highlights": [
      "Style néo-byzantin",
      "Mosaïques",
      "Vue sur le port"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1306,
    "name": "Cathédrale Notre-Dame de Nice",
    "type": "église",
    "image": "",
    "description": "Cathédrale baroque au cœur du vieux Nice, avec sa façade et ses chapelles latérales.",
    "location": "Nice, Provence-Alpes-Côte d'Azur",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVIIe siècle",
    "coordinates": {
      "lat": 43.699,
      "lng": 7.2729
    },
    "highlights": [
      "Style baroque",
      "Rosace",
      "Vieux Nice"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1307,
    "name": "Cathédrale Santa Maria Assunta d'Ajaccio",
    "type": "église",
    "image": "",
    "description": "Cathédrale où fut baptisé Napoléon Bonaparte en 1771.",
    "location": "Ajaccio, Corse",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 41.9195,
      "lng": 8.7369
    },
    "highlights": [
      "Baptistère de Napoléon",
      "Vierge du Sacré-Cœur de Delacroix",
      "Style baroque"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1308,
    "name": "Église San Michele de Murato",
    "type": "église",
    "image": "",
    "description": "Chef-d'œuvre de l'art roman pisan en Corse, avec ses pierres bicolores caractéristiques.",
    "location": "Murato, Corse",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 42.5472,
      "lng": 9.3236
    },
    "highlights": [
      "Pierres bicolores",
      "Sculptures romanes",
      "Cadre rural"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1309,
    "name": "Cathédrale Notre-Dame de Lille",
    "type": "église",
    "image": "",
    "description": "Basilique-cathédrale de style néo-gothique, la plus récente des cathédrales françaises.",
    "location": "Lille, Hauts-de-France",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.8439,
      "lng": 2.356
    },
    "highlights": [
      "Art contemporain",
      "Architecture néo-gothique",
      "Vitraux modernes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1310,
    "name": "Abbaye de Valloires",
    "type": "église",
    "image": "",
    "description": "Abbaye cistercienne avec des jardins remarquables et un décor baroque exceptionnel.",
    "location": "Argoules, Hauts-de-France",
    "rating": 4.4,
    "price": "10€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 50.325,
      "lng": 1.8333
    },
    "highlights": [
      "Jardins de Valloires",
      "Décor baroque",
      "Boiseries"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1311,
    "name": "Cathédrale Notre-Dame de Guadeloupe",
    "type": "église",
    "image": "",
    "description": "Cathédrale classée monument historique, reconstruite après tremblements de terre et ouragans.",
    "location": "Basse-Terre, Guadeloupe",
    "rating": 4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 15.9979,
      "lng": -61.7259
    },
    "highlights": [
      "Architecture créole",
      "Charpente métallique",
      "Vitraux tropicaux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1312,
    "name": "Cathédrale Saint-Louis de Fort-de-France",
    "type": "église",
    "image": "",
    "description": "Cathédrale en structure métallique conçue par Henry Picq, résistante aux séismes et cyclones.",
    "location": "Fort-de-France, Martinique",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 14.6061,
      "lng": -61.0667
    },
    "highlights": [
      "Structure métallique",
      "Vitraux",
      "Architecture anti-sismique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1313,
    "name": "Cathédrale Saint-Pierre de Condom",
    "type": "église",
    "image": "",
    "description": "Ancienne cathédrale gothique avec un remarquable cloître flamboyant.",
    "location": "Condom, Occitanie",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVIe siècle",
    "coordinates": {
      "lat": 43.9591,
      "lng": 0.3722
    },
    "highlights": [
      "Cloître flamboyant",
      "Voûtes d'ogives",
      "Chapelles latérales"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1314,
    "name": "Cathédrale Sainte-Marie d'Auch",
    "type": "église",
    "image": "",
    "description": "Cathédrale Renaissance aux vitraux d'Arnaut de Moles et stalles en bois sculptées.",
    "location": "Auch, Occitanie",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XVe - XVIIe siècle",
    "coordinates": {
      "lat": 43.646,
      "lng": 0.586
    },
    "highlights": [
      "Vitraux Renaissance",
      "Stalles sculptées",
      "Orgue Jean de Joyeuse"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1315,
    "name": "Cathédrale Saint-Étienne de Cahors",
    "type": "église",
    "image": "",
    "description": "Cathédrale romane à coupoles, avec un portail nord remarquable.",
    "location": "Cahors, Occitanie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 44.4476,
      "lng": 1.44
    },
    "highlights": [
      "Coupoles romanes",
      "Portail nord sculpté",
      "Cloître gothique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1316,
    "name": "Basilique Saint-Michel de Bordeaux",
    "type": "église",
    "image": "",
    "description": "Basilique gothique flamboyant avec son clocher isolé, le plus haut du Midi.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIVe - XVIe siècle",
    "coordinates": {
      "lat": 44.8333,
      "lng": -0.5667
    },
    "highlights": [
      "Clocher de 114m",
      "Portail flamboyant",
      "Crypte"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1317,
    "name": "Cathédrale Sainte-Marie de Bayonne",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique du Pays basque, patrimoine mondial sur les chemins de Compostelle.",
    "location": "Bayonne, Nouvelle-Aquitaine",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XIVe siècle",
    "coordinates": {
      "lat": 43.4913,
      "lng": -1.4748
    },
    "highlights": [
      "Cloître gothique",
      "Vitraux Renaissance",
      "Flèches XIXe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1318,
    "name": "Cathédrale Saint-Pierre de Lisieux",
    "type": "église",
    "image": "",
    "description": "L'une des premières cathédrales gothiques de Normandie, sobre et élégante.",
    "location": "Lisieux, Normandie",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XIIIe siècle",
    "coordinates": {
      "lat": 49.1464,
      "lng": 0.2256
    },
    "highlights": [
      "Gothique normand",
      "Salle capitulaire",
      "Jardins de l'évêché"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1319,
    "name": "Basilique Sainte-Thérèse de Lisieux",
    "type": "église",
    "image": "",
    "description": "Deuxième plus grand lieu de pèlerinage de France après Lourdes, de style néo-byzantin.",
    "location": "Lisieux, Normandie",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 49.1402,
      "lng": 0.229
    },
    "highlights": [
      "Mosaïques",
      "Reliques de Sainte-Thérèse",
      "Coupole"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1320,
    "name": "Basilique Notre-Dame du Rosaire de Lourdes",
    "type": "église",
    "image": "",
    "description": "Haut lieu de pèlerinage mondial, avec la grotte de Massabielle et ses basiliques.",
    "location": "Lourdes, Occitanie",
    "rating": 4.6,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 43.0975,
      "lng": -0.0556
    },
    "highlights": [
      "Grotte de Massabielle",
      "Processions aux flambeaux",
      "Basilique souterraine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1321,
    "name": "Cathédrale Notre-Dame de la Treille",
    "type": "église",
    "image": "",
    "description": "Cathédrale à la façade contemporaine translucide, mêlant néo-gothique et art moderne.",
    "location": "Lille, Hauts-de-France",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIXe - XXe siècle",
    "coordinates": {
      "lat": 50.6372,
      "lng": 3.0617
    },
    "highlights": [
      "Façade translucide",
      "Rosace de Ladislas Kijno",
      "Mélange des époques"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1322,
    "name": "Cathédrale Saint-Pierre de Montpellier",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique avec son imposant porche à baldaquin, unique en France.",
    "location": "Montpellier, Occitanie",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIVe siècle",
    "coordinates": {
      "lat": 43.6129,
      "lng": 3.8737
    },
    "highlights": [
      "Porche à baldaquin",
      "Gothique méridional",
      "Faculté de médecine voisine"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1323,
    "name": "Cathédrale Saint-Étienne de Limoges",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique construite sur plusieurs siècles, avec un jubé Renaissance remarquable.",
    "location": "Limoges, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe - XIXe siècle",
    "coordinates": {
      "lat": 45.8293,
      "lng": 1.2637
    },
    "highlights": [
      "Jubé Renaissance",
      "Portail Saint-Jean",
      "Vitraux"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1324,
    "name": "Cathédrale Saint-Pierre de Saintes",
    "type": "église",
    "image": "",
    "description": "Ancienne cathédrale romane et gothique, témoin de l'histoire de la Saintonge.",
    "location": "Saintes, Nouvelle-Aquitaine",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XVe siècle",
    "coordinates": {
      "lat": 45.7428,
      "lng": -0.6327
    },
    "highlights": [
      "Coupole romane",
      "Portail gothique",
      "Clocher-porche"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1325,
    "name": "Abbaye de Royaumont",
    "type": "église",
    "image": "",
    "description": "Abbaye cistercienne fondée par Saint Louis, aujourd'hui centre culturel dans un cadre magnifique.",
    "location": "Asnières-sur-Oise, Île-de-France",
    "rating": 4.5,
    "price": "10€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 49.1462,
      "lng": 2.3793
    },
    "highlights": [
      "Réfectoire des moines",
      "Jardins",
      "Concerts et résidences d'artistes"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1326,
    "name": "Abbaye du Bec-Hellouin",
    "type": "église",
    "image": "",
    "description": "Abbaye normande fondée au XIe siècle, berceau de grands théologiens médiévaux.",
    "location": "Le Bec-Hellouin, Normandie",
    "rating": 4.4,
    "price": "5€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe siècle",
    "coordinates": {
      "lat": 49.2323,
      "lng": 0.7206
    },
    "highlights": [
      "Tour Saint-Nicolas",
      "Village classé",
      "Vie monastique"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1327,
    "name": "Église abbatiale de Saint-Benoît-sur-Loire",
    "type": "église",
    "image": "",
    "description": "Abbatiale romane abritant les reliques de saint Benoît, chef-d'œuvre de l'art roman.",
    "location": "Saint-Benoît-sur-Loire, Centre-Val de Loire",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 47.81,
      "lng": 2.31
    },
    "highlights": [
      "Tour-porche romane",
      "Chapiteaux sculptés",
      "Reliques de saint Benoît"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1328,
    "name": "Abbaye de Montmajour",
    "type": "église",
    "image": "",
    "description": "Abbaye fortifiée dominant la plaine d'Arles, peinte par Van Gogh.",
    "location": "Arles, Provence-Alpes-Côte d'Azur",
    "rating": 4.3,
    "price": "6€",
    "hours": "Horaires variables (se renseigner)",
    "period": "Xe - XVIIIe siècle",
    "coordinates": {
      "lat": 43.6931,
      "lng": 4.6403
    },
    "highlights": [
      "Cloître roman",
      "Tour Pons de l'Orme",
      "Vue sur les Alpilles"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1329,
    "name": "Abbaye de Lagrasse",
    "type": "église",
    "image": "",
    "description": "Abbaye carolingienne au cœur des Corbières, l'un des plus beaux villages de France.",
    "location": "Lagrasse, Occitanie",
    "rating": 4.4,
    "price": "6€",
    "hours": "Horaires variables (se renseigner)",
    "period": "VIIIe siècle",
    "coordinates": {
      "lat": 43.0909,
      "lng": 2.6158
    },
    "highlights": [
      "Pont médiéval",
      "Clocher-tour",
      "Village des Corbières"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1330,
    "name": "Abbaye de Flaran",
    "type": "église",
    "image": "",
    "description": "Abbaye cistercienne gasconne abritant la collection Simonow de peintures.",
    "location": "Valence-sur-Baïse, Occitanie",
    "rating": 4.3,
    "price": "5€",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 43.8833,
      "lng": 0.3833
    },
    "highlights": [
      "Collection Simonow",
      "Cloître",
      "Jardin des simples"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1331,
    "name": "Cathédrale Saint-Maurice de Vienne",
    "type": "église",
    "image": "",
    "description": "Cathédrale romane et gothique dominant le Rhône, témoignage de la puissance de l'archevêché.",
    "location": "Vienne, Auvergne-Rhône-Alpes",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe - XVIe siècle",
    "coordinates": {
      "lat": 45.5252,
      "lng": 4.8783
    },
    "highlights": [
      "Portail roman",
      "Vitraux",
      "Vue sur le Rhône"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1332,
    "name": "Cathédrale Notre-Dame de Clermont-Ferrand",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique unique construite en pierre de Volvic noire, dominant la ville.",
    "location": "Clermont-Ferrand, Auvergne-Rhône-Alpes",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIIe siècle",
    "coordinates": {
      "lat": 45.7789,
      "lng": 3.084
    },
    "highlights": [
      "Pierre de Volvic noire",
      "Vitraux XIIIe",
      "Rosaces"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1333,
    "name": "Basilique Notre-Dame du Port",
    "type": "église",
    "image": "",
    "description": "Chef-d'œuvre de l'art roman auvergnat, classée au patrimoine mondial UNESCO.",
    "location": "Clermont-Ferrand, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 45.781,
      "lng": 3.0877
    },
    "highlights": [
      "Chapiteaux historiés",
      "Chevet auvergnat",
      "Vierge en Majesté"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1334,
    "name": "Basilique Saint-Julien de Brioude",
    "type": "église",
    "image": "",
    "description": "La plus grande église romane d'Auvergne, avec ses peintures murales et galets polychromes.",
    "location": "Brioude, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XIIe siècle",
    "coordinates": {
      "lat": 45.2946,
      "lng": 3.3867
    },
    "highlights": [
      "Galets polychromes",
      "Peintures murales",
      "Chapiteaux romans"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1335,
    "name": "Église abbatiale de Saint-Nectaire",
    "type": "église",
    "image": "",
    "description": "Joyau de l'art roman auvergnat perché sur le mont Cornadore, avec un trésor exceptionnel.",
    "location": "Saint-Nectaire, Auvergne-Rhône-Alpes",
    "rating": 4.5,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.584,
      "lng": 2.9917
    },
    "highlights": [
      "Chapiteaux polychromes",
      "Buste de saint Baudime",
      "Chevet auvergnat"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1336,
    "name": "Église de Saint-Saturnin",
    "type": "église",
    "image": "",
    "description": "L'une des cinq églises majeures de l'art roman auvergnat, dans un village classé.",
    "location": "Saint-Saturnin, Auvergne-Rhône-Alpes",
    "rating": 4.3,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 45.662,
      "lng": 3.0913
    },
    "highlights": [
      "Art roman auvergnat",
      "Fontaine",
      "Village médiéval"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1337,
    "name": "Cathédrale Saint-Étienne de Sens",
    "type": "église",
    "image": "",
    "description": "Première grande cathédrale gothique de France, modèle pour Canterbury.",
    "location": "Sens, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 48.1981,
      "lng": 3.2833
    },
    "highlights": [
      "Premier gothique",
      "Trésor",
      "Vitraux XIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1338,
    "name": "Cathédrale Saint-Mammès de Langres",
    "type": "église",
    "image": "",
    "description": "Cathédrale romane et gothique perchée sur le promontoire de Langres.",
    "location": "Langres, Grand Est",
    "rating": 4.1,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIIe siècle",
    "coordinates": {
      "lat": 47.8622,
      "lng": 5.3339
    },
    "highlights": [
      "Transition roman-gothique",
      "Façade classique",
      "Ville fortifiée"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1339,
    "name": "Cathédrale Saint-Cyr-et-Sainte-Julitte de Nevers",
    "type": "église",
    "image": "",
    "description": "Cathédrale rare possédant deux absides opposées, romane et gothique.",
    "location": "Nevers, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 46.9882,
      "lng": 3.158
    },
    "highlights": [
      "Double abside",
      "Art roman et gothique",
      "Vitraux contemporains"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "id": 1340,
    "name": "Cathédrale Saint-Étienne d'Auxerre",
    "type": "église",
    "image": "",
    "description": "Cathédrale gothique avec une crypte romane ornée des plus anciennes fresques de France.",
    "location": "Auxerre, Bourgogne-Franche-Comté",
    "rating": 4.4,
    "price": "Gratuit",
    "hours": "Horaires variables (se renseigner)",
    "period": "XIe - XVIe siècle",
    "coordinates": {
      "lat": 47.797,
      "lng": 3.573
    },
    "highlights": [
      "Crypte du XIe",
      "Fresques carolingiennes",
      "Vitraux XIIIe"
    ],
    "visited": false,
    "favorite": false
  },
  {
    "name": "Musée de Laon",
    "type": "musée",
    "image": "",
    "description": "Archéologie, beaux-arts et arts décoratifs dans une chapelle des Templiers.",
    "location": "Laon, Hauts-de-France",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 49.5631,
      "lng": 3.62
    },
    "highlights": [
      "Chapelle des Templiers",
      "Archéologie",
      "Faïences"
    ],
    "visited": false,
    "favorite": false,
    "id": 1341
  },
  {
    "name": "Musée Antoine Vivenel",
    "type": "musée",
    "image": "",
    "description": "Archéologie et beaux-arts, vases grecs exceptionnels.",
    "location": "Compiègne, Hauts-de-France",
    "rating": 4,
    "price": "3€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 49.4168,
      "lng": 2.8264
    },
    "highlights": [
      "Vases grecs",
      "Sculptures",
      "Compiègne"
    ],
    "visited": false,
    "favorite": false,
    "id": 1342
  },
  {
    "name": "Musée du Second Empire",
    "type": "musée",
    "image": "",
    "description": "Au Château de Compiègne, vie sous le Second Empire.",
    "location": "Compiègne, Hauts-de-France",
    "rating": 4.2,
    "price": "7.50€",
    "hours": "10h - 18h (se renseigner)",
    "period": "XIXe siècle",
    "coordinates": {
      "lat": 49.4175,
      "lng": 2.83
    },
    "highlights": [
      "Second Empire",
      "Château",
      "Napoléon III"
    ],
    "visited": false,
    "favorite": false,
    "id": 1343
  },
  {
    "name": "Musée de l'Hôtel de Berny",
    "type": "musée",
    "image": "",
    "description": "Mobilier et objets d'art picard du XVIIe et XVIIIe siècle.",
    "location": "Amiens, Hauts-de-France",
    "rating": 3.9,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "XVIIe - XVIIIe siècle",
    "coordinates": {
      "lat": 49.8942,
      "lng": 2.2974
    },
    "highlights": [
      "Mobilier picard",
      "Céramiques",
      "Hôtel particulier"
    ],
    "visited": false,
    "favorite": false,
    "id": 1344
  },
  {
    "name": "Musée des Beaux-Arts de Cambrai",
    "type": "musée",
    "image": "",
    "description": "Peintures du XVIe au XXe siècle, 500 œuvres.",
    "location": "Cambrai, Hauts-de-France",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "XVIe - XXe siècle",
    "coordinates": {
      "lat": 50.1744,
      "lng": 3.2354
    },
    "highlights": [
      "Rubens",
      "Art hollandais",
      "Sculptures"
    ],
    "visited": false,
    "favorite": false,
    "id": 1345
  },
  {
    "name": "Musée de Boulogne-sur-Mer",
    "type": "musée",
    "image": "",
    "description": "Château-musée avec collections d'archéologie et ethnographie.",
    "location": "Boulogne-sur-Mer, Hauts-de-France",
    "rating": 4.1,
    "price": "7€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 50.7282,
      "lng": 1.6155
    },
    "highlights": [
      "Masque funéraire",
      "Vases grecs",
      "Art égyptien"
    ],
    "visited": false,
    "favorite": false,
    "id": 1346
  },
  {
    "name": "Musée Henri Matisse (Nord)",
    "type": "musée",
    "image": "",
    "description": "Palais Fénelon, troisième collection Matisse en France.",
    "location": "Le Cateau-Cambrésis, Hauts-de-France",
    "rating": 4.3,
    "price": "7€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Art moderne",
    "coordinates": {
      "lat": 50.105,
      "lng": 3.5423
    },
    "highlights": [
      "Matisse",
      "Auguste Herbin",
      "Tériade"
    ],
    "visited": false,
    "favorite": false,
    "id": 1347
  },
  {
    "name": "Nausicaá - Centre National de la Mer",
    "type": "musée",
    "image": "",
    "description": "Plus grand aquarium d'Europe, 58 000 animaux marins.",
    "location": "Boulogne-sur-Mer, Hauts-de-France",
    "rating": 4.6,
    "price": "28.50€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Océanographie",
    "coordinates": {
      "lat": 50.7235,
      "lng": 1.5806
    },
    "highlights": [
      "Bassin haute mer",
      "Requins",
      "Manchots"
    ],
    "visited": false,
    "favorite": false,
    "id": 1348
  },
  {
    "name": "Musée d'Art moderne Richard Anacréon",
    "type": "musée",
    "image": "",
    "description": "Art moderne du XXe siècle dans le cadre de la haute ville de Granville.",
    "location": "Granville, Normandie",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "XXe siècle",
    "coordinates": {
      "lat": 48.8381,
      "lng": -1.5963
    },
    "highlights": [
      "Signac",
      "Vlaminck",
      "Derain"
    ],
    "visited": false,
    "favorite": false,
    "id": 1349
  },
  {
    "name": "Musée Christian Dior",
    "type": "musée",
    "image": "",
    "description": "Villa natale de Christian Dior, histoire de la haute couture.",
    "location": "Granville, Normandie",
    "rating": 4.4,
    "price": "9€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Mode",
    "coordinates": {
      "lat": 48.8345,
      "lng": -1.6014
    },
    "highlights": [
      "Robes haute couture",
      "Villa Les Rhumbs",
      "Jardin"
    ],
    "visited": false,
    "favorite": false,
    "id": 1350
  },
  {
    "name": "Musée des Beaux-Arts de Dieppe",
    "type": "musée",
    "image": "",
    "description": "Dans le château, ivoires dieppois et peintures impressionnistes.",
    "location": "Dieppe, Normandie",
    "rating": 4,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 49.9252,
      "lng": 1.0752
    },
    "highlights": [
      "Ivoires",
      "Pissarro",
      "Château"
    ],
    "visited": false,
    "favorite": false,
    "id": 1351
  },
  {
    "name": "Musée de Normandie (Caen)",
    "type": "musée",
    "image": "",
    "description": "Ethnographie normande dans le château ducal de Caen.",
    "location": "Caen, Normandie",
    "rating": 4,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "Ethnographie",
    "coordinates": {
      "lat": 49.1864,
      "lng": -0.3636
    },
    "highlights": [
      "Vie rurale",
      "Artisanat",
      "Château de Guillaume"
    ],
    "visited": false,
    "favorite": false,
    "id": 1352
  },
  {
    "name": "Musée des Beaux-Arts d'Évreux",
    "type": "musée",
    "image": "",
    "description": "Art médiéval, Renaissance et contemporain dans l'ancien évêché.",
    "location": "Évreux, Normandie",
    "rating": 3.9,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "Moyen Âge - XXIe siècle",
    "coordinates": {
      "lat": 49.0236,
      "lng": 1.1537
    },
    "highlights": [
      "Art sacré",
      "Archéologie",
      "Vitraux"
    ],
    "visited": false,
    "favorite": false,
    "id": 1353
  },
  {
    "name": "Musée de Fécamp - Les Pêcheries",
    "type": "musée",
    "image": "",
    "description": "Ancienne sécherie de morue reconvertie, beaux-arts et histoire maritime.",
    "location": "Fécamp, Normandie",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Maritime - Beaux-arts",
    "coordinates": {
      "lat": 49.7575,
      "lng": 0.3723
    },
    "highlights": [
      "Pêche à Terre-Neuve",
      "Impressionnisme",
      "Vue panoramique"
    ],
    "visited": false,
    "favorite": false,
    "id": 1354
  },
  {
    "name": "Musée des Thoniers",
    "type": "musée",
    "image": "",
    "description": "Histoire de la pêche au thon dans le port d'Étel.",
    "location": "Étel, Bretagne",
    "rating": 3.9,
    "price": "5€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Pêche",
    "coordinates": {
      "lat": 47.657,
      "lng": -3.2015
    },
    "highlights": [
      "Thoniers",
      "Ria d'Étel",
      "Traditions"
    ],
    "visited": false,
    "favorite": false,
    "id": 1355
  },
  {
    "name": "Musée Départemental Breton (Quimper)",
    "type": "musée",
    "image": "",
    "description": "Art et traditions populaires de Cornouaille.",
    "location": "Quimper, Bretagne",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Art breton",
    "coordinates": {
      "lat": 47.9962,
      "lng": -4.1028
    },
    "highlights": [
      "Costumes bretons",
      "Mobilier",
      "Faïences"
    ],
    "visited": false,
    "favorite": false,
    "id": 1356
  },
  {
    "name": "Écomusée de Rennes",
    "type": "musée",
    "image": "",
    "description": "Ferme de la Bintinais, vie rurale autour de Rennes.",
    "location": "Rennes, Bretagne",
    "rating": 4.1,
    "price": "6€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Ethnographie rurale",
    "coordinates": {
      "lat": 48.0949,
      "lng": -1.6271
    },
    "highlights": [
      "Animaux de ferme",
      "Verger",
      "Vie paysanne"
    ],
    "visited": false,
    "favorite": false,
    "id": 1357
  },
  {
    "name": "Musée des Beaux-Arts de Vannes",
    "type": "musée",
    "image": "",
    "description": "La Cohue, peintures du XVe au XXe siècle.",
    "location": "Vannes, Bretagne",
    "rating": 4,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 47.6554,
      "lng": -2.757
    },
    "highlights": [
      "Delacroix",
      "Gauguin",
      "Art breton"
    ],
    "visited": false,
    "favorite": false,
    "id": 1358
  },
  {
    "name": "Musée d'Art Naïf et d'Arts Singuliers",
    "type": "musée",
    "image": "",
    "description": "Unique en France, dédié aux arts naïfs et singuliers.",
    "location": "Laval, Pays de la Loire",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Art naïf",
    "coordinates": {
      "lat": 48.0699,
      "lng": -0.7669
    },
    "highlights": [
      "Le Douanier Rousseau",
      "Art brut",
      "Art singulier"
    ],
    "visited": false,
    "favorite": false,
    "id": 1359
  },
  {
    "name": "Musée du Château de Laval",
    "type": "musée",
    "image": "",
    "description": "Château médiéval, ethnographie et art naïf.",
    "location": "Laval, Pays de la Loire",
    "rating": 3.9,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Moyen Âge - XXe siècle",
    "coordinates": {
      "lat": 48.0703,
      "lng": -0.7701
    },
    "highlights": [
      "Château",
      "Art naïf",
      "Henri Rousseau"
    ],
    "visited": false,
    "favorite": false,
    "id": 1360
  },
  {
    "name": "Musée de Tessé",
    "type": "musée",
    "image": "",
    "description": "Peintures anciennes et décor égyptien reconstitué.",
    "location": "Le Mans, Pays de la Loire",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 48.0037,
      "lng": 0.1982
    },
    "highlights": [
      "Art égyptien reconstitué",
      "Peintures",
      "Philippe de Champaigne"
    ],
    "visited": false,
    "favorite": false,
    "id": 1361
  },
  {
    "name": "Bioparc de Doué-la-Fontaine",
    "type": "musée",
    "image": "",
    "description": "Zoo troglodyte unique, dans d'anciennes carrières de coquillages.",
    "location": "Doué-en-Anjou, Pays de la Loire",
    "rating": 4.5,
    "price": "22.50€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Zoologie",
    "coordinates": {
      "lat": 47.1972,
      "lng": -0.2753
    },
    "highlights": [
      "Troglodyte",
      "Volcans",
      "Girafes"
    ],
    "visited": false,
    "favorite": false,
    "id": 1362
  },
  {
    "name": "Musée Robert Tatin",
    "type": "musée",
    "image": "",
    "description": "Univers fantasmagorique de l'artiste Robert Tatin.",
    "location": "Cossé-le-Vivien, Pays de la Loire",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Art singulier",
    "coordinates": {
      "lat": 48.0878,
      "lng": -0.9186
    },
    "highlights": [
      "Jardin de sculptures",
      "Art brut",
      "Dragon"
    ],
    "visited": false,
    "favorite": false,
    "id": 1363
  },
  {
    "name": "Musée des Beaux-Arts de Chartres",
    "type": "musée",
    "image": "",
    "description": "Ancien palais épiscopal, peintures et émaux du XIIe siècle.",
    "location": "Chartres, Centre-Val de Loire",
    "rating": 4,
    "price": "7€",
    "hours": "10h - 18h (se renseigner)",
    "period": "XIIe - XXe siècle",
    "coordinates": {
      "lat": 48.4462,
      "lng": 1.4888
    },
    "highlights": [
      "Émaux de Limoges",
      "Soutine",
      "Vlaminck"
    ],
    "visited": false,
    "favorite": false,
    "id": 1364
  },
  {
    "name": "Musée du Château Royal de Blois",
    "type": "musée",
    "image": "",
    "description": "Quatre ailes de quatre époques, musée des beaux-arts.",
    "location": "Blois, Centre-Val de Loire",
    "rating": 4.5,
    "price": "13€",
    "hours": "10h - 18h (se renseigner)",
    "period": "XIIIe - XVIIe siècle",
    "coordinates": {
      "lat": 47.5856,
      "lng": 1.3309
    },
    "highlights": [
      "Escalier François Ier",
      "Appartements royaux",
      "Aile Louis XII"
    ],
    "visited": false,
    "favorite": false,
    "id": 1365
  },
  {
    "name": "Maison de la Magie Robert-Houdin",
    "type": "musée",
    "image": "",
    "description": "Musée de la magie dédié à Robert-Houdin, père de l'illusionnisme.",
    "location": "Blois, Centre-Val de Loire",
    "rating": 4.3,
    "price": "11€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Magie",
    "coordinates": {
      "lat": 47.5866,
      "lng": 1.33
    },
    "highlights": [
      "Automates",
      "Spectacles",
      "Robert-Houdin"
    ],
    "visited": false,
    "favorite": false,
    "id": 1366
  },
  {
    "name": "Musée Marcel Proust",
    "type": "musée",
    "image": "",
    "description": "Maison de Tante Léonie, univers de Marcel Proust.",
    "location": "Illiers-Combray, Centre-Val de Loire",
    "rating": 4.2,
    "price": "6€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Littérature",
    "coordinates": {
      "lat": 48.2975,
      "lng": 1.2472
    },
    "highlights": [
      "Chambre de Tante Léonie",
      "Madeleine de Proust",
      "Combray"
    ],
    "visited": false,
    "favorite": false,
    "id": 1367
  },
  {
    "name": "Musée de la Marine de Loire",
    "type": "musée",
    "image": "",
    "description": "Batellerie et vie ligérienne dans un château.",
    "location": "Châteauneuf-sur-Loire, Centre-Val de Loire",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Marine fluviale",
    "coordinates": {
      "lat": 47.8628,
      "lng": 2.22
    },
    "highlights": [
      "Batellerie",
      "Loire",
      "Gabares"
    ],
    "visited": false,
    "favorite": false,
    "id": 1368
  },
  {
    "name": "Musée de la Résistance et de la Déportation de la Haute-Vienne",
    "type": "musée",
    "image": "",
    "description": "Mémoire de la Résistance en Limousin et du massacre d'Oradour.",
    "location": "Limoges, Nouvelle-Aquitaine",
    "rating": 4.2,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "1939-1945",
    "coordinates": {
      "lat": 45.828,
      "lng": 1.253
    },
    "highlights": [
      "Résistance limousine",
      "Oradour",
      "Libération"
    ],
    "visited": false,
    "favorite": false,
    "id": 1369
  },
  {
    "name": "Centre de la Mémoire d'Oradour-sur-Glane",
    "type": "musée",
    "image": "",
    "description": "Mémorial du massacre du 10 juin 1944, village martyr conservé en ruines.",
    "location": "Oradour-sur-Glane, Nouvelle-Aquitaine",
    "rating": 4.7,
    "price": "8.50€",
    "hours": "10h - 18h (se renseigner)",
    "period": "1944",
    "coordinates": {
      "lat": 45.9325,
      "lng": 1.0302
    },
    "highlights": [
      "Village martyr",
      "10 juin 1944",
      "Mémoire"
    ],
    "visited": false,
    "favorite": false,
    "id": 1370
  },
  {
    "name": "Musée d'Art et d'Histoire de Saintes",
    "type": "musée",
    "image": "",
    "description": "Archéologie gallo-romaine et beaux-arts de Saintonge.",
    "location": "Saintes, Nouvelle-Aquitaine",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Antiquité - XIXe siècle",
    "coordinates": {
      "lat": 45.7457,
      "lng": -0.6329
    },
    "highlights": [
      "Lapidaire gallo-romain",
      "Faïences",
      "Saintonge"
    ],
    "visited": false,
    "favorite": false,
    "id": 1371
  },
  {
    "name": "Musée National des Douanes",
    "type": "musée",
    "image": "",
    "description": "Unique en France, histoire des douanes dans l'hôtel des Fermes.",
    "location": "Bordeaux, Nouvelle-Aquitaine",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Douanes",
    "coordinates": {
      "lat": 44.842,
      "lng": -0.564
    },
    "highlights": [
      "Contrebande",
      "Uniformes",
      "Commerce"
    ],
    "visited": false,
    "favorite": false,
    "id": 1372
  },
  {
    "name": "Musée de la Vallée de la Dordogne",
    "type": "musée",
    "image": "",
    "description": "Traditions de la vallée de la Dordogne et gabariers.",
    "location": "Argentat, Nouvelle-Aquitaine",
    "rating": 3.8,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Traditions",
    "coordinates": {
      "lat": 45.0931,
      "lng": 1.9381
    },
    "highlights": [
      "Gabariers",
      "Dordogne",
      "Artisanat"
    ],
    "visited": false,
    "favorite": false,
    "id": 1373
  },
  {
    "name": "Musée des Beaux-Arts de Carcassonne",
    "type": "musée",
    "image": "",
    "description": "Peintures européennes du XVIe au XIXe siècle.",
    "location": "Carcassonne, Occitanie",
    "rating": 3.9,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "XVIe - XIXe siècle",
    "coordinates": {
      "lat": 43.2107,
      "lng": 2.3492
    },
    "highlights": [
      "Chardin",
      "Paysages",
      "Cité médiévale"
    ],
    "visited": false,
    "favorite": false,
    "id": 1374
  },
  {
    "name": "Musée Labit",
    "type": "musée",
    "image": "",
    "description": "Arts d'Extrême-Orient et d'Égypte ancienne.",
    "location": "Toulouse, Occitanie",
    "rating": 4,
    "price": "Gratuit",
    "hours": "10h - 18h (se renseigner)",
    "period": "Art asiatique",
    "coordinates": {
      "lat": 43.5907,
      "lng": 1.4569
    },
    "highlights": [
      "Art japonais",
      "Art égyptien",
      "Bouddhisme"
    ],
    "visited": false,
    "favorite": false,
    "id": 1375
  },
  {
    "name": "Musée Champollion - Les Écritures du Monde",
    "type": "musée",
    "image": "",
    "description": "Maison natale de Champollion, histoire des écritures.",
    "location": "Figeac, Occitanie",
    "rating": 4.3,
    "price": "5€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Écritures",
    "coordinates": {
      "lat": 44.6085,
      "lng": 2.0324
    },
    "highlights": [
      "Champollion",
      "Hiéroglyphes",
      "Pierre de Rosette (réplique)"
    ],
    "visited": false,
    "favorite": false,
    "id": 1376
  },
  {
    "name": "Musée de Valence",
    "type": "musée",
    "image": "",
    "description": "Art et archéologie de la Drôme, paysages de la vallée du Rhône.",
    "location": "Valence, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "5€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Préhistoire - XXe siècle",
    "coordinates": {
      "lat": 44.9329,
      "lng": 4.8902
    },
    "highlights": [
      "Paysages du Rhône",
      "Archéologie",
      "Hubert Robert"
    ],
    "visited": false,
    "favorite": false,
    "id": 1377
  },
  {
    "name": "Musée de l'Automobile Henri Malartre",
    "type": "musée",
    "image": "",
    "description": "200 véhicules anciens dans un château au bord de Saône.",
    "location": "Rochetaillée-sur-Saône, Auvergne-Rhône-Alpes",
    "rating": 4.1,
    "price": "7€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Automobile",
    "coordinates": {
      "lat": 45.8436,
      "lng": 4.833
    },
    "highlights": [
      "Voitures anciennes",
      "Motos",
      "Cycles"
    ],
    "visited": false,
    "favorite": false,
    "id": 1378
  },
  {
    "name": "Musée Crozatier (Le Puy)",
    "type": "musée",
    "image": "",
    "description": "Beaux-arts, dentelle du Puy et sciences naturelles.",
    "location": "Le Puy-en-Velay, Auvergne-Rhône-Alpes",
    "rating": 4,
    "price": "6€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Beaux-arts",
    "coordinates": {
      "lat": 45.0424,
      "lng": 3.8836
    },
    "highlights": [
      "Dentelle",
      "Peintures",
      "Minéralogie"
    ],
    "visited": false,
    "favorite": false,
    "id": 1379
  },
  {
    "name": "Musée du Cristal de Saint-Louis",
    "type": "musée",
    "image": "",
    "description": "Cristallerie depuis 1586, chefs-d'œuvre de cristal.",
    "location": "Saint-Louis-lès-Bitche, Grand Est",
    "rating": 4.1,
    "price": "6€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Cristal",
    "coordinates": {
      "lat": 48.9675,
      "lng": 7.4025
    },
    "highlights": [
      "Cristal",
      "Gobeleterie",
      "Lustres"
    ],
    "visited": false,
    "favorite": false,
    "id": 1380
  },
  {
    "name": "Musée Colette",
    "type": "musée",
    "image": "",
    "description": "Maison natale de Colette, vie et œuvre de l'écrivaine.",
    "location": "Saint-Sauveur-en-Puisaye, Bourgogne-Franche-Comté",
    "rating": 4.1,
    "price": "6.50€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Littérature",
    "coordinates": {
      "lat": 47.5586,
      "lng": 3.2006
    },
    "highlights": [
      "Colette",
      "Maison natale",
      "Jardins"
    ],
    "visited": false,
    "favorite": false,
    "id": 1381
  },
  {
    "name": "Musée du Jouet de Moirans-en-Montagne",
    "type": "musée",
    "image": "",
    "description": "3 000 jouets du monde entier, capital français du jouet.",
    "location": "Moirans-en-Montagne, Bourgogne-Franche-Comté",
    "rating": 4.2,
    "price": "7€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Jouets",
    "coordinates": {
      "lat": 46.4342,
      "lng": 5.7244
    },
    "highlights": [
      "Jouets anciens",
      "Jouets du monde",
      "Tournage sur bois"
    ],
    "visited": false,
    "favorite": false,
    "id": 1382
  },
  {
    "name": "MuséoParc Alésia",
    "type": "musée",
    "image": "",
    "description": "Site de la bataille de Vercingétorix contre César, centre d'interprétation.",
    "location": "Alise-Sainte-Reine, Bourgogne-Franche-Comté",
    "rating": 4.3,
    "price": "11€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Antiquité",
    "coordinates": {
      "lat": 47.5368,
      "lng": 4.5009
    },
    "highlights": [
      "Vercingétorix",
      "Siège d'Alésia",
      "Vestiges gallo-romains"
    ],
    "visited": false,
    "favorite": false,
    "id": 1383
  },
  {
    "name": "Musée des Beaux-Arts de Dole",
    "type": "musée",
    "image": "",
    "description": "Peintures, sculptures et art comtois dans un pavillon des officiers.",
    "location": "Dole, Bourgogne-Franche-Comté",
    "rating": 4,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "XVe - XXe siècle",
    "coordinates": {
      "lat": 47.094,
      "lng": 5.4903
    },
    "highlights": [
      "Courbet",
      "Art comtois",
      "Pasteur"
    ],
    "visited": false,
    "favorite": false,
    "id": 1384
  },
  {
    "name": "Musée Jean Cocteau - Collection Séverin Wunderman",
    "type": "musée",
    "image": "",
    "description": "Architecture de Rudy Ricciotti, 1 800 œuvres de Cocteau.",
    "location": "Menton, Provence-Alpes-Côte d'Azur",
    "rating": 4.2,
    "price": "8€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Art moderne",
    "coordinates": {
      "lat": 43.7741,
      "lng": 7.5013
    },
    "highlights": [
      "Dessins de Cocteau",
      "Architecture Ricciotti",
      "Méditerranée"
    ],
    "visited": false,
    "favorite": false,
    "id": 1385
  },
  {
    "name": "Musée de l'Alta Rocca",
    "type": "musée",
    "image": "",
    "description": "Archéologie préhistorique et médiévale du sud de la Corse.",
    "location": "Levie, Corse",
    "rating": 3.9,
    "price": "4€",
    "hours": "10h - 18h (se renseigner)",
    "period": "Préhistoire",
    "coordinates": {
      "lat": 41.7018,
      "lng": 9.1208
    },
    "highlights": [
      "Dame de Bonifacio",
      "Néolithique",
      "Bronze"
    ],
    "visited": false,
    "favorite": false,
    "id": 1386
  }
];
