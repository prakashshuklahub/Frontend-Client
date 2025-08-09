import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Pagination from "./Pagination";

const makeProps = (
  overrides: Partial<React.ComponentProps<typeof Pagination>> = {}
) => ({
  currentPage: 2,
  totalPages: 5,
  onPageChange: vi.fn(),
  totalItems: 50,
  itemsPerPage: 10,
  ...overrides,
});

describe("Pagination", () => {
  it("renders current and total pages", () => {
    render(<Pagination {...makeProps()} />);
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("goes to next page when Next is clicked", async () => {
    const onPageChange = vi.fn();
    render(<Pagination {...makeProps({ onPageChange })} />);
    await userEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("goes to previous page when Previous is clicked", async () => {
    const onPageChange = vi.fn();
    render(<Pagination {...makeProps({ onPageChange })} />);
    await userEvent.click(screen.getByRole("button", { name: /previous/i }));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});
