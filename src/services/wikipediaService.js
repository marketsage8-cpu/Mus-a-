/**
 * Service d'intégration avec l'API Wikipedia
 *
 * APIs utilisées:
 * - Wikipedia API (MediaWiki) - Articles, extraits, images
 * - Wikimedia Commons - Images haute qualité
 * - Wikidata - Données structurées
 *
 * Documentation: https://www.mediawiki.org/wiki/API:Main_page
 */

const WIKIPEDIA_API_BASE = 'https://fr.wikipedia.org/w/api.php';
const WIKIPEDIA_EN_API_BASE = 'https://en.wikipedia.org/w/api.php';
const WIKIDATA_API_BASE = 'https://www.wikidata.org/w/api.php';
const COMMONS_API_BASE = 'https://commons.wikimedia.org/w/api.php';

// Cache en mémoire pour éviter les requêtes répétées
const cache = new Map();
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

/**
 * Utilitaire pour faire des requêtes avec retry et backoff
 */
async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Accept': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
}

/**
 * Vérifie et retourne le cache si valide
 */
function getFromCache(key) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  cache.delete(key);
  return null;
}

/**
 * Sauvegarde dans le cache
 */
function setCache(key, data) {
  cache.set(key, { data, timestamp: Date.now() });
}

// ============================================
// RECHERCHE D'ARTICLES
// ============================================

/**
 * Recherche des articles Wikipedia par mot-clé
 * @param {string} query - Terme de recherche
 * @param {number} limit - Nombre de résultats (max 50)
 * @param {string} lang - Langue ('fr' ou 'en')
 * @returns {Promise<Array>} Liste des résultats
 */
export async function searchWikipedia(query, limit = 10, lang = 'fr') {
  const cacheKey = `search:${lang}:${query}:${limit}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const baseUrl = lang === 'en' ? WIKIPEDIA_EN_API_BASE : WIKIPEDIA_API_BASE;
  const params = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: query,
    srlimit: limit,
    srprop: 'snippet|titlesnippet|size|wordcount',
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${baseUrl}?${params}`);
    const results = data.query?.search?.map(item => ({
      title: item.title,
      pageId: item.pageid,
      snippet: item.snippet.replace(/<\/?[^>]+(>|$)/g, ''), // Nettoyer HTML
      size: item.size,
      wordCount: item.wordcount,
      url: `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/ /g, '_'))}`,
    })) || [];

    setCache(cacheKey, results);
    return results;
  } catch (error) {
    console.error('Erreur recherche Wikipedia:', error);
    return [];
  }
}

/**
 * Recherche d'articles liés à un lieu culturel
 * @param {string} placeName - Nom du lieu
 * @param {string} placeType - Type (musée, château, etc.)
 * @returns {Promise<Array>} Articles pertinents
 */
export async function searchPlaceArticles(placeName, placeType = '') {
  const searchTerms = [
    placeName,
    `${placeName} ${placeType}`,
    `${placeName} France`,
  ];

  const results = await Promise.all(
    searchTerms.map(term => searchWikipedia(term, 5))
  );

  // Dédupliquer par pageId
  const seen = new Set();
  const merged = results.flat().filter(item => {
    if (seen.has(item.pageId)) return false;
    seen.add(item.pageId);
    return true;
  });

  return merged.slice(0, 10);
}

// ============================================
// EXTRAITS D'ARTICLES
// ============================================

/**
 * Obtient un extrait/résumé d'un article Wikipedia
 * @param {string} title - Titre de l'article
 * @param {number} sentences - Nombre de phrases (max 10)
 * @param {string} lang - Langue
 * @returns {Promise<Object>} Extrait avec métadonnées
 */
export async function getArticleExtract(title, sentences = 5, lang = 'fr') {
  const cacheKey = `extract:${lang}:${title}:${sentences}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const baseUrl = lang === 'en' ? WIKIPEDIA_EN_API_BASE : WIKIPEDIA_API_BASE;
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'extracts|pageimages|info',
    exintro: 'true',
    exsentences: sentences,
    explaintext: 'true',
    piprop: 'thumbnail|original',
    pithumbsize: 500,
    inprop: 'url',
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${baseUrl}?${params}`);
    const pages = data.query?.pages || {};
    const page = Object.values(pages)[0];

    if (!page || page.missing) {
      return null;
    }

    const result = {
      title: page.title,
      pageId: page.pageid,
      extract: page.extract,
      url: page.fullurl || `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`,
      thumbnail: page.thumbnail?.source || null,
      originalImage: page.original?.source || null,
    };

    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Erreur extrait Wikipedia:', error);
    return null;
  }
}

/**
 * Obtient un résumé formaté pour l'affichage
 * Utilise l'API REST de Wikipedia pour un résumé plus propre
 * @param {string} title - Titre de l'article
 * @param {string} lang - Langue
 * @returns {Promise<Object>} Résumé formaté
 */
export async function getArticleSummary(title, lang = 'fr') {
  const cacheKey = `summary:${lang}:${title}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const encodedTitle = encodeURIComponent(title.replace(/ /g, '_'));
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodedTitle}`;

  try {
    const data = await fetchWithRetry(url);

    const result = {
      title: data.title,
      displayTitle: data.displaytitle,
      description: data.description,
      extract: data.extract,
      extractHtml: data.extract_html,
      url: data.content_urls?.desktop?.page,
      thumbnail: data.thumbnail?.source,
      originalImage: data.originalimage?.source,
      coordinates: data.coordinates ? {
        lat: data.coordinates.lat,
        lng: data.coordinates.lon,
      } : null,
      type: data.type,
    };

    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Erreur résumé Wikipedia:', error);
    return null;
  }
}

// ============================================
// IMAGES
// ============================================

/**
 * Récupère les images d'un article Wikipedia
 * @param {string} title - Titre de l'article
 * @param {number} limit - Nombre max d'images
 * @param {string} lang - Langue
 * @returns {Promise<Array>} Liste des images
 */
export async function getArticleImages(title, limit = 10, lang = 'fr') {
  const cacheKey = `images:${lang}:${title}:${limit}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const baseUrl = lang === 'en' ? WIKIPEDIA_EN_API_BASE : WIKIPEDIA_API_BASE;
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'images',
    imlimit: limit,
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${baseUrl}?${params}`);
    const pages = data.query?.pages || {};
    const page = Object.values(pages)[0];

    if (!page || !page.images) {
      return [];
    }

    // Filtrer les icônes et logos
    const imageNames = page.images
      .map(img => img.title)
      .filter(name =>
        !name.includes('Icon') &&
        !name.includes('Logo') &&
        !name.includes('Flag') &&
        !name.includes('.svg')
      );

    // Obtenir les URLs des images
    const imageUrls = await getImageUrls(imageNames);

    setCache(cacheKey, imageUrls);
    return imageUrls;
  } catch (error) {
    console.error('Erreur images Wikipedia:', error);
    return [];
  }
}

/**
 * Obtient les URLs complètes des images depuis Wikimedia Commons
 * @param {Array<string>} imageNames - Noms des fichiers
 * @returns {Promise<Array>} URLs des images
 */
async function getImageUrls(imageNames) {
  if (!imageNames.length) return [];

  const params = new URLSearchParams({
    action: 'query',
    titles: imageNames.join('|'),
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: 800,
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${COMMONS_API_BASE}?${params}`);
    const pages = data.query?.pages || {};

    return Object.values(pages)
      .filter(page => page.imageinfo)
      .map(page => {
        const info = page.imageinfo[0];
        const metadata = info.extmetadata || {};

        return {
          title: page.title.replace('File:', ''),
          url: info.url,
          thumbUrl: info.thumburl,
          width: info.width,
          height: info.height,
          mime: info.mime,
          description: metadata.ImageDescription?.value?.replace(/<[^>]*>/g, '') || '',
          author: metadata.Artist?.value?.replace(/<[^>]*>/g, '') || '',
          license: metadata.LicenseShortName?.value || '',
        };
      });
  } catch (error) {
    console.error('Erreur URLs images:', error);
    return [];
  }
}

/**
 * Recherche d'images sur Wikimedia Commons
 * @param {string} query - Terme de recherche
 * @param {number} limit - Nombre max d'images
 * @returns {Promise<Array>} Images trouvées
 */
export async function searchCommonsImages(query, limit = 20) {
  const cacheKey = `commons:${query}:${limit}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrnamespace: 6, // File namespace
    gsrsearch: `${query} filetype:bitmap`,
    gsrlimit: limit,
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: 800,
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${COMMONS_API_BASE}?${params}`);
    const pages = data.query?.pages || {};

    const results = Object.values(pages)
      .filter(page => page.imageinfo)
      .map(page => {
        const info = page.imageinfo[0];
        const metadata = info.extmetadata || {};

        return {
          title: page.title.replace('File:', ''),
          url: info.url,
          thumbUrl: info.thumburl,
          width: info.width,
          height: info.height,
          description: metadata.ImageDescription?.value?.replace(/<[^>]*>/g, '') || '',
          author: metadata.Artist?.value?.replace(/<[^>]*>/g, '') || '',
          license: metadata.LicenseShortName?.value || '',
        };
      });

    setCache(cacheKey, results);
    return results;
  } catch (error) {
    console.error('Erreur recherche Commons:', error);
    return [];
  }
}

// ============================================
// WIKIDATA
// ============================================

/**
 * Récupère l'ID Wikidata d'un article Wikipedia
 * @param {string} title - Titre de l'article
 * @param {string} lang - Langue
 * @returns {Promise<string|null>} ID Wikidata (ex: Q123)
 */
export async function getWikidataId(title, lang = 'fr') {
  const cacheKey = `wikidata-id:${lang}:${title}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const baseUrl = lang === 'en' ? WIKIPEDIA_EN_API_BASE : WIKIPEDIA_API_BASE;
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'pageprops',
    ppprop: 'wikibase_item',
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${baseUrl}?${params}`);
    const pages = data.query?.pages || {};
    const page = Object.values(pages)[0];
    const wikidataId = page?.pageprops?.wikibase_item || null;

    if (wikidataId) {
      setCache(cacheKey, wikidataId);
    }
    return wikidataId;
  } catch (error) {
    console.error('Erreur Wikidata ID:', error);
    return null;
  }
}

/**
 * Récupère les données structurées depuis Wikidata
 * @param {string} wikidataId - ID Wikidata (ex: Q123)
 * @returns {Promise<Object>} Données Wikidata
 */
export async function getWikidataEntity(wikidataId) {
  const cacheKey = `wikidata-entity:${wikidataId}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const params = new URLSearchParams({
    action: 'wbgetentities',
    ids: wikidataId,
    props: 'labels|descriptions|claims|sitelinks',
    languages: 'fr|en',
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${WIKIDATA_API_BASE}?${params}`);
    const entity = data.entities?.[wikidataId];

    if (!entity) return null;

    // Extraire les informations utiles
    const result = {
      id: wikidataId,
      label: entity.labels?.fr?.value || entity.labels?.en?.value,
      description: entity.descriptions?.fr?.value || entity.descriptions?.en?.value,
      wikipediaUrl: entity.sitelinks?.frwiki?.url || entity.sitelinks?.enwiki?.url,
      claims: extractWikidataClaims(entity.claims),
    };

    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Erreur Wikidata entity:', error);
    return null;
  }
}

/**
 * Extrait les propriétés utiles des claims Wikidata
 */
function extractWikidataClaims(claims) {
  const properties = {
    P18: 'image',           // Image
    P625: 'coordinates',    // Coordonnées
    P131: 'location',       // Situé dans
    P17: 'country',         // Pays
    P571: 'inception',      // Date de fondation
    P1619: 'opening',       // Date d'ouverture
    P856: 'website',        // Site officiel
    P373: 'commonsCategory', // Catégorie Commons
    P910: 'mainCategory',   // Catégorie principale
    P31: 'instanceOf',      // Nature de l'élément
    P84: 'architect',       // Architecte
    P127: 'owner',          // Propriétaire
  };

  const extracted = {};

  for (const [propId, propName] of Object.entries(properties)) {
    const claim = claims?.[propId]?.[0]?.mainsnak?.datavalue;
    if (claim) {
      switch (claim.type) {
        case 'string':
          extracted[propName] = claim.value;
          break;
        case 'wikibase-entityid':
          extracted[propName] = claim.value.id;
          break;
        case 'time':
          extracted[propName] = claim.value.time;
          break;
        case 'globecoordinate':
          extracted[propName] = {
            lat: claim.value.latitude,
            lng: claim.value.longitude,
          };
          break;
        default:
          extracted[propName] = claim.value;
      }
    }
  }

  return extracted;
}

// ============================================
// FONCTIONS DE HAUT NIVEAU
// ============================================

/**
 * Enrichit les données d'un lieu avec Wikipedia
 * @param {Object} place - Objet lieu (name, type, location)
 * @returns {Promise<Object>} Lieu enrichi avec données Wikipedia
 */
export async function enrichPlaceWithWikipedia(place) {
  try {
    // 1. Chercher l'article Wikipedia correspondant
    const searchResults = await searchWikipedia(`${place.name} ${place.location || ''}`, 3);

    if (!searchResults.length) {
      return { ...place, wikipedia: null };
    }

    // 2. Prendre le premier résultat et obtenir le résumé
    const bestMatch = searchResults[0];
    const summary = await getArticleSummary(bestMatch.title);

    // 3. Obtenir les images
    const images = await getArticleImages(bestMatch.title, 5);

    // 4. Obtenir l'ID Wikidata si disponible
    const wikidataId = await getWikidataId(bestMatch.title);
    let wikidataInfo = null;
    if (wikidataId) {
      wikidataInfo = await getWikidataEntity(wikidataId);
    }

    return {
      ...place,
      wikipedia: {
        title: summary?.title || bestMatch.title,
        url: summary?.url || bestMatch.url,
        extract: summary?.extract || null,
        thumbnail: summary?.thumbnail || null,
        originalImage: summary?.originalImage || null,
        images: images,
        wikidataId: wikidataId,
        wikidata: wikidataInfo,
      },
    };
  } catch (error) {
    console.error('Erreur enrichissement Wikipedia:', error);
    return { ...place, wikipedia: null };
  }
}

/**
 * Recherche complète pour un terme (articles + images)
 * @param {string} query - Terme de recherche
 * @returns {Promise<Object>} Résultats combinés
 */
export async function comprehensiveSearch(query) {
  const [articles, images] = await Promise.all([
    searchWikipedia(query, 10),
    searchCommonsImages(query, 10),
  ]);

  // Enrichir le premier article avec son résumé
  let topArticle = null;
  if (articles.length > 0) {
    topArticle = await getArticleSummary(articles[0].title);
  }

  return {
    query,
    topArticle,
    articles,
    images,
  };
}

/**
 * Obtient des informations sur un artiste
 * @param {string} artistName - Nom de l'artiste
 * @returns {Promise<Object>} Informations sur l'artiste
 */
export async function getArtistInfo(artistName) {
  const summary = await getArticleSummary(artistName);

  if (!summary) {
    // Essayer en anglais
    return await getArticleSummary(artistName, 'en');
  }

  // Obtenir plus d'images de l'artiste
  const images = await searchCommonsImages(`${artistName} painting`, 10);

  return {
    ...summary,
    artworks: images,
  };
}

/**
 * Récupère les articles Wikipedia à proximité d'un point
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @param {number} radius - Rayon en mètres (max 10000)
 * @param {number} limit - Nombre max de résultats
 * @returns {Promise<Array>} Articles à proximité
 */
export async function getNearbyArticles(lat, lng, radius = 5000, limit = 20) {
  const cacheKey = `nearby:${lat}:${lng}:${radius}:${limit}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  const params = new URLSearchParams({
    action: 'query',
    list: 'geosearch',
    gscoord: `${lat}|${lng}`,
    gsradius: Math.min(radius, 10000),
    gslimit: limit,
    format: 'json',
    origin: '*',
  });

  try {
    const data = await fetchWithRetry(`${WIKIPEDIA_API_BASE}?${params}`);
    const results = data.query?.geosearch?.map(item => ({
      title: item.title,
      pageId: item.pageid,
      distance: item.dist,
      coordinates: {
        lat: item.lat,
        lng: item.lon,
      },
      url: `https://fr.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/ /g, '_'))}`,
    })) || [];

    setCache(cacheKey, results);
    return results;
  } catch (error) {
    console.error('Erreur articles à proximité:', error);
    return [];
  }
}

/**
 * Vide le cache
 */
export function clearCache() {
  cache.clear();
}

/**
 * Retourne les statistiques du cache
 */
export function getCacheStats() {
  return {
    size: cache.size,
    entries: Array.from(cache.keys()),
  };
}

// Export par défaut avec toutes les fonctions
export default {
  // Recherche
  searchWikipedia,
  searchPlaceArticles,

  // Extraits
  getArticleExtract,
  getArticleSummary,

  // Images
  getArticleImages,
  searchCommonsImages,

  // Wikidata
  getWikidataId,
  getWikidataEntity,

  // Fonctions de haut niveau
  enrichPlaceWithWikipedia,
  comprehensiveSearch,
  getArtistInfo,
  getNearbyArticles,

  // Utilitaires
  clearCache,
  getCacheStats,
};
