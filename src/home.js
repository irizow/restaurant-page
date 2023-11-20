import loadMenu from "./menu";
import loadContact from "./contact";

function createHome() {
   const content = document.getElementById("content");
   const header = document.createElement("div");
   const link1 = document.createElement("span");
   const link2 = document.createElement("span");
   const home = document.createElement("div");
   const title = document.createElement("p");
   const description = document.createElement("p");
   const button = document.createElement("button");
   header.classList.add("header");
   link1.classList.add("link");
   link1.textContent = "MENU"
   link2.textContent = "CONTACT US"
   link2.classList.add("link");
   home.classList.add("home");
   title.classList.add("title");
   description.classList.add("description");
   button.classList.add("button")
   title.textContent = "Vegan Grill";
   description.textContent = "Too good to no be plant based"
   button.textContent = "See the menu"
   home.appendChild(title);
   home.appendChild(description);
   home.appendChild(button);
   header.appendChild(link1);
   header.appendChild(link2);
   content.appendChild(header);
   content.appendChild(home);

   button.addEventListener("click", ()=>{
    while (content.firstChild) {
    content.removeChild(content.lastChild);
    }
    content.appendChild(header);
    loadMenu()
   })

   link1.addEventListener("click", ()=> {
    while (content.firstChild) {
    content.removeChild(content.lastChild);
    }
    content.appendChild(header);
    loadMenu()
   })

   link2.addEventListener("click", ()=> {
    while (content.firstChild) {
    content.removeChild(content.lastChild);
    }
    content.appendChild(header);
    loadContact();
   })
}

export default createHome