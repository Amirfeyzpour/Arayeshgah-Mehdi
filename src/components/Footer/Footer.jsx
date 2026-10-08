import React from "react";
import { Link } from "react-router-dom";

import footerBg from "../../../public/assests/footer.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">

      {/* Footer Image */}
      <div className="relative w-full h-[600px] md:h-[650px] max-h-[700px] overflow-hidden">

        {/* Background */}
        <img
          src={footerBg}
          alt="Barbershop"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            grayscale
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />


        {/* Content */}
        <div className="relative z-10 h-full flex items-center">

          <div className="w-[88%] max-w-6xl mx-auto">

            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-5"
            >
              <h2 className="
                text-3xl
                md:text-5xl
                font-bold
                tracking-[0.18em]
              ">
                BARBER
              </h2>

              
            </Link>


            {/* Description */}
            <p className="
              text-gray-200
              text-sm
              md:text-base
              leading-7
              max-w-md
              mb-8
            ">
              استایل شما، امضای شماست.
              <br />
              تجربه‌ای متفاوت از یک اصلاح حرفه‌ای.
            </p>


            {/* Information */}
            <div className="space-y-5 text-sm md:text-base">

              {/* Address */}
              <div className="ml-0 md:ml-4">

                <p className="
                  text-gray-400
                  text-xs
                  tracking-[0.2em]
                  mb-1
                ">
                  ADDRESS
                </p>

                <p>
                  تهران، خیابان ولیعصر، بالاتر از میدان ونک
                </p>

              </div>


              {/* Phone */}
              <div className="ml-8 md:ml-20">

                <p className="
                  text-gray-400
                  text-xs
                  tracking-[0.2em]
                  mb-1
                ">
                  PHONE
                </p>

                <div className="
                  border
                  border-white/30
                  w-fit
                  px-5
                  py-2
                  bg-black/40
                  backdrop-blur-sm
                ">
                  <a
                    href="tel:+09195756500"
                    className="
                      tracking-wider
                      hover:text-gray-400
                      transition
                    "
                  >
                    09195756500
                  </a>
                </div>

              </div>


              {/* Working Hours */}
              <div className="ml-16 md:ml-40">

                <p className="
                  text-gray-400
                  text-xs
                  tracking-[0.2em]
                  mb-1
                ">
                  WORKING HOURS
                </p>

                <p>
                  همه روزه  — ۱۰:۰۰ تا ۲۲:۰۰
                </p>

              </div>

            </div>


            {/* Booking */}
            <Link
              to="/contact"
              className="
                inline-block
                mt-8
                border
                border-white
                px-7
                py-3
                text-sm
                tracking-wider
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              رزرو نوبت
            </Link>

          </div>

        </div>
      </div>


      {/* Bottom Bar */}
      <div className="
        bg-black
        border-t
        border-white/10
        px-[6%]
        py-5
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
      ">

        <p className="text-gray-500 text-xs">
          © 2026 BARBER — All Rights Reserved
        </p>

        <div className="flex gap-6 text-xs text-gray-400">

          <a
            href="#"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="#"
            className="hover:text-white transition"
          >
            Telegram
          </a>

          <a
            href="#"
            className="hover:text-white transition"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;