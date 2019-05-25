import React from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import { NavLink } from 'react-router-dom'
import DeviceImage from './assets/DevicesandLogos.png'
import style from './newdevice.scss'
import classNames from 'classnames'
class NewDevice extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      serialNumber: '',
      confirmSerialNumber: '',
      visible: false,
      popUpHeader: '',
      popText: '',
      serialNumberError: '',
      confirmSerialNumberError: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.cSerialNumberValidation = this.cSerialNumberValidation.bind(this)
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value, [`${evt.target.name}Error`]: '' })
  }

  show () {
    this.setState({ visible: true })
  }

  hide () {
    this.setState({ visible: false })
  }

  // serial number Validation
  formValidation () {
    let isValid = false
    if (this.state.serialNumber === '') {
      this.setState({ serialNumberError: 'Serial number is required' })
      isValid = true
    } else if (this.state.serialNumber !== this.state.confirmSerialNumber) {
      this.setState({
        popUpHeader: 'Invalid serial number', popText: 'Please make sure serial number entered is correct and try again', visible: true, confirmSerialNumberError: 'Serial Numbers do not match '
      })
      isValid = true
    }
    if (!isValid) {
      this.props.history.push('/devicestatus')
    }
  }

  // Confirm serial Number Validation
  cSerialNumberValidation () {
    if (this.state.serialNumber !== this.state.confirmSerialNumber) {
      this.setState({ popUpHeader: 'Invalid serial number', popText: 'Please make sure serial number entered is correct and try again', visible: true })
    }
  }

  render () {
    return (
      <div className={classNames(style.add_devices, 'row')}>
        <div className="col-lg-2">
          <h3 className={style.apps_devices}>
            <NavLink to="/devices">App & Devices</NavLink>
          </h3>
        </div>
        <div className="col-lg-7">
          <h2 className={style.add_iGlucose_Meter}>Add iGlucose Meter</h2>
          <div className={style.connect_your_iGlucos}>
                            Connect your iGlucose meter with the seven digit serial number.
                            The serial number can be found on the back of your iGlucose meter.
          </div>
          <div className={style.imgContent}>
            <img src={ DeviceImage } alt="" className={style.imgDevice} />
          </div>
          <div className="bodyContent">
            <div className="form-group row">
              <div className="col-xs-2">
                <label>Serial Number</label>
                <input className="form-control" type="text" name="serialNumber" onChange={ this.handleChange } />
                <div className={style.error}>{this.state.serialNumberError}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-2">
                <label>Confirm Serial Number</label>
                <input className="form-control" type="text" name="confirmSerialNumber" onChange={ this.handleChange } onBlur={ this.cSerialNumberValidation } />
                <div className={style.error}>{this.state.confirmSerialNumberError}</div>
              </div>
            </div>
            <div className="float-right custom-float-right">
              <button type="button" className={style.disable_button} onClick={ this.formValidation.bind(this) }>Continue</button>
            </div>
          </div>
        </div>
        <div className="col-log-3"></div>
        <div className="row">
          <Rodal visible={ this.state.visible } closeMaskOnClick={ false } height={ 200 } animation="door" onClose={ this.hide.bind(this) }>
            <div className={style.pop_body}>
              <h4>
                {' '}
                {this.state.popUpHeader}
              </h4>
              <p>
                {' '}
                {this.state.popText}
              </p>
              <div className="row">
                <div className="col-lg-4" />
                <div className="col-lg-8">
                  <button type="button" className={style.pop_button} onClick={ this.hide.bind(this) }>OK</button>
                </div>
              </div>
            </div>

          </Rodal>

        </div>
      </div>
    )
  }
}

export default NewDevice
