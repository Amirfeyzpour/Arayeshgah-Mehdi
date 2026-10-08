import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Swiper modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      image: "/assests/Example work/Example-1.jpg",
    },
    {
      id: 2,
      image: "/assests/Example work/Example-2.jpg",
    },
    {
      id: 3,
      image: "/assests/Example work/Example-3.jpg",
    },
    {
      id: 4,
      image: "/assests/Example work/Example-4.jpg",
    },
    {
      id: 5,
      image: "/assests/Example work/Example-5.jpg",
    },
    {
      id: 6,
      image: "/assests/Example work/Example-6.jpg",
    },
    {
      id: 7,
      image: "/assests/Example work/Example-7.jpg",
    },
  ];

  return (
    <section className="bg-[#292929] py-20 overflow-hidden">
      
      {/* Section Container */}
      <div className="w-[90%] md:w-[80%] mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-[#c49a5a] text-sm tracking-[0.4em] uppercase">
            Our Work
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-3">
            نمونه کارها
          </h2>

          <p className="text-gray-400 mt-4">
            بعضی از استایل‌هایی که برای مشتریانمون اجرا کردیم
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.15}
          spaceBetween={10}
          loop={true}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.6,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 2.5,
            },

            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative overflow-hidden rounded-sm border border-[#c49a5a]/30 bg-black">
                
                <img
                  src={item.image}
                  alt={`Portfolio ${item.id}`}
                  className="
                    w-full
                    h-105
                    md:h-125
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-all duration-500" />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Portfolio;