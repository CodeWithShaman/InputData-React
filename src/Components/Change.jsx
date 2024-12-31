import React, { useState } from 'react'



function Change() {
    const [name, setName] = useState("inputData");
    const [get, setGet] = useState("");
   
    function changeValue(event) {
        setName(event.target.value);
    }
    function dataValue() {
        setGet(name)
    }
  return (
    <div>
    <div className="formContainer">
    {/* <form action=""> */}
      <fieldset className="fieldInput">
        <input id='inputData' className="form-input" type="text" placeholder="Write something...." onChange={changeValue}/>
        <button onClick={dataValue} type="submit" className="form-submit">Send</button>
      </fieldset>
    {/* </form> */}
  </div>
  <h1 className='box'>{get}</h1>
    </div>
  )
}

export default Change
