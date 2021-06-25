import React from "react";
import "./App.scss";
//routing
import { BrowserRouter } from "react-router-dom";
import AdminHeader from './common/AdminHeader/AdminHeader'
import SideBar from './common/SideBar/Sidebar'
import Routes from "./Routes";
const App = () => {
  return (
    <BrowserRouter>
      <AdminHeader/>
      <SideBar/>
    </BrowserRouter>
  );
};

export default App;
