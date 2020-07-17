import React from "react";
import { Switch, Route } from "react-router-dom";
import About from '../components/AboutUs/about';
import Products from '../components/ProductsPage/Products';
import Contact from '../components/Contact/Contact';
// react routing 


function Container(location) {
  return (


    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>


  );
};

export default Container;