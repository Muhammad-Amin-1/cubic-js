const container = document.getElementById("container");
const sizeButton = document.getElementById("sizeButton");

// случайный цвет
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Создание квадратов
function createSquares(amount) {
    container.innerHTML = ""; 
    const totalSquares = amount * amount;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.opacity = 1; // прозрачность
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor(); // Случайный цвет при наведении
        });
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`; // Количество столбцов в сетке
    container.style.gridTemplateRows = `repeat(${amount}, 1fr)`; // Количество строк в сетке
}

// Изменение количества квадратов
function changeSize() {
    let newSize;
    do {
        newSize = prompt("Введите количество квадратов по стороне (максимум 100):");
        newSize = parseInt(newSize);
    } while (isNaN(newSize) || newSize < 1 || newSize > 100);

    createSquares(newSize);
    sizeButton.textContent = `Изменить размер (${newSize}x${newSize})`; // Обновляем текст кнопки
}

sizeButton.addEventListener("click", changeSize);
createSquares(16); 
