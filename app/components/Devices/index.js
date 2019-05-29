import React from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import { NavLink } from 'react-router-dom'
import style from './devices.scss'
import classNames from 'classnames'

class Devices extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false 
    }
  }

  show () {
    this.setState({
      visible: true 
    })
  }

  hide () {
    this.setState({
      visible: false 
    })
  }

  render () {
    return (
      <div className={classNames(style.add_devices, 'row')}>
        <div className={classNames(style.content_parent, 'col-lg-12')}>
          <h3 className={style.apps_devices}>
            <NavLink to="/">App & Devices</NavLink>
          </h3>
        </div>
        <div className={classNames(style.content_parent, 'col-lg-12')}>
          <h2 className={style.Your_iGlucose_Device}>Your iGlucose Devices</h2>
        </div>
        <div className={classNames(style.content_parent, 'col-lg-12')} >
          <NavLink to="/newdevice" className={style.add_another_iGlucose}>
          Add Another iGlucose

          </NavLink>
        </div>
        <div className={classNames(style.content_parent, 'col-lg-12')}>
          <h5 className={style.connected_devices}>Connected Devices</h5>
        </div>
        <div className={classNames(style.devices_table)}>
          <table width="100%" border="0" cellSpacing="0" cellPadding="0" className={style.Grid_table}>
            <thead>
              <tr>
                <th width="14%" className="text-right">Serial Number</th>
                <th width="20%" className="text-left">Last Synced</th>
                <th width="20%" className="text-left">&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="14%" className="text-right">5678901</td>
                <td width="20%" className="text-left">March 22, 2019</td>
                <td width="20%" className={style.Blue_text} onClick={this.show.bind(this)}>Remove Device</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td width="8%" className="text-right">5678901</td>
                <td width="20%" className="text-left">March 22, 2019</td>
                <td width="20%" className={style.Blue_text} onClick={this.show.bind(this)}>Remove Device</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Rodal visible={this.state.visible} closeMaskOnClick={false} height={200} animation="door" onClose={this.hide.bind(this)}>
          <div className="pop_body">
            <h4> iGlucose is Connected</h4>
            <p> Do you want to remove this iGlucose meter from Glooko ?</p>
            <div className="row">
              <div className="col-lg-4" />
              <div className="col-lg-8">
                <button type="button" className="btn btn-outline-primary" onClick={this.hide.bind(this)}>Cancel</button>
&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-primary" onClick={this.hide.bind(this)}>Remove</button>
              </div>
            </div>
          </div>

        </Rodal>
      </div>

    )
  }
}

export default Devices
