import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gray-50">
      <div className="div-cont">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Image */}
            <div className="md:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/building.png"
                  alt="Økern Bilauksjon building"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-200 rounded-full -z-10"></div>
            </div>

            {/* Right side - Text Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  LITT OM OSS
                </h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Økern Bilauksjon AS ble etablert i 1992, og er i dag Norges største auksjonshus som blir flittig benyttet av privatmarkedet. Årsaken til dette er at vi har en effektiv og kundevennlig auksjon, med de laveste salgsgebyrene for bilauksjoner i Norge.
                </p>
                
                <p>
                  Vi har tilknyttet oss medarbeidere med over 30 års erfaring fra bilauksjonsmarkedet. Grunnet vår lange bransjeerfaring blir vi også benyttet av flere forsikringsselskaper som såkalte prisveiledere.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
            <div className="text-center group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                #1
              </div>
              <div className="text-gray-600 text-sm">
                Største auksjonshus
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                1200+
              </div>
              <div className="text-gray-600 text-sm">
                Biler solgt årlig
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-gray-600 text-sm">
                Kundetilfredshet
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-600 text-sm">
                Trygg handel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;