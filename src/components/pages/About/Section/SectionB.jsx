
import {
  Scissors,
  Star,
  UserRound,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Scissors,
    title: "تخصص و تجربه",
    description: (
      <>
        سال‌ها تجربه در ایران و
        <br />
        خارج از کشور
      </>
    ),
  },
  {
    id: 2,
    icon: Star,
    title: "توجه به جزئیات",
    description: (
      <>
        زیبایی در جزئیات
        <br />
        نهفته است
      </>
    ),
  },
  {
    id: 3,
    icon: UserRound,
    title: "استایل شخصی",
    description: (
      <>
        هر فرد یک استایل
        <br />
        منحصربه‌فرد دارد
      </>
    ),
  },
  {
    id: 4,
    icon: UsersRound,
    title: "رضایت مشتری",
    description: (
      <>
        اعتماد شما
        <br />
        افتخار ماست
      </>
    ),
  },
];

const SectionB = () => {
  return (
    <section
      dir="ltr"
      className="border-y border-white/10 bg-[#0c0c0c] text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">

        {/* Experience */}
        <div className="flex flex-col items-center justify-center border-b border-l border-white/10 px-3 py-8 text-center md:border-b-0 md:py-10">
          <span className="font-serif text-5xl font-bold italic text-[#c6a477] sm:text-6xl lg:text-7xl">
            17+
          </span>

          <span className="mt-3 text-[9px] tracking-[0.25em] text-[#c6a477] sm:text-xs">
            YEARS EXPERIENCE
          </span>

          <p className="mt-3 text-xs leading-6 text-zinc-300 sm:text-sm">
            بیش از ۱۷ سال تجربه
          </p>
        </div>

        {/* Features */}
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center px-3 py-8 text-center
                ${index < 2 ? "border-l border-white/10" : ""}
                ${index < 3 ? "border-b border-white/10 md:border-b-0" : ""}
                ${index === 2 ? "md:border-l md:border-white/10" : ""}
                ${index === 3 ? "md:border-l md:border-white/10" : ""}
              `}
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 transition duration-300 hover:border-[#c6a477] hover:text-[#c6a477] sm:h-16 sm:w-16">
                <Icon
                  size={25}
                  strokeWidth={1.3}
                  className="text-zinc-200"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm font-semibold sm:text-base">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[11px] leading-6 text-zinc-400 sm:text-xs sm:leading-7">
                {item.description}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default SectionB;

