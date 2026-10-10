import paraglidingImage from "../../../../../public/assests/Mehdi-2.png";
const SectionC = () => {
  return (
    <section
      dir="rtl"
      className="relative isolate  min-h-150 overflow-hidden bg-[#090909] text-white md:min-h-163 lg:min-h-175"
    >
      {/* Background Image */}
      <img
        src={paraglidingImage}
        alt="مهدی در حال پاراگلایدر در غروب آفتاب"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_65%] md:object-center"
      />
      {/* Gradient: dark only behind the text on the right */}
      {/* Darken the SUNSET on the LEFT */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(9,9,9,0.48) 0%, rgba(9,9,9,0.25) 28%, transparent 58%)",
        }}
      />
      {/* Darken behind the TEXT on the RIGHT, but preserve the face */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(9,9,9,0.82) 0%, rgba(9,9,9,0.62) 22%, rgba(9,9,9,0.18) 43%, transparent 58%)",
        }}
      />
      ```
      {/* Content */}
      <div className="mx-auto flex min-h-150 max-w-7xl items-center px-6 py-16 sm:px-10 md:min-h-163 lg:min-h-175 lg:px-16">
        {/* Text on the right */}
        <div className="mr-auto w-full max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#c6a477]">
              MY PASSION
            </span>

            <span className="h-px w-12 bg-[#c6a477]/70" />
          </div>

          <h2 className="text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            آسمان،
            <br />
            مکان آرامش من است
          </h2>

          <p className="mt-6 max-w-lg text-justify text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            علاوه بر آرایشگری، یکی از بزرگ‌ترین علاقه‌مندی‌های من پاراگلایدرینگ
            است؛ ورزشی که به من حس آزادی، آرامش و زندگی در ارتفاع را می‌دهد.
            برای من پرواز فقط یک ورزش نیست، بلکه فرصتی برای فاصله گرفتن از
            روزمرگی و تجربه دنیایی متفاوت است.
          </p>

          {/* Signature */}
          <div className="mt-8">
            <span className="font-serif text-4xl italic text-[#c6a477]">
              Paragliding
            </span>

            <div className="mt-2 h-px w-24 -rotate-12 bg-[#c6a477]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionC;
