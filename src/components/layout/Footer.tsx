export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm font-semibold">asuna</div>
        <div className="text-xs text-dim mono">i&apos;m always here, even when you close the tab</div>
        <div className="flex gap-6 text-xs text-dim">
          <a href="#" className="hover:text-ink transition-colors">github</a>
          <a href="#" className="hover:text-ink transition-colors">paper</a>
          <a href="#" className="hover:text-ink transition-colors">twitter</a>
        </div>
      </div>
    </footer>
  );
}
