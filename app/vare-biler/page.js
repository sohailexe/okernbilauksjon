import { CarsList } from "@/app/components/CarsList";
import { ShopControls } from "@/app/components/shop-controls/ShopControls";

export default function VareBiler() {
  return (
    <>
      <section>
        <div className="div-cont flex gap-6">
          {/*// <!-- 1/4 -->*/}
          <div className="hidden md:inline-block w-1/4 rounded-xl shadow-2xl border px-6 py-8">
            <ShopControls />
          </div>
          {/*// <!-- 3/4 -->*/}
          <div className="md:flex-1 md:w-3/4 rounded-xl w-full py-9 shadow-lg border px-6">
            <CarsList isHome={false} />
          </div>
        </div>
      </section>
    </>
  );
}
