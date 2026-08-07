'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button 
              className={styles.trigger} 
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.icon}>
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </button>
            <div 
              className={styles.contentWrapper}
              style={{
                maxHeight: isOpen ? '300px' : '0',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className={styles.content}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
