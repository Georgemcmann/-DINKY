'use client';

import { useState } from 'react';
import styles from './CopyBox.module.css';

const CONTRACT_ADDRESS = '3YNCESdqhSgvsD4aARHC4rdqXpjyW9CWjosH82hNpump';

export default function CopyBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy contract address', err);
    }
  };

  return (
    <div className={styles.caBox} onClick={handleCopy} title="Click to copy" role="button" tabIndex={0}>
      <span className={styles.label}>CA</span>
      <span className={styles.caText}>{CONTRACT_ADDRESS}</span>
      <span className={styles.copyIcon}>{copied ? '✅' : '📋'}</span>
    </div>
  );
}
