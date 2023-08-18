import React from 'react'

const Select = () => {
  return (
    <div className='select mb-30'>
        <label htmlFor="industry">Industry</label>
        <select name="industry" id="industry">
          <option value="">Select Industry</option>
          <option value="industry1">Industry1</option>
          <option value="industry2">Industry2</option>
          <option value="industry3">Industry3</option>
        </select>
    </div>
  )
}

export default Select
