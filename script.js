let colour = "black";

const sizeButton = document.querySelector(".size");
const colourButton = document.querySelector(".colour");
const clickPrecisionButton = document.querySelector(".clickPrecision");
const mousePrecisionButton = document.querySelector(".mousePrecision")
const clearButton = document.querySelector(".clear");
const container = document.querySelector(".container");
function create(size) {
  let allSquares = container.querySelectorAll("div");
  allSquares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let gridNumber = size * size;

  for (let i = 0; i < gridNumber; i++) {
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", colourSquare);
    container.insertAdjacentElement("beforeend", divs);
    divs.className = "squares";
  }
}

create(16);

function clear() {
  let allSquares = container.querySelectorAll("div");
  allSquares.forEach((div) => div.remove());
  create(16);
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    create(input);
  } else {
    alert("Input a valid number!");
  }
}



function colourSquare() {
  this.style.backgroundColor = colour;
}

function chooseColour(input) {
  colour = input;
}

colourButton.addEventListener("click", function () {
  let answer = prompt(
    "Choose your colour! (Only hexcode and basic values are accepted)"
  );
  chooseColour(answer);
});

sizeButton.addEventListener("click", function () {
  let user = prompt(
    "Choose your size! (The number you choose will be the width and height of the square, eg: 16 would be 16x16). ONLY 2 - 100 are allowed!!!"
  );
  changeSize(user);
});

clearButton.addEventListener("click", function () {
  clear();
});

clickPrecisionButton.addEventListener("click", function () {
  let squares = container.querySelectorAll(".squares");
  squares.forEach((square) => {
    square.removeEventListener("mouseover", colourSquare);
    square.addEventListener("click", colourSquare);
  });
});

mousePrecisionButton.addEventListener("click", function() {
  let squares = container.querySelectorAll(".squares");
  squares.forEach((square) => {
    square.removeEventListener("click", colourSquare);
    square.addEventListener("mouseover", colourSquare);
  });
})