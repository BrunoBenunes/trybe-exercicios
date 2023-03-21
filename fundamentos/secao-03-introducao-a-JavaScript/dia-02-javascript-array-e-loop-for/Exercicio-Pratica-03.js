let array = ['java', 'javascript', 'python', 'html', 'css'];
let highWord = ''
let lowWord = ''

for (let index = 0; index < array.length; index += 1) {
    let tamanho = array[index].length
    if (highWord === '' || lowWord === '') {
        highWord = array[index];
        lowWord = array[index];
    } else if ( array[index].length > highWord.length ) {
        highWord = array[index];
    } else if ( array[index].length < lowWord.length ) {
        lowWord = array[index];
    }
}
console.log('A maior palavra é : ' + highWord + '\nE a menor palavra é: ' + lowWord);