export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white py-8">
      <div className="page-wrap flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#bef227] text-[11px] font-bold">
            TF
          </span>
          <span className="font-semibold">TractionFlo</span>
        </div>
        <p className="text-[13px] text-[#888]">© {new Date().getFullYear()} TractionFlo</p>
      </div>
    </footer>
  );
}
