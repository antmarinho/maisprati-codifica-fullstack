import React from 'react'
import axios from 'axios'

const GetUser = () => {

    function getUsuario() {

        axios.get('https://reqres.in/api/users/2')
             .then(response => {
                console.log('dados ' , response.data)
                alert('usuario recuperado ' + JSON.stringify(response.data))
             })
             .catch(error => {
                console.log('erro ao recuperar', error)
             })

    }

  return (
    <button onClick={getUsuario}>recuperar dados</button>
  )
}

export default GetUser