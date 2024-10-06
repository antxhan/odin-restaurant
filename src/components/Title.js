export default function Title(string, container) {
  const title = document.createElement("h1");
  title.innerText = string;
  container.appendChild(title);
}
