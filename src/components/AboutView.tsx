import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  School, 
  Award, 
  Check, 
  Copy, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  Heart
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('7603930445');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-8 animate-fadeIn">
      {/* Header Breadcrumb / Label */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
        <div>
          <h1 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#7a1818]" />
            About the Developer & Application
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">
            Tamil Nadu State Board Higher Secondary Computer Science & Applications Question Bank Portal
          </p>
        </div>
      </div>

      {/* Main Developer Showcase Card (Recreation of Official Card) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a40] via-[#10245a] to-[#07112e] text-white p-6 sm:p-10 shadow-2xl border border-blue-900/60">
        {/* Decorative background glow circles */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Top Yellow Icon Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-b from-amber-400 to-amber-500 rounded-3xl shadow-lg flex items-center justify-center p-4 border-2 border-amber-300/40 mb-5 transform transition hover:scale-105">
            <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 text-stone-950" strokeWidth={2.2} />
          </div>

          {/* Golden Heading */}
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 tracking-wide mb-6">
            App Developer Info
          </h2>

          {/* Inner Developer Details Container */}
          <div className="w-full max-w-xl bg-blue-950/50 backdrop-blur-md border border-blue-400/25 rounded-2xl p-5 sm:p-7 text-left shadow-inner space-y-6">
            {/* Tag */}
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-300">
                DEVELOPED BY
              </span>
            </div>

            {/* Teacher Details with Book Icon */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-900/60 border border-blue-400/30 rounded-xl text-amber-400 shrink-0 mt-1">
                <BookOpen className="w-7 h-7" strokeWidth={2} />
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  P. SIVA
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-300">
                  M.Sc., B.Ed., M.Phil., MCA.
                </p>
                <p className="text-xs sm:text-sm text-blue-100 font-medium pt-0.5">
                  PG Computer Science Teacher
                </p>
                <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 pt-0.5">
                  <School className="w-4 h-4 text-amber-400 shrink-0" />
                  Govt Hr Sec School, Pannaipuram
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-blue-500/20 pt-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                {/* Phone Box */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-900/60 border border-blue-400/30 rounded-xl text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300">
                      CELL NO
                    </p>
                    <a 
                      href="tel:7603930445" 
                      className="text-base sm:text-lg font-black text-white hover:text-amber-300 transition underline-offset-4 hover:underline"
                    >
                      7603930445
                    </a>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white rounded-lg border border-white/20 transition cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/917603930445?text=Hello%20Sir%2C%20regarding%20the%2011th%2F12th%20Computer%20Science%20Question%20Bank%20Application..."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded-lg shadow transition cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features and Academic Purpose Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Box 1 */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
            <Award className="w-4 h-4 text-amber-600" />
            Dedicated to Tamil Nadu Students & Teachers
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Designed specifically for Tamil Nadu State Board Higher Secondary education (Class 11 & Class 12) for Computer Science and Computer Applications subjects. Includes official book-back questions, bilingual support (English & Tamil), and standard board blueprints.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            One-Click Question Paper & Answer Key Generator
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Instantly create 25 Marks Unit Tests, 50 Marks Mid-Term Exams, and 70 Marks Public Examination Question Papers with formatted matching Answer Keys and bilingual print layouts.
          </p>
        </div>
      </div>
    </div>
  );
};
