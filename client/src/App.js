import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Nav from './components/Nav';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';


function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
      <Nav/>
    <main className="form-signin text-center">
      <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/user" component={User}/>
      </Switch>
      
      </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
