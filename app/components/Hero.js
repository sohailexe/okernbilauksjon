"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="min-h-[600px] md:min-h-[700px] relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/1-main.jpg"
            alt="Background Image"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative h-full z-10 py-8 md:py-12">
        <div className="div-cont h-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 h-full">
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-8">
              {/* Hero Content - Mobile & Desktop */}
              <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-light uppercase tracking-wider text-shadow-sm">
                  Bilauksjon
                </h1>
                <h1 className="banner uppercase text-primary text-3xl md:text-6xl text-shadow-sm">
                  Ongsdag og sondag
                </h1>
                <div className="hidden md:block">
                  <h1 className="text-2xl md:text-3xl uppercase tracking-wide text-shadow-sm">
                    hver uke
                  </h1>
                  <div className="mt-2">
                    <p className="text-lg md:text-xl text-shadow-sm">
                      Onsdag kl.{" "}
                      <span className="font-semibold">18:00-20:00</span>
                      <span className="hidden md:inline"> og </span>
                      Søndag kl.{" "}
                      <span className="font-semibold">15:00-17:00</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours - Mobile Only */}
              <div className="md:hidden w-full bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-primary text-sm"
                  />
                  <span className="font-semibold text-sm">Åpningstider</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span>Mandag:</span>
                    <span>09:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tirsdag:</span>
                    <span>09:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-primary font-semibold">
                    <span>Onsdag:</span>
                    <span>09:00–20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Torsdag:</span>
                    <span>09:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fredag:</span>
                    <span>09:00–17:00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Lørdag:</span>
                    <span>Stengt</span>
                  </div>
                  <div className="flex justify-between items-center text-primary font-semibold">
                    <span>Søndag:</span>
                    <span>15:00–18:00</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 text-center md:text-left">
                <div className="space-y-1">
                  <h2 className="text-base md:text-2xl font-semibold text-shadow-sm">
                    Kontakt oss
                  </h2>
                  <p className="text-sm md:text-xl text-shadow-sm">
                    Tom Østerby
                  </p>
                  <p className="text-xs md:text-lg text-shadow-sm">
                    22 22 56 56
                  </p>
                  <a
                    href="mailto:tom@okernbilauksjon.no"
                    className="text-primary hover:text-primary/80 transition-colors text-xs md:text-base text-shadow-sm"
                  >
                    tom@okernbilauksjon.no
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mt-4">
                  <Link
                    href="./gi-bud"
                    className="btn-primary text-center hover:scale-105 transition-transform text-xs md:text-base py-2 px-6 md:px-8 w-full md:w-auto"
                  >
                    Gi bud nå
                  </Link>
                  <span className="md:hidden text-xs md:text-base">eller</span>
                  <Link
                    href="./selg-bil"
                    className="bg-gray-900 text-white text-center hover:scale-105 transition-transform text-xs md:text-base py-2 px-6 md:px-8 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
                  >
                    Selg bilen din
                  </Link>
                </div>
              </div>
            </div>

            {/* Opening Hours - Desktop Only */}
            <div className="hidden md:block w-full md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-md ml-auto">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                  Åpningstider
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Mandag:</span>
                    <span>09:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tirsdag:</span>
                    <span>09:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-primary font-semibold">
                    <span>Onsdag:</span>
                    <span>09:00–20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Torsdag:</span>
                    <span>09:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fredag:</span>
                    <span>09:00–17:00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Lørdag:</span>
                    <span>Stengt</span>
                  </div>
                  <div className="flex justify-between items-center text-primary font-semibold">
                    <span>Søndag:</span>
                    <span>15:00–18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
