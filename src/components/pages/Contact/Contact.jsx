import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Map from "../../Map/Map";

const Contact = () => {
  const contactItems = [
    {
      title: "آدرس",
      value: "تهران، میدان پونک",
      Icon: MapPin,
    },
    {
      title: "شماره تماس",
      value: "09195756500",
      Icon: Phone,
    },
    {
      title: "ساعات کاری",
      value: "هر روز — 09:00 تا 21:00",
      Icon: Clock,
    },
  ];

  return (
    <main className="min-h-screen bg-[#1f1f1f] text-white">
      <section className="pt-32 ">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            {/* Contact Card */}
            <div className="relative mx-auto mb-10 min-h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-6 text-white shadow-2xl md:p-10 lg:mb-0">
              {/* Decorative circle */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d4a017]/10 blur-2xl" />

              <div className="relative z-10">
                <span className="text-sm uppercase tracking-[0.3em] text-[#d4a017]">
                  Contact
                </span>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  با ما در تماس باشید
                </h2>

                <p className="mt-4 max-w-md leading-7 text-zinc-400">
                  برای رزرو وقت یا دریافت اطلاعات بیشتر با ما تماس بگیرید.
                </p>

                {/* Contact Information */}
                <div className="mt-10 space-y-7">
                  {contactItems.map(({ title, value, Icon }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d4a017]/30 bg-[#d4a017]/10 text-[#d4a017] transition duration-300 hover:bg-[#d4a017] hover:text-black">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500">{title}</p>

                        <p className="mt-1 text-base font-medium text-zinc-100">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Directions Button */}
                <a
                  href="https://maps.app.goo.gl/AbhCZBYjPcwcXAhv6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#d4a017] px-6 py-3 font-bold text-black transition duration-300 hover:bg-[#f0c34e]"
                >
                  <Navigation size={18} />
                  مسیریابی
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="min-h-[400px] overflow-hidden rounded-3xl border border-white/10 lg:min-h-full">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
