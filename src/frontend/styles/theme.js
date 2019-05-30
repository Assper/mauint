import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  html, body, div {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const theme = {
  color: {
    danger: '#f44336',
    primary: '#2196f3',
    regular: '#2e2e2e',
    gray: '#eaeaea',
    white: '#ffffff',
    disable: '#9e9e9e'
  },
  border: {
    thick: '4px solid',
    thin: '1px solid',
    regular: '2px solid'
  },
  size: {
    link: {
      big: '18px',
      small: '14px',
      normal: '16px'
    },
    text: {
      big: '18px',
      small: '14px',
      normal: '16px'
    },
    header: {
      big: '32px',
      small: '24px',
      normal: '28px'
    }
  },
  indent: {
    small: '5px',
    normal: '15px',
    big: '30px'
  }
}
