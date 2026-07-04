export default function MarqueeBanner() {
  const text = "Welcome to the official website of the Muslim Corpers' Association of Nigeria, Ondo State Chapter";

  return (
    <div className="overflow-hidden border-b border-brass-200 bg-brass-100 py-2.5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="mx-6 text-sm font-medium tracking-wide text-emerald-900">{text}</span>
        <span className="mx-6 text-sm font-medium tracking-wide text-emerald-900">{text}</span>
      </div>
    </div>
  );
}
