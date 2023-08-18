import React from 'react'

const Input = (props) => {
  return (
    <div className='input mb-30'>
      <label htmlFor={props.ifor}>{props.label}</label>
      <input type="text" placeholder={props.placeholder} name={props.iname} id={props.iid}/>
    </div>
  )
}

export default Input
