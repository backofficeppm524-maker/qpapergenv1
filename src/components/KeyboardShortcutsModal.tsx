import React from 'react';
import { X, Command, Keyboard, Sparkles, Printer, Save, Search, Maximize, FileText, ArrowRight } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const isMac = typeof window !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const modKey = isMac ? '⌘' : 'Ctrl';

  const shortcutGroups = [
    {
      category: 'Paper Actions & Generation',
      shortcuts: [
        { keys: [`${modKey}`, 'S'], description: 'Save current Question Paper / Draft to Saved Papers', icon: Save },
        { keys: [`${modKey}`, 'P'], description: 'Export PDF or Trigger Clean Print (in Paper / Answer View)', icon: Printer },
        { keys: [`${modKey}`, 'N'], description: 'Jump to Automatic Paper Generator', icon: Sparkles },
        { keys: [`${modKey}`, 'E'], description: 'Jump to Manual Paper Builder', icon: FileText },
      ]
    },
    {
      category: 'Navigation & Search',
      shortcuts: [
        { keys: [`${modKey}`, 'F'], description: 'Focus Search Bar in Question Bank', icon: Search },
        { keys: ['/'], description: 'Quick search questions when not typing', icon: Search },
        { keys: [`${modKey}`, 'Q'], description: 'Start Practice Quiz Mode', icon: Sparkles },
        { keys: [`${modKey}`, 'B'], description: 'Browse Question Bank', icon: FileText },
        { keys: [`${modKey}`, 'K'], description: 'Open this Keyboard Shortcuts cheat sheet', icon: Keyboard },
      ]
    },
    {
      category: 'Practice Quiz & Distraction-Free Exam Mode',
      shortcuts: [
        { keys: ['1', '2', '3', '4'], description: 'Select MCQ Option A, B, C, or D directly', icon: ArrowRight },
        { keys: ['A', 'B', 'C', 'D'], description: 'Alternative key for choosing options', icon: ArrowRight },
        { keys: ['Enter'], description: 'Confirm answer & advance to next question', icon: ArrowRight },
        { keys: ['←', '→'], description: 'Navigate between previous & next question', icon: ArrowRight },
        { keys: ['F11' , 'or', 'Exam Toggle'], description: 'Toggle Distraction-Free Full-Screen Exam Mode', icon: Maximize },
      ]
    },
    {
      category: 'General Dialogs & Views',
      shortcuts: [
        { keys: ['Esc'], description: 'Close any open modal or exit Distraction-Free Exam Mode', icon: X },
        { keys: ['?'], description: 'Show keyboard shortcuts guide anywhere', icon: Keyboard },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7a1818] text-white flex items-center justify-center shadow-sm">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Keyboard Shortcuts & Hotkeys
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Speed up your question paper creation & practice workflow
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-200/60 dark:hover:bg-stone-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
          {shortcutGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2.5">
              <h3 className="text-[11px] uppercase tracking-wider font-bold text-stone-400 dark:text-stone-500">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {group.shortcuts.map((sc, sIdx) => {
                  const Icon = sc.icon;
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50/80 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 hover:border-[#7a1818]/30 transition"
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <Icon className="w-3.5 h-3.5 text-[#7a1818] dark:text-amber-400 shrink-0" />
                        <span className="text-stone-700 dark:text-stone-300 font-medium truncate">
                          {sc.description}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {sc.keys.map((k, kIdx) => (
                          <kbd
                            key={kIdx}
                            className={`px-2 py-0.5 text-[11px] font-mono font-bold rounded-md shadow-xs ${
                              k === 'or'
                                ? 'bg-transparent text-stone-400 shadow-none text-[10px]'
                                : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700'
                            }`}
                          >
                            {k}
                          </kbd>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            Press <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-stone-200 dark:bg-stone-800 rounded font-bold">Esc</kbd> anytime to dismiss
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#7a1818] hover:bg-[#601313] text-white font-semibold rounded-lg shadow transition cursor-pointer text-xs"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
