export default function Menu() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = "Menu";
  container.appendChild(title);
  return container;
}
