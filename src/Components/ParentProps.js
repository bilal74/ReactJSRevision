import React from 'react'
import {ChildProps} from '../Components/ChildProps';
import {PropsOnClick} from '../Components/PropsOnClick';

export const ParentProps = () => {
    return (
        <div>
            {/* <ChildProps name={"Sourav"}/> */}

            {/* <ChildProps name={"Sourav1"} />
            <ChildProps name={"Sourav2"} />
        <ChildProps name={"Sourav3"} /> */}

        {/* <ChildProps name={"Sourav"} gender={"Male"}/> */}

        {/* <ChildProps name={"Sourav"} gender={"Male"} other={{address:'kolkata', mob: 123}}/> */}
        <PropsOnClick name={"Sourav"}/>
        </div>
    )
}
