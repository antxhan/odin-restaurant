export default function Home() {
  const pageContent = document.querySelector("#content");
  const container = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = "Home";
  container.appendChild(title);
  pageContent.appendChild(container);
}
