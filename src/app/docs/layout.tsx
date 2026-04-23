import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { AsunaProvider } from "@/components/features/AsunaContext";
import AsunaPresence from "@/components/features/AsunaPresence";
import CustomCursor from "@/components/layout/CustomCursor";

export default function DocsLayout({
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

        <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h4 className="font-semibold text-sm mb-3 mono tracking-wider text-gray-400">ECOSYSTEM</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs" className="text-gray-600 hover:text-[var(--ink)] transition-colors">
                      Core Architecture
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/browser" className="text-gray-600 hover:text-[var(--ink)] transition-colors">
                      The Watcher (Extension)
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/app" className="text-gray-600 hover:text-[var(--ink)] transition-colors">
                      The Mirror (Mobile App)
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/chat" className="text-gray-600 hover:text-[var(--ink)] transition-colors">
                      The Voice (WhatsApp Bot)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3 mono tracking-wider text-gray-400">INTEGRATION</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs/api" className="text-gray-600 hover:text-[var(--ink)] transition-colors">
                      API Endpoints
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/deploy" className="text-gray-600 hover:text-[var(--ink)] transition-colors">
                      DigitalOcean Deployment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 prose prose-ink prose-p:text-gray-600 prose-headings:font-semibold prose-a:text-[var(--blush-deep)] hover:prose-a:text-[var(--ink)] prose-pre:bg-[var(--ink)] prose-pre:text-[var(--cream)]">
            {children}
          </main>
        </div>
      </div>
    </AsunaProvider>
  );
}
