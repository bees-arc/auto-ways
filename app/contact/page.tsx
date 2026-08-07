import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Contact() {
  const contactCards = [
    {
      title: 'Call Us Directly',
      desc: 'Talk to our plant coordinators or fleet service agents.',
      value: '+94 71 419 386',
      href: 'tel:+9471419386',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      title: 'Email Communications',
      desc: 'Send us casing counts, fleet audits, or general inquiries.',
      value: 'info@autoways.lk',
      href: 'mailto:info@autoways.lk',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      title: 'Plant Headquarters',
      desc: 'Visit our main manufacturing facility and office.',
      value: 'Saliya Mawatha, Anuradhapura',
      href: 'https://maps.google.com/?q=Autoways+Private+Ltd,+Saliya+Mawatha,+Anuradhapura',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    }
  ];

  const locations = [
    { name: 'Anuradhapura HQ Plant', address: 'Autoways Private Ltd., Saliya Mawatha, Anuradhapura', tel: '+94 71 419 386' },
    { name: 'Kandy Plant & Office', address: 'Katugastota, Kandy', tel: '+94 71 419 386' },
    { name: 'Kuruwita Plant', address: 'Colombo Road, Kuruwita', tel: '+94 71 419 386' }
  ];

  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.pageBadge}>Connect</span>
          <h1 className={styles.pageTitle}>Get In Touch</h1>
          <p className={styles.pageSub}>Looking for reliable tyre retreading or fleet maintenance solutions? We are here to help.</p>
        </div>
      </section>

      {/* Grid: Contact Cards & Form */}
      <section className="section">
        <div className={styles.contactSectionBg}>
          <Image 
            src="/images/topography.png" 
            alt="Topography background" 
            fill 
            className={styles.topographyBg}
          />
        </div>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info Column */}
            <div className={styles.infoCol}>
              <div className={styles.cardsContainer}>
                {contactCards.map((card, idx) => (
                  <div key={idx} className={styles.contactCard}>
                    <div className={styles.cardIcon}>{card.icon}</div>
                    <div className={styles.cardText}>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                      <a href={card.href} target={idx === 2 ? '_blank' : '_self'} rel={idx === 2 ? 'noopener noreferrer' : ''}>
                        {card.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours Card */}
              <div className={styles.hoursCard}>
                <h3>Operational Hours</h3>
                <div className={styles.hoursRow}>
                  <span>Monday - Sunday</span>
                  <span>07.00 AM - 07.00 PM</span>
                </div>
                <p className={styles.hoursNote}>Our plants operate daily to ensure prompt turnaround times for commercial casing runs.</p>
              </div>
            </div>

            {/* Form Column */}
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <h2>Send Us A Message</h2>
                <p>Fill out the form below, and our technical sales team will reach out to you within 24 hours.</p>
              </div>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required className={styles.input} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject / Fleet Type</label>
                  <select id="subject" className={styles.select}>
                    <option value="general">General Inquiry</option>
                    <option value="retreading">Tyre Retreading Request</option>
                    <option value="repairs">Tyre Repairs Service</option>
                    <option value="fleet">Fleet Maintenance Agreement</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message / Casing Details</label>
                  <textarea id="message" rows={5} required className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* islandwide locations grid */}
      <section className={`${styles.locationsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.pageBadge}>Locations</span>
            <h2 className={styles.sectionTitleCentered}>Our Islandwide Plants</h2>
          </div>
          <div className={styles.locationsGrid}>
            {locations.map((loc, idx) => (
              <div key={idx} className={styles.locationCard}>
                <h3>{loc.name}</h3>
                <p className={styles.locAddress}>{loc.address}</p>
                <a href={`tel:${loc.tel.replace(/\s+/g, '')}`} className={styles.locPhone}>
                  Tel: {loc.tel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3853118247076!2d80.4042!3d8.3547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3cb16a41fdfcf939%3A0xe1047bc0a598415!2sAutoways%20Private%20Limited!5e0!3m2!1sen!2slk!4v1786000000000!5m2!1sen!2slk" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Autoways Headquarters Location Map"
          className={styles.mapIframe}
        ></iframe>
      </section>
    </div>
  );
}
