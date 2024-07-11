import React from 'react'
import { useState } from 'react'
import './Navegacao.module.css'

const conteudos = [

    [
        'conteudo 1',
        'conteudo 2',
        'conteudo 3',
    ],

    [
        'conteudo 4',
        'conteudo 5',
        'conteudo 6',
    ],

    [
        'conteudo 7',
        'conteudo 8',
        'conteudo 9',
    ],

]

const Navegacao = () => {

    const [estado, setEstado] = useState(0)

    return (
        <>
            <div>
                <header>
                    <img src="" alt="" />
                    <h1>React Js</h1>
                    <p>Exercicio para treinar useState</p>
                </header>
            </div>
            <div id='abas'>
                <nav>
                    <button onClick={() => setEstado(0)}>teste</button>
                    <button onClick={() => setEstado(1)}>teste1</button>
                    <button onClick={() => setEstado(2)}>teste2</button>
                </nav>
            </div>
            <div id='conteudo'>
                <ul>
                    {conteudos[estado].map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navegacao