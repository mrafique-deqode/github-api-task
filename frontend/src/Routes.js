import React from "react";
import { Switch, Route } from "react-router-dom";

import View1 from "./components/View1.component";
import View2 from "./components/View2.component";

function Routes() {

  return (
    <Switch>
      <Route exact path={["/", "/view-1"]} component={View1} />
      <Route exact path="/view-2" component={View2} />
    </Switch>
  );
}

export default Routes;
