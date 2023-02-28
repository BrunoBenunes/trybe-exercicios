let salary = 10000
let baseSalary;
let finalSalary;
let inssTax;
let irTax;
let irTaxPortion;

// Calculo da taxa o Inss
if (salary <= 1556.94){
    inssTax = 8/100;
} else if (salary >= 1556.95 && salary <= 2594.92) {
    inssTax = 9/100;
} else if (salary >= 2594.93 && salary <= 5189.82) {
    inssTax = 11/100
} else if (salary > 5189.82){
    inssTax = 570.88
}


// Calculo da taxa do Ir
if (salary <= 1903.98) {
    console.log('Isento da Taxa IR')
    irTax = null
    irTaxPortion = null
} else if (salary >= 1903.99 && salary <= 2826.65) {
    irTax = 7/100
    irTaxPortion = 142.80
} else if (salary >= 2826.66 && salary <= 3751.05){
    irTax = 15/100
    irTaxPortion = 354.80
} else if (salary >= 3751.06 && salary <= 4664.68) {
    irTax = 22.5/100
    irTaxPortion = 636.13
} else if(salary > 4664.68) {
    irTax = 27.5/100
    irTaxPortion = 869.63
}

if (inssTax > 100){
    baseSalary = (salary - inssTax)
}
else{
baseSalary = (salary - (salary * inssTax));
}
finalSalary = baseSalary - ((baseSalary * irTax) - irTaxPortion)

console.log('O salário final, descontado todos os impostos, é: R$',finalSalary)