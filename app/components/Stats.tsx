import styles from './Stats.module.css';

const STATS = [
  { icon: '📱', num: 'Viral', label: 'on TikTok' },
  { icon: '🦆', num: '1', label: 'Unforgettable duck' },
  { icon: '⚡', num: 'Solana', label: 'fast chain, fast duck' },
  { icon: '💛', num: 'Real', label: 'community, real duck' },
];

export default function Stats() {
  return (
    <section id="stats" className={styles.stats}>
      {STATS.map((stat) => (
        <div key={stat.label} className={styles.card}>
          <div className={styles.icon}>{stat.icon}</div>
          <div className={styles.num}>{stat.num}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
