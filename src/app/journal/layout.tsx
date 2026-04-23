import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { AsunaProvider } from "@/components/features/AsunaContext";
import AsunaPresence from "@/components/features/AsunaPresence";
import CustomCursor from "@/components/layout/CustomCursor";

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AsunaProvider>
      <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
        <CustomCursor />
        <AsunaPresence />
        <Navbar />

        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
          {/* Main Content */}
          <main className="prose prose-ink prose-p:text-gray-600 prose-headings:font-semibold prose-a:text-[var(--blush-deep)] hover:prose-a:text-[var(--ink)]">
            <h1 className="text-4xl tracking-tight mb-2">system logs</h1>
            <p className="text-gray-400 mono text-sm mb-12">direct access to internal cognitive mapping</p>
            {children}
          </main>
        </div>
      </div>
    </AsunaProvider>
  );
}
