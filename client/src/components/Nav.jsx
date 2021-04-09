import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Nav = () => {

  const{user}=useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to='/'>JWT-auth</Link>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto">
            {!user?(
              <>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            </>
            ):(
            <li className="nav-item">
              <Link className="nav-link" to="/user">User</Link>
            </li>
            )
          }
          </ul>
        </div>
      </nav>
    )
}

export default Nav
