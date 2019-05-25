import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import style from './home.scss'

class Home extends React.Component {
  render () {
    return (
      <div className={ style.App_Device }>
        <div className={ style.App_Device_top }>
          <h2>App & Devices</h2>
        </div>
        <div className={ style.App_Device_bottom }>
          <div className="row">

            <div className="col-lg-4">
              <div className={classNames(style.box_app_devices, 'row')}>
                <div className="col-lg-2">
                  <span className={classNames(style.icon01, style.icon) }></span>
                </div>
                <div className="col-lg-10">
                  <NavLink to="newdevice"><p className={style.Connect_Apps_Devic}>Connect App & Devices</p></NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={classNames(style.box_app_devices, 'row')}>
                <div className="col-lg-2">
                  <span className={classNames(style.icon02, style.icon) }></span>
                </div>
                <div className="col-lg-10">
                  <p className={style.Connect_Apps_Devic}>Upload Omnipod System Data</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={classNames(style.box_app_devices, 'row')}>
                <div className="col-lg-2">
                  <span className={classNames(style.icon03, style.icon) }></span>
                </div>
                <div className="col-lg-10">
                  <p className={style.Connect_Apps_Devic}>Connect to CareLink</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={classNames(style.box_app_devices, 'row')}>
                <div className="col-lg-2">
                  <span className={classNames(style.icon04, style.icon) }></span>
                </div>
                <div className="col-lg-10">
                  <p className={style.Connect_Apps_Devic}>Get Glooko Updater</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={classNames(style.box_app_devices, 'row')}>
                <div className="col-lg-2">
                  <span className={classNames(style.icon05, style.icon) }></span>
                </div>
                <div className="col-lg-10">
                  <p className={style.Connect_Apps_Devic}>Connect Dexcom Account</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={classNames(style.box_app_devices, 'row')}>
                <div className="col-lg-2">
                  <span className={classNames(style.icon06, style.icon) }></span>
                </div>
                <div className="col-lg-10">
                  <p className={style.Connect_Apps_Devic}>Manage iGlucose Devices</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home
