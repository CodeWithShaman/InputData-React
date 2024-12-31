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
     <div className="searchbox-wrap">
    <input id='inputData' type="text" placeholder="Write something send inside card" onChange={changeValue} />
    <button onClick={dataValue}><span>Send</span> </button>
    <br />
    </div>
    <div className='center'>
    <h1 className='box'>{get}</h1>
    </div>
    {/* <input id='inputData' type="text" onChange={changeValue} /> */}
    {/* <button onClick={dataValue}>Click Here</button> */}
    </div>
  )
}

export default Change
