import React from 'react'
import { useState } from 'react'
const Range = () => {
  const [isDisable,setIsDisable] = useState(false);
  return (
    <>
    <div className='range mb-30'>
      <label>Salary Range</label>
      <div className="salary-range">
        <input type="text" placeholder='From' name='salary-range' disabled={isDisable}/>
        <input type="text" placeholder='To' name='salary-range' disabled={isDisable}/>
      </div>
    </div>
    <div className="range-bottom mb-30">
        <input type="radio" name='salary' id='show' onClick={()=> setIsDisable(false)}/>
        <label htmlFor='show'>Show Salary</label>
        <input type="radio" name='salary' id='hide' onClick={()=> setIsDisable(true)}/>
        <label htmlFor='hide'>Hide Salary</label>
    </div>
    </>
  )
}

export default Range
