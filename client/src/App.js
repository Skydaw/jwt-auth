import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Nav from './components/Nav';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
import { useState,useMemo, useEffect } from 'react';
import { UserContext } from './UserContext';


function App() {
  useEffect(()=>{

      ( async () => {
        const response = await fetch('http://localhost:8000/api/user',{
          headers:{'Content-Type':'application/json'},
          credentials:'include',
        })
        const content = await response.json()
        
        if(content._id){
          setUser(content)
        }
        
      })()
    
},[])

  const [user,setUser]=useState(null)
  
  const value = useMemo(()=> ({user,setUser}),[user,setUser])


  return (
    <div className="App text-center">
      <BrowserRouter>
      <UserContext.Provider value={value}>

      <Nav/>
    <main className="form-signin text-center">
      <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/user" component={User}/>
      </Switch>
      
      </main>
      </UserContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
