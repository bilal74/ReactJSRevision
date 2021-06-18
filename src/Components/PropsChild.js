import React from 'react'

export const PropsChild = (props) => {
    return (
        <div>
            <h1>Function Props Example</h1>
            {/* <button onClick={()=> props.data()}>Click Me</button> */}

            <button onClick={props.data}>Click Me</button>
        </div>
    )
}
