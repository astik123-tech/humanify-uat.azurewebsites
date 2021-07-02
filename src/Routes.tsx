import React  from "react";
import {Route,Switch } from 'react-router-dom'

import { AdminConfigurations } from "./components/AdminConfigurations/AdminConfigurations";
import { AdminGroups } from "./components/AdminGroups/AdminGroups";
import AdminHome from './components/AdminHome/AdminHome'
import { AdminTenants } from "./components/AdminTenants/AdminTenants";
import { AdminUsers } from "./components/AdminUsers/AdminUsers";
import { AdminZoom } from "./components/AdminZoom/AdminZoom";
import  Nav  from './common/Nav/Nav'
const Routes = ()=>{
   return (
    <Switch>   
        <Route path="/configurations">
            <Nav name="configurations"/>
            <AdminConfigurations/>
        </Route>
        
        <Route path="/groups">
            <Nav name="Groups"/>
            <AdminGroups/>
        </Route>
        <Route path="/tenants">
            <Nav name="Tenants "/>
            <AdminTenants />
        </Route>
        <Route path="/users">
            <Nav name="Users"/>
            <AdminUsers/>
        </Route>
        <Route path="/zoom">
            <Nav name="Zoom"/>
            <AdminZoom />
        </Route>
        <Route path="/" exact={true}> 
            <Nav name="Home"/>
            <AdminHome/>
        </Route>
    </Switch>
   )
}
export default Routes;