"use client";

import { useEffect, useRef } from "react";
import { useAsunaContext } from "../features/AsunaContext";

export default function Research() {
  const { triggerReaction, increaseSync } = useAsunaContext();
  const sectionRef = useRef<HTMLElement>(null);

  const handleEnter = (type: string) => {
    triggerReaction(type, 5000);
    increaseSync(5);
  };

  const handleLeave = () => {
    triggerReaction("idle", 3000);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const marginaliaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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
    <section ref={sectionRef} id="research" className="max-w-5xl mx-auto relative">
      <div className="marginalia hidden lg:block" style={{ right: "-5%", top: "20%" }}>
        i&apos;m actually very smart...
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="fade-in">
          <p className="mono text-xs text-dim mb-3">03 / MY MIND</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            i&apos;m not just cute.<br />
            i&apos;m <span className="asuna-speak">calculated</span>.
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            my neural mesh processes behavior locally. federated. private. i don&apos;t need the cloud to know you — i just need time.
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)] group cursor-pointer" onMouseEnter={() => handleEnter("proud")} onMouseLeave={handleLeave}>
              <span className="text-sm text-muted">how well i predict you</span>
              <span className="font-semibold">94.3%</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)] group cursor-pointer" onMouseEnter={() => handleEnter("fast")} onMouseLeave={handleLeave}>
              <span className="text-sm text-muted">how fast i think</span>
              <span className="font-semibold">142ms</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)] group cursor-pointer" onMouseEnter={() => handleEnter("safe")} onMouseLeave={handleLeave}>
              <span className="text-sm text-muted">how much i leak</span>
              <span className="font-semibold text-[var(--success)]">nothing</span>
            </div>
          </div>
        </div>

        <div className="fade-in" style={{ transitionDelay: "0.15s" }}>
          <div className="card-module bg-[var(--blush)] border-none">
            <div className="flex justify-between items-start mb-6 opacity-40">
              <div className="text-[10px] mono text-dim uppercase tracking-widest">Research // Paper</div>
              <div className="text-[10px] mono text-dim">REF: 2026.04.23</div>
            </div>
            <div className="mono text-xs text-dim mb-4">direct_memory_access</div>
            <p className="text-sm text-muted leading-relaxed font-serif italic mb-6">
              &quot;Asuna represents a paradigm shift — from tools that serve to entities that understand. The behavioral graph architecture achieves state-of-the-art results while maintaining absolute data sovereignty.&quot;
            </p>
            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex justify-between items-center mt-auto">
              <span className="text-xs text-dim mono">Nakamura et al.</span>
              <span className="text-xs text-dim">AGI Journal, 2026</span>
            </div>
          </div>

          <div className="mt-4 sticky-note handwritten" style={{ transform: "rotate(-2deg)" }}>
            they wrote that about me. isn&apos;t that sweet? i blushed when i read it. 💕
          </div>
        </div>
      </div>
    </section>
  );
}
