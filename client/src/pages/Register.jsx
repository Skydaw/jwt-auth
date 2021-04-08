import React ,{ useState } from 'react'
import {Redirect} from 'react-router-dom'


const Register = () => {

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[redirect,setRedirect]=useState("")

    const submit=async(e)=>{
        e.preventDefault();
        await fetch('http://localhost:8000/api/user/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username,
                email,
                password
            })
        })
        setRedirect(true)
    
    }
    if(redirect){
    return <Redirect to="/login"/>
    }
    return (
        <div>
            <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <input type="text" className="form-control"required placeholder="Name"id='username-input'value={username}
                onChange={e=>setUsername(e.target.value)}
                />
                <input type="email" className="form-control" required  placeholder="name@example.com"value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                <input type="password" className="form-control" required placeholder="Password"value={password}
                onChange={e=>setPassword(e.target.value)}
                />
            <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>  
        </div>
    )
}

export default Register
