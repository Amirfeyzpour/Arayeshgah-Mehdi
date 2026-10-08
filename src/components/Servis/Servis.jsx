import haircut from "../../../public/assests/image-2.jpg"
import beard from "../../../public/assests/image-3.jpg"
import classic from "../../../public/assests/image-4.jpg"
import groom from "../../../public/assests/image-5.jpg"

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "اصلاح تخصصی مو",
      subtitle: "HAIRCUT",
      description: "اصلاح حرفه‌ای متناسب با فرم صورت و استایل شخصی شما.",
      image: haircut,
    },
    {
      id: 2,
      number: "02",
      title: "طراحی و اصلاح ریش",
      subtitle: "BEARD DESIGN",
      description: "فرم‌دهی و طراحی ریش با توجه به فرم صورت و استایل شما.",
      image: beard,
    },
    {
      id: 3,
      number: "03",
      title: "اصلاح کلاسیک",
      subtitle: "CLASSIC CUT",
      description: "یک اصلاح تمیز و کلاسیک برای استایلی خاص و مردانه.",
      image: classic,
    },
    {
      id: 4,
      number: "04",
      title: "پکیج داماد",
      subtitle: "GROOM PACKAGE",
      description: "اصلاح مو، ریش و آماده‌سازی کامل برای روز خاص شما.",
      image: groom,
    },
  ];

  return (
    <section className="overflow-hidden bg-[#292929] px-5 py-24 md:px-10 lg:py-15">
      <div className="mx-auto max-w-6xl">
        {/* Header */}

        <div className="mb-10">
          <p className="mb-4 text-xs font-bold tracking-[0.5em] text-[#c49a5a]">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-black leading-[0.9] text-white md:text-7xl">
            خدمات
            <br />
            <span className="text-[#c49a5a]">ما</span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-7 text-white/40">
            استایل تو، امضای توست.
            <br />
            ما با دقت، شخصیت و ظاهر متفاوتی برای تو می‌سازیم.
          </p>
        </div>

        {/* Services */}

        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                relative
                mb-15
                flex
                ${index % 2 === 0 ? "justify-end" : "justify-start"}

                ${index === 1 ? "md:-mt-8" : ""}
                ${index === 2 ? "md:-mt-8" : ""}
                ${index === 3 ? "md:-mt-8" : ""}
              `}
            >
              {/* CARD */}

              <article
                className={`
                  group
                  relative
                  h-100
                  w-full
                  overflow-hidden
                  bg-black
                  sm:w-[80%]
                  md:h-110
                  md:w-[52%]

                  ${index % 2 === 0 ? "clip-card-right" : "clip-card-left"}
                `}
              >
                {/* IMAGE */}

                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    opacity-60
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:grayscale-0
                    group-hover:opacity-50
                  "
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* INNER FRAME */}

                <div
                  className="
                    absolute
                    inset-4
                    border
                    border-[#c49a5a]/30
                    transition-all
                    duration-500
                    group-hover:inset-3
                    group-hover:border-[#c49a5a]
                  "
                />

                {/* NUMBER */}

                <span
                  className="
                    absolute
                    right-7
                    top-5
                    text-6xl
                    font-black
                    text-white/[0.08]
                    transition
                    duration-500
                    group-hover:text-[#c49a5a]/20
                  "
                >
                  {service.number}
                </span>

                {/* CONTENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-10
                    w-full
                    p-7
                    md:p-8
                  "
                >
                  <p className="text-[10px] font-bold tracking-[0.4em] text-[#c49a5a]">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-xs leading-6 text-white/55 md:text-sm">
                    {service.description}
                  </p>

                  {/* BUTTON */}

                  <button
                    className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      border-b
                      border-[#c49a5a]/50
                      pb-2
                      text-xs
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:border-[#c49a5a]
                      hover:text-[#c49a5a]
                    "
                  >
                    مشاهده خدمات
                    <span className="transition-transform duration-300 group-hover:-translate-x-2">
                      ←
                    </span>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-10 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] text-[#c49a5a]">
                YOUR STYLE. YOUR RULES.
              </p>

              <h3 className="mt-3 text-xl font-black text-white md:text-2xl">
                وقتشه استایلت رو عوض کنی.
              </h3>
            </div>

            <button
              className="
                w-fit
                bg-[#c49a5a]
                px-7
                py-3
                text-xs
                font-black
                text-black
                transition
                duration-300
                hover:bg-white
              "
            >
              رزرو نوبت ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
