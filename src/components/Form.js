import React from 'react'
import Select from './Select'
import Input from './Input'
import Tags from './Tags'
import Range from './Range'

const Form = () => {
  return (
    <div className='form'>
      <div className="container">
        <div className="form-bottom-border">
          <form>
           <Input ifor="job" label="Title" placeholder="Job Title" iname="job" iid="job"/>
           <Select />
           <Input ifor="location" label="Location" placeholder="Add Locaton" iname="location" iid="Location"/>
           <Range />
           <Tags />
         </form>
        </div>
      </div>
    </div>
  )
}

export default Form
