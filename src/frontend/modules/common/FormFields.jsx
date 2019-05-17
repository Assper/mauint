import React from 'react'
import {
  Input,
  InputBlock,
  ErrorMessage
} from '../../styles/common'

export function FormInput(field) {
  const { error, touched } = field.meta
  const isShowError = !!(touched && error)

  return (
    <InputBlock>
      <Input
        {...field.input}
        placeholder={field.placeholder}
        type={field.type}
        error={isShowError}
      />
      {isShowError && <ErrorMessage>{error}</ErrorMessage>}
    </InputBlock>
  )
}
