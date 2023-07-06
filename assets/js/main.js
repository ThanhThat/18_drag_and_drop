const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const boxList = $$(".box");
const boxImg = $(".box-img");

setEventDragAndDrop(boxImg);

boxList.forEach((box) => {
  setEventDragAndDrop(box);
});

function setEventDragAndDrop(elem) {
  elem.setAttribute("draggable", true);
  elem.addEventListener("dragstart", drag);
  elem.addEventListener("drop", drop);
  elem.addEventListener("dragover", allowDrop);
}

function allowDrop(ev) {
  ev.preventDefault();
  this.appendChild(boxImg);
}

function drag(ev) {
  // console.log(ev.target.className);
  ev.dataTransfer.setData("text", ev.target.className);
  ev.target.classList.add("dragging");
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.classList.remove("dragging");
  ev.target.appendChild($(`.${data}`));
}
