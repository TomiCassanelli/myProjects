import { useMemo } from "react";
import type { Artwork } from "@/types/artwork";
import styles from "./ArtItem.module.css";

function buildImgUrl(image_id?: string | null) {
  if (!image_id) return null;
  return `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`;
}

export default function ArtItem({ artwork }: { artwork: Artwork }) {
  const imgUrl = useMemo(
    () => buildImgUrl(artwork.image_id),
    [artwork.image_id]
  );
  const description = artwork.description ?? "No hay descripción disponible.";

  return (
    <div className={styles.card}>
      {imgUrl ? (
        <img
          className={styles.cover}
          src={imgUrl}
          alt={artwork.title ?? "Artwork"}
        />
      ) : (
        <div className={`${styles.cover} ${styles.placeholder}`} />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{artwork.title ?? "Sin Título"}</h3>
        <p className={styles.description}>
          <strong>Origen:</strong> {artwork.place_of_origin ?? "Desconocido"}
        </p>

        <p className={styles.description}>
          <strong>Descripción:</strong> {description}
        </p>
      </div>
    </div>
  );
}
