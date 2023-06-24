import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./compo/Login";
import Header from "./compo/Header";
import React from "react";
import Checkout from "./compo/Checkout";
import Home from "./compo/Home";
import Foot from "./compo/Foot";
import Subtotal from "./compo/Subtotal";
import CheckoutForm from "./compo/CheckoutForm";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Checkout />
      <Subtotal/>
      <Foot />
    </React.Fragment>
  );
};

const HomePage2 = () => {
  return (
    <React.Fragment>
      <Header />

      <Home />
      <Foot />
    </React.Fragment>
  );
};
const checkoutFormC = ()=>{
  return (
    <React.Fragment>
      <Header/>
      <CheckoutForm/>
      <Foot/>
    </React.Fragment>
  )
}
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Home Page Route */}
          <Route path="/login" Component={Login} />
          <Route path="/checkout" Component={HomePage}></Route>
          <Route path="/" Component={HomePage2}></Route>
          <Route path="/checkoutForm" Component={checkoutFormC} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
