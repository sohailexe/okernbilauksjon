import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img className="w-auto h-9 mb-6" src="/images/logo.png" alt="Økern Bilauksjon" />
            <p className="text-gray-400 mb-6">
              Økern Bilauksjon AS har lagt forholdene til rette slik at kjøper og selger kan føle seg trygge ved salg/kjøp på alle våre auksjoner.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hurtiglenker</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/vare-biler" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Våre Biler
                </Link>
              </li>
              <li>
                <Link href="/gi-bud" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Gi Bud
                </Link>
              </li>
              <li>
                <Link href="/selg-bil" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Selg Bil
                </Link>
              </li>
              <li>
                <Link href="/auction-terms" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Auksjonsvilkår
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt Oss</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Folkvangveien 22, 1348 Rykkinn
              </li>
              <li>
                <a href="tel:22225656" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  22 22 56 56
                </a>
              </li>
              <li>
                <a href="mailto:tom@okernbilauksjon.no" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  tom@okernbilauksjon.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Økern Bilauksjon AS. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}