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
import { Integrations } from '../../Integrations'
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
              <Route path="/auth" render={() => <Auth basePath="/auth" />} />
              <Route path="/integrations" render={() => <Integrations basePath="/integrations" />} />
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
