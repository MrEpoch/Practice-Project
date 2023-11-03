import type { PageServerLoad } from "./$types";
import { products } from "../pricing";

export const load: PageServerLoad = async ({ params }) => {
  const id = params.id;
  const product = products.find((product) => product.id.toString() === id);

  return {
    product
  }
}

