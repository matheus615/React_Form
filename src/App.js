import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import Formlayout from "./Formlayout";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Formlayout}></Route>
      </Switch>
    );
  }
}

export default App;
