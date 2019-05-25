import React from 'react'
import { NavLink } from 'react-router-dom'
import TickImage from './assets/Tick.jpg'
import style from './devicestatus.scss'
class DeviceStatus extends React.Component {
  render () {
    return (
      <div className={style.add_devices}>

        <div className="row text-center">
          <h2 className={style.iGlucose_is_Now_Conn}>
            <span className="tickImage"><img src={ TickImage } alt="" /></span>
                  iGlucose is Now Connected
          </h2>
        </div>

        <div className={style.msgSettings}>
                            Your data will update automatically. You can view your data now or add more
                             iGlucose devices to your Glooko account
        </div>
        <div className={style.iGlucose_is_Now_Conn_btn}>
          <NavLink className={style.btnDevices} to="/devices">Manage Devices</NavLink> &nbsp; &nbsp;
          <NavLink className={style.btnSave} to="/">View Data</NavLink>
        </div>
      </div>
    )
  }
}

export default DeviceStatus
