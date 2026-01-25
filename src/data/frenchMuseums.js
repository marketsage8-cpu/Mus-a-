/**
 * Base de données complète des musées et châteaux de France
 * Pour la fonctionnalité "Rencontres" - trouver des compagnons de visite
 */

export const frenchMuseums = [
  // ============================================
  // ÎLE-DE-FRANCE (Paris et région)
  // ============================================
  { id: 'idf-1', name: "Musée du Louvre", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80" },
  { id: 'idf-2', name: "Musée d'Orsay", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=800&q=80" },
  { id: 'idf-3', name: "Centre Pompidou", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'idf-4', name: "Musée du Quai Branly", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?w=800&q=80" },
  { id: 'idf-5', name: "Musée Picasso", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'idf-6', name: "Musée Rodin", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'idf-7', name: "Musée de l'Orangerie", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'idf-8', name: "Musée Marmottan Monet", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'idf-9', name: "Musée Carnavalet", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80" },
  { id: 'idf-10', name: "Musée des Arts Décoratifs", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80" },
  { id: 'idf-11', name: "Musée de l'Armée", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'idf-12', name: "Musée Grévin", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80" },
  { id: 'idf-13', name: "Palais de la Découverte", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" },
  { id: 'idf-14', name: "Cité des Sciences", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { id: 'idf-15', name: "Musée de l'Homme", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1565799557186-1158b1bd9e23?w=800&q=80" },
  { id: 'idf-16', name: "Fondation Louis Vuitton", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80" },
  { id: 'idf-17', name: "Musée Jacquemart-André", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'idf-18', name: "Musée de Cluny", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80" },
  { id: 'idf-19', name: "Château de Versailles", type: "château", city: "Versailles", region: "Île-de-France", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'idf-20', name: "Château de Fontainebleau", type: "château", city: "Fontainebleau", region: "Île-de-France", image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80" },
  { id: 'idf-21', name: "Château de Vaux-le-Vicomte", type: "château", city: "Maincy", region: "Île-de-France", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'idf-22', name: "Château de Vincennes", type: "château", city: "Vincennes", region: "Île-de-France", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'idf-23', name: "Château de Chantilly", type: "château", city: "Chantilly", region: "Île-de-France", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'idf-24', name: "Château de Rambouillet", type: "château", city: "Rambouillet", region: "Île-de-France", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { id: 'idf-25', name: "Basilique Saint-Denis", type: "monument", city: "Saint-Denis", region: "Île-de-France", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },

  // ============================================
  // PROVENCE-ALPES-CÔTE D'AZUR
  // ============================================
  { id: 'paca-1', name: "MuCEM", type: "musée", city: "Marseille", region: "PACA", image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80" },
  { id: 'paca-2', name: "Musée Granet", type: "musée", city: "Aix-en-Provence", region: "PACA", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'paca-3', name: "Fondation Maeght", type: "musée", city: "Saint-Paul-de-Vence", region: "PACA", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'paca-4', name: "Musée Matisse", type: "musée", city: "Nice", region: "PACA", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'paca-5', name: "MAMAC Nice", type: "musée", city: "Nice", region: "PACA", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'paca-6', name: "Musée Chagall", type: "musée", city: "Nice", region: "PACA", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'paca-7', name: "Musée Picasso Antibes", type: "musée", city: "Antibes", region: "PACA", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'paca-8', name: "Villa Ephrussi", type: "musée", city: "Saint-Jean-Cap-Ferrat", region: "PACA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'paca-9', name: "Palais des Papes", type: "monument", city: "Avignon", region: "PACA", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'paca-10', name: "Musée de la Lavande", type: "musée", city: "Coustellet", region: "PACA", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80" },
  { id: 'paca-11', name: "Château d'If", type: "château", city: "Marseille", region: "PACA", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'paca-12', name: "Château de Gordes", type: "château", city: "Gordes", region: "PACA", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'paca-13', name: "Fort de Brégançon", type: "château", city: "Bormes-les-Mimosas", region: "PACA", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { id: 'paca-14', name: "Château de Lourmarin", type: "château", city: "Lourmarin", region: "PACA", image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80" },

  // ============================================
  // AUVERGNE-RHÔNE-ALPES
  // ============================================
  { id: 'ara-1', name: "Musée des Confluences", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80" },
  { id: 'ara-2', name: "Musée des Beaux-Arts de Lyon", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'ara-3', name: "Institut Lumière", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" },
  { id: 'ara-4', name: "Musée d'Art Contemporain de Lyon", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'ara-5', name: "Musée de Grenoble", type: "musée", city: "Grenoble", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'ara-6', name: "Musée de la Résistance", type: "musée", city: "Grenoble", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'ara-7', name: "Château de Vizille", type: "château", city: "Vizille", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'ara-8', name: "Château de Grignan", type: "château", city: "Grignan", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'ara-9', name: "Palais Idéal du Facteur Cheval", type: "monument", city: "Hauterives", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'ara-10', name: "Vulcania", type: "musée", city: "Saint-Ours-les-Roches", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { id: 'ara-11', name: "Château de Murol", type: "château", city: "Murol", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { id: 'ara-12', name: "Château d'Anjony", type: "château", city: "Tournemire", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80" },

  // ============================================
  // NOUVELLE-AQUITAINE
  // ============================================
  { id: 'na-1', name: "Cité du Vin", type: "musée", city: "Bordeaux", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80" },
  { id: 'na-2', name: "CAPC Bordeaux", type: "musée", city: "Bordeaux", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'na-3', name: "Musée d'Aquitaine", type: "musée", city: "Bordeaux", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'na-4', name: "Bassins des Lumières", type: "musée", city: "Bordeaux", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'na-5', name: "Musée des Beaux-Arts de Bordeaux", type: "musée", city: "Bordeaux", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'na-6', name: "Lascaux IV", type: "musée", city: "Montignac", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80" },
  { id: 'na-7', name: "Aquarium de La Rochelle", type: "musée", city: "La Rochelle", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80" },
  { id: 'na-8', name: "Musée du Nouveau Monde", type: "musée", city: "La Rochelle", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'na-9', name: "Château de Bonaguil", type: "château", city: "Saint-Front-sur-Lémance", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'na-10', name: "Château de Biron", type: "château", city: "Biron", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'na-11', name: "Château de Castelnaud", type: "château", city: "Castelnaud-la-Chapelle", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'na-12', name: "Château de Beynac", type: "château", city: "Beynac-et-Cazenac", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { id: 'na-13', name: "Château de Hautefort", type: "château", city: "Hautefort", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'na-14', name: "Château de Pau", type: "château", city: "Pau", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80" },

  // ============================================
  // OCCITANIE
  // ============================================
  { id: 'occ-1', name: "Cité de l'Espace", type: "musée", city: "Toulouse", region: "Occitanie", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80" },
  { id: 'occ-2', name: "Musée des Augustins", type: "musée", city: "Toulouse", region: "Occitanie", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'occ-3', name: "Les Abattoirs", type: "musée", city: "Toulouse", region: "Occitanie", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'occ-4', name: "Musée Fabre", type: "musée", city: "Montpellier", region: "Occitanie", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'occ-5', name: "Musée Soulages", type: "musée", city: "Rodez", region: "Occitanie", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'occ-6', name: "Musée Toulouse-Lautrec", type: "musée", city: "Albi", region: "Occitanie", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'occ-7', name: "Cité de Carcassonne", type: "monument", city: "Carcassonne", region: "Occitanie", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'occ-8', name: "Pont du Gard", type: "monument", city: "Vers-Pont-du-Gard", region: "Occitanie", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },
  { id: 'occ-9', name: "Château de Quéribus", type: "château", city: "Cucugnan", region: "Occitanie", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'occ-10', name: "Château de Peyrepertuse", type: "château", city: "Duilhac-sous-Peyrepertuse", region: "Occitanie", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'occ-11', name: "Château de Montségur", type: "château", city: "Montségur", region: "Occitanie", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'occ-12', name: "Château de Foix", type: "château", city: "Foix", region: "Occitanie", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },

  // ============================================
  // BRETAGNE
  // ============================================
  { id: 'bre-1', name: "Océanopolis", type: "musée", city: "Brest", region: "Bretagne", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80" },
  { id: 'bre-2', name: "Musée de la Marine Brest", type: "musée", city: "Brest", region: "Bretagne", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'bre-3', name: "Musée de Bretagne", type: "musée", city: "Rennes", region: "Bretagne", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'bre-4', name: "Musée des Beaux-Arts de Rennes", type: "musée", city: "Rennes", region: "Bretagne", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'bre-5', name: "Musée de Pont-Aven", type: "musée", city: "Pont-Aven", region: "Bretagne", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'bre-6', name: "Cité de la Voile Tabarly", type: "musée", city: "Lorient", region: "Bretagne", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { id: 'bre-7', name: "Château de Fougères", type: "château", city: "Fougères", region: "Bretagne", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'bre-8', name: "Château de Vitré", type: "château", city: "Vitré", region: "Bretagne", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'bre-9', name: "Fort-la-Latte", type: "château", city: "Plévenon", region: "Bretagne", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'bre-10', name: "Château des Ducs de Bretagne", type: "château", city: "Nantes", region: "Bretagne", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { id: 'bre-11', name: "Château de Josselin", type: "château", city: "Josselin", region: "Bretagne", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },

  // ============================================
  // PAYS DE LA LOIRE
  // ============================================
  { id: 'pdl-1', name: "Château de Chambord", type: "château", city: "Chambord", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'pdl-2', name: "Château de Chenonceau", type: "château", city: "Chenonceaux", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'pdl-3', name: "Château d'Amboise", type: "château", city: "Amboise", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'pdl-4', name: "Château de Blois", type: "château", city: "Blois", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { id: 'pdl-5', name: "Château d'Azay-le-Rideau", type: "château", city: "Azay-le-Rideau", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'pdl-6', name: "Château de Villandry", type: "château", city: "Villandry", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80" },
  { id: 'pdl-7', name: "Château du Clos Lucé", type: "château", city: "Amboise", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'pdl-8', name: "Château de Langeais", type: "château", city: "Langeais", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'pdl-9', name: "Château d'Ussé", type: "château", city: "Rigny-Ussé", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80" },
  { id: 'pdl-10', name: "Château de Cheverny", type: "château", city: "Cheverny", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80" },
  { id: 'pdl-11', name: "Château de Chinon", type: "château", city: "Chinon", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1565799557186-1158b1bd9e23?w=800&q=80" },
  { id: 'pdl-12', name: "Château de Saumur", type: "château", city: "Saumur", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80" },
  { id: 'pdl-13', name: "Château d'Angers", type: "château", city: "Angers", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },
  { id: 'pdl-14', name: "Abbaye de Fontevraud", type: "monument", city: "Fontevraud-l'Abbaye", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" },
  { id: 'pdl-15', name: "Les Machines de l'île", type: "musée", city: "Nantes", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80" },
  { id: 'pdl-16', name: "Musée d'Arts de Nantes", type: "musée", city: "Nantes", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },

  // ============================================
  // NORMANDIE
  // ============================================
  { id: 'nor-1', name: "Mont-Saint-Michel", type: "monument", city: "Le Mont-Saint-Michel", region: "Normandie", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80" },
  { id: 'nor-2', name: "Mémorial de Caen", type: "musée", city: "Caen", region: "Normandie", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'nor-3', name: "Musée des Impressionnismes", type: "musée", city: "Giverny", region: "Normandie", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'nor-4', name: "Maison de Claude Monet", type: "musée", city: "Giverny", region: "Normandie", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'nor-5', name: "Musée Malraux", type: "musée", city: "Le Havre", region: "Normandie", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'nor-6', name: "Musée de la Tapisserie de Bayeux", type: "musée", city: "Bayeux", region: "Normandie", image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80" },
  { id: 'nor-7', name: "Musée des Beaux-Arts de Rouen", type: "musée", city: "Rouen", region: "Normandie", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'nor-8', name: "Château de Falaise", type: "château", city: "Falaise", region: "Normandie", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'nor-9', name: "Château Gaillard", type: "château", city: "Les Andelys", region: "Normandie", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'nor-10', name: "Abbaye de Jumièges", type: "monument", city: "Jumièges", region: "Normandie", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },
  { id: 'nor-11', name: "Château de Carrouges", type: "château", city: "Carrouges", region: "Normandie", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },

  // ============================================
  // HAUTS-DE-FRANCE
  // ============================================
  { id: 'hdf-1', name: "Musée du Louvre-Lens", type: "musée", city: "Lens", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80" },
  { id: 'hdf-2', name: "LaM Lille", type: "musée", city: "Villeneuve-d'Ascq", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'hdf-3', name: "Palais des Beaux-Arts de Lille", type: "musée", city: "Lille", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'hdf-4', name: "Musée Matisse Le Cateau", type: "musée", city: "Le Cateau-Cambrésis", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'hdf-5', name: "Château de Chantilly", type: "château", city: "Chantilly", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'hdf-6', name: "Château de Pierrefonds", type: "château", city: "Pierrefonds", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'hdf-7', name: "Château de Compiègne", type: "château", city: "Compiègne", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'hdf-8', name: "Cathédrale Notre-Dame d'Amiens", type: "monument", city: "Amiens", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },
  { id: 'hdf-9', name: "Musée de Picardie", type: "musée", city: "Amiens", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },

  // ============================================
  // GRAND EST
  // ============================================
  { id: 'ge-1', name: "Centre Pompidou-Metz", type: "musée", city: "Metz", region: "Grand Est", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'ge-2', name: "Musée Unterlinden", type: "musée", city: "Colmar", region: "Grand Est", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'ge-3', name: "Musée d'Art Moderne de Strasbourg", type: "musée", city: "Strasbourg", region: "Grand Est", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'ge-4', name: "Cathédrale Notre-Dame de Strasbourg", type: "monument", city: "Strasbourg", region: "Grand Est", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },
  { id: 'ge-5', name: "Palais Rohan Strasbourg", type: "musée", city: "Strasbourg", region: "Grand Est", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'ge-6', name: "Cathédrale de Reims", type: "monument", city: "Reims", region: "Grand Est", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'ge-7', name: "Palais du Tau", type: "musée", city: "Reims", region: "Grand Est", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'ge-8', name: "Château du Haut-Koenigsbourg", type: "château", city: "Orschwiller", region: "Grand Est", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'ge-9', name: "Château de Fleckenstein", type: "château", city: "Lembach", region: "Grand Est", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'ge-10', name: "Château de Sedan", type: "château", city: "Sedan", region: "Grand Est", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },

  // ============================================
  // BOURGOGNE-FRANCHE-COMTÉ
  // ============================================
  { id: 'bfc-1', name: "Hospices de Beaune", type: "monument", city: "Beaune", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'bfc-2', name: "Musée des Beaux-Arts de Dijon", type: "musée", city: "Dijon", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'bfc-3', name: "Musée Rolin", type: "musée", city: "Autun", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'bfc-4', name: "Abbaye de Cluny", type: "monument", city: "Cluny", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },
  { id: 'bfc-5', name: "Abbaye de Fontenay", type: "monument", city: "Marmagne", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" },
  { id: 'bfc-6', name: "Basilique de Vézelay", type: "monument", city: "Vézelay", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'bfc-7', name: "Château de Guédelon", type: "château", city: "Treigny", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'bfc-8', name: "Saline Royale Arc-et-Senans", type: "monument", city: "Arc-et-Senans", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 'bfc-9', name: "Citadelle de Besançon", type: "monument", city: "Besançon", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },

  // ============================================
  // CORSE
  // ============================================
  { id: 'cor-1', name: "Musée Fesch", type: "musée", city: "Ajaccio", region: "Corse", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'cor-2', name: "Maison Bonaparte", type: "musée", city: "Ajaccio", region: "Corse", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'cor-3', name: "Citadelle de Bonifacio", type: "monument", city: "Bonifacio", region: "Corse", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'cor-4', name: "Citadelle de Calvi", type: "monument", city: "Calvi", region: "Corse", image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80" },
  { id: 'cor-5', name: "Musée de la Corse", type: "musée", city: "Corte", region: "Corse", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },

  // ============================================
  // CENTRE-VAL DE LOIRE
  // ============================================
  { id: 'cvl-1', name: "Château de Valençay", type: "château", city: "Valençay", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80" },
  { id: 'cvl-2', name: "Maison de George Sand", type: "musée", city: "Nohant-Vic", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'cvl-3', name: "Cathédrale de Chartres", type: "monument", city: "Chartres", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1548104189-5933a71ed0a6?w=800&q=80" },
  { id: 'cvl-4', name: "Cathédrale de Bourges", type: "monument", city: "Bourges", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'cvl-5', name: "Palais Jacques-Coeur", type: "monument", city: "Bourges", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - ÎLE-DE-FRANCE
  // ============================================
  { id: 'idf-26', name: "Musée de la Vie Romantique", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80" },
  { id: 'idf-27', name: "Musée Nissim de Camondo", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80" },
  { id: 'idf-28', name: "Musée de la Chasse et de la Nature", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1584037079828-7c545a9ad6a0?w=800&q=80" },
  { id: 'idf-29', name: "Musée Cognacq-Jay", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'idf-30', name: "Musée Gustave Moreau", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'idf-31', name: "Musée Zadkine", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'idf-32', name: "Musée Bourdelle", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'idf-33', name: "Musée d'Art et d'Histoire du Judaïsme", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'idf-34', name: "Musée de Montmartre", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80" },
  { id: 'idf-35', name: "Musée des Arts Forains", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80" },
  { id: 'idf-36', name: "Musée de la Monnaie de Paris", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1565799557186-1158b1bd9e23?w=800&q=80" },
  { id: 'idf-37', name: "Musée National de la Marine", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'idf-38', name: "Musée de la Mode", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 'idf-39', name: "Musée de la Musique", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80" },
  { id: 'idf-40', name: "Musée National du Moyen Âge", type: "musée", city: "Paris", region: "Île-de-France", image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - PACA
  // ============================================
  { id: 'paca-15', name: "Musée Cantini", type: "musée", city: "Marseille", region: "PACA", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'paca-16', name: "Musée d'Histoire de Marseille", type: "musée", city: "Marseille", region: "PACA", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'paca-17', name: "Musée Regards de Provence", type: "musée", city: "Marseille", region: "PACA", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'paca-18', name: "Musée des Beaux-Arts de Nice", type: "musée", city: "Nice", region: "PACA", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'paca-19', name: "Musée Massena", type: "musée", city: "Nice", region: "PACA", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'paca-20', name: "Musée d'Art Classique de Mougins", type: "musée", city: "Mougins", region: "PACA", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'paca-21', name: "Musée Renoir", type: "musée", city: "Cagnes-sur-Mer", region: "PACA", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80" },
  { id: 'paca-22', name: "Musée de la Préhistoire des Gorges du Verdon", type: "musée", city: "Quinson", region: "PACA", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { id: 'paca-23', name: "Musée Jean Cocteau", type: "musée", city: "Menton", region: "PACA", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { id: 'paca-24', name: "Musée Océanographique de Monaco", type: "musée", city: "Monaco", region: "PACA", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - AUVERGNE-RHÔNE-ALPES
  // ============================================
  { id: 'ara-13', name: "Musée des Tissus", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 'ara-14', name: "Musée Gadagne", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'ara-15', name: "Musée de l'Imprimerie", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80" },
  { id: 'ara-16', name: "Musée des Miniatures et Décors de Cinéma", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" },
  { id: 'ara-17', name: "Musée d'Art Sacré du Gard", type: "musée", city: "Pont-Saint-Esprit", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'ara-18', name: "Musée de la Civilisation Gallo-Romaine", type: "musée", city: "Lyon", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'ara-19', name: "Musée Bargoin", type: "musée", city: "Clermont-Ferrand", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'ara-20', name: "Musée d'Art Roger-Quilliot", type: "musée", city: "Clermont-Ferrand", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'ara-21', name: "Musée Dauphinois", type: "musée", city: "Grenoble", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'ara-22', name: "Musée Savoisien", type: "musée", city: "Chambéry", region: "Auvergne-Rhône-Alpes", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - NOUVELLE-AQUITAINE
  // ============================================
  { id: 'na-15', name: "Musée des Beaux-Arts de Limoges", type: "musée", city: "Limoges", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'na-16', name: "Musée National Adrien Dubouché", type: "musée", city: "Limoges", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'na-17', name: "Musée de la Bande Dessinée", type: "musée", city: "Angoulême", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'na-18', name: "Musée du Papier", type: "musée", city: "Angoulême", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80" },
  { id: 'na-19', name: "Musée des Beaux-Arts de Pau", type: "musée", city: "Pau", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'na-20', name: "Musée Basque", type: "musée", city: "Bayonne", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'na-21', name: "Musée de la Mer", type: "musée", city: "Biarritz", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80" },
  { id: 'na-22', name: "Centre International de la Mer", type: "musée", city: "Rochefort", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'na-23', name: "Musée National de la Préhistoire", type: "musée", city: "Les Eyzies", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { id: 'na-24', name: "Écomusée de la Grande Lande", type: "musée", city: "Sabres", region: "Nouvelle-Aquitaine", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - OCCITANIE
  // ============================================
  { id: 'occ-13', name: "Musée des Beaux-Arts de Toulouse", type: "musée", city: "Toulouse", region: "Occitanie", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'occ-14', name: "Musée Saint-Raymond", type: "musée", city: "Toulouse", region: "Occitanie", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'occ-15', name: "Aeroscopia", type: "musée", city: "Blagnac", region: "Occitanie", image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80" },
  { id: 'occ-16', name: "Musée Ingres Bourdelle", type: "musée", city: "Montauban", region: "Occitanie", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'occ-17', name: "Musée Goya", type: "musée", city: "Castres", region: "Occitanie", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'occ-18', name: "Musée du Jouet", type: "musée", city: "Pézenas", region: "Occitanie", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80" },
  { id: 'occ-19', name: "Musée Atger", type: "musée", city: "Montpellier", region: "Occitanie", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'occ-20', name: "Carré d'Art", type: "musée", city: "Nîmes", region: "Occitanie", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80" },
  { id: 'occ-21', name: "Musée de la Romanité", type: "musée", city: "Nîmes", region: "Occitanie", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'occ-22', name: "Musée des Beaux-Arts de Carcassonne", type: "musée", city: "Carcassonne", region: "Occitanie", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - BRETAGNE
  // ============================================
  { id: 'bre-12', name: "Musée de la Pêche", type: "musée", city: "Concarneau", region: "Bretagne", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80" },
  { id: 'bre-13', name: "Musée Départemental Breton", type: "musée", city: "Quimper", region: "Bretagne", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'bre-14', name: "Musée des Beaux-Arts de Quimper", type: "musée", city: "Quimper", region: "Bretagne", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'bre-15', name: "Musée de la Compagnie des Indes", type: "musée", city: "Port-Louis", region: "Bretagne", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'bre-16', name: "Écomusée du Pays de Rennes", type: "musée", city: "Rennes", region: "Bretagne", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80" },
  { id: 'bre-17', name: "Musée d'Art et d'Histoire de Saint-Brieuc", type: "musée", city: "Saint-Brieuc", region: "Bretagne", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'bre-18', name: "Musée des Phares et Balises", type: "musée", city: "Ouessant", region: "Bretagne", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'bre-19', name: "Musée du Loup", type: "musée", city: "Le Cloître-Saint-Thégonnec", region: "Bretagne", image: "https://images.unsplash.com/photo-1584037079828-7c545a9ad6a0?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - PAYS DE LA LOIRE
  // ============================================
  { id: 'pdl-17', name: "Musée Jules Verne", type: "musée", city: "Nantes", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80" },
  { id: 'pdl-18', name: "Musée Dobrée", type: "musée", city: "Nantes", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'pdl-19', name: "Musée Jean Lurçat", type: "musée", city: "Angers", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'pdl-20', name: "Musée des Beaux-Arts d'Angers", type: "musée", city: "Angers", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'pdl-21', name: "Musée de l'Automobile du Mans", type: "musée", city: "Le Mans", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
  { id: 'pdl-22', name: "Carré Plantagenêt", type: "musée", city: "Le Mans", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'pdl-23', name: "Musée de la Vigne et du Vin d'Anjou", type: "musée", city: "Saint-Lambert-du-Lattay", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80" },
  { id: 'pdl-24', name: "Musée des 24 Heures du Mans", type: "musée", city: "Le Mans", region: "Pays de la Loire", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - NORMANDIE
  // ============================================
  { id: 'nor-12', name: "Musée d'Art Moderne André Malraux", type: "musée", city: "Le Havre", region: "Normandie", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'nor-13', name: "Musée Eugène Boudin", type: "musée", city: "Honfleur", region: "Normandie", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'nor-14', name: "Musée Christian Dior", type: "musée", city: "Granville", region: "Normandie", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 'nor-15', name: "Musée Le Secq des Tournelles", type: "musée", city: "Rouen", region: "Normandie", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'nor-16', name: "Musée de Normandie", type: "musée", city: "Caen", region: "Normandie", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'nor-17', name: "Musée des Beaux-Arts de Caen", type: "musée", city: "Caen", region: "Normandie", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'nor-18', name: "Airborne Museum", type: "musée", city: "Sainte-Mère-Église", region: "Normandie", image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80" },
  { id: 'nor-19', name: "Musée du Débarquement", type: "musée", city: "Arromanches", region: "Normandie", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - HAUTS-DE-FRANCE
  // ============================================
  { id: 'hdf-10', name: "Musée de la Grande Guerre", type: "musée", city: "Meaux", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 'hdf-11', name: "Musée de l'Hôtel Sandelin", type: "musée", city: "Saint-Omer", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'hdf-12', name: "Musée des Beaux-Arts de Valenciennes", type: "musée", city: "Valenciennes", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'hdf-13', name: "Musée de la Dentelle", type: "musée", city: "Calais", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 'hdf-14', name: "Musée des Beaux-Arts de Dunkerque", type: "musée", city: "Dunkerque", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'hdf-15', name: "Musée Henri-Martin", type: "musée", city: "Cahors", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'hdf-16', name: "Musée Condé", type: "musée", city: "Chantilly", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&q=80" },
  { id: 'hdf-17', name: "Historial de la Grande Guerre", type: "musée", city: "Péronne", region: "Hauts-de-France", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - GRAND EST
  // ============================================
  { id: 'ge-11', name: "Musée des Beaux-Arts de Nancy", type: "musée", city: "Nancy", region: "Grand Est", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'ge-12', name: "Musée de l'École de Nancy", type: "musée", city: "Nancy", region: "Grand Est", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'ge-13', name: "Musée Lorrain", type: "musée", city: "Nancy", region: "Grand Est", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'ge-14', name: "Musée de la Cour d'Or", type: "musée", city: "Metz", region: "Grand Est", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'ge-15', name: "Musée Tomi Ungerer", type: "musée", city: "Strasbourg", region: "Grand Est", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'ge-16', name: "Musée Alsacien", type: "musée", city: "Strasbourg", region: "Grand Est", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80" },
  { id: 'ge-17', name: "Musée Bartholdi", type: "musée", city: "Colmar", region: "Grand Est", image: "https://images.unsplash.com/photo-1565799557186-1158b1bd9e23?w=800&q=80" },
  { id: 'ge-18', name: "Cité de l'Automobile", type: "musée", city: "Mulhouse", region: "Grand Est", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - BOURGOGNE-FRANCHE-COMTÉ
  // ============================================
  { id: 'bfc-10', name: "Musée du Temps", type: "musée", city: "Besançon", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1565799557186-1158b1bd9e23?w=800&q=80" },
  { id: 'bfc-11', name: "Musée des Beaux-Arts et d'Archéologie", type: "musée", city: "Besançon", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'bfc-12', name: "Musée Nicéphore Niépce", type: "musée", city: "Chalon-sur-Saône", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'bfc-13', name: "Musée du Château de Dijon", type: "musée", city: "Dijon", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
  { id: 'bfc-14', name: "Musée de la Vie Bourguignonne", type: "musée", city: "Dijon", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80" },
  { id: 'bfc-15', name: "Musée du Jouet", type: "musée", city: "Moirans-en-Montagne", region: "Bourgogne-Franche-Comté", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - CORSE
  // ============================================
  { id: 'cor-6', name: "Musée de Bastia", type: "musée", city: "Bastia", region: "Corse", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'cor-7', name: "Musée d'Archéologie d'Aléria", type: "musée", city: "Aléria", region: "Corse", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80" },
  { id: 'cor-8', name: "Musée de l'Alta Rocca", type: "musée", city: "Levie", region: "Corse", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'cor-9', name: "Musée Pascal Paoli", type: "musée", city: "Morosaglia", region: "Corse", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },

  // ============================================
  // MUSÉES SUPPLÉMENTAIRES - CENTRE-VAL DE LOIRE
  // ============================================
  { id: 'cvl-6', name: "Musée des Beaux-Arts de Tours", type: "musée", city: "Tours", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80" },
  { id: 'cvl-7', name: "Musée des Beaux-Arts d'Orléans", type: "musée", city: "Orléans", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80" },
  { id: 'cvl-8', name: "Musée de la Chasse", type: "musée", city: "Gien", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1584037079828-7c545a9ad6a0?w=800&q=80" },
  { id: 'cvl-9', name: "Musée de la Faïence", type: "musée", city: "Gien", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 'cvl-10', name: "Musée du Compagnonnage", type: "musée", city: "Tours", region: "Centre-Val de Loire", image: "https://images.unsplash.com/photo-1568313379493-7de7c6c3b6a6?w=800&q=80" },
];

// Liste des régions de France pour le filtrage
export const frenchRegions = [
  "Île-de-France",
  "PACA",
  "Auvergne-Rhône-Alpes",
  "Nouvelle-Aquitaine",
  "Occitanie",
  "Bretagne",
  "Pays de la Loire",
  "Normandie",
  "Hauts-de-France",
  "Grand Est",
  "Bourgogne-Franche-Comté",
  "Corse",
  "Centre-Val de Loire"
];

// Types de lieux
export const placeTypes = ["musée", "château", "monument"];

export default frenchMuseums;
