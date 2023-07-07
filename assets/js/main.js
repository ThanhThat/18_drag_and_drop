const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const boxList = $$(".box");
const boxImg = $(".box-img");

boxList.forEach((box) => {
  box.addEventListener("dragover", dragAllow);
  box.addEventListener("drop", drop);
});

boxImg.addEventListener("dragstart", dragStart);
boxImg.addEventListener("dragend", dragEnd);

function dragStart() {
  boxImg.classList.add("dragging");
}

function dragEnd() {
  boxImg.classList.remove("dragging");
}

function dragAllow(e) {
  e.preventDefault();
  this.appendChild(boxImg);
}

function drop(e) {
  e.preventDefault();
  this.appendChild(boxImg);
}
