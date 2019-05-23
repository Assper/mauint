import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.indent.normal};
  z-index: 999;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.3);
`

export const ColLeft = styled.div`
`

export const ColRight = styled.div`
`
