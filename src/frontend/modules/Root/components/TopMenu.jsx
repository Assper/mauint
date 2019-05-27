import React, { Component, Fragment } from 'react'
import { Wrapper, A } from '../../../styles/common'
import { isAuthorized, logout } from '../../../service'
import { NavBar, ColLeft, ColRight } from '../styles'

class TopMenu extends Component {
  render () {
    return (
      <Wrapper>
        <NavBar>
          <ColLeft>
            <A to="/">Home</A>
          </ColLeft>
          <ColRight>
            {!isAuthorized()
              ? <Fragment>
                  <A to="/auth/login">login</A>
                  <A to="/auth/signup">signup</A>
                </Fragment>
              : <A to="/" onClick={logout}>logout</A>
            }
          </ColRight>
        </NavBar>
      </Wrapper>
    )
  }
}

export default TopMenu
