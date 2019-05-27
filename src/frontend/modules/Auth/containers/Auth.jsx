import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom'

import { NAME } from '../constants'
import { actions } from '../actions'

import { Wrapper } from '../../../styles/common'
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'
import Restore from '../components/Restore.jsx'

class Auth extends Component {
  path(path) {
    const { basePath = '/' } = this.props
    return path ? `${basePath}/${path}` : basePath
  }

  render() {
    const {
      loginSubmit,
      signupSubmit,
      restoreSubmit
    } = this.props

    return (
      <Wrapper>
        <Route exact path={this.path()} render={() => <Redirect to={this.path('login')} />} />
        <Route path={this.path('login')} render={() => <Login onSubmit={loginSubmit} />} />
        <Route path={this.path('signup')} render={() => <Signup onSubmit={signupSubmit} />} />
        <Route path={this.path('restore')} render={() => <Restore onSubmit={restoreSubmit} />} />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
