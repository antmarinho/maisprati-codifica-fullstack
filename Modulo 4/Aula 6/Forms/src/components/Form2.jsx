import React from 'react'
import { useState } from 'react'

const Form2 = () => {

    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (e) => {

        const {name, value} = e.target

        setAddress(prevState => ({
            ...prevState, 
            [name]: value
        }))

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if(!address.street || !address.city || !address.postalCode)
            alert('Preencha todos os campos')
        else 
            alert('endereco submetido')
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name='street' onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Cidade:
                <input type="text" name='city' onChange={handleChange}/>
            </label>
            <br/>
            <label>
                CEP:
                <input type="text" name='postalCode' onChange={handleChange}/>
            </label>
            <br/>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form2