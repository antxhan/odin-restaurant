import Title from "../components/Title";

const pageContent = document.querySelector("#content");

export default function Home() {
  Title("La Bella Tavola", pageContent);

  const subtitle = document.createElement("h3");
  subtitle.className = "subtitle";
  subtitle.innerText = "Authentic Italian Cuisine";
  pageContent.appendChild(subtitle);

  const imgDiv = document.createElement("div");
  imgDiv.className = "home-img-div";
  pageContent.appendChild(imgDiv);
}
