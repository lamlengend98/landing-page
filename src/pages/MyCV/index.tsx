/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import * as React from 'react'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './mix/all.css'
// import './mix/app.184b906.css'
// import './mix/user.184b906.css'
import './Viblo CV_files/css'
import './Viblo CV_files/all.css'
import './Viblo CV_files/app.6bdbbe5.css'
import './Viblo CV_files/user.6bdbbe5.css'
import './Viblo CV_files/home.6bdbbe5.css'
import './Viblo CV_files/my-cv.6bdbbe5.css'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { actionGetUserInfo } from '../../store/login/actions'
import { default_avatar } from '../../assets/images'

export const MyCV = () => {
  const dispatch = useDispatch()

  const info = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const { loginInfo } = useSelector((store: any) => {
    console.log('====================================')
    console.log('store', store)
    console.log('====================================')
    return store.login
  })

  const id = React.useMemo(() => info?._id, [])

  React.useEffect(() => {
    console.log('====================================')
    console.log('loginInfo.Profile', loginInfo)
    console.log('====================================')
  }, [loginInfo])

  const getInfo = async () => {
    dispatch(actionGetUserInfo(id))
  }

  React.useEffect(() => {
    getInfo()
  }, [])
  return (
    <div id="app">
      <div className="app">
        <Header tab="MyCV" hasInfo userInfo={loginInfo} />
        <div className="user-layout">
          <div className="user-layout__content">
            <div className="my-resumes">
              <div className="resumes-author">
                <img
                  className="resumes-author__avatar"
                  src={loginInfo?.avatar || default_avatar}
                />
                <div className="resumes-author__row">
                  <h1>Thanh Lam Nguyen</h1>
                </div>
                <div className="resumes-author__row">
                  Number of CV
                  <span className="float-right">7</span>
                </div>
                <div className="resumes-author__row">
                  Last update
                  <span className="float-right">13/01/2021</span>
                </div>
                <a
                  className="resumes-author__footer"
                  href="/"
                >
                  <button
                    type="button"
                    className="ant-btn"
                  >
                    <span>Create new CV</span>
                  </button>
                </a>
              </div>
              <div className="resumes-list w-full">
                <div className="my-resumes-list__body">
                  <div className="ant-list ant-list-sm ant-list-split">
                    <div className="ant-spin-nested-loading">
                      <div className="ant-spin-container">
                      <ul className="ant-list-items">
                        <li className="ant-list-item resume-item">
                          <a
                            href="/resumes/edit/a30e7757-8242-3532-a16b-97abfbeaff4a"
                          >
                            <img
                              className="resume-item__thumb"
                              src="./Viblo CV_files/753032a6-8403-4685-86bb-e91ded55546d.png"
                            />
                          </a>
                          <div className="resume-item__info">
                            <div className="resume-item__title">
                              <a
                                href="/resumes/edit/a30e7757-8242-3532-a16b-97abfbeaff4a"
                              >
                                My
                                Resume
                              </a>
                              <span>
                                <i aria-label="icon: calendar" className="anticon anticon-calendar">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    />
                                  </svg>
                                </i>
                                13/01/2021
                              </span>
                              <span className="ml-10">
                                <i
                                  className="far fa-clock"
                                />
                                22:01
                              </span>
                            </div>
                            <div className="disabled resume-item__url">
                              <input
                                id="cv-url-4911"
                                readOnly={false}
                                value="/preview/a30e7757-8242-3532-a16b-97abfbeaff4a"
                              />
                              <button
                                disabled={false}
                                type="button"
                                className="ant-btn flex items-center justify-center ant-btn-icon-only"
                              >
                                <i
                                  aria-label="icon: copy"
                                  className="anticon anticon-copy"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                    />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="resume-item__actions">
                              <button type="button" className="ant-btn flex items-center">
                                <i
                                  aria-label="icon: download"
                                  className="anticon anticon-download"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="download"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                    />
                                  </svg>
                                </i>
                                <span>Download</span>
                              </button>
                              <a
                                href="/preview/a30e7757-8242-3532-a16b-97abfbeaff4a"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: eye"
                                    className="anticon anticon-eye"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="eye"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Preview</span>
                                </button>
                              </a>
                              <a
                                href="/resumes/edit/a30e7757-8242-3532-a16b-97abfbeaff4a"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: edit"
                                    className="anticon anticon-edit"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="edit"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Edit</span>
                                </button>
                              </a>
                              <div className="">
                                <button type="button" className="ant-btn flex items-center justify-center">
                                  <i
                                    aria-label="icon: global"
                                    className="anticon anticon-global"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="global"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Publish</span>
                                </button>
                              </div>
                              <div className="resume-delete-btn">
                                <button
                                  type="button"
                                  className="ant-btn flex items-center justify-center"
                                >
                                  <i
                                    aria-label="icon: delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="ant-list-item resume-item">
                          <a
                            href="/resumes/edit/eaa42298-10a8-356f-ae40-bf21adc45525"
                          >
                            <img
                              className="resume-item__thumb"
                              src="./Viblo CV_files/367eda4d-bfc3-46e0-9d2d-33f98999f8b4.png"
                            />
                          </a>
                          <div className="resume-item__info">
                            <div className="resume-item__title">
                              <a
                                href="/resumes/edit/eaa42298-10a8-356f-ae40-bf21adc45525"
                              >
                                My
                                Resume
                              </a>
                              <span>
                                <i aria-label="icon: calendar" className="anticon anticon-calendar">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    />
                                  </svg>
                                </i>
                                06/01/2021
                              </span>
                              <span className="ml-10">
                                <i
                                  className="far fa-clock"
                                />
                                18:01
                              </span>
                            </div>
                            <div className="disabled resume-item__url">
                              <input
                                id="cv-url-4178"
                                readOnly={false}
                                value="/preview/eaa42298-10a8-356f-ae40-bf21adc45525"
                              />
                              <button
                                disabled={false}
                                type="button"
                                className="ant-btn flex items-center justify-center ant-btn-icon-only"
                              >
                                <i
                                  aria-label="icon: copy"
                                  className="anticon anticon-copy"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                    />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="resume-item__actions">
                              <button type="button" className="ant-btn flex items-center">
                                <i
                                  aria-label="icon: download"
                                  className="anticon anticon-download"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="download"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                    />
                                  </svg>
                                </i>
                                <span>Download</span>
                              </button>
                              <a
                                href="/preview/eaa42298-10a8-356f-ae40-bf21adc45525"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: eye"
                                    className="anticon anticon-eye"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="eye"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Preview</span>
                                </button>
                              </a>
                              <a
                                href="/resumes/edit/eaa42298-10a8-356f-ae40-bf21adc45525"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: edit"
                                    className="anticon anticon-edit"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="edit"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Edit</span>
                                </button>
                              </a>
                              <div className="">
                                <button type="button" className="ant-btn flex items-center justify-center">
                                  <i
                                    aria-label="icon: global"
                                    className="anticon anticon-global"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="global"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Publish</span>
                                </button>
                              </div>
                              <div className="resume-delete-btn">
                                <button
                                  type="button"
                                  className="ant-btn flex items-center justify-center"
                                >
                                  <i
                                    aria-label="icon: delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="ant-list-item resume-item">
                          <a
                            href="/resumes/edit/d3ad1964-3eff-35a0-90ae-de26a372fcc7"
                          >
                            <img
                              className="resume-item__thumb"
                              src="./Viblo CV_files/9f349a46-2d03-47ea-8153-0f09d5049121.png"
                            />
                          </a>
                          <div className="resume-item__info">
                            <div className="resume-item__title">
                              <a
                                href="/resumes/edit/d3ad1964-3eff-35a0-90ae-de26a372fcc7"
                              >
                                My
                                Resume
                              </a>
                              <span>
                                <i aria-label="icon: calendar" className="anticon anticon-calendar">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    />
                                  </svg>
                                </i>
                                09/11/2020
                              </span>
                              <span className="ml-10">
                                <i
                                  className="far fa-clock"
                                />
                                22:11
                              </span>
                            </div>
                            <div className="disabled resume-item__url">
                              <input
                                id="cv-url-4016"
                                readOnly={false}
                                value="/preview/d3ad1964-3eff-35a0-90ae-de26a372fcc7"
                              />
                              <button
                                disabled={false}
                                type="button"
                                className="ant-btn flex items-center justify-center ant-btn-icon-only"
                              >
                                <i
                                  aria-label="icon: copy"
                                  className="anticon anticon-copy"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                    />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="resume-item__actions">
                              <button type="button" className="ant-btn flex items-center">
                                <i
                                  aria-label="icon: download"
                                  className="anticon anticon-download"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="download"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                    />
                                  </svg>
                                </i>
                                <span>Download</span>
                              </button>
                              <a
                                href="/preview/d3ad1964-3eff-35a0-90ae-de26a372fcc7"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: eye"
                                    className="anticon anticon-eye"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="eye"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Preview</span>
                                </button>
                              </a>
                              <a
                                href="/resumes/edit/d3ad1964-3eff-35a0-90ae-de26a372fcc7"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: edit"
                                    className="anticon anticon-edit"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="edit"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Edit</span>
                                </button>
                              </a>
                              <div className="">
                                <button type="button" className="ant-btn flex items-center justify-center">
                                  <i
                                    aria-label="icon: global"
                                    className="anticon anticon-global"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="global"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Publish</span>
                                </button>
                              </div>
                              <div className="resume-delete-btn">
                                <button
                                  type="button"
                                  className="ant-btn flex items-center justify-center"
                                >
                                  <i
                                    aria-label="icon: delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="ant-list-item resume-item">
                          <a
                            href="/resumes/edit/f2b9928a-8d3d-3401-b104-f68348d29e07"
                          >
                            <img
                              className="resume-item__thumb"
                              src="./Viblo CV_files/70b70dd6-b03f-466b-b281-541f56a5eabc.png"
                            />
                          </a>
                          <div className="resume-item__info">
                            <div className="resume-item__title">
                              <a
                                href="/resumes/edit/f2b9928a-8d3d-3401-b104-f68348d29e07"
                              >
                                My
                                Resume
                              </a>
                              <span>
                                <i aria-label="icon: calendar" className="anticon anticon-calendar">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    />
                                  </svg>
                                </i>
                                05/11/2020
                              </span>
                              <span className="ml-10">
                                <i
                                  className="far fa-clock"
                                />
                                18:11
                              </span>
                            </div>
                            <div className="resume-item__url">
                              <input
                                id="cv-url-3630"
                                readOnly={false}
                                value="/preview/f2b9928a-8d3d-3401-b104-f68348d29e07"
                              />
                              <button
                                type="button"
                                className="ant-btn flex items-center justify-center ant-btn-icon-only"
                              >
                                <i
                                  aria-label="icon: copy"
                                  className="anticon anticon-copy"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                    />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="resume-item__actions">
                              <button type="button" className="ant-btn flex items-center">
                                <i
                                  aria-label="icon: download"
                                  className="anticon anticon-download"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="download"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                    />
                                  </svg>
                                </i>
                                <span>Download</span>
                              </button>
                              <a
                                href="/preview/f2b9928a-8d3d-3401-b104-f68348d29e07"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: eye"
                                    className="anticon anticon-eye"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="eye"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Preview</span>
                                </button>
                              </a>
                              <a
                                href="/resumes/edit/f2b9928a-8d3d-3401-b104-f68348d29e07"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: edit"
                                    className="anticon anticon-edit"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="edit"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Edit</span>
                                </button>
                              </a>
                              <div className="">
                                <button type="button" className="ant-btn flex items-center justify-center">
                                  <i
                                    aria-label="icon: close"
                                    className="anticon anticon-close"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="close"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Unpublish</span>
                                </button>
                              </div>
                              <div className="resume-delete-btn">
                                <button
                                  type="button"
                                  className="ant-btn flex items-center justify-center"
                                >
                                  <i
                                    aria-label="icon: delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="ant-list-item resume-item">
                          <a
                            href="/resumes/edit/611f60f4-c2f6-35e7-99b3-97d5e895c168"
                          >
                            <img
                              className="resume-item__thumb"
                              src="./Viblo CV_files/57e5a92a-b98b-4109-9e94-b56620ba48c5.png"
                            />
                          </a>
                          <div className="resume-item__info">
                            <div className="resume-item__title">
                              <a
                                href="/resumes/edit/611f60f4-c2f6-35e7-99b3-97d5e895c168"
                              >
                                My
                                Resume
                              </a>
                              <span>
                                <i aria-label="icon: calendar" className="anticon anticon-calendar">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    />
                                  </svg>
                                </i>
                                05/11/2020
                              </span>
                              <span className="ml-10">
                                <i
                                  className="far fa-clock"
                                />
                                17:11
                              </span>
                            </div>
                            <div className="disabled resume-item__url">
                              <input
                                id="cv-url-3959"
                                readOnly={false}
                                value="/preview/611f60f4-c2f6-35e7-99b3-97d5e895c168"
                              />
                              <button
                                disabled={false}
                                type="button"
                                className="ant-btn flex items-center justify-center ant-btn-icon-only"
                              >
                                <i
                                  aria-label="icon: copy"
                                  className="anticon anticon-copy"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                    />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="resume-item__actions">
                              <button type="button" className="ant-btn flex items-center">
                                <i
                                  aria-label="icon: download"
                                  className="anticon anticon-download"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="download"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                    />
                                  </svg>
                                </i>
                                <span>Download</span>
                              </button>
                              <a
                                href="/preview/611f60f4-c2f6-35e7-99b3-97d5e895c168"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: eye"
                                    className="anticon anticon-eye"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="eye"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Preview</span>
                                </button>
                              </a>
                              <a
                                href="/resumes/edit/611f60f4-c2f6-35e7-99b3-97d5e895c168"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: edit"
                                    className="anticon anticon-edit"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="edit"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Edit</span>
                                </button>
                              </a>
                              <div className="">
                                <button type="button" className="ant-btn flex items-center justify-center">
                                  <i
                                    aria-label="icon: global"
                                    className="anticon anticon-global"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="global"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Publish</span>
                                </button>
                              </div>
                              <div className="resume-delete-btn">
                                <button
                                  type="button"
                                  className="ant-btn flex items-center justify-center"
                                >
                                  <i
                                    aria-label="icon: delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="ant-list-item resume-item">
                          <a
                            href="/resumes/edit/9aae6fb1-7d89-35bc-917c-7cc53961f292"
                          >
                            <img
                              className="resume-item__thumb"
                              src="./Viblo CV_files/7208edac-9a99-4a8a-92c8-f057dbc012c1.png"
                            />
                          </a>
                          <div className="resume-item__info">
                            <div className="resume-item__title">
                              <a
                                href="/resumes/edit/9aae6fb1-7d89-35bc-917c-7cc53961f292"
                              >
                                My
                                Resume
                              </a>
                              <span>
                                <i aria-label="icon: calendar" className="anticon anticon-calendar">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    />
                                  </svg>
                                </i>
                                13/10/2020
                              </span>
                              <span className="ml-10">
                                <i
                                  className="far fa-clock"
                                />
                                22:10
                              </span>
                            </div>
                            <div className="disabled resume-item__url">
                              <input
                                id="cv-url-3636"
                                readOnly={false}
                                value="/preview/9aae6fb1-7d89-35bc-917c-7cc53961f292"
                              />
                              <button
                                disabled={false}
                                type="button"
                                className="ant-btn flex items-center justify-center ant-btn-icon-only"
                              >
                                <i
                                  aria-label="icon: copy"
                                  className="anticon anticon-copy"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                    />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="resume-item__actions">
                              <button type="button" className="ant-btn flex items-center">
                                <i
                                  aria-label="icon: download"
                                  className="anticon anticon-download"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="download"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                    />
                                  </svg>
                                </i>
                                <span>Download</span>
                              </button>
                              <a
                                href="/preview/9aae6fb1-7d89-35bc-917c-7cc53961f292"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: eye"
                                    className="anticon anticon-eye"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="eye"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Preview</span>
                                </button>
                              </a>
                              <a
                                href="/resumes/edit/9aae6fb1-7d89-35bc-917c-7cc53961f292"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: edit"
                                    className="anticon anticon-edit"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="edit"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Edit</span>
                                </button>
                              </a>
                              <div className="">
                                <button type="button" className="ant-btn flex items-center justify-center">
                                  <i
                                    aria-label="icon: global"
                                    className="anticon anticon-global"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="global"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Publish</span>
                                </button>
                              </div>
                              <div className="resume-delete-btn">
                                <button
                                  type="button"
                                  className="ant-btn flex items-center justify-center"
                                >
                                  <i
                                    aria-label="icon: delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="ant-list-item resume-item">
                          <a
                            href="/resumes/edit/9fe3a392-f077-371c-807a-d4e15584fceb"
                          >
                            <img
                              className="resume-item__thumb"
                              src="./Viblo CV_files/a0403711-05be-40e7-a2aa-464795090180.png"
                            />
                          </a>
                          <div className="resume-item__info">
                            <div className="resume-item__title">
                              <a
                                href="/resumes/edit/9fe3a392-f077-371c-807a-d4e15584fceb"
                              >
                                My
                                Resume
                              </a>
                              <span>
                                <i aria-label="icon: calendar" className="anticon anticon-calendar">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    />
                                  </svg>
                                </i>
                                13/10/2020
                              </span>
                              <span className="ml-10">
                                <i
                                  className="far fa-clock"
                                />
                                22:10
                              </span>
                            </div>
                            <div className="disabled resume-item__url">
                              <input
                                id="cv-url-3635"
                                readOnly={false}
                                value="/preview/9fe3a392-f077-371c-807a-d4e15584fceb"
                              />
                              <button
                                disabled={false}
                                type="button"
                                className="ant-btn flex items-center justify-center ant-btn-icon-only"
                              >
                                <i
                                  aria-label="icon: copy"
                                  className="anticon anticon-copy"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                    />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="resume-item__actions">
                              <button type="button" className="ant-btn flex items-center">
                                <i
                                  aria-label="icon: download"
                                  className="anticon anticon-download"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="download"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                    />
                                  </svg>
                                </i>
                                <span>Download</span>
                              </button>
                              <a
                                href="/preview/9fe3a392-f077-371c-807a-d4e15584fceb"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: eye"
                                    className="anticon anticon-eye"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="eye"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Preview</span>
                                </button>
                              </a>
                              <a
                                href="/resumes/edit/9fe3a392-f077-371c-807a-d4e15584fceb"
                              >
                                <button
                                  type="button"
                                  className="ant-btn flex items-center"
                                >
                                  <i
                                    aria-label="icon: edit"
                                    className="anticon anticon-edit"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="edit"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Edit</span>
                                </button>
                              </a>
                              <div className="">
                                <button type="button" className="ant-btn flex items-center justify-center">
                                  <i
                                    aria-label="icon: global"
                                    className="anticon anticon-global"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="global"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Publish</span>
                                </button>
                              </div>
                              <div className="resume-delete-btn">
                                <button
                                  type="button"
                                  className="ant-btn flex items-center justify-center"
                                >
                                  <i
                                    aria-label="icon: delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className=""
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      />
                                    </svg>
                                  </i>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="my-resumes-list__footer" />
              </div>
            </div>
          </div>
          <a className="button-to-top">
            <div className="border-arrow flex justify-center items-center">
              <span
                role="img"
                aria-label="arrow-up"
                className="anticon anticon-arrow-up"
                style={{ fontSize: 32 }}
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  className=""
                  data-icon="arrow-up"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  )
}
