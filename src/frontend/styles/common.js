import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const Wrapper = styled.div`
`

export const Main = styled.main`
  padding: ${({ theme }) => theme.indent.normal};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
`

export const ButtonsRow = styled(Row)`
  align-items: center;
`

export const Form = styled.form``

export const Button = styled.button`
  padding: ${({ theme }) => theme.indent.small} 10px;
  font-size: ${({ theme }) => theme.size.text.normal};
  color: ${({ theme }) => theme.color.regular};
  border: ${({ theme }) => theme.border.regular};
  background-color: ${({ theme }) => theme.color.gray};
  margin-right: ${({ theme }) => theme.indent.normal};
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 200ms ease-in-out;
  
  &:hover {
    background-color: ${({ theme }) => theme.color.white};
  }
`
export const PrimaryButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  border-color: ${({ theme }) => theme.color.primary};
  
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`

export const DangerButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.danger};
  border-color: ${({ theme }) => theme.color.danger};
  
  &:hover {
    color: ${({ theme }) => theme.color.danger};
  }
`

export const Input = styled.input`
  color: ${({ theme }) => theme.color.regular};
  font-size: ${({ theme }) => theme.size.text.normal};
  padding: ${({ theme }) => theme.indent.small};
  border: ${({ theme }) => theme.border.thin};
  border-color: ${({ theme }) => theme.color.gray};
  border-radius: 4px;
  outline: none;
  width: 100%;
  min-width: 290px;
  
  &:focus {
    border-color: ${({ theme, error }) => {
      return error ? theme.color.danger : theme.color.primary
    }};
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.color.regular};
  font-size: ${({ theme }) => theme.size.text.normal};
  margin-bottom: ${({ theme }) => theme.indent.small};
  display: block;
  font-weight: bold;
`

export const FieldSet = styled.div``

export const InputBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.indent.normal};
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.size.text.small};
  padding-left: ${({ theme }) => theme.indent.small};
  margin: 0;
`

export const CommonError = styled.p`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.size.text.normal};
  padding: ${({ theme }) => theme.indent.normal};
  width: 100%;
  text-align: center;
  margin: 0;
`

export const A = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  margin-right: ${({ theme }) => theme.indent.normal};
  font-size: ${({ theme }) => theme.size.text.normal};
  text-decoration: none;

  &:visited,
  &:active {
    color: ${({ theme }) => theme.color.primary};
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.color.regular};
  font-size: ${({ theme }) => theme.size.text.normal};
`
