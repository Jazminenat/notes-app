const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let note = document.querySelectorAll(".input-box");

function updateStore() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () =>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true")
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStore(); 
  }
  else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      note.onkeyup = function () {
        updateStore();
      }
    })
  }
})