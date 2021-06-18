import React,{useState} from 'react'

export const PropsOnClick = (props) => {
    const [name,setName] = useState(props.name);
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setName("Prathamesh")}>Update Name</button>
        </div>
    )
}
