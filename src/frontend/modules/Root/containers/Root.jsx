import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { isAuthorized } from '../../../service'
import { NAME } from '../constants'
import { actions } from '../actions'

import { AppWrapper, Row, Main } from '../../../styles/common'
import { Auth } from '../../Auth'
import { Integrations } from '../../Integrations'
import NotFound from '../../common/NotFound.jsx'
import TopMenu from '../components/TopMenu.jsx'
import SideMenu from '../components/SideMenu.jsx'
import CommonMessages from '../components/CommonMessages.jsx'

class Root extends Component {
  constructor(props) {
    super(props)
    this.redirectFromHome = this.redirectFromHome.bind(this)
    this.redirectFromAuth = this.redirectFromAuth.bind(this)
  }

  componentWillMount() {
    const {
      userData,
      getUserData
    } = this.props

    const isNeedToGetUserData = isAuthorized() && (!userData || !Object.keys(userData).length)
    if (isNeedToGetUserData) {
      getUserData()
    }
  }

  redirectFromHome() {
    if (isAuthorized()) {
      return <Redirect to="/integrations" />
    }

    return <Redirect to="/auth/login" />
  }

  redirectFromAuth() {
    if (isAuthorized()) {
      return <Redirect to="/integrations" />
    }

    return <Auth basePath="/auth" />
  }

  render() {
    const {
      commonMessages,
      hideMessage
    } = this.props

    return (
      <AppWrapper>
        <CommonMessages messages={commonMessages} hideMessage={hideMessage} />
        <TopMenu />
        <Row>
          <SideMenu />
          <Main>
            <Switch>
              <Route exact path="/" render={this.redirectFromHome} />
              <Route path="/auth" render={this.redirectFromAuth} />
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
