import Header from "@/shared/Header";
import { useArtworks } from "@/hooks/useArtworks";
import ArtItem from "./components/ArtItem";
import Spinner from "./components/Spinner";
import styles from "./ServiceHttp.module.css";

export default function ServiceHttp() {
  const { artworks, loading, error, page, maxPages, nextPage, prevPage } =
    useArtworks();

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.title}>Obras de Arte</h2>

        <div className={styles.content}>
          {loading && <Spinner />}
          {error && <p className={styles.error}>{error}</p>}
          {!loading && !error && (
            <div className={styles.grid}>
              {artworks.map((a) => (
                <ArtItem key={a.id} artwork={a} />
              ))}
            </div>
          )}
        </div>

        <div className={styles.controls}>
          <button className="btn" onClick={prevPage} disabled={page <= 1}>
            Anterior
          </button>
          <span>
            Página {page} / {maxPages}
          </span>
          <button
            className="btn"
            onClick={nextPage}
            disabled={page >= maxPages}
          >
            Siguiente
          </button>
        </div>
      </main>
    </>
  );
}
