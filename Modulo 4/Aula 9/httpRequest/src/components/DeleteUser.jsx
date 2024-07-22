import axios from 'axios'
import React from 'react'

const DeleteUser = () => {

    function deletar() {

        axios.delete('https://reqres.in/api/users/2')
             .then(response => {
                console.log('usuario deletado', response.status)
                alert('usuario deletado', response.status)
             })
             .catch(error => {
                console.log('erro')
             })
    }

  return (
    <button onClick={deletar}>deletar</button>
  )
}

export default DeleteUser