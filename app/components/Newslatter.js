export default function Newslatter() {
  return (
    <section className="bg-primary text-white">
      <div className="div-cont flex gap-6 flex-col md:flex-row lg:pb-0">
        {/*<!-- left  -->*/}
        <div id="left" className="flex flex-col gap-5 md:w-1/2">
          <p className="font-semibold">Right into Mailbox</p>
          <h1 className="text-3xl font-semibold">
            Get the news by subscribing to our newsletter. Tips directly!
          </h1>

          <form className="flex flex-col gap-3 w-full px-6" action="#">
            <input
              className="rounded-lg px-4 py-2 text-gray-600 text-sm focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn bg-black rounded-lg border-2 border-black hover:shadow-2xl hover:text-primary transition ease-linear   active:translate-y-0.5  active:shadow-none hover:-translate-y-0.5">
              Submit
            </button>
          </form>
        </div>
        {/* <!-- right  -->*/}
        <div id="right" className="hidden md:inline-block flex-1">
          <img
            className="lg:-translate-y-20 scale-[115%]"
            src="images/car1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
