import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/app.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <LandingPage/>}/>
        <Route path="signin" element={ <Login/>}/>
        <Route path="signup" element={ <Register/>}/>
        <Route path="home" element={ <Home/>}/>
        <Route path="products" element={ <Products/>}/>
        <Route path="add-products" element={ <AddProducts/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
