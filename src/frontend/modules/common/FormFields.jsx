import React from 'react'
import {
  Input,
  InputBlock,
  ErrorMessage
} from '../../styles/common'

export function FormInput(field) {
  const { error, touched } = field.meta

  return (
    <InputBlock>
      <Input
        {...field.input}
        placeholder={field.placeholder}
        type={field.type}
      />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputBlock>
  )
}
