import React from 'react'
import axios from 'axios'

const PutUser = () => {

    const userData = {
        name: 'aaaaaa',
        job: 'dfdfdf'
    }

    function updateUser() {

        axios.put('https://reqres.in/api/users/3', userData)
             .then(response => {
                console.log('dados atualizado', response.data)
                alert('usuario atualizado ' + JSON.stringify(response.data))
             })
             .catch(error => {
                console.log('erro')
             })
    }

  return (
    
    <button onClick={updateUser}>atualizar</button>

  )
}

export default PutUser