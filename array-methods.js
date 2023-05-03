// TOSTRING: converte uma areray para string, separada por vírgulas
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("toString: " + fruits.toString());

// JOIN: também transforma em string, mas pode escolher como será separado
console.log("Join: " + fruits.join(" + "));

// POP: remove o último elemento e retorna este elemento
console.log("Pop: " + fruits.pop());

// PUSH: adiciona um elemento novo ao final da array
fruits.push("Kiwi");
console.log("Push: " + fruits);

// SHIFT: remove o primeiro elemento, e afasta todos os outros pro lugar dele. Retorna o elemento removido.
fruits.shift();
console.log("Shift: " + fruits);

// UNSHIFT: adiciona um elemento ao início da array
fruits.unshift("Lemon");
console.log("Unshift: " + fruits);


//////////////////////////////
// Mudando elementos:
fruits[0] = "Watermelon"
console.log("Mudando elementos: " + fruits);


// LENGTH: retorna o tamanho da array, e também pode ser utilizado pra adicionar um novo elemento ao final da array.
fruits[fruits.length] = "Pear";
console.log("Length: " + fruits);


// CONCAT: mescla duas arrays em uma nova array
// não muda as arrays anteriores, somente cria uma nova
// Também aceita strings
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log("Concat: " + myChildren);


// SPLICE: adicionas elementos a uma array.
// o primeiro parâmetro define a posição onde o novo elemento deve ser adicionado.
// o segundo parâmetro define quantos elementos serão removidos
// retorna uma array com os removidos
let removed = fruits.splice(1, 2, "Lemon", "Kiwi");
console.log("Splice: " + removed);


// SLICE: corta elementos de uma array e devolve uma nova array

