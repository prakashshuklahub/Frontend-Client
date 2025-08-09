import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateFilter, { DateRange } from "./DateFilter";
import { vi } from "vitest";

describe("DateFilter", () => {
  it("renders all dropdown options and changes value", async () => {
    const onDateChange = vi.fn();
    render(<DateFilter onDateChange={onDateChange} />);

    const select = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(6);
    expect(screen.getByRole("option", { name: /all time/i })).toBeInTheDocument();

    await userEvent.selectOptions(select, DateRange.TODAY);
    expect(onDateChange).toHaveBeenCalledWith(DateRange.TODAY);
  });
});

