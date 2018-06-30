import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/actions";

import Home from "./containers/Home/Home";
import UdacityPage from "./containers/UdacityPage/UdacityPage";
import ReactPage from "./containers/ReactPage/ReactPage";
import ReduxPage from "./containers/ReduxPage/ReduxPage";
import NewPost from "./containers/NewPost/NewPost";
import DetailsPost from "./containers/DetailsPost/DetailsPost";
import NotFound from "../src/containers/NotFound/NotFound";
import Template from "../src/components/Template";

class App extends Component {
  render() {

    return (
      <Router>
        <Template>
          <Switch>
            <Route path="/" exact={true} component={Home} />
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

const mapStateToProps = state => {
  return {
    ...state.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);