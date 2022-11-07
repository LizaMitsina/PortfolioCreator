var link = document.querySelector(".open-call");
var popup = document.querySelector(".pop-up-bg");
var close = document.querySelector(".cross");
var closebtn = document.querySelector(".cross-btn");
var linklets = document.querySelector(".lets");
var black = document.getElementById("black");

console.log(link);
console.log(linklets);
console.log(black);
console.log(popup);

link.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.style.display = "block";
});
linklets.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.style.display = "block";
});
black.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.style.display = "block";
});
close.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.style.display = "none";
});
closebtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.style.display = "none";
});

var next = document.querySelector(".next");
var second_slider = document.querySelector(".second-slider");
var first_slider = document.querySelector(".first-slider");
var prev = document.querySelector(".prev");

console.log(next);
console.log(second_slider);
console.log(first_slider);

next.addEventListener("click", (evt) => {
  evt.preventDefault();
  second_slider.style.display = "block";
  first_slider.style.display = "none";
});

prev.addEventListener("click", (evt) => {
  evt.preventDefault();
  prev.classList.add("active");
  first_slider.style.display = "block";
  second_slider.style.display = "none";
  prev.classList.add("active");
});

