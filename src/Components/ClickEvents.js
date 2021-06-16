import React from 'react'

export const ClickEvents = () => {
    let name = "Rishab";
    return (
        <div>
            {/* <h1>Prathamesh</h1> */}
            <h1>{name}</h1>
            {/* <button onClick={alert("Sourav")}>Click Me</button> */}
            {/* <button onClick={() => alert("Sourav")}>Click Me</button> */}
            <button onClick={() => alert(name)}>Click Me</button>
        </div>
    )
}
