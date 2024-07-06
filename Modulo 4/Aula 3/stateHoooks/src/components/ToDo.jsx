import React from 'react'
import { useState } from 'react'

const ToDo = () => {

    const [toDo, setToDo] = useState([])
    const [input, setInput] = useState('')

    const addToDo = () => {

        setToDo([... toDo, input])
        setInput('')

    }

  return (
    <div>
        <input  type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={addToDo}>Adicionar Tarefa</button>
        <ul>
            {toDo.map((to,index) => (
                <li key={index}>{to}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDo