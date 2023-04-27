// Define an array of possible prizes
const prizes = [
    "50 рублей",
    "Прощенную лабу",
    "Самокат",
    "53 рубля",
    "73 рубля",
    "Рогалик",
    "Пакетик чая",
    "Выходной",
    "Булочку с маком",
    "Купон на 50 рублей в ДНС"
];

// Get references to the necessary elements
const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-button");

// Set up event listener for spin button click
spinButton.addEventListener("click", spinWheel);

// Function to randomly select a prize and spin the wheel
function spinWheel() {
    const degree = Math.floor(Math.random() * 360);

    const numPrizes = prizes.length;
    const degreePerSection = 360 / numPrizes;

    // Determine the prize that the wheel lands on based on the degree
    const prizeIndex = Math.floor(degree / degreePerSection);

    // Calculate the actual degree that the wheel will rotate to land on the selected prize
    const actualDegree = degreePerSection * prizeIndex;

    wheel.style.transition = "transform 5s ease-out";

    wheel.style.transform = `rotate(${actualDegree}deg)`;

    // Show the prize after the wheel has stopped spinning
    setTimeout(() => {
        alert(`Поздравляем! Вы выиграли: ${prizes[prizeIndex]}!`);
    }, 5500);
}
