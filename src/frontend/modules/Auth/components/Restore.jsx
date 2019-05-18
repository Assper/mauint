import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { validateRestore } from '../services/validate'

import {
  Form,
  PrimaryButton,
  Label,
  FieldSet
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
        <PrimaryButton type="submit">Restore</PrimaryButton>
      </Form>
    )
  }
}

export default reduxForm({ form: 'restore', validate: validateRestore })(Restore)
