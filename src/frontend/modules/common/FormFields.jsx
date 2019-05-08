import React from 'react'
import { Input } from '../../styles/common'

export function FormInput(field) {
  return (
    <Input
      {...field.input}
      placeholder={field.placeholder}
      type={field.type}
    />
  )
}
