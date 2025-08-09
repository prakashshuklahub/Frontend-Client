import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SearchContainer from "./SearchContainer";

describe("SearchContainer", () => {
  it("renders SearchBar and DateFilter", () => {
    const onSearch = vi.fn();
    const onDateChange = vi.fn();

    render(<SearchContainer onSearch={onSearch} onDateChange={onDateChange} />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
