let i = 0;
const j = 5; //total number of images

// get all images
const images = document.querySelectorAll(".image-container img");
// console.log(images);

//next function
function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = ((i % j) + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicate(i + 1);
}

//prev fucntion
function prev() {
  let backward = document.getElementById("content" + (i + 1));
  backward.classList.remove("active");
  i = (i + j - 1) % j;
  let show = document.getElementById("content" + (i + 1));
  show.classList.add("active");
  indicate(i + 1);
}

//get all buttons
const buttons = document.querySelectorAll(".circle");

//bottom buttons show which image is shown on the screen
function indicate(num) {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });

  document.querySelector(
    ".circle-container button:nth-child(" + num + ")",
  ).style.backgroundColor = "#9198e5";
}

//clicking buttons for triggering image slider
function dot(index) {
  images.forEach((image) => {
    image.classList.remove("active");
  });
  const targetEle = document.getElementById("content" + index);
  if (targetEle) {
    targetEle.classList.add("active");
  }
  indicate(index);
}
