"use client";

import { useAsunaContext } from "../features/AsunaContext";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { triggerReaction, increaseSync } = useAsunaContext();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount before rendering theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="max-w-6xl mx-auto flex items-center w-full">
        {/* Left side: Logo */}
        <div className="flex-1">
          <a href="#" className="text-lg font-semibold tracking-tight">asuna</a>
        </div>
        
        {/* Center: Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm uppercase tracking-wider">
          <a href="#about" className="opacity-50 hover:opacity-100 transition-opacity">about</a>
          <a href="#systems" className="opacity-50 hover:opacity-100 transition-opacity">systems</a>
          <a href="#research" className="opacity-50 hover:opacity-100 transition-opacity">research</a>
        </div>

        {/* Right side: Actions */}
        <div className="flex-1 flex items-center justify-end gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 opacity-50 hover:opacity-100 transition-opacity rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            className="btn-primary text-xs py-2.5 px-5 uppercase tracking-wider"
            onClick={() => { triggerReaction("greet", 6000); increaseSync(15); }}
          >
            maybe later
          </button>
        </div>
      </div>
    </nav>
  );
}
