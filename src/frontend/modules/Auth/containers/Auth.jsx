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
import { CommonError, Wrapper } from '../../../styles/common'
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'

class Auth extends Component {
  render() {
    const {
      loginSubmit,
      signupSubmit,
      error
    } = this.props

    return (
      <Wrapper>
        <BrowserRouter basename="/auth">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" render={() => <Login onSubmit={loginSubmit} />} />
            <Route path="/signup" render={() => <Signup onSubmit={signupSubmit} />} />
            <Route path="/restore" render={() => <div>Restore</div>} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        {error && <CommonError>{error}</CommonError>}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
