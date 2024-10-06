import "./styles.css";

const pageContent = document.querySelector("#content");
const nav = document.querySelector("nav");
const navButtons = nav.querySelectorAll("button");
navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText.toLowerCase();
    if (buttonText === "home") {
      console.log("Home");
    } else if (buttonText === "menu") {
      console.log("Menu");
    } else if (buttonText === "about") {
      console.log("About");
    }
  });
});
