import React  from "react";
import {Route,Switch } from 'react-router-dom'

import { AdminConfigurations } from "./components/AdminConfigurations/AdminConfigurations";
import { AdminGroups } from "./components/AdminGroups/AdminGroups";
import AdminHome from './components/AdminHome/AdminHome'
import { AdminTenants } from "./components/AdminTenants/AdminTenants";
import { AdminUsers } from "./components/AdminUsers/AdminUsers";
import { AdminZoom } from "./components/AdminZoom/AdminZoom";
const Routes = ()=>{
   return (
    <Switch>   
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