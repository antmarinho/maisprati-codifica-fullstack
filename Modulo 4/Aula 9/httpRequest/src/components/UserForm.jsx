import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UserForm = () => {

    const [user, setUser] = useState({
        name: '',
        job: ''
      })
    
      const handleChange = (e) => {
    
        const {name, value} = e.target 
    
        setUser({...user, [name]: value})
    
      }
    
      const handleSubmit = async (e) => {
    
        e.preventDefault()
    
        try {
    
            const response = await axios.post('https://reqres.in/api/users', user)
          
            console.log(response)
    
            alert(`id ${response.data.id} nome ${response.data.name}`)
    
        } catch (error) {
          console.log(error)
    
        }
    
      }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>registrar usuario</h1>
      <label>
        Nome:
        <input type="text" name='name' value={user.name} onChange={handleChange}/>
      </label>
      <br />
      <label>
        profissao:
        <input type="text" name='job' value={user.job} onChange={handleChange}/>
      </label>
      <br />
      <button type='submit'>Enviar</button>
    </form>
  </>
  )
}

export default UserForm