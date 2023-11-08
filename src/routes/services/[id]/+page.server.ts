import UpdatingSoftware from "assets/UpdatingSoftware.jpg";
import ReplacingParts from "assets/FaultyComponents.jpg";
import VR_Showcase from "assets/VR_showcase.jpg";

const services = [
  {
    id: 1,
    name: 'Replacing faulty parts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: ReplacingParts 
  },
  {
    id: 2,
    name: "Showcasing how to use VR",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: VR_Showcase
  },
  {
    id: 3,
    name: 'Updating the software',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: UpdatingSoftware
  }
]

export const load = async ({ params }) => {
  const id = params.id;
  const service = services.find((service) => service.id.toString() === id);
  return { service };
}
