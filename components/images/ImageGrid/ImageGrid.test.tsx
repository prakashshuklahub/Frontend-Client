import { render, screen } from "@testing-library/react";
import ImageGrid from "./ImageGrid";
import type { ImageType } from "@/types/media";
import { vi } from "vitest";

// Mock Next/Image used in ImageCard to avoid DOM warnings
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Minimal stub for ImageGridSkeleton so we can assert loading state
vi.mock("./ImageGridSkeleton", () => ({
  __esModule: true,
  default: () => <div>Skeleton</div>,
}));

const makeImage = (id: string): ImageType => ({
  id,
  score: 1,
  bildnummer: id,
  datum: new Date().toISOString(),
  suchtext: `Alt ${id}`,
  fotografen: "Photographer",
  db: "stock",
  url: "https://www.imago-images.de/bild/stock/0794188172/s.jpg",
  createdAt: new Date().toISOString(),
});

describe("ImageGrid", () => {
  it("shows skeleton when loading", () => {
    render(<ImageGrid images={[]} isLoading />);
    expect(screen.getByText(/skeleton/i)).toBeInTheDocument();
  });

  it("shows empty state when no images", () => {
    render(<ImageGrid images={[]} />);
    expect(screen.getByText(/no images found/i)).toBeInTheDocument();
  });

  it("shows error state when isError", () => {
    // Provide a non-empty images array so the error branch is reached
    render(<ImageGrid images={[makeImage("1")]} isError />);
    expect(screen.getByText(/error loading images/i)).toBeInTheDocument();
  });

  it("renders list items equal to images length", () => {
    const images = [makeImage("1"), makeImage("2"), makeImage("3")];
    render(<ImageGrid images={images} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(images.length);
  });
});
