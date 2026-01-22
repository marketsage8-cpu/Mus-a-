# Muzea

Une plateforme web immersive pour découvrir le patrimoine culturel français : musées, châteaux, monuments et expositions.

![Muzea](https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80)

## Fonctionnalités

- **Exploration interactive** : Carte Leaflet avec markers cliquables par type de lieu
- **Recherche avancée** : Filtrage par type (musée, château, monument, exposition) et recherche textuelle
- **Favoris** : Sauvegarde des lieux préférés avec persistance localStorage
- **Historique de visites** : Suivi des lieux visités avec dates
- **Gamification** : Système de badges à débloquer selon les visites
- **Parcours thématiques** : Itinéraires culturels prédéfinis
- **Événements** : Liste des expositions temporaires et événements à venir
- **Profil utilisateur** : Dashboard avec statistiques et préférences
- **Responsive** : Design mobile-first avec navigation adaptative

## Stack technique

- **React 18** avec Vite
- **Tailwind CSS** pour le styling
- **React Router** pour la navigation
- **Leaflet** pour la carte interactive
- **Lucide React** pour les icônes
- **LocalStorage** pour la persistance des données

## Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/culture-explorer.git

# Accéder au dossier
cd culture-explorer

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Structure du projet

```
culture-explorer/
├── src/
│   ├── components/
│   │   ├── layout/        # Navigation, MobileNav
│   │   ├── cards/         # PlaceCard, RouteCard
│   │   ├── modals/        # PlaceDetailModal
│   │   ├── map/           # InteractiveMap (Leaflet)
│   │   └── ui/            # SearchBar, FilterTabs, Badge
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ExplorePage.jsx
│   │   ├── FavoritesPage.jsx
│   │   ├── EventsPage.jsx
│   │   └── ProfilePage.jsx
│   ├── data/
│   │   ├── places.js      # Données des lieux
│   │   ├── badges.js      # Système de gamification
│   │   └── routes.js      # Parcours thématiques
│   ├── hooks/
│   │   ├── useFavorites.js
│   │   ├── useVisited.js
│   │   └── useFilters.js
│   ├── context/
│   │   └── UserContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## Design System

### Palette de couleurs
- Background principal : `stone-950` (#0c0a09)
- Background secondaire : `stone-900` (#1c1917)
- Accent principal : `amber-600` (#d97706)
- Texte principal : `amber-50` (#fffbeb)

### Typographie
- Titres : Cormorant Garamond (serif)
- Corps : DM Sans (sans-serif)

### Badges par type
- Musée : Bleu (`bg-blue-500/80`)
- Château : Ambre (`bg-amber-600/80`)
- Monument : Émeraude (`bg-emerald-600/80`)
- Exposition : Violet (`bg-purple-500/80`)

## Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Linting ESLint
```

## Données

L'application utilise des données mockées incluant :
- 12 lieux culturels (musées, châteaux, monuments, expositions)
- 6 badges à débloquer
- 3 parcours thématiques

## Licence

MIT
