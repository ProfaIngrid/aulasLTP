/*
-CRIE UM ALGORITMO QUE PERGUNTE AO USUARIO DOIS 
VALORES E UMA OPERAÇÃO

-ELE DEVE SER CAPAZ DE FAZER AS 4 OPERAÇÕES BÁSICAS
E DEPENDENDO DIGITAÇÃO, REALIZAR A OPERAÇÃO DESEJADA

-OPERAÇÕES:
     [SOMA, SUBTRAÇÃO, MULT, DIVISÃO E POTENCIA]
*/ 

let val1 = parseFloat(prompt("Digite o primeiro valor: ")); //recebo um valor armazenando na variavél e o transformo em float 
let val2 = parseFloat(prompt("Digite o segundo valor: ")); //recebo um valor armazenando na variavél e o transformo em float
let operecao = prompt("Qual a operação?"); //recebo a string que vai dizer qual operação será realizada

operecao = operecao.toLowerCase(); //Coloco toda a string digitada para letras minusculas


//começo as minhas condições:
if (operecao == 'soma') { //comparo se o valor armazenado  na variavel é igual a soma 

    let result = (val1 + val2);  //guardo a soma dos valores para o usuário

    alert(`${val1} + ${val2} =  ${result}`); //exibo uma mensagem com o resultado

}else if(operecao == 'subtração'){ //comparo se o valor armazenado  na variavel é igual a subtração 
   
    let result = (val1 - val2);  //guardo a subtração dos valores para o usuário

    alert(`${val1} - ${val2} =  ${result}`); //exibo uma mensagem com o resultado

}else if(operecao == 'multiplicação'){ //comparo se o valor armazenado  na variavel é igual a multiplicação 
   
    let result = (val1 * val2);  //guardo a multiplicação dos valores para o usuário

    alert(`${val1} x ${val2} =  ${result}`); //exibo uma mensagem com o resultado

}else if(operecao == 'divisão'){ //comparo se o valor armazenado  na variavel é igual a divisão 
    /*ATENÇÃO !*/
    /*
        a divisão será tratada de um modo diferente. Pois não podemos podemos dividir
        nenhum numero por zero; 
        sendo assim faremos um if dentro de if para tratar esta condição
    */

    if (val2 == 0 ){ //Faço uma condição que verifica se o val2 (numero que vai dividir) é igual a zero
        
        alert("Impossível dividir!"); //exibo uma mensagem de alerta
    
    }else{ //se a condição anterior não for verdadeira, sabemos que podemos dividir normalmente

        let result = (val1 / val2);  //guardo a divisão dos valores para o usuário

        alert(`${val1} / ${val2} =  ${result}`); //exibo uma mensagem com o resultado

    }

}else if(operecao == 'potencia'){ //comparo se o valor armazenado  na variavel é igual a potencia 
   
    let result = (val1 ** val2);  //guardo a potencia dos valores para o usuário

    alert(`${val1} ^ ${val2} =  ${result}`); //exibo uma mensagem com o resultado

}else { //caso nenhuma das condições anteriores forem verdadeiras, ele vai entrar neste ultimo caso
    alert('Você escolheu uma operação inválida'); //mensagem de erro ao usuiário
}