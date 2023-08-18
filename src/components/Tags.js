import React from 'react'
import Input from './Input'
import Pills from './Pills'

const Tags = () => {
  return (
    <div className='tag'>
      <Input ifor="tags" label="Tags" placeholder="Add Tag" iname="tags" iid="tags"/>
      <div className="pills">
        <Pills txt="Sales"/>
        <Pills txt="Managment Role"/>
        <Pills txt="Commission"/>
        <Pills txt="Another tag here"/>
        <Pills txt="Sales"/>
        <Pills txt="Managment Role"/>
      </div>
    </div>
  )
}

export default Tags
