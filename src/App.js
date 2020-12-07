import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/chechout">
            <CheckoutForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
