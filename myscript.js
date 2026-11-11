let i = 0;
const j = 5; //total number of images

//get all image
// const images = document.querySelectorAll(".image");

//next function
function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = ((i % j) + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
}

//prev fucntion
function prev() {
  let backward = document.getElementById("content" + (i + 1));
  backward.classList.remove("active");
  i = (i + j - 1) % j;
  let show = document.getElementById("content" + (i + 1));
  show.classList.add("active");
}
