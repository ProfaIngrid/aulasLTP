let nome = prompt("Qual o seu nome?");
let idade = parseInt(prompt("Qual a sua idade?"));
let ano = parseInt(prompt("Qual o ano atual?"));
let aniver = prompt("Você já fez aniversário esse ano?") 


// um igual (=) significa que esta guardando algo
// dois iguais (==) significa que estou comparando os caracteres
//três iguais (===) significa que estou comparando caracteres e o tipo de dado
var result = ano - idade;

if(aniver == 'Sim'){
    alert(`Você nasceu em: ${result} e hoje é dia 21`); //interpolação: Chama uma variável dentro de uma mensagem
}else {
    let result1 = result - 1;
    alert(`Você nasceu em:` + result1 + 'e hoje é dia 21');//cocatenar: Unir elementos
}











