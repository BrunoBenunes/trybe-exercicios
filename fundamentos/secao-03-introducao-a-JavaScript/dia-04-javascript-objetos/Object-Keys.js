let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };




function exibeSkills(objectName) {
    for (let key in objectName) {
        console.log(`${(key.toUpperCase())} -  Nivel: ${objectName[key]}`);
    }
}
exibeSkills(student1)