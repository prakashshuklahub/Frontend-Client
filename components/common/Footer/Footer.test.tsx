import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";

describe("Footer", () => {
  it("renders contentinfo with year and labels", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    expect(screen.getByText(/imago/i)).toBeInTheDocument();
    expect(screen.getByText(/made in germany/i)).toBeInTheDocument();
  });
});
