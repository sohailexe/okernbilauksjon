import React from "react";
import { HeaderSecondry } from "@/app/components/HeaderSecondry";
import Table from "@/app/components/Table";
const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-b from-purple-100 via-orange-100 to-transparent">
        <div
          className="div-cont flex flex-col md:flex-row w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div className="md:w-1/2 w-full h-ful">
            <div
              id="working-houres "
              className="w-full h-full flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold title-font mb-4 text-center text-primary">
                working houres
              </h2>

              <Table />
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-10 md:mt-0 md:pl-8">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
              Contact Form
            </h1>
            <form
              action="send-contact.php"
              method="post"
              id="submit-contact-form"
            >
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
