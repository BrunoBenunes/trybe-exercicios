let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices); 


// Ou assim:
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let itenSrcMenu = 'Serviços'
const srcMenu = menu.indexOf(itenSrcMenu)
let menuServices2 = menu[srcMenu]

console.log(menuServices);