'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { articles } from '@/data/articles';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Engineering & Compounding',
    'Fleet Maintenance',
    'Industry & Sustainability'
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      if (selectedCategory !== 'All' && article.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = article.title.toLowerCase().includes(q);
        const matchExcerpt = article.excerpt.toLowerCase().includes(q);
        const matchTags = article.tags.some((t) => t.toLowerCase().includes(q));
        return matchTitle || matchExcerpt || matchTags;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbActive}>Articles</span>
          </div>
          <span className={styles.pageBadge}>Knowledge &amp; Engineering Hub</span>
          <h1 className={styles.pageTitle}>Articles &amp; Industry Insights</h1>
          <p className={styles.pageSub}>
            Authoritative technical guides, rubber compounding chemistry, and sustainable tyre lifecycle management straight from Autoways engineers.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section">
        <div className="container">
          {/* Controls Bar: Search & Categories */}
          <div className={styles.controlsBar}>
            <div className={styles.categoriesRow}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.categoryBtnActive : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.searchBox}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search topics, compounding, flaps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  className={styles.clearBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* Featured Article Highlight (when not actively filtered out) */}
          {selectedCategory === 'All' && !searchQuery && (
            <div className={styles.featuredContainer}>
              <div className={styles.featuredBadgeRow}>
                <span className={styles.featuredPill}>Featured Story</span>
                <span className={styles.featuredCategory}>{featuredArticle.category}</span>
              </div>
              <h2 className={styles.featuredTitle}>
                <Link href={`/articles/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>
              <p className={styles.featuredSubtitle}>{featuredArticle.subtitle}</p>
              <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
              
              <div className={styles.featuredFooter}>
                <div className={styles.authorMeta}>
                  {featuredArticle.author.avatar && (
                    <Image
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      width={44}
                      height={44}
                      className={styles.authorAvatar}
                    />
                  )}
                  <div>
                    <span className={styles.authorName}>{featuredArticle.author.name}</span>
                    <span className={styles.authorRole}>{featuredArticle.author.role} • {featuredArticle.publishedDate}</span>
                  </div>
                </div>

                <Link href={`/articles/${featuredArticle.slug}`} className={styles.readArticleBtn}>
                  <span>Read Complete Article</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className={styles.articlesGrid}>
            {filteredArticles.map((article) => (
              <article key={article.slug} className={styles.articleCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardBadge}>{article.coverBadge}</span>
                  <span className={styles.cardReadTime}>{article.readTime}</span>
                </div>

                <div className={styles.cardCategory}>{article.category}</div>

                <h3 className={styles.cardTitle}>
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className={styles.cardExcerpt}>{article.excerpt}</p>

                <div className={styles.cardTags}>
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tagChip}>#{tag}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.cardDate}>{article.publishedDate}</span>
                  <Link href={`/articles/${article.slug}`} className={styles.cardLink}>
                    <span>Read Article</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className={styles.noResultsBox}>
              <p>No articles found matching &quot;{searchQuery}&quot; in this category.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className={styles.resetBtn}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Technical Callout */}
          <div className={styles.specCalloutBanner}>
            <div className={styles.calloutText}>
              <span className={styles.calloutBadge}>Engineering Specifications</span>
              <h2 className={styles.calloutHeading}>Need Detailed Tread Dimensions &amp; Weight Ratings?</h2>
              <p className={styles.calloutDesc}>
                Access the official Autoways Tyre Specifications chart with dimensional metrics for LCV, 1000 X 20, 1100 X 20, and 1200 X 20 configurations.
              </p>
            </div>
            <div className={styles.calloutActions}>
              <Link href="/specifications" className={styles.specLinkBtn}>
                View Tyre Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
