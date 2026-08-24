import { QuestionPaper, LanguageMode } from '../types';

const tamilOptionLabels: Record<string, string> = {
  A: '(அ)',
  B: '(ஆ)',
  C: '(இ)',
  D: '(ஈ)'
};

const englishOptionLabels: Record<string, string> = {
  A: '(a)',
  B: '(b)',
  C: '(c)',
  D: '(d)'
};

/**
 * Generates clean, standard-compliant HTML for a single question paper.
 */
export function generateQuestionPaperHtml(paper: QuestionPaper, langMode: LanguageMode = paper.languageMode || 'bilingual'): string {
  let globalQNo = 1;

  let sectionsHtml = '';

  paper.sections.forEach((sec, sIdx) => {
    let questionsHtml = '';

    sec.questions.forEach((item) => {
      const qNum = globalQNo++;
      const q = item.question;
      const isMCQ = sec.marksPerQuestion === 1;
      const is5M = sec.marksPerQuestion === 5;

      if (is5M && item.orQuestion) {
        const qA = q;
        const qB = item.orQuestion;

        let qAHtml = '';
        if (langMode === 'english' || langMode === 'bilingual') {
          qAHtml += `<div><span style="font-weight: bold;">(a)</span> ${qA.questionText}</div>`;
        }
        if ((langMode === 'tamil' || langMode === 'bilingual') && qA.questionTextTamil) {
          qAHtml += `<div style="font-family: 'Noto Serif Tamil', serif; margin-top: 2px;"><span style="font-weight: bold;">(அ)</span> ${qA.questionTextTamil}</div>`;
        }

        let qBHtml = '';
        if (langMode === 'english' || langMode === 'bilingual') {
          qBHtml += `<div><span style="font-weight: bold;">(b)</span> ${qB.questionText}</div>`;
        }
        if ((langMode === 'tamil' || langMode === 'bilingual') && qB.questionTextTamil) {
          qBHtml += `<div style="font-family: 'Noto Serif Tamil', serif; margin-top: 2px;"><span style="font-weight: bold;">(ஆ)</span> ${qB.questionTextTamil}</div>`;
        }

        questionsHtml += `
          <div style="margin-bottom: 14px; page-break-inside: avoid; break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="flex: 1; padding-right: 10px;">
                <div style="font-weight: bold; margin-bottom: 4px;">Q.${qNum}.</div>
                <div style="padding-left: 14px;">${qAHtml}</div>
                <div style="text-align: center; font-weight: bold; font-style: italic; margin: 6px 0; font-size: 10.5pt;">(OR / அல்லது)</div>
                <div style="padding-left: 14px;">${qBHtml}</div>
              </div>
              <div style="font-weight: bold; width: 45px; text-align: right; font-size: 10pt;">[ 5 ]</div>
            </div>
          </div>
        `;
      } else {
        // Standard 1M, 2M, 3M question
        let qTextHtml = '';
        if (langMode === 'english' || langMode === 'bilingual') {
          qTextHtml += `<div>${q.questionText}</div>`;
        }
        if ((langMode === 'tamil' || langMode === 'bilingual') && q.questionTextTamil) {
          qTextHtml += `<div style="font-family: 'Noto Serif Tamil', serif; margin-top: 2px;">${q.questionTextTamil}</div>`;
        }

        let optionsHtml = '';
        if (isMCQ && q.options) {
          const optKeys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
          const items = optKeys.map(k => {
            const eng = q.options?.[k];
            const tam = q.optionsTamil?.[k];
            let txt = '';
            if (langMode === 'english' || langMode === 'bilingual') {
              txt += `<span style="font-weight: bold;">${englishOptionLabels[k]}</span> ${eng || ''}`;
            }
            if ((langMode === 'tamil' || langMode === 'bilingual') && tam) {
              txt += (langMode === 'bilingual' ? ' / ' : '') + `<span style="font-weight: bold; font-family: 'Noto Serif Tamil', serif;">${tamilOptionLabels[k]}</span> ${tam}`;
            }
            return `<div style="flex: 1 1 45%; min-width: 200px; margin-bottom: 4px;">${txt}</div>`;
          }).join('');

          optionsHtml = `<div style="display: flex; flex-wrap: wrap; margin-top: 6px; padding-left: 18px; font-size: 10pt;">${items}</div>`;
        }

        const isCompulsory = item.isCompulsory;

        questionsHtml += `
          <div style="margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="flex: 1; padding-right: 10px; display: flex; gap: 8px;">
                <span style="font-weight: bold; min-width: 28px;">
                  ${qNum}.${isCompulsory ? '*' : ''}
                </span>
                <div style="flex: 1;">
                  ${qTextHtml}
                  ${optionsHtml}
                </div>
              </div>
              <div style="font-weight: bold; width: 45px; text-align: right; font-size: 10pt;">
                [ ${sec.marksPerQuestion} ]
              </div>
            </div>
          </div>
        `;
      }
    });

    let instructionHtml = '';
    if (langMode === 'english' || langMode === 'bilingual') {
      instructionHtml += `<div>${sec.instruction}</div>`;
    }
    if ((langMode === 'tamil' || langMode === 'bilingual') && sec.instructionTamil) {
      instructionHtml += `<div style="font-family: 'Noto Serif Tamil', serif; margin-top: 2px;">${sec.instructionTamil}</div>`;
    }

    const marksSummary = `${sec.totalQuestionsToAnswer} × ${sec.marksPerQuestion} = ${sec.totalQuestionsToAnswer * sec.marksPerQuestion}`;

    sectionsHtml += `
      <div style="margin-top: 20px; margin-bottom: 15px;">
        <div style="text-align: center; font-weight: bold; border-top: 1px solid #111; border-bottom: 1px solid #111; padding: 5px 0; margin-bottom: 10px;">
          <div style="font-size: 12pt; text-transform: uppercase;">
            ${sec.partTitle} ${sec.partTitleTamil ? ` / ${sec.partTitleTamil}` : ''}
          </div>
          <div style="font-size: 10pt; font-weight: normal; margin-top: 3px;">
            ${instructionHtml}
          </div>
          <div style="font-size: 10pt; font-weight: bold; margin-top: 4px;">
            Marks: ${marksSummary}
          </div>
        </div>
        ${questionsHtml}
      </div>
    `;
  });

  return `
    <div class="tn-question-paper" style="font-family: 'Times New Roman', 'Noto Serif Tamil', serif; font-size: 11pt; line-height: 1.35; color: #000000; background: #ffffff; padding: 24px; max-width: 800px; margin: 0 auto;">
      <!-- Header -->
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px;">
        <div style="font-size: 14pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
          ${paper.schoolName}
        </div>
        <div style="font-size: 12pt; font-weight: bold; margin-top: 3px;">
          ${paper.examName} ${paper.date ? `(${paper.date})` : ''}
        </div>
        <div style="font-size: 11pt; font-weight: bold; margin-top: 4px;">
          ${paper.standard} — ${paper.subject} ${paper.subjectTamil ? ` / ${paper.subjectTamil}` : ''}
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 10.5pt; font-weight: bold; margin-top: 6px; border-top: 1px solid #444; padding-top: 4px;">
          <span>Time Allowed: ${paper.timeAllowed}</span>
          <span>Maximum Marks: ${paper.maxMarks}</span>
        </div>
      </div>

      <!-- Sections -->
      ${sectionsHtml}

      <!-- Footer End of Paper -->
      <div style="text-align: center; font-weight: bold; margin-top: 24px; border-top: 1px dashed #666; padding-top: 8px; font-size: 10pt; letter-spacing: 1px;">
        *** END OF QUESTION PAPER ***
      </div>
    </div>
  `;
}

/**
 * Generates clean HTML for a question paper's answer key & valuation scheme.
 */
export function generateAnswerKeyHtml(paper: QuestionPaper, langMode: LanguageMode = paper.languageMode || 'bilingual'): string {
  let globalQNo = 1;
  let sectionsHtml = '';

  paper.sections.forEach((sec) => {
    let keyItemsHtml = '';

    sec.questions.forEach((item) => {
      const qNum = globalQNo++;
      const q = item.question;
      const isMCQ = sec.marksPerQuestion === 1;
      const is5M = sec.marksPerQuestion === 5;

      if (is5M && item.orQuestion) {
        const qA = q;
        const qB = item.orQuestion;

        keyItemsHtml += `
          <div style="border-bottom: 1px solid #ddd; padding: 8px 0; page-break-inside: avoid; break-inside: avoid;">
            <div style="font-weight: bold; color: #1e293b; margin-bottom: 4px;">
              Q.${qNum} (5 Marks) — Either / Or Valuation Key:
            </div>
            <div style="margin-left: 12px; margin-bottom: 6px;">
              <strong>(a) ${qA.questionText}</strong>
              <div style="margin-top: 2px; color: #111; white-space: pre-line; background: #f8fafc; padding: 6px; border-left: 3px solid #0284c7; font-size: 10pt;">
                ${qA.answer}
              </div>
            </div>
            <div style="text-align: center; font-weight: bold; font-size: 9.5pt; color: #64748b; margin: 4px 0;">[ OR ]</div>
            <div style="margin-left: 12px;">
              <strong>(b) ${qB.questionText}</strong>
              <div style="margin-top: 2px; color: #111; white-space: pre-line; background: #f8fafc; padding: 6px; border-left: 3px solid #0284c7; font-size: 10pt;">
                ${qB.answer}
              </div>
            </div>
          </div>
        `;
      } else if (isMCQ) {
        keyItemsHtml += `
          <div style="display: flex; align-items: baseline; justify-content: space-between; padding: 4px 0; border-bottom: 1px dotted #e2e8f0; font-size: 10.5pt; page-break-inside: avoid; break-inside: avoid;">
            <div>
              <span style="font-weight: bold; min-width: 32px; display: inline-block;">Q.${qNum}.</span>
              <span style="font-weight: bold; color: #047857;">Option (${q.correctOption || 'A'}):</span>
              <span style="margin-left: 6px;">${q.options?.[q.correctOption || 'A'] || q.answer}</span>
              ${q.optionsTamil && (langMode === 'tamil' || langMode === 'bilingual') ? `<span style="margin-left: 6px; color: #475569; font-family: 'Noto Serif Tamil', serif;">(${q.optionsTamil[q.correctOption || 'A']})</span>` : ''}
            </div>
            <span style="font-weight: bold; font-size: 9.5pt; color: #334155;">1 Mark</span>
          </div>
        `;
      } else {
        keyItemsHtml += `
          <div style="border-bottom: 1px solid #e2e8f0; padding: 8px 0; page-break-inside: avoid; break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 4px;">
              <span>Q.${qNum}.${item.isCompulsory ? ' * (Compulsory)' : ''} ${q.questionText}</span>
              <span>[ ${sec.marksPerQuestion} Marks ]</span>
            </div>
            <div style="background: #f8fafc; padding: 8px; border-left: 3px solid #059669; font-size: 10pt; color: #0f172a; white-space: pre-line;">
              ${q.answer}
            </div>
            ${q.answerTamil && (langMode === 'tamil' || langMode === 'bilingual') ? `
              <div style="margin-top: 4px; font-family: 'Noto Serif Tamil', serif; font-size: 9.5pt; color: #334155; padding-left: 8px;">
                ${q.answerTamil}
              </div>
            ` : ''}
          </div>
        `;
      }
    });

    sectionsHtml += `
      <div style="margin-top: 18px;">
        <div style="font-weight: bold; font-size: 11pt; background: #f1f5f9; padding: 6px 10px; border-left: 4px solid #334155; margin-bottom: 8px;">
          ${sec.partTitle} (${sec.marksPerQuestion} Mark${sec.marksPerQuestion > 1 ? 's' : ''} Questions)
        </div>
        ${keyItemsHtml}
      </div>
    `;
  });

  return `
    <div class="tn-answer-key" style="font-family: 'Times New Roman', 'Noto Serif Tamil', serif; font-size: 11pt; line-height: 1.4; color: #000000; background: #ffffff; padding: 24px; max-width: 800px; margin: 0 auto;">
      <!-- Key Header -->
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px;">
        <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase;">
          ${paper.schoolName}
        </div>
        <div style="font-size: 12pt; font-weight: bold; color: #0f172a; margin-top: 3px;">
          ${paper.examName} — OFFICIAL ANSWER KEY & VALUATION SCHEME
        </div>
        <div style="font-size: 11pt; font-weight: bold; margin-top: 4px;">
          ${paper.standard} · ${paper.subject} | Max Marks: ${paper.maxMarks}
        </div>
      </div>

      <!-- Key Sections -->
      ${sectionsHtml}

      <div style="text-align: center; font-weight: bold; margin-top: 24px; border-top: 1px solid #cbd5e1; padding-top: 8px; font-size: 10pt; color: #64748b;">
        *** VALUATION SCHEME COMPLETED ***
      </div>
    </div>
  `;
}
