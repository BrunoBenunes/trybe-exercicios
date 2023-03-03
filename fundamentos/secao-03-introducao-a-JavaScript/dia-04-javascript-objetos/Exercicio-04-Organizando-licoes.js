let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKey(object,key,value) {
  object[key] = value
}
addKey(lesson2,'turno','noite');

function listKeys(object) {
  return Object.keys(object)
}

function objectLength(object) {
  let arrayKeysObject = Object.keys(object);
  return arrayKeysObject.length
}

function objectValues(object) {
  return Object.values(object);
}

const allLessons = Object.assign({},{
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
})

function totalStudents(object) {
  let sum = 0;
  let keys = Object.keys(object);
  for (let index in keys) {
    sum += object[keys[index]].numeroEstudantes;
  }
  return sum
}

function verificationObject(object,key,value) {
  if (!(object[key] === value)){
    return false
  } else if (object.hasOwnProperty(key) && object[key] === value){
    return true
  }
}
