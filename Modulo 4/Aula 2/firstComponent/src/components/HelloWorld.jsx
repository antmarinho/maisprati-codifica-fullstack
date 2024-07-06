import './HelloWorld.css'

const books = ['o hobbit', 'hp', 'narnia']

function HelloWorld() { 

    const chosenBook = Math.random() > 0.5 ? books[0] : books[1]

    return(
        <div>
            <h1>Hello world</h1>
            <p>{chosenBook}</p>
        </div>
    )

}

export default HelloWorld