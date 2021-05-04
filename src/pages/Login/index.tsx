import {
  faFacebook, faFacebookF, faGithub, faGithubAlt, faGoogle,
} from '@fortawesome/free-brands-svg-icons'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logo3 } from '../../assets/images'
import { actionLogin } from '../../store/login/actions'
// import './mix/bundle.min.js'
import './mix/app.0869031.css'
// import './mix/app.0869031.js'
import './mix/css'
import './mix/style.css'

export const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [wrongPass, setWrongPass] = React.useState(false)
  const dispatch = useDispatch()

  const handleChangeUsername = (e: any) => {
    e.persist()
    setUsername(e.target.value)
  }
  const handleChangePassword = (e: any) => {
    e.persist()
    setPassword(e.target.value)
  }
  const onSubmit = async () => {
    const data = {
      username,
      password,
    }
    console.log('data', data)
    const res: any = await dispatch(actionLogin(data))
    console.log('res', res)

    if (res?.status === '0') {
      window.location.href = '/'
      setWrongPass(false)
    } else {
      setWrongPass(true)
    }
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      {wrongPass
        && <Alert variant="danger" style={{ textAlign: 'center' }}>Wrong pass</Alert>}
      <div className="viblo">
        <div className="container login_fff6887">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="el-card is-always-shadow card_39334a8">
                <div className="el-card__body">
                  <div className="mb-6 text-center">
                    <img
                      src={logo3}
                      alt="Viblo"
                      className="logo_0ce2aea"
                      style={{ margin: 'auto' }}
                    />
                  </div>
                  <div className="my-4 text-center">
                    <h5>Login to Viblo</h5>
                  </div>
                  <div className="login-form" onSubmit={(event) => console.log(event)}>

                    <form className="el-form">
                      <div className="el-form-item is-required el-form-item--medium">

                        <div className="el-form-item__content">
                          <div
                            className="el-input el-input--medium el-input-group el-input-group--prepend"
                          >
                            <div className="el-input-group__prepend">
                              <FontAwesomeIcon size="1x" icon={faUser} />
                            </div>
                            <input
                              type="text"
                              autoComplete="off"
                              autoFocus
                              placeholder="Username or email"
                              className="el-input__inner"
                              value={username}
                              onChangeCapture={handleChangeUsername}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="el-form-item is-required el-form-item--medium">

                        <div className="el-form-item__content">
                          <div
                            className="el-input el-input--medium el-input-group el-input-group--prepend"
                          >
                            <div className="el-input-group__prepend">
                              <FontAwesomeIcon size="1x" icon={faLock} />
                            </div>
                            <input
                              type="password"
                              autoComplete="off"
                              placeholder="Password"
                              className="el-input__inner"
                              value={password}
                              onChangeCapture={handleChangePassword}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    {' '}
                    <button
                      type="button"
                      className="el-button w-100 el-button--primary"
                      onClick={onSubmit}
                    >
                      <span>
                        Login
                      </span>
                    </button>
                    <div className="d-flex justify-content-between my-2">
                      <a
                        href="https://accounts.viblo.asia/forgot-password"
                        className=""
                      >
                        <small>
                          Forgot your
                          password?
                        </small>
                      </a>
                      {' '}
                      <a
                        href="/register"
                        className=""
                      >
                        <small>Create account</small>
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <hr className="flex-fill m-0" />
                      {' '}
                      <span className="mx-3">
                        Or login with
                      </span>
                      <hr className="flex-fill m-0" />
                    </div>
                    <div className="social-login">
                      <ul
                        className="list-unstyled d-flex align-items-center justify-content-between flex-wrap mb-0"
                      >
                        <button
                          type="button"
                          className="el-button social-login__button facebook el-button--default el-button--medium"
                        >
                          <FontAwesomeIcon size="1x" icon={faFacebookF} color="#3b5998" />
                          <span>
                            Facebook
                          </span>
                        </button>
                        {' '}
                        <button
                          type="button"
                          className="el-button social-login__button google el-button--default el-button--medium"
                        >
                          <FontAwesomeIcon size="1x" icon={faGoogle} color="#e94820" />
                          <span>
                            Google
                          </span>
                        </button>
                        {' '}
                        <button
                          type="button"
                          className="el-button social-login__button github el-button--default el-button--medium"
                        >
                          <FontAwesomeIcon size="1x" icon={faGithub} />
                          <span>
                            Github
                          </span>
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
