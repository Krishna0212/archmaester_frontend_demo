import { createSelector } from 'reselect'

const selectUser = (state) => state.user.get('user')

const makeSelectUserName = () => createSelector(
  selectUser,
  (user) => user.get('name')
)

export { makeSelectUserName }
