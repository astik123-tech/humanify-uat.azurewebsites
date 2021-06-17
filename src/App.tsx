import React from "react";
import "./App.scss";
import Header from "./common/Header/Header/Header";
//routing
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
