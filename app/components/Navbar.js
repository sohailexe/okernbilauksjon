"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleOmOssClick = (e) => {
    e.preventDefault();
    if (pathname !== '/') {
      router.push('/#om-oss');
    } else {
      document.getElementById('om-oss')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="hidden md:block bg-gray-900 text-white py-2.5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1 text-sm text-left whitespace-nowrap">
              <p>Telefon: +47 123 456 789</p>
            </div>
            <div className="flex-1 text-sm text-right whitespace-nowrap">
              <p>E-post: post@bilauksjon.no</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[120px] h-[48px]">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="h-8 w-auto sm:h-10 md:h-12"
                />
              </div>
            </Link>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center space-x-6">
              <Link
                href="/vare-biler"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Våre Biler
              </Link>
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <FontAwesomeIcon
                  icon={isMenuOpen ? faXmark : faBars}
                  className="h-6 w-6 text-gray-600"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/vare-biler"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Våre Biler
              </Link>
              <a
                href="#om-oss"
                onClick={handleOmOssClick}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
              >
                Om Oss
              </a>

              {/* Primary Actions */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/gi-bud"
                  className="px-8 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary"
                >
                  Gi Bud
                </Link>
                <Link
                  href="/selg-bil"
                  className="px-8 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 border-2 border-gray-900"
                >
                  Selg Bil
                </Link>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden`}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="relative w-[100px] h-[32px]">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      fill
                      style={{ objectFit: "contain" }}
                      className="h-6 sm:h-8"
                    />
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="h-6 w-6 text-gray-600"
                    />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-6">
                    {/* Navigation Links */}
                    <nav className="space-y-4">
                      <Link
                        href="/vare-biler"
                        className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Våre Biler
                      </Link>
                      <a
                        href="#om-oss"
                        onClick={handleOmOssClick}
                        className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                      >
                        Om Oss
                      </a>
                    </nav>

                    {/* Primary Actions */}
                    <div className="space-y-3">
                      <Link
                        href="/gi-bud"
                        className="block w-full px-6 py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 border-2 border-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Gi Bud
                      </Link>
                      <Link
                        href="/selg-bil"
                        className="block w-full px-6 py-3 bg-gray-900 text-white text-center font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 border-2 border-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Selg Bil
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;