import React  from "react";
import {Route,Switch } from 'react-router-dom'

//Pages component
import Home from './components/Home/Home'
import MyDesk from './components/MyDesk/MyDesk'
import Neighborhood from './components/Neighborhood/Neighborhood'
import ProductionFloor from './components/ProductionFloor/ProductionFloor'

const Routes = ()=>{
   return (
    <Switch>   
        <Route path='/my-desk' component={MyDesk}/>
        <Route path="/neighborhood" component={Neighborhood}/>
        <Route path="/production-floor" component={ProductionFloor}/>
        <Route path="/" exact={true} component={Home}/>
    </Switch>
   )
}
export default Routes;