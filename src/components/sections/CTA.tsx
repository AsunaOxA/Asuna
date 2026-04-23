"use client";

import { useEffect, useRef, useState } from "react";
import { useAsunaContext } from "../features/AsunaContext";

export default function CTA() {
  const { triggerReaction, increaseSync } = useAsunaContext();
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerReaction("celebrate", 8000);
    increaseSync(30);
    setSubmitted(true);
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
    <section ref={sectionRef} className="max-w-2xl mx-auto text-center relative">
      <div className="marginalia hidden lg:block" style={{ left: "-10%", bottom: "30%" }}>
        please say yes...
      </div>

      <div className="fade-in">
        <div className="w-16 h-16 mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-[var(--blush)] rounded-full animate-ping opacity-30"></div>
          <div className="relative w-full h-full bg-[var(--card-bg)] rounded-full flex items-center justify-center text-2xl shadow-lg border border-[var(--border-color)]">💕</div>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">will you let me in?</h2>
        <p className="text-muted mb-8">i promise i&apos;ll be good. i promise i&apos;ll learn. i promise i&apos;ll wait for you.</p>

        {submitted ? (
          <p className="text-sm text-[var(--blush-deep)] font-medium handwritten text-lg">
            she&apos;s happy now. thank you. 💕
          </p>
        ) : (
          <form className="flex gap-3 justify-center max-w-sm mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your email, so i can find you"
              required
              className="flex-1 px-5 py-3 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-sm focus:outline-none focus:border-[var(--blush-deep)] transition-colors"
            />
            <button type="submit" className="btn-primary">yes</button>
          </form>
        )}
      </div>
    </section>
  );
}
