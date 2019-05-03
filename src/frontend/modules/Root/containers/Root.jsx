import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { NAME } from '../constants'
import { actions } from '../actions'

class Root extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

const mapStateToProps = (state) => state[NAME]
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Root)

