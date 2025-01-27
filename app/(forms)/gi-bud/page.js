import { HeaderSecondry } from "@/app/components/HeaderSecondry";
import Image from "next/image";

export default function GiBudPage() {
  return (
    <>
      <HeaderSecondry
        img="/images/aboutus.jpg"
        heading="lkjhsd asd "
        description="aksjdjsd asjd"
      />

      <section className="body-font bg-white">
        <div
          className="div-cont flex flex-col w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full max-h-[200px] h-[200px]">
              <Image
                className="scale-125"
                src="/images/car-bid.jpg"
                alt="Car bid illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="w-full mt-6 md:mt-0 md:pl-8">
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full bg-white">
                <form>
                  <div className="grid md:grid-cols-2 gap-x-6">
                    <div className="mb-5">
                      <label
                        htmlFor="reg-no"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Registreringsnummer
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="reg-no"
                        placeholder="EX32452"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Kilometerstand
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="brand"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Bilmerke
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="model"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Årsmodell
                      </label>
                      <input
                        type="text"
                        name="model"
                        id="model"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                    <fieldset className="py-2 mb-5 mt-2">
                      <legend className="block text-base font-medium text-[#07074D] ">
                        Fornavn og Etternavn
                      </legend>
                      <div className="flex gap-6">
                        <div>
                          <input
                            type="text"
                            name="fName"
                            id="fName"
                            placeholder="Fornavn"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="lName"
                            id="lName"
                            placeholder="Etternavn"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                          />
                        </div>
                      </div>
                    </fieldset>
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        E-post
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Telefonnummer
                      </label>
                      <input
                        type="phone"
                        name="phone"
                        id="phone"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="minimum-price"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Hva er minstepris?
                      </label>
                      <input
                        type="number"
                        name="minimum-price"
                        id="minimum-price"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="desired-price"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Hva er minstepris?
                      </label>
                      <input
                        type="number"
                        name="desired-price"
                        id="desired-price"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-white border border-primary hover:border-black hover:shadow-xl  hover:text-black  transition ease-linear">
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
