'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Company Column */}
        <div className={styles.colCompany}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/images/Group-5.svg" 
              alt="Autoways Logo" 
              width={140} 
              height={32} 
              className={styles.logo}
            />
          </Link>
          <p className={styles.description}>
            Sri Lanka’s trusted leader in sustainable tyre retreading and repair services. Extending tyre life with precision, safety, and eco-responsibility.
          </p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/autoways.lk" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/autoways.lk/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/autowayslk" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className={styles.colLinks}>
          <h3 className={styles.colTitle}>Menu</h3>
          <ul className={styles.linksList}>
            <li><Link href="/" className={styles.footerLink}>Home</Link></li>
            <li><Link href="/about" className={styles.footerLink}>About</Link></li>
            <li><Link href="/services" className={styles.footerLink}>Services</Link></li>
            <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className={styles.colContact}>
          <h3 className={styles.colTitle}>Contact</h3>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Phone:</span>
              <a href="tel:+9471419386" className={styles.contactValue}>+94 71 419 386</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Email:</span>
              <a href="mailto:info@autoways.lk" className={styles.contactValue}>info@autoways.lk</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Address:</span>
              <span className={styles.contactValue}>Autoways Private Ltd., Saliya Mawatha, Anuradhapura, Sri Lanka</span>
            </li>
            <li>
              <span className={styles.contactLabel}>Hours:</span>
              <span className={styles.contactValue}>07.00 AM - 19.00 PM (Daily)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            &copy; {currentYear} Autoways Private Limited. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.bottomLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
