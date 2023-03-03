let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem vindo(a), ${info.personagem}`);

info.recorrente = 'Sim';
console.log(info);

for (let key in info) {
  console.log(key);
}
console.log('-----------------')
for (let key in info) {
  console.log(info[key]);
}

let cloneInfo = Object.assign({}, info)
function newValues(arrayNewValues) {
  let keysInfo = Object.keys(info)
  for (let key in cloneInfo) {
    cloneInfo[key] = arrayNewValues[keysInfo.indexOf(key)]
  }
}
newValues(['Tio Patinhas', `Christmas on Bear Mountain, Dell's Four Color Comics #178`,'O ultimo MacPatinhas', 'Sim'])
for (let key in info) {
  console.log(`${info[key]} e ${cloneInfo[key]}`);
}