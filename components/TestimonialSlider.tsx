'use client';

import React, { useState, useEffect } from 'react';
import styles from './TestimonialSlider.module.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Auto slide every 6 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        {testimonials.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div 
              key={index} 
              className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
              style={{
                display: isActive ? 'block' : 'none'
              }}
            >
              <div className={styles.quoteWrapper}>
                <span className={styles.quoteIcon}>“</span>
                <p className={styles.quoteText}>{item.quote}</p>
              </div>
              <div className={styles.authorInfo}>
                <div className={styles.avatarWrapper} aria-hidden="true">
                  <svg 
                    viewBox="0 0 24 24" 
                    className={styles.profileIcon}
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.meta}>
                  <h4 className={styles.name}>{item.name}</h4>
                  <p className={styles.role}>{item.role}, <span className={styles.company}>{item.company}</span></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.indicators}>
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
