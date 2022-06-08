import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', fetchedData.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: fetchedData.error_msg})
    }
  }

  render() {
    const {errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-page">
        <div className="login-container">
          <img
            className="login-image-lg"
            alt="website login"
            src="https://res.cloudinary.com/narri/image/upload/v1650214147/Insta_share/Layer_2_jvz89b.png"
          />
          <form className="login-card" onSubmit={this.onSubmitLogin}>
            <div className="login-title-container">
              <img
                className="login-website-logo"
                alt="website logo"
                src="https://res.cloudinary.com/narri/image/upload/v1650214146/Insta_share/Standard_Collection_8_wbh2dz.jpg"
              />
              <h1 className="login-website-title">Insta Share</h1>
            </div>
            <label className="login-label" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              className="login-input"
              id="username"
              type="text"
              onChange={this.onChangeUsername}
            />

            <label className="login-label" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              className="login-input"
              id="password"
              type="password"
              onChange={this.onChangePassword}
            />
            <p className="login-error-msg">{errorMsg}</p>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
