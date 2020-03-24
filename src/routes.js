import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import Contact from "./pages/contact/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Lambdatech" component={Home} />
      <Route exact path="/Lambdatech/contact" component={Contact} />
      <Route exact path="/Lambdatech/" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
