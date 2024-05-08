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

        let inimigo = (parseInt(Math.random() * 3) + 1);

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

// ---------------- questao 6 -------------------- 

function questao6() {

    let numero = (parseInt(Math.random() * 5) + 1);

    console.log("Jogo do adivinha");
    let x = parseInt(prompt("Digite um numero entre 1 e 5 e tente adivinha "));

    if(x < 1 || x > 5) 
        console.log("numero invalido");
    else if(x === numero)
        console.log("Voce acertou parabens"); 
    else
        console.log(`Voce perdeu o numero sorteado foi ${numero}`);

}

//questao6();

// ---------------- questao 7 -------------------- 

function questao7() {

    console.log("1 - Carro de luxo");
    console.log("2 - Carro popular");

    let car = parseInt(prompt("Qual carro voce quer alugar? "));

    if(car < 1 || car > 2) 
        console.log("Opcao invalida");

    else {

        let dias = parseInt(prompt("Por quantos dias voce vai alugar? "));
        let kms = parseFloat(prompt("Quantos Kms vc perccoreu? "));

        if(car === 1) {

            let valor = ((150.00 * dias) + (kms <= 200 ? (kms * 0.3) : (kms * 0.25))).toFixed(2);

            console.log(`O total do aluguel foi ${valor}`);

        } else {

            let valor = ((90.00 * dias) + (kms <= 100 ? (kms * 0.2) : (kms * 0.1))).toFixed(2);

            console.log(`O total do aluguel foi ${valor}`);

        }

    }

}

//questao7();

// ---------------- questao 8 -------------------- 

function questao8() {

    let hr = parseInt(prompt("Digite quantas horas voce fez de atividade fisica esse mes? "));

    let pts,din;

    if(hr <= 10 && hr >= 0) {

        pts = hr * 2;
        din = pts * 0.05;

    } else if(hr > 10 && hr <= 20) {

        pts = hr * 5;
        din = pts * 0.05;

    } else if(hr > 20) {

        pts = hr * 10;
        din = pts * 0.05;

    } else 
        console.log("hora invalida");

    console.log(`Voce fez ${pts} pontos e conseguiu ${din} ${din <= 1 ? 'real' : 'reais'}`);

}

//questao8();

// ---------------- questao 9 --------------------

function questao9() {

    let x = true;
    
    let arr = [];

    while(x) {

        let func = {};
        
        sx = prompt("Qual o sexo do funcionario? digite F para feminino e M para masculino ").toUpperCase();

        if(sx === "F" || sx === "M") {

            if(sx === "F")
                func.sx = "Feminino";
            else
                func.sx = "Masculino";

            func.salario = parseFloat(prompt("Qual o salario do funcionario? "));

            arr.push(func);

            let cont = prompt("Para continuar digite 'S' ").toUpperCase();

            if(cont !== "S") 
                x = false;

        } else 
            console.log("Opcao invalida");

    }

    let TotalF = 0,TotalM = 0;

    for(let funcionario of arr) {
        
        if(funcionario.sx === "Feminino")
            TotalF += funcionario.salario;
        else
            TotalM += funcionario.salario;
        
    };

    console.log(`Total de salario ganho pelos Homens e ${TotalM}`);
    console.log(`Total de salario ganho pelas Mulheres e ${TotalF}`);
}

//questao9();

// ---------------- questao 10 ------------------- 

function questao10() {

    function soma(arr) {

        let som = 0;

        for (let i = 0; i < arr.length; i++) 
            som += arr[i];

        return som;
    }

    function media(arr) {

        return (soma(arr)/arr.length).toFixed(2);

    }

    function qtdPar(arr) {

        let cont = 0;

        for (let i = 0; i < arr.length; i++) {
            
            if(arr[i] % 2 === 0)
                cont ++;
        }

        return cont;
    }

    function menor(arr) {

        return Math.min(...arr);
    }

    x = true;

    let arr = [];

    do {

        arr.push(parseInt(prompt("Digite um numero ")));

        let op = prompt("quer digitar outro numero? digite 'S' para continuar ").toUpperCase();
        
        if(op != "S")
            x = false;

    } while(x);

    console.log(`O somatorio dos valores e ${soma(arr)}`);
    console.log(`O menor valor e ${menor(arr)}`);
    console.log(`A media e ${media(arr)}`);
    console.log(`Quantidade de numero par e ${qtdPar(arr)}`);

}

//questao10();

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

    numeros.sort((a, b) => a - b)

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

// ---------------- questao 18 ------------------- 

function questao18() {

    let func = new Object()

    func.nome = prompt("Digite o nome do funcionario ");
    func.cargo = prompt("Digite o cargo do funcionario ");
    func.salario = parseFloat(prompt("Digite o salario do funcionario ")).toFixed(2);

    console.log(func);

}

//questao18();

// ---------------- questao 19 -------------------

function questao19() {

    

}

//questao19();

// ---------------- questao 20 -------------------

function questao20() {

}

//questao20();

// ---------------- questao 21 ------------------- 

function questao21() {

    let alt = parseFloat(prompt("Digite a altura da pessoa ")).toFixed(2);
    let sx = prompt("Digite o sexo da pessoa M para masculino ou F para feminino ");

    if(sx === 'm' || sx === 'M') 
        console.log(`o seu peso ideal e ${((72.7 * alt) - 58).toFixed(2)}`);
    else if(sx === 'f' || sx === 'F')
        console.log(`o seu peso ideal e ${((62.1 * alt) - 44.7).toFixed(2)}`);
    else 
        console.log("Opcao invalida");

}

//questao21();

// ---------------- questao 38 -------------------

function questao38() {

    function operacaoVetor(v,op){

        let soma = 0;
        let media;
        let mult = 1;
        let ord = [];

        switch(op) {

            case '1':

                for (const x of v) 
                    soma += x;

                return  `A soma e ${soma}`;
    
            break;
    
            case '2':

                for (const x of v) 
                    mult *= x;

                return `A multiplicacao e ${mult}`;
    
            break;
    
            case '3':

                for (const x of v) 
                    soma += x;

                return `A media e ${media = soma/6}`;
    
            break;
    
            case '4':

                ord = v.sort((a,b) => a - b);

                return `a ordem crescente e ${ord}`;
    
            break;

            default:
                return 'Opcao invalida';
    
        }

    }

    let v = [];

    for (let i = 0; i < 6; i++) 
        v.push(parseInt(prompt(`Digite o ${i + 1}° numero `)));

    console.log("1 - Soma dos elementos");
    console.log("2 - Produtos dos elementos");
    console.log("3 - Media dos elementos");
    console.log("4 - Ordene os elementos em ordem crescente");
    console.log("5 - Mostre o vetor");

    let op = prompt("Escolha a opcao desejada ");   

    if(op === '5')
        console.log(v);
    else
        console.log(operacaoVetor(v,op));

}

//questao38();

// ---------------- questao 41 -------------------

function questao41() {

    let pessoa = {

        nome: "jose",
        idade: "25"
    }

    pessoa.email = "jose@gmail.com";

    console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);

    console.log(pessoa);

}

//questao41();