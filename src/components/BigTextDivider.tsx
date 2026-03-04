export default function BigTextDivider() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* First Line: Massive and Aligned Right */}
        <div className="flex justify-end">
          <h2 className="text-[10vw] md:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] text-black text-right">
            SIGNATURE BAGS
          </h2>
        </div>

        {/* Second Line Row: Description on Left, Title on Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-2 md:mt-0">
          {/* Descriptive Text: Small, uppercase, and positioned to the left */}
          <div className="max-w-[280px] md:max-w-xs mb-6 md:mb-2">
            <p className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-[0.2em] leading-relaxed font-medium">
              At Craft_ByIbk, we offer more than just bags — we provide a
              [cite_start]canvas for your individuality[cite: 1, 4]. Our
              thoughtfully designed artisanal pieces blend style and comfort,
              allowing you to make a statement with every step.
            </p>
          </div>

          {/* Second Part of Heading: Also Aligned Right */}
          <h2 className="text-[10vw] md:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] text-black text-right">
            & ARTISANAL
          </h2>
        </div>
      </div>
    </section>
  );
}
