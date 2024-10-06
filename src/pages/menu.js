export default function Menu() {
  const pageContent = document.querySelector("#content");
  const container = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = "Menu";
  container.appendChild(title);
  pageContent.appendChild(container);
}
