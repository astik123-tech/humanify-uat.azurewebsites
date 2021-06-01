import React from 'react';
import './App.css';
import Header from './common/header/Header'
//routing
import {BrowserRouter, Switch, Route } from 'react-router-dom'
//Pages component
import Home from './pages/Home'
import MyDesk from './pages/MyDesk'
import Neighborhood from './pages/Neighborhood'
import ProductionFloor from './pages/ProductionFloor'
const App=() =>{
  return (
     <>
     <BrowserRouter>
     <Header />
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/my-desk" component={MyDesk}/>
            <Route path="/neighborhood" component={Neighborhood}/>
            <Route path="/production-floor" component={ProductionFloor}/>
            
        </Switch>
     </BrowserRouter>
     </>
  );
}

export default App;
