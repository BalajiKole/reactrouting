import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router,Switch,NavLink  } from 'react-router-dom'
import Home from './component/Home';
import Users from './component/Users';
import Contact from './component/Contact';
import Notfound from './component/Notfound';
import List from './component/List';
function App() {
  return (
/*     <div className="App">
      <header className="App-header"> */
        <Router>
          <div style={{padding:5}}>
            <ul className='nav nav-tabs'>
              <li>
                {/* <Link exact to="/">Home</Link> */}
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                {/* <Link to="/users">Users</Link> */}
                <NavLink activeClassName="active" to="/users">Users</NavLink>
              </li>
              <li>
                {/* <Link to="/list">List</Link> */}
                <NavLink activeClassName="active" to="/list">List</NavLink>
              </li>
              <li>
                {/* <Link to="/contact">Contact</Link> */}
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/list/:id" component={List}/>
            <Route path="/contact" component={Contact} />
            <Route  component={Notfound} />
            </Switch>
          </div>
        </Router>
      
  );
}

export default App;
