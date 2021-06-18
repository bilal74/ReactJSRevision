import React from 'react'

export const ChildProps = (props) => {
    return (
        <div>
            <h1>Name : {props.name}</h1>
            {/* <h3>Gender : {props.gender}</h3>
            <h4>Address : {props.other.address}</h4>
            <h4>Mob : {props.other.mob}</h4> */}
        </div>
    )
}
