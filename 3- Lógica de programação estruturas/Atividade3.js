//Programa que calcula a velocidade e apresenta uma mensagem ao condutor:
//SLIDE 68

let distancia = 100; // em quilômetros
let tempo = 2; // em horas

let velocidade = distancia / tempo;
console.log("Sua velocidade média é: " + velocidade + " km/h");

if (velocidade > 80) {
  console.log("Você está acima da velocidade permitida!");
} else {
  console.log("Você está dentro do limite de velocidade.");
}
