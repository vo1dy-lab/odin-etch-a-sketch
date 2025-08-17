const htmlContainer = document.querySelector(".container");
const htmlButton = document.querySelector("button");

function createBoard(size = 16) {
    for (let i = 0; i < size * size; i++) {
        const htmlSquare = document.createElement("div");
        htmlSquare.style.flexBasis = `calc(100% / ${size})`;
        htmlSquare.classList.add("square");
        htmlContainer.appendChild(htmlSquare);

        htmlSquare.addEventListener('mouseover', (e) => {
            e.currentTarget.style.backgroundColor = getRandomColor();
        })
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function newGrid() {
    htmlButton.addEventListener('click', () => {
        let size;

        do {
            size = prompt("Number of squares per side? (Max: 100)");
        } while (size < 0 || size > 100);

        if (htmlContainer.hasChildNodes) clearBoard();

        createBoard(size);
    })
}

function clearBoard() {
    while (htmlContainer.firstElementChild) {
        htmlContainer.removeChild(htmlContainer.lastElementChild);
    }
}


createBoard();
newGrid();