'use client';

import React, { useRef, useEffect } from 'react';
import styles from '../app/page.module.css';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <div className={styles.heroBg} aria-hidden="true">
      {/* Background overlay to ensure strong text readability */}
      <div className={styles.heroOverlay} />

      {/* HTML5 video using herovid.mp4 */}
      <video
        ref={videoRef}
        src="/herovid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={styles.heroVideoElement}
      />
    </div>
  );
}
