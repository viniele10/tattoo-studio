import React from 'react'

function Input(props) {
  return (
    <input
    // className={email !== "" ? "has-val input" : "input"}
    type={props.type}
    {...props}
    // value={email}
    // onChange={(e) => setEmail(e.target.value)}
  />
                
  )
}

export default Input