import React, { useState } from 'react'
import '../Styles/FormStyles.css'

export default function Name()
{
    const[FirstName, setFirstName]=useState("");
    const[LastName,setLastName]=useState("");
    const[error,setError]=useState(false);
    const handleChange=(e)=>
    {
        e.preventDefault()
        if(FirstName.length===0 || LastName===0)
        {
            setError(true)
        }
        if(FirstName && LastName)
        {
            console.log(FirstName,LastName);
        }
    }
    return(
        <div>
            <form onSubmit={handleChange}>
                <div>
                    <input type="text" onChnage={e=>setFirstName(e.target.value)}></input>
                </div>
                {error && FirstName.length===0 ?
                <label>Please enter the FirstName</label> : ""}
                <div>
                    <input type="text" onChange={e=>setLastName(e.target.value)}></input>
                </div>
                {error && LastName.length===0 ?
                <label>Please enter the LastName</label>:""}
                <br></br> <button type='submit'>Submit</button>
            </form>
        </div>
    )
}