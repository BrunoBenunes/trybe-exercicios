const student = {
    name: 'Bruno',
    lastName: 'Benunes',
    age: 24,
    email: 'brunobenuness@hotmail.com',
    phone: '+55' + ' ' + 37999931289,
    gitHub: '@Brunobenunes',
    linkedin: '@Brunobenunes'
}


function addProperty(propertyKey, propertyKeyValue) {
    student[propertyKey] = propertyKeyValue;
}

let newKey = 'state'
let newKeyValue = 'Minas Gerais'

addProperty(newKey,newKeyValue)

console.log(student)
