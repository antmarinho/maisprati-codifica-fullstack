import React, { useEffect, useState } from 'react'


const LifeCycle = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        const timerId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])

  return (
    <h1>{count}</h1>
  )

}

export default LifeCycle