import React from 'react'
import {PropsChild} from './PropsChild';

export const PropsParent = () => {
    function getData(){
        alert("Hello Sourav");
    }
    return (
        <div>
            <PropsChild data={getData}/>
        </div>
    )
}
