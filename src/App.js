import './App.css';
import Header from './common/header/Header.js'
//routing
import {BrowserRouter, Switch, Route } from 'react-router-dom'
//Pages component
import Home from './pages/Home.js'
import MyDesk from './pages/MyDesk.js'
import Neighborhood from './pages/Neighborhood.js'
import ProductionFloor from './pages/ProductionFloor.js'
const App=() =>{
  return (
     <>
     <BrowserRouter>
     <Header />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/my-desk" component={MyDesk}/>
            <Route path="/neighborhood" component={Neighborhood}/>
            <Route path="/production-floor" component={ProductionFloor}/>
            
        </Switch>
     </BrowserRouter>
     </>
  );
}

export default App;
