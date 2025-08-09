/**
 * Represents a single media item returned by the media search API.
 * Values map 1:1 with the remote service payload.
 */
export interface ImageType {
  /** Unique identifier of the item (backend generated). */
  id: string;
  /** Relevance score for the search result. */
  score: number;
  /** Provider-specific image number. */
  bildnummer: string;
  /** Original capture or publication date (ISO timestamp). */
  datum: string;
  /** Searchable caption/description text. */
  suchtext: string;
  /** Photographer credit/name. */
  fotografen: string;
  /** Source database/category (e.g., "stock"). */
  db: string;
  /** Public image URL (thumbnail or small size). */
  url: string;
  /** Record creation date in the index (ISO timestamp). */
  createdAt: string;
}

/**
 * UI-facing filters used in the application when searching.
 * These are later converted into API-facing `SearchParams`.
 */
export interface SearchFilters {
  /** Free-text search query. */
  query?: string;
  /** Optional capture/publication date range. ISO date strings (YYYY-MM-DD). */
  dateFilter?: {
    /** Inclusive start date (YYYY-MM-DD). */
    from?: string;
    /** Inclusive end date (YYYY-MM-DD). */
    to?: string;
  };
  /** Filter by photographer credit/name. */
  photographer?: string;
  /** 1-based page number for pagination. */
  page?: number;
}

/**
 * Backend API parameters accepted by the media search endpoint.
 * These are produced from `SearchFilters` prior to the network call.
 */
export interface SearchParams {
  /** Free-text query string (maps from `SearchFilters.query`). */
  q?: string;
  /** Optional tag filter. */
  tag?: string;
  /** Optional media type filter (implementation-specific). */
  type?: string;
  /** Page size for the request. */
  limit?: number;
  /** Result offset (used for pagination). */
  offset?: number;
  /** Inclusive start date (YYYY-MM-DD). */
  dateFrom?: string;
  /** Inclusive end date (YYYY-MM-DD). */
  dateTo?: string;
  /** Photographer credit/name filter. */
  photographer?: string;
}

/**
 * Standard response envelope returned by the media search API.
 */
export interface SearchResponse {
  /** Indicates whether the request was successful. */
  success: boolean;
  /** Total number of matches available on the server. */
  total: number;
  /** Page size used for the current response. */
  limit: number;
  /** Offset used for the current response. */
  offset: number;
  /** Number of items in this page. */
  count: number;
  /** Search result items. */
  data: ImageType[];
  /** Server-side processing time in milliseconds. */
  took: number;
}
