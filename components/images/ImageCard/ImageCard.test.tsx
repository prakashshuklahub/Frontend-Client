import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ImageCard from "./ImageCard";
import type { ImageType } from "@/types/media";

// Mock Next/Image to a plain img for testing
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

const sampleImage: ImageType = {
  id: "1",
  score: 1,
  bildnummer: "000",
  datum: new Date().toISOString(),
  suchtext: "Sample alt",
  fotografen: "Photographer",
  db: "stock",
  url: "https://www.imago-images.de/bild/stock/0794188172/s.jpg",
  createdAt: new Date().toISOString(),
};

describe("ImageCard", () => {
  it("renders the image with alt text", () => {
    render(<ImageCard image={sampleImage} index={0} />);
    expect(
      screen.getByRole("img", { name: /sample alt/i })
    ).toBeInTheDocument();
  });
});
