import React from 'react'
import style from './header.scss'
import logo from './assets/Logo.jpg'

class Header extends React.Component {
  render () {  
    return (
      <div className={style.bluebar}>
        <div className={style.glooko_logo_parent}>
          <a href='/'><img src={logo} alt="" className={style.glooko_logo_white}/></a>
        </div>
        <div className={style.profile_name_parent}>
          <span className={style.profile_name}>Demo Live one</span>
        </div>
        <div className={style.parent}>
          <span className={style.settings}> Settings</span>
        </div>
        <div className={style.parent}>
          <span className={style.help}> Help</span>
        </div>
        <div className={style.parent}>
          <span className={style.log_out}> Logout</span>
        </div>
      </div>
    )
  }
}

export default Header
