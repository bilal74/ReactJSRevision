import React,{useState} from 'react'

export const PropsCounting = () => {
    const [num,setNum] = useState(0);
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={()=> setNum(num-1)}>Decrease</button>
            <button onClick={()=> setNum(num+1)}>Increase</button>
        </div>
    )
}
