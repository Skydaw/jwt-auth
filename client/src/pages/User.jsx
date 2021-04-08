import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const User = () => {


    const[username,setUsername] = useState('')
    const[email,setEmail]=useState('')

    useEffect(()=>{
        ( async () => {
            const response = await fetch('http://localhost:8000/api/user',{
                headers:{'Content-Type':'application/json'},
                credentials:'include',
                })
                const content = await response.json()
                setUsername(content.username)
                setEmail(content.email)
                
            })()
    },[])

    const logout = async()=>{
        await fetch('http://localhost:8000/api/user/logout',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            credentials:'include'
        })
        setUsername('')
    }
    
    let link;
    
    if(!username){
        link=(
            <Link to="/login"classname="btn btn-success">Login</Link>
        )
    }else{
        link=(
            <button onClick={logout} className="btn btn-danger">Logout</button>
        )
    }
    return (
        <div>
        {username?`user : ${username} ` :'Log-in to discover new stuff'}
        <br/>
        {username?`Email : ${email}` :''}
        <br/>
        <div>{link}</div>
        </div>
    )
}

export default User
