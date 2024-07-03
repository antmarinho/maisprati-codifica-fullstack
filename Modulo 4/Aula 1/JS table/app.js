const conteudos = [

    [
        "grecia me lembra a filosofia",
        "japao me lembra a goku",
        "coreia do sul me lembra a kpop",

    ],

    [

        "alvorada me lembra a minha vozinha",
        "italia me lembra a verao",
        "florianopolis me lembra praia"

    ],

    [

        "tores me lembra a balonismos",
        "portugal me lembra a nazare",
        "rio de janeiro me lembra minha sogra"

    ]

]

const btnTab1 = document.getElementById("btn-tab1")
const btnTab2 = document.getElementById("btn-tab2")
const btnTab3 = document.getElementById("btn-tab3")

const content = document.getElementById("content")

function displayContent(items) {

    let listaConteudo = ""

    for(const item of items) 
        listaConteudo += `<li>${item}</li>`
    
    const lista = document.createElement('ul')

    content.innerHTML = listaConteudo
    content.append(lista)

}

function activeBtn(btn) {

    btnTab1.className = ""
    btnTab2.className = ""
    btnTab3.className = ""

    btn.className = 'active'

}

function handleClick(e) {

    const btnId = e.target.id

    activeBtn(e.target)

    if(btnId === 'btn-tab1') {
        displayContent(conteudos[0])
    } else if(btnId === 'btn-tab2') {
        displayContent(conteudos[1])
    } else {
        displayContent(conteudos[2])
    }

}

displayContent(conteudos[0])

btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)