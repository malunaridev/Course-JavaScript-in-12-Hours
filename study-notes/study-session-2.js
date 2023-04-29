// Arrays: armazenam conteúdos.
const groceries = ["banana", "apple", "orange", "pear"]
console.log(groceries)


// index: o item dentro da array -- Sempre começa com 0
console.log(groceries[0])


// Array methods
// push: adiciona um index
groceries.push("cookie")
console.log(groceries)
// slice: captura um fragmento
    // o primeiro número é a partir de onde o corte deve começar, incluindo ele, e o segundo é o limite, não incluindo ele.
console.log(groceries.slice(1, 4))
// indexOf: informa qual a posição daquele item
console.log(groceries.indexOf("orange"))
// length: informa qual o tamanho daquela array, ou seja, quantos itens há dentro dela.
console.log(groceries.length)


// objects
const person = {
    name: "Leonardo",
    shirt: "white"
}

// duas formas de acessar os itens dentro de um objeto
console.log(person.name)
console.log(person["shirt"])

// atribuindo a um objeto (duas formas)
person.phone = "1-22-333-444"
person["favoriteFood"] = "coconuts"
console.log(person.phone)

// acessando tudo
console.log(person)

const person2 = {
    name: "Qazi",
    shirt: "black"
}

const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liability: 50000,
        netWorth: function() {
            return this.assets - this.liability
        }
    }

    const intro = `Hi, my name is ${person.name}, and the color of my shirt is ${person.shirt}, and my net worth is $${person.netWorth()} USD.`
    // chama a função como uma função também.
    return intro
}
console.log(introducer("Malu", "purple"))

// Methods: método é uma propriedade que contém uma função. Eles carregam () consigo.

// this: se refere a exatamente ao que está sendo utilizado.



// Loops
const fruits = ["banana", "apple", "orange", "pear"]

for (let i=0; i < fruits.length; i++) {
    console.log(i,fruits[i])
}

// i=0: CONDIÇÃO PARA COMEÇAR O LOOP. começa em 0
// i < fruits.length: CONDIÇÃO PARA O LOOP CONTINUAR. rode até acabar todos os index da array
// i++: DEPOIS QUE O LOOP É TRIGGADO. Aumenta o index em mais um a cada vez que ele é rodado.

// O i na frente adiciona um número de contagem.


// forma moderna
for (const fruit of fruits) {
    console.log(fruit)
}

// fruits é a array!
// fruit é o index número 0, que é incrementado em +1 até o final da array

const numbers = [1, 2, 3, 4, 5, 6]
let result = []

// forma antiga
for (let i=0; i < numbers.length; i++)
    {
     console.log(i, numbers[i])
    }

// forma moderna (com o dobro da quantidade)
for (const number of numbers) {
    console.log(number * 2)
}


// criando um novo loop e colocando o dobro das quantidades dentro de uma array nova
for (const number2 of numbers) {
    result.push(number2 * 2)
}
console.log(result)


// transformando em uma função que dobra os números
const double = (numbers) => {
    let results = []
    for (const number3 of numbers) {
        results.push(number3 * 2)
    }
    return results
}
console.log(double([5, 7, 9, 11]))


// of: pega a string
// in: pega o index

const howManyLetters = () => {
    const phrase = "Hey, can you go to grocery store with me?"

    let result = 0

    for (const index in phrase) {
        console.log(Number(index) + 1)
        result = Number(index) + 1 
        // tem que adicionar mais um, porque a contagem começa em zero
    }
     return { result} // retorna como um objeto
}
console.log(howManyLetters())


// propriedade para contagem de caracteres de uma string
"banana".length



// como fazer a soma de todos os elementos de uma array
const numbers4 = [1, 2, 3, 4]
result = 0

const sumArray = (numbers) => {
    let result = 0;

    for (number of numbers4) {
        result = number + result
        console.log(result)
    }
    return { result }
}

console.log(sumArray())



// exercício: escrever uma função que some elementos de uma array sem olhar o exemplo
const newNumbers = [3, 4, 6, 7]

const newSum = () => {
    let result = 0;
    for (sum of newNumbers) {
        result = result + sum
        console.log(result)
    }
    return {result: result}
}
console.log(newSum())