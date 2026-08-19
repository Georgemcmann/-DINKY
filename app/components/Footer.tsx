import styles from './Footer.module.css';
import CopyBox from './CopyBox';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>© 2026 $DINKY · Small Duck, Big Energy 🦆🚀</div>
      <div className={styles.copyWrap}>
        <CopyBox />
      </div>
    </footer>
  );
}
