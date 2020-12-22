import React from "react"
import {Link,Route, Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";
const Root = () => {

    return <div>
        <strong>Select the following Links for Differnt Pages<br></br></strong>
        <Link to="/">Home     </Link>
        <Link to="/About">About</Link>
        <Switch>
        <Route component = {About} path="/About"></Route>
        <Route component = {Home} path="/"></Route>
        </Switch>
    </div>
};

export default Root;        