import { BrandLoading } from '@lobehub/ui/brand';

import styles from './index.module.css';

interface BrandTextLoadingProps {
  debugId: string;
}

// Custom ASAI text component that mimics BrandLoading text style
const AsaiText = () => (
  <svg
    fill="currentColor"
    height="24"
    style={{ flex: 'none' }}
    viewBox="0 0 120 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      dominantBaseline="central"
      fill="currentColor"
      fontFamily="'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
      fontSize="32"
      fontWeight="700"
      letterSpacing="3"
      textAnchor="middle"
      x="60"
      y="22"
    >
      ASAI
    </text>
  </svg>
);

const BrandTextLoading = ({ debugId }: BrandTextLoadingProps) => {
  const showDebug = process.env.NODE_ENV === 'development' && debugId;

  return (
    <div className={styles.container}>
      <div aria-label="Loading" className={styles.brand} role="status">
        <BrandLoading size={40} text={AsaiText} />
      </div>
      {showDebug && (
        <div className={styles.debug}>
          <div className={styles.debugRow}>
            <code>Debug ID:</code>
            <span className={styles.debugTag}>
              <code>{debugId}</code>
            </span>
          </div>
          <div className={styles.debugHint}>only visible in development</div>
        </div>
      )}
    </div>
  );
};

export default BrandTextLoading;
