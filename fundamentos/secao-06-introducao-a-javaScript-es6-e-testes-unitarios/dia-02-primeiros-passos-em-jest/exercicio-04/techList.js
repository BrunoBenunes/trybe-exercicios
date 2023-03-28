const techList = (techs, name) => {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  const techListArray = [];
  const sortTechs = techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    const obj = { tech: sortTechs[index], name };
    techListArray.push(obj);
  }
  return techListArray;
};

module.exports = { techList };
