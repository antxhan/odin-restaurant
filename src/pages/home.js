import image from "../assets/images/home.jpg";
import Image from "../components/Image";
import Title from "../components/Title";

const pageContent = document.querySelector("#content");

export default function Home() {
  Title("La Bella Tavola", pageContent);
  const imgDiv = document.createElement("div");
  imgDiv.className = "img-div";
  Image(image, "La Bella Travola restaurant", imgDiv);
  pageContent.appendChild(imgDiv);
}
