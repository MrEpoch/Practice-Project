import { services } from "components/services/services";

export const load = async ({ params }) => {
  const id = params.id;
  const service = services.find((service) => service.id.toString() === id);
  return { service };
}
