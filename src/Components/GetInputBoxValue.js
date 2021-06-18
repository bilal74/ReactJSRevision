import React,{useState} from 'react'

export const GetInputBoxValue = () => {

    const [data,setData] = useState("Input");

    function getData(val) {
        // console.log(val.target.value);
        setData(val.target.value);
    }

    return (
        <div>
            <h1>Get Input Value!</h1>
            <h2>{data}</h2>
            <input type="text" onChange={getData}/>
        </div>
    )
}
