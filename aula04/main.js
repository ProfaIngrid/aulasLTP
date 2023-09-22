let cor = prompt("Digite uma cor");
cor = cor.toUpperCase();

// o toUpperCase transforma a string para maiusculo
// o toLowerCase transforma a string para minuscula

if(cor == 'VERMELHO'){
    alert('Pare!');
}else if (cor == 'VERDE'){
    alert('Prossiga');
}else if(cor == 'AMARELO'){
    alert('Atenção! Se continuar vai dá ruim');
} else {
    alert('Cor inválida')
}


