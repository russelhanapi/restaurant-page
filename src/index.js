import "./style.css";
import { renderHomePage } from "./modules/home";
import { renderMenuPage } from "./modules/menu";
import { renderContactPage } from "./modules/contact";

const content = document.querySelector("#content");
const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const contactTab = document.querySelector("#contact-tab");

homeTab.addEventListener("click", () => {
  content.innerHTML = "";
  renderHomePage();
});

menuTab.addEventListener("click", () => {
  content.innerHTML = "";
  renderMenuPage();
});

contactTab.addEventListener("click", () => {
  content.innerHTML = "";
  renderContactPage();
});

// Load Home Page by Default
renderHomePage();
