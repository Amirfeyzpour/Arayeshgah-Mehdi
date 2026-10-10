import mehdiImage from "../../../../../public/assests/Mehdi.png";

const SectionA = () => {
  return (
    <section
      className="overflow-hidden py-10 box-border bg-[#090909] text-white"
      dir="ltr"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch md:grid-cols-2">

        {/* Right Side - Introduction */}
        <div className="order-1 flex flex-col justify-center px-6 py-12 sm:px-10 md:order-2 md:px-10 lg:px-14 lg:py-16">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#c6a477]">
              ABOUT ME
            </span>

            <span className="h-px w-12 bg-[#c6a477]/70" />
          </div>

          {/* Heading */}
          <h1 dir="rtl" className="text-3xl  font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            یکم بیشتر
            <br />
            با هم آشنا بشیم
            <span className="text-[#c6a477]">...</span>
          </h1>

          {/* Description */}
          <div className="mt-7 space-y-5 text-justify text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">

            <p dir="rtl">
              من مهدی هستم؛ بیش از ۱۷ ساله که در حرفه آرایشگری فعالیت
              می‌کنم. متولد ۱۳۶۴ هستم و با سال‌ها تجربه در داخل و خارج
              از ایران، مسیر حرفه‌ای خودم رو با عشق به این حرفه ادامه داده‌ام.
            </p>

            <p dir="rtl">
              برای من آرایشگری فقط کوتاه کردن مو نیست؛ ترکیبی از هنر،
              شناخت استایل و توجه به جزئیاتیه که باعث می‌شه هر فرد،
              ظاهر منحصربه‌فرد خودش رو داشته باشه.
            </p>

            <p dir="rtl">
              در مجموعه ما خدمات متنوعی از جمله پاکسازی پوست، کراتینه مو،
              گریم تخصصی داماد و ماساژ مو ارائه می‌شه. همچنین تلاش می‌کنیم
              مدل‌های مو رو مطابق با جدیدترین ترندها و ژورنال‌های جهانی
              اجرا کنیم تا هر مشتری تجربه‌ای حرفه‌ای و متفاوت داشته باشه.
            </p>

          </div>

          {/* Signature */}
          <div className="mt-8 self-start">
            <span className="font-serif text-[45px] italic tracking-wide text-[#c6a477]">
              Mehdi
            </span>

            <div className="mt-2 ml-1 h-px w-30 -rotate-11 bg-[#c6a477]" />
          </div>

        </div>

        {/* Left Side - Portrait */}
        <div className="order-2 min-h-100 md:order-1 md:min-h-145 lg:min-h-163">
          <img
            src={mehdiImage}
            alt="مهدی، آرایشگر حرفه‌ای مردانه"
            className="block h-full min-h-100 w-full object-cover object-center md:min-h-145 lg:min-h-163"
          />
        </div>

      </div>
    </section>
  );
};

export default SectionA;

