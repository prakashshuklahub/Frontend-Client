import { useState } from "react";
import styles from "./SearchBar.module.scss";
import Button from "../../ui/Button/Button";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={styles.searchInput}
        aria-label="Search images"
      />
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
}
