import image from "../assets/images/home.jpg";
import Image from "../components/Image";
import Title from "../components/Title";

const pageContent = document.querySelector("#content");

export default function Home() {
  Title("La Bella Tavola", pageContent);
}
