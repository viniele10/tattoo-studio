import React from 'react'

function Input(props) {
  return (
    <input
    type={props.type}
    {...props}
  />
                
  )
}

export default Input