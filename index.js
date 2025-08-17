const htmlContainer = document.querySelector(".container");

function createBoard(size = 16) {
    for (let i = 0; i < size * size; i++) {
        const htmlSquare = document.createElement("div");
        htmlSquare.style.flexBasis = `calc(100% / ${size})`;
        htmlSquare.classList.add("square");
        htmlContainer.appendChild(htmlSquare)
    }
}

createBoard();