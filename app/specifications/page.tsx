'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { tyreSpecifications, TyreSpecification } from '@/data/specifications';
import { generateSpecsPDF } from '@/utils/generateSpecsPdf';

export default function SpecificationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'LCV' | '1000 X 20' | '1100 X 20' | '1200 X 20' | 'HW' | 'LW'>('All');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const categories = [
    { label: 'All Sizes', value: 'All' },
    { label: 'LCV', value: 'LCV' },
    { label: '1000 X 20', value: '1000 X 20' },
    { label: '1100 X 20', value: '1100 X 20' },
    { label: '1200 X 20', value: '1200 X 20' },
    { label: 'Heavy Weight (HW)', value: 'HW' },
    { label: 'Light Weight (LW)', value: 'LW' }
  ] as const;

  const filteredSpecs = useMemo(() => {
    return tyreSpecifications.filter((spec) => {
      // Category filter
      if (selectedCategory === 'LCV' && spec.tyreSize !== 'LCV') return false;
      if (selectedCategory === '1000 X 20' && !spec.tyreSize.toLowerCase().includes('1000')) return false;
      if (selectedCategory === '1100 X 20' && !spec.tyreSize.toLowerCase().includes('1100')) return false;
      if (selectedCategory === '1200 X 20' && !spec.tyreSize.toLowerCase().includes('1200')) return false;
      if (selectedCategory === 'HW' && spec.type !== 'HW') return false;
      if (selectedCategory === 'LW' && spec.type !== 'LW') return false;

      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchSize = spec.tyreSize.toLowerCase().includes(q);
        const matchWidth = spec.baseWidth.toLowerCase().includes(q);
        const matchDepth = String(spec.treadDepth).includes(q);
        const matchTotal = String(spec.totalThickness).includes(q);
        return matchSize || matchWidth || matchDepth || matchTotal;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPdf(true);
      // Generate and trigger download
      generateSpecsPDF(filteredSpecs);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Failed to generate PDF. Please try using the Print option.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbActive}>Specifications</span>
          </div>
          <span className={styles.pageBadge}>Technical Data</span>
          <h1 className={styles.pageTitle}>Tyre Specifications</h1>
          <p className={styles.pageSub}>
            Comprehensive technical dimensions, tread depth, base thickness, and dual-length weight metrics engineered for maximum fleet safety and durability.
          </p>

          {/* Quick Metrics */}
          <div className={styles.quickMetrics}>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>19</span>
              <span className={styles.metricLabel}>Precision Sizes</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>11 - 16.6 mm</span>
              <span className={styles.metricLabel}>Tread Depths</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>HW &amp; LW</span>
              <span className={styles.metricLabel}>Specialist Formats</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>ISO 9001</span>
              <span className={styles.metricLabel}>Quality Tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container">
          {/* Controls Bar */}
          <div className={styles.controlsBar}>
            {/* Search Box */}
            <div className={styles.searchBox}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by size, width, or thickness (e.g. 1000 X 20, 205 HW)..."
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

            {/* Action Buttons */}
            <div className={styles.actionsGroup}>
              <button 
                className={styles.downloadPdfBtn} 
                onClick={handleDownloadPDF} 
                disabled={isGeneratingPdf}
                title="Download technical specifications sheet as a PDF document"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download PDF'}</span>
              </button>

              <button 
                className={styles.printBtn} 
                onClick={handlePrint}
                title="Print specification chart"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          <div className={styles.filterChipsRow}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`${styles.filterChip} ${selectedCategory === cat.value ? styles.filterChipActive : ''}`}
                onClick={() => setSelectedCategory(cat.value as any)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Specification Table */}
          <div className={styles.tableCard}>
            <div className={styles.tableHeaderInfo}>
              <h2 className={styles.tableTitle}>Tyre Technical Matrix</h2>
              <span className={styles.tableCount}>
                Showing <strong>{filteredSpecs.length}</strong> of {tyreSpecifications.length} records
              </span>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.specsTable}>
                <thead>
                  <tr className={styles.tablePrimaryHead}>
                    <th rowSpan={2} className={styles.thSize}>Tyre Size</th>
                    <th rowSpan={2} className={styles.thNumber}>Base Width<br /><span className={styles.unit}>(mm)</span></th>
                    <th rowSpan={2} className={styles.thNumber}>Tread Depth<br /><span className={styles.unit}>(mm)</span></th>
                    <th rowSpan={2} className={styles.thNumber}>Base Thickness<br /><span className={styles.unit}>(mm)</span></th>
                    <th rowSpan={2} className={styles.thHighlight}>Total Thickness<br /><span className={styles.unit}>(mm)</span></th>
                    <th colSpan={2} className={styles.thGroupLow}>Low Length Tread</th>
                    <th colSpan={2} className={styles.thGroupHigh}>High Length Tread</th>
                  </tr>
                  <tr className={styles.tableSubHead}>
                    <th className={styles.thSub}>Length <span className={styles.unit}>(in)</span></th>
                    <th className={styles.thSub}>Weight <span className={styles.unit}>(Kg)</span></th>
                    <th className={styles.thSub}>Length <span className={styles.unit}>(in)</span></th>
                    <th className={styles.thSub}>Weight <span className={styles.unit}>(Kg)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSpecs.length > 0 ? (
                    filteredSpecs.map((item, idx) => (
                      <tr key={item.id} className={idx % 2 === 1 ? styles.rowAlt : styles.rowNormal}>
                        <td className={styles.tdSize}>
                          <span className={styles.sizeText}>{item.tyreSize}</span>
                          {item.type === 'HW' && <span className={styles.badgeHw}>HW</span>}
                          {item.type === 'LW' && <span className={styles.badgeLw}>LW</span>}
                        </td>
                        <td className={styles.tdCenter}>{item.baseWidth}</td>
                        <td className={styles.tdCenter}>{item.treadDepth}</td>
                        <td className={styles.tdCenter}>{item.baseThickness}</td>
                        <td className={styles.tdHighlight}>{item.totalThickness}</td>
                        <td className={styles.tdCenter}>
                          {item.lowLengthTread.length === '-' ? <span className={styles.dash}>-</span> : item.lowLengthTread.length}
                        </td>
                        <td className={styles.tdWeight}>
                          {item.lowLengthTread.weight === '-' ? <span className={styles.dash}>-</span> : `${item.lowLengthTread.weight} kg`}
                        </td>
                        <td className={styles.tdCenter}>
                          {item.highLengthTread.length === '-' ? <span className={styles.dash}>-</span> : item.highLengthTread.length}
                        </td>
                        <td className={styles.tdWeight}>
                          {item.highLengthTread.weight === '-' ? <span className={styles.dash}>-</span> : `${item.highLengthTread.weight} kg`}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={9} className={styles.noResults}>
                        <p>No tyre specifications match &quot;{searchQuery}&quot;.</p>
                        <button 
                          className={styles.resetBtn}
                          onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                        >
                          Reset Filters
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Guide & Legend */}
          <div className={styles.guideGrid}>
            <div className={styles.guideCard}>
              <h3 className={styles.guideTitle}>
                <span className={styles.guideDot}></span>
                Abbreviations &amp; Designations
              </h3>
              <ul className={styles.guideList}>
                <li><strong>LCV:</strong> Light Commercial Vehicle pattern designed for urban and regional multi-stop delivery routes.</li>
                <li><strong>HW (Heavy Weight):</strong> Reinforced tread compound with increased tread depth and base thickness for high-stress terrain and heavy payloads.</li>
                <li><strong>LW (Light Weight):</strong> High-efficiency reduced weight tread compound optimized for long-distance highway line-haul fuel economy.</li>
              </ul>
            </div>

            <div className={styles.guideCard}>
              <h3 className={styles.guideTitle}>
                <span className={styles.guideDot}></span>
                Engineering Standards
              </h3>
              <ul className={styles.guideList}>
                <li><strong>Total Thickness:</strong> Calculated as the aggregate of precision Tread Depth plus Base Cushion Thickness.</li>
                <li><strong>Dual-Length Options:</strong> Both standard low-length and extended high-length configurations available to fit varied casing diameters.</li>
                <li><strong>Casing Quality:</strong> All retreading lines conform to rigorous ultrasonic and shearography casing standards.</li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>Fleet Partnerships</span>
              <h2 className={styles.ctaTitle}>Need Custom Specifications or Volume Pricing?</h2>
              <p className={styles.ctaText}>
                Our technical engineers can evaluate your fleet casings and formulate custom tread compounds tailored to your operational routes.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Request Technical Quote
              </Link>
              <button onClick={handleDownloadPDF} className={styles.ctaButtonSecondary}>
                Download PDF Matrix
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
