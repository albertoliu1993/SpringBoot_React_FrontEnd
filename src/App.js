import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './containers/Auth/Auth';
import Signin from './containers/Auth/Signin';
import Search from './containers/SearchPage/search';
import Products from './containers/ProductPage/products';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index'


class App extends Component {

  componentDidMount () {
    console.log(this.props);
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/signup" component={Auth} />
        <Route path="/"  exact component={Signin} />
        <Route path="/products" component={Products} />
        <Route path="/search" component={Search} />
        <Redirect to="/" />
      </Switch>
    );
    
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/products" component={Products} />
          <Route path="/logout" component={Logout} />
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
