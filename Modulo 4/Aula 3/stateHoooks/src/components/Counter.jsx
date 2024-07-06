import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <p>Voce clicou {count} vezes</p>
        <button onClick={() => setCount(count  + 1)}>Clique aqui</button>
    </div>
  )
}

export default Counter