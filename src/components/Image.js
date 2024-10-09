export default function Image(url, alt, container = null) {
  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;
  if (container) {
    container.appendChild(image);
  }
  return image;
}
