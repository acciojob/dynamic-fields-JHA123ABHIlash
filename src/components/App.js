
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  
  // const [input,setInput]=useState([]);
  // console.log(input);

   const [formdata,setFormdata]=useState([
    {
      name:"",
      age:""
    }
   ]);

  function handleChange(e, index) {
  const { name, value } = e.target;

  setFormdata((prev) => {
    const updated = [...prev];
    updated[index][name] = value;
    return updated;
  });
}



  function handleSubmit(e){
    e.preventDefault();
    console.log(formdata);
  }

  function handleAddrow(e){
    setFormdata(prev=>[...prev,{
      name:"",
      age:""
    }])
  }

  function handleRemove(id){
    const newdata=formdata.filter((el,idx)=>id!==idx);
    setFormdata(newdata);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleSubmit}>
         {
          formdata.map((el,idx)=>(
            <Form handleChange={handleChange}  idx={idx} formdata={el} key={idx} handleRemove={handleRemove}/>
          ))
         }
          <button type="button" onClick={handleAddrow}>Add More..</button>
          <button>Submit</button>

        </form>

    </div>
  )
}

export default App
