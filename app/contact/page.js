import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <h1 className="text-3xl lg:text-[40px] leading-tight tracking-tight text-gray-900 mb-8 lg:mb-12">
          Contact Information
        </h1>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col space-y-16">
            {/* Contact Information - First on mobile */}
            <div className="order-1 lg:order-1">
              <h2 className="text-xl lg:text-2xl tracking-tight text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Get in touch with us for any inquiries about our services.
                </p>
              </div>
            </div>

            {/* Visit Us and Get in Touch Container - Always in same row */}
            <div className="grid grid-cols-2 gap-8 order-2 lg:order-3">
              {/* Visit Us */}
              <div>
                <h2 className="text-xl lg:text-2xl tracking-tight text-gray-900 mb-4">Visit Us</h2>
                <div className="space-y-2">
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    Folkvangveien 22<br />
                    1348 Rykkinn
                  </p>
                </div>
              </div>

              {/* Get in Touch */}
              <div>
                <h2 className="text-xl lg:text-2xl tracking-tight text-gray-900 mb-4">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-[13px] text-gray-500 mb-2">Phone</p>
                    <div className="space-y-2">
                      <p className="text-[15px] text-gray-600">
                        <a href="tel:22225656" className="hover:text-gray-900 transition-colors">
                          22 22 56 56
                        </a>
                      </p>
                      <p className="text-[15px] text-gray-600">
                        <a href="tel:93455565" className="hover:text-gray-900 transition-colors">
                          934 55 565
                        </a>
                      </p>
                      <p className="text-[15px] text-gray-600">
                        <a href="tel:94001511" className="hover:text-gray-900 transition-colors">
                          940 01 511
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] text-gray-500 mb-2">Email</p>
                    <div className="space-y-2">
                      <p className="text-[15px] text-gray-600">
                        <a href="mailto:Tom@okernbilauksjon.no" className="hover:text-gray-900 transition-colors">
                          Tom@okernbilauksjon.no
                        </a>
                      </p>
                      <p className="text-[15px] text-gray-600">
                        <a href="mailto:Alexandra@auksjon1.no" className="hover:text-gray-900 transition-colors">
                          Alexandra@auksjon1.no
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours - Last on mobile, second on desktop */}
            <div className="order-4 lg:order-2">
              <h2 className="text-xl lg:text-2xl tracking-tight text-gray-900 mb-4">Opening Hours</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[280px]">
                  <tbody>
                    {[
                      { day: 'Monday', hours: '09:00–18:00' },
                      { day: 'Tuesday', hours: '09:00–18:00' },
                      { day: 'Wednesday', hours: '09:00–20:00' },
                      { day: 'Thursday', hours: '09:00–18:00' },
                      { day: 'Friday', hours: '09:00–17:00' },
                      { day: 'Saturday', hours: 'Stengt', closed: true },
                      { day: 'Sunday', hours: '15:00–18:00' }
                    ].map((schedule) => (
                      <tr key={schedule.day} className="border-b border-gray-100 last:border-0">
                        <td className="py-3 lg:py-4 text-[15px] font-normal text-gray-600">
                          {schedule.day}
                        </td>
                        <td className={`py-3 lg:py-4 text-[15px] text-right ${schedule.closed ? 'text-gray-400' : 'text-gray-900'}`}>
                          {schedule.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Map (fixed on desktop, last on mobile) */}
          <div className="order-5 lg:order-1 mt-16 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-[400px] lg:h-[600px] w-full sticky lg:top-8">
              <iframe 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Folkvangveien%2022,1348+(%C3%98kernbilauksjon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}