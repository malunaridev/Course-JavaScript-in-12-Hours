let title = document.getElementById("title");

console.log(title.innerText);

title.innerText = "Goodbye, my lover!";

let message = "I'm always waiting for you";

title.innerHTML = `<p>${message}</p>`;

title.style.color = "red";

let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

redDiv.onclick = () => console.log("you clicked red");
yellowDiv.onclick = () => console.log("you clicked yellow");
greenDiv.onclick = () => console.log("you clicked green");

// loop
//transforma os botões em uma array
const squares = document.querySelectorAll(".colorSquare");
console.log(squares[0].value);

// forEach
// squares.forEach((square) => {
//   square.onclick = () => console.log(square.value);
// });

// contar quantas vezes foi clicado
const timesClicked = {
  red: 0,
  yellow: 0,
  green: 0,
};
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerHTML = timesClicked[square.value];
  };
});

function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => {
    square.innerHTML = "";
  });
}

const clearGameBtn = document.getElementById("clear-game");
clearGameBtn.onclick = () => clearScores();
