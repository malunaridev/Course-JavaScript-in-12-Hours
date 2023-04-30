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
squares.forEach((square) => {
  square.onclick = () => console.log(square.value);
});

// contar quantas vezes foi clicado
