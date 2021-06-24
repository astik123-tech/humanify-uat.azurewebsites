import React from "react";
import "./App.scss";
import Header from "./common/Header/Header/Header";
//routing
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import AdminHeader from './common/AdminHeader/AdminHeader'
import SideBar from './common/SideBar/Sidebar'
const App = () => {
  return (
    <BrowserRouter>
      <AdminHeader/>
      {/* <Header /> */}
      <SideBar/>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
