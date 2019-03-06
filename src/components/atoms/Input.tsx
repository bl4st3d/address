import * as React from 'react'

export const Input = props => {
  return(
    <input type="text" 
      onChange={props.handleChange}
      value={props.value}
    />
  )
}

export default Input;