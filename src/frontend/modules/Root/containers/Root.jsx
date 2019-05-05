import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { NAME } from '../constants'
import { actions } from '../actions'

import NotFound from '../../common/NotFound.jsx'

import { Auth } from '../../Auth'

class Root extends Component {
  renderHome() {
    return <Redirect to="/auth" />
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={this.renderHome} />
        <Route path="/auth" component={Auth} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))
