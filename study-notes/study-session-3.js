// função que checa qual o maior número dentro de uma array
const max = (numbers) => {
  let result = numbers[0];

  for (const greater of numbers) {
    if (greater > result) {
      result = greater;
    }
  }
  return { result };
};

console.log(max([2, 3, 5, 1, 6, 1, 3, 10]));



// função que confere repetição de letras em uma frase
const letterFrequency = (phrase) => {
  frequency = {};
  for (const character of phrase) {
    if (character in frequency) {
      frequency[character] = frequency[character] + 1;
    } else {
      frequency[character] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency("Oi, meu nome é Malu"));



// incremental operators
// ++, --, +=


// função que confere repetição de palavras em uma frase
const wordFrequency = (phrase) => {
    let frequency = {}
    words = phrase.split(" ")

    for (const word of words) {
      if (word in frequency) {
        frequency[word] += 1;
      } else {
        frequency[word] = 1;
      }
    }
    return frequency;
  };
  
  console.log(wordFrequency("lol what lol"));




  