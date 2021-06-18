import React,{useState} from 'react'

export const GetValueButton = () => {
    const [data,setData] = useState("Input");
    const [print,setPrint] = useState(false);

    function getData(val) {
        setData(val.target.value);
    }

    return (
        <div>
            <h1>Get Input Value!</h1>
            {print? <h2>{data}</h2> : null}
            <input type="text" onChange={getData}/>
            {/* <button onClick={() => setPrint(true)}>Print Data</button>
            <button onClick={() => setPrint(false)}>Hide Data</button> */}
            
            <button onClick={() => setPrint(!print)}>Show/Hide</button>
        </div>
    )
}
