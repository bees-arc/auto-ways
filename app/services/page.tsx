import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Accordion from '@/components/Accordion';

export default function Services() {
  const services = [
    {
      title: 'Tyre Retreading',
      desc: 'Extend tyre casing lifespan using advanced hot-cure (mold cure) and cold-cure (precured) retreading lines. Perfect for commercial transport, heavy haulage, logistics, and container fleets.',
      details: [
        'Hot-cure retreading for high-stress agricultural & heavy equipment',
        'Cold-cure retreading using premium precured tread bands',
        'ISO-certified procedures protecting casing integrity',
        'Extends tyre lifecycle up to 2-3 additional runs'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      title: 'Specialized Tyre Repairs',
      desc: 'Expert puncture repairs and sidewall structural reinforcements. Our technicians restore minor to major damage in agricultural, OTR (Off-The-Road), and heavy truck tyres.',
      details: [
        'Advanced chemical vulcanization bonding',
        'Reinforcement of damaged steel belts and bead wire repairs',
        'Sidewall patch reinforcing for construction equipment',
        'Saves expensive tractor and construction casing costs'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.76z"></path>
        </svg>
      )
    },
    {
      title: 'Tread Manufacturing',
      desc: 'Precision-manufactured precured tread liners and cushion gum formulated in-house. We run dedicated compounding lines ensuring high wear-resistance and maximum tread wear efficiency.',
      details: [
        'In-house cushion gum formulation for extreme bonding strength',
        'Compounded rubber liners designed for local tropical roads',
        'Precision tread pattern molds optimized for fuel efficiency',
        'Rigorous laboratory compound elasticity tests'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="10" y1="6" x2="10.01" y2="6"></line>
          <line x1="14" y1="6" x2="14.01" y2="6"></line>
          <line x1="18" y1="6" x2="18.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
          <line x1="10" y1="18" x2="10.01" y2="18"></line>
          <line x1="14" y1="18" x2="14.01" y2="18"></line>
          <line x1="18" y1="18" x2="18.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Fleet Tyre Management',
      desc: 'Structured tyre maintenance agreements for heavy logistics and passenger transport fleets. We perform casing audits, pressure management, and periodic rotation schedules.',
      details: [
        'Monthly casing integrity checks & wear logging',
        'Scheduled casing extraction before wire exposal',
        'On-site pressure auditing to minimize fuel consumption',
        'Detailed cost-per-kilometre savings reports'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2m12 0c0 1.7-1.3 3-3 3s-3-1.3-3-3m6 0c0-1.7-1.3-3-3-3s-3 1.3-3 3m0 0H9m0 0c0 1.7-1.3 3-3 3s-3-1.3-3-3m3 0V9"></path>
        </svg>
      )
    },
    {
      title: 'Quality & casing Inspection',
      desc: 'Multi-stage quality assurance procedures utilizing casing inspection tools. We guarantee that every retreaded tyre leaving our plant meets high safety and load criteria.',
      details: [
        'Shearography casing inspection detecting hidden air pockets',
        'Initial casing inflation testing under double operational pressure',
        'Precision casing buffing ensuring radial balance',
        'Final surface mapping and load rating stamps'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      title: 'Eco-Friendly Casing Recycling',
      desc: 'Responsible disposal and recycling of unretreadable tyre casings. We process rejected casings into rubber crumbs and support sustainable green infrastructure initiatives.',
      details: [
        'Eco-conscious shredding and steel belt extraction',
        'Supports green playground paving and tile manufacturing',
        'Reduces tyre landfill piles and mosquito breeding sites',
        'Official certificate of eco-compliant recycling'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Inspect & Assess',
      desc: 'We examine each casing’s wire integrity and side walls using advanced pressure and visual tests before clear selection.'
    },
    {
      step: '02',
      title: 'Material Preparation',
      desc: 'We formulate the cushion gum and choose specific tread depths based on operation profiles.'
    },
    {
      step: '03',
      title: 'Retreading Line',
      desc: 'Casing building and curing under precise pressures and hot or cold temperature profiles.'
    },
    {
      step: '04',
      title: 'Quality Check & Delivery',
      desc: 'Inflation testing and load rating certification before log entry and shipping.'
    }
  ];

  const faqs = [
    {
      question: "How do I request tyre retreading services from Autoways?",
      answer: "Simply contact us via phone or email, and our team will assess your tyre type, casing condition, and quantity before scheduling pickup by our logistics fleet or delivery to our Anuradhapura, Kandy, or Kuruwita plant."
    },
    {
      question: "Why choose tyre retreading over buying new tyres?",
      answer: "Tyre retreading is a cost-effective and environmentally friendly option. It saves up to 40% to 50% compared to new premium tyres while using 70% less oil during production, significantly reducing tyre landfill waste."
    },
    {
      question: "Are retreaded tyres safe for heavy-duty and long-distance use?",
      answer: "Absolutely. Our retreaded tyres undergo strict inspection, case buffing, casing building, and curing processes that meet international safety standards. Our tyres are trusted daily by the Sri Lanka Transport Board (SLTB) and major logistics operators."
    }
  ];

  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.pageBadge}>Services</span>
          <h1 className={styles.pageTitle}>Our Technical Solutions</h1>
          <p className={styles.pageSub}>We deliver engineered retreading and inspection solutions to maximize safety and reduce fuel and casing waste.</p>
        </div>
      </section>

      {/* Main Services detailed list */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesDetailedGrid}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                </div>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <div className={styles.bulletListWrapper}>
                  <h4>Key Features:</h4>
                  <ul className={styles.bulletList}>
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process section */}
      <section className={`${styles.processSection} section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.pageBadge}>Engineering</span>
            <h2 className={styles.sectionTitleCentered}>We Retread with Precision and Purpose</h2>
            <p className={styles.sectionSubtitle}>Each casing undergoes a strict restoration cycle to meet high standards.</p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, idx) => (
              <div key={idx} className={styles.processCard}>
                <div className={styles.processStep}>{step.step}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section">
        <div className="container">
          <div className={styles.faqHeader}>
            <span className={styles.pageBadge}>FAQ</span>
            <h2 className={styles.sectionTitle}>Service FAQs</h2>
          </div>
          <div className={styles.faqGrid}>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA CTA */}
      <section className={`${styles.ctaSection} section`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to extend your fleet's tyre lifecycle?</h2>
            <p>Get in touch with our technical team today to schedule casing inspections and secure fleet management plans.</p>
            <Link href="/contact" className={styles.ctaBtn}>
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
