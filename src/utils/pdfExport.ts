import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { QuestionPaper, LanguageMode } from '../types';
import { generateQuestionPaperHtml, generateAnswerKeyHtml } from './paperHtmlGenerator';

export interface PdfExportOptions {
  filename?: string;
  marginMm?: number;
}

export interface MergedPdfExportOptions {
  filename?: string;
  includeAnswerKeys?: boolean;
  languageMode?: LanguageMode;
}

/**
 * Directly renders any DOM element to a crisp, high-resolution downloadable PDF file (A4 format).
 */
export async function exportElementToPdf(
  element: HTMLElement,
  filename: string = 'Question_Paper.pdf',
  onProgress?: (status: string) => void
): Promise<boolean> {
  try {
    if (onProgress) onProgress('Preparing document...');

    // Temporarily ensure high contrast and clean background
    const originalShadow = element.style.boxShadow;
    const originalBorder = element.style.border;
    element.style.boxShadow = 'none';
    element.style.border = 'none';

    if (onProgress) onProgress('Rendering high-resolution canvas...');

    const canvas = await html2canvas(element, {
      scale: 2, // High resolution (retina/print quality)
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    });

    // Restore styling
    element.style.boxShadow = originalShadow;
    element.style.border = originalBorder;

    if (onProgress) onProgress('Compiling PDF pages...');

    // A4 dimensions in mm: 210 x 297
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfPageWidth = 210;
    const pdfPageHeight = 297;
    const margin = 10; // 10mm margins
    const printableWidth = pdfPageWidth - (margin * 2);
    const printableHeight = pdfPageHeight - (margin * 2);

    const imgWidth = printableWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const imgData = canvas.toDataURL('image/jpeg', 0.98);

    let heightLeft = imgHeight;
    let position = margin;
    let page = 1;

    // Add first page
    pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= printableHeight;

    // Add remaining pages if content spans across multiple pages
    while (heightLeft > 0) {
      position = -(page * printableHeight) + margin;
      pdf.addPage();
      page++;
      pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= printableHeight;
    }

    if (onProgress) onProgress('Saving PDF file...');
    pdf.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
    return true;
  } catch (err) {
    console.error('PDF generation error:', err);
    return false;
  }
}

/**
 * Batch processes multiple QuestionPapers and merges them into a single downloadable PDF.
 * Each question paper (and optional answer key) starts cleanly on a new page.
 */
export async function exportMergedPapersToPdf(
  papers: QuestionPaper[],
  options: MergedPdfExportOptions = {},
  onProgress?: (status: string) => void
): Promise<boolean> {
  if (!papers || papers.length === 0) return false;

  const {
    filename = `Merged_Question_Papers_${papers.length}_Sets.pdf`,
    includeAnswerKeys = false,
    languageMode = 'bilingual'
  } = options;

  // Create an offscreen staging container
  const stagingContainer = document.createElement('div');
  stagingContainer.style.position = 'fixed';
  stagingContainer.style.left = '-9999px';
  stagingContainer.style.top = '0';
  stagingContainer.style.width = '800px';
  stagingContainer.style.background = '#ffffff';
  stagingContainer.style.color = '#000000';
  stagingContainer.style.zIndex = '-1000';
  document.body.appendChild(stagingContainer);

  try {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfPageWidth = 210;
    const pdfPageHeight = 297;
    const margin = 10;
    const printableWidth = pdfPageWidth - (margin * 2);
    const printableHeight = pdfPageHeight - (margin * 2);

    let isFirstDocPage = true;

    for (let i = 0; i < papers.length; i++) {
      const paper = papers[i];
      const paperNum = i + 1;

      // 1. Render Question Paper
      if (onProgress) {
        onProgress(`Rendering Question Paper ${paperNum} of ${papers.length}: "${paper.examName}"...`);
      }

      stagingContainer.innerHTML = generateQuestionPaperHtml(paper, languageMode || paper.languageMode);

      // Wait a tick for fonts/layout
      await new Promise(r => setTimeout(r, 40));

      const paperCanvas = await html2canvas(stagingContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 800
      });

      const imgWidth = printableWidth;
      const imgHeight = (paperCanvas.height * imgWidth) / paperCanvas.width;
      const imgData = paperCanvas.toDataURL('image/jpeg', 0.98);

      let heightLeft = imgHeight;
      let position = margin;
      let pageOffset = 0;

      while (heightLeft > 0) {
        if (!isFirstDocPage) {
          pdf.addPage();
        }
        isFirstDocPage = false;

        position = -(pageOffset * printableHeight) + margin;
        pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= printableHeight;
        pageOffset++;
      }

      // 2. Render Answer Key if enabled
      if (includeAnswerKeys) {
        if (onProgress) {
          onProgress(`Rendering Answer Key for Paper ${paperNum} of ${papers.length}...`);
        }

        stagingContainer.innerHTML = generateAnswerKeyHtml(paper, languageMode || paper.languageMode);
        await new Promise(r => setTimeout(r, 40));

        const keyCanvas = await html2canvas(stagingContainer, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: 800
        });

        const keyImgWidth = printableWidth;
        const keyImgHeight = (keyCanvas.height * keyImgWidth) / keyCanvas.width;
        const keyImgData = keyCanvas.toDataURL('image/jpeg', 0.98);

        let keyHeightLeft = keyImgHeight;
        let keyPosition = margin;
        let keyPageOffset = 0;

        while (keyHeightLeft > 0) {
          pdf.addPage();
          keyPosition = -(keyPageOffset * printableHeight) + margin;
          pdf.addImage(keyImgData, 'JPEG', margin, keyPosition, keyImgWidth, keyImgHeight, undefined, 'FAST');
          keyHeightLeft -= printableHeight;
          keyPageOffset++;
        }
      }
    }

    if (onProgress) onProgress('Finalizing and saving merged PDF file...');
    pdf.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
    return true;
  } catch (err) {
    console.error('Batch merged PDF export error:', err);
    return false;
  } finally {
    if (document.body.contains(stagingContainer)) {
      document.body.removeChild(stagingContainer);
    }
  }
}

/**
 * Clean Batch Print Helper:
 * Opens a dedicated popup with all selected question papers separated by page-break rules.
 */
export function triggerCleanBatchPrint(
  papers: QuestionPaper[],
  options: { includeAnswerKeys?: boolean; languageMode?: LanguageMode; documentTitle?: string } = {}
) {
  if (!papers || papers.length === 0) return;

  const {
    includeAnswerKeys = false,
    languageMode = 'bilingual',
    documentTitle = `Bulk_Question_Papers_${papers.length}_Sets`
  } = options;

  try {
    const headNodes = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
    let stylesHtml = '';
    headNodes.forEach(node => {
      stylesHtml += node.outerHTML;
    });

    let mergedHtml = '';
    papers.forEach((paper, idx) => {
      const qpHtml = generateQuestionPaperHtml(paper, languageMode || paper.languageMode);
      mergedHtml += `
        <div class="batch-paper-container" style="${idx > 0 ? 'page-break-before: always; break-before: page;' : ''} margin-bottom: 30px;">
          ${qpHtml}
        </div>
      `;

      if (includeAnswerKeys) {
        const keyHtml = generateAnswerKeyHtml(paper, languageMode || paper.languageMode);
        mergedHtml += `
          <div class="batch-key-container" style="page-break-before: always; break-before: page; margin-bottom: 30px;">
            ${keyHtml}
          </div>
        `;
      }
    });

    const printWindow = window.open('', '_blank', 'width=950,height=850');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${documentTitle}</title>
          ${stylesHtml}
          <style>
            @page { margin: 12mm 15mm; size: A4 portrait; }
            body { background: #ffffff !important; color: #000000 !important; font-size: 11pt !important; margin: 0; padding: 15px; }
            .print-hidden, .no-print { display: none !important; }
            .batch-paper-container, .batch-key-container { page-break-after: always; break-after: page; }
            .batch-paper-container:last-child { page-break-after: auto; break-after: auto; }
          </style>
        </head>
        <body>
          <div id="print-root">${mergedHtml}</div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.focus();
                window.print();
              }, 450);
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
      return;
    }
  } catch (e) {
    console.warn('Batch print window failed:', e);
  }

  window.print();
}

/**
 * Clean Print Helper:
 * Opens a dedicated popup or hidden iframe with complete CSS styling to trigger browser print reliably.
 */
export function triggerCleanPrint(element: HTMLElement, documentTitle: string) {
  try {
    // Collect all stylesheet links and style tags from current document
    const headNodes = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
    let stylesHtml = '';
    headNodes.forEach(node => {
      stylesHtml += node.outerHTML;
    });

    const printWindow = window.open('', '_blank', 'width=900,height=800');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${documentTitle}</title>
          ${stylesHtml}
          <style>
            @page { margin: 12mm 15mm; size: A4 portrait; }
            body { background: #ffffff !important; color: #000000 !important; font-size: 11pt !important; margin: 0; padding: 15px; }
            .print-hidden, .no-print { display: none !important; }
            .print-avoid-break { break-inside: avoid !important; page-break-inside: avoid !important; }
          </style>
        </head>
        <body>
          <div id="print-root">${element.innerHTML}</div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.focus();
                window.print();
              }, 400);
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
      return;
    }
  } catch (e) {
    console.warn('Dedicated print window failed, falling back to direct window.print():', e);
  }

  // Fallback
  window.print();
}

