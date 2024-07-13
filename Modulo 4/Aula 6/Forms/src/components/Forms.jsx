import React, { useState } from 'react'

const Forms = () =>  {

    const [name, setName] = useState('')

    const handleChange = (e) => {

        setName(e.target.value)

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        alert(`ola ${name}`)
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Forms