import React,{useState} from 'react'

export const Ternary = () => {
    const[loggedIn,setLoggedIn] = useState(3);
    return (
        <div>
            {/* {loggedIn? <h1>Welcome User</h1> : <h1>Guest</h1>} */}
            {loggedIn==1? <h1>Welcome User - 1</h1> :
            loggedIn==2? <h1>Welcome User - 2</h1>:
            <h1>Guest</h1>}
            
        </div>
    )
}
