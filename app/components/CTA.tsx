import styles from './CTA.module.css';

type CTAProps = {
  href: string;
  variant?: 'primary' | 'outline';
  external?: boolean;
  children: React.ReactNode;
};

export default function CTA({ href, variant = 'primary', external = true, children }: CTAProps) {
  return (
    <a
      className={`${styles.btn} ${variant === 'primary' ? styles.btnPrimary : styles.btnOutline}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
