import Image from 'next/image';
import styles from './Hero.module.css';
import CTA from './CTA';
import CopyBox from './CopyBox';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <div className={styles.eyebrow}>
          <span className={styles.dot}></span> LIVE ON SOLANA · VIRAL ON TIKTOK
        </div>
        <h1 className={`${styles.h1} display`}>
          Small Duck.
          <br />
          <span className={styles.gold}>Big Energy.</span>
        </h1>
        <p className={styles.sub}>
          Dinky blew up on TikTok being exactly, unapologetically himself. Now he&apos;s on-chain.
          Sunglasses on, chain out, straight to the moon. 🦆🚀
        </p>
        <div className={styles.btns}>
          <CTA
            href="https://dexscreener.com/solana/3YNCESdqhSgvsD4aARHC4rdqXpjyW9CWjosH82hNpump"
            variant="primary"
          >
            🚀 Buy $DINKY
          </CTA>
          <CTA href="https://t.me/babyduckdinky" variant="outline">
            ✈️ Join Telegram
          </CTA>
        </div>
        <CopyBox />
      </div>
      <div className={styles.imgWrap}>
        <Image
          src="/Dinky.png"
          alt="Dinky the Duck mascot"
          width={420}
          height={420}
          sizes="(max-width: 600px) 70vw, (max-width: 900px) 45vw, 420px"
          className={styles.img}
          priority
        />
      </div>
    </section>
  );
}
