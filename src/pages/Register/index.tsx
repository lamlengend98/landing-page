/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-target-blank */
import { Alert, Checkbox } from 'antd'
import { Formik } from 'formik'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { logo3 } from '../../assets/images'
import { actionRegister } from '../../store/login/actions'
import './mix/app.0869031.css'
import './style.scss'

export const Register = () => {
  const dispatch = useDispatch()
  const [error, setError] = React.useState(false)
  const onSubmit = async (values: any) => {
    delete values.confirmPassword
    delete values.isCheck
    console.log('====================================')
    console.log('values', values)
    console.log('====================================')
    const res: any = await dispatch(actionRegister(values))
    if (res.status === '0') {
      window.location.href = '/login'
    } else {
      setError(true)
    }
  }
  const accountInfo = {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    isCheck: false,
  }
  return (
    <div className="viblo">
      {error && (
        <Alert message="Error" type="error" showIcon />
      ) }
      <div className="container my-3">
        <div className="row">
          <div className="d-flex justify-content-center py-4 mb-2 col-12">
            <div className="logo logo--medium">
              <a
                href="https://accounts.viblo.asia/"
                className="router-link-active"
              >
                <img
                  src={logo3}
                  alt="Viblo Accounts"
                  className="logo-image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="el-card is-always-shadow">

              <div className="el-card__body">
                <h1 className="card-title">
                  Register account for Viblo
                </h1>
                <p className="card-subtitle mt-2">
                  Welcome to
                  {' '}
                  <strong>Viblo platform</strong>
                  !
                  Join us to find useful information required to improve your skills.
                  Please fill your info into the form below to continue.
                </p>
                <div className="pt-4">
                  <Formik onSubmit={onSubmit} initialValues={accountInfo}>
                    {({
                      values, handleChange, submitForm, setFieldValue,
                    }) => {
                      const isDisabled = () => {
                        if (values.name.length && values.email.length && values.username.length && values.password && values.confirmPassword && values.password === values.confirmPassword && values.isCheck) {
                          return false
                        }
                        return true
                      }
                      return (
                        <>
                          <div className="el-form-item is-required">

                            <div className="el-form-item__content">
                              <div className="el-input">
                                <input
                                  type="text"
                                  autoComplete="off"
                                  placeholder="Your name"
                                  className="el-input__inner"
                                  value={values.name}
                                  onChange={handleChange('name')}
                                />

                              </div>

                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="el-form-item is-required">

                                <div className="el-form-item__content">
                                  <div className="el-input">
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      title=""
                                      placeholder="Your email address"
                                      className="el-input__inner"
                                      value={values.email}
                                      onChange={handleChange('email')}
                                    />

                                  </div>

                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="el-form-item is-success is-required">

                                <div className="el-form-item__content">
                                  <div className="el-input">
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      placeholder="Username"
                                      className="el-input__inner"
                                      value={values.username}
                                      onChange={handleChange('username')}
                                    />

                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="el-form-item is-success is-required">

                            <div className="el-form-item__content">
                              <div className="el-input">
                                <input
                                  type="password"
                                  autoComplete="off"
                                  placeholder="Password"
                                  className="el-input__inner"
                                  value={values.password}
                                  onChange={handleChange('password')}
                                />

                              </div>

                            </div>
                          </div>
                          <div className="el-form-item is-required">

                            <div className="el-form-item__content">
                              <div className="el-input">
                                <input
                                  type="password"
                                  autoComplete="off"
                                  placeholder="Confirm your password"
                                  className="el-input__inner"
                                  value={values.confirmPassword}
                                  onChange={handleChange('confirmPassword')}
                                />

                              </div>

                            </div>
                          </div>
                          <div className="el-form-item">

                            <div className="el-form-item__content">
                              <label className="el-checkbox mb-0">
                                <span
                                  className="el-checkbox__input"
                                >
                                  <Checkbox value={values?.isCheck} onClick={handleChange('isCheck')}>
                                    <span className="el-checkbox__label">
                                      <span>
                                        I agree
                                        to
                                      </span>
                                      {' '}
                                      <a
                                        href="https://viblo.asia/terms"
                                        target="_blank"
                                        rel="noopener"
                                      >
                                        Viblo Terms of Service
                                      </a>
                                    </span>
                                  </Checkbox>
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              disabled={isDisabled()}
                              type="button"
                              className={`el-button w-100 my-2 el-button--primary ${isDisabled() ? 'is-disabled' : ''}`}
                              onClick={submitForm}
                            >

                              <span>
                                Sign up
                              </span>
                            </button>
                          </div>
                        </>
                      )
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
