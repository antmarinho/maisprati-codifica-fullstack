
const prompt = require('prompt-sync')();

// --------------- questao 1 ------------------------------

function questao1() {

    const temp = parseFloat(prompt('Digite a temperatura em Celsius para conveter em Fahrenheit '));

    let newTemp = ((temp * 1.8) + 32);

    console.log(`a temperatura e ${newTemp}°F`);

}

// --------------- questao 2 ------------------------------

function questao2() {

    const qtdEleitores = parseInt(prompt('Digite a quantidade de eleitores '));
    const qtdBrancos = parseInt(prompt('Digite a quantidade de votos em brancos '));
    const qtdNulos = parseInt(prompt('Digite a quantidade de votos nulos '));
    const qtdValidos = parseInt(prompt('Digite a quantidade de votos validos '));

    let percBrancos = ((qtdBrancos/qtdEleitores) * 100).toFixed(2);
    let percNulos = ((qtdNulos/qtdEleitores) * 100).toFixed(2);
    let percValidos = ((qtdValidos/qtdEleitores) * 100).toFixed(2);

    console.log(`${percBrancos}% de votos brancos`);
    console.log(`${percNulos}% de votos nulos`);
    console.log(`${percValidos}% de votos validos`);

}

// --------------- questao 3 ------------------------------

function questao3() {

    let num = new Array(4);

    for (let i = 0; i < num.length; i++) {

        num[i] = parseInt(prompt(`digite o ${i + 1}° numero `));
       
    }

    let newX = num[0] + 25;
    let newY = num[1] * 3;
    let newZ = num[2] * 0.12;
    let newK = num[0] + num[1] + num[2];

}

// --------------- questao 4 e 5 ------------------------------

function questao4e5() {

    const nota1 = parseFloat(prompt('Digite a nota da primeira avaliacao '));
    const nota2 = parseFloat(prompt('Digite a nota da segunda avaliacao '));

    let media = ((nota1 + nota2)/2);

    if(media >= 6) {
        console.log('PARABÉNS! Você foi aprovado');
    } else {
        console.log('Você foi REPROVADO! Estude mais');
    }

}

// --------------- questao 6 ------------------------------

function questao6() {

    const a = parseInt(prompt('Digite o lado A do triangulo '));
    const b = parseInt(prompt('Digite o lado B do triangulo '));
    const c = parseInt(prompt('Digite o lado C do triangulo '));

    if((a < b + c) && (b < a + c) && (c < a + b)) {

        if((a === b) && (b === c)) {
            console.log('esse e um triangulo equilatero');
        } else {
            if((a === b) || (a == c) || (b === c)) {
                console.log('esse e um triangulo isosceles');
            } else {
                console.log('esse e um triangulo escaleno');
            }
        }

    } else {
        console.log('triangulo invalido');
    }

}

// --------------- questao 7 ------------------------------

function questao7() {

    const qtdMaca = parseInt(prompt('Digite quantas maça vc quer comprar '));

    if(qtdMaca > 12){

        let total = (qtdMaca * 0.25).toFixed(2);

        console.log(`o valor da compra foi R$ ${total}`);

    } else {

        let total = (qtdMaca * 0.30).toFixed(2);

        console.log(`o valor da compra foi R$ ${total}`);
    }

}

// --------------- questao 8 ------------------------------

function questao8() {

    z = true;

    do {
        const x = parseInt(prompt('Digite o primeiro numero '));
        const y = parseInt(prompt('Digite o segundo numero '));

        if(x === y) {
            console.log('Digite numeros diferentes ');
        } else {
            x > y ? console.log(y,x) : console.log(x,y);
            z = false;
        }

    }while(z)

}

// --------------- questao 9 ------------------------------

function questao9() {

    const codigo = parseInt(prompt('Digite o codigo do produto '));

    switch(codigo) {

        case 1:
            console.log('O produto e do sul');
        break;

        case 2:
            console.log('O produto e do norte');
        break;

        case 3:
            console.log('O produto e do leste');
        break;

        case 4:
            console.log('O produto e do oeste');
        break;

        case 5: case 6:
            console.log('O produto e do nordeste');
        break;

        case 7: case 8: case 9:
            console.log('O produto e do sudeste');
        break;

        /* 
            como o case na aceita intervalo fiz no default 
            com if else para os outros casos 
            do q encher de varios case sem condicoes

        */
    
        default:

            if(codigo >= 10 && codigo <= 20)
                console.log('O produto e do centro-oeste');
            else {
                if(codigo >= 25 && codigo <= 50)
                    console.log('O produto e do nordeste');
                else 
                    console.log('Produto importado');
            }
    }

}

// --------------- questao 10 ------------------------------

function questao10() {

    const numero = parseInt(prompt('Digite um numero '));

    for (let i = 0; i < 10 ; i++) {
        console.log(numero);
    }

}

// --------------- questao 11 ------------------------------

/* 
    OBS - numero.length e a condicao se eu n digitar 
    nada do teclado e der enter ele tbm sai do laço pq seria um valor nulo

 */

function questao11() {

    z = true;

    while(z) {

        let numero = prompt('Digite um numero ');

        let x = parseInt(numero);

        if (numero.length === 0 || x < 0) { 
            z = false;
        } else {
            if((x % 2) === 0){
                console.log(`o numero ${x} e PAR`);
            } else {
                console.log(`o numero ${x} e IMPAR`);
            }
        }

    }

}

// --------------- questao 12 ------------------------------

function questao12() {

    for (let i = 1000; i < 2000; i++) {
       
        if((i % 11) === 5) {
            console.log(i);
        }
        
    }

}

// --------------- questao 13 ------------------------------

function questao13() {

    let num = new Array(5);

    for (let i = 0; i < num.length; i++) {
        
        num[i] = parseInt(prompt(`Digite o ${i + 1}° valor `));
        
    }

    for (let j = 0; j < num.length; j++) {
        
        for (let k = 0; k < num[j]; k++) {
            
            console.log(`${k + 1} x ${num[j]} = ${num[j] * (k + 1)}`);
        }
        
    }

}

// --------------- questao 14 ------------------------------

function questao14() {

    z = true;
    
    cont = 0;
    soma = 0;

    while(z) {

        const num = parseFloat(prompt('Digite um numero decimal '));

        if(num === 0) {
            z = false;
        } else {
            soma += num;
            cont++;
        }

    }

    console.log(`a media aritmetrica e ${(soma/cont).toFixed(2)}`);

}

// --------------- questao 15 ------------------------------

function questao15() {

    z = true;
    
    somaPeso = 0;
    soma = 0;

    while(z) {

        const num = parseFloat(prompt('Digite um numero decimal '));

        if(num === 0) {
            z = false;
        } else {

            const peso = parseInt(prompt('Digite o peso desse numero '));

            soma += (num * peso);
            somaPeso += peso;
        }

    }

    console.log(`a media ponderada e ${(soma/somaPeso).toFixed(2)}`);

}

// --------------- questao 16 ------------------------------

function questao16() {

    z = true;

    num = 100;
    cont = 0;
    i = 1;
    verif = 0;

    while(z) {

        raiz = parseInt(Math.sqrt(num));

        while(i <= raiz) {

            if((num % i) === 0) {
                verif++;
            }

            i++;

        }

        if(verif === 1) {
            cont++;
            console.log(num);
        }

        if(cont === 50) {
            z = false;
        } else {
            i = 0;
            verif = 0;
            num++;
        }

    }
    
}