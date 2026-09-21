import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TyreSpecification } from '@/data/specifications';

export function generateSpecsPDF(specs: TyreSpecification[]) {
  // Create PDF in portrait A4
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Top Red Accent Bar
  doc.setFillColor(190, 27, 35); // #be1b23
  doc.rect(0, 0, pageWidth, 5, 'F');

  // Header Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(190, 27, 35);
  doc.text('AUTOWAYS (PVT) LTD', 14, 18);

  // Subtitle / Tagline
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Precision Tyre Retreading & Technical Engineering Specifications', 14, 23);

  // Document Title Box
  doc.setFillColor(248, 249, 250);
  doc.roundedRect(14, 27, pageWidth - 28, 14, 2, 2, 'F');
  doc.setDrawColor(220, 224, 230);
  doc.roundedRect(14, 27, pageWidth - 28, 14, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(30, 30, 30);
  doc.text('TYRE SPECIFICATIONS CHART', 18, 35);

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(`Ref: AWS-SPEC-${new Date().getFullYear()} | Issued: ${currentDate}`, pageWidth - 18, 35, { align: 'right' });

  // Prepare table data with grouped headers
  const head = [
    [
      { content: 'Tyre Size', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } },
      { content: 'Base Width\n(mm)', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } },
      { content: 'Tread Depth\n(mm)', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } },
      { content: 'Base Thick.\n(mm)', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } },
      { content: 'Total Thick.\n(mm)', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } },
      { content: 'Low Length Tread', colSpan: 2, styles: { halign: 'center' } },
      { content: 'High Length Tread', colSpan: 2, styles: { halign: 'center' } }
    ],
    [
      { content: 'Length (in)', styles: { halign: 'center' } },
      { content: 'Weight (Kg)', styles: { halign: 'center' } },
      { content: 'Length (in)', styles: { halign: 'center' } },
      { content: 'Weight (Kg)', styles: { halign: 'center' } }
    ]
  ];

  const body = specs.map((item) => [
    item.tyreSize,
    item.baseWidth,
    item.treadDepth,
    item.baseThickness,
    item.totalThickness,
    item.lowLengthTread.length,
    item.lowLengthTread.weight,
    item.highLengthTread.length,
    item.highLengthTread.weight
  ]);

  autoTable(doc, {
    head: head as any,
    body: body,
    startY: 45,
    margin: { left: 14, right: 14, bottom: 20 },
    theme: 'grid',
    styles: {
      font: 'helvetica',
      fontSize: 8,
      cellPadding: { top: 2.5, right: 2, bottom: 2.5, left: 2 },
      textColor: [33, 37, 41],
      lineColor: [220, 224, 230],
      lineWidth: 0.15,
      halign: 'center',
      valign: 'middle'
    },
    headStyles: {
      fillColor: [190, 27, 35],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 7.5,
      lineColor: [170, 20, 28]
    },
    alternateRowStyles: {
      fillColor: [250, 250, 251]
    },
    columnStyles: {
      0: { fontStyle: 'bold', halign: 'left', cellPadding: { left: 4 } },
      1: { halign: 'center' },
      2: { halign: 'center' },
      3: { halign: 'center' },
      4: { halign: 'center', fontStyle: 'bold', textColor: [190, 27, 35] },
      5: { halign: 'center' },
      6: { halign: 'center' },
      7: { halign: 'center' },
      8: { halign: 'center' }
    },
    didDrawPage: (data) => {
      // Bottom Footer on each page
      const footerY = pageHeight - 10;

      doc.setDrawColor(230, 230, 230);
      doc.setLineWidth(0.3);
      doc.line(14, footerY - 4, pageWidth - 14, footerY - 4);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(120, 120, 120);
      doc.text('Autoways (Pvt) Ltd | www.autoways.lk | Tel: +94 71 419 386 | Email: info@autoways.lk', 14, footerY);

      const pageNumber = (doc as any).internal.getNumberOfPages();
      doc.text(`Page ${data.pageNumber} of ${pageNumber}`, pageWidth - 14, footerY, { align: 'right' });
    }
  });

  // Save the PDF file
  doc.save('Autoways_Tyre_Specifications.pdf');
}
