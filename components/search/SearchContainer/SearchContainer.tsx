"use client";

import SearchBar from "../SearchBar/SearchBar";
import DateFilter, { DateRange } from "../DateFilter/DateFilter";
import styles from "./SearchContainer.module.scss";

interface SearchContainerProps {
  onSearch: (query: string) => void;
  onDateChange: (range: DateRange) => void;
  initialQuery?: string;
}

export default function SearchContainer({
  onSearch,
  onDateChange,
}: SearchContainerProps) {
  return (
    <section className={styles.container}>
      <SearchBar onSearch={onSearch} />
      <DateFilter onDateChange={onDateChange} />
    </section>
  );
}
