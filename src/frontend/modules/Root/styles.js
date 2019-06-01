import styled from 'styled-components'

const badgeColors = {
  bg: {
    error: {
      header: '#e02517',
      body: '#f44336'
    },
    warning: {
      header: '#ffc107',
      body: '#ffd350'
    },
    success: {
      header: '#398c3c',
      body: '#4caf50'
    }
  },
  text: {
    error: '#88130a',
    warning: '#906c01',
    success: '#025005'
  }
}

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.indent.normal};
  z-index: 999;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.3);
`

export const SideBar = styled.aside`
  padding: ${({ theme }) => theme.indent.normal};
  border-right: ${({ theme }) => theme.border.regular};
  border-color: ${({ theme }) => theme.color.gray};
  min-width: 320px;
  min-height: calc(100vh - 48px);
`

export const ColLeft = styled.div`
`

export const ColRight = styled.div`
`

export const MessagesWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  top: 48px;
  right: 0;
  padding: ${({ theme }) => theme.indent.normal};
`

export const BadgeHeader = styled.div`
  padding: ${({ theme }) => theme.indent.small};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: bold;
  text-align: right;
  cursor: pointer;
`

export const BadgeBody = styled.div`
  padding: ${({ theme }) => theme.indent.small};
  font-size: ${({ theme }) => theme.size.normal};
`

export const MessageBadge = styled.div`
  width: 240px;
  margin-bottom: ${({ theme }) => theme.indent.normal};
  border-radius: 6px;
  overflow: hidden;
  
  & > ${BadgeHeader} {
    background-color: ${({ type }) => badgeColors.bg[type] && badgeColors.bg[type].header};
    color: ${({ type }) => badgeColors.text[type] && badgeColors.text[type]};
  }
  
  & > ${BadgeBody} {
    background-color: ${({ type }) => badgeColors.bg[type] && badgeColors.bg[type].body};
    color: ${({ type }) => badgeColors.text[type] && badgeColors.text[type]};
  }
`
