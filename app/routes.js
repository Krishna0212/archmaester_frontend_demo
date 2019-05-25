import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NewDevice from './components/NewDevice'
import DeviceStatus from './components/DeviceStatus'
import Devices from './components/Devices'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/newdevice" component={NewDevice} />
      <Route exact path="/devicestatus" component={DeviceStatus} />
      <Route exact path="/devices" component={Devices} />
    </Switch>
  </Router>
)

export default Root
