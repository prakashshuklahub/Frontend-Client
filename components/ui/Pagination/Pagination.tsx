import React from "react";
import styles from "./Pagination.module.scss";
import Button from "../Button/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const isPreviousDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <Button
        variant="primary"
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
        className={styles.paginationButton}
        aria-label={`Go to page ${currentPage - 1}`}
      >
        <span className={styles.arrow}>
          <FaArrowLeft />
        </span>
        <span className={styles.buttonText}>Previous</span>
      </Button>

      <div className={styles.pageInfo} aria-current="page">
        <span className={styles.currentPage}>{currentPage}</span>
        <span className={styles.pageSeparator}>of</span>
        <span className={styles.totalPages}>{totalPages}</span>
      </div>

      <Button
        variant="primary"
        onClick={handleNext}
        disabled={isNextDisabled}
        className={styles.paginationButton}
        aria-label={`Go to page ${currentPage + 1}`}
      >
        <span className={styles.buttonText}>Next</span>
        <span className={styles.arrow}>
          <FaArrowRight />
        </span>
      </Button>
    </nav>
  );
};

export default Pagination;
