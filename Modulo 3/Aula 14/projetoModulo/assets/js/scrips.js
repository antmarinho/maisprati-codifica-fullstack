let space1Control = 1
let space2Control = 2
let space3Control = 3

function next() {

    let space1 = document.getElementById('space1')
    let space2 = document.getElementById('space2')
    let space3 = document.getElementById('space3')

    space1Control++
    space2Control++
    space3Control++

    if(space1Control > 3) {
        space1Control = 1
    }
    if(space2Control > 3) {
        space2Control = 1
    }
    if(space3Control > 3) {
        space3Control = 1
    }

    space1.src = 'assets/img/imagem' + space1Control + '.jpg'
    space2.src = 'assets/img/imagem' + space2Control + '.jpg'
    space3.src = 'assets/img/imagem' + space3Control + '.jpg'
}

function back() {

    let space1 = document.getElementById('space1')
    let space2 = document.getElementById('space2')
    let space3 = document.getElementById('space3')

    space1Control--
    space2Control--
    space3Control--

    if(space1Control < 1) {
        space1Control = 3
    }
    if(space2Control < 1) {
        space2Control = 3
    }
    if(space3Control < 1) {
        space3Control = 3
    }

    space1.src = 'assets/img/imagem' + space1Control + '.jpg'
    space2.src = 'assets/img/imagem' + space2Control + '.jpg'
    space3.src = 'assets/img/imagem' + space3Control + '.jpg'
}

