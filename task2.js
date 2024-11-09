const buttonChangeColor = document.querySelector(".clicker1");
const buttonShowAlert = document.querySelector(".clicker2");
const buttonCalculate = document.querySelector(".clicker");
const formCalculator = document.querySelector(".calculator");
const resultDisplay = document.querySelector(".Result");

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

buttonChangeColor.addEventListener("click", () => {
  const randomColor = `rgb(${getRandomInt(255)}, ${getRandomInt(
    255
  )}, ${getRandomInt(255)})`;
  buttonChangeColor.style.backgroundColor = randomColor;
});

buttonShowAlert.addEventListener("click", () => {
  alert(`Congratulations!\nYou are live at ${new Date().toLocaleString()}`);
});

formCalculator.addEventListener("submit", (event) => {
  event.preventDefault();

  const num1 = parseFloat(formCalculator.elements["first_number"].value);
  const num2 = parseFloat(formCalculator.elements["second_number"].value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    resultDisplay.innerHTML = `<h2>Result: ${sum}</h2>`;
  } else {
    resultDisplay.innerHTML = `<h2>Invalid input. Please enter valid numbers.</h2>`;
  }
});
