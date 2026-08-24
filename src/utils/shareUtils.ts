import { QuestionPaper } from '../types';

/**
 * Safely encode Unicode string to Base64
 */
function unicodeToBase64(str: string): string {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

/**
 * Safely decode Base64 to Unicode string
 */
function base64ToUnicode(base64: string): string {
  return decodeURIComponent(
    Array.prototype.map
      .call(atob(base64), (c: string) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
}

/**
 * Generate a unique shareable URL for a QuestionPaper
 */
export function generateShareUrl(paper: QuestionPaper): string {
  try {
    const jsonStr = JSON.stringify(paper);
    const encoded = unicodeToBase64(jsonStr);
    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    return `${baseUrl}#share=${encodeURIComponent(encoded)}`;
  } catch (error) {
    console.error('Error generating share URL:', error);
    return window.location.href;
  }
}

/**
 * Try to parse and extract a QuestionPaper from current URL hash
 */
export function parseSharedPaperFromUrl(): QuestionPaper | null {
  try {
    const hash = window.location.hash;
    if (!hash || !hash.includes('share=')) {
      return null;
    }

    const shareParam = hash.split('share=')[1]?.split('&')[0];
    if (!shareParam) return null;

    const decodedBase64 = decodeURIComponent(shareParam);
    const jsonStr = base64ToUnicode(decodedBase64);
    const paper = JSON.parse(jsonStr) as QuestionPaper;

    if (paper && paper.id && paper.sections && paper.maxMarks) {
      return paper;
    }
  } catch (error) {
    console.error('Error parsing shared paper from URL:', error);
  }
  return null;
}

/**
 * Execute sharing using Web Share API or Clipboard Fallback
 */
export async function shareQuestionPaper(paper: QuestionPaper): Promise<{
  success: boolean;
  method: 'native' | 'clipboard' | 'error';
  message: string;
}> {
  const shareUrl = generateShareUrl(paper);
  const shareData = {
    title: `${paper.examName} - ${paper.subject} (${paper.maxMarks} Marks)`,
    text: `Tamil Nadu State Board Question Paper: ${paper.examName} - ${paper.subject} (${paper.standard}) - Total: ${paper.maxMarks} Marks. View question paper & complete valuation scheme:`,
    url: shareUrl
  };

  // Attempt Web Share API if supported
  if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return {
        success: true,
        method: 'native',
        message: 'Shared successfully via Web Share!'
      };
    } catch (err) {
      // If user cancelled, don't show error, just return cancelled
      if ((err as Error).name === 'AbortError') {
        return {
          success: false,
          method: 'native',
          message: 'Share dialogue cancelled.'
        };
      }
      // If share failed for other reasons, fall through to clipboard
    }
  }

  // Fallback to Clipboard Copy
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(shareUrl);
      return {
        success: true,
        method: 'clipboard',
        message: 'Unique shareable link copied to clipboard!'
      };
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return {
        success: true,
        method: 'clipboard',
        message: 'Unique shareable link copied to clipboard!'
      };
    }
  } catch (clipErr) {
    console.error('Failed to copy share link to clipboard:', clipErr);
    return {
      success: false,
      method: 'error',
      message: 'Could not copy link to clipboard. Please copy URL manually.'
    };
  }
}
