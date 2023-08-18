import React from 'react'
import Union from '../assets/images/Union.svg'
import { useState } from 'react'

const Pills = (props) => {
  const [remove,setRemove] = useState(true);
  return (
    <>
    {remove?
    <div className='pill'>
      <p>{props.txt}</p>
      <img src={Union} alt="Union" onClick={() => setRemove(false)}/>
    </div>:null}
    </>
    
  )
}

export default Pills
