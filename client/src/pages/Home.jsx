import React, { useContext } from 'react'

import { UserContext } from '../UserContext'

const Home = () => {

    const{user}=useContext(UserContext)

    return (
        <div>
            
            { user ? (<h1>Welcome back <span>{user.username}</span></h1>):(<h1>welcome on our site please login for discover stuff</h1>)}
        </div>
    )
}

export default Home
