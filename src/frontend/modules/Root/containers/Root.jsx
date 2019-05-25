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

import { AppWrapper, Row, Main } from '../../../styles/common'
import { Auth } from '../../Auth'
import NotFound from '../../common/NotFound.jsx'
import TopMenu from '../components/TopMenu.jsx'
import SideMenu from '../components/SideMenu.jsx'

class Root extends Component {
  render() {
    return (
      <AppWrapper>
        <TopMenu />
        <Row>
          <SideMenu />
          <Main>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/auth/login" />} />
              <Auth basePath="/auth" />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </Row>
      </AppWrapper>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))
