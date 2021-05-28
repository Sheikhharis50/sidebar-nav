import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./utils/StaticData/Routes";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.render}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
