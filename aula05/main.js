let val1 = parseInt(prompt('Qual sua idade?'));
let val2 = prompt("Já possui habilitação?");

if(val1 >= 18 && val2 == 'Sim'){
    alert("Pode dirigir");
} else {
    alert("Não pode dirigir");
}



/*
PORTAS LOGICAS:

NOT(!=) -> porta de negação, ou seja, nego uma condição
    Ex: 
        2 != 3 => True
        5 != 5 => False

AND(&&) -> porta and, precisa que TODAS as condições sejam 
verdadeiras para retornar True
    Ex:
        nota = 7
        freq = 70

        nota >= 7 && freq >= 75 -> False
        nota >= 7 && freq >= 50 -> True
        
OR(||) -> porta OR, precisa que PELO MENOS UMA condição seja 
verdadeira para retornar TRUE
    Ex: 
        nota = 7
        freq = 56

        nota >= 7 || freq >= 70 -> True
        nota >= 10 || freq >= 80 -> False

*/

/*
CRIE UM PROGRAMA QUE PERGUNTE AO USUÁRIO SE ELE GESTANTE, IDOSO 
OU PCD E IMPRIMA "ESTACIONE EM UMA VAGA PREFERENCIAL" OU ENTÃO 
IMPRIMA "ESTACIONE EM UMA VAGA COMUM"
*/




