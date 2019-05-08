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
import Login from '../components/Login.jsx'

class Auth extends Component {
  loginSubmit = (values) => {
    // event.preventDefault()
    console.log('VALUES', values)
  }

  render() {
    return (
      <BrowserRouter basename="/auth">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" render={() => <Login onSubmit={this.loginSubmit} />} />
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
