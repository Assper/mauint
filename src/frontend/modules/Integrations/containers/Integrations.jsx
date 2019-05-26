import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'

import { NAME } from '../constants'
import { actions } from '../actions'

import { Wrapper, Text } from '../../../styles/common'

class Integrations extends Component {
  constructor(props) {
    super(props)
    this.indexPage = this.indexPage.bind(this)
  }

  indexPage() {
    return <Text>Choose integration or create one</Text>
  }

  path(path) {
    const { basePath = '/' } = this.props
    return path ? `${basePath}/${path}` : basePath
  }

  render() {
    return (
      <Wrapper>
        <Route exact path={this.path()} render={this.indexPage} />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Integrations)
