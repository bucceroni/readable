import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import ReactPage from "./containers/ReactPage/ReactPage";
import ReduxPage from "./containers/ReduxPage/ReduxPage";
import UdacityPage from "./containers/UdacityPage/UdacityPage";
import Template from "../src/components/Template/Template";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Template>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/react" component={ReactPage} />
            <Route path="/redux" component={ReduxPage} />
            <Route path="/udacity" component={UdacityPage} />
          </Switch>
        </Template>
      </BrowserRouter>
    );
  }
}

export default App;