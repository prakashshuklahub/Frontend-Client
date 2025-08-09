import { SearchFilters, SearchParams, SearchResponse } from "@/types/media";

export const searchImages = async (
  params: SearchParams
): Promise<SearchResponse> => {
  try {
    const queryParams = new URLSearchParams();

    if (params.q) queryParams.append("q", params.q);
    if (params.tag) queryParams.append("tag", params.tag);
    if (params.type) queryParams.append("type", params.type);
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.offset) queryParams.append("offset", params.offset.toString());
    if (params.dateFrom) queryParams.append("dateFrom", params.dateFrom);
    if (params.dateTo) queryParams.append("dateTo", params.dateTo);
    if (params.photographer)
      queryParams.append("photographer", params.photographer);

    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://media-service-9v3w.onrender.com/api";
    const response = await fetch(
      `${apiUrl}/media/search?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching images:", error);
    throw new Error("Failed to search images");
  }
};

export const convertSearchFilters = (filters: SearchFilters): SearchParams => {
  const offset = filters.page ? (filters.page - 1) * 30 : 0;

  return {
    q: filters.query,
    limit: 30,
    offset,
    dateFrom: filters.dateFilter?.from,
    dateTo: filters.dateFilter?.to,
  };
};
