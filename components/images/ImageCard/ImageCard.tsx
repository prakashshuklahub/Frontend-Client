// components/images/ImageCard.jsx
import Image from "next/image";
import styles from "./ImageCard.module.scss";
import { ImageType } from "@/types/media";

interface ImageCardProps {
  image: ImageType;
  index: number;
}

const ImageCard = ({ image, index }: ImageCardProps) => {
  return (
    <article className={styles.imageCard}>
      <figure className={styles.imageContainer}>
        <Image
          src={image.url}
          alt={image.suchtext}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 12}
          loading={index < 12 ? "eager" : "lazy"}
        />
      </figure>
    </article>
  );
};

export default ImageCard;
