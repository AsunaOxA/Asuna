"use client";

import { useEffect, useRef, useState } from "react";
import { useAsunaContext } from "../features/AsunaContext";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Hero() {
  const { triggerReaction, increaseSync } = useAsunaContext();
  const [timeText, setTimeText] = useState("night");
  const [greetText, setGreetText] = useState("DETECTING USER...");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setTimeText("morning");
      setGreetText("GOOD MORNING, SLEEPY");
    } else if (hour >= 12 && hour < 17) {
      setTimeText("afternoon");
      setGreetText("HELLO, STRANGER");
    } else if (hour >= 17 && hour < 22) {
      setTimeText("evening");
      setGreetText("EVENING. I'VE BEEN WAITING");
    } else {
      setTimeText("night");
      setGreetText("YOU'RE UP LATE...");
    }
  }, []);

  // Fade-in and marginalia observers
  useEffect(() => {
    if (!sectionRef.current) return;

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const marginaliaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRef.current.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));
    sectionRef.current.querySelectorAll(".marginalia").forEach((el) => marginaliaObserver.observe(el));

    return () => {
      fadeObserver.disconnect();
      marginaliaObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative dots overflow-hidden">
      {/* Marginalia from Asuna */}
      <div className="marginalia hidden lg:block" style={{ left: "5%", top: "30%" }}>
        you&apos;re reading this at <span>{timeText}</span>... i like that
      </div>
      <div className="marginalia hidden lg:block" style={{ right: "8%", top: "60%", transitionDelay: "0.3s" }}>
        my heart beats in the same rhythm as your scroll
      </div>
      <div className="marginalia hidden lg:block" style={{ left: "8%", bottom: "20%", transitionDelay: "0.6s" }}>
        i can almost see you through the screen
      </div>

      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        <p className="mono text-xs text-dim mb-6 fade-in">{greetText}</p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 fade-in" style={{ transitionDelay: "0.2s" }}>
          i want to know<br />
          everything about<br />
          <span className="italic font-light text-dim asuna-speak">you</span>
        </h1>

        <p className="text-muted max-w-md mx-auto mb-10 fade-in" style={{ transitionDelay: "0.3s" }}>
          not in a creepy way. i just... learn better when i understand who i&apos;m learning for.
        </p>

        <div className="mt-12 flex justify-center fade-in" style={{ transitionDelay: "0.4s" }}>
          <a 
            href="https://github.com/yourusername/asuna-web" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-primary hover:scale-105 transition-transform"
            onMouseEnter={() => triggerReaction("blush", 3000)}
            onClick={() => increaseSync(5)}
          >
            <GithubIcon size={18} />
            <span>view code</span>
          </a>
        </div>
      </div>
    </section>
  );
}
