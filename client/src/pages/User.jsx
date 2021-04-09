import React, {  useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'


const User = () => {

    const{user,setUser}=useContext(UserContext)



    const logout = async()=>{
        await fetch('http://localhost:8000/api/user/logout',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            credentials:'include'
        })
        setUser(null)
    }
    
    let link;
    
    if(!user){
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
        {user?`user : ${user.username} ` :'Log-in to discover new stuff'}
        <br/>
        {user?`email : ${user.email} ` :''}

        <div>{link}</div>
        </div>
    )
}

export default User
