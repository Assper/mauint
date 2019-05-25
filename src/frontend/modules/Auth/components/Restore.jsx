import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { validateRestore } from '../services/validate'

import {
  Form,
  PrimaryButton,
  Label,
  FieldSet,
  ButtonsRow,
  A
} from '../../../styles/common'
import { FormInput } from '../../common/FormFields.jsx'

class Restore extends Component {
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
        <ButtonsRow>
          <PrimaryButton type="submit">Restore</PrimaryButton>
          <A to="/auth/login">login</A>
          <A to="/auth/signup">signup</A>
        </ButtonsRow>
      </Form>
    )
  }
}

export default reduxForm({ form: 'restore', validate: validateRestore })(Restore)
