// Peças de Xadrez : 
let xadrezPiece = 'Bispo'.toLowerCase(); // 'Peao' / 'Bispo' / 'Torre' / 'Dama' / 'Rei'

if (xadrezPiece === 'peao') { 
    console.log('O Peão se movem sempre para frente, uma casa por vez, com excecão do primeiro movimento, que faz com que ele possa mover 2 casas. \n O peão não pode pular peças, sendo bloquado o quando ahá uma outra peça em sua frente.')
} else if (xadrezPiece === 'bispo') {
    console.log('O Bispo se move na diagonal, quantas casas quiser. \n Porém o Bispo não pode pular outras peças.')
} else if (xadrezPiece === 'torre') {
    console.log('A Torre se move em linha reta, horizontalmente ou verticalmente, até atingir o final do tabuleiro ou ser bloqueado por outra peça.\n A torrecaputra no mesmo caminho que se move, ocupando a casa onde se encontrava a peça adversária.')
} else if (xadrezPiece === 'cavalo') {
    console.log('O cavalo é a unica peça que pode pular outras peças.\n O Cavalo, diferente das outras peças, se move em L, sempre terminando em uma casa de cor oposta de onde saiu. Apesar dele pular as peças no caminho, ele não as captura. Ele somente caputra a peça se ela se encontrar no destino final do L');
} else if (xadrezPiece === 'rainha') {
    console.log('A Rainha é uma das peças mais poderosas do jogo, podendo se mover quantas casas quiser, na diagonal, horizontal ou até mesmo vertical. Ela não pode pular outras peças, sendo que deve terminar o caminho em uma casa desocupada. A rainha captura no mesmo caminha que se move, ocupando a casa adversaria.');
} else if (xadrezPiece === 'rei') {
    console.log('O Rei é  apeça mais importante do Xadrez. O Rei pode se mover um um quadrado, sempre 1 casa de distancia de onde se encontra. Ou seja, pode se mover em qualquer direção, porém, somente uma casa.');
}
else {
    console.log('Peça inválida!')
}
