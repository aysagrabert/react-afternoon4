import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import About from "./About/About";
import ClassList from "./ClassList/ClassList";
import Student from "./Student/Student";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={ClassList} path="/classlist/:class" />
    <Route component={Student} path="/student/:id" />
  </Switch>
);