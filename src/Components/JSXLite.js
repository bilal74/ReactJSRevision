import React from 'react'


export const JSXLite = () => {
    return (
        // <div>
            //Normal
            // React.createElement('h1',null,"Rishab")
            // React.createElement('div',null,"Abhinav")
            // {/* tag, id/class, value */}

            // Parent - Child
            React.createElement('div',null,React.createElement('h2',null,"Advance Abhinav"))
        // </div>
    )
}
