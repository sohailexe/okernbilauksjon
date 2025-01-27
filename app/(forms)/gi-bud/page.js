import React from "react";
import Image from "next/image";

export default function GiBudPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Compact */}
      <div className="relative bg-gray-900 text-white py-12">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/car-bid.jpg"
            alt="Bilauksjon bakgrunn"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Gi ditt bud
            </h1>
            <p className="text-lg text-gray-300">
              Send inn ditt bud på våre kommende bilauksjoner. Alle bud er bindende og underlagt våre auksjonsvilkår.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <form className="space-y-8">
              {/* Vehicle Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-6">Kjøretøyinformasjon</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registreringsnummer
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="EX32452"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kilometerstand
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Antall kilometer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bilmerke
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Skriv bilmerke"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Årsmodell
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Skriv årsmodell"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-6">Personlig informasjon</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fornavn
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Skriv fornavn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Etternavn
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Skriv etternavn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-post
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="din@epost.no"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Skriv telefonnummer"
                    />
                  </div>
                </div>
              </div>

              {/* Bid Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-6">Buddetaljer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minstepris
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        kr
                      </span>
                      <input
                        type="number"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ønsket pris
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        kr
                      </span>
                      <input
                        type="number"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-600">
                    Jeg godtar{" "}
                    <a href="/auction-terms" className="text-primary hover:text-primary/80">
                      auksjonsvilkårene
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  Send inn bud
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Information */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-lg font-semibold mb-4">Viktig informasjon</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  • Alle bud er bindende når de er sendt inn
                </p>
                <p>
                  • Kjøpersalær er 12% av hammerslag (min. kr 2.900, maks. kr 11.900)
                </p>
                <p>
                  • Administrasjonsgebyr på kr 1.490 tilkommer
                </p>
                <p>
                  • Betaling må skje innen 2 dager etter vunnet auksjon
                </p>
                <p>
                  • Kjøretøyet må hentes innen angitt tidsfrist
                </p>
                <hr className="my-4 border-gray-200" />
                <p className="text-sm text-gray-500">
                  Trenger du hjelp? Kontakt oss på{" "}
                  <a href="tel:22225656" className="text-primary">
                    22 22 56 56
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}