import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, Pause, RotateCcw, Bell, ChevronDown, Check, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface FocusTimerProps {
  initialMinutes?: number;
  onTimeUp?: () => void;
  activePaperTime?: string;
}

export const FocusTimer: React.FC<FocusTimerProps> = ({
  initialMinutes = 90,
  onTimeUp,
  activePaperTime
}) => {
  // Parse minutes from activePaperTime (e.g. "1.30 Hours" -> 90 mins, "3.00 Hours" -> 180 mins, "45 Mins" -> 45)
  const getPresetFromTime = (timeStr?: string): number => {
    if (!timeStr) return 90;
    const lower = timeStr.toLowerCase();
    if (lower.includes('3.00') || lower.includes('3 hours') || lower.includes('3 hrs') || lower.includes('180')) return 180;
    if (lower.includes('2.30') || lower.includes('2.5') || lower.includes('150')) return 150;
    if (lower.includes('1.30') || lower.includes('1.5') || lower.includes('90')) return 90;
    if (lower.includes('45')) return 45;
    if (lower.includes('60') || lower.includes('1 hour') || lower.includes('1 hr')) return 60;
    return 90;
  };

  const [totalSeconds, setTotalSeconds] = useState<number>(() => getPresetFromTime(activePaperTime) * 60);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(() => getPresetFromTime(activePaperTime) * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showFinishedAlert, setShowFinishedAlert] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update timer preset when paper time changes and timer is not running
  useEffect(() => {
    if (!isRunning && activePaperTime) {
      const mins = getPresetFromTime(activePaperTime);
      setTotalSeconds(mins * 60);
      setRemainingSeconds(mins * 60);
    }
  }, [activePaperTime]);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setShowFinishedAlert(true);
            if (onTimeUp) onTimeUp();
            // Play gentle browser beep if sound enabled
            if (soundEnabled && typeof window !== 'undefined' && 'AudioContext' in window) {
              try {
                const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.value = 587.33; // D5
                gain.gain.setValueAtTime(0.3, ctx.currentTime);
                osc.start();
                osc.stop(ctx.currentTime + 0.8);
              } catch (e) {
                // Ignore audio context autoplay restriction
              }
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, remainingSeconds, onTimeUp, soundEnabled]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectPreset = (mins: number) => {
    setIsRunning(false);
    setShowFinishedAlert(false);
    setTotalSeconds(mins * 60);
    setRemainingSeconds(mins * 60);
    setIsDropdownOpen(false);
  };

  const handleTogglePlay = () => {
    if (remainingSeconds === 0) {
      setRemainingSeconds(totalSeconds);
    }
    setShowFinishedAlert(false);
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setShowFinishedAlert(false);
    setRemainingSeconds(totalSeconds);
  };

  // Format time HH:MM:SS
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = totalSeconds > 0 ? ((totalSeconds - remainingSeconds) / totalSeconds) * 100 : 0;
  const isUrgent = remainingSeconds > 0 && remainingSeconds <= 300; // < 5 mins

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      {/* Main Pill in Navbar */}
      <div 
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-all shadow-sm ${
          showFinishedAlert
            ? 'bg-red-600 text-white border-red-400 animate-pulse'
            : isRunning
            ? isUrgent
              ? 'bg-red-500/20 text-red-200 border-red-400 animate-pulse'
              : 'bg-emerald-500/20 text-emerald-200 border-emerald-400/50'
            : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/15'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1.5 hover:text-white cursor-pointer"
          title="Exam Focus Timer Settings"
        >
          <Timer className={`w-3.5 h-3.5 ${isRunning ? 'text-amber-300 animate-spin-slow' : 'text-amber-300/80'}`} />
          <span className="font-mono font-bold tracking-tight text-white">
            {formatTime(remainingSeconds)}
          </span>
          <ChevronDown className="w-3 h-3 text-stone-300 opacity-70" />
        </button>

        <div className="h-3 w-px bg-white/20 mx-0.5" />

        {/* Quick Action Button (Play / Pause) */}
        <button
          type="button"
          onClick={handleTogglePlay}
          className={`p-1 rounded-full hover:bg-white/20 transition cursor-pointer ${
            isRunning ? 'text-amber-300 hover:text-amber-200' : 'text-emerald-300 hover:text-emerald-200'
          }`}
          title={isRunning ? 'Pause Timer' : 'Start Exam Timer'}
        >
          {isRunning ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
        </button>

        {/* Reset Button */}
        {(remainingSeconds !== totalSeconds || isRunning) && (
          <button
            type="button"
            onClick={handleReset}
            className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/20 transition cursor-pointer"
            title="Reset Timer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-stone-900 text-stone-100 border border-stone-700 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
              <Timer className="w-4 h-4" />
              <span>Simulate Exam Timing</span>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="text-stone-400 hover:text-white p-1 rounded hover:bg-stone-800 transition"
              title={soundEnabled ? 'Disable sound alert' : 'Enable sound alert'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className="text-[11px] text-stone-400 mb-2 leading-relaxed">
            Select a target exam duration to practice time management during mock tests:
          </p>

          {/* Preset Buttons */}
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {[
              { mins: 45, label: '45 Mins', sub: 'Unit Test / 25M' },
              { mins: 90, label: '1.30 Hrs', sub: 'Mid-term / 50M' },
              { mins: 150, label: '2.30 Hrs', sub: 'Model Exam / 70M' },
              { mins: 180, label: '3.00 Hrs', sub: 'Public Board / 100M' }
            ].map(preset => {
              const isSelected = totalSeconds === preset.mins * 60;
              return (
                <button
                  key={preset.mins}
                  onClick={() => handleSelectPreset(preset.mins)}
                  className={`p-2 rounded-lg border text-left text-xs transition cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold'
                      : 'bg-stone-800/80 border-stone-700 hover:bg-stone-800 text-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{preset.label}</span>
                    {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                  </div>
                  <span className="text-[10px] text-stone-400 block mt-0.5">{preset.sub}</span>
                </button>
              );
            })}
          </div>

          {/* Progress bar inside dropdown */}
          <div className="space-y-1 pt-1 border-t border-stone-800">
            <div className="flex items-center justify-between text-[11px] text-stone-400">
              <span>Time Elapsed: {Math.round(progressPercent)}%</span>
              <span className="font-mono text-stone-200">{formatTime(remainingSeconds)} left</span>
            </div>
            <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  isUrgent ? 'bg-red-500' : 'bg-amber-400'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 mt-3 pt-2 border-t border-stone-800">
            <button
              onClick={handleReset}
              className="px-2.5 py-1 text-xs text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded transition"
            >
              Reset
            </button>
            <button
              onClick={handleTogglePlay}
              className={`px-3 py-1 text-xs font-bold rounded shadow transition cursor-pointer flex items-center gap-1 ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-400 text-stone-950'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3 h-3" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" /> Start Timer
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
