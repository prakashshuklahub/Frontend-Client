"use client";

import { useState } from "react";
import styles from "./DateFilter.module.scss";

export enum DateRange {
  ALL = "all",
  TODAY = "today",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
  LAST_5_YEARS = "last5years",
}

interface DateFilterProps {
  onDateChange: (range: DateRange) => void;
}

export default function DateFilter({ onDateChange }: DateFilterProps) {
  const [selectedRange, setSelectedRange] = useState<DateRange>(DateRange.ALL);

  const handleRangeChange = (range: DateRange) => {
    setSelectedRange(range);
    onDateChange(range);
  };

  return (
    <div className={styles.dateFilter}>
      <select
        value={selectedRange}
        onChange={(e) => handleRangeChange(e.target.value as DateRange)}
        className={styles.select}
      >
        <option value={DateRange.ALL}>All Time</option>
        <option value={DateRange.TODAY}>Today</option>
        <option value={DateRange.WEEK}>This Week</option>
        <option value={DateRange.MONTH}>This Month</option>
        <option value={DateRange.YEAR}>This Year</option>
        <option value={DateRange.LAST_5_YEARS}>Last 5 Years</option>
      </select>
    </div>
  );
}
