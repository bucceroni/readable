import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Template from "../src/components/Template";
import Home from "./containers/Home/Home";
import NewPost from "./containers/NewPost/NewPost";
import DetailsPost from "./containers/DetailsPost/DetailsPost";
import ReactPage from "./containers/ReactPage/ReactPage";
import ReduxPage from "./containers/ReduxPage/ReduxPage";
import UdacityPage from "./containers/UdacityPage/UdacityPage";
import NotFound from "../src/containers/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Template>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newPost" component={NewPost} />
            <Route path="/:category/:id" component={DetailsPost} />
            <Route path="/react" component={ReactPage} />
            <Route path="/udacity" component={UdacityPage} />
            <Route path="/redux" component={ReduxPage} />
            <Route component={NotFound} />
          </Switch>
        </Template>
      </Router>
    );
  }
}

export default App;
