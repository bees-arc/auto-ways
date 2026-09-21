import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function About() {

  const testimonials = [
    {
      quote: "Autoways helped us extend the life of our fleet’s tyres while saving over 40% in costs. Their service is top-notch and turnaround time is excellent. Highly recommended.",
      name: "Nuwan Perera",
      role: "Fleet Manager",
      company: "TransExpress Logistics",
      avatar: "/images/portrait-man-with-smart-glasses-looks-at-the-camer-DNPM49X.jpg"
    },
    {
      quote: "We have worked with Autoways for over a decade. Their commitment to safety and casing longevity has made them our go-to tyre rebuilding partner across the island.",
      name: "W. M. Bandara",
      role: "Senior Depot Engineer",
      company: "Sri Lanka Transport Board (SLTB)",
      avatar: "/images/portrait-9GRRCKT.jpg"
    }
  ];

  const coreValues = [
    {
      title: 'Our Vision',
      desc: 'To lead the tyre retreading industry with sustainable, cost-effective solutions that keep Sri Lanka moving safely and efficiently.',
      color: '#be1b23'
    },
    {
      title: 'Our Mission',
      desc: 'To deliver premium retreaded tyres and repair services through innovation, quality assurance, and eco-conscious operations across all sectors.',
      color: '#222222'
    },
    {
      title: 'Our Goals',
      desc: 'Expand nationwide service coverage, reduce environmental impact through recycling, and become the trusted partner for fleet operators in logistics and construction.',
      color: '#adb5bd'
    }
  ];

  const plants = [
    { name: 'Anuradhapura Plant', role: 'Headquarters & Hot-Cure Line', location: 'Saliya Mawatha, Anuradhapura' },
    { name: 'Kandy Plant', role: 'Cold-Cure & Tread Line', location: 'Katugastota, Kandy' },
    { name: 'Kuruwita Plant', role: 'Specialized Repair & Inspection', location: 'Colombo Road, Kuruwita' }
  ];

  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.pageHeaderLayout}>
            {/* Left side: Favicon Emblem Logo */}
            <div className={styles.pageHeaderLogoCol}>
              <div className={styles.pageHeaderLogoWrapper}>
                <Image
                  src="/favicon.svg"
                  alt="Autoways Logo Emblem"
                  width={160}
                  height={160}
                  priority
                  className={styles.pageHeaderLogo}
                />
              </div>
            </div>

            {/* Right side: Right-aligned Content */}
            <div className={styles.pageHeaderContentCol}>
              <span className={styles.pageBadge}>About Us</span>
              <h1 className={styles.pageTitle}>Our Story</h1>
              <p className={styles.pageSub}>Founded on February 15, 1991, Autoways has grown into a nationwide leader in retreading technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyTextCol}>
              <h2 className={styles.storyTitle}>A Legacy of Resilience and Trust</h2>
              <p className={styles.storyParagraph}>
                Founded on February 15, 1991, in the historic city of Anuradhapura, Autoways Private Limited began as a bold vision amidst a time of great uncertainty in Sri Lanka. While many were moving away due to the unrest in the region, we chose to stay and build something meaningful. With a small team and an unwavering spirit, we introduced the hot-cure tyre rebuilding process, laying the foundation for what has become a trusted name in tyre retreading and manufacturing.
              </p>
              <p className={styles.storyParagraph}>
                Over the years, Autoways has evolved into a nationally recognized company, serving critical sectors such as transportation, logistics, construction, and agriculture. From humble beginnings, we grew by gaining the trust of our clients—initially facing challenges such as skepticism due to our location during wartime, we remained resilient and earned a reputation for reliability and quality.
              </p>
              <p className={styles.storyParagraph}>
                Our commitment to innovation and excellence led us to expand our services into cold retreading, tyre repairs, and the manufacturing of high-performance retreading materials. We take pride in never outsourcing our retreading belts—every product bearing the Autoways name is crafted in-house to ensure unmatched quality and performance.
              </p>
              <p className={styles.storyParagraph}>
                We are also one of the few in the industry producing our own cushion gum, which plays a critical role in enhancing the bonding strength and durability of retreaded tyres.
              </p>
            </div>
            
            <div className={styles.storyImageCol}>
              <div className={styles.storyImageContainer}>
                <Image 
                  src="/images/Group-23.png" 
                  alt="Autoways Factory casing inspection" 
                  width={450} 
                  height={670} 
                  className={styles.storyImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History details / Milestone box */}
      <section className={`${styles.milestoneSection} section`}>
        <div className="container">
          <div className={styles.milestoneGrid}>
            <div className={styles.milestoneItem}>
              <h3>1991</h3>
              <p>Established first hot-cure tyre rebuilding plant in Anuradhapura during a period of region-wide conflict.</p>
            </div>
            <div className={styles.milestoneItem}>
              <h3>2005</h3>
              <p>Partnered with Sri Lanka Transport Board (SLTB) to supply high-reliability retreads for public transit.</p>
            </div>
            <div className={styles.milestoneItem}>
              <h3>2012</h3>
              <p>Expanded operations to Kandy and Kuruwita, establishing local cold-cure retreading facilities.</p>
            </div>
            <div className={styles.milestoneItem}>
              <h3>Today</h3>
              <p>Operating 3 state-of-the-art facilities with a dedicated workforce and our own nationwide transport fleet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Goals */}
      <section className="section">
        <div className="container">
          <div className={styles.valuesGrid}>
            {coreValues.map((val, idx) => (
              <div key={idx} className={styles.valueCard}>
                <div className={styles.valueAccentBar} style={{ backgroundColor: val.color }}></div>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities/Plants section */}
      <section className={`${styles.plantsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.pageBadge}>Our Operations</span>
            <h2 className={styles.sectionTitleCentered}>State-of-the-Art Facilities</h2>
            <p className={styles.sectionSubtitle}>We operate three dedicated plants across the island to serve you efficiently.</p>
          </div>
          
          <div className={styles.plantsGrid}>
            {plants.map((plant, idx) => (
              <div key={idx} className={styles.plantCard}>
                <h3 className={styles.plantName}>{plant.name}</h3>
                <span className={styles.plantRole}>{plant.role}</span>
                <p className={styles.plantLocation}>{plant.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership / Director & CEO Profile */}
      <section id="leadership" className="section">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.pageBadge}>Executive Leadership</span>
            <h2 className={styles.sectionTitleCentered}>Meet Our Director & Chief Executive</h2>
            <p className={styles.sectionSubtitleCentered}>
              Steering Autoways with strategic vision, operational discipline, and an enduring commitment to industrial innovation.
            </p>
          </div>

          <div className={styles.ceoContainer}>
            {/* Left Col: Photo Card & Direct Contact Info */}
            <div className={styles.ceoVisualCol}>
              <div className={styles.ceoImageCard}>
                <div className={styles.ceoImageWrapper}>
                  <Image
                    src="/images/Profile.png"
                    alt="Danika Senaratne - Director & CEO"
                    width={480}
                    height={600}
                    priority
                    className={styles.ceoImage}
                  />
                  <div className={styles.ceoExpBadge}>
                    <span className={styles.ceoExpNumber}>12+</span>
                    <span className={styles.ceoExpText}>Years Directing Autoways</span>
                  </div>
                </div>

                <div className={styles.ceoContactBox}>
                  <h4 className={styles.ceoContactTitle}>Direct Contact</h4>
                  <div className={styles.ceoContactList}>
                    <a href="tel:+94719998782" className={styles.ceoContactItem}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>+94 71 9998 782</span>
                    </a>
                    <a href="tel:+94777489281" className={styles.ceoContactItem}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>+94 77 7489 281</span>
                    </a>
                    <a href="mailto:danika@autowayssrilanka.com" className={styles.ceoContactItem}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <span>danika@autowayssrilanka.com</span>
                    </a>
                    <div className={styles.ceoContactItem}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>273, 16/E Katugastota Road, Kandy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Executive Narrative, Experience, Education & Skills */}
            <div className={styles.ceoContentCol}>
              <div className={styles.ceoHeaderBlock}>
                <span className={styles.ceoRoleTag}>Director — Autoways Private Limited</span>
                <h3 className={styles.ceoFullName}>Danika Senaratne</h3>
                <p className={styles.ceoSlogan}>
                  Leading diverse teams, scaling manufacturing capacity, and engineering sustainable industrial solutions since 2012.
                </p>
              </div>

              {/* Profile Bio */}
              <div className={styles.ceoBioBlock}>
                <h4 className={styles.blockTitle}>Executive Profile</h4>
                <p className={styles.ceoBioText}>
                  Danika Senaratne is an experienced Director with a successful track record of leading diverse teams in the achievement of business objectives. He has extensive experience in developing and implementing strategic plans, managing budgets, and improving operational efficiency.
                </p>
                <p className={styles.ceoBioText}>
                  Danika possesses strong communication and organizational skills and is highly motivated to exceed expectations. A dynamic leader with a strong background in directing and managing teams to ensure premier manufacturing outcomes across the island.
                </p>
              </div>

              {/* Work Experience */}
              <div className={styles.ceoSectionBlock}>
                <h4 className={styles.blockTitle}>Key Responsibilities & Operations</h4>
                <div className={styles.experienceCard}>
                  <div className={styles.expHeader}>
                    <div>
                      <h5 className={styles.expPosition}>Director</h5>
                      <span className={styles.expCompany}>Autoways Private Limited</span>
                    </div>
                    <span className={styles.expDuration}>2012 — Present</span>
                  </div>
                  <ul className={styles.expList}>
                    <li>
                      <span className={styles.bulletIcon}>•</span>
                      <strong>Factory Operations:</strong> Managing the end-to-end production process across the three factories (Tread Belt, Precured section, Hotcure section, and Flap manufacturing).
                    </li>
                    <li>
                      <span className={styles.bulletIcon}>•</span>
                      <strong>Market Leadership:</strong> Managing sales and marketing of precured tyres and rebuild tyres in the local market.
                    </li>
                    <li>
                      <span className={styles.bulletIcon}>•</span>
                      <strong>Financial Governance:</strong> Managing the budgets and other financial divisions to ensure sustainable organizational growth.
                    </li>
                    <li>
                      <span className={styles.bulletIcon}>•</span>
                      <strong>Innovation & Automation:</strong> Improving operational efficiency through continuous innovation and process automation.
                    </li>
                    <li>
                      <span className={styles.bulletIcon}>•</span>
                      <strong>Workforce Excellence:</strong> Managing the HR section and ensuring all employees are guided on the right strategic track.
                    </li>
                    <li>
                      <span className={styles.bulletIcon}>•</span>
                      <strong>Policy & Quality:</strong> Implementing and supervising operational policies and rigorous quality procedures.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dual Grid: Education & Skills */}
              <div className={styles.ceoDualGrid}>
                {/* Education */}
                <div className={styles.eduCard}>
                  <h4 className={styles.blockTitle}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.titleIcon}>
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    Education & Credentials
                  </h4>
                  <div className={styles.eduList}>
                    <div className={styles.eduItem}>
                      <span className={styles.eduDegree}>Master of Laws (LL.M)</span>
                      <span className={styles.eduSchool}>Currently Enrolled, ICBT Campus Kandy</span>
                    </div>
                    <div className={styles.eduItem}>
                      <span className={styles.eduDegree}>Bachelor of Business (Major in Management & Marketing)</span>
                      <span className={styles.eduSchool}>Edith Cowan University, Australia</span>
                    </div>
                    <div className={styles.eduItem}>
                      <span className={styles.eduDegree}>Diploma of Business</span>
                      <span className={styles.eduSchool}>Australian College of Business & Technology (ACBT)</span>
                    </div>
                    <div className={styles.eduItem}>
                      <span className={styles.eduDegree}>Diploma in International Business</span>
                      <span className={styles.eduSchool}>Swinburne University of Technology, Australia</span>
                    </div>
                    <div className={styles.eduItem}>
                      <span className={styles.eduDegree}>Certificate Course in Polymer & Tyre Technology</span>
                      <span className={styles.eduSchool}>Plastics and Rubber Institute (PRI)</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className={styles.skillsCard}>
                  <h4 className={styles.blockTitle}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.titleIcon}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Core Competencies
                  </h4>
                  <div className={styles.skillsTags}>
                    <span className={styles.skillTag}>Strategic Planning</span>
                    <span className={styles.skillTag}>Financial Management</span>
                    <span className={styles.skillTag}>Process Improvement</span>
                    <span className={styles.skillTag}>Team Leadership</span>
                    <span className={styles.skillTag}>Operations Management</span>
                    <span className={styles.skillTag}>Factory Automation</span>
                    <span className={styles.skillTag}>Quality Assurance</span>
                    <span className={styles.skillTag}>Supply Chain & Logistics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonialsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.pageBadge}>Client Reviews</span>
            <h2 className={styles.sectionTitleCentered}>What Our Partners Say</h2>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Client Logos */}
      {/*
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
      */}
    </div>

  );
}
