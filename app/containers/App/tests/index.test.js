import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'

describe('Addition', () => {
  it('knows that 2 and 2 make 6', () => {
    expect(2 + 2).toBe(4)
  })
})

// describe('Feature component', () => {
//   test('it matches the snapshot', () => {
//     const component = create(<AppContainer />)
//     expect(component.toJSON()).toMatchSnapshot()
//   })
// })
