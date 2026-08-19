'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#story', label: 'Story' },
  { href: '#stats', label: 'Stats' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#community', label: 'Community' },
];

const BUY_URL = 'https://dexscreener.com/solana/3YNCESdqhSgvsD4aARHC4rdqXpjyW9CWjosH82hNpump';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.logo} display`}>
        <Image src="/Dinky.png" alt="$DINKY logo" width={42} height={42} className={styles.logoImg} />
        $DINKY
      </div>

      <div className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className={styles.ctaMobile} href={BUY_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          Buy $DINKY
        </a>
      </div>

      <div className={styles.actions}>
        <a className={styles.cta} href={BUY_URL} target="_blank" rel="noopener noreferrer">
          Buy $DINKY
        </a>
        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
        </button>
      </div>
    </nav>
  );
}
