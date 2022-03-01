import React from "react";
import {BrowserRouter as  Switch, Route, useHistory} from "react-router-dom";

import StartAd from "./client/pages/ad";
import Home from "./client/pages/home";
import Works from "./client/pages/works";
import Contact from "./client/pages/contact";
import About from "./client/pages/about";
import Services from "./client/pages/services";



const App = () => {
  return (
    <div className="rs">
      <Switch>
        <Route exact={true} path="/" component={StartAd}/>
        <Route exact={true} path="/home" history={useHistory} component={Home}/>
        <Route exact={true} path="/works" history={useHistory} component={Works}/>
        <Route exact={true} path="/contact"  history={useHistory} component={Contact}/>
        <Route exact={true} path="/services"  history={useHistory} component={Services}/>
        <Route exact={true} path="/about"  history={useHistory} component={About}/>
      </Switch>
    </div>
  );
};

export default App;
