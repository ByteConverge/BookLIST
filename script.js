import {titleUI,authorUI,isbnUI,outputSection,appendBtn} from "./app.js";

function AuthorInfo(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

function listOut(e){
e.preventDefault();

// added message

setTimeout(() => {
  let message = document.createElement("h1");
  message.innerHTML = "Book added";
  message.style.background = "green";
  message.style.color = "white";
  appendBtn.insertBefore(message , titleUI.previousElementSibling)
  setTimeout(() => {
    message.style.display = "none"
  },500);
  
}, 100);

let output ;

 const title = titleUI.value,
 author = authorUI.value,
 isbn = isbnUI.value;

 const authorData = new AuthorInfo(title,author,isbn);

 output =`
 <tr class="display ">
 <td>${authorData.title}</td>
 <td>${authorData.author}</td>
 <td>${authorData.isbn}</td>
 <td class="delete">
  <span> X </span>
 </td>
 </tr>
 `;
 outputSection.innerHTML += output;

 titleUI.value = ""
 authorUI.value = ""
 isbnUI.value = ""
}

export {listOut};

