import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from './store'
import { Root } from './modules/Root'
import { GlobalStyle, theme } from './styles/theme'

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Root />
          </ThemeProvider>
        </Provider>
      </Router>
    )
  }
}

export default App
