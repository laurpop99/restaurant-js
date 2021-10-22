import firstImgSrc from './firstImg.jpg';
import secondImgSrc from './secondImg.jpg';
import './style.css';
import {createContactPage} from './contact.js';
import {createMenuPage} from './menu.js';
createHomePage();
function clearPage() {
    document.querySelector(".content").textContent = "";
}
function createHomePage() {
document.querySelector(".content").textContent = "";
const content = document.querySelector(".content");
const title = document.createElement("h1");
const firstPara = document.createElement("p");
const secondPara = document.createElement("p");
const navHeader = document.createElement("div");
const navList = document.createElement("ul");
const homeButton = document.createElement("button");
const imgHeader = document.createElement("div");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");
const testimonyContainer = document.createElement("div");
const firstTestimony = document.createElement("div");
const secondTestimony = document.createElement("div");
const imgHeaderTitle = document.createElement("h2");
const footer = document.createElement("div");
const firstImg = document.createElement("img");
const secondImg = document.createElement("img");
const firstParaDiv = document.createElement("div");
const secondParaDiv = document.createElement("div");
const firstSpan = document.createElement("span");
const secondSpan = document.createElement("span");
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
content.appendChild(imgHeader);
content.appendChild(testimonyContainer);
content.appendChild(footer);
imgHeader.appendChild(imgHeaderTitle);
testimonyContainer.appendChild(firstTestimony);
testimonyContainer.appendChild(secondTestimony);
firstTestimony.appendChild(firstImg);
firstTestimony.appendChild(firstParaDiv);
firstParaDiv.appendChild(firstPara);
firstParaDiv.append(firstSpan);
secondTestimony.appendChild(secondImg);
secondTestimony.appendChild(secondParaDiv);
secondParaDiv.appendChild(secondPara);
secondParaDiv.appendChild(secondSpan);
footer.appendChild(footerPara);


firstImg.src = firstImgSrc;
secondImg.src = secondImgSrc;

content.classList.add("content");
navList.classList.add("navList");
navHeader.classList.add("navHeader");
imgHeader.classList.add("imgHeader");
testimonyContainer.classList.add("testimonyContainer");
firstTestimony.classList.add("firstTestimony");
secondTestimony.classList.add("secondTestimony");
imgHeaderTitle.classList.add("imgHeaderTitle");
footer.classList.add("footer");

title.textContent = "RESTAURANT";
imgHeaderTitle.textContent = "Enjoy tasty food with a tasty view!";
firstPara.textContent = '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius non voluptatibus perspiciatis cum molestias iste molestiae fuga excepturi beatae, corporis aliquam nulla ea deserunt animi optio cumque consectetur, sapiente doloribus."';
secondPara.textContent = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, obcaecati eos! Neque voluptatem suscipit nam! Sapiente, deleniti. Inventore repudiandae, minima sequi debitis, rem sit nostrum autem amet eaque ipsa alias."';
firstSpan.textContent = "- Mark Twain";
secondSpan.textContent = "- Albert Einstein";
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
   
export  {createHomePage};