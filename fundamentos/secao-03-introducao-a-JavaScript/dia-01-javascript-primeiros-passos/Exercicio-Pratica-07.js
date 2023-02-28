let productPrice = 1000;
let saleValue = 3000;
const taxProductPrice = (productPrice) * (20/100);
const totalCost = productPrice + taxProductPrice;
const profitPerThousand = (saleValue - totalCost) * 1000;
if ( productPrice < 0 || saleValue < 0) [
    console.log('Erro! Valor de Entrada Menor que 0')
]
console.log(profitPerThousand)