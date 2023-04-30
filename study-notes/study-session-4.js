// higher order function
// MAP: faz um loop e retorna uma array

[1, 2, 3, 4].map(number => console.log(number))


let result = [1, 2, 3, 4].map(number => number * 2)
console.log(result)


const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
}
console.log(doubleMap([1, 2, 3]))

// existe uma outra forma de escrever esta função de map:
//numbers.map(function(number) {
//    return number * 2})



// FILTER: separa alguns elementos da array com algumas condições. Retorna uma array.
const filter = (numbers2, greaterThan) => {
    let result = []
    for (const number of numbers2) {
        if (number > greaterThan) {
            result.push(number)
        }
    }
    return result
}
console.log(filter([1,2,3,4,5,6], 2))


// || = ou, pode ser qualquer uma das duas
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.filter(num => num > 4 || num < 2))
// &&: ambos precisam ser verdadeiros



// somente mostra quem tem net worth acima de 10 -> retorna uma array
const actors = [
    {name: "johnny", netWorth: 20000},
    {name: "amber", netWorth: 10},
    {name: "leonardo", netWorth: 10000}
]
let results = actors.filter(actor => actor.netWorth > 10)
let names = results.map(actor => actor.name).join(', ')

console.log(names)



// reduce: também recebe uma função como um argumento. Reduz para um único número, somando tudo.
const nums2 = [1, 2, 3]
const result4 = nums2.reduce(function(prev, curr) {
   return prev + curr
})
console.log(result4)


// usando reduce para somar os networths

let result5 = actors.filter(actor => actor.netWorth > 0)

let money = result5.map(actor => actor.netWorth)

let moneySum = money.reduce(
    (a, b) =>  a + b)

console.log(moneySum)