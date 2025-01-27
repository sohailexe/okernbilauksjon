import React from "react";

export default function AuctionTerms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-6 py-12 md:py-16">
        {/* Page Title */}
        <div className="border-b pb-8 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Auksjonsvilkår
          </h1>
          <p className="text-base md:text-lg text-gray-500">
            Viktig informasjon om vår auksjonsprosess
          </p>
        </div>

        {/* Summary */}
        <p className="text-base text-gray-800 leading-relaxed mb-12">
          Økern Bilauksjon AS har lagt forholdene til rette slik at kjøper og
          selger kan føle seg trygge ved salg/kjøp på alle våre auksjoner. Vi
          stiller også med bankgaranti som sikkerhet for våre kunder.
        </p>

        {/* Terms List */}
        <div>
          {/* Section Title */}
          <h2 className="text-lg font-medium text-gray-900 mb-8">
            Vilkår og betingelser
          </h2>

          <ol className="list-none space-y-6">
            {[
              "Kjøretøyet er tilgjengelig for besiktigelse før auksjonen. Det selges i den stand og tilstand som det befinner seg ved hammerslaget. Kjøper kan derfor ikke gjøre gjeldende som kjøpsrettslig mangel noe som ville blitt oppdaget ved en slik forsvarlig undersøkelse. Om budgiver ønsker foretatt NAF-test kan dette ordnes av Økern Bilauksjon AS.",
              "Alle budgivere er bundet av sitt bud inntil auksjonarius har meddelt om budet aksepteres. Antakelse og aksept av bud avgjøres med bindende virkning av Økern Bilauksjon AS.",
              "Når budet er akseptert er avtale inngått, og kjøretøyet står for kjøpers regning og risiko.",
              "Kjøpersalæret utgjør 12 % av kjøpesummen, minst kr. 2.900, maksimalt kr. 11.900. I tillegg kommer administrasjonsgebyr med kr. 1.490. Selgersalæret utgjør kr. 3.990.",
              "Dersom budgiver trekker budet etter at dette er akseptert, må vedkommende utenom forbrukerkjøpsforholdene betale annulasjonsgebyr. Annulasjonsgebyret utgjør summen av selgersalæret og kjøpersalæret samt ekspedisjonsgebyret.",
              "Økern Bilauksjon AS kan som regel bistå med finansiering. Det er kjøper som har ansvaret for om slik finansiering innvilges. Dette bør derfor avklares før budgivning, og er i sin helhet budgivers ansvar. Eventuelle kostnader forbundet med låneopptaket og sikring av lånet betales av kjøper.",
              "Betaling av kjøpesum samt salær og administrasjonsgebyr må skje umiddelbart, dog senest innen 2 dager.",
              "Når kjøpesum og øvrige omkostninger er betalt melder Økern Bilauksjon AS eierskiftet til Biltilsynet. Kjøper plikter innen 24 timer å akseptere eierskiftet på Vegvesenets hjemmeside.",
              "Økern Bilauksjon AS innestår for at bilen selges fri for økonomiske heftelser som er tinglyst. Slike heftelser slettes før oppgjør til selger foretas.",
              "Bilen må avhentes innen en frist som settes av Økern Bilauksjon AS. Dersom bilen ikke hentes innen fristen, og heller ikke innen en ny frist som settes av Økern Bilauksjon AS, kan selger og Økern Bilauksjon AS heve kjøpet og selge bilen på en ny auksjon. Oppnådd kjøpesum skal dekke eventuell rest av selgers krav samt nytt selgersalær og ekspedisjonsgebyr, samt lagringskostnader til Økern Bilauksjon AS. Resten skal deretter utbetales til første kjøper.",
              "Eventuell reklamasjon på bilen må fremføres straks av kjøpere som ikke er forbrukerkjøpere, og av forbrukerkjøpere innen rimelig tid etter at forholdet som begrunner reklamasjonen ble eller burde blitt oppdaget. Reklamasjoner bør under enhver omstendighet skje så fort som mulig, pr telefon eller e-post.",
              "Dersom mangler påberopes har Økern Bilauksjon eller den de utpeker rett til selv å avhjelpe manglene. Ingen utbedring må skje før Økern Bilauksjon AS er varslet og har fått anledning til å ta stilling til reklamasjonen.",
              "Ved berettigede reklamasjoner kan Økern Bilauksjon AS velge om bilen skal utbedres eller om kjøpet skal heves. Ved en rettmessig reklamasjon hvor kjøpet heves vil kjøperen få refundert eventuell innbetalt kjøpesum, salær og ekspedisjonsgebyr.",
              "Økern Bilauksjon AS kan uten varsel endre den bekjentgjorte auksjonsliste og trekke kjøretøy fra salg.",
              "Økern Bilauksjon AS har intet ansvar for løse gjenstander som umonterte hjul, radio, mobiltelefon etc. som er i bilen. Disse må forsikres av kjøretøyets eier.",
              "Økern Bilauksjon har intet ansvar for registerrem eller registerkjede, turbo, motor, gir, elektronikk, aggregater, bensintank, bensinmåler, klimaanlegg, parkeringssensorer, stereoanlegg, instrumentbelysning og vannlekkasjer. Økern Bilauksjon har heller intet ansvar for at ettermontert utstyr som radio, navigasjon, alarm etc. virker."
            ].map((term, index) => (
              <li key={index}>
                <div className="flex items-start gap-4">
                  <span className="text-base font-medium text-gray-400 pt-1 w-6">
                    {index + 1}.
                  </span>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {term}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}