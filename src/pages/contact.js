export default function Contact() {
  const pageContent = document.querySelector("#content");
  const container = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = "Contact";
  container.appendChild(title);
  pageContent.appendChild(container);
}
