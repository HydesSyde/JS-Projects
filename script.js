const container = document.getElementById("cardContainer");

//setting up the environment variables
let startX = 0; //horizontal position
let isDragging = false; //checks if user is dragig or not
let currentCard = null; //checks the currently selected card.
let lastChild = null; //check the last card

//array of card colors
const cardColors = [
  "#b2df8a",
  "#a6cee1",
  "#1f78b4",
  "#33a02b",
  "#fc9a99",
  "#e21a1c",
  "#fdbe70",
  "#ff7f00",
  "#cab2d6",
  "#6a3d9a",
];

function getLastCard() {
  return container.querySelector(".card:first-child");
}

//a function to get the top card of the stacked cards
function getTopCard() {
  return container.querySelector(".card:last-child");
}

//loop through all the cardcolors and assign each a color from the array
for (let i = cardColors.length; i >= 1; i--) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = cardColors[i - 1];

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardContent.textContent = i;

  card.appendChild(cardContent);
  container.appendChild(card);

  //failed attempt to reset
  // function reset() {
  //   lastChild = getLastCard();
  //   currentCard = getTopCard();
  //   if (lastChild) {
  //     container.appendChild(card);
  //   }
  // }

  // reset();
}

//an event listener to engage the mouse position, get top card, set isdragging;
container.addEventListener("mousedown", (e) => {
  currentCard = getTopCard();

  if (!currentCard) return;
  startX = e.clientX;
  // console.log(startX);

  isDragging = true;
  currentCard.style.transition = "none";
});

//rotate and move card by amount determined by delta
container.addEventListener("mousemove", (e) => {
  if (!isDragging || !currentCard) return;

  let deltaX = e.clientX - startX;

  currentCard.style.transform = `translateX(${deltaX}px) rotate(${deltaX / 10}deg)`;
});

container.addEventListener("mouseup", (e) => {
  if (!isDragging || !currentCard) return;

  let deltax = e.clientX - startX;

  //not yet created function. But it handles what happens when we let go of the card
  handleSwipe(deltax);
});

//event listener for phones
container.addEventListener("touchstart", (e) => {
  currentCard = getTopCard();

  if (!currentCard) return;
  startX = e.touches[0].clientX;

  isDragging = true;
  currentCard.style.transition = "none";
});

//rotate and move card by amount determined by delta
container.addEventListener("touchmove", (e) => {
  if (!isDragging || !currentCard) return;

  const deltaX = e.touches[0].clientX - startX;

  currentCard.style.transform = `translateX(${deltaX}px) rotate(${deltaX / 10}deg)`;
});

container.addEventListener("touchend", (e) => {
  if (!isDragging || !currentCard) return;

  let deltax = e.changedTouches[0].clientX - startX;

  //not yet created function. But it handles what happens when we dismiss a card or we let go.
  handleSwipe(deltax);
});

function handleSwipe(deltaX) {
  const sensitivity = 400;
  if (Math.abs(deltaX) > sensitivity) {
    currentCard.style.transition = "transform 0.3s, opacity 0.3s ease";

    currentCard.style.transform = `translateX(${deltaX > 0 ? 1000 : -1000}) rotate(${deltaX > 0 ? 45 : -45} deg)`;
    currentCard.style.opacity = "0";

    setTimeout(() => {
      currentCard.remove();
      currentCard = null;
    }, 1000);
  } else {
    currentCard.style.transition = "transform 0.3s ease";
    currentCard.style.transform = "translateX(0) rotate(0)";
  }

  isDragging = false;
}

//failed function to reset code
function reset() {
  container.innerHTML = "";

  for (let i = cardColors.length; i >= 1; i--) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = cardColors[i - 1];

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    cardContent.textContent = i;

    card.appendChild(cardContent);
    container.appendChild(card);
  }
}

reset();
