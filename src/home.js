export default function Home() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = "Home";
  container.appendChild(title);
  return container;
}
