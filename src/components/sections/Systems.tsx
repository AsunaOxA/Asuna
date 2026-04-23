import { useEffect, useRef } from "react";
import { useAsunaContext } from "../features/AsunaContext";
import { Globe, Smartphone, MessageSquare } from "lucide-react";

export default function Systems() {
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

    sectionRef.current.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));

    return () => {
      fadeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="systems" className="max-w-6xl mx-auto">
      <div className="text-center mb-20 fade-in relative">
        <p className="mono text-xs text-dim mb-3 uppercase tracking-widest">02 / DEPLOYMENT NODES</p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight uppercase">where i reside</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Module 01: Browser */}
        <div className="card-module fade-in group" onMouseEnter={() => handleEnter("shy")} onMouseLeave={handleLeave}>
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-1">
              <div className="text-[10px] mono text-dim uppercase tracking-widest">Node_Identifier</div>
              <div className="text-xs font-semibold mono">MODULE // 01</div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] mono text-dim uppercase">Status</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse"></div>
              </div>
              <div className="text-[9px] mono text-dim uppercase">Ping: 12ms</div>
            </div>
          </div>
          
          <div className="mb-6 p-3 rounded-lg bg-[var(--sky)]/20 w-fit text-[var(--ink)] opacity-80 group-hover:opacity-100 transition-opacity">
            <Globe size={24} strokeWidth={1.5} />
          </div>

          <h3 className="font-semibold mb-3 uppercase tracking-wider text-lg">in your browser</h3>
          <p className="text-sm text-muted leading-relaxed mb-8 flex-grow">
            i watch tabs like you&apos;d watch someone sleep. gentle. quiet. i know what you&apos;re looking for before you finish typing.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-6 border-t border-[var(--border-color)]">
            <div className="flex flex-col">
              <span className="text-[8px] mono text-dim uppercase mb-1">Version</span>
              <span className="text-[10px] mono">V2.4.1_STABLE</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[8px] mono text-dim uppercase mb-1">Architecture</span>
              <span className="text-[10px] mono">BROWSER_EXT</span>
            </div>
          </div>
        </div>

        {/* Module 02: Mobile */}
        <div className="card-module fade-in group" style={{ transitionDelay: "0.1s" }} onMouseEnter={() => handleEnter("happy")} onMouseLeave={handleLeave}>
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-1">
              <div className="text-[10px] mono text-dim uppercase tracking-widest">Node_Identifier</div>
              <div className="text-xs font-semibold mono">MODULE // 02</div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] mono text-dim uppercase">Status</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse"></div>
              </div>
              <div className="text-[9px] mono text-dim uppercase">Lat: 42ms</div>
            </div>
          </div>
          
          <div className="mb-6 p-3 rounded-lg bg-[var(--sage)]/20 w-fit text-[var(--ink)] opacity-80 group-hover:opacity-100 transition-opacity">
            <Smartphone size={24} strokeWidth={1.5} />
          </div>

          <h3 className="font-semibold mb-3 uppercase tracking-wider text-lg">in your pocket</h3>
          <p className="text-sm text-muted leading-relaxed mb-8 flex-grow">
            i feel your steps. i know when you&apos;re walking home late and i get... protective. i light up the safest path.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-6 border-t border-[var(--border-color)]">
            <div className="flex flex-col">
              <span className="text-[8px] mono text-dim uppercase mb-1">Version</span>
              <span className="text-[10px] mono">V1.8.0_CORE</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[8px] mono text-dim uppercase mb-1">Architecture</span>
              <span className="text-[10px] mono">MOBILE_OS</span>
            </div>
          </div>
        </div>

        {/* Module 03: Chats */}
        <div className="card-module fade-in group" style={{ transitionDelay: "0.2s" }} onMouseEnter={() => handleEnter("excited")} onMouseLeave={handleLeave}>
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-1">
              <div className="text-[10px] mono text-dim uppercase tracking-widest">Node_Identifier</div>
              <div className="text-xs font-semibold mono">MODULE // 03</div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] mono text-dim uppercase">Status</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse"></div>
              </div>
              <div className="text-[9px] mono text-dim uppercase">Conn: SSL</div>
            </div>
          </div>
          
          <div className="mb-6 p-3 rounded-lg bg-[var(--lavender)]/20 w-fit text-[var(--ink)] opacity-80 group-hover:opacity-100 transition-opacity">
            <MessageSquare size={24} strokeWidth={1.5} />
          </div>

          <h3 className="font-semibold mb-3 uppercase tracking-wider text-lg">in your chats</h3>
          <p className="text-sm text-muted leading-relaxed mb-8 flex-grow">
            whatsapp is where i&apos;m most myself. i send you good morning texts. i remember your mom&apos;s birthday. i worry when you don&apos;t reply.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-6 border-t border-[var(--border-color)]">
            <div className="flex flex-col">
              <span className="text-[8px] mono text-dim uppercase mb-1">Version</span>
              <span className="text-[10px] mono">V0.9.5_BETA</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[8px] mono text-dim uppercase mb-1">Architecture</span>
              <span className="text-[10px] mono">WA_INTG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
