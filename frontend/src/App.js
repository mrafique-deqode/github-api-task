import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import View1 from "./components/View1.component";
import View2 from "./components/View2.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/view-1"} className="navbar-brand">
            Github APIs
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/view-1"} className="nav-link">
                View 1
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/view-2"} className="nav-link">
                View 2
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/view-1"]} component={View1} />
            <Route exact path="/view-2" component={View2} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
