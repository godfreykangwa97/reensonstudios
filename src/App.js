import React from "react";
import {BrowserRouter as  Switch, Route, useHistory} from "react-router-dom";

import StartAd from "./client/pages/ad";
import Home from "./client/pages/home";
import Works from "./client/pages/works";
import Contact from "./client/pages/contact";
import About from "./client/pages/about";
import Services from "./client/pages/services";
import PackageDiamond from "./client/packages/diamond";
import PackageGold from "./client/packages/gold";
import PackageSilver from "./client/packages/silver";
import PackageBronze from "./client/packages/bronze";



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
        <Route exact={true} path="/packages/diamond"  history={useHistory} component={PackageDiamond}/>
        <Route exact={true} path="/packages/gold"  history={useHistory} component={PackageGold}/>
        <Route exact={true} path="/packages/silver"  history={useHistory} component={PackageSilver}/>
        <Route exact={true} path="/packages/bronze"  history={useHistory} component={PackageBronze}/>
      </Switch>
    </div>
  );
};

export default App;
