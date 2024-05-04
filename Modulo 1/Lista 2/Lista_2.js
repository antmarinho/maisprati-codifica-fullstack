const prompt = require("prompt-sync")();

// ---------------- questao 1 --------------------

function questao1() {

    let qtdCigar = parseInt(prompt("Quantos cigarros voce fuma por dia? "));
    let qtdAno = parseInt(prompt("Quantos anos voce ja fumou? "));

    let minMenosVida = qtdCigar * 10 * 365 * qtdAno;

    let min = minMenosVida % 60;
    let hora = parseInt((minMenosVida/60)) % 24;
    let dia = parseInt(minMenosVida/1440);

    console.log(`Voce perdeu ${dia} dias ${hora} horas e ${min} minutos de vida`);

}

//questao1();

// ---------------- questao 2 --------------------

function questao2() {

    let vel = parseInt(prompt("Qual a velocidade do carro em Km/h? "));

    const limite = vel - 80;

    if(limite > 0) {

        let multa = (limite * 5);

        console.log(`Voce foi multado em R$ ${multa}`);

    } else {

        console.log("velocidade dentro do valor permitido na pista");
    }

}

//questao2();

// ---------------- questao 3 --------------------

function questao3() {

    let total;

    let km = parseInt(prompt("Quantos Kms vc deseja percorrer? "));

    if(km <= 200)
        total = (km * 0.5);
    else
        total = (km * 0.45)

    console.log(`O valor da viagem e R$ ${total}`);
}

//questao3();

// ---------------- questao 4 --------------------

function questao4() {

    let seg1 = parseInt(prompt("Digite o valor do primeiro segmento de reta "));
    let seg2 = parseInt(prompt("Digite o valor do segundo segmento de reta "));
    let seg3 = parseInt(prompt("Digite o valor do terceiro segmento de reta "));

    if((seg1 < (seg2 + seg3)) && (seg2 < (seg1 + seg3)) && (seg3 < (seg1 + seg2)))
        console.log("o triangulo e valido");
    else 
        console.log("triangulo invalido");

}

//questao4();

// ---------------- questao 5 --------------------

function questao5() {

    let sair = true;

    do {

        let inimigo = (parseInt(Math. random() * 3) + 1);

        console.log("Escolha a opcao desejada");
        console.log();
        console.log("1 - PEDRA");
        console.log("2 - PAPEL");
        console.log("3 - TESOURA");
        console.log();

        let x = parseInt(prompt("Digite o valor da opcao desejada "));

        if(x < 1 || x > 3) 
            console.log("Opcao invalida");
        else if(x === 1 && inimigo === 1)
            console.log("Seu adversario escolheu pedra o jogo empatou");
        else if(x === 1 && inimigo === 2)
            console.log("Voce perdeu o adversario escolher papel");
        else if(x === 1 && inimigo === 3)
            console.log("Voce venceu o adversario escolher tesoura");
        else if(x === 2 && inimigo === 1)
            console.log("Voce venceu o adversario escolheu pedra");
        else if(x === 2 && inimigo === 2)
            console.log("Seu adversario escolheu papel o jogo empatou");
        else if(x === 2 && inimigo === 3)
            console.log("Voce perdeu o adversario escolher tesoura");
        else if(x === 3 && inimigo === 1)
            console.log("Voce perdeu o adversario escolheu pedra");
        else if(x === 3 && inimigo === 2)
            console.log("Voce venceu o adversario escolheu papel");
        else if(x === 3 && inimigo === 3)
            console.log("Seu adversario escolheu teseoura o jogo empatou");

        let novo = parseInt(prompt("Para novo jogo digite 1 "));

        if(novo !== 1)
            sair = false;

    }while(sair);

}

//questao5();

// ---------------- questao 11 ------------------- 

function questao11() {

    let num = parseInt(prompt("Digite o primeiro termo de 1 PA "));
    let raz = parseInt(prompt("Digite a razao da PA "));

    function progAr(x,r,i) {
        return (num + (raz*(i-1)));
    }

    for (let i = 1; i <=10; i++) {
       
        console.log(progAr(num,raz,i));
        
    }

    let somaPa = ((num + progAr(num,raz,10)) * 10)/2;

    console.log(`A soma dos termos da PA e ${somaPa}`);

}

//questao11();

// ---------------- questao 12 -------------------

function fib(n) {

    if(n === 0)
        return 0;

    else if(n === 1) {
        return 1;

    } else 
        return fib(n-1) + fib(n-2);

}

function questao12() {

    for (let i = 1; i <= 10; i++) {
        
        console.log(fib(i));
            
    }
    
}

//questao12();

// ---------------- questao 13 ------------------- 

function questao13() {

    const arr = [];

    const n = 15;


    for (let i = 1; i <= 15; i++) {

        arr.push(fib(i));  // reaproveita a questao 12
        
    }

    console.log(arr);

}

//questao13();

// ---------------- questao 14 ------------------- 

function questao14() {

    let nome = [];

    for (let i = 0; i < 7; i++)  
        nome.push(prompt(`Digite o nome da ${i + 1}° pessoa `));

    for (let i = (nome.length - 1); i >= 0; i--) 
        console.log(nome[i]);

}

//questao14();

// ---------------- questao 15 ------------------- 

function questao15() {

    let numeros = []

    for (let i = 0; i < 10; i++)
        numeros.push(parseInt(prompt(`Digite o ${i + 1}° numero `)));

    for (let i = 0; i < 10; i++) {
        
        if(numeros[i] % 2 === 0) {
            console.log(`O numero ${numeros[i]} e par e estar armazenado na posicao ${i} do array`);
        }
    }

}

//questao15();

// ---------------- questao 16 ------------------- 

function questao16() {

    let numeros = [];

    for (let i = 0; i < 20; i++) 
        numeros.push(parseInt((Math. random() * 100)));

    console.log("esses sao os numeros gerados ");
    console.log(numeros);

    console.log("esses sao os numeros ordenados ");

    numeros.sort((a, b) => a -b)

    console.log(numeros);
        
}

//questao16();

// ---------------- questao 17 ------------------- 

function questao17() {

    let nome = [];
    let idade = [];

    for (let i = 0; i < 9; i++) {
        
        nome.push(prompt(`Digite o nome da ${i + 1}° pessoa `));
        idade.push(parseInt(prompt("Digite a idade da pessoa ")));

    }

    console.log("Os menores de idades sao ");

    for (let i = 0; i < 9; i++) {
        
        if(idade[i] < 18)
            console.log(`${nome[i]} tem ${idade[i]} anos`);
        
    }

}

//questao17();