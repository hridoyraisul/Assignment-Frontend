import React, { Component } from "react";
import Nav from "./Navbar";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";
import CustomersOrder from "./CustomersOrder";
import { Switch, Route, Link } from "react-router-dom";

class Home extends Component {
    render() {
      return (
        <div>
            {/* <Nav /> */}
            <Carousel/>
            <ProductCard/>
        </div>
      );
    }
  }
  export default Home;