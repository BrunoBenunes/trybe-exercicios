const hydrate = (string) => {
  const joinHydrate = string.split('');
  const numArray = [];
  for (let index = 0; index < joinHydrate.length; index += 1) {
    if (Number(joinHydrate[index])) {
      numArray.push(joinHydrate[index]);
    }
  }
  let sum = Number(numArray[0]);
  for (let index = 1; index < numArray.length; index += 1) {
    sum += Number(numArray[index]);
  }

  return `${sum} copo${sum > 1 ? 's' : ''} de água`;
};

module.exports = { hydrate };
