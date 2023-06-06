import React, { Fragment } from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import Product from './components/Product';
import Buy from "./components/Buy";
import Pay from "./components/Pay";
import PaymentPage from './components/PaymentPage';
import Homepage from './components/Homepage';
import Nav from "./components/Nav";




function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/paymentpage" element={<PaymentPage/>} />
        <Route path="/pay" element={<Pay/>} />
      </Routes>
    </Fragment>

  );
}

export default App;
