import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/comp1'>Comp1</Link></li>
            <li><Link to='/comp2'>Comp2</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation