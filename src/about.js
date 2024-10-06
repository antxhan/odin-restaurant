export default function About() {
  const pageContent = document.querySelector("#content");
  const container = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = "About";
  container.appendChild(title);
  pageContent.appendChild(container);
}
