const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}
player.fullName = player.name+' '+player.lastName;

console.log('A jogadora',player.fullName,'tem',player.age,'de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player['bestInTheWorld']);
console.log('A jogadora',player.fullName,'foi eleita 6 vezes.')

console.log(`A jogadora ${player.fullName} possui ${player.medals['golden']} medalhas de ouro e ${player.medals['silver']} de prata.`)