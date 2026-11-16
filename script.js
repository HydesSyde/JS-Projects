const container = document.getElementById("cardContainer");

//setting up the environment variables
let startX = 0; //horizontal position
let isDragging = false; //checks if user is dragig or not
let currentCard = null; //checks the currently selected card.

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

//loop through all the cardcolors and assign each a color from the array
for (let i = cardColors.length; i >= 1; i--) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = cardColors[i - 1];

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardContent.textContent = i;

  container.appendChild(card);
  card.appendChild(cardContent);
}
