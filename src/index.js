import "./styles.css";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Reserve from "./pages/reserve";
import Contact from "./pages/contact";

Home();
const pageContent = document.querySelector("#content");
const nav = document.querySelector("nav");
const navButtons = nav.querySelectorAll("button");
navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    pageContent.innerHTML = "";
    const buttonText = e.target.innerText;
    resetTabHighligts();
    e.target.ariaCurrent = "true";
    if (buttonText === "home") {
      Home();
    } else if (buttonText === "menu") {
      Menu();
    } else if (buttonText === "contact") {
      Contact();
    } else if (buttonText === "reserve") {
      Reserve();
    }
  });
});

function resetTabHighligts() {
  navButtons.forEach((button) => {
    button.ariaCurrent = "false";
  });
}
