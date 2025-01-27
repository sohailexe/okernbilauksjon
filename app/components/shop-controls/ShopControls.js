import { ListHeader } from "@/app/components/shop-controls/ListHeader";
import { BrandList } from "@/app/components/shop-controls/model-list/BrandList";
import { PropertyList } from "@/app/components/shop-controls/property-list/PropertyList";
import { PropertyItem } from "@/app/components/shop-controls/property-list/PropertyItem";

export const ShopControls = () => {
  return (
    <>
      <ListHeader />
      <BrandList />
      <PropertyList />
    </>
  );
};
