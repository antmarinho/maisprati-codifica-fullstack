import React from 'react'
import { useState } from 'react'

const Mirror = () => {

    const [text, setText] = useState('')

  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>vc digitou {text}</p>
    </div>
  )
}

export default Mirror