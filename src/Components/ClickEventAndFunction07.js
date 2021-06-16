import React from 'react'

export const ClickEventAndFunction07 = () => {
    let name1="Bilal";
    function show(){
        name1="Rishab";
        // alert("Hello");
        alert(name1);
    }
    return (
        <div>
            <h1>{name1}</h1>
            {/* <button onClick={show()}>Click Me</button> */}
            <button onClick={show}>Click Me</button>
        </div>
    )
}
