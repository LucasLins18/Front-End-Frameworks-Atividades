//Programa para formatar o salário em reais e em euro:
//SLIDE 68

let salario = 10000;
let salarioEmEuro = salario * 0.16; // Conversão de que 1 real = 0.16 euro

console.log("Salário em reais: R$ " + salario.toFixed(2));
console.log("Salário em euros: € " + salarioEmEuro.toFixed(2));