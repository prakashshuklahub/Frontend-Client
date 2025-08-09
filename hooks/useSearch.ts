import { useQuery } from "@tanstack/react-query";
import { SearchFilters, SearchResponse } from "@/types/media";
import { mediaService } from "@/app/services";

export const useSearch = (filters: SearchFilters) => {
  const { query, dateFilter, page = 1 } = filters;

  return useQuery<SearchResponse>({
    queryKey: ["images", { query, dateFilter, page }],
    queryFn: async () => {
      const searchParams = mediaService.convertSearchFilters(filters);
      return await mediaService.searchImages(searchParams);
    },
    staleTime: 2 * 60 * 1000, // Data stays fresh for 2 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    placeholderData: (previousData) => previousData, // Keep old results while loading
    retry: 3, // Retry failed requests 3 times
    refetchOnWindowFocus: false, // Don't refetch when user returns to tab
  });
};
