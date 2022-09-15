var link = document.querySelector(".open-call");
var popup = document.querySelector(".pop-up-bg");
var close = document.querySelector(".cross");

console.log(link);
console.log(popup);

link.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.style.display = "block";
});

close.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.style.display = "none";
});
close.addEventListener("click", (evt) => {
    evt.preventDefault();
    popup.style.display = "none";
  });
