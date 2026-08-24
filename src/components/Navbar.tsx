import React from 'react';
import { 
  FileText, 
  Languages, 
  BookOpen, 
  CheckCircle, 
  Printer, 
  Sparkles,
  Layers,
  ArrowLeft,
  Info,
  Timer
} from 'lucide-react';
import { LanguageMode, SubjectData } from '../types';
import { FocusTimer } from './FocusTimer';

interface NavbarProps {
  activeSubject: SubjectData;
  languageMode: LanguageMode;
  onLanguageChange: (mode: LanguageMode) => void;
  activeView: string;
  onNavigate: (view: string) => void;
  savedPapersCount: number;
  activePaperTime?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSubject,
  languageMode,
  onLanguageChange,
  activeView,
  onNavigate,
  savedPapersCount,
  activePaperTime
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#7a1818] text-white shadow-md">
      {/* Top Banner */}
      <div className="bg-[#601212] px-4 py-2 border-b border-red-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div>
            <h1 className="text-sm md:text-base font-bold tracking-wide uppercase">
              Tamilnadu Higher Secondary Question Paper & Answer Key Generator
            </h1>
            <p className="text-xs text-red-200">
              Select a subject and standard below to start building a printable question paper and matching answer key
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Exam Focus Timer in Navbar */}
            <FocusTimer activePaperTime={activePaperTime} />

            <button
              onClick={() => onNavigate('practice-quiz')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded shadow transition-all cursor-pointer ${
                activeView === 'practice-quiz'
                  ? 'bg-amber-400 text-stone-950 font-bold'
                  : 'bg-white/15 hover:bg-white/25 text-white'
              }`}
              title="Practice Quiz - Test knowledge with 10 questions"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Practice Quiz
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded shadow transition-all cursor-pointer ${
                activeView === 'about'
                  ? 'bg-amber-400 text-stone-950 font-bold'
                  : 'bg-white/15 hover:bg-white/25 text-white'
              }`}
              title="About Application & Developer Info"
            >
              <Info className="w-3.5 h-3.5 text-amber-300" />
              About
            </button>

            {activeView !== 'home' && (
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Change Subject
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Secondary Bar */}
      <div className="bg-[#7a1818] px-4 py-2 border-b border-red-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
          {/* Active Subject & Language Indicator */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-amber-400 text-stone-900 font-bold px-2 py-0.5 rounded text-xs">
              {activeSubject.standard}
            </span>
            <span className="font-semibold text-stone-100">
              {activeSubject.name} {activeSubject.nameTamil ? `(${activeSubject.nameTamil})` : ''}
            </span>
            {activeSubject.isCustomUploaded && (
              <span className="bg-emerald-600 text-white text-[11px] px-2 py-0.5 rounded font-medium">
                Custom Uploaded Subject
              </span>
            )}
          </div>

          {/* Language Toggle Controls */}
          <div className="flex items-center gap-2">
            <span className="text-red-200 text-xs flex items-center gap-1">
              <Languages className="w-3.5 h-3.5" /> Medium:
            </span>
            <div className="inline-flex bg-red-950/60 p-0.5 rounded border border-red-800/60">
              <button
                onClick={() => onLanguageChange('english')}
                className={`px-2.5 py-0.5 rounded text-xs font-medium transition cursor-pointer ${
                  languageMode === 'english'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('tamil')}
                className={`px-2.5 py-0.5 rounded text-xs font-medium transition cursor-pointer ${
                  languageMode === 'tamil'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                தமிழ் (Tamil)
              </button>
              <button
                onClick={() => onLanguageChange('bilingual')}
                className={`px-2.5 py-0.5 rounded text-xs font-medium transition cursor-pointer ${
                  languageMode === 'bilingual'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Bilingual (இருமொழி)
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
