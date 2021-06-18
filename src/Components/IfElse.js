import React from 'react'

export const IfElse = () => {
    // var loggedIn = true;
    var loggedIn = false;
    if(loggedIn){
        return (
            <div>
                <h2>User LoggedIn</h2>
            </div>
        )
    }

    else{
        return (
            <div>
                <h2>Guest</h2>
            </div>
        )
    }
    
}
