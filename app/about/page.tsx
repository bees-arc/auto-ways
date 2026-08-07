import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function About() {
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
      color: '#f95738'
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
          <span className={styles.pageBadge}>About Us</span>
          <h1 className={styles.pageTitle}>Our Story</h1>
          <p className={styles.pageSub}>Founded on February 15, 1991, Autoways has grown into a nationwide leader in retreading technology.</p>
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
                <div className={styles.experienceTag}>
                  <h3>34</h3>
                  <span>Years of Trust</span>
                </div>
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

      {/* Team section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.pageBadge}>Our Team</span>
            <h2 className={styles.sectionTitleCentered}>Meet the People Driving Our Innovation</h2>
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
    </div>

  );
}
