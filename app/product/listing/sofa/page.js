import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function sofaAllProducts() {
  const getAllProducts = await productByCategory("sofa");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
