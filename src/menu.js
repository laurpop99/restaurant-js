import firstImgSrc from './imgOne.png';
import secondImgSrc from './imgTwo.png';
import thirdImgSrc from './imgThree.png';
import fourthImgSrc from './imgFour.png';
import './style.css';
import { createContactPage } from './contact';
import {createHomePage} from './home.js';
createMenuPage();
function clearPage() {
    document.querySelector(".content").textContent = "";
}
function createMenuPage() {
document.querySelector(".content").textContent = "";
const content = document.querySelector(".content");
const title = document.createElement("h1");
const firstPara = document.createElement("p");
const secondPara = document.createElement("p");
const thirdPara = document.createElement("p");
const fourthPara = document.createElement("p");
const navHeader = document.createElement("div");
const navList = document.createElement("ul");
const homeButton = document.createElement("button");
const menuImgHeader = document.createElement("div");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");
const menuContainer = document.createElement("div");
const firstItem = document.createElement("div");
const secondItem = document.createElement("div");
const thirdItem = document.createElement("div");
const fourthItem = document.createElement("div");
const menuImgHeaderTitle = document.createElement("h2");
const footer = document.createElement("div");
const firstImg = document.createElement("img");
const secondImg = document.createElement("img");
const thirdImg = document.createElement("img");
const fourthImg = document.createElement("img");
const firstParaDiv = document.createElement("div");
const secondParaDiv = document.createElement("div");
const thirdParaDiv = document.createElement("div");
const fourthParaDiv = document.createElement("div");
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
content.appendChild(menuImgHeader);
content.appendChild(menuContainer);
content.appendChild(footer);
menuImgHeader.appendChild(menuImgHeaderTitle);
menuContainer.appendChild(firstItem);
menuContainer.appendChild(secondItem);
menuContainer.appendChild(thirdItem);
menuContainer.appendChild(fourthItem);
firstItem.appendChild(firstImg);
firstItem.appendChild(firstParaDiv);
firstParaDiv.appendChild(firstPara);
secondItem.appendChild(secondImg);
secondItem.appendChild(secondParaDiv);
secondParaDiv.appendChild(secondPara);
thirdItem.appendChild(thirdImg);
thirdItem.appendChild(thirdParaDiv);
thirdParaDiv.appendChild(thirdPara);
fourthItem.appendChild(fourthImg);
fourthItem.appendChild(fourthParaDiv);
fourthParaDiv.appendChild(fourthPara);
footer.appendChild(footerPara);


firstImg.src = firstImgSrc;
secondImg.src = secondImgSrc;
thirdImg.src = thirdImgSrc;
fourthImg.src = fourthImgSrc;

content.classList.add("content");
navList.classList.add("navList");
navHeader.classList.add("menuNavHeader");
menuImgHeader.classList.add("menuImgHeader");
menuContainer.classList.add("menuContainer");
firstItem.classList.add("firstItem");
secondItem.classList.add("secondItem");
thirdItem.classList.add("thirdItem");
fourthItem.classList.add("fourthItem");
menuImgHeaderTitle.classList.add("menuImgHeaderTitle");
footer.classList.add("footer");

title.textContent = "RESTAURANT";
menuImgHeaderTitle.textContent = "Restaurant's Menu:";
firstPara.textContent = '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius non voluptatibus perspiciatis cum molestias iste molestiae fuga excepturi beatae, corporis aliquam nulla ea deserunt animi optio cumque consectetur, sapiente doloribus."';
secondPara.textContent = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, obcaecati eos! Neque voluptatem suscipit nam! Sapiente, deleniti. Inventore repudiandae, minima sequi debitis, rem sit nostrum autem amet eaque ipsa alias."';
thirdPara.textContent = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, obcaecati eos! Neque voluptatem suscipit nam! Sapiente, deleniti. Inventore repudiandae, minima sequi debitis, rem sit nostrum autem amet eaque ipsa alias."';
fourthPara.textContent = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, obcaecati eos! Neque voluptatem suscipit nam! Sapiente, deleniti. Inventore repudiandae, minima sequi debitis, rem sit nostrum autem amet eaque ipsa alias."';


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

export  {createMenuPage};
    