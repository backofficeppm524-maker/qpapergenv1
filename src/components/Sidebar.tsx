import React from 'react';
import { 
  Home, 
  Database, 
  BookMarked, 
  KeyRound, 
  FileSpreadsheet, 
  Sliders, 
  CheckSquare, 
  Edit3, 
  Files, 
  FolderArchive,
  GraduationCap,
  Info,
  Sparkles,
  BarChart3,
  Trophy
} from 'lucide-react';
import { SubjectData, QuestionPaper } from '../types';
import { getSubjectStats } from './HomeOverview';

interface SidebarProps {
  activeSubject: SubjectData;
  allSubjects?: SubjectData[];
  savedPapers?: QuestionPaper[];
  activeView: string;
  onNavigate: (view: string) => void;
  savedPapersCount: number;
  onExportData?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  tag?: string;
  badge?: string;
  highlight?: boolean;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSubject,
  activeView,
  onNavigate,
  savedPapersCount
}) => {
  const activeStats = getSubjectStats(activeSubject);

  const navItems: NavGroup[] = [
    {
      group: 'BROWSE & PRACTICE',
      items: [
        { id: 'overview', label: 'Home / Overview', icon: Home },
        { id: 'subject-overview', label: 'Subject Overview & Gaps', icon: BarChart3, tag: 'New' },
        { id: 'chapterwise-quiz', label: 'Chapterwise Quiz Exam', icon: GraduationCap, tag: 'MCQ Exam' },
        { id: 'quiz-leaderboard', label: 'Quiz Leaderboard', icon: Trophy, tag: 'High Scores' },
        { id: 'practice-quiz', label: 'Practice Quiz (10 Qs)', icon: Sparkles, tag: 'Interactive' },
        { id: 'question-bank', label: 'Full Question Bank', icon: Database, badge: `${activeStats.total}` },
        { id: 'browse-chapter', label: 'Browse by Chapter', icon: BookMarked, badge: `${activeSubject.chapters.length}` },
        { id: 'answers-overview', label: 'Answers', icon: KeyRound }
      ]
    },
    {
      group: 'QUESTION PAPERS',
      items: [
        { id: 'qp-25', label: '25 Marks Paper', icon: FileSpreadsheet, tag: 'Unit Test' },
        { id: 'qp-50', label: '50 Marks Paper', icon: FileSpreadsheet, tag: 'Mid-term' },
        { id: 'qp-70', label: '70 Marks Paper', icon: FileSpreadsheet, tag: 'Quarterly/Half/Board' },
        { id: 'qp-custom', label: 'Custom Paper', icon: Sliders, tag: 'Blueprint' },
        { id: 'qp-manual', label: 'Manual Selection Paper', icon: CheckSquare },
        { id: 'qp-custom-manual', label: 'Custom QP with Manual', icon: Edit3 }
      ]
    },
    {
      group: 'SAVED',
      items: [
        { id: 'saved-papers', label: 'All Question Papers', icon: Files, badge: savedPapersCount > 0 ? `${savedPapersCount}` : undefined },
        { id: 'saved-keys', label: 'Answer Keys', icon: FolderArchive }
      ]
    },
    {
      group: 'ABOUT',
      items: [
        { 
          id: 'about', 
          label: 'About Developer', 
          icon: Info, 
          tag: 'Info'
        }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-[#1e293b] text-slate-200 min-h-screen flex flex-col border-r border-slate-700 select-none">
      {/* Subject Header Badge */}
      <div className="p-4 bg-[#0f172a] border-b border-slate-700/80">
        <div className="flex items-start gap-2.5">
          <div className="p-2 bg-amber-500 text-stone-950 rounded-md font-bold mt-0.5">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white leading-tight">
              {activeSubject.standard} - {activeSubject.name}
            </h2>
            <p className="text-[11px] text-amber-300/90 font-medium mt-0.5">
              {activeSubject.board}
            </p>
            <p className="text-[10px] text-slate-400 mt-1">
              Higher Secondary Question & Key System
            </p>
          </div>
        </div>
      </div>

      {/* Nav List */}
      <div className="flex-1 py-3 px-2 space-y-4 overflow-y-auto">
        {navItems.map((sec, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {sec.group}
            </h3>
            <div className="space-y-0.5">
              {sec.items.map(item => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors cursor-pointer group text-left ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 font-bold shadow'
                        : item.highlight
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-stone-950' : item.highlight ? 'text-amber-400' : 'text-slate-400 group-hover:text-amber-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {item.tag && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                          isActive ? 'bg-stone-900 text-amber-300' : 'bg-slate-800 text-slate-300'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                      {item.badge && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                          isActive ? 'bg-stone-900 text-white' : item.highlight ? 'bg-amber-400 text-stone-950' : 'bg-slate-700 text-slate-200'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="p-3 bg-[#0f172a] border-t border-slate-700/80 text-[11px] text-slate-400 text-center">
        <p className="font-semibold text-slate-300">Tamil Nadu Curriculum</p>
        <p className="text-[10px] text-slate-400">Standard Question Blueprint Engine</p>
      </div>
    </aside>
  );
};
