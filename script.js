let container = document.querySelector(".container");
container.style.gridTemplateColumns = "repeat(16 , 1fr)";
container.style.gridTemplateRows = "repeat(16 , 1fr)";

let gridNumber = 16 * 16;

for (let i = 0; i < gridNumber; i++) {
    let divs = document.createElement("div");
    divs.className = "squares";
    container.insertAdjacentElement("beforeend", divs);
}

