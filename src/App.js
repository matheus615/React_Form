import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import Formlayout from "./Formlayout";
import Paylayout from "./Paylayout";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Formlayout}></Route>
        <Route exact path="/pay" component={Paylayout}></Route>
      </Switch>
    );
  }
}

export default App;
