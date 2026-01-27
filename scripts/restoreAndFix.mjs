#!/usr/bin/env node
/**
 * Restaure les données originales (1185 vrais lieux) et :
 * 1. Supprime le type "monument" (convertit en église si c'est un édifice religieux, sinon supprime)
 * 2. Ajoute de vraies églises/cathédrales françaises
 * 3. Ne garde QUE : musée, château, exposition, église
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, '..', 'src', 'data', 'places.js');

// ══════════════════════════════════════════════════════════
// Vraies églises et cathédrales françaises
// Coordonnées GPS réelles, noms réels
// ══════════════════════════════════════════════════════════
const realEglises = [
  // Cathédrales majeures
  { name: "Cathédrale Notre-Dame de Paris", location: "Paris, Île-de-France", lat: 48.8530, lng: 2.3499, description: "Chef-d'œuvre de l'art gothique, cathédrale emblématique de Paris, en cours de restauration après l'incendie de 2019.", period: "XIIe - XIVe siècle", highlights: ["Rosaces", "Gargouilles", "Flèche restaurée"], rating: 4.9, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Chartres", location: "Chartres, Centre-Val de Loire", lat: 48.4477, lng: 1.4879, description: "Joyau de l'art gothique, célèbre pour ses vitraux du XIIIe siècle parmi les mieux conservés au monde.", period: "XIIe - XIIIe siècle", highlights: ["Vitraux médiévaux", "Portail Royal", "Labyrinthe"], rating: 4.8, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Reims", location: "Reims, Grand Est", lat: 49.2539, lng: 3.9742, description: "Cathédrale du sacre des rois de France, chef-d'œuvre du gothique classique avec plus de 2300 statues.", period: "XIIIe siècle", highlights: ["Ange au Sourire", "Vitraux de Chagall", "Façade sculptée"], rating: 4.8, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame d'Amiens", location: "Amiens, Hauts-de-France", lat: 49.8950, lng: 2.3022, description: "La plus vaste cathédrale de France par son volume intérieur, inscrite au patrimoine mondial de l'UNESCO.", period: "XIIIe siècle", highlights: ["Nef monumentale", "Stalles en bois", "Spectacle de lumière"], rating: 4.7, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Strasbourg", location: "Strasbourg, Grand Est", lat: 48.5818, lng: 7.7510, description: "Cathédrale en grès rose, plus haut édifice du monde de 1647 à 1874, avec son horloge astronomique.", period: "XIIe - XVe siècle", highlights: ["Horloge astronomique", "Pilier des Anges", "Flèche de 142m"], rating: 4.8, price: "Gratuit" },
  { name: "Cathédrale Saint-Étienne de Bourges", location: "Bourges, Centre-Val de Loire", lat: 47.0822, lng: 2.3984, description: "Cathédrale gothique unique par ses proportions et ses cinq portails, classée au patrimoine mondial.", period: "XIIe - XIIIe siècle", highlights: ["Cinq portails", "Vitraux XIIIe", "Crypte"], rating: 4.6, price: "Gratuit" },
  { name: "Cathédrale Saint-Étienne de Metz", location: "Metz, Grand Est", lat: 49.1198, lng: 6.1756, description: "Surnommée la 'Lanterne du Bon Dieu' pour ses 6500 m² de vitraux, les plus grands de France.", period: "XIIIe - XVIe siècle", highlights: ["6500 m² de vitraux", "Vitraux de Chagall", "Nef de 41m"], rating: 4.7, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Rouen", location: "Rouen, Normandie", lat: 49.4401, lng: 1.0941, description: "Cathédrale gothique peinte par Monet, avec la plus haute flèche de France en fonte (151m).", period: "XIIe - XVIe siècle", highlights: ["Tour de Beurre", "Flèche de 151m", "Portail des Libraires"], rating: 4.6, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre de Beauvais", location: "Beauvais, Hauts-de-France", lat: 49.4314, lng: 2.0812, description: "Possède le chœur gothique le plus haut du monde (48,50 m), témoignage d'une ambition démesurée.", period: "XIIIe siècle", highlights: ["Chœur de 48,5m", "Horloge astronomique", "Vitraux"], rating: 4.4, price: "Gratuit" },
  { name: "Cathédrale Saint-Gatien de Tours", location: "Tours, Centre-Val de Loire", lat: 47.3966, lng: 0.6946, description: "Cathédrale illustrant l'évolution du gothique du XIIIe au XVIe siècle avec de remarquables vitraux.", period: "XIIIe - XVIe siècle", highlights: ["Vitraux Renaissance", "Cloître de la Psalette", "Façade flamboyante"], rating: 4.5, price: "Gratuit" },
  // Île-de-France
  { name: "Basilique Saint-Denis", location: "Saint-Denis, Île-de-France", lat: 48.9355, lng: 2.3592, description: "Nécropole des rois de France, berceau de l'art gothique, abrite les tombeaux royaux.", period: "XIIe siècle", highlights: ["Tombeaux royaux", "Premier art gothique", "Vitraux"], rating: 4.6, price: "9.50€" },
  { name: "Sainte-Chapelle", location: "Paris, Île-de-France", lat: 48.8554, lng: 2.3451, description: "Joyau du gothique rayonnant construit par Saint Louis pour abriter les reliques de la Passion.", period: "XIIIe siècle", highlights: ["1113 vitraux", "Rosace", "Voûte étoilée"], rating: 4.8, price: "11.50€" },
  { name: "Église Saint-Eustache", location: "Paris, Île-de-France", lat: 48.8630, lng: 2.3459, description: "L'une des plus grandes églises de Paris, mêlant styles gothique et Renaissance.", period: "XVIe - XVIIe siècle", highlights: ["Grand orgue", "Architecture Renaissance", "Chapelle de la Vierge"], rating: 4.5, price: "Gratuit" },
  { name: "Église de la Madeleine", location: "Paris, Île-de-France", lat: 48.8700, lng: 2.3243, description: "Église néoclassique inspirée d'un temple grec, avec ses 52 colonnes corinthiennes.", period: "XIXe siècle", highlights: ["52 colonnes corinthiennes", "Fronton sculpté", "Orgue Cavaillé-Coll"], rating: 4.4, price: "Gratuit" },
  { name: "Basilique du Sacré-Cœur", location: "Paris, Île-de-France", lat: 48.8867, lng: 2.3431, description: "Basilique romano-byzantine au sommet de Montmartre, offrant un panorama exceptionnel sur Paris.", period: "XIXe - XXe siècle", highlights: ["Mosaïque de l'abside", "Vue panoramique", "Campanile"], rating: 4.7, price: "Gratuit" },
  { name: "Église Saint-Sulpice", location: "Paris, Île-de-France", lat: 48.8510, lng: 2.3348, description: "Deuxième plus grande église de Paris, célèbre pour ses fresques de Delacroix et son gnomon.", period: "XVIIe - XVIIIe siècle", highlights: ["Fresques de Delacroix", "Gnomon", "Orgue Cavaillé-Coll"], rating: 4.5, price: "Gratuit" },
  { name: "Église Saint-Germain-des-Prés", location: "Paris, Île-de-France", lat: 48.8541, lng: 2.3339, description: "La plus ancienne église de Paris, fondée au VIe siècle, cœur du quartier littéraire.", period: "VIe - XIIe siècle", highlights: ["Clocher roman", "Chapiteaux mérovingiens", "Fresques XIXe"], rating: 4.4, price: "Gratuit" },
  // Normandie
  { name: "Abbaye du Mont-Saint-Michel", location: "Le Mont-Saint-Michel, Normandie", lat: 48.6361, lng: -1.5115, description: "Abbaye médiévale perchée sur un îlot rocheux, merveille de l'Occident, patrimoine mondial UNESCO.", period: "Xe - XVIe siècle", highlights: ["Cloître", "Merveille gothique", "Marées spectaculaires"], rating: 4.9, price: "11€" },
  { name: "Abbaye de Jumièges", location: "Jumièges, Normandie", lat: 49.4314, lng: 0.8186, description: "Ruines majestueuses surnommées 'la plus belle ruine de France' par Victor Hugo.", period: "VIIe - XIe siècle", highlights: ["Ruines romantiques", "Nef à ciel ouvert", "Parc"], rating: 4.5, price: "7.50€" },
  { name: "Abbaye aux Hommes", location: "Caen, Normandie", lat: 49.1826, lng: -0.3765, description: "Abbaye fondée par Guillaume le Conquérant, chef-d'œuvre de l'art roman normand.", period: "XIe siècle", highlights: ["Tombeau de Guillaume", "Architecture romane", "Cloîtres"], rating: 4.5, price: "Gratuit" },
  { name: "Abbaye aux Dames", location: "Caen, Normandie", lat: 49.1880, lng: -0.3593, description: "Abbaye fondée par la reine Mathilde, épouse de Guillaume le Conquérant.", period: "XIe siècle", highlights: ["Église de la Trinité", "Crypte", "Architecture romane"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Bayeux", location: "Bayeux, Normandie", lat: 49.2764, lng: -0.7030, description: "Cathédrale gothique normande où fut exposée la célèbre Tapisserie de Bayeux.", period: "XIe - XVe siècle", highlights: ["Crypte romane", "Tours gothiques", "Chapitre"], rating: 4.4, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Coutances", location: "Coutances, Normandie", lat: 49.0472, lng: -1.4429, description: "Considérée comme l'une des plus belles cathédrales gothiques de Normandie.", period: "XIIIe siècle", highlights: ["Tour-lanterne octogonale", "Vitraux", "Proportions harmonieuses"], rating: 4.5, price: "Gratuit" },
  // Bretagne
  { name: "Cathédrale Saint-Corentin de Quimper", location: "Quimper, Bretagne", lat: 47.9953, lng: -4.1024, description: "Cathédrale gothique aux flèches jumelles, symbole de la ville de Quimper.", period: "XIIIe - XVe siècle", highlights: ["Flèches jumelles", "Vitraux XVe", "Axe dévié du chœur"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre de Vannes", location: "Vannes, Bretagne", lat: 47.6553, lng: -2.7586, description: "Cathédrale mêlant styles roman, gothique et Renaissance au cœur de Vannes.", period: "XIIIe - XIXe siècle", highlights: ["Chapelle du Saint-Sacrement", "Trésor", "Cloître"], rating: 4.2, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre de Rennes", location: "Rennes, Bretagne", lat: 48.1116, lng: -1.6816, description: "Cathédrale néoclassique à la façade imposante, reconstruite au XIXe siècle.", period: "XIXe siècle", highlights: ["Façade néoclassique", "Retable flamand", "Voûtes peintes"], rating: 4.2, price: "Gratuit" },
  { name: "Abbaye de Beauport", location: "Paimpol, Bretagne", lat: 48.7686, lng: -3.0134, description: "Abbaye maritime en ruines au bord de la mer, lieu magique et poétique.", period: "XIIIe siècle", highlights: ["Cadre maritime", "Salle capitulaire", "Verger conservatoire"], rating: 4.4, price: "7€" },
  // Pays de la Loire
  { name: "Abbaye de Fontevraud", location: "Fontevraud-l'Abbaye, Pays de la Loire", lat: 47.1817, lng: 0.0517, description: "La plus grande cité monastique d'Europe, nécropole des Plantagenêts.", period: "XIIe siècle", highlights: ["Gisants Plantagenêts", "Cuisines romanes", "Cloîtres"], rating: 4.7, price: "13€" },
  { name: "Cathédrale Saint-Maurice d'Angers", location: "Angers, Pays de la Loire", lat: 47.4706, lng: -0.5538, description: "Cathédrale angevine remarquable pour ses voûtes bombées caractéristiques du gothique Plantagenêt.", period: "XIIe - XIIIe siècle", highlights: ["Voûtes Plantagenêt", "Vitraux", "Façade XIIe"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre-et-Saint-Paul de Nantes", location: "Nantes, Pays de la Loire", lat: 47.2181, lng: -1.5516, description: "Cathédrale gothique en tuffeau blanc abritant le tombeau de François II de Bretagne.", period: "XVe - XIXe siècle", highlights: ["Tombeau de François II", "Voûtes de 37m", "Crypte romane"], rating: 4.4, price: "Gratuit" },
  { name: "Cathédrale Saint-Julien du Mans", location: "Le Mans, Pays de la Loire", lat: 48.0085, lng: 0.1994, description: "Remarquable par son chevet gothique et sa nef romane, aux dimensions imposantes.", period: "XIe - XVe siècle", highlights: ["Chevet gothique", "Vitraux XIIIe", "Double nef"], rating: 4.4, price: "Gratuit" },
  // Centre-Val de Loire
  { name: "Cathédrale Sainte-Croix d'Orléans", location: "Orléans, Centre-Val de Loire", lat: 47.9020, lng: 1.9098, description: "Cathédrale gothique reconstruite du XVIIe au XIXe siècle après les guerres de Religion.", period: "XVIIe - XIXe siècle", highlights: ["Vitraux modernes", "Boiseries", "Chapelle Jeanne d'Arc"], rating: 4.3, price: "Gratuit" },
  { name: "Abbaye de Noirlac", location: "Bruère-Allichamps, Centre-Val de Loire", lat: 46.7531, lng: 2.4106, description: "L'une des abbayes cisterciennes les mieux conservées de France.", period: "XIIe - XIIIe siècle", highlights: ["Architecture cistercienne pure", "Cloître", "Jardins sonores"], rating: 4.5, price: "8€" },
  // Bourgogne-Franche-Comté
  { name: "Basilique de Vézelay", location: "Vézelay, Bourgogne-Franche-Comté", lat: 47.4662, lng: 3.7479, description: "Chef-d'œuvre de l'art roman bourguignon, point de départ du pèlerinage de Compostelle.", period: "XIIe siècle", highlights: ["Tympan roman", "Chapiteaux historiés", "Lumière solsticiale"], rating: 4.8, price: "Gratuit" },
  { name: "Abbaye de Cîteaux", location: "Saint-Nicolas-lès-Cîteaux, Bourgogne-Franche-Comté", lat: 47.1322, lng: 5.0808, description: "Berceau de l'ordre cistercien fondé en 1098, abbaye toujours en activité.", period: "XIe siècle", highlights: ["Bibliothèque", "Fromage de Cîteaux", "Histoire cistercienne"], rating: 4.3, price: "8€" },
  { name: "Cathédrale Saint-Lazare d'Autun", location: "Autun, Bourgogne-Franche-Comté", lat: 46.9465, lng: 4.2989, description: "Cathédrale romane célèbre pour les sculptures de Gislebertus, dont le Jugement Dernier.", period: "XIIe siècle", highlights: ["Tympan du Jugement Dernier", "Chapiteaux de Gislebertus", "Salle capitulaire"], rating: 4.5, price: "Gratuit" },
  { name: "Abbaye de Fontenay", location: "Marmagne, Bourgogne-Franche-Comté", lat: 47.6387, lng: 4.3892, description: "La plus ancienne abbaye cistercienne conservée, classée au patrimoine mondial UNESCO.", period: "XIIe siècle", highlights: ["Cloître cistercien", "Forge", "Jardins"], rating: 4.6, price: "11€" },
  { name: "Cathédrale Saint-Bénigne de Dijon", location: "Dijon, Bourgogne-Franche-Comté", lat: 47.3216, lng: 5.0340, description: "Cathédrale gothique avec sa crypte romane remarquable, ancien sanctuaire de saint Bénigne.", period: "XIIIe siècle", highlights: ["Crypte romane", "Rotonde", "Toiture bourguignonne"], rating: 4.3, price: "Gratuit" },
  // Grand Est
  { name: "Cathédrale Saint-Étienne de Toul", location: "Toul, Grand Est", lat: 48.6753, lng: 5.8938, description: "Cathédrale gothique flamboyant avec une façade occidentale remarquable.", period: "XIIIe - XVe siècle", highlights: ["Façade flamboyante", "Cloître gothique", "Vitraux"], rating: 4.3, price: "Gratuit" },
  { name: "Basilique Saint-Rémi de Reims", location: "Reims, Grand Est", lat: 49.2444, lng: 3.9633, description: "Ancienne abbatiale romane et gothique abritant le tombeau de saint Rémi, patrimoine UNESCO.", period: "XIe - XIIe siècle", highlights: ["Tombeau de saint Rémi", "Nef romane", "Vitraux XIIe"], rating: 4.5, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Laon", location: "Laon, Hauts-de-France", lat: 49.5636, lng: 3.6242, description: "L'une des premières grandes cathédrales gothiques, perchée sur sa butte.", period: "XIIe siècle", highlights: ["Tours avec bœufs sculptés", "Vitraux XIIIe", "Position dominante"], rating: 4.5, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Senlis", location: "Senlis, Hauts-de-France", lat: 49.2069, lng: 2.5865, description: "Cathédrale gothique pionnière, avec le premier portail consacré au couronnement de la Vierge.", period: "XIIe siècle", highlights: ["Portail du Couronnement", "Flèche XIIIe", "Vieille ville"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Noyon", location: "Noyon, Hauts-de-France", lat: 49.5806, lng: 3.0000, description: "L'une des premières cathédrales gothiques de France avec des éléments romans.", period: "XIIe siècle", highlights: ["Transition roman-gothique", "Cloître", "Bibliothèque du chapitre"], rating: 4.2, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Soissons", location: "Soissons, Hauts-de-France", lat: 49.3815, lng: 3.3238, description: "Cathédrale gothique pure, remarquable par l'élégance de son bras sud du transept.", period: "XIIe - XIIIe siècle", highlights: ["Bras sud du transept", "Vitraux", "Sobriété gothique"], rating: 4.2, price: "Gratuit" },
  // Auvergne-Rhône-Alpes
  { name: "Basilique Notre-Dame de Fourvière", location: "Lyon, Auvergne-Rhône-Alpes", lat: 45.7623, lng: 4.8225, description: "Basilique néo-byzantine dominant Lyon, décorée de mosaïques somptueuses.", period: "XIXe siècle", highlights: ["Mosaïques", "Vue sur Lyon", "Crypte Saint-Joseph"], rating: 4.7, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame du Puy-en-Velay", location: "Le Puy-en-Velay, Auvergne-Rhône-Alpes", lat: 45.0445, lng: 3.8849, description: "Cathédrale romane unique, point de départ du Chemin de Saint-Jacques, avec sa Vierge Noire.", period: "XIe - XIIe siècle", highlights: ["Vierge Noire", "Cloître roman", "Pierre des fièvres"], rating: 4.6, price: "Gratuit" },
  { name: "Abbaye de Cluny", location: "Cluny, Bourgogne-Franche-Comté", lat: 46.4345, lng: 4.6596, description: "Vestiges de la plus grande église de la chrétienté jusqu'à la construction de Saint-Pierre de Rome.", period: "Xe - XIIe siècle", highlights: ["Farinier", "Chapiteaux romans", "Modèle numérique 3D"], rating: 4.5, price: "11€" },
  { name: "Cathédrale Saint-Jean de Lyon", location: "Lyon, Auvergne-Rhône-Alpes", lat: 45.7601, lng: 4.8268, description: "Primatiale des Gaules, cathédrale mêlant roman et gothique dans le Vieux Lyon.", period: "XIIe - XVe siècle", highlights: ["Horloge astronomique", "Vitraux", "Vieux Lyon"], rating: 4.5, price: "Gratuit" },
  { name: "Abbaye de Tournus", location: "Tournus, Bourgogne-Franche-Comté", lat: 46.5654, lng: 4.9082, description: "Abbatiale romane remarquable par sa nef aux voûtes en berceau transversal, unique en Europe.", period: "Xe - XIIe siècle", highlights: ["Voûtes en berceau transversal", "Crypte", "Narthex"], rating: 4.4, price: "Gratuit" },
  // Occitanie
  { name: "Basilique Saint-Sernin de Toulouse", location: "Toulouse, Occitanie", lat: 43.6083, lng: 1.4419, description: "La plus grande église romane conservée d'Europe, étape du pèlerinage de Compostelle.", period: "XIe - XIIe siècle", highlights: ["Clocher octogonal", "Porte Miègeville", "Crypte des Corps Saints"], rating: 4.6, price: "Gratuit" },
  { name: "Cathédrale Sainte-Cécile d'Albi", location: "Albi, Occitanie", lat: 43.9279, lng: 2.1440, description: "Plus grande cathédrale de brique au monde, forteresse imposante avec un intérieur peint remarquable.", period: "XIIIe - XVe siècle", highlights: ["Peintures murales", "Jubé flamboyant", "Orgue du XVIIIe"], rating: 4.8, price: "Gratuit" },
  { name: "Cathédrale Saint-Just-et-Saint-Pasteur de Narbonne", location: "Narbonne, Occitanie", lat: 43.1847, lng: 3.0033, description: "Cathédrale inachevée possédant le troisième plus haut chœur gothique de France.", period: "XIIIe siècle", highlights: ["Chœur de 41m", "Trésor", "Cloître"], rating: 4.3, price: "Gratuit" },
  { name: "Abbaye de Conques", location: "Conques, Occitanie", lat: 44.5988, lng: 2.3990, description: "Abbatiale romane abritant le trésor de Sainte-Foy et un célèbre tympan du Jugement Dernier.", period: "XIe - XIIe siècle", highlights: ["Tympan du Jugement Dernier", "Trésor de Sainte-Foy", "Vitraux de Soulages"], rating: 4.7, price: "Gratuit" },
  { name: "Abbaye de Moissac", location: "Moissac, Occitanie", lat: 44.1048, lng: 1.0852, description: "Abbaye célèbre pour son cloître roman, l'un des plus beaux au monde, et son portail sculpté.", period: "XIe - XIIe siècle", highlights: ["Cloître roman", "Tympan de l'Apocalypse", "Chapiteaux historiés"], rating: 4.6, price: "7.50€" },
  { name: "Cathédrale Saint-Étienne de Toulouse", location: "Toulouse, Occitanie", lat: 43.5995, lng: 1.4503, description: "Cathédrale atypique mêlant gothique méridional et gothique du Nord, fruit de deux projets différents.", period: "XIIIe - XVIIe siècle", highlights: ["Nef unique", "Rosace", "Mélange de styles"], rating: 4.2, price: "Gratuit" },
  { name: "Abbaye de Saint-Guilhem-le-Désert", location: "Saint-Guilhem-le-Désert, Occitanie", lat: 43.7345, lng: 3.5485, description: "Abbaye fondée en 804, nichée dans les gorges de l'Hérault, sur le chemin de Saint-Jacques.", period: "IXe - XIIe siècle", highlights: ["Cloître", "Village médiéval", "Gorges de l'Hérault"], rating: 4.6, price: "Gratuit" },
  // Nouvelle-Aquitaine
  { name: "Cathédrale Saint-André de Bordeaux", location: "Bordeaux, Nouvelle-Aquitaine", lat: 44.8378, lng: -0.5762, description: "Cathédrale gothique où furent célébrés les mariages royaux, patrimoine mondial UNESCO.", period: "XIe - XVe siècle", highlights: ["Porte Royale", "Tour Pey-Berland", "Sculptures du portail"], rating: 4.4, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre d'Angoulême", location: "Angoulême, Nouvelle-Aquitaine", lat: 45.6487, lng: 0.1512, description: "Cathédrale romane remarquable pour sa façade sculptée de plus de 70 personnages.", period: "XIIe siècle", highlights: ["Façade sculptée", "Coupoles romanes", "Ascension sculptée"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Saint-Front de Périgueux", location: "Périgueux, Nouvelle-Aquitaine", lat: 45.1844, lng: 0.7217, description: "Cathédrale à coupoles inspirée de Saint-Marc de Venise, restaurée par Abadie.", period: "XIIe siècle", highlights: ["Coupoles byzantines", "Retable baroque", "Clocher roman"], rating: 4.4, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre de Poitiers", location: "Poitiers, Nouvelle-Aquitaine", lat: 46.5794, lng: 0.3486, description: "Cathédrale gothique Plantagenêt avec une façade romane et des vitraux exceptionnels.", period: "XIIe - XIIIe siècle", highlights: ["Vitraux XIIe", "Orgue Clicquot", "Stalles XIIIe"], rating: 4.3, price: "Gratuit" },
  { name: "Église Notre-Dame la Grande de Poitiers", location: "Poitiers, Nouvelle-Aquitaine", lat: 46.5833, lng: 0.3458, description: "Chef-d'œuvre de l'art roman poitevin avec sa façade sculptée polychrome.", period: "XIe - XIIe siècle", highlights: ["Façade sculptée", "Peintures murales", "Polychromie nocturne"], rating: 4.6, price: "Gratuit" },
  { name: "Abbaye de Saint-Savin-sur-Gartempe", location: "Saint-Savin, Nouvelle-Aquitaine", lat: 46.5669, lng: 0.8656, description: "Surnommée la 'Sixtine de l'art roman' pour ses peintures murales exceptionnelles, UNESCO.", period: "XIe siècle", highlights: ["Peintures murales romanes", "Voûte peinte", "Crypte"], rating: 4.6, price: "8€" },
  // Provence-Alpes-Côte d'Azur
  { name: "Abbaye de Sénanque", location: "Gordes, Provence-Alpes-Côte d'Azur", lat: 43.9276, lng: 5.1865, description: "Abbaye cistercienne entourée de champs de lavande, l'une des images les plus iconiques de Provence.", period: "XIIe siècle", highlights: ["Champs de lavande", "Architecture cistercienne", "Dortoir des moines"], rating: 4.7, price: "8.50€" },
  { name: "Abbaye du Thoronet", location: "Le Thoronet, Provence-Alpes-Côte d'Azur", lat: 43.4611, lng: 6.2636, description: "L'une des trois sœurs cisterciennes de Provence, chef-d'œuvre de pureté architecturale.", period: "XIIe siècle", highlights: ["Acoustique exceptionnelle", "Cloître", "Pureté cistercienne"], rating: 4.5, price: "8€" },
  { name: "Abbaye de Silvacane", location: "La Roque-d'Anthéron, Provence-Alpes-Côte d'Azur", lat: 43.7214, lng: 5.3431, description: "La troisième sœur cistercienne de Provence, sobre et élégante au bord de la Durance.", period: "XIIe siècle", highlights: ["Réfectoire", "Salle capitulaire", "Architecture sobre"], rating: 4.3, price: "6€" },
  { name: "Cathédrale Notre-Dame des Doms d'Avignon", location: "Avignon, Provence-Alpes-Côte d'Azur", lat: 43.9514, lng: 4.8064, description: "Cathédrale romane surplombant le Palais des Papes, couronnée d'une Vierge dorée.", period: "XIIe siècle", highlights: ["Vierge dorée", "Vue sur Avignon", "Tombeau de Jean XXII"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale de la Major", location: "Marseille, Provence-Alpes-Côte d'Azur", lat: 43.2997, lng: 5.3651, description: "Imposante cathédrale néo-byzantine sur le Vieux-Port, l'une des plus grandes de France.", period: "XIXe siècle", highlights: ["Style néo-byzantin", "Mosaïques", "Vue sur le port"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Nice", location: "Nice, Provence-Alpes-Côte d'Azur", lat: 43.6990, lng: 7.2729, description: "Cathédrale baroque au cœur du vieux Nice, avec sa façade et ses chapelles latérales.", period: "XVIIe siècle", highlights: ["Style baroque", "Rosace", "Vieux Nice"], rating: 4.1, price: "Gratuit" },
  // Corse
  { name: "Cathédrale Santa Maria Assunta d'Ajaccio", location: "Ajaccio, Corse", lat: 41.9195, lng: 8.7369, description: "Cathédrale où fut baptisé Napoléon Bonaparte en 1771.", period: "XVIe siècle", highlights: ["Baptistère de Napoléon", "Vierge du Sacré-Cœur de Delacroix", "Style baroque"], rating: 4.2, price: "Gratuit" },
  { name: "Église San Michele de Murato", location: "Murato, Corse", lat: 42.5472, lng: 9.3236, description: "Chef-d'œuvre de l'art roman pisan en Corse, avec ses pierres bicolores caractéristiques.", period: "XIIe siècle", highlights: ["Pierres bicolores", "Sculptures romanes", "Cadre rural"], rating: 4.4, price: "Gratuit" },
  // Hauts-de-France
  { name: "Cathédrale Notre-Dame de Lille", location: "Lille, Hauts-de-France", lat: 48.8439, lng: 2.3560, description: "Basilique-cathédrale de style néo-gothique, la plus récente des cathédrales françaises.", period: "XXe siècle", highlights: ["Art contemporain", "Architecture néo-gothique", "Vitraux modernes"], rating: 4.2, price: "Gratuit" },
  { name: "Abbaye de Valloires", location: "Argoules, Hauts-de-France", lat: 50.3250, lng: 1.8333, description: "Abbaye cistercienne avec des jardins remarquables et un décor baroque exceptionnel.", period: "XIIe - XVIIIe siècle", highlights: ["Jardins de Valloires", "Décor baroque", "Boiseries"], rating: 4.4, price: "10€" },
  // Outre-mer
  { name: "Cathédrale Notre-Dame de Guadeloupe", location: "Basse-Terre, Guadeloupe", lat: 15.9979, lng: -61.7259, description: "Cathédrale classée monument historique, reconstruite après tremblements de terre et ouragans.", period: "XIXe siècle", highlights: ["Architecture créole", "Charpente métallique", "Vitraux tropicaux"], rating: 4.0, price: "Gratuit" },
  { name: "Cathédrale Saint-Louis de Fort-de-France", location: "Fort-de-France, Martinique", lat: 14.6061, lng: -61.0667, description: "Cathédrale en structure métallique conçue par Henry Picq, résistante aux séismes et cyclones.", period: "XIXe siècle", highlights: ["Structure métallique", "Vitraux", "Architecture anti-sismique"], rating: 4.1, price: "Gratuit" },
  // Sud-Ouest
  { name: "Cathédrale Saint-Pierre de Condom", location: "Condom, Occitanie", lat: 43.9591, lng: 0.3722, description: "Ancienne cathédrale gothique avec un remarquable cloître flamboyant.", period: "XVIe siècle", highlights: ["Cloître flamboyant", "Voûtes d'ogives", "Chapelles latérales"], rating: 4.1, price: "Gratuit" },
  { name: "Cathédrale Sainte-Marie d'Auch", location: "Auch, Occitanie", lat: 43.6460, lng: 0.5860, description: "Cathédrale Renaissance aux vitraux d'Arnaut de Moles et stalles en bois sculptées.", period: "XVe - XVIIe siècle", highlights: ["Vitraux Renaissance", "Stalles sculptées", "Orgue Jean de Joyeuse"], rating: 4.4, price: "Gratuit" },
  { name: "Cathédrale Saint-Étienne de Cahors", location: "Cahors, Occitanie", lat: 44.4476, lng: 1.4400, description: "Cathédrale romane à coupoles, avec un portail nord remarquable.", period: "XIIe siècle", highlights: ["Coupoles romanes", "Portail nord sculpté", "Cloître gothique"], rating: 4.3, price: "Gratuit" },
  { name: "Basilique Saint-Michel de Bordeaux", location: "Bordeaux, Nouvelle-Aquitaine", lat: 44.8333, lng: -0.5667, description: "Basilique gothique flamboyant avec son clocher isolé, le plus haut du Midi.", period: "XIVe - XVIe siècle", highlights: ["Clocher de 114m", "Portail flamboyant", "Crypte"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Sainte-Marie de Bayonne", location: "Bayonne, Nouvelle-Aquitaine", lat: 43.4913, lng: -1.4748, description: "Cathédrale gothique du Pays basque, patrimoine mondial sur les chemins de Compostelle.", period: "XIIIe - XIVe siècle", highlights: ["Cloître gothique", "Vitraux Renaissance", "Flèches XIXe"], rating: 4.4, price: "Gratuit" },
  // Supplémentaires
  { name: "Cathédrale Saint-Pierre de Lisieux", location: "Lisieux, Normandie", lat: 49.1464, lng: 0.2256, description: "L'une des premières cathédrales gothiques de Normandie, sobre et élégante.", period: "XIIe - XIIIe siècle", highlights: ["Gothique normand", "Salle capitulaire", "Jardins de l'évêché"], rating: 4.1, price: "Gratuit" },
  { name: "Basilique Sainte-Thérèse de Lisieux", location: "Lisieux, Normandie", lat: 49.1402, lng: 0.2290, description: "Deuxième plus grand lieu de pèlerinage de France après Lourdes, de style néo-byzantin.", period: "XXe siècle", highlights: ["Mosaïques", "Reliques de Sainte-Thérèse", "Coupole"], rating: 4.3, price: "Gratuit" },
  { name: "Basilique Notre-Dame du Rosaire de Lourdes", location: "Lourdes, Occitanie", lat: 43.0975, lng: -0.0556, description: "Haut lieu de pèlerinage mondial, avec la grotte de Massabielle et ses basiliques.", period: "XIXe siècle", highlights: ["Grotte de Massabielle", "Processions aux flambeaux", "Basilique souterraine"], rating: 4.6, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de la Treille", location: "Lille, Hauts-de-France", lat: 50.6372, lng: 3.0617, description: "Cathédrale à la façade contemporaine translucide, mêlant néo-gothique et art moderne.", period: "XIXe - XXe siècle", highlights: ["Façade translucide", "Rosace de Ladislas Kijno", "Mélange des époques"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre de Montpellier", location: "Montpellier, Occitanie", lat: 43.6129, lng: 3.8737, description: "Cathédrale gothique avec son imposant porche à baldaquin, unique en France.", period: "XIVe siècle", highlights: ["Porche à baldaquin", "Gothique méridional", "Faculté de médecine voisine"], rating: 4.2, price: "Gratuit" },
  { name: "Cathédrale Saint-Étienne de Limoges", location: "Limoges, Nouvelle-Aquitaine", lat: 45.8293, lng: 1.2637, description: "Cathédrale gothique construite sur plusieurs siècles, avec un jubé Renaissance remarquable.", period: "XIIIe - XIXe siècle", highlights: ["Jubé Renaissance", "Portail Saint-Jean", "Vitraux"], rating: 4.2, price: "Gratuit" },
  { name: "Cathédrale Saint-Pierre de Saintes", location: "Saintes, Nouvelle-Aquitaine", lat: 45.7428, lng: -0.6327, description: "Ancienne cathédrale romane et gothique, témoin de l'histoire de la Saintonge.", period: "XIIe - XVe siècle", highlights: ["Coupole romane", "Portail gothique", "Clocher-porche"], rating: 4.1, price: "Gratuit" },
  { name: "Abbaye de Royaumont", location: "Asnières-sur-Oise, Île-de-France", lat: 49.1462, lng: 2.3793, description: "Abbaye cistercienne fondée par Saint Louis, aujourd'hui centre culturel dans un cadre magnifique.", period: "XIIIe siècle", highlights: ["Réfectoire des moines", "Jardins", "Concerts et résidences d'artistes"], rating: 4.5, price: "10€" },
  { name: "Abbaye du Bec-Hellouin", location: "Le Bec-Hellouin, Normandie", lat: 49.2323, lng: 0.7206, description: "Abbaye normande fondée au XIe siècle, berceau de grands théologiens médiévaux.", period: "XIe siècle", highlights: ["Tour Saint-Nicolas", "Village classé", "Vie monastique"], rating: 4.4, price: "5€" },
  { name: "Église abbatiale de Saint-Benoît-sur-Loire", location: "Saint-Benoît-sur-Loire, Centre-Val de Loire", lat: 47.8100, lng: 2.3100, description: "Abbatiale romane abritant les reliques de saint Benoît, chef-d'œuvre de l'art roman.", period: "XIe - XIIe siècle", highlights: ["Tour-porche romane", "Chapiteaux sculptés", "Reliques de saint Benoît"], rating: 4.5, price: "Gratuit" },
  { name: "Abbaye de Montmajour", location: "Arles, Provence-Alpes-Côte d'Azur", lat: 43.6931, lng: 4.6403, description: "Abbaye fortifiée dominant la plaine d'Arles, peinte par Van Gogh.", period: "Xe - XVIIIe siècle", highlights: ["Cloître roman", "Tour Pons de l'Orme", "Vue sur les Alpilles"], rating: 4.3, price: "6€" },
  { name: "Abbaye de Lagrasse", location: "Lagrasse, Occitanie", lat: 43.0909, lng: 2.6158, description: "Abbaye carolingienne au cœur des Corbières, l'un des plus beaux villages de France.", period: "VIIIe siècle", highlights: ["Pont médiéval", "Clocher-tour", "Village des Corbières"], rating: 4.4, price: "6€" },
  { name: "Abbaye de Flaran", location: "Valence-sur-Baïse, Occitanie", lat: 43.8833, lng: 0.3833, description: "Abbaye cistercienne gasconne abritant la collection Simonow de peintures.", period: "XIIe siècle", highlights: ["Collection Simonow", "Cloître", "Jardin des simples"], rating: 4.3, price: "5€" },
  { name: "Cathédrale Saint-Maurice de Vienne", location: "Vienne, Auvergne-Rhône-Alpes", lat: 45.5252, lng: 4.8783, description: "Cathédrale romane et gothique dominant le Rhône, témoignage de la puissance de l'archevêché.", period: "XIIe - XVIe siècle", highlights: ["Portail roman", "Vitraux", "Vue sur le Rhône"], rating: 4.2, price: "Gratuit" },
  { name: "Cathédrale Notre-Dame de Clermont-Ferrand", location: "Clermont-Ferrand, Auvergne-Rhône-Alpes", lat: 45.7789, lng: 3.0840, description: "Cathédrale gothique unique construite en pierre de Volvic noire, dominant la ville.", period: "XIIIe siècle", highlights: ["Pierre de Volvic noire", "Vitraux XIIIe", "Rosaces"], rating: 4.4, price: "Gratuit" },
  { name: "Basilique Notre-Dame du Port", location: "Clermont-Ferrand, Auvergne-Rhône-Alpes", lat: 45.7810, lng: 3.0877, description: "Chef-d'œuvre de l'art roman auvergnat, classée au patrimoine mondial UNESCO.", period: "XIe - XIIe siècle", highlights: ["Chapiteaux historiés", "Chevet auvergnat", "Vierge en Majesté"], rating: 4.5, price: "Gratuit" },
  { name: "Basilique Saint-Julien de Brioude", location: "Brioude, Auvergne-Rhône-Alpes", lat: 45.2946, lng: 3.3867, description: "La plus grande église romane d'Auvergne, avec ses peintures murales et galets polychromes.", period: "XIe - XIIe siècle", highlights: ["Galets polychromes", "Peintures murales", "Chapiteaux romans"], rating: 4.3, price: "Gratuit" },
  { name: "Église abbatiale de Saint-Nectaire", location: "Saint-Nectaire, Auvergne-Rhône-Alpes", lat: 45.5840, lng: 2.9917, description: "Joyau de l'art roman auvergnat perché sur le mont Cornadore, avec un trésor exceptionnel.", period: "XIIe siècle", highlights: ["Chapiteaux polychromes", "Buste de saint Baudime", "Chevet auvergnat"], rating: 4.5, price: "Gratuit" },
  { name: "Église de Saint-Saturnin", location: "Saint-Saturnin, Auvergne-Rhône-Alpes", lat: 45.6620, lng: 3.0913, description: "L'une des cinq églises majeures de l'art roman auvergnat, dans un village classé.", period: "XIIe siècle", highlights: ["Art roman auvergnat", "Fontaine", "Village médiéval"], rating: 4.3, price: "Gratuit" },
  { name: "Cathédrale Saint-Étienne de Sens", location: "Sens, Bourgogne-Franche-Comté", lat: 48.1981, lng: 3.2833, description: "Première grande cathédrale gothique de France, modèle pour Canterbury.", period: "XIIe siècle", highlights: ["Premier gothique", "Trésor", "Vitraux XIIe"], rating: 4.4, price: "Gratuit" },
  { name: "Cathédrale Saint-Mammès de Langres", location: "Langres, Grand Est", lat: 47.8622, lng: 5.3339, description: "Cathédrale romane et gothique perchée sur le promontoire de Langres.", period: "XIIe siècle", highlights: ["Transition roman-gothique", "Façade classique", "Ville fortifiée"], rating: 4.1, price: "Gratuit" },
  { name: "Cathédrale Saint-Cyr-et-Sainte-Julitte de Nevers", location: "Nevers, Bourgogne-Franche-Comté", lat: 46.9882, lng: 3.1580, description: "Cathédrale rare possédant deux absides opposées, romane et gothique.", period: "XIe - XVIe siècle", highlights: ["Double abside", "Art roman et gothique", "Vitraux contemporains"], rating: 4.2, price: "Gratuit" },
  { name: "Cathédrale Saint-Étienne d'Auxerre", location: "Auxerre, Bourgogne-Franche-Comté", lat: 47.7970, lng: 3.5730, description: "Cathédrale gothique avec une crypte romane ornée des plus anciennes fresques de France.", period: "XIe - XVIe siècle", highlights: ["Crypte du XIe", "Fresques carolingiennes", "Vitraux XIIIe"], rating: 4.4, price: "Gratuit" },
];

// ══════════════════════════════════════════════════════════
// Script principal
// ══════════════════════════════════════════════════════════

async function main() {
  // 1. Charger les données originales
  console.log('📖 Lecture des données originales...');
  const originalContent = readFileSync('/tmp/original_places.js', 'utf-8');

  // Extraire les places du fichier original (format JS, pas JSON)
  // On va parser manuellement en extrayant les objets
  const placesMatch = originalContent.match(/export const places = \[([\s\S]*)\];/);
  if (!placesMatch) {
    console.error('❌ Impossible de trouver les places dans le fichier original');
    process.exit(1);
  }

  // Utiliser eval pour parser le JS (les données sont sûres, c'est notre propre fichier)
  let originalPlaces;
  try {
    originalPlaces = eval(`[${placesMatch[1]}]`);
  } catch (e) {
    console.error('❌ Erreur de parsing:', e.message);
    process.exit(1);
  }

  console.log(`✅ ${originalPlaces.length} lieux originaux chargés`);

  // 2. Compter les types
  const typeCounts = {};
  originalPlaces.forEach(p => {
    typeCounts[p.type] = (typeCounts[p.type] || 0) + 1;
  });
  console.log('📊 Types originaux:', typeCounts);

  // 3. Traiter les monuments - convertir ou supprimer
  // Regex pour identifier les édifices religieux
  const religiousPattern = /[ée]glise|cath[ée]drale|basilique|abbaye|chapelle|prieur[ée]|coll[ée]giale|clo[iî]tre|notre.?dame|saint.?/i;

  const processedPlaces = [];
  let convertedToEglise = 0;
  let removedMonuments = 0;

  for (const place of originalPlaces) {
    if (place.type === 'monument') {
      // Check if it's a religious building
      if (religiousPattern.test(place.name)) {
        place.type = 'église';
        processedPlaces.push(place);
        convertedToEglise++;
      } else {
        // Remove non-religious monuments entirely
        removedMonuments++;
      }
    } else if (['musée', 'château', 'exposition'].includes(place.type)) {
      processedPlaces.push(place);
    }
    // Skip any other types
  }

  console.log(`🔄 ${convertedToEglise} monuments convertis en églises`);
  console.log(`🗑️  ${removedMonuments} monuments supprimés (pas des édifices religieux)`);

  // 4. Ajouter les vraies églises
  let nextId = processedPlaces.reduce((max, p) => Math.max(max, p.id || 0), 0) + 1;

  // Vérifier les doublons
  const existingNames = new Set(processedPlaces.map(p =>
    p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  ));

  let addedEglises = 0;
  for (const eglise of realEglises) {
    const normalizedName = eglise.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (!existingNames.has(normalizedName)) {
      processedPlaces.push({
        id: nextId++,
        name: eglise.name,
        type: 'église',
        image: "",
        description: eglise.description,
        location: eglise.location,
        rating: eglise.rating,
        price: eglise.price,
        hours: "Horaires variables (se renseigner)",
        period: eglise.period,
        coordinates: { lat: eglise.lat, lng: eglise.lng },
        highlights: eglise.highlights,
        visited: false,
        favorite: false
      });
      existingNames.add(normalizedName);
      addedEglises++;
    }
  }

  console.log(`⛪ ${addedEglises} vraies églises/cathédrales ajoutées`);

  // 5. Réassigner les IDs
  processedPlaces.forEach((p, i) => { p.id = i + 1; });

  // 6. Statistiques finales
  const finalCounts = {};
  processedPlaces.forEach(p => {
    finalCounts[p.type] = (finalCounts[p.type] || 0) + 1;
  });
  console.log('\n📊 Résultat final:');
  console.log(`   Total: ${processedPlaces.length} lieux`);
  Object.entries(finalCounts).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
    console.log(`   ${type}: ${count}`);
  });

  // 7. Générer le fichier
  const typeSummary = Object.entries(finalCounts).map(([t,c]) => c + ' ' + t + 's').join(', ');
  const header = [
    '// Base de données des lieux culturels français — données RÉELLES',
    '// Date : ' + new Date().toISOString(),
    '// Total : ' + processedPlaces.length + ' lieux (' + typeSummary + ')',
    '// UNIQUEMENT : musée, château, exposition, église',
    '// Données originales restaurées + vraies églises/cathédrales françaises',
    '',
    "export const placeTypes = [",
    "  { id: 'all', label: 'Tous', color: 'bg-night-600' },",
    "  { id: 'musée', label: 'Musées', color: 'bg-turquoise-500' },",
    "  { id: 'château', label: 'Châteaux', color: 'bg-gold-600' },",
    "  { id: 'église', label: 'Églises', color: 'bg-rose-500' },",
    "  { id: 'exposition', label: 'Expositions', color: 'bg-purple-500' }",
    "];",
    '',
    "export const getTypeBadgeColor = (type) => {",
    "  const colors = {",
    "    'musée': 'bg-turquoise-500',",
    "    'château': 'bg-gold-600',",
    "    'église': 'bg-rose-500',",
    "    'exposition': 'bg-purple-500',",
    "  };",
    "  return colors[type] || 'bg-night-600';",
    "};",
    '',
    '// Base de données des lieux culturels français',
    'export const places = ',
  ].join('\n');

  const output = header + JSON.stringify(processedPlaces, null, 2) + ';\n';
  writeFileSync(OUTPUT, output, 'utf-8');
  console.log(`\n✅ Fichier généré : ${OUTPUT}`);
  console.log(`📦 Taille : ${(output.length / 1024).toFixed(0)} Ko`);
}

main().catch(console.error);
