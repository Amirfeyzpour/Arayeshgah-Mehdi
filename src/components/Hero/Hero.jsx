import { Link } from "react-router-dom";
import barberImage from "../../../public/assests/image-1.jpg";

const Hero = () => {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <img
        src={barberImage}
        alt="آرایشگاه مردانه مهدی"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/95" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 lg:px-10">

        <div className="w-full max-w-3xl">

          {/* Small Title */}
          <div className="mb-6 flex items-center gap-4">

            <span className="h-px w-14 bg-amber-400" />

            <span className="text-sm font-medium tracking-[0.25em] text-amber-400">
              MEN'S BARBERSHOP
            </span>

          </div>


          {/* Main Title */}
          <h1 className="text-6xl font-black leading-[1.1] sm:text-7xl lg:text-8xl">

            <span className="block text-white">
              آرایشگاه
            </span>

            <span className="mt-2 block text-amber-400">
              مهدی
            </span>

          </h1>


          {/* Description */}
          <p className="mt-7 text-lg font-medium text-zinc-200 sm:text-xl">
            استایل بهتر، اعتماد به نفس بیشتر
          </p>

          <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            ارائه خدمات تخصصی اصلاح مو و صورت، استایلینگ و پیرایش
            حرفه‌ای آقایان با بالاترین کیفیت.
          </p>


          {/* Contact Information */}
          <div className="mt-10 flex flex-wrap items-center gap-y-6">

            {/* Phone */}
            <div className="flex items-center gap-3 pl-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400/60 text-lg text-amber-400">
                ☎
              </div>

              <div>
                <p className="mb-1 text-xs text-zinc-500">
                  شماره تماس
                </p>

                <a
                  href="tel:09123456789"
                  className="text-sm font-medium text-white transition hover:text-amber-400"
                >
                  09195756500
                </a>
              </div>

            </div>


            {/* Divider */}
            <div className="hidden h-12 w-px bg-white/20 sm:block" />


            {/* Working Hours */}
            <div className="flex items-center gap-3 px-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400/60 text-lg text-amber-400">
                ◷
              </div>

              <div>
                <p className="mb-1 text-xs text-zinc-500">
                  ساعت کاری
                </p>

                <p className="text-sm font-medium text-white">
                  ۹ صبح تا ۱۰ شب
                </p>
              </div>

            </div>


            {/* Divider */}
            <div className="hidden h-12 w-px bg-white/20 sm:block" />


            {/* Address */}
            <div className="flex items-center gap-3 pr-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400/60 text-lg text-amber-400">
                ⌖
              </div>

              <div>
                <p className="mb-1 text-xs text-zinc-500">
                  آدرس
                </p>

                <p className="max-w-48 text-sm font-medium leading-6 text-white">
                  تهران، میدان پونک
                </p>
              </div>

            </div>

          </div>


          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full border border-amber-400 bg-amber-400 px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-transparent hover:text-amber-400"
            >
              رزرو وقت

              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>


            <Link
              to="/services"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              مشاهده خدمات
            </Link>

          </div>

        </div>

      </div>


      {/* Side Text */}
      <div className="absolute bottom-20 left-8 z-10 hidden flex-col items-center gap-4 text-[10px] tracking-[0.4em] text-zinc-500 lg:flex">

        <span className="h-16 w-px bg-amber-400/60" />

        <span className="[writing-mode:vertical-rl]">
          STYLE • CUT • CONFIDENCE
        </span>

      </div>

    </section>
  );
};

export default Hero;