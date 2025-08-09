"use client";

import styles from "./page.module.scss";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import ImageGrid from "@/components/images/ImageGrid/ImageGrid";
import SearchContainer from "@/components/search/SearchContainer/SearchContainer";
import Pagination from "@/components/ui/Pagination/Pagination";
import { SearchFilters } from "@/types/media";
import { DateRange } from "@/components/search/DateFilter/DateFilter";

export default function Home() {
  const [searchParams, setSearchParams] = useState<SearchFilters>({
    query: "",
    page: 1,
    photographer: "",
  });

  const { data, isLoading, isFetching, isError } = useSearch(searchParams);

  const handleSearch = (query: string) => {
    setSearchParams((prev) => ({ ...prev, query }));
  };

  const handleDateChange = (range: DateRange) => {
    let dateFilter: { from: string; to: string } | undefined;

    if (range !== DateRange.ALL) {
      const now = new Date();
      const from = new Date();

      switch (range) {
        case DateRange.TODAY:
          from.setHours(0, 0, 0, 0);
          break;
        case DateRange.WEEK:
          from.setDate(now.getDate() - 7);
          break;
        case DateRange.MONTH:
          from.setMonth(now.getMonth() - 1);
          break;
        case DateRange.YEAR:
          from.setFullYear(now.getFullYear() - 1);
          break;
        case DateRange.LAST_5_YEARS:
          from.setFullYear(now.getFullYear() - 5);
          break;
      }

      dateFilter = {
        from: from.toISOString().split("T")[0],
        to: now.toISOString().split("T")[0],
      };
    }

    setSearchParams((prev) => ({ ...prev, dateFilter }));
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => ({ ...prev, page }));
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <SearchContainer
          onSearch={handleSearch}
          onDateChange={handleDateChange}
        />
        <section
          className={styles.content}
          aria-label="Search results"
          aria-live="polite"
          aria-busy={isLoading || isFetching}
        >
          <ImageGrid
            images={data?.data || []}
            isLoading={isLoading || isFetching}
            isError={isError}
          />
          {data && data.total > 0 && (
            <nav aria-label="Pagination">
              <Pagination
                currentPage={searchParams.page || 1}
                totalPages={Math.ceil(data.total / 30)}
                onPageChange={handlePageChange}
                totalItems={data.total}
                itemsPerPage={30}
              />
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
