import image from "../assets/images/home.jpg";
import Image from "../components/Image";
import Title from "../components/Title";

const pageContent = document.querySelector("#content");

export default function Home() {
  Title("La Bella Tavola", pageContent);
  Image(image, "La Bella Travola restaurant", pageContent);
  const paragraph = document.createElement("p");
  // paragraph.innerText =
  //   "Experience the true taste of Italy at La Bella Tavola, where every dish is crafted with passion. From hand-rolled pasta to wood-fired pizzas, our menu brings the warmth of Italian tradition to your table. Whether you’re enjoying a cozy meal for two or celebrating with family, every bite is a journey to the heart of Italy. Buon appetito!";
  // pageContent.appendChild(paragraph);
}
