import addressImgSrc from './address.png';
import './style.css';
import {createHomePage} from './home.js';
import {createMenuPage} from './menu.js';
createContactPage();
function clearPage() {
    document.querySelector(".content").textContent = "";
}
function createContactPage() {
document.querySelector(".content").textContent = "";
const content = document.querySelector(".content");
const title = document.createElement("h1");
const addressPara = document.createElement("p");
const navHeader = document.createElement("div");
const navList = document.createElement("ul");
const homeButton = document.createElement("button");
const contactImgHeader = document.createElement("div");
const contactButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactContainer = document.createElement("div");
const addressItem = document.createElement("div");
const contactImgHeaderTitle = document.createElement("h2");
const footer = document.createElement("div");
const addressImg = document.createElement("img");
const addressParaDiv = document.createElement("div");
const footerPara = document.createElement("p");


homeButton.textContent = "HOME";
menuButton.textContent = "MENU";
contactButton.textContent = "CONTACT";
content.appendChild(navHeader);
navHeader.appendChild(title);
navHeader.appendChild(navList);
navList.appendChild(homeButton);
navList.appendChild(menuButton);
navList.appendChild(contactButton);
content.appendChild(contactImgHeader);
content.appendChild(contactContainer);
content.appendChild(footer);
contactImgHeader.appendChild(contactImgHeaderTitle);
contactContainer.appendChild(addressItem);
addressItem.appendChild(addressImg);
addressItem.appendChild(addressParaDiv);
addressParaDiv.appendChild(addressPara);
footer.appendChild(footerPara);


addressImg.src = addressImgSrc;
content.classList.add("content");
navList.classList.add("navList");
navHeader.classList.add("contactNavHeader");
contactImgHeader.classList.add("contactImgHeader");
contactContainer.classList.add("contactContainer");
addressItem.classList.add("addressItem");
contactImgHeaderTitle.classList.add("contactImgHeaderTitle");
footer.classList.add("footer");

title.textContent = "RESTAURANT";
contactImgHeaderTitle.textContent = "CONTACT US";
addressPara.textContent = '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius non voluptatibus perspiciatis cum molestias iste molestiae fuga excepturi beatae, corporis aliquam nulla ea deserunt animi optio cumque consectetur, sapiente doloribus."';
footerPara.textContent = " Copyright laurpop99 Ⓒ The Odin Project 2021"
homeButton.addEventListener("click", function(){
    clearPage();
    createHomePage();
});
menuButton.addEventListener("click", function(){
    clearPage();
    createMenuPage();
});
contactButton.addEventListener("click", function(){
    clearPage();
    createContactPage();
})
return content;
}
export  {createContactPage};
 
