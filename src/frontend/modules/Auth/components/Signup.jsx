import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { validateSignup } from '../services/validate'

import {
  Form,
  PrimaryButton,
  Label,
  FieldSet
} from '../../../styles/common'
import { FormInput } from '../../common/FormFields.jsx'

class Signup extends Component {
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
          <Label htmlFor="name">Name:</Label>
          <Field
            component={FormInput}
            type="text"
            placeholder="Name"
            name="name"
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
        <FieldSet>
          <Label htmlFor="repassword">Retype password:</Label>
          <Field
            component={FormInput}
            type="password"
            placeholder="Retype password"
            name="repassword"
          />
        </FieldSet>
        <PrimaryButton type="submit">Signup</PrimaryButton>
      </Form>
    )
  }
}

export default reduxForm({ form: 'signup', validate: validateSignup })(Signup)
