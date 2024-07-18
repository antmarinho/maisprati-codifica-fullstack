import React, { createContext } from 'react'

export const myContext = createContext()

export const MyProvider = (props) => {

    return (
        <myContext.Provider value = {{name: 'joao'}}>
            {props.children}
        </myContext.Provider>
      )

}
