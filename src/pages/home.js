import image from "../assets/images/home.jpg";
import Image from "../components/Image";
import Title from "../components/Title";

const pageContent = document.querySelector("#content");

export default function Home() {
  Title("Bear Trap", pageContent);
  const subtitle = document.createElement("h2");
  subtitle.innerText = "Street Food from Japan";
  pageContent.appendChild(subtitle);
  Image(image, "Bear Trap restaurant", pageContent);
  const paragraph = document.createElement("p");
  paragraph.innerText =
    "We serve the everyday food that locals in Japan enjoy regularly (and no, we don't eat sushi every day!). Our unique menu features specialized recipes, crafted to highlight the best of local ingredients. You won't find anything like us anywhere else in Sweden!";
  pageContent.appendChild(paragraph);
}
