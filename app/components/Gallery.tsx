import Image from 'next/image';
import styles from './Gallery.module.css';

const IMAGES = [
  { src: '/dinky1.png', alt: 'Dinky meme 1' },
  { src: '/dinky2.png', alt: 'Dinky meme 2' },
  { src: '/dinky3.png', alt: 'Dinky meme 3' },
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className={styles.eyebrow}>Gallery</div>
      <h2>Certified drip</h2>
      <div className={styles.grid}>
        {IMAGES.map((img) => (
          <div key={img.src} className={styles.frame}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              className={styles.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
