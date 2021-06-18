import React,{useState} from 'react'

export const State = () => {
    const [data,setData] = useState("Bilal");
    
    function updateValue(){
        setData("Sourav");
    }
    console.log("one");
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateValue}>Update</button>
        </div>
    )
}


