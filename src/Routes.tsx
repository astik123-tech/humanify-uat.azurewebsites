import React  from "react";
import {Route,Switch } from 'react-router-dom'

//Pages component
// import Home from './components/Home/Home'
// import MyDesk from './components/MyDesk/MyDesk'
// import Neighborhood from './components/Neighborhood/Neighborhood'
// import ProductionFloor from './components/ProductionFloor/ProductionFloor'

import AdminHeader from "./common/AdminHeader/AdminHeader"; 
import { AdminConfigurations } from "./components/AdminConfigurations/AdminConfigurations";
import { AdminGroups } from "./components/AdminGroups/AdminGroups";
import AdminHome from './components/AdminHome/AdminHome'
import { AdminTenants } from "./components/AdminTenants/AdminTenants";
import { AdminUsers } from "./components/AdminUsers/AdminUsers";
import { AdminZoom } from "./components/AdminZoom/AdminZoom";
const Routes = ()=>{
   return (
    <Switch>   
        {/* <Route path='/my-desk' component={MyDesk}/>
        <Route path="/neighborhood" component={Neighborhood}/>
        <Route path="/production-floor" component={ProductionFloor}/>
        <Route path="/" exact={true} component={Home}/> */}
        <Route path="/configurations"  component={AdminConfigurations}/>
        <Route path="/groups"  component={AdminGroups}/>
        <Route path="/tenants"  component={AdminTenants}/>
        <Route path="/users"  component={AdminUsers}/>
        <Route path="/zoom"  component={AdminZoom}/>
        <Route path="/" exact={true} component={AdminHome}/>
    </Switch>
   )
}
export default Routes;