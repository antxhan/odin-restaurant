import "./styles.css";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

Home();
const pageContent = document.querySelector("#content");
const nav = document.querySelector("nav");
const navButtons = nav.querySelectorAll("button");
navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    pageContent.innerHTML = "";
    const buttonText = e.target.innerText.toLowerCase();
    if (buttonText === "home") {
      Home();
    } else if (buttonText === "menu") {
      Menu();
    } else if (buttonText === "about") {
      About();
    } else if (buttonText === "contact") {
      Contact();
    }
  });
});
