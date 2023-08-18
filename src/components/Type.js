import React from 'react'
import Uniong from '../assets/images/Uniong.svg'
import del from '../assets/images/del.svg'


const Type = (props) => {
  return (
    <div className='type'>
      <div className="container">
        <div className="content-box">
          <h2>{props.heading}</h2>
          <div className="ques-holder">
           <input type="text" name={props.tname} placeholder={props.tplaceholder} />
           <button type='button' className='save'>Save</button>
          </div>
          <div className="add">
            <img src={Uniong} alt="Uniong" />
            <p>Add another benefit</p>
          </div>
          <div className='quest'>
            <div className="quest-box">
             <div className="text-box">
               <p><span>{props.no}</span>{props.questtxt}</p>
             </div>
             <div className="img-box">
               <img src={del} alt="del" />
             </div>
          </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Type
