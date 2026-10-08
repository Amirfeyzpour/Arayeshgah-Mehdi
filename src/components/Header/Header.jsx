import { useState } from "react";
import { Link } from "react-router-dom";
import phone from "../../../public/assests/phone.svg";
import img from "../../../public/assests/logo.jpg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wider"
        >
          <h1>BARBER</h1>

          <img className="w-14 h-14 object-contain" src={img} alt="Barber logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm transition hover:text-amber-400">
            صفحه اصلی
          </Link>

          <Link
            to="/services"
            className="text-sm transition hover:text-amber-400"
          >
            خدمات
          </Link>

          <Link
            to="/gallery"
            className="text-sm transition hover:text-amber-400"
          >
            نمونه‌کارها
          </Link>

          <Link to="/about" className="text-sm transition hover:text-amber-400">
            درباره ما
          </Link>

          <Link
            to="/contact"
            className="text-sm transition hover:text-amber-400"
          >
            تماس با ما
          </Link>
        </nav>

        {/* Reservation Button */}
        <Link
          to="/contact"
          className="md:flex items-center justify-center gap-2 rounded-full border border-amber-400 px-6 py-2 text-sm text-amber-400 transition hover:bg-amber-400 hidden hover:text-white"
        >
          <img src={phone} alt="Phone" className="h-5 w-5 bg-amber-400" />

          <span className="text-sm font-medium">09195756500</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl md:hidden"
          aria-label="باز کردن منو"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-zinc-800 bg-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm transition hover:text-amber-400"
            >
              صفحه اصلی
            </Link>

            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm transition hover:text-amber-400"
            >
              خدمات
            </Link>

            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm transition hover:text-amber-400"
            >
              نمونه‌کارها
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm transition hover:text-amber-400"
            >
              درباره ما
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm transition hover:text-amber-400"
            >
              تماس با ما
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              رزرو وقت
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
