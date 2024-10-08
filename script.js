let colour = "black";

const sizeButton = document.querySelector(".size");
const colourButton = document.querySelector(".colour");
const clickPrecisionButton = document.querySelector(".clickPrecision");
const mousePrecisionButton = document.querySelector(".mousePrecision");
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
mousePrecisionButton.style.backgroundColor = "#89b6fe";

function clear() {
  let allSquares = container.querySelectorAll("div");
  allSquares.forEach((div) => div.remove());
  create(16);
  mousePrecisionButton.style.backgroundColor = "#89b6fe";
  mousePrecisionButton.style.transition = "all 1s";
  clickPrecisionButton.style.backgroundColor = "";
  clickPrecisionButton.style.transition = "all 1s";
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

colourButton.addEventListener("mouseenter", function() {
  colourButton.style.border = "solid";
  colourButton.style.transition = "all 0.1s"
})

colourButton.addEventListener("mouseout", function() {
  colourButton.style.border = "";
})

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

clearButton.addEventListener("mouseenter", function () {
  clearButton.style.backgroundColor = "#ff4b4f";
  clearButton.style.transition = "all 1s";
});

clearButton.addEventListener("mouseout", function () {
  clearButton.style.backgroundColor = "";
  clearButton.style.transition = "all 1s";
});

clickPrecisionButton.addEventListener("click", function () {
  let squares = container.querySelectorAll(".squares");
  squares.forEach((square) => {
    square.removeEventListener("mouseover", colourSquare);
    square.addEventListener("click", colourSquare);
  });
  clickPrecisionButton.style.backgroundColor = "#89b6fe";
  clickPrecisionButton.style.transition = "all 1s";
  mousePrecisionButton.style.backgroundColor = "";
  mousePrecisionButton.style.transition = "all 1s";
});

clickPrecisionButton.addEventListener("mouseenter", function () {
  clickPrecisionButton.style.border = "solid";
  clickPrecisionButton.style.transition = "all 0.1s";
});

clickPrecisionButton.addEventListener("mouseout", function () {
  clickPrecisionButton.style.border = "none";
});

mousePrecisionButton.addEventListener("mouseenter", function () {
  mousePrecisionButton.style.border = "solid";
  mousePrecisionButton.style.transition = "all 0.1s";
});

mousePrecisionButton.addEventListener("mouseout", function () {
  mousePrecisionButton.style.border = "none";
});

mousePrecisionButton.addEventListener("click", function () {
  let squares = container.querySelectorAll(".squares");
  squares.forEach((square) => {
    square.removeEventListener("click", colourSquare);
    square.addEventListener("mouseover", colourSquare);
  });
  mousePrecisionButton.style.backgroundColor = "#89b6fe";
  mousePrecisionButton.style.transition = "all 1s";
  clickPrecisionButton.style.backgroundColor = "";
  clickPrecisionButton.style.transition = "all 1s";
});
