import Icon from './icon.jpg';
import './style.css';
const content = document.querySelector(".content");
const title = document.createElement("h1");
const firstPara = document.createElement("p");
const secondPara = document.createElement("p");
const navHeader = document.createElement("div");
const navList = document.createElement("ul");
const homeButton = document.createElement("li");
const homeButtonLink = document.createElement("a");
const titleHeader = document.createElement("div");
const imgHeader = document.createElement("div");
const imgHeaderIcon = document.createElement("img");
const menuButton = document.createElement("li");
const contactButton = document.createElement("li");
const testimonyContainer = document.createElement("div");
const imgHeaderTitle = document.createElement("h2");
const footer = document.createElement("div");

homeButton.textContent = "HOME";
menuButton.textContent = "MENU";
contactButton.textContent = "CONTACT";
content.appendChild(titleHeader);
titleHeader.appendChild(title);
homeButton.appendChild(homeButtonLink);
content.appendChild(navHeader);
navHeader.appendChild(navList);
navList.appendChild(homeButton);
navList.appendChild(menuButton);
navList.appendChild(contactButton);
content.appendChild(imgHeader);
content.appendChild(testimonyContainer);
content.appendChild(footer);
imgHeader.appendChild(imgHeaderIcon);
imgHeader.appendChild(imgHeaderTitle);
testimonyContainer.appendChild(firstPara);
testimonyContainer.appendChild(secondPara);

imgHeaderIcon.src = Icon;
imgHeaderIcon.classList.add("imgHeaderIcon");
content.classList.add("content");
navList.classList.add("navList");
navHeader.classList.add("navHeader");
titleHeader.classList.add("titleHeader");
imgHeader.classList.add("imgHeader");
testimonyContainer.classList.add("testimonyContainer");
imgHeaderTitle.classList.add("imgHeaderTitle");
footer.classList.add("footer");

title.textContent = "RESTAURANT";
imgHeaderTitle.textContent = "Enjoy tasty food with a tasty view!";
firstPara.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius non voluptatibus perspiciatis cum molestias iste molestiae fuga excepturi beatae, corporis aliquam nulla ea deserunt animi optio cumque consectetur, sapiente doloribus.";
secondPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, obcaecati eos! Neque voluptatem suscipit nam! Sapiente, deleniti. Inventore repudiandae, minima sequi debitis, rem sit nostrum autem amet eaque ipsa alias.";