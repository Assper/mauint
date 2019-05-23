import React, { Component } from 'react'
import { Wrapper, A } from '../../../styles/common'
import { NavBar, ColLeft, ColRight } from '../styles'

class TopBar extends Component {
  render () {
    return (
      <Wrapper>
        <NavBar>
          <ColLeft>
            <A to="/">Home</A>
          </ColLeft>
          <ColRight>
            <A to="/auth/login">login</A>
            <A to="/auth/signup">signup</A>
          </ColRight>
        </NavBar>
      </Wrapper>
    )
  }
}

export default TopBar
