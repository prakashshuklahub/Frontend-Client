import styles from "./ImageGridSkeleton.module.scss";

export default function ImageGridSkeleton() {
  return (
    <ul className={styles.grid} aria-label="Loading images">
      {Array.from({ length: 30 }).map((_, index) => (
        <li key={index} className={styles.skeleton}>
          <div className={styles.skeletonImage} aria-hidden="true"></div>
          <div className={styles.skeletonContent} aria-hidden="true">
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLineShort}></div>
            <div className={styles.skeletonLineShort}></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
