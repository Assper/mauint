import React, { Component } from 'react'
import {
  MessagesWrapper,
  MessageBadge,
  BadgeHeader,
  BadgeBody
} from '../styles'

class CommonMessages extends Component {
  render() {
    const {
      messages,
      hideMessage
    } = this.props

    if (!messages || !messages.length) {
      return null
    }

    return (
      <MessagesWrapper>
        {messages.map(({ type, text }, i) => {
          return (
            <MessageBadge key={i} type={type}>
              <BadgeHeader onClick={() => hideMessage(i)}>X</BadgeHeader>
              <BadgeBody>{text}</BadgeBody>
            </MessageBadge>
          )
        })}
      </MessagesWrapper>
    )
  }
}

export default CommonMessages
