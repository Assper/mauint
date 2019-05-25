import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { validateLogin } from '../services/validate'

import {
  Form,
  PrimaryButton,
  Label,
  FieldSet,
  ButtonsRow,
  A
} from '../../../styles/common'
import { FormInput } from '../../common/FormFields.jsx'

class Login extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <FieldSet>
          <Label htmlFor="email">Email:</Label>
          <Field
            component={FormInput}
            type="email"
            placeholder="Email"
            name="email"
          />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="password">Password:</Label>
          <Field
            component={FormInput}
            type="password"
            placeholder="Password"
            name="password"
          />
        </FieldSet>
        <ButtonsRow>
          <PrimaryButton type="submit">Login</PrimaryButton>
          <A to="/auth/signup">signup</A>
          <A to="/auth/restore">restore</A>
        </ButtonsRow>
      </Form>
    )
  }
}

export default reduxForm({ form: 'login', validate: validateLogin })(Login)
