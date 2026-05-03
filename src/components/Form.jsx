import React from 'react'

export default function Form({handleChange,formdata,idx,handleRemove}) {


  return (
     <div>
            <input type="text" placeholder="Name" name="name" value={formdata.name} onChange={(e)=>handleChange(e,idx)}/>
            <input type="text" placeholder="Age" name="age" value={formdata.age} onChange={(e)=>handleChange(e,idx)}/>
            <button type='button' onClick={()=>handleRemove(idx)}>Remove</button>
    </div>
  )
}
