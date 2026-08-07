import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Accordion from '@/components/Accordion';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function Home() {
  const stats = [
    { label: 'Years Experience', value: '34' },
    { label: 'Tyres Retreaded', value: '100K+' },
    { label: 'Professional Staff', value: '50+' },
    { label: 'Satisfied Clients', value: '12,000+' }
  ];

  const services = [
    {
      title: 'Tyre Retreading',
      desc: 'Extend tyre life with advanced hot & cold retreading solutions.',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      title: 'Tyre Repairs',
      desc: 'Reliable puncture fixes and sidewall repairs for all tyre types.',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.76z"></path>
        </svg>
      )
    },
    {
      title: 'Tread Manufacturing',
      desc: 'Precision-built tread liners for durability and performance.',
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
      title: 'Fleet Maintenance',
      desc: 'Comprehensive tyre care plans for logistics & construction fleets.',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2m12 0c0 1.7-1.3 3-3 3s-3-1.3-3-3m6 0c0-1.7-1.3-3-3-3s-3 1.3-3 3m0 0H9m0 0c0 1.7-1.3 3-3 3s-3-1.3-3-3m3 0V9"></path>
        </svg>
      )
    },
    {
      title: 'Quality Inspection',
      desc: 'Rigorous testing and inspection for every retreaded unit.',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      title: 'Eco-Friendly Recycling',
      desc: 'We responsibly recycle used tyres and reduce landfill waste.',
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
      desc: 'We thoroughly examine each tyre’s casing condition using shearography and pressure tests to ensure it is fit for the retreading process.'
    },
    {
      step: '02',
      title: 'Material Preparation',
      desc: 'We formulate our own premium cushion gum in-house and select the ideal precured tread patterns tailored for your vehicles’ operation.'
    },
    {
      step: '03',
      title: 'Retreading Line',
      desc: 'Tyres go through our state-of-the-art hot or cold retreading line, bonding the new tread casing with high pressure and precise temperatures.'
    },
    {
      step: '04',
      title: 'Quality & Delivery',
      desc: 'Every unit undergoes final inflation testing, surface inspection, and is logged before prompt distribution by our dedicated transport fleet.'
    }
  ];

  const team = [
    {
      name: 'Danika Senarathne',
      role: 'Chief Executive Officer',
      avatar: '/images/ceo_avatar.png'
    },
    {
      name: 'Danika Senarathne',
      role: 'Head of Product & R&D',
      avatar: '/images/rd_avatar.png'
    },
    {
      name: 'Danika Senarathne',
      role: 'Head of IT & Software',
      avatar: '/images/it_avatar.png'
    },
    {
      name: 'Danika Senarathne',
      role: 'Lead Systems Engineer',
      avatar: '/images/engineer_avatar.png'
    }
  ];

  const testimonials = [
    {
      quote: "Autoways helped us extend the life of our fleet’s tyres while saving over 40% in costs. Their service is top-notch and turnaround time is excellent. Highly recommended.",
      name: "Nuwan Perera",
      role: "Fleet Manager",
      company: "TransExpress Logistics",
      avatar: "/images/portrait-man-with-smart-glasses-looks-at-the-camer-DNPM49X.jpg"
    },
    {
      quote: "The quality of their tread liners matches new tyres. Our heavy construction equipment runs on Autoways retreads with absolutely no safety issues or down-time.",
      name: "S. K. Alwis",
      role: "Operations Director",
      company: "Lanka Road Builders",
      avatar: "/images/portrait-9GRRCKT.jpg"
    }
  ];

  const faqs = [
    {
      question: "How do I request tyre retreading services from Autoways?",
      answer: "Simply contact us via phone or email, and our team will assess your tyre type, casing condition, and quantity before scheduling pickup by our logistics fleet or delivery to our Anuradhapura, Kandy, or Kuruwita plant."
    },
    {
      question: "What services does Autoways offer?",
      answer: "Autoways specializes in hot-cure and cold-cure tyre retreading, specialized heavy tyre repairs, precured tread manufacturing, cushion gum formulation, and fleet maintenance contracts."
    },
    {
      question: "Why choose tyre retreading over buying new tyres?",
      answer: "Tyre retreading is a cost-effective and environmentally friendly option. It saves up to 40% to 50% compared to new premium tyres while using 70% less oil during production, significantly reducing tyre landfill waste."
    },
    {
      question: "What makes Autoways different from other tyre service providers?",
      answer: "Founded in 1991, we have over three decades of engineering expertise. We do not outsource our retreading bands, and we formulate our own cushion gum in-house, giving us full quality control over bonding strength."
    },
    {
      question: "Are retreaded tyres safe for heavy-duty and long-distance use?",
      answer: "Absolutely. Our retreaded tyres undergo strict inspection, case buffing, casing building, and curing processes that meet international safety standards. Our tyres are trusted daily by the Sri Lanka Transport Board (SLTB) and major logistics operators."
    }
  ];

  return (
    <div className={styles.wrapper}>
      {/* 1. HERO SECTION (Full screen background image) */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/callum-shaw-GW_eq3cFFk8-unsplash-rotated-1.jpg" 
            alt="Autoways Tyre Retreading Hero background"
            fill
            priority
            quality={90}
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContentContainer}>
          <div className={styles.heroTextContent}>
            <span className={styles.heroTagline}>Sri Lanka’s Trusted Tyre Retreading Partner</span>
            <h1 className={styles.heroTitle}>Retreading Tyres,<br />Restoring the Future</h1>
            <p className={styles.heroSub}>
              Delivering eco-friendly, cost-effective tyre retreading and tread manufacturing solutions for the transport, agriculture, and construction sectors since 1991.
            </p>
            <div className={styles.heroActions}>
              <Link href="/services" className={styles.heroPrimaryBtn}>
                Get Started
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link href="/about" className={styles.heroSecondaryBtn}>
                <span className={styles.playIcon}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </span>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <h3 className={styles.statValue}>{stat.value}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER SECTION */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutTextCol}>
              <span className={styles.sectionBadge}>About Autoways</span>
              <h2 className={styles.sectionTitle}>High-Performance Tyre Solutions for a Greener Future</h2>
              <p className={styles.aboutLead}>
                At Autoways Private Limited, we specialize in sustainable tyre retreading and rebuilding solutions for logistics, construction, and agricultural industries.
              </p>
              <p className={styles.aboutBody}>
                With state-of-the-art plants across Sri Lanka, we bring unmatched durability, cost-efficiency, and environmental responsibility to every kilometre you drive. Our unique in-house tread manufacturing and formulated cushion gum provide double the bonding strength, safeguarding your fleet.
              </p>
              <Link href="/about" className={styles.aboutBtn}>
                Learn More
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <div className={styles.aboutImageCol}>
              <div className={styles.aboutImageGrid}>
                <div className={styles.gridImageWrapper1}>
                  <Image 
                    src="/images/WhatsApp-Image-2025-06-15-at-1.08.29-AM.jpeg" 
                    alt="Autoways Tyres Stack" 
                    width={320} 
                    height={220}
                    className={styles.gridImage}
                  />
                </div>
                <div className={styles.gridImageWrapper2}>
                  <Image 
                    src="/images/unnamed-file.jpeg" 
                    alt="Retreaded Tyres" 
                    width={220} 
                    height={280}
                    className={styles.gridImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID SECTION */}
      <section className={`${styles.servicesSection} section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionBadge}>Our Services</span>
            <h2 className={styles.sectionTitleCentered}>We Craft What Your Fleet Demands</h2>
            <p className={styles.sectionSubtitle}>
              We deliver engineered retreading and inspection solutions to maximize safety and reduce fuel and casing waste.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <Link href="/services" className={styles.serviceLink}>
                  Read More
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 WHY CHOOSE US SECTION */}
      <section className="section">
        <div className="container">
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseImageCol}>
              <div className={styles.whyChooseImageContainer}>
                <Image 
                  src="/images/WhatsApp-Image-2025-06-15-at-1.08.28-AM.jpeg" 
                  alt="Autoways Buffer Machinery" 
                  width={500} 
                  height={380}
                  className={styles.whyChooseImage}
                />
                <div className={styles.whyChooseImageBadge}>
                  <span>ISO 9001 Certified</span>
                </div>
              </div>
            </div>
            
            <div className={styles.whyChooseTextCol}>
              <span className={styles.sectionBadge}>Why Choose Us</span>
              <h2 className={styles.sectionTitle}>Reliable Tyre Solutions for Every Road</h2>
              <div className={styles.whyChooseItems}>
                <div className={styles.whyChooseItem}>
                  <h4>Years Experience</h4>
                  <p>Backed by decades of industry expertise in tyre retreading, specialized heavy repairs, and fleet support.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h4>Skilled Professionals</h4>
                  <p>Trained factory teams using cutting-edge tools and in-house formulated cushion gum to ensure top-quality bonding.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h4>Competitive Pricing</h4>
                  <p>High performance, casing durability, and environmental sustainability without stretching your logistics budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionBadge}>Our Process</span>
            <h2 className={styles.sectionTitleCentered}>We Retread with Precision and Purpose</h2>
            <p className={styles.sectionSubtitle}>
              Our quality assurance framework guarantees each casing undergoes a strict restoration cycle.
            </p>
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

      {/* 6. ACTION BANNER */}
      <section className={styles.actionBanner}>
        <div className={styles.actionBannerBg}>
          <Image 
            src="/images/WhatsApp-Image-2025-06-15-at-1.08.27-AM.jpeg" 
            alt="Autoways Manufacturing Line" 
            fill 
            className={styles.actionBgImage}
          />
          <div className={styles.actionOverlay}></div>
        </div>
        <div className={styles.actionContent}>
          <h2>Delivering Excellence in Tyre Retreading & Fleet Solutions</h2>
          <p>We combine innovation, reliability, and sustainability to extend the life of your tyres and the strength of your fleet.</p>
          <Link href="/contact" className={styles.actionBtn}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* 7. TEAM SECTION */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionBadge}>Our Leaders</span>
            <h2 className={styles.sectionTitleCentered}>Meet the People Driving Our Innovation</h2>
            <p className={styles.sectionSubtitle}>
              Our experienced leadership team is dedicated to safety, high-performance materials, and logistics efficiency.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <div className={styles.teamAvatarWrapper}>
                  <Image 
                    src={member.avatar} 
                    alt={member.name} 
                    fill 
                    className={styles.teamAvatar}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className={`${styles.testimonialsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionBadge}>Client Reviews</span>
            <h2 className={styles.sectionTitleCentered}>Trusted by 12,000+ Clients</h2>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* 8.5 CLIENT LOGOS SECTION */}
      <section className={`${styles.clientsSection} section`}>
        <div className="container">
          <div className={styles.clientsSlider}>
            <div className={styles.clientsTrack}>
              {[2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className={styles.clientLogoWrapper}>
                  <Image
                    src={`/images/client_${num}.png`}
                    alt={`Autoways Client ${num}`}
                    width={180}
                    height={72}
                    className={styles.clientLogo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs SECTION */}
      <section className="section">
        <div className="container">
          <div className={styles.faqHeader}>
            <span className={styles.sectionBadge}>FAQ</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqGrid}>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 10. QUICK CONTACT FORM */}
      <section className={`${styles.contactSection} section`}>
        <div className={styles.contactSectionBg}>
          <Image 
            src="/images/topography.png" 
            alt="topographical background" 
            fill 
            className={styles.topographyBg}
          />
        </div>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfoCol}>
              <span className={styles.sectionBadge}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>Looking for reliable tyre retreading?</h2>
              <p className={styles.contactText}>
                We are here to help your fleet run safely, sustainably, and cost-effectively. Send us a message and our technical sales team will contact you shortly.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <strong>Plant Headquarters</strong>
                  <p>Autoways Private Ltd., Saliya Mawatha, Anuradhapura, Sri Lanka</p>
                </div>
                <div className={styles.detailItem}>
                  <strong>General Inquiries</strong>
                  <p>Email: <a href="mailto:info@autoways.lk">info@autoways.lk</a></p>
                  <p>Phone: <a href="tel:+9471419386">+94 71 4193 86</a></p>
                </div>
              </div>
            </div>

            <div className={styles.contactFormCol}>
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
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea id="message" rows={4} required className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
