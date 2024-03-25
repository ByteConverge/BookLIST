import {listOut} from "./script.js";

let titleUI = document.querySelector(".title"),
authorUI =  document.querySelector(".author"),
isbnUI =  document.querySelector(".isbn"),
appendBtn = document.querySelector("form"),
outputSection =document.querySelector(".outputDisplay") 
;



// console.log(appendBtn.textContent)



(function loadEventlisteners(){

appendBtn.addEventListener("submit", listOut);
outputSection.addEventListener("click" , event=>{
 let clicked = event.target;
 if(clicked.tagName === "SPAN"){
    clicked.parentElement.parentElement.classList.add("d-None")
    setTimeout(() => {
      let message = document.createElement("h1");
      message.innerHTML = "Book removed from list";
      message.style.background = "red";
      message.style.color = "white";
      message.style.fontSize = "1rem";
      appendBtn.insertBefore(message , titleUI.previousElementSibling)
      setTimeout(() => {
        message.style.display = "none"
      },500);
      
    }, 100);
    
 }



})

})();


export {titleUI,authorUI,isbnUI,outputSection , appendBtn};