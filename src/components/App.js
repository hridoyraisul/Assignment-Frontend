import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import CustomersOrder from "./CustomersOrder";
import Nav from "./Navbar";
import Register from "./Register";
import ManageProduct from "./ManageProduct";
import ProductForm from "./ProductForm";
import ManageOrder from "./ManageOrder";
import Login from "./Login";

function App () {
    const [token, setToken] = useState(localStorage.getItem('token'));
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/your-order" component={CustomersOrder} />
          <Route exact path="/manage-product" component={ManageProduct} />
          <Route exact path="/add-product" component={ProductForm}/>
          <Route exact path="/manage-order" component={ManageOrder}/>
        </Switch>
        <div style={{ bottom: '0'}}><br></br>
          <div class="card bg-dark text-white">
            <div class="card-body text-muted" style={{textAlign: "center"}}>Heart Shop 2021 © Raisul Hridoy {setToken}</div>
          </div>
        </div>
      </div>
    );
}
export default App;
