# Photos

Ce dossier contient les photos et images du projet Mus-a-.

## Utilisation

Placez vos images dans ce dossier. Elles seront accessibles via l'URL `/photos/nom-du-fichier.jpg`.

## Formats supportes

- `.jpg` / `.jpeg` - Images JPEG
- `.png` - Images PNG (avec transparence)
- `.gif` - Images GIF (animees ou statiques)
- `.webp` - Images WebP (format moderne optimise)
- `.svg` - Images vectorielles SVG

## Exemple d'utilisation dans le code

```jsx
// Dans un composant React
<img src="/photos/mon-image.jpg" alt="Description de l'image" />

// Ou avec le composant Photo
import Photo from '../components/ui/Photo';
<Photo src="/photos/mon-image.jpg" alt="Description" />
```

## Bonnes pratiques

1. Optimisez vos images avant de les ajouter
2. Utilisez des noms de fichiers descriptifs (ex: `musee-louvre-facade.jpg`)
3. Preferez le format WebP pour un meilleur ratio qualite/taille
