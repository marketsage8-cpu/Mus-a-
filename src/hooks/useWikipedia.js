/**
 * Hook React pour utiliser le service Wikipedia
 *
 * Fournit des fonctions et états pour interagir avec l'API Wikipedia
 * de manière réactive dans les composants React.
 */

import { useState, useEffect, useCallback } from 'react';
import {
  searchWikipedia,
  getArticleSummary,
  getArticleImages,
  enrichPlaceWithWikipedia,
  comprehensiveSearch,
  getArtistInfo,
  getNearbyArticles,
  searchCommonsImages,
} from '../services/wikipediaService';

/**
 * Hook pour rechercher sur Wikipedia
 * @param {string} initialQuery - Requête initiale (optionnel)
 * @returns {Object} État et fonctions de recherche
 */
export function useWikipediaSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchQuery, limit = 10) => {
    if (!searchQuery?.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await searchWikipedia(searchQuery, limit);
      setResults(data);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialQuery) {
      search(initialQuery);
    }
  }, [initialQuery, search]);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
    search,
  };
}

/**
 * Hook pour obtenir le résumé d'un article
 * @param {string} title - Titre de l'article
 * @param {string} lang - Langue ('fr' ou 'en')
 * @returns {Object} Résumé et état de chargement
 */
export function useArticleSummary(title, lang = 'fr') {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!title) {
      setSummary(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    getArticleSummary(title, lang)
      .then(data => {
        if (!cancelled) {
          setSummary(data);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [title, lang]);

  return { summary, loading, error };
}

/**
 * Hook pour obtenir les images d'un article
 * @param {string} title - Titre de l'article
 * @param {number} limit - Nombre max d'images
 * @returns {Object} Images et état de chargement
 */
export function useArticleImages(title, limit = 10) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!title) {
      setImages([]);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    getArticleImages(title, limit)
      .then(data => {
        if (!cancelled) {
          setImages(data);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [title, limit]);

  return { images, loading, error };
}

/**
 * Hook pour enrichir un lieu avec Wikipedia
 * @param {Object} place - Objet lieu
 * @returns {Object} Lieu enrichi et état de chargement
 */
export function useWikipediaEnrichment(place) {
  const [enrichedPlace, setEnrichedPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!place?.name) {
      setEnrichedPlace(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    enrichPlaceWithWikipedia(place)
      .then(data => {
        if (!cancelled) {
          setEnrichedPlace(data);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [place?.id, place?.name]);

  return { enrichedPlace, loading, error };
}

/**
 * Hook pour une recherche complète (articles + images)
 * @param {string} query - Terme de recherche
 * @returns {Object} Résultats combinés
 */
export function useComprehensiveSearch(query) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchQuery) => {
    if (!searchQuery?.trim()) {
      setResults(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await comprehensiveSearch(searchQuery);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query, search]);

  return { results, loading, error, search };
}

/**
 * Hook pour obtenir les infos d'un artiste
 * @param {string} artistName - Nom de l'artiste
 * @returns {Object} Informations et état
 */
export function useArtistInfo(artistName) {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!artistName) {
      setArtist(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    getArtistInfo(artistName)
      .then(data => {
        if (!cancelled) {
          setArtist(data);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [artistName]);

  return { artist, loading, error };
}

/**
 * Hook pour obtenir les articles à proximité
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @param {number} radius - Rayon en mètres
 * @returns {Object} Articles et état
 */
export function useNearbyArticles(lat, lng, radius = 5000) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (lat == null || lng == null) {
      setArticles([]);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    getNearbyArticles(lat, lng, radius)
      .then(data => {
        if (!cancelled) {
          setArticles(data);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [lat, lng, radius]);

  return { articles, loading, error };
}

/**
 * Hook pour rechercher des images sur Commons
 * @param {string} query - Terme de recherche
 * @param {number} limit - Nombre max d'images
 * @returns {Object} Images et état
 */
export function useCommonsImages(query, limit = 20) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchQuery, imageLimit = limit) => {
    if (!searchQuery?.trim()) {
      setImages([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await searchCommonsImages(searchQuery, imageLimit);
      setImages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query, search]);

  return { images, loading, error, search };
}

export default {
  useWikipediaSearch,
  useArticleSummary,
  useArticleImages,
  useWikipediaEnrichment,
  useComprehensiveSearch,
  useArtistInfo,
  useNearbyArticles,
  useCommonsImages,
};
