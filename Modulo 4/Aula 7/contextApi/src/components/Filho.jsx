import React, { useContext } from 'react'
import { myContext } from './Contexto'

const Filho = () => {

    const context = useContext(myContext)

  return (
    <div>
        meu nome e {context.name}
    </div>
  )
}

export default Filho