let word = 'tryber'
let tamanho = word.length
let invertida = ''
for (let index = tamanho -1; index >= 0; index -= 1) {
    invertida += word[index];   
}
console.log(invertida) 