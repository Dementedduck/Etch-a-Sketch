const sizeButton = document.querySelector(".size");
const colourButton = document.querySelector(".colour");
const precisionButton = document.querySelector(".precision");
const clearButton = document.querySelector(".clear");

function create(size) {
  let container = document.querySelector(".container");
  let allSquares = container.querySelectorAll("div");
  allSquares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let gridNumber = size * size;

  for (let i = 0; i < gridNumber; i++) {
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = "black";
    });
    container.insertAdjacentElement("beforeend", divs);
  }
}

function clear() {
    let allSquares = container.querySelectorAll("div");
    allSquares.forEach((div) => div.remove());
}

create(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    create(input);
  } else {
    alert("Input a valid number!");
  }
}

sizeButton.addEventListener("click", function () {
  let user = prompt(
    "Choose your size! (The number you choose will be the width and height of the square, eg: 16 would be 16x16). ONLY 2 - 100 are allowed!!!"
  );
  changeSize(user);
});
