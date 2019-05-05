import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  withRouter,
  Switch,
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'

import { NAME } from '../constants'
import { actions } from '../actions'

import NotFound from '../../common/NotFound.jsx'

class Auth extends Component {
  redirectToLogin() {
    return <Redirect to="/login" />
  }

  render() {
    return (
      <BrowserRouter basename="/auth">
        <Switch>
          <Route exact path="/" render={this.redirectToLogin} />
          <Route path="/login" render={() => <div>Login</div>} />
          <Route path="/signup" render={() => <div>Signup</div>} />
          <Route path="/restore" render={() => <div>Restore</div>} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
