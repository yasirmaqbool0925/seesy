import React from 'react'
import del from '../assets/images/del.svg'


const Quest = (props) => {
  return (
    <div className='quest'>
      <div className="quest-box">
        <div className="text-box">
            <p><span>{props.no}.</span>{props.questtxt}</p>
        </div>
        <div className="img-box">
            <img src={del} alt="del" />
        </div>
      </div>
    </div>
  )
}

export default Quest
