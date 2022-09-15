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
