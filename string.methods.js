// IMPORTANTE: 
// Todos os métodos NÃO alteram a string: retornam uma NOVA STRING. 
// Strings não podem ser modificadas, apenas substituídas.


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

////////////////////////////////////////////////
// LENGTH: retorna a quantidade de caracteres de uma string.
let length = text.length;
console.log("Length: " + length) 


////////////////////////////////////////////////
// Existem 3 métodos para a extração de partes de uma string.

// SLICE: extrai parte de uma string e retorna a parte extraída como uma nova string.
// Começa e inclui o primeiro número; Se encerra e não inclui o último número.
// Se não houver um segundo valor, o slice corta a string até o seu final.
// Valores negativos são aceitos, e a contagem se inicia do final da string.
let slice = text.slice(7, 13);
console.log("Slice: " + slice) 

// SUBSTRING: funciona da mesma forma que slice, mas valores negativos são considerados como 0.
let substring = text.substring(7, 13);
console.log("Substring: " + substring) 

// SUBSTR: igualmente funcional, mas o segundo valor se refere à extensão da string que será cortada.
// Valores negativos são aceitos, e a contagem se inicia do final da string.
let substr = text.substr(1,9)
console.log("Substr: " + substr) 


////////////////////////////////////////////////
// REPLACE: substitui um valor específico por outro valor em uma string.
// Não edita a string anterior.
// Retorna uma nova string.
// Substitui apenas a primeira vez que o valor é encontrado na string. Para substituição de todas, usar uma expressão regular: /g (global match)
// É case sensitive.
let phrase = "Please visit Microsoft!";
console.log("Before Replace: " + phrase) 
let newPhrase = phrase.replace("Microsoft", "W3Schools");
console.log("After Replace: " + newPhrase) 


////////////////////////////////////////////////
// REPLACEALL: permite que seja utilizada uma expressão regular, além de uma string.
// Caso seja realmente uma expressão regular, deve ser utilizada a /g (global match).
let text2 = "I love cats. Cats are very easy to love. Cats are very popular";
text2 = text2.replaceAll(/Cats/g,"Dogs");
text2 = text2.replaceAll(/cats/g,"dogs");
console.log("After ReplaceAll: " + text2) 


////////////////////////////////////////////////
// TOUPPERCASE: converte a string inteira para maiúsculas.
console.log("After toUpperCase: " + text2.toUpperCase())

// TOLOWERCASE: converte a string inteira para minúsculas.
console.log("After toLowerCase: " + text2.toLowerCase())



////////////////////////////////////////////////
// CONCAT: une duas ou mais strings.
// Pode ser utilizado como se fosse o + para unir duas strings.
let word1 = "Hello";
let word2 = "World";
let word3 = word1.concat(" ", word2); 
console.log("After Concat: " + word3)


////////////////////////////////////////////////
// TRIM: remove os espaços em branco ao redor da string.
let hello1 = "      Hello World!      ";
console.log("Before Trim: " + hello1)
let hello2 = hello1.trim();
console.log("After Trim: " + hello2)

// TRIMSTART: também remove os espaços em branco, mas apenas do começo da string.
let hello3 = hello1.trimStart();
console.log("After trimStart: " + hello3)

// TRIMEND: também remove os espaços em branco, mas apenas do final da string.
let hello4 = hello1.trimEnd();
console.log("After trimEnd: " + hello4)


////////////////////////////////////////////////
// PADSTART: adiciona mais elementos no começo de uma string até alcançar um tamanho que foi especificado.
// O primeiro elemento é a extensão da string; O segundo elemento é o que será inserido até que a string atinja o tamanho especificado.
let pad = "5"
let padded = pad.padStart(4,"0");
console.log("After padStart: " + padded)
let padded2 = pad.padStart(4,"X");
console.log("After padStart: " + padded2)
// Para utilizar esse recurso com NÚMEROS, é necessário converter o número para uma string antes.
let numb = 5;
let numb2 = numb.toString();
let padded3 = numb2.padStart(4,"0");
console.log("After padStart: " + padded3)

// PADEND: Funciona da mesma forma que o padStart, porém adiciona o elemento ao fim da string.
let pad2 = "5"
let padded4 = pad2.padEnd(4,"0");
console.log("After padStart: " + padded4)


////////////////////////////////////////////////
// Existem 3 métodos para a extração de caracteres de uma string.

// CHARAT: retorna um caractere ao solicitar o seu index.
let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let char = text3.charAt(0);
console.log("After charAt: " + char)

// CHARCODEAT: retorna o código unicode daquele caractere naquele index (sistema UTF-16)
let char2 = text3.charCodeAt(0);
console.log("After charCodeAt: " + char2)

// Acesso com []: pode parecer uma array, mas não é. Permite acessar caracteres dentro de uma string.
// Retorna undefined se não houver um caractere naquela posição.
let char3 = text[7];
console.log("After []: " + char3)
// também pode ser utilizado AT
let char4 = text.at(7);
console.log("After at: " + char4)


////////////////////////////////////////////////
// CONVERTENDO STRINGS EM ARRAYS

// SPLIT: converte uma string em uma array, e sinaliza aonde que a string deve ser cortada em cada um dos seus pedaços.
let text4 = text3.split("")
console.log("After split: " + text4)
