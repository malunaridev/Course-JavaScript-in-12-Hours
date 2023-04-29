// variáveis: armazenam valores dentro delas, que podem ser utilizados posteriormente
sentence = "How are you doing? Great to see you!"


// operators: são utilizados para inserir valores, compará-los, ou mesmo para operações aritméticas. Basicamente matemática básica.
food = 20
tipPercentage = 0.2
tipAmount = food * tipPercentage
total = food + tipAmount
console.log(total)


// prompt() é uma funcionalidade do JS que ajuda a coletar informações do usuário através do browser.


// alert() é uma outra funcionalidade que emite um alerta por meio do browser.


// number() é uma função que transforma uma string em um número.
Numero = "30"
Number("30")


// Tipos de Dados
// Number: 1, 5, 10, 110
// Strings: "Hello", "What is up?"
// Arrays
// Objects
// Boolean: true ou false


// Operações Matemáticas
// Multiplicação: *
// Divisão: /
// Potência: **
// Modulo/Remainder % // 5%2 = 1
// Adição: +
// Subtração: -


// Métodos Matemáticos
// Math.floor(): arredonda um número para baixo
// Math.ceil(): arredonda um número para cima
// Math.random(): dá um número de 0 a 1. Pode dar números com um alcance maior, usando multiplicação
Math.random() * 3


// Variáveis
// const: valor imutável.
// var: valor pode mudar.
// let: valor pode mudar.


// Condicionais
let weather = "rain"
if (weather == "rain") {
    console.log("Grab your umbrella")
} else {
    console.log("Wear your sunglasses")
}


// Operadores condicionais
// == (double equal): checa igualdade
    // x == 8 // false
    // x == 5 // true
    // x == "5" // true

// === (triple equal): checa igualdade e tipo de dado
    // x === 5 // true
    // x === "5" // false, porque o tipo de dado é diferente

// > e < : greater than, less than
    // 8 > x // true
    // x < 8 // false

// >= e <= : - greater or equal than, less or equal than
    // 35 >= x // true
    // 8 <= x // true

// != : not equal to
    // x != 8 // true

// !== : not equal value or type
    // x !== "35" // true, mesmo valor, tipo diferente
    // x !== 35 // false, mesmo valor, mesmo tipo.


// Functions: armazena blocos de código
function sayMyName() {
    console.log("Malu")
}
sayMyName()

// Function arguments: são informações inseridas dentro de uma função posteriormente.
function sayMyName2(name) {
    console.log(name)
}
sayMyName2("Mario")


// Concatenação de strings: juntar strings com variáveis com o uso de +.
function greeting(name) {
    greet = "Hi, " + name + ", nice to meet you!"
    console.log(greet)
}
greeting("Malu")


// Template literals: interpolação. É mais fácil de ser entendido por humanos.
// greet = `Hi ${name}, nice to meet you!`


// Return: para a execução de uma função e retorna um valor.
function sum(a, b) {
    return a + b
}

function calculateFoodTotal(food, tip) {
const tipPercentage = tip / 100
const tipAmount = food * tipPercentage
const total = sum(food, tipAmount)
return total
}
console.log(calculateFoodTotal(300,20))


// ES6 
// Arrow Functions => : têm return implícito
const sumArrow = (a, b) =>  a + b


