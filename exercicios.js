const readline = require('readline-sync');

// 1. Par ou Ímpar
let num = parseInt(readline.question("Digite um número inteiro: "));
console.log(num % 2 === 0 ? "Par" : "Ímpar");

// 2. Classificação por idade
let idade = parseInt(readline.question("\nDigite a idade: "));
if (idade <= 12) console.log("Criança");
else if (idade <= 17) console.log("Adolescente");
else if (idade <= 59) console.log("Adulto");
else console.log("Idoso");

// 3. Classificação de nota
let nota = parseFloat(readline.question("\nDigite a nota (0-10): "));
if (nota >= 7) console.log("Aprovado");
else if (nota >= 5) console.log("Recuperação");
else console.log("Reprovado");

// 4. Menu interativo
console.log("\nMenu:\n1 - Opção A\n2 - Opção B\n3 - Opção C");
let opcao = readline.question("Escolha uma opção: ");
switch(opcao) {
  case '1': console.log("Você escolheu a Opção A"); break;
  case '2': console.log("Você escolheu a Opção B"); break;
  case '3': console.log("Você escolheu a Opção C"); break;
  default: console.log("Opção inválida");
}

// 5. Cálculo de IMC
let peso = parseFloat(readline.question("\nDigite seu peso (kg): "));
let altura = parseFloat(readline.question("Digite sua altura (m): "));
let imc = peso / (altura * altura);
if (imc < 18.5) console.log("Baixo peso");
else if (imc < 25) console.log("Peso normal");
else if (imc < 30) console.log("Sobrepeso");
else console.log("Obesidade");

// 6. Tipo de triângulo
let A = parseFloat(readline.question("\nLado A: "));
let B = parseFloat(readline.question("Lado B: "));
let C = parseFloat(readline.question("Lado C: "));
if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) console.log("Triângulo Equilátero");
  else if (A === B || A === C || B === C) console.log("Triângulo Isósceles");
  else console.log("Triângulo Escaleno");
} else {
  console.log("Não forma triângulo");
}

// 7. Custo das maçãs
let macas = parseInt(readline.question("\nQuantidade de maçãs: "));
let preco = macas < 12 ? 0.30 : 0.25;
console.log(`Valor total: R$ ${(macas * preco).toFixed(2)}`);

// 8. Ordem crescente
let v1 = parseFloat(readline.question("\nDigite o primeiro valor: "));
let v2 = parseFloat(readline.question("Digite o segundo valor: "));
if (v1 < v2) console.log(v1, v2);
else console.log(v2, v1);

// 9. Contagem regressiva
console.log("\nContagem regressiva:");
for (let i = 10; i >= 1; i--) console.log(i);

// 10. Número repetido 10x
let numero = parseInt(readline.question("\nDigite um número: "));
for (let i = 0; i < 10; i++) console.log(numero);

// 11. Soma de 5 números
let soma = 0;
for (let i = 0; i < 5; i++) {
  soma += parseFloat(readline.question(`\nDigite o ${i + 1}º número: `));
}
console.log("Soma total:", soma);

// 12. Tabuada
let tabuada = parseInt(readline.question("\nDigite um número para a tabuada: "));
for (let i = 1; i <= 10; i++) console.log(`${tabuada} x ${i} = ${tabuada * i}`);

// 13. Média até digitar 0
let total = 0, count = 0;
while (true) {
  let valor = parseFloat(readline.question("\nDigite um número (0 para sair): "));
  if (valor === 0) break;
  total += valor;
  count++;
}
if (count > 0) console.log("Média:", (total / count).toFixed(2));
else console.log("Nenhum valor inserido.");

// 14. Fatorial
let fatNum = parseInt(readline.question("\nDigite um número para o fatorial: "));
let fatorial = 1;
for (let i = 1; i <= fatNum; i++) fatorial *= i;
console.log(`Fatorial de ${fatNum} é ${fatorial}`);

// 15. Sequência de Fibonacci
let fib1 = 0, fib2 = 1;
console.log("\nSequência de Fibonacci:");
for (let i = 0; i < 10; i++) {
  console.log(fib1);
  let temp = fib1 + fib2;
  fib1 = fib2;
  fib2 = temp;
}
