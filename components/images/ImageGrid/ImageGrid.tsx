import ImageCard from "../ImageCard/ImageCard";
import { FaCamera } from "react-icons/fa";
import styles from "./ImageGrid.module.scss";
import { ImageType } from "@/types/media";
import ImageGridSkeleton from "./ImageGridSkeleton";

interface ImageGridProps {
  images: ImageType[];
  isLoading?: boolean;
  isError?: boolean;
}

const ImageGrid = ({
  images = [],
  isLoading = false,
  isError = false,
}: ImageGridProps) => {
  if (isLoading) {
    return <ImageGridSkeleton />;
  }

  if (!images || images.length === 0) {
    return (
      <section className={styles.emptyState}>
        <FaCamera className={styles.emptyIcon} />
        <h3>No images found</h3>
        <p>Try adjusting your search terms or filters</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={styles.emptyState}>
        <FaCamera className={styles.emptyIcon} />
        <h3>Error loading images</h3>
        <p>Please try again later</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <ul className={styles.grid}>
        {images.map((image, index) => (
          <li key={image.id}>
            <ImageCard image={image} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImageGrid;
