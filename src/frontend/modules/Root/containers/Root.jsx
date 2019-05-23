import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { NAME } from '../constants'
import { actions } from '../actions'

import { AppWrapper } from '../../../styles/common'
import { Auth } from '../../Auth'
import NotFound from '../../common/NotFound.jsx'
import TopBar from '../components/TopBar.jsx'

class Root extends Component {
  render() {
    return (
      <AppWrapper>
        <TopBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/auth/login" />} />
          <Auth basePath="/auth" />
          <Route component={NotFound} />
        </Switch>
      </AppWrapper>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))
