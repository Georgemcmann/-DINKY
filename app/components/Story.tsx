import styles from './Story.module.css';

const NICKNAMES = ['Dinky', 'Dink Dink', 'The Duckling', 'Small Duck Big Energy'];

export default function Story() {
  return (
    <section id="story">
      <div className={styles.eyebrow}>The Story</div>
      <h2>Meet the duck behind the ticker</h2>
      <p className={styles.body}>
        Before $DINKY was a token, Dinky was already famous — a duck with unmistakable
        main-character energy who turned heads all over TikTok. Sunglasses, snapback, gold
        chain: that&apos;s the vibe, and it&apos;s exactly what the community rallied around.
      </p>
      <p className={styles.body}>
        $DINKY brings that energy on-chain:{' '}
        <span className={styles.highlight}>small duck, big personality, bigger community.</span>
      </p>
      <div className={styles.nicknames}>
        {NICKNAMES.map((name) => (
          <div key={name} className={styles.pill}>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
