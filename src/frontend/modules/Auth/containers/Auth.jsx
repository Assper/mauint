import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom'

import { NAME } from '../constants'
import { actions } from '../actions'

import { CommonError, Wrapper } from '../../../styles/common'
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'
import Restore from '../components/Restore.jsx'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.routes = this.routes.bind(this)
  }

  path(path) {
    const { basePath = '/' } = this.props
    return path ? `${basePath}/${path}` : basePath
  }

  routes() {
    const {
      loginSubmit,
      signupSubmit,
      restoreSubmit
    } = this.props

    return (
      <Fragment>
        <Route exact path={this.path()} render={() => <Redirect to={this.path('login')} />} />
        <Route path={this.path('login')} render={() => <Login onSubmit={loginSubmit} />} />
        <Route path={this.path('signup')} render={() => <Signup onSubmit={signupSubmit} />} />
        <Route path={this.path('restore')} render={() => <Restore onSubmit={restoreSubmit} />} />
      </Fragment>
    )
  }

  render() {
    const { error } = this.props

    return (
      <Wrapper>
        {this.routes()}
        {error && <CommonError>{error}</CommonError>}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
