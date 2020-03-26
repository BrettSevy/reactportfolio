import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from ".//home/home";
import AboutMe from ".//aboutme/aboutme";
import Portfolio from ".//portfoio/portfolio";
// import Resume from "./resume";
import Contact from ".//contact/contact";



const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        {/* <Route exact path="/resume" component={Resume} /> */}
    </Switch>
)

export default Main;