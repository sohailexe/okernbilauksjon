import React from "react";
import { SelgeBilFom } from "../../components/forms/SelgeBilFom";

export default function SelgBilPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-16">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/car-bg/c2.jpg"
            alt="Car selling background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Selg din bil på auksjon
            </h1>
            <p className="text-lg text-gray-300">
              La oss hjelpe deg med å selge bilen din raskt og enkelt
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Hvordan fungerer det å selge bil hos Økern Bilauksjon?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                title: "Enkel registrering",
                description: "Fyll ut skjemaet med informasjon om din bil",
                icon: "📝",
              },
              {
                title: "Vi tar over",
                description: "Vi håndterer alt fra vask til markedsføring",
                icon: "🔄",
              },
              {
                title: "Auksjon",
                description: "Din bil blir auksjonert til høystbydende",
                icon: "🔨",
              },
              {
                title: "Rask betaling",
                description: "Du mottar betalingen raskt og enkelt",
                icon: "💰",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <SelgeBilFom />
          </div>

          {/* Information Section */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 p-8 rounded-lg sticky top-8">
              <h2 className="text-xl font-bold mb-6">
                Selge bilen din har aldri vært enklere!
              </h2>
              <p className="text-gray-600 mb-8">
                Hos Økern Bilauksjon tilbyr vi en trygg og effektiv løsning for både kjøpere og selgere. 
                Vi sørger for at hele prosessen er enkel og transparent, slik at du kan føle deg trygg gjennom hele salget.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "Enkel og rask prosess",
                    description: "Fyll ut et enkelt skjema, og vi tar oss av resten. Fra vask og rens til tilstandsrapport og utvidet annonsering, sørger vi for at bilen din er klar for salg.",
                  },
                  {
                    title: "Sikkerhet og garanti",
                    description: "Vi stiller med bankgaranti som sikkerhet for våre kunder. Økern Bilauksjon AS overtar garantiansvaret og alle formaliteter rundt salget, slik at du kan være trygg på at alt blir håndtert profesjonelt.",
                  },
                  {
                    title: "Stort utvalg og erfaring",
                    description: "Vi selger over 1200 biler i året, og for oss er ingen oppgaver for store eller for små. Vi sikrer at bilen din får maksimal eksponering gjennom vår utvidede annonsering.",
                  },
                  {
                    title: "Lav kostnad",
                    description: "Det koster kun kr. 3.990,- når bilen er solgt. Du betaler ingenting før salget er gjennomført, slik at du kan være trygg på at vi jobber for å få best mulig pris for din bil.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Ta kontakt i dag!</h3>
                <p className="text-gray-600 text-sm">
                  Fyll ut skjemaet vårt, og la oss hjelpe deg med å selge bilen din raskt og enkelt. 
                  Hos Økern Bilauksjon er vi her for å gjøre bilselget til en stressfri opplevelse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}