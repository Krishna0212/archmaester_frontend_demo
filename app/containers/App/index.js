import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Header from '../../components/Header'
import Route from '../../routes'
import style from './app.scss'
import { getUserName } from './actions'
import { makeSelectUserName } from './selectors'

class App extends React.Component {
  componentDidMount () {
    this.props.getUserName()
    console.log(this.props.userName)
  }
  render () {
    return (
      <div>
        <Header/>
        <div className={style.Body_section}>
          <Route/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  userName: makeSelectUserName()
})

export function mapDispatchToProps (dispatch) {
  return {
    getUserName: () => { dispatch(getUserName()) },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
