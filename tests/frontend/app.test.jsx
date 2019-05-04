/* eslint-env node, jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../../src/frontend/App.jsx'
import { Root } from '../../src/frontend/modules/Root'

describe('App test', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
  })

  it('App render', () => {
    const app = shallow(<App />)
    expect(app.find(Root)).toHaveLength(1)
  })
})
