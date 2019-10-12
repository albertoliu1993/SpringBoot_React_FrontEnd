import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './containers/Auth/Auth';
import Signin from './containers/Auth/Signin';
import Search from './containers/SearchPage/search';
import Products from './containers/ProductPage/products';
import * as actions from './store/actions/index'

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/signup" component={Auth} />
        <Route path="/" exact component={Signin} />
        <Route path="/products" component={Products} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/search" component={Search} />
          <Redirect to="search" />
        </Switch>
      );
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup : () => dispatch( actions.authCheckState())
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
