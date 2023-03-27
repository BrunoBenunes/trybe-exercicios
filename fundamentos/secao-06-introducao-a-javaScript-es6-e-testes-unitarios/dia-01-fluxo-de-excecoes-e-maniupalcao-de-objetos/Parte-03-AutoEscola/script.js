const studentRegister = (name, age) => {
  if (!name|| !age) {
    throw new Error('Todas as informações são necessarias');
  }
  if (name === '' || age === '') {
    throw new Error('Todas as informações são necessarias');
  }
  if (Number(age) < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
  }
  return (`${name}, seja bem-vindo(a) à AutTrybe`)
}

const wellcomeStudent = (name, age) => {
  try {
    console.log(studentRegister(name, age));
  } catch (error) {
    console.log(error.message)
  }
}

wellcomeStudent('Bruno','29')