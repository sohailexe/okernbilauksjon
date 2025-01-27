import React from "react";
import { HeaderSecondry } from "../components/HeaderSecondry";
export default function page() {
  return (
    <>
      <HeaderSecondry
        img="/about.jpg"
        heading="lkjhsd asd "
        description="aksjdjsd asjd"
      />

      <section className="div-cont max-w-[900px] ">
        <p className="text-center text text-2xl font-bold mx-3 text-primary md:text-3xl lg:mx-6">
          Økern Bilauksjon AS har Iagt forholdene til rette slik at kjøper og
          selger kan føle seg trygge ved salg/kjøp på alle våre auksjoner. Vi
          stiller også med bankgaranti som sikkerhet for våre kunder.
        </p>

        <ol className="list-decimal flex   flex-col gap-8 text-lg md:text-xl font-semibold text-left mt-10 mx-2">
          <li>
            Kjøretøyet er tilgjengelig for besiktigelse før auksjonen. Det
            selges i den stand og tilstand som det befinner seg ved
            hammerslaget. Kjøper kan derfor ikke gjøre gjeldende som
            kjøpsrettslig mangel noe som ville blitt oppdaget ved en slik
            forsvarlig undersøkelse. Om budgiver ønsker foretatt NAF-test kan
            dette ordnes av økern Bilauksjon AS
          </li>

          <li>
            Alle budgivere er bundet av sitt bud inntil auksjonarius har meddelt
            om budet aksepteres. Antakelse og aksept av bud avgjøres med
            bindende virkning av økern Bilauksjon AS.
          </li>
          <li>
            Når budet er akseptert Er avtale inngått, og kjøretøyet står for
            kjøpers regning og risiko.
          </li>

          <li>
            Kjøpersalæret utgjør 12 % av kjøpesummen, minst kr. 2.900, maksimalt
            kr. 11.900. I tillegg kon•mer administrasjonsgebyr med kr. 1.490.
            Selgersalæret utgjør kr. 3.990.
          </li>

          <li>
            Dersom budgiver trekker budet etter at dette er akseptert, må
            vedkommende utenom forbrukerkjøpsforholdene betale annulasjonsgebyr.
            Annulasjonsgebyret utgjør summen av selgersalæret og kjøpersalæret
            sarnt ekspedisjonsgebyret.
          </li>
          <li>
            økern Bilauksjon AS kan som regel bistå med finansiering. Det er
            kjøper som har ansvaret for om slik finansiering innvilges. Dette
            bør derfor avklares før budgivning, og er i sin helhet budgivers
            ansvar. Eventuelle kostnader forbundet med Iåneopptaket og sikring
            av lånet betales av kjøper
          </li>

          <li>
            Betaling av kjøpesum samt salær og administrasjonsgebyr må skje
            umiddelbart, dog senest innen 2 dager.
          </li>

          <li>
            Når kjøpesum og øvrige omkostninger er betalt melder økern
            Bilauksjon AS eierskiftet til Biltilsynet. Kjøper plikter innen 24
            timer å akseptere eierskiftet på Vegvesenets hjemmeside.
          </li>

          <li>
            økern Bilauksjon AS innestår for at bilen selges fri for økonomiske
            heftelser som er tinglyst. Slike heftelser slettes før oppgjør til
            selger foretas. 2
          </li>

          <li>
            Bilen må avhentes innen en frist som settes av økern Bilauksjon AS.
            Dersom bilen ikke hentes innen fristen, og heller ikke innen en ny
            frist som settes av økern Bilauksjon AS, kan selger og økern
            Bilauksjon AS heve kjøpet og selge bilen på en ny auksjon. oppnådd
            kjøpesum skal dekke eventuell rest av selgers krav samt nytt
            selgersalær og ekspedisjonsgebyr, samt lagringskostnader til økern
            Bilauksjon AS. Resten Skal deretter utbetales til første kjøper .
          </li>

          <li>
            EventuelI reklamasjon på bilen må fremføres straks av kjøpere som
            ikke er forbrukerkjøpere, og av forbrukerkjøpere innen rimelig tid
            etter at forholdet som begrunner reklamasjonen ble eller burde blitt
            oppdaget. Reklamasjoner børs under enhver omstendighet skje så fort
            som mulig, pr telefon eller e-post.
          </li>

          <li>
            Dersom mangler påberopes har økern Bilauksjon eller den de utpeker
            rett til selv å avhjelpe manglene. Ingen utbedring må skje før økern
            Bilauksjon AS er varslet og har fått anledning til å ta stilling til
            reklamasjonen.
          </li>

          <li>
            Ved berettigede reklamasjoner kan økern Bilauksjon AS velge om bilen
            skal utbedres eller om kjøpet Skal heves. Ved en rettmessig
            reklamasjon hvor kjøpet heves vil kjøperen få refundert eventuell
            innbetalt kjøpesum, salær og ekspedisjonsgebyr.
          </li>

          <li>
            økern Bilauksjon AS kan uten varsel endre den bekjentgjorte
            auksjonsliste og trekke kjøretøy fra salg.
          </li>

          <li>
            økern Bilauksjon AS har intet ansvar for løse gjenstander som
            umonterte hjul, radio, mobiltelefon etc som er i bilen. Disse må
            forsikres av kjøretøyets eier.
          </li>

          <li>
            økern Bilauksjon har intet ansvar for registerrem eller
            registerkjede, turbo, motor, gir, elektronikk,a gregater,
            bensintank, bensinmåler, klimaanlegg, parkeringssensor er),
            stereoanlegg, instrumentbelysning og vannlekkasjer. økern Bilauksjon
            har heller intet ansvar for at ettermontert utstyr som radio,
            navigasjon, alarm etc virker.
          </li>
        </ol>
      </section>
    </>
  );
}
