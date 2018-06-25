import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import UdacityPage from "./containers/UdacityPage/UdacityPage";
import ReactPage from "./containers/ReactPage/ReactPage";
import ReduxPage from "./containers/ReduxPage/ReduxPage";
import NewPost from "./containers/NewPost/NewPost";
import NotFound from "../src/containers/NotFound/NotFound";
import Template from "../src/components/Template";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Template>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/udacity" component={UdacityPage} />
            <Route path="/react" component={ReactPage} />
            <Route path="/redux" component={ReduxPage} />
            <Route path="/newPost" component={NewPost} />
            <Route component={NotFound} />
          </Switch>
        </Template>
      </BrowserRouter>
    );
  }
}

export default App;