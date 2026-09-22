import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { articles, Article } from '@/data/articles';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className={styles.wrapper}>
      {/* Hero / Header */}
      <header className={styles.articleHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <Link href="/articles" className={styles.breadcrumbLink}>Articles</Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbActive}>{article.category}</span>
          </div>

          <div className={styles.metaBadgeRow}>
            <span className={styles.categoryBadge}>{article.category}</span>
            <span className={styles.readTimeBadge}>{article.readTime}</span>
            <span className={styles.publishedDateBadge}>{article.publishedDate}</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.subtitle}>{article.subtitle}</p>

          <div className={styles.authorRow}>
            {article.author.avatar && (
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={50}
                height={50}
                className={styles.authorAvatar}
              />
            )}
            <div className={styles.authorText}>
              <span className={styles.authorName}>{article.author.name}</span>
              <span className={styles.authorRole}>{article.author.role}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="section">
        <div className="container">
          <div className={styles.articleLayout}>
            {/* Article Content Column */}
            <article className={styles.contentColumn}>
              {/* Cover Image Banner */}
              <div className={styles.coverImageContainer}>
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  priority
                  className={styles.coverImage}
                />
              </div>

              {/* Key Takeaways Box */}
              <div className={styles.takeawaysCard}>
                <div className={styles.takeawaysHeader}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <h3>Key Highlights &amp; Takeaways</h3>
                </div>
                <ul className={styles.takeawaysList}>
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div className={styles.articleBody}>
                {article.sections.map((section, idx) => (
                  <section key={idx} className={styles.bodySection}>
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>

                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className={styles.paragraph}>{p}</p>
                    ))}

                    {section.callout && (
                      <blockquote className={styles.calloutQuote}>
                        {section.callout}
                      </blockquote>
                    )}

                    {section.bulletPoints && (
                      <ul className={styles.bulletPointsList}>
                        {section.bulletPoints.map((bp, bIdx) => (
                          <li key={bIdx}>{bp}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Event Gallery */}
              {article.galleryImages && article.galleryImages.length > 0 && (
                <div className={styles.gallerySection}>
                  <div className={styles.galleryHeader}>
                    <span className={styles.galleryBadge}>Event Highlights</span>
                    <h2 className={styles.galleryTitle}>Photo Gallery from Sharjah &amp; Dubai</h2>
                    <p className={styles.galleryDesc}>
                      Official delegation photographs, exhibition booth interactions, and bilateral business forums.
                    </p>
                  </div>
                  <div className={styles.galleryGrid}>
                    {article.galleryImages.map((img, gIdx) => (
                      <figure key={gIdx} className={styles.galleryCard}>
                        <div className={styles.galleryImgWrapper}>
                          <Image
                            src={img.url}
                            alt={img.caption}
                            fill
                            className={styles.galleryImg}
                          />
                        </div>
                        <figcaption className={styles.galleryCaption}>
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags Row */}
              <div className={styles.tagsContainer}>
                <span className={styles.tagsLabel}>Filed Under:</span>
                <div className={styles.tagsList}>
                  {article.tags.map((tag) => (
                    <span key={tag} className={styles.tagBadge}>#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Back to Hub Button */}
              <div className={styles.backButtonRow}>
                <Link href="/articles" className={styles.backBtn}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  <span>Back to All Articles</span>
                </Link>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className={styles.sidebarColumn}>
              {/* Technical Specifications Widget */}
              <div className={styles.sidebarCard}>
                <span className={styles.sidebarBadge}>Technical Data</span>
                <h3 className={styles.sidebarTitle}>Tyre Specifications Matrix</h3>
                <p className={styles.sidebarText}>
                  Looking for dimensional charts, tread depths, and weights for LCV to 1200 X 20 tyres?
                </p>
                <Link href="/specifications" className={styles.sidebarBtn}>
                  View Tyre Specifications
                </Link>
              </div>

              {/* Related Articles Widget */}
              <div className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Read Next</h3>
                <div className={styles.relatedList}>
                  {relatedArticles.map((rel) => (
                    <div key={rel.slug} className={styles.relatedItem}>
                      <span className={styles.relatedCategory}>{rel.category}</span>
                      <h4 className={styles.relatedHeading}>
                        <Link href={`/articles/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <span className={styles.relatedDate}>{rel.readTime} • {rel.publishedDate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact / Fleet Support Widget */}
              <div className={styles.supportCard}>
                <span className={styles.supportBadge}>Fleet Consulting</span>
                <h3 className={styles.supportTitle}>Custom Compounding Inquiries</h3>
                <p className={styles.supportText}>
                  Speak directly with our compounding chemists and technical fleet auditors.
                </p>
                <a href="tel:+9471419386" className={styles.supportCallBtn}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+94 71 419 386</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
