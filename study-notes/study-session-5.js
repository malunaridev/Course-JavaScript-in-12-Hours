// selecionar um número aleatório dentro de uma array
const randomFruit = (fruits) => {
    const randomNumber = Math.floor(Math.random() * fruits.length)
    return fruits[randomNumber]
}

 fruits = ["banana", "apple", "orange", "pear"]
console.log(randomFruit(fruits))


// condições dentro de condições
const weatherScore = (weather, weather2) => {
    let score 
    if (weather == 'rainy' && weather2 == "overcast") {
        score = 2
    } else if (weather == 'rainy') {
        score = 1
    } else if (weather == 'sunny') {
        score -1
    } else {
        score = 0
    }
}