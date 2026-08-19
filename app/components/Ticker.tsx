import styles from './Ticker.module.css';

const PHRASES = [
  '🦆 $DINKY — small duck, big energy',
  '🚀 Buy on Solana',
  '💛 Real duck, real community',
  '⚡ Fast chain, faster duck',
  '🔥 We quack together, we moon together',
];

export default function Ticker() {
  // duplicated once for a seamless CSS-driven loop
  const items = [...PHRASES, ...PHRASES];

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((phrase, i) => (
          <span key={i}>{phrase}</span>
        ))}
      </div>
    </div>
  );
}
