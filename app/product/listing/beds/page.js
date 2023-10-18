import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function bedsAllProducts() {
  const getAllProducts = await productByCategory("beds");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
