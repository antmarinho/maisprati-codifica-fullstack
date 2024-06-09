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

    let i = 0;
    let arr = [];

    while(i < 5) {

        let hora = parseInt(prompt("Digite a hora "));

        if(hora > 23 || hora < 0) 
            console.log("Hora invalida digite um valor entre 0 e 23");
        else {

            if(hora === 0)
                hora = "00";
            else if(hora < 10)
                hora = ("0" + hora.toString());

           let min = parseInt(prompt("Digite os minutos "));

           if(min > 59 || min < 0)
                console.log("Minutos invalido digite um valor entre 0 e 59");
           else {

            if(min === 0)
                min = "00";
            else if(min < 10)
                min = ("0" + min.toString());

                let seg = parseInt(prompt("Digite os segundos "));

                if(seg > 59 || seg < 0)
                    console.log("Segundos invalido digite um valor entre 0 e 59");
                else {

                    if(seg === 0)
                        seg = "00";
                    else if(seg < 10)
                        seg = ("0" + seg.toString());

                    arr.push((`${hora}:${min}:${seg}`).toString());
                    
                    i += 1;
                }
           }
        
        }   
    }

    for (const hora of arr) 
        console.log(hora);
    
 
}

//questao19();

// ---------------- questao 20 -------------------

function questao20() {

    let tabFuncionario = [];

    for(i = 0; i < 80; i++) {

        let funcionario = {};

        funcionario.matricula = prompt(`Digite a matricula do ${i + 1}° funcionario `);
        funcionario.nome = prompt(`Digite o nome do ${i + 1}° funcionario `);
        funcionario.salBruto = parseFloat(prompt(`Digite o salario do ${i + 1}° funcionario `)).toFixed(2);
        funcionario.salLiquido = (funcionario.salBruto * 0.88).toFixed(2);
        funcionario.inss = (funcionario.salBruto * 0.12).toFixed(2);
        
        tabFuncionario.push(funcionario);

        console.log("");
    }

    console.log("Contracheque dos funcionarios");

    for (const func of tabFuncionario) {

        console.log("-----------------------------");

        console.log(`Matricula: ${func.matricula}`);
        console.log(`Nome: ${func.nome}`);
        console.log(`Salario bruto: ${func.salBruto}`);
        console.log(`Deducao INSS: ${func.inss}`);
        console.log(`Salario liquido ${func.salLiquido}`);
        
    }

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

// ---------------- questao 22 ------------------- 

function questao22() {

    function media(arr) {

        let soma = 0;

        for (let i = 0; i < arr.length; i++) 
            soma += arr[i];

        return (soma/arr.length).toFixed(2);
    }

    function maior(arr) {

        return Math.max(...arr);
    }

    function percentual(arr) {

        let cont = 0;

        for (let i = 0; i < arr.length; i++) {
            
            if(arr[i] <= 350)
                cont += 1;
            
        }

        return ((cont * 100)/arr.length).toFixed(2);
    }

    let x = true;

    let sal = [];
    let filhos = [];

    while(x) {

        let salario = parseFloat(prompt("Digite o valor do salario "));
        let qtdFilho = parseInt(prompt("Quantos filhos tem? "));

        sal.push(salario);
        filhos.push(qtdFilho);

        let op = prompt("para adicionar mais digite 'S' ").toUpperCase();

        if(op !== 'S')
            x = false;
    }

    console.log(`A media salarial da populacao e ${media(sal)}`);
    console.log(`A media de filhos da populacao e ${media(filhos)}`);
    console.log(`O maior salario e ${maior(sal)}`);
    console.log(`${percentual(sal)}% de pessoas com salario ate R$ 350,00 `);

}

//questao22();

// ---------------- questao 23 ------------------- 

function questao23() {

    let tam = parseInt(prompt("Digite o tamanho da matriz identidade entre (1 e 7) "));

    if(tam < 1 || tam > 7)
        console.log("Numero invalido");
    else {

            let ident = new Array(tam);

            for (let i = 0; i < ident.length; i++)
                ident[i] = new Array(tam);

            for (let i = 0; i < tam; i++) {
                
                for (let j = 0; j < tam; j++) {
                    
                    if(i === j)
                        ident[i][j] = 1;
                    else
                        ident[i][j] = 0;
                    
                }

            }

            console.log("A matriz identidade e ");
            console.table(ident);
    }

}

//questao23();

// ---------------- questao 24 ------------------- 

function questao24() {

    let lin = parseInt(prompt("Digite o numero de linhas da matriz entre (1 e 6) "));
    let col = parseInt(prompt("Digite o numero de colunas da matriz entre (1 e 8) "));

    if((lin < 1 || col < 1) || (lin > 6 || col > 8))
        console.log("Numero invalido");
    else {

            let m = new Array(lin);

            let arr = [];

            for (let i = 0; i < m.length; i++)
                m[i] = new Array(col);

            for (let i = 0; i < m.length; i++) {
        
                for (let j = 0; j < m[0].length; j++) 
                    m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
                
            }

            for (let i = 0; i < m.length; i++) {

                arr.push(0);
            
                for (let j = 0; j < m[0].length; j++) {
                    
                    if(m[i][j] < 0)
                        arr[i] += 1;
                    
                }
                
            }

            console.log("A matriz e ")
            console.table(m);

            console.log("");
            console.log("Quantidade de numero negativos em cada linha da matriz ");
            console.log(arr);

    }

}

//questao24();

// ---------------- questao 25 ------------------- 

function questao25() {

    let arr = [];

    let m = new Array(15);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(20);

    // questao pede numero reais entao considera numeros com casa decimais ou inteiros positivos e negativos
    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseFloat(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }
    
    for (let j = 0; j < m[0].length; j++) {

        let soma = 0;
        
        for (let i = 0; i < m.length; i++)
            soma += m[i][j];

        arr.push(soma);
        
    }

    console.log("A matriz e ");
    console.log("");
    console.table(m);

    console.log("");
    for (let i = 0; i < arr.length; i++)
        console.log(`a soma da coluna ${i + 1} e ${arr[i]}`);

}

//questao25();

// ---------------- questao 26 ------------------- 

function questao26() {

    function multiMxN(m,n) {

        let p = new Array(m.length);

            for (let i = 0; i < p.length; i++)
                p[i] = new Array(n[0].length);

        for (let i = 0; i < p.length; i++) {
            
            for (let j = 0; j < p[0].length; j++) {
                
                p[i][j] = 0;

            }
            
        }

        for (let i = 0; i < m.length; i++) {
            
            for (let j = 0; j < n[0].length; j++) {
                
                for (let k = 0; k < m[0].length; k++) {
                    
                    p[i][j] = p[i][j] +  (m[i][k] * n[k][j]);
                    
                }
                
            }
            
        }

        return p;
    }

    let linM = parseInt(prompt("Digite o numero de linhas da matriz M (1 e 3) "));
    let colM = parseInt(prompt("Digite o numero de colunas da matriz M (1 e 5) "));

    if((linM < 1 || colM < 1) || (linM > 3 || colM > 5))
        console.log("Numero invalido");
    else {

        let linN = parseInt(prompt("Digite o numero de linhas da matriz N (1 e 5) "));
        let colN = parseInt(prompt("Digite o numero de colunas da matriz N (1 e 3) "));

        if((linN < 1 || colN < 1) || (linN > 5 || colN > 3))
            console.log("Numero invalido");
        else if(colM !== linN)
            console.log("Matriz invalida numero de colunas da primeira matriz precisa ser igual o numero de linhas da segunda matriz");
        else {

                let m = new Array(linM);

                for (let i = 0; i < m.length; i++)
                    m[i] = new Array(colM);

                console.log("Matriz M");

                for (let i = 0; i < m.length; i++) {
        
                    for (let j = 0; j < m[0].length; j++) 
                        m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
                    
                }

                let n = new Array(linN);

                for (let i = 0; i < n.length; i++)
                    n[i] = new Array(colN);

                console.log("Matriz N");

                for (let i = 0; i < n.length; i++) {
        
                    for (let j = 0; j < n[0].length; j++) 
                        n[i][j] = parseInt(prompt(`Digite o n[${i + 1}][${j + 1}] da matriz `));
                    
                }

                console.log("O produto das matrizes e ");
                console.table(multiMxN(m,n));

        }

    }
    
}

//questao26();

// ---------------- questao 27 ------------------- 

function questao27() {

    let arr = [];

    let m = new Array(6);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(6);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    let num = parseInt(prompt("Digitei um valor par multiplicar com a matriz "));

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            arr.push(m[i][j] * num);
        
    }

    console.log(`O numero ${num} vezes cada elemento da matriz da`);
    console.log(arr);
}

//questao27();

// ---------------- questao 28 ------------------- 

function questao28() {

    let somaDpCima = 0;
    let somaDpbaixo = 0;

    let m = new Array(10);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(10);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) {
            
            if(j > i)
                somaDpCima += m[i][j];
            else if(j < i)
                somaDpbaixo += m[i][j];
            
        }
        
    }
console.table(m);
    console.log(`A soma dos elementos acima da diagonal principal e ${somaDpCima}`);
    console.log(`A soma dos elementos acima da diagonal principal e ${somaDpbaixo}`);

}

//questao28();

// ---------------- questao 29 ------------------- 

function questao29() {

    function soml4(m) {

        let somL4 = 0;

        for (let i = 0; i < m[0].length; i++) 
            somL4 += m[3][i];

        return somL4;

    }

    function somc2(m) {

        let somC2 = 0;

        for (let i = 0; i < m.length; i++) 
            somC2 += m[i][1];

        return somC2;

    }

    function somdp(m) {

        let somDp = 0;

        for (let i = 0; i < m.length; i++) {
            
            for (let j = 0; j < m[0].length; j++) {
                
                if(i === j)
                    somDp += m[i][j];
                
            }
            
        }

        return somDp;
    }

    function somatotal(m) {

        let somTotal = 0;

        for (let i = 0; i < m.length; i++) {
            
            for (let j = 0; j < m[0].length; j++) {
                
                somTotal += m[i][j];
                
            }
            
        }

        return somTotal;

    }

    let m = new Array(5);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(5);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    console.log("A Matriz e ")
    console.table(m);

    console.log(`A soma da linha 4 da matriz e ${soml4(m)}`);
    console.log(`A soma da coluna 2 da matriz e ${somc2(m)}`);
    console.log(`A soma da diagonal principal e ${somdp(m)}`);
    console.log(`A soma da matriz e ${somatotal(m)}`);
}

//questao29();

// ---------------- questao 30 ------------------- 

function questao30() {

    let sl = [];
    let sc = [];

    let m = new Array(5);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(5);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    for (let i = 0; i < m.length; i++) {

        let somaL = 0;
        let somaC = 0;
        
        for (let j = 0; j < m[0].length; j++) {
            
            somaL += m[i][j];
            somaC += m[j][i];
            
        }

        sl.push(somaL);
        sc.push(somaC);
        
    }

    console.log("A matriz m");
    console.table(m);

    console.log(`A soma das linhas da Matriz M e [${sl}]`);
    console.log(`A soma das colunas da Matriz M e [${sc}]`);

}

//questao30();

// ---------------- questao 31 ------------------- 

function questao31() {

    let cont = 0;

    let num = parseInt(prompt("Digite um valor para procurar na matriz "));

    let m = new Array(30);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(30);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) {
            
            if(num === m[i][j])
                cont += 1;
        }
    }

    let calTamMatrizNova = Math.sqrt(Math.pow(m.length,2) - cont);

    let tamMatrizNova = Math.floor(Math.sqrt(Math.pow(m.length,2) - cont));

    let linColMatrix = tamMatrizNova < calTamMatrizNova ? (tamMatrizNova + 1) : tamMatrizNova;

    let n = new Array(linColMatrix);

    for (let i = 0; i < n.length; i++)
        n[i] = new Array(linColMatrix);

    let k = 0;
    let l = 0;

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) {
            
            if(num !== m[i][j]) {

                n[k][l] = m[i][j];

                l++
             
                if(linColMatrix === l) {

                    k += 1;
                    l = 0;

                }

            }
            
        }
    }

    console.log("A matriz nova sem o valor digitado e");
    console.table(n);

}

//questao31();

// ---------------- questao 32 ------------------- 

function questao32() {

    let m = new Array(12);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(13);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    for (let i = 0; i < m.length; i++) {

        maior = Math.max(...m[i]);
       
        for (let j = 0; j < m[0].length; j++) {
           
            m[i][j] = parseFloat((m[i][j]/maior).toFixed(2));
            
        }
        
    }

    console.table(m);

}

//questao32();

// ---------------- questao 33 ------------------- 

function questao33() {

    let soma = 0;
    let media;

    let m = new Array(3);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(3);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    for (let i = (m.length - 1); i >= 0; i--) {
            
            soma += m[i][(m.length - 1) - i];
            
    }  

    media = soma/3;

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) {

            if(i === j)
                m[i][j] = parseFloat((media * m[i][j]).toFixed(2));

        }

    }

    console.table(m);

}

//questao33();

// ---------------- questao 34 ------------------- 

function questao34() {

    let dpElemento;

    let m = new Array(50);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(50);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseFloat(prompt(`Digite o m[${i + 1}][${j + 1}] da matriz `));
        
    }

    for (let i = 0; i < m.length; i++) {

        dpElemento = m[i][i];
       
        for (let j = 0; j < m[0].length; j++) {
           
            m[i][j] = parseFloat((dpElemento * m[i][j]).toFixed(2));
            
        }
        
    }

    console.table(m);

}

//questao34();

// ---------------- questao 35 ------------------- 

function questao35() {

    let x = true;

    let cont = 0;
    let i = 0;
    let j = 0;

    let par = []
    let impar = []

    while(x) {

        let num = parseInt(prompt("Digite um numero "));

        if(num % 2 === 0) {

            par.push(num);
            i++;
        }
        else if(num % 2 > 0){

            impar.push(num);
            j++

        }

        cont++;

        if(cont >= 30)
            x = false;
        else if(par.length > 4 || impar.length > 4)
            x = false;

    }

    console.log(`Os valores pares sao  ${par}`);
    console.log(`Os valores impares sao  ${impar}`);

}

//questao35();

// ---------------- questao 36 ------------------- 

function questao36() {

    let gab = [];

    let jogadores = 0;

    for (let i = 0; i < 13; i++)
        gab.push(parseInt(prompt(`Digite o ${i + 1} valor do gabarito `)));

    while(jogadores < 100) {

        let numAposta = parseInt(prompt(`Digite o numero do cartao de aposta `));

        let gabJog = [];

        for (let i = 0; i < 13; i++)
            gabJog.push(parseInt(prompt(`Digite o ${i + 1} valor do jogo `)));

        let cont = 0;

        for (let i = 0; i < 13; i++) {
           
            for (let j = 0; j < 13; j++) {
                
                if(gabJog[i] === gab[j])
                    cont++;

            }
            
        }

        if(cont >= 13 )
            console.log("Parabens tu foi o ganhador");

        console.log(`O numero do cartao de aposta e ${numAposta}`);
        console.log(`O numero de acertos foi ${cont}`);

        jogadores++;

    }


}

//questao36();

// ---------------- questao 37 ------------------- 

function questao37() {

    let g = new Array(20); 

    let cont;
    let valor;

    for (let i = 0; i < g.length; i++)
       g[i] = prompt(`Digite a letra da questao numero ${i + 1} do gabarito `).toUpperCase();

    for (let i = 0; i < 50; i++) {

        cont = 0;
        
        for (let j = 0; j < g.length; j++) {

            valor = (prompt(`Digite a letra da questao numero ${j + 1} do aluno ${i + 1} `).toUpperCase());

            if(g[j] === valor)
                cont++

        }

        if(cont >= 12)
            console.log(`Aluno ${i + 1} foi aprovado`);
        else
            console.log(`Aluno ${i + 1} foi reprovado`);
    }

}

//squestao37();

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

// ---------------- questao 39 -------------------

function questao39() {

    let arr = [];
    let positivo = [];

    for (let i = 0; i < 20; i++) {
       
        arr.push(parseInt(prompt("Digite um numero ")));

        if(arr[i] > 0) 
            positivo.push(arr[i]);
        
    }

    console.log("Vetor original");
    console.log(arr);
    console.log("Vetor sem numero negativos e nulos");
    console.log(positivo);

}

//questao39();

// ---------------- questao 40 -------------------

function questao40() {

    let resultado = new Array(5);

    for (let i = 0; i < resultado.length; i++) 
        resultado[i] = parseInt(prompt(`Digite o ${i + 1}° numero do resultado da loteria `));

    let m = new Array(50);

    for (let i = 0; i < m.length; i++)
        m[i] = new Array(5);

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) 
            m[i][j] = parseInt(prompt(`Digite o ${j + 1} numero da aposta do ${i + 1}° jogador `));
        
    }

    let cont = 0;

    for (let i = 0; i < m.length; i++) {
        
        for (let j = 0; j < m[0].length; j++) {
            
            for (let k = 0; k < resultado.length; k++) {
                
                if(m[i][j] === resultado[k])
                    cont += 1;
            }
            
        }

        if(cont === 5)
            console.log(`o jogar numero ${i + 1} foi um GANHADOR`);

        cont = 0;
        
    }

}

//questao40();

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

// ---------------- questao 42 -------------------

function questao42() {

    function novoOb(ob) {

        let newoB = {};

        propArray(ob);

        function propArray(ob) {
             
            for (let propriedade in ob) {
                
                if(Array.isArray(ob[propriedade]))
                    newoB[propriedade] = ob[propriedade];
                  
            }

        }
        
        return  ob;
        
    }
        
    const dados = {

        nome: 'wrs',
        serie: [1,5,6],
        idade: 20,
        sexo: 'maosma',
        filme: [3,4],
        ododo: 'dfdf'

    }
        
    console.log(novoOb(dados));

}

//questao42();

// ---------------- questao 43 -------------------

function questao43() {

    function combinaProp(ob1,ob2) {

        let newOb = {};

        newOb = ob2;

        for (let prop in ob1) {

            let cont = 0;

            for (let prop2 in ob2) {

                if(prop2 === prop)
                    cont++;
            }

            if(cont === 0)
                ob2[prop] = ob1[prop];

        }

        return newOb;

    }

    let ob1 = {

        nome: 'ana',
        idade: 75,
        profissao: 'engenheiro'
    }

    let ob2 = {

        nome: 'rick',
        cpf: '01247895235',
        idade: 20,
        cep: '51350610'

    }

    console.log(combinaProp(ob1,ob2))

}

//questao43();

// ---------------- questao 44 -------------------

function questao44() {

    function verificarPropriedades(objeto) {

        let i =0;

        for (let propriedade in objeto) {

            if(typeof(objeto[propriedade]) === 'string')
               i++
                
        }

        console.log(`Existe ${i} propriedades string no objeto`);

    }
        
    const pessoa = {

        nome: 'Joao',
        idade: 30,
        profissao: 'Engenheiro'

    };
    
    verificarPropriedades(pessoa);

}

//questao44();

// ---------------- questao 45 -------------------

function questao45() {

    let arr = ['bola','casa','gato','bola','aviao','chocolate','gato','bola','carro','bingo','carro','casa','bola'];

    let ob = {};

    let i = 0;

    while(i < arr.length) {
    
        let cont = 0;

        let temp = arr[i];
    
        const arraySemDuplicados = arr.filter((x, indice, self) => {

            if(x === arr[i])
                cont++;
        
            if(/*self.indexOf(x) === indice &&*/ x !== arr[i])
                return self.indexOf(x);

        });

        arr = arraySemDuplicados;
        
        ob[temp] = cont;

    }

    console.log(ob);

}

//questao45();

// ---------------- questao 46 -------------------

function questao46() {

    function totalVendas(arr) {

        let newOb = [];

        let i = 0;

        while(i < arr.length) {

            let ob = arr[i];
            let vendendo = '';

            for (let j = i + 1; j < arr.length; j++) {
                
                if(ob.vendedor === arr[j].vendedor && arr[j] !== '') {

                    ob.venda += arr[j].venda;
                    vendendo = ob.vendedor
                    arr[j].vendedor = '';
                }

            }

            if (ob.vendedor !== '')
                newOb.push(ob);

            i++;

        }

        return newOb;

    }

    let arr = [{vendedor: 'jose', venda: 50.00}, {vendedor: 'ana', venda: 62.30}, {vendedor: 'jose', venda: 28.50}, {vendedor: 'rick', venda: 120.90}, {vendedor: 'ana', venda: 50.00}, {vendedor: 'jose', venda: 120.90}, {vendedor: 'maria', venda: 12.90}];

    console.log(totalVendas(arr));

}

//questao46();

// ---------------- questao 47 -------------------

function questao47() {

    function upCase(str) {

        return str.toUpperCase();
    }

    function soma10(n) {

        return n + 10;
    }

    function troca(n) {

        return n ? false : true;
    }

    function divideArray2(arr) {

        for (let i = 0; i < arr.length; i++)
            arr[i] = (arr[i] / 2);

        return arr;

    }

    function objeto(ob) {

        for (const prop in ob) {
        
            if(typeof(ob[prop]) === 'string')
                ob[prop] = upCase(ob[prop]);
       }

        return ob;

    }

    function aplicaFunc(ob) {

        for (const prop in ob) {
            
            if(typeof(ob[prop]) === 'string') 
                ob[prop] = upCase(ob[prop]);
            else if(typeof(ob[prop]) === 'number') 
                ob[prop] = soma10(ob[prop]);
            else if(typeof(ob[prop]) === 'boolean') 
                ob[prop] = troca(ob[prop]);
            else if(Array.isArray(ob[prop]))
                ob[prop] = divideArray2(ob[prop]);
            else if (typeof(ob[prop]) === 'object')
                ob[prop] = objeto(ob[prop]);

        
        }

        return ob;

    }

    let ob = {

        nome: 'jose',
        idade: 15,
        estuda: true,
        notas: [1,2,3],
        end: {
            cep: '12345620',
            complemento: 'avenida aaaa'
        }

    }

    console.log(aplicaFunc(ob))

}

//questao47();

// ---------------- questao 48 -------------------

function questao48() {

    function combinaOb(ob1,ob2) {

        let newOb = ob1;

        for (const prop in ob2) {
                
            if(ob1.hasOwnProperty(prop) === false)
                newOb[prop] = ob2[prop];
            else 
                newOb[prop] += ob2[prop];

        }

        return newOb;
    }

    let ob1 = {

        copo: 4,
        bola: 40,
        boneco: 81,
        faca: 7

    }

    let ob2 = {

        faca: 7,
        copocadeira: 4,
        escova: 52,
        bola: 40,
        copo: 23
        
    }

    console.log(combinaOb(ob1,ob2));


}

//questao48();

// ---------------- questao 49 -------------------

// ---------------- questao 50 -------------------