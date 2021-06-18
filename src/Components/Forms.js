import React,{useState} from 'react'

export const Forms = () => {

    const[name,setName] = useState("");
    const[value,setValue] = useState("");
    const[check,setCheck] = useState(false);

    function getFormData(e){
        e.preventDefault();
        console.log(name,value,check);
    }
    return (
        <div>
            <h1>Forms</h1>
            <br />
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <br />
                <br />
                <select onChange={(e) => setValue(e.target.value)}>
                    <option>Select Option</option>
                    <option>EndGame</option>
                    <option>Swashank Redemption</option>
                    <option>DeathNote</option>
                </select>
                <br />
                <br />
                <input type="checkbox" onChange={(e) => setCheck(e.target.checked)}/> <span>Accept Terms and Conditions</span>
                <br />
                <br />
                <button type="submit">Submit</button>

            </form>
            
        </div>
    )
}
