export default function About() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = "About";
  container.appendChild(title);
  return container;
}
