function* myGenerator() {

    let i = 0;

    while(true) {

        yield i++;
    }

}

let generator = myGenerator()
let generatorValue = generator.next()

function* fibonacci() {

    let n1 = 1
    let n2 = 1

    while(true) {

        let current = n2

        n2 = n1

        n1 += current

        yield current
    }

}

let fib = fibonacci()

console.log(fib.next())
console.log(fib.next())
console.log(fib.next())