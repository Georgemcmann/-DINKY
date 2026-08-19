import styles from './Community.module.css';

const SOCIALS = [
  {
    emoji: '✈️',
    name: 'Telegram',
    sub: '@babyduckdinky',
    href: 'https://t.me/babyduckdinky',
  },
  {
    emoji: '𝕏',
    name: 'Twitter / X',
    sub: '@ducklingdinky',
    href: 'https://x.com/ducklingdinky?s=20',
  },
  {
    emoji: '🎵',
    name: 'TikTok',
    sub: '@dawgsandducks',
    href: 'https://www.tiktok.com/@dawgsandducks',
  },
  {
    emoji: '📈',
    name: 'Chart',
    sub: 'Dexscreener',
    href: 'https://dexscreener.com/solana/3YNCESdqhSgvsD4aARHC4rdqXpjyW9CWjosH82hNpump',
  },
];

export default function Community() {
  return (
    <section id="community">
      <div className={styles.eyebrow}>We Quack Together</div>
      <h2>Join the flock</h2>
      <p className={styles.intro}>
        Every big community starts small. Get in early, hang out, and help push $DINKY where
        it&apos;s going.
      </p>
      <div className={styles.grid}>
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            className={styles.card}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.emoji}>{social.emoji}</span>
            <div>
              <div className={styles.name}>{social.name}</div>
              <div className={styles.sub}>{social.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
