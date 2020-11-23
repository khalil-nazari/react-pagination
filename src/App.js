import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Home from "./Pages/Home"
import Navbar from './Pages/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={()=>(<h1 className="container n404">404</h1>)}/>
      </Switch>
    </Router>
  );
}

export default App;
