export default function Image(url, alt, container) {
  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;
  container.appendChild(image);
}
