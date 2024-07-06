import React from 'react'

const Props = ({props}) => {
  return (
    <div>
        <p>{props.author}</p>
        <p>{props.book}</p>
    </div>
  )
}

export default Props