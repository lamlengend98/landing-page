/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Viblo CV_files/all.css'
import './Viblo CV_files/app.6bdbbe5.css'
import './Viblo CV_files/user.6bdbbe5.css'
import './Viblo CV_files/home.6bdbbe5.css'
import './Viblo CV_files/my-cv.6bdbbe5.css'
import './style.css'
// import { CKEditor } from '@ckeditor/ckeditor5-react/dist/ckeditor'
// import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src'
import Rating from '@material-ui/lab/Rating'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { Alert } from 'react-bootstrap'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { UserInfo } from '../../utils/types/user'
import { initResume } from '../../store/resume/actions'
import { BlankBasic } from '../../components/CV'
import { actionUploadImage } from '../../store/user/actions'
import { data } from './data'
import Printer, { print } from 'react-pdf-print'
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

const ids = ['1']
export const CVEdit = () => {
  const dispatch = useDispatch()
  const user: UserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const [resume, setResume]: any = React.useState(data)
  const ref: any = React.useRef(null)
  const [image, setImage] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState({
    error: false,
    message: '',
  })

  // const userInfo = React.useMemo(() => {
  //   if (resume) {
  //     return resume?.user
  //   }
  // }, [resume])

  React.useEffect(() => {
    ref.current?.setValues(resume)
  }, [resume])

  console.log('====================================')
  console.log('resume', resume)
  console.log('====================================')

  const getData = async () => {
    const id = user._id
    const res = await dispatch(initResume(id))
    // setResume(res)
  }

  React.useEffect(() => {
    getData()
  }, [])

  const onClickAvatar = () => {
    const uploadAvatar = document.getElementById('uploadAvatar')
    uploadAvatar?.click()
  }

  const onUploadAvatar = async (input: any) => {
    const id = resume?._id
    console.log('====================================')
    console.log('input', input?.target?.files[0])
    console.log('====================================')
    // if (input?.target?.files[0]) {
    //   setImage(input?.target?.files[0])
    // }
    const formData = new FormData()
    formData.append('file', input?.target?.files[0])
    setLoading(true)
    console.log('====================================')
    console.log('form', formData)
    console.log('====================================')
    const res: any = await dispatch(actionUploadImage(formData, id))
    console.log('====================================')
    console.log('res', res)
    console.log('====================================')
    if (res?.status === '0') {
      setResume(res?.result?.resume)
      // localStorage.setItem('userInfo', res)
    } else {
      setError({
        error: true,
        message: 'Thất bại',
      })
    }
    setLoading(false)
  }

  React.useEffect(() => {
    if (error.error) {
      setTimeout(() => {
        setError({
          error: false,
          message: '',
        })
      }, 3000)
    }
  })
  return (
    <>
      {error.error
        && <Alert variant="danger" style={{ textAlign: 'center' }}>{error.message}</Alert>}
      <div id="app">
        <div className="app">
          <Header tab="MyCV" />
          <div className="user-layout">
            <div className="user-layout__content">
              <div className="editor" style={{ width: '70%', margin: 'auto' }}>
                <div className="editor__header">
                  <div className="editor-header">
                    <div className="editor-header__input">
                      <p className="editor-header__label">CV Title</p>
                      <input
                        placeholder="Enter something..."
                        type="text"
                        className="ant-input"
                        value="My Resume"
                      />
                    </div>
                    <span className="editor-header__subtitle flex items-center mt-2">
                      <i
                        aria-label="icon: check-circle"
                        className="anticon anticon-check-circle"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className=""
                          data-icon="check-circle"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                          />
                        </svg>
                      </i>
                      <p className="ml-2">
                        <span className="mr-1">Updated on</span>
                        January 6th 2021, 6:50:09 pm
                      </p>
                    </span>
                    <div className="editor-header__btn-group flex flex-row justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          const domElement = document.getElementById("print_area");
                          html2canvas(domElement, {
                            onclone: document => {
                              // document.getElementById("print").style.visibility = "hidden";
                            }
                          }).then(canvas => {
                            const imgData = canvas.toDataURL("image/png");
                            const pdf = new jsPdf();
                            pdf.addImage(imgData, "JPEG", 10, 10);
                            pdf.save(`${new Date().toISOString()}.pdf`);
                          });
                        }}
                        className="ant-btn flex items-center justify-center ant-btn-primary"
                      >
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
                        <button type="button" className="ant-btn flex items-center">
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
                      <div className="cv-btn-status">
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
                    </div>
                  </div>
                </div>
                <div className="editor__wraper">
                  <div className="editor__container">
                    <div className="editor__container__left" id="cv-content-left" style={{ width: 852 }}>
                      <div className="editor__container__sidebar">
                        <div className="editor__sidebar">
                          <div className="side-option">
                            <div className="side-option__item" style={{ display: 'flex', flexDirection: 'row' }}>
                              <div className="option option__false">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="30"
                                  viewBox="0 0 21 30"
                                  fill="none"
                                >
                                  <path
                                    d="M20.3816 5.43219L15.1667 0.217288C15.0276 0.0782236 14.8364 0 14.6452 0H0.738778C0.330277 0 0 0.330277 0 0.738778V28.6646C0 29.0731 0.330277 29.4034 0.738778 29.4034H19.8601C20.2686 29.4034 20.5989 29.0731 20.5989 28.6646V5.95368C20.5989 5.76247 20.5207 5.57126 20.3816 5.43219ZM15.384 2.52054L18.0783 5.21491H15.384V2.52054ZM19.1213 27.9258H1.47756V1.47756H13.9064V5.95368C13.9064 6.36218 14.2367 6.69246 14.6452 6.69246H19.1213V27.9258Z"
                                    fill="#758191"
                                  />
                                  <path
                                    d="M16.3835 8.69159H4.21534C3.80684 8.69159 3.47656 9.02187 3.47656 9.43037V12.907C3.47656 13.3155 3.80684 13.6457 4.21534 13.6457H16.3835C16.792 13.6457 17.1222 13.3155 17.1222 12.907V9.43037C17.1222 9.02187 16.792 8.69159 16.3835 8.69159ZM15.6447 12.1682H4.95412V10.1691H15.6447V12.1682Z"
                                    fill="#758191"
                                  />
                                  <path
                                    d="M7.69194 15.6448H4.21534C3.80684 15.6448 3.47656 15.9751 3.47656 16.3836V21.7114C3.47656 22.12 3.80684 22.4502 4.21534 22.4502H7.69194C8.10045 22.4502 8.43072 22.12 8.43072 21.7114V16.3836C8.43072 15.9751 8.10045 15.6448 7.69194 15.6448ZM6.95317 20.9727H4.95412V17.1223H6.95317V20.9727Z"
                                    fill="#758191"
                                  />
                                  <path
                                    d="M16.3835 15.6448H11.1686C10.7601 15.6448 10.4298 15.9751 10.4298 16.3836V25.1881C10.4298 25.5966 10.7601 25.9268 11.1686 25.9268H16.3835C16.792 25.9268 17.1222 25.5966 17.1222 25.1881V16.3836C17.1222 15.9751 16.792 15.6448 16.3835 15.6448ZM15.6447 24.4493H11.9073V17.1223H15.6447V24.4493Z"
                                    fill="#758191"
                                  />
                                </svg>
                                <p>Templates</p>
                              </div>
                              <div className="option option__false">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="25"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                >
                                  <mask id="path-1-inside-1" fill="white">
                                    <rect width="8" height="25" rx="1" />
                                  </mask>
                                  <rect width="8" height="25" rx="1" stroke="#758191" mask="url(#path-1-inside-1)" />
                                  <mask id="path-2-inside-2" fill="white">
                                    <rect x="10" width="14" height="7" rx="1" />
                                  </mask>
                                  <rect x="10" width="14" height="7" rx="1" stroke="#758191" mask="url(#path-2-inside-2)" />
                                  <mask id="path-3-inside-3" fill="white">
                                    <rect x="10" y="10" width="14" height="15" rx="1" />
                                  </mask>
                                  <rect
                                    x="10"
                                    y="10"
                                    width="14"
                                    height="15"
                                    rx="1"
                                    stroke="#758191"
                                    mask="url(#path-3-inside-3)"
                                  />
                                </svg>
                                <p>Layout</p>
                              </div>
                              <div className="option option__false">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="24"
                                  viewBox="0 0 26 24"
                                  fill="none"
                                >
                                  <path
                                    d="M9.74998 2.25H16.25V5.49999H17.875V0.625H0V5.49999H1.625V2.25H8.12498V21.75H4.87499V23.375H13V21.75H9.74998V2.25Z"
                                    fill="#758191"
                                  />
                                  <path
                                    d="M11.375 7.125V10.375H13V8.75H17.875V21.75H14.625V23.375H22.7499V21.75H19.5V8.75H24.3749V10.375H25.9999V7.125H11.375Z"
                                    fill="#758191"
                                  />
                                </svg>
                                <p>Fonts</p>
                              </div>
                              <div className="option option__false">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="26"
                                  viewBox="0 0 26 26"
                                  fill="none"
                                >
                                  <path
                                    d="M25.2768 17H15.3661L22.375 9.98214C22.6607 9.70536 22.6607 9.24107 22.375 8.96428L17.0357 3.625C16.7589 3.34821 16.2946 3.34821 16.0179 3.625L9 10.6339V0.723214C9 0.321429 8.67857 0 8.27678 0H0.723214C0.321429 0 0 0.321429 0 0.723214V21.5C0 23.9821 2.01786 26 4.5 26H25.2768C25.6786 26 26 25.6786 26 25.2768V17.7232C26 17.3214 25.6786 17 25.2768 17ZM16.5268 5.16071L20.8393 9.48214L17.8571 12.4643L13.5357 8.14286L16.5268 5.16071ZM8.50893 13.1696L12.3393 17H4.66964L8.50893 13.1696ZM1.44643 1.44643H7.5625V5.66964H1.44643V1.44643ZM1.44643 7.10714H7.5625V11.3304H1.44643V7.10714ZM1.44643 12.7768H6.86607L1.44643 18.1875V12.7768ZM7.55357 24.5536H4.5C2.8125 24.5536 1.44643 23.1786 1.44643 21.5C1.44643 19.8214 2.82143 18.4464 4.5 18.4464H7.55357V24.5536ZM13.2232 24.5536H9V18.4375H13.2232V24.5536ZM9.52678 12.1518L12.5179 9.16071L16.8393 13.4821L13.8571 16.4732L9.52678 12.1518ZM18.8929 24.5536H14.6696V18.4375H18.8929V24.5536ZM24.5536 24.5536H20.3304V18.4375H24.5536V24.5536Z"
                                    fill="#758191"
                                  />
                                  <path d="M5.17855 20.8214H3.82141V22.1786H5.17855V20.8214Z" fill="#758191" />
                                </svg>
                                <p>Themes</p>
                              </div>
                              <div className="side-option__slider" />
                            </div>
                          </div>
                          <div
                            className="side-option__wraper"
                            id="option-wrapper"
                            style={{ width: 0, zIndex: 0, display: 'none' }}
                          >
                            <div
                              className="side-option__content"
                              style={{
                                width: 0, height: 0, padding: 0, transition: 'ease 0s',
                              }}
                            >
                              <span
                                className="side-option__close-btn"
                              >
                                <i
                                  aria-label="icon: close-circle"
                                  className="anticon anticon-close-circle"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="close-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                                    />
                                    <path
                                      d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <div className="template-list static">
                                <div className="share-header ">
                                  <div className="share-header__title">Templates</div>
                                  <div className="share-header__content">
                                    <div className="ant-row template-list__content overflow-y-auto">
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/black-basic.9f635c6.jpg"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center template-item__focus">
                                        <div className="template-item">
                                          <img
                                            className="template-item__icon"
                                            src="./Viblo CV_files/icon-tick.a3364cb.png"
                                          />
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/outbreak.f1aea19.jpg"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/retro.90d180c.jpg"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/green.5f8f362.jpg"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/modern-dark-basic.482963c.jpg"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/cv_01_thumb.88048ee.png"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/cv_02_thumb.dc1dcea.png"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/cv_04_thumb.3b428f2.png"
                                          />
                                        </div>
                                      </div>
                                      <div className="ant-col cursor-pointer flex self-center ">
                                        <div className="template-item">
                                          <img
                                            className="template-thumbnail"
                                            src="./Viblo CV_files/cv_05_thumb.d17b413.png"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="side-option__content"
                              style={{
                                width: 0, height: 0, padding: 0, transition: 'ease 0s',
                              }}
                            >
                              <span
                                className="side-option__close-btn"
                              >
                                <i
                                  aria-label="icon: close-circle"
                                  className="anticon anticon-close-circle"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="close-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                                    />
                                    <path
                                      d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <div className="cv-layout-container">
                                <div className="share-header ">
                                  <div className="share-header__title" />
                                  <div className="share-header__content">
                                    <div className="cv-layout">
                                      <div className="cv-layout__content">
                                        <p className="cv-layout__label">Main Layout</p>
                                        <div className="cv-layout__content__container">
                                          <div className="row-container">
                                            <div className="row-tool-layout">
                                              <div className="row-tool-layout__button btn-up">
                                                <i className="fa fa-chevron-up" />
                                              </div>
                                              <div className="row-tool-layout__button btn-down">
                                                <i
                                                  className="fa fa-chevron-down"
                                                />
                                              </div>
                                            </div>
                                            <div className="double-column-container row-container__section">
                                              <div
                                                data-rbd-droppable-id="0-left-DoubleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="double-column-container__wrapper row-container__section__wrapper "
                                                data-row-id="0-left-DoubleColumn"
                                              >
                                                <div
                                                  className="double-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-left-Information"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-left-Information"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Information</span>
                                                </div>
                                                <div
                                                  className="double-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-1-left-Contact"
                                                  data-rbd-drag-handle-draggable-id="draggable-1-left-Contact"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Contact</span>
                                                </div>
                                              </div>
                                              <div
                                                data-rbd-droppable-id="0-right-DoubleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="double-column-container__wrapper row-container__section__wrapper "
                                                data-row-id="0-right-DoubleColumn"
                                              >
                                                <div
                                                  className="double-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-right-Avatar"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-right-Avatar"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Avatar</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="remove">
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
                                            </div>
                                          </div>
                                          <div className="row-container">
                                            <div className="row-tool-layout">
                                              <div className="row-tool-layout__button btn-up">
                                                <i className="fa fa-chevron-up" />
                                              </div>
                                              <div className="row-tool-layout__button btn-down">
                                                <i
                                                  className="fa fa-chevron-down"
                                                />
                                              </div>
                                            </div>
                                            <div className="double-column-container row-container__section">
                                              <div
                                                data-rbd-droppable-id="1-left-DoubleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="double-column-container__wrapper row-container__section__wrapper "
                                                data-row-id="1-left-DoubleColumn"
                                              >
                                                <div
                                                  className="double-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-left-CareerGoal"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-left-CareerGoal"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>CareerGoal</span>
                                                </div>
                                                <div
                                                  className="double-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-1-left-Education"
                                                  data-rbd-drag-handle-draggable-id="draggable-1-left-Education"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Education</span>
                                                </div>
                                              </div>
                                              <div
                                                data-rbd-droppable-id="1-right-DoubleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="double-column-container__wrapper row-container__section__wrapper "
                                                data-row-id="1-right-DoubleColumn"
                                              >
                                                <div
                                                  className="double-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-right-Experience"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-right-Experience"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Experience</span>
                                                </div>
                                                <div
                                                  className="double-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-1-right-Project"
                                                  data-rbd-drag-handle-draggable-id="draggable-1-right-Project"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Project</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="remove">
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
                                            </div>
                                          </div>
                                          <div className="row-container">
                                            <div className="row-tool-layout">
                                              <div className="row-tool-layout__button btn-up">
                                                <i className="fa fa-chevron-up" />
                                              </div>
                                              <div className="row-tool-layout__button btn-down">
                                                <i
                                                  className="fa fa-chevron-down"
                                                />
                                              </div>
                                            </div>
                                            <div className="single-column-container row-container__section">
                                              <div
                                                data-rbd-droppable-id="2-left-SingleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="row-container__section__wrapper single-column-container__wrapper"
                                                data-row-id="2-left-SingleColumn"
                                              >
                                                <div
                                                  className="row-container__section__wrapper__item single-column-container__wrapper__item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-left-Achievement"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-left-Achievement"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Achievement</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="remove">
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
                                            </div>
                                          </div>
                                          <div className="row-container">
                                            <div className="row-tool-layout">
                                              <div className="row-tool-layout__button btn-up">
                                                <i className="fa fa-chevron-up" />
                                              </div>
                                              <div className="row-tool-layout__button btn-down">
                                                <i
                                                  className="fa fa-chevron-down"
                                                />
                                              </div>
                                            </div>
                                            <div className="triple-column-container row-container__section">
                                              <div
                                                data-rbd-droppable-id="3-left-TripleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="triple-column-container__wrapper row-container__section__wrapper "
                                                data-row-id="3-left-TripleColumn"
                                              >
                                                <div
                                                  className="triple-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-left-Skill"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-left-Skill"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Skill</span>
                                                </div>
                                              </div>
                                              <div
                                                data-rbd-droppable-id="3-middle-TripleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="triple-column-container__wrapper row-container__section__wrapper "
                                                data-row-id="3-middle-TripleColumn"
                                              >
                                                <div
                                                  className="triple-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-middle-Language"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-middle-Language"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Language</span>
                                                </div>
                                              </div>
                                              <div
                                                data-rbd-droppable-id="3-right-TripleColumn"
                                                data-rbd-droppable-context-id="1"
                                                className="triple-column-container__wrapper row-container__section__wrapper "
                                                data-row-id="3-right-TripleColumn"
                                              >
                                                <div
                                                  className="triple-column-container__wrapper row-container__section__wrapper__item __item"
                                                  data-rbd-draggable-context-id="1"
                                                  data-rbd-draggable-id="draggable-0-right-Hobby"
                                                  data-rbd-drag-handle-draggable-id="draggable-0-right-Hobby"
                                                  data-rbd-drag-handle-context-id="1"
                                                  aria-labelledby="rbd-lift-instruction-1"
                                                  draggable="false"
                                                >
                                                  <span>Hobby</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="remove">
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
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cv-layout__content__add-btn">
                                          <i
                                            aria-label="icon: plus"
                                            className="anticon anticon-plus"
                                          >
                                            <svg
                                              viewBox="64 64 896 896"
                                              focusable="false"
                                              className=""
                                              data-icon="plus"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                            >
                                              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                            </svg>
                                          </i>
                                        </div>
                                      </div>
                                      <div className="cv-layout__available">
                                        <p className="cv-layout__label">Not Show</p>
                                        <div
                                          data-rbd-droppable-id="available"
                                          data-rbd-droppable-context-id="1"
                                          className="cv-layout__available__content"
                                        >
                                          <div
                                            className="cv-layout__available__content__item"
                                            data-rbd-draggable-context-id="1"
                                            data-rbd-draggable-id="item-0-Certificate"
                                            data-rbd-drag-handle-draggable-id="item-0-Certificate"
                                            data-rbd-drag-handle-context-id="1"
                                            aria-labelledby="rbd-lift-instruction-1"
                                            draggable="false"
                                          >
                                            Certificate
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="side-option__content"
                              style={{
                                width: 0, height: 0, padding: 0, transition: 'ease 0s',
                              }}
                            >
                              <span
                                className="side-option__close-btn"
                              >
                                <i
                                  aria-label="icon: close-circle"
                                  className="anticon anticon-close-circle"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="close-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                                    />
                                    <path
                                      d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <div className="font">
                                <div className="share-header setting-font">
                                  <div className="share-header__title">Fonts</div>
                                  {/* <div className="share-header__content">
                                  <div className="flex flex-col">
                                    <div className="flex w-full justify-between mb-3 border-b border-gray-400">
                                      <div className="ml-2 text-lg"></div>
                                    </div>
                                    <div className="w-100 setting-font__list">
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: &quot;Segoe UI&quot;;">Segoe UI</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: &quot;Hiragino Sans GB&quot;;">Hiragino Sans GB</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: sans-serif;">Sans Serif</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: monospace;">Monospace</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: &quot;Microsoft YaHei&quot;;">Microsoft YaHei</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: &quot;Apple Color Emoji&quot;;">Apple Color Emoji</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div className="ml-2 cursor-pointer text-lg
                            ">Baloo 2</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div className="ml-2 cursor-pointer text-lg
                            ">Baloo Da 2</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: Sen;">Sen</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: Oswald;">Oswald</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: Raleway;">Raleway</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: &quot;Roboto Slab&quot;;">Roboto Slab</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: &quot;Playfair Display&quot;;">Playfair Display</div>
                                      </div>
                                      <div className="flex justify-between hover:text-orange-400">
                                        <div class="ml-2 cursor-pointer text-lg
                            " style="font-family: Gotu;">Gotu</div>
                                      </div>
                                    </div>
                                    <div className="flex w-full mt-3 border-t border-gray-400"><input
                                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                      type="text" placeholder="Search for font..." /></div>
                                  </div>
                                </div> */}
                                </div>
                                <div className="share-header fontsize">
                                  <div className="share-header__title">Font Size</div>
                                  <div className="share-header__content">
                                    <div className="mt-2">
                                      <div className="ant-radio-group ant-radio-group-outline">
                                        <span
                                          style={{ display: 'block', height: 30, lineHeight: 30 }}
                                        >
                                          <label
                                            className="ant-radio-wrapper"
                                          >
                                            <span className="ant-radio">
                                              <input
                                                type="radio"
                                                className="ant-radio-input"
                                                value="editor__nano"
                                              />
                                              <span
                                                className="ant-radio-inner"
                                              />
                                            </span>
                                            <span>Nano</span>
                                          </label>
                                        </span>
                                        <span
                                          style={{ display: 'block', height: 30, lineHeight: 30 }}
                                        >
                                          <label
                                            className="ant-radio-wrapper"
                                          >
                                            <span className="ant-radio">
                                              <input
                                                type="radio"
                                                className="ant-radio-input"
                                                value="editor__mini"
                                              />
                                              <span
                                                className="ant-radio-inner"
                                              />
                                            </span>
                                            <span>Mini</span>
                                          </label>
                                        </span>
                                        <span
                                          style={{ display: 'block', height: 30, lineHeight: 30 }}
                                        >
                                          <label
                                            className="ant-radio-wrapper ant-radio-wrapper-checked"
                                          >
                                            <span
                                              className="ant-radio ant-radio-checked"
                                            >
                                              <input
                                                type="radio"
                                                className="ant-radio-input"
                                                value="editor__tiny"
                                                checked={false}
                                              />
                                              <span
                                                className="ant-radio-inner"
                                              />
                                            </span>
                                            <span>Tiny</span>
                                          </label>
                                        </span>
                                        <span
                                          style={{ display: 'block', height: 30, lineHeight: 30 }}
                                        >
                                          <label
                                            className="ant-radio-wrapper"
                                          >
                                            <span className="ant-radio">
                                              <input
                                                type="radio"
                                                className="ant-radio-input"
                                                value="editor__small"
                                              />
                                              <span
                                                className="ant-radio-inner"
                                              />
                                            </span>
                                            <span>Small</span>
                                          </label>
                                        </span>
                                        <span
                                          style={{ display: 'block', height: 30, lineHeight: 30 }}
                                        >
                                          <label
                                            className="ant-radio-wrapper"
                                          >
                                            <span className="ant-radio">
                                              <input
                                                type="radio"
                                                className="ant-radio-input"
                                                value="editor__medium"
                                              />
                                              <span
                                                className="ant-radio-inner"
                                              />
                                            </span>
                                            <span>Medium</span>
                                          </label>
                                        </span>
                                        <span
                                          style={{ display: 'block', height: 30, lineHeight: 30 }}
                                        >
                                          <label
                                            className="ant-radio-wrapper"
                                          >
                                            <span className="ant-radio">
                                              <input
                                                type="radio"
                                                className="ant-radio-input"
                                                value="editor__large"
                                              />
                                              <span
                                                className="ant-radio-inner"
                                              />
                                            </span>
                                            <span>Large</span>
                                          </label>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="side-option__content"
                              style={{
                                width: 0, height: 0, padding: 0, transition: 'ease 0s',
                              }}
                            >
                              <span
                                className="side-option__close-btn"
                              >
                                <i
                                  aria-label="icon: close-circle"
                                  className="anticon anticon-close-circle"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="close-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                                    />
                                    <path
                                      d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <div className="theme">
                                <div className="share-header ">
                                  <div className="share-header__title">Themes</div>
                                  <div className="share-header__content">
                                    <div className="theme__content ant-row flex flex-col">
                                      <div className="theme">
                                        <div className="theme__color-container">
                                          <div className="theme__title">
                                            <p>Themes</p>
                                          </div>
                                          <div className="flex flex-wrap">
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(255, 168, 168)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(255, 173, 97)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(255, 235, 54)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(163, 226, 28)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(46, 175, 0)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(36, 255, 216)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(37, 216, 255)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(71, 167, 255)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(98, 72, 255)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(213, 124, 255)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(255, 115, 199)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(255, 141, 162)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                            <span
                                              className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                              style={{ backgroundColor: 'rgb(0, 0, 0)' }}
                                            >
                                              <div className="flex justify-center items-center h-full">
                                                <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                                />
                                              </div>
                                            </span>
                                          </div>
                                          <div className="theme__custom">
                                            <div className="custom-color">
                                              <div className="button-custom button">+</div>
                                              <div className="button-reset button"><span>Reset</span></div>
                                            </div>
                                            <div className="theme__custom__color-picker theme__color__hide">
                                              <div className="title"><span>x</span></div>
                                              <div
                                                className="sketch-picker "
                                                style={{
                                                  width: 200, padding: 10, boxSizing: 'initial', background: 'rgb(255, 255, 255)', borderRadius: 4,
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    width: '100%', paddingBottom: '75%', position: 'relative', overflow: 'hidden',
                                                  }}
                                                >
                                                  <div style={{ position: 'absolute', inset: 0, background: 'rgb(255,0,0)' }}>
                                                    <div className="saturation-white" style={{ position: 'absolute', inset: 0 }} />
                                                    <div className="saturation-black" style={{ position: 'absolute', inset: 0 }} />
                                                    <div
                                                      style={{
                                                        position: 'absolute', top: '100%', left: 0, cursor: 'default',
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: 4, height: 4, borderRadius: '50%', transform: 'translate(-2, -2)',
                                                        }}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flexbox-fix" style={{ display: 'flex' }}>
                                                <div style={{ padding: 4, WebkitBoxFlex: 1, flex: 1 }}>
                                                  <div style={{ position: 'relative', height: 10, overflow: 'hidden' }}>
                                                    <div style={{ position: 'absolute', inset: 0 }}>
                                                      <div
                                                        className="hue-horizontal"
                                                        style={{ padding: 2, position: 'relative', height: '100%' }}
                                                      >
                                                        <div style={{ position: 'absolute', left: '0%' }}>
                                                          <div
                                                            style={{
                                                              marginTop: 1, width: 4, borderRadius: 1, height: 8, background: 'rgb(255, 255, 255)', transform: 'translateX(-2)',
                                                            }}
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    style={{
                                                      position: 'relative', height: 10, marginTop: 4, overflow: 'hidden',
                                                    }}
                                                  >
                                                    <div style={{ position: 'absolute', inset: 0 }}>
                                                      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                                                        <div
                                                          style={{ position: 'absolute', inset: 0 }}
                                                        />
                                                      </div>
                                                      <div
                                                        style={{ position: 'absolute', inset: 0 }}
                                                      />
                                                      <div style={{
                                                        position: 'relative', height: '100%', marginLeft: 3, marginRight: 3,
                                                      }}
                                                      >
                                                        <div style={{ position: 'absolute', left: '100%' }}>
                                                          <div
                                                            style={{
                                                              width: 4, borderRadius: 1, height: 8, background: 'rgb(255, 255, 255)', marginTop: 1, transform: 'translateX(-2)',
                                                            }}
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  style={{
                                                    width: 24, height: 24, position: 'relative', marginTop: 4, marginLeft: 4, borderRadius: 3,
                                                  }}
                                                >
                                                  <div
                                                    style={{ position: 'absolute', inset: 0 }}
                                                  />
                                                  <div
                                                    style={{
                                                      position: 'absolute', inset: 0, borderRadius: 2, background: 'rgb(0, 0, 0)',
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="flexbox-fix" style={{ display: 'flex', paddingTop: 4 }}>
                                                <div style={{ WebkitBoxFlex: 2, flex: 2 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="000000"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize',
                                                      }}
                                                    >
                                                      hex
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="0"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      r
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="0"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      g
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="0"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      b
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="100"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      a
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="flexbox-fix"
                                                style={{
                                                  paddingTop: 10, paddingLeft: 10, borderTopWidth: 1, borderTopColor: 'rgb(238, 238, 238)', display: 'flex', flexWrap: 'wrap', position: 'relative',
                                                }}
                                              >
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#580F13"
                                                      style={{
                                                        background: 'rgb(88, 15, 19)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FEAC2E"
                                                      style={{
                                                        background: 'rgb(254, 172, 46)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FEC931"
                                                      style={{
                                                        background: 'rgb(254, 201, 49)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#0C30FA"
                                                      style={{
                                                        background: 'rgb(12, 48, 250)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#29FD51"
                                                      style={{
                                                        background: 'rgb(41, 253, 81)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#F923CB"
                                                      style={{
                                                        background: 'rgb(249, 35, 203)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FE1374"
                                                      style={{
                                                        background: 'rgb(254, 19, 116)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FFA8A8"
                                                      style={{
                                                        background: 'rgb(255, 168, 168)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FD4021"
                                                      style={{
                                                        background: 'rgb(253, 64, 33)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#3224F3"
                                                      style={{
                                                        background: 'rgb(50, 36, 243)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#1FA7F8"
                                                      style={{
                                                        background: 'rgb(31, 167, 248)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FFFFFF"
                                                      style={{
                                                        background: 'rgb(255, 255, 255)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="theme__background-container">
                                        <div className="theme__background-color-picker">
                                          <div className="theme__background-color-picker__label">Background Color</div>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(255, 168, 168, 0.376)', borderWidth: 1, borderColor: 'rgba(255, 168, 168, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(255, 173, 97, 0.376)', borderWidth: 1, borderColor: 'rgba(255, 173, 97, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(255, 235, 54, 0.376)', borderWidth: 1, borderColor: 'rgba(255, 235, 54, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(163, 226, 28, 0.376)', borderWidth: 1, borderColor: 'rgba(163, 226, 28, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(46, 175, 0, 0.376)', borderWidth: 1, borderColor: 'rgba(46, 175, 0, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(36, 255, 216, 0.376)', borderWidth: 1, borderColor: 'rgba(36, 255, 216, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(37, 216, 255, 0.376)', borderWidth: 1, borderColor: 'rgba(37, 216, 255, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(71, 167, 255, 0.376)', borderWidth: 1, borderColor: 'rgba(71, 167, 255, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(98, 72, 255, 0.376)', borderWidth: 1, borderColor: 'rgba(98, 72, 255, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(213, 124, 255, 0.376)', borderWidth: 1, borderColor: 'rgba(213, 124, 255, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(255, 115, 199, 0.376)', borderWidth: 1, borderColor: 'rgba(255, 115, 199, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(255, 141, 162, 0.376)', borderWidth: 1, borderColor: 'rgba(255, 141, 162, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                          <span
                                            className="cv-theme mb-2 cursor-pointer rounded-full inline-block w-8 h-8 mx-1 align-middle"
                                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.376)', borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.376)' }}
                                          >
                                            <div className="flex justify-center items-center h-full">
                                              <i className="hidden
                        theme-active fa fa-check
                        text-white"
                                              />
                                            </div>
                                          </span>
                                        </div>
                                        <div className="theme__custom">
                                          <div className="custom-color">
                                            <div className="button-custom button">+</div>
                                            <div className="button-reset button"><span>Reset</span></div>
                                          </div>
                                          <div className="theme__custom__color-picker theme__background__hide">
                                            <div className="title"><span>x</span></div>
                                            <div
                                              className="sketch-picker "
                                              style={{
                                                width: 200, padding: 10, boxSizing: 'initial', background: 'rgb(255, 255, 255)', borderRadius: 4,
                                              }}
                                            >
                                              <div
                                                style={{
                                                  width: '100%', paddingBottom: '75%', position: 'relative', overflow: 'hidden',
                                                }}
                                              >
                                                <div style={{ position: 'absolute', inset: 0, background: 'rgb(255,0,0)' }}>
                                                  <div className="saturation-white" style={{ position: 'absolute', inset: 0 }}>
                                                    <div className="saturation-black" style={{ position: 'absolute', inset: 0 }} />
                                                    <div
                                                      style={{
                                                        position: 'absolute', top: '100%', left: 0, cursor: 'default',
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          width: 4, height: 4, borderRadius: '50%', transform: 'translate(-2, -2)',
                                                        }}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flexbox-fix" style={{ display: 'flex' }}>
                                                <div style={{ padding: 4, WebkitBoxFlex: 1, flex: 1 }}>
                                                  <div style={{ position: 'relative', height: 10, overflow: 'hidden' }}>
                                                    <div style={{ position: 'absolute', inset: 0 }}>
                                                      <div
                                                        className="hue-horizontal"
                                                        style={{ padding: 2, position: 'relative', height: '100%' }}
                                                      >
                                                        <div style={{ position: 'absolute', left: '0%' }}>
                                                          <div
                                                            style={{
                                                              marginTop: 1, width: 4, borderRadius: 1, height: 8, background: 'rgb(255, 255, 255)', transform: 'translateX(-2)',
                                                            }}
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flexbox-fix" style={{ display: 'flex', paddingTop: 4 }}>
                                                <div style={{ WebkitBoxFlex: 2, flex: 2 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="000000"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize',
                                                      }}
                                                    >
                                                      hex
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="0"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      r
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="0"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      g
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="0"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      b
                                                    </span>
                                                  </div>
                                                </div>
                                                <div style={{ WebkitBoxFlex: 1, flex: 1, paddingLeft: 6 }}>
                                                  <div style={{ position: 'relative' }}>
                                                    <input
                                                      spellCheck={false}
                                                      value="100"
                                                      style={{
                                                        width: 80, padding: 4, border: 'none', fontSize: 11,
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        display: 'block', textAlign: 'center', fontSize: 11, color: 'rgb(34, 34, 34)', paddingTop: 3, paddingBottom: 4, textTransform: 'capitalize', cursor: 'ew-resize',
                                                      }}
                                                    >
                                                      a
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="flexbox-fix"
                                                style={{
                                                  paddingTop: 10, paddingLeft: 10, borderTopWidth: 1, borderTopColor: 'rgb(238, 238, 238)', display: 'flex', flexWrap: 'wrap', position: 'relative',
                                                }}
                                              >
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#580F13"
                                                      style={{
                                                        background: 'rgb(88, 15, 19)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FEAC2E"
                                                      style={{
                                                        background: 'rgb(254, 172, 46)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FEC931"
                                                      style={{
                                                        background: 'rgb(254, 201, 49)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#0C30FA"
                                                      style={{
                                                        background: 'rgb(12, 48, 250)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#29FD51"
                                                      style={{
                                                        background: 'rgb(41, 253, 81)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#F923CB"
                                                      style={{
                                                        background: 'rgb(249, 35, 203)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FE1374"
                                                      style={{
                                                        background: 'rgb(254, 19, 116)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FFA8A8"
                                                      style={{
                                                        background: 'rgb(255, 168, 168)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FD4021"
                                                      style={{
                                                        background: 'rgb(253, 64, 33)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#3224F3"
                                                      style={{
                                                        background: 'rgb(50, 36, 243)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#1FA7F8"
                                                      style={{
                                                        background: 'rgb(31, 167, 248)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                                <div style={{ width: 16, height: 16, margin: 10 }}>
                                                  <span>
                                                    <div
                                                      title="#FFFFFF"
                                                      style={{
                                                        background: 'rgb(255, 255, 255)', height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none', borderRadius: 3,
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="background mt-2">
                                      <div className="share-header ">
                                        <div className="share-header__title">Background</div>
                                        <div className="share-header__content">
                                          <div className="background__content flex flex-wrap">
                                            <div
                                              className="cv-background background__item relative rounded-sm border border-gray-600 h-12 w-24 cursor-pointer active:border"
                                              style={{ backgroundImage: 'url(/assets/webpack/bg-01.c760e4b.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                                            >
                                              <div className="hidden background-active">
                                                <span
                                                  role="img"
                                                  aria-label="check"
                                                  className="anticon anticon-check"
                                                >
                                                  <svg
                                                    viewBox="64 64 896 896"
                                                    focusable="false"
                                                    className=""
                                                    data-icon="check"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                  >
                                                    <path
                                                      d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                                                    />
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                            <div
                                              className="cv-background background__item relative rounded-sm border border-gray-600 h-12 w-24 cursor-pointer active:border"
                                              style={{ backgroundImage: 'url(/assets/webpack/bg-02.1380b58.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                                            >
                                              <div className="hidden background-active">
                                                <span
                                                  role="img"
                                                  aria-label="check"
                                                  className="anticon anticon-check"
                                                >
                                                  <svg
                                                    viewBox="64 64 896 896"
                                                    focusable="false"
                                                    className=""
                                                    data-icon="check"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                  >
                                                    <path
                                                      d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                                                    />
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                            <div
                                              className="cv-background background__item relative rounded-sm border border-gray-600 h-12 w-24 cursor-pointer active:border"
                                              style={{ backgroundImage: 'url(/assets/webpack/bg-03.d6c3916.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                                            >
                                              <div className="hidden background-active">
                                                <span
                                                  role="img"
                                                  aria-label="check"
                                                  className="anticon anticon-check"
                                                >
                                                  <svg
                                                    viewBox="64 64 896 896"
                                                    focusable="false"
                                                    className=""
                                                    data-icon="check"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                  >
                                                    <path
                                                      d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                                                    />
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="upload-background">
                                            <div className="flex justify-between">
                                              <div className="button-upload-bg button flex items-center cursor-pointer">
                                                <span
                                                  role="img"
                                                  aria-label="plus"
                                                  className="anticon anticon-plus"
                                                >
                                                  <svg
                                                    viewBox="64 64 896 896"
                                                    focusable="false"
                                                    className=""
                                                    data-icon="plus"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                  >
                                                    <defs>
                                                      <style />
                                                    </defs>
                                                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                                    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                                  </svg>
                                                </span>
                                              </div>
                                              <div className="button-reset button flex items-center cursor-pointer">
                                                <span>Reset</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="editor__cv">

                      <Printer>
                        <div
                          className="cv editor__tiny outbreak"
                          style={{ backgroundPosition: 'center', backgroundSize: 'cover', margin: '20 auto' }}
                        >
                          <div
                            id="print_area">
                            <Formik innerRef={ref} initialValues={resume} onSubmit={() => { }}>
                              {({
                                values, handleChange, setFieldValue,
                              }) => (
                                <BlankBasic {...{
                                  loading,
                                  userInfo: values,
                                  onClickAvatar,
                                  handleChange,
                                  setFieldValue,
                                  onUploadAvatar,
                                }}
                                />
                              )}
                            </Formik>
                          </div>
                          {/* <OutBreak userInfo={userInfo} onUploadAvatar={onUploadAvatar} /> */}

                        </div>
                      </Printer>
                    </div>
                  </div>
                  <div className="editor__container__right" id="cv-content-right" style={{ display: 'block' }}>
                    <div className="editor__tip">
                      <div className="side-tip" />
                    </div>
                  </div>
                </div>
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
          <Footer />
        </div>
      </div>
      <textarea style={{
        letterSpacing: 'normal', lineHeight: 1.6, paddingTop: 0, paddingBottom: 0, minHeight: 0, maxHeight: 0, height: 0, visibility: 'hidden', overflow: 'hidden', position: 'absolute', zIndex: -1000, top: 0, right: 0,
      }}
      />
      <div
        id="rbd-announcement-1"
        aria-live="assertive"
        role="log"
        aria-atomic="true"
        style={{
          position: 'absolute', width: 1, height: 1, margin: -1, border: 0, padding: 0, overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(100%)',
        }}
      />
      <div id="rbd-lift-instruction-1" style={{ display: 'none' }}>
        Draggable item. Ensure your screen reader is not in browse
        mode and then press space bar to lift.
      </div>
      <div className="ck ck-reset_all ck-body ck-rounded-corners" dir="ltr">
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-balloon-panel_with-arrow" style={{ top: 0, left: 0 }}>
          <div className="ck ck-balloon-rotator" z-index="-1">
            <div className="ck-balloon-rotator__navigation ck-hidden">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ef2ed4c6d401c29c0c66bffaec0e110f4"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Previous</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ef2ed4c6d401c29c0c66bffaec0e110f4"
                >
                  Previous
                </span>
              </button>
              <span
                className="ck-balloon-rotator__counter"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e161ac2a7adcd39eb69edbf8236680ab3"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Next</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e161ac2a7adcd39eb69edbf8236680ab3"
                >
                  Next
                </span>
              </button>
            </div>
            <div className="ck-balloon-rotator__content" />
          </div>
        </div>
        <div
          className="ck-fake-panel ck-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
          }}
        />
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-toolbar-container" style={{ top: 0, left: 0 }}>
          <div className="ck ck-toolbar ck-toolbar_floating" role="toolbar" aria-label="Editor toolbar">
            <div className="ck ck-toolbar__items">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e607f60918f3130607d584e74a55d40bd"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bold
                    (⌘B)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e607f60918f3130607d584e74a55d40bd"
                >
                  Bold
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_eab0b20bcda6c273cfd4d7ca1dc0d1236"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Italic
                    (⌘I)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_eab0b20bcda6c273cfd4d7ca1dc0d1236"
                >
                  Italic
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e13f45a38ccc89d5d6704fd644752cc4a"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Link
                    (⌘K)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e13f45a38ccc89d5d6704fd644752cc4a"
                >
                  Link
                </span>
              </button>
              <span
                className="ck ck-toolbar__separator"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e92eb44396768afce82c63bb61d2aba6b"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bulleted
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e92eb44396768afce82c63bb61d2aba6b"
                >
                  Bulleted List
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_eb4dca079fc60dead05f8309097c98e45"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Numbered
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_eb4dca079fc60dead05f8309097c98e45"
                >
                  Numbered List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ck ck-reset_all ck-body ck-rounded-corners" dir="ltr">
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-balloon-panel_with-arrow" style={{ top: 0, left: 0 }}>
          <div className="ck ck-balloon-rotator" z-index="-1">
            <div className="ck-balloon-rotator__navigation ck-hidden">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e6c7b6bdd04e3889451d2518a93581bbb"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Previous</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e6c7b6bdd04e3889451d2518a93581bbb"
                >
                  Previous
                </span>
              </button>
              <span
                className="ck-balloon-rotator__counter"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e6cdc750ad38091303c1a6e4217ba1e8c"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Next</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e6cdc750ad38091303c1a6e4217ba1e8c"
                >
                  Next
                </span>
              </button>
            </div>
            <div className="ck-balloon-rotator__content" />
          </div>
        </div>
        <div
          className="ck-fake-panel ck-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
          }}
        />
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-toolbar-container" style={{ top: 0, left: 0 }}>
          <div className="ck ck-toolbar ck-toolbar_floating" role="toolbar" aria-label="Editor toolbar">
            <div className="ck ck-toolbar__items">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ee0cbc08ee49f46418f17a56859d6fefc"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bold
                    (⌘B)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ee0cbc08ee49f46418f17a56859d6fefc"
                >
                  Bold
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_eaa459691130aeca5fe546db3a4bc09ce"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Italic
                    (⌘I)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_eaa459691130aeca5fe546db3a4bc09ce"
                >
                  Italic
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e66ff99b19eab04cdccf4e30dff16b216"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Link
                    (⌘K)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e66ff99b19eab04cdccf4e30dff16b216"
                >
                  Link
                </span>
              </button>
              <span
                className="ck ck-toolbar__separator"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ed3ac5854a8893b507eb45fad4cf9c729"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bulleted
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ed3ac5854a8893b507eb45fad4cf9c729"
                >
                  Bulleted List
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e4f97f87fabfeb8ca7c93c96494145662"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Numbered
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e4f97f87fabfeb8ca7c93c96494145662"
                >
                  Numbered List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ck ck-reset_all ck-body ck-rounded-corners" dir="ltr">
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-balloon-panel_with-arrow" style={{ top: 0, left: 0 }}>
          <div className="ck ck-balloon-rotator" z-index="-1">
            <div className="ck-balloon-rotator__navigation ck-hidden">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e91314ef7ceb5f070eb75dd244de02436"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Previous</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e91314ef7ceb5f070eb75dd244de02436"
                >
                  Previous
                </span>
              </button>
              <span
                className="ck-balloon-rotator__counter"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e8257310e3bbb5b789014229a7b4a5a5a"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Next</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e8257310e3bbb5b789014229a7b4a5a5a"
                >
                  Next
                </span>
              </button>
            </div>
            <div className="ck-balloon-rotator__content" />
          </div>
        </div>
        <div
          className="ck-fake-panel ck-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
          }}
        />
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-toolbar-container" style={{ top: 0, left: 0 }}>
          <div className="ck ck-toolbar ck-toolbar_floating" role="toolbar" aria-label="Editor toolbar">
            <div className="ck ck-toolbar__items">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e405ece0764c3f32be9a04e3170848a66"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bold
                    (⌘B)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e405ece0764c3f32be9a04e3170848a66"
                >
                  Bold
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_eb0df2372fde6817dcb24879fbf568e75"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Italic
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_eb0df2372fde6817dcb24879fbf568e75"
                >
                  Italic
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e1cfa78b275aadbd7fc2e359dbd71cb94"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Link
                    (⌘K)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e1cfa78b275aadbd7fc2e359dbd71cb94"
                >
                  Link
                </span>
              </button>
              <span
                className="ck ck-toolbar__separator"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ec498297f10e9f06e439d5d41cc5a6abd"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bulleted
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ec498297f10e9f06e439d5d41cc5a6abd"
                >
                  Bulleted List
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ea2e852301dc8a889496c152f55c9dcc2"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Numbered
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ea2e852301dc8a889496c152f55c9dcc2"
                >
                  Numbered List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ck ck-reset_all ck-body ck-rounded-corners" dir="ltr">
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-balloon-panel_with-arrow" style={{ top: 0, left: 0 }}>
          <div className="ck ck-balloon-rotator" z-index="-1">
            <div className="ck-balloon-rotator__navigation ck-hidden">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e69b2fe2a4cd3ac618f7381613278a0a9"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Previous</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e69b2fe2a4cd3ac618f7381613278a0a9"
                >
                  Previous
                </span>
              </button>
              <span
                className="ck-balloon-rotator__counter"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e1b8aab8368a328c547e1901b0373f862"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Next</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e1b8aab8368a328c547e1901b0373f862"
                >
                  Next
                </span>
              </button>
            </div>
            <div className="ck-balloon-rotator__content" />
          </div>
        </div>
        <div
          className="ck-fake-panel ck-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
          }}
        />
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-toolbar-container" style={{ top: 0, left: 0 }}>
          <div className="ck ck-toolbar ck-toolbar_floating" role="toolbar" aria-label="Editor toolbar">
            <div className="ck ck-toolbar__items">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ed6913a98ce8dd47b29d72c0dd38662d4"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bold
                    (⌘B)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ed6913a98ce8dd47b29d72c0dd38662d4"
                >
                  Bold
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ee94a16984cb30dea28ba0e9b74807c40"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Italic
                    (⌘I)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ee94a16984cb30dea28ba0e9b74807c40"
                >
                  Italic
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ef7b93e6baa2042704760e3f38dd11dd0"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Link
                    (⌘K)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ef7b93e6baa2042704760e3f38dd11dd0"
                >
                  Link
                </span>
              </button>
              <span
                className="ck ck-toolbar__separator"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e854aa27f74d744525bc2a38b2376e050"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bulleted
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e854aa27f74d744525bc2a38b2376e050"
                >
                  Bulleted List
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ea7fa759b3761b39b1cfb864998a92751"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Numbered
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ea7fa759b3761b39b1cfb864998a92751"
                >
                  Numbered List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ck ck-reset_all ck-body ck-rounded-corners" dir="ltr">
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-balloon-panel_with-arrow" style={{ top: 0, left: 0 }}>
          <div className="ck ck-balloon-rotator" z-index="-1">
            <div className="ck-balloon-rotator__navigation ck-hidden">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e6b6b6a6d0e13ac394fc92cabeebdb2a1"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Previous</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e6b6b6a6d0e13ac394fc92cabeebdb2a1"
                >
                  Previous
                </span>
              </button>
              <span
                className="ck-balloon-rotator__counter"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e4a9165c82be1266000422c61d98d9b07"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Next</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e4a9165c82be1266000422c61d98d9b07"
                >
                  Next
                </span>
              </button>
            </div>
            <div className="ck-balloon-rotator__content" />
          </div>
        </div>
        <div
          className="ck-fake-panel ck-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
          }}
        />
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-toolbar-container" style={{ top: 0, left: 0 }}>
          <div className="ck ck-toolbar ck-toolbar_floating" role="toolbar" aria-label="Editor toolbar">
            <div className="ck ck-toolbar__items">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ec5af60595c55c3e047f9ca40c0def88a"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bold
                    (⌘B)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ec5af60595c55c3e047f9ca40c0def88a"
                >
                  Bold
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e36c1d9fb0d35d6f3ec81b7ca629313c2"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Italic
                    (⌘I)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e36c1d9fb0d35d6f3ec81b7ca629313c2"
                >
                  Italic
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ea96f69e49414723dfc335c8f212cf665"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Link
                    (⌘K)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ea96f69e49414723dfc335c8f212cf665"
                >
                  Link
                </span>
              </button>
              <span
                className="ck ck-toolbar__separator"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_eabed4c5ca83474b00b4483bb5f767b55"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bulleted
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_eabed4c5ca83474b00b4483bb5f767b55"
                >
                  Bulleted List
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e605dc6d2649b9d397ccf468b239345bb"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Numbered
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e605dc6d2649b9d397ccf468b239345bb"
                >
                  Numbered List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ck ck-reset_all ck-body ck-rounded-corners" dir="ltr">
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-balloon-panel_with-arrow" style={{ top: 0, left: 0 }}>
          <div className="ck ck-balloon-rotator" z-index="-1">
            <div className="ck-balloon-rotator__navigation ck-hidden">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e086e2b2b61f8fd9492217220c8ee3ece"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Previous</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e086e2b2b61f8fd9492217220c8ee3ece"
                >
                  Previous
                </span>
              </button>
              <span
                className="ck-balloon-rotator__counter"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e543c60ef54a0bfd0535484e11c56c37b"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Next</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e543c60ef54a0bfd0535484e11c56c37b"
                >
                  Next
                </span>
              </button>
            </div>
            <div className="ck-balloon-rotator__content" />
          </div>
        </div>
        <div
          className="ck-fake-panel ck-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
          }}
        />
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-toolbar-container" style={{ top: 0, left: 0 }}>
          <div className="ck ck-toolbar ck-toolbar_floating" role="toolbar" aria-label="Editor toolbar">
            <div className="ck ck-toolbar__items">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e8d4fd6cd82490b94f7d465225e7ae869"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bold
                    (⌘B)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e8d4fd6cd82490b94f7d465225e7ae869"
                >
                  Bold
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e9b87b8d5ccd1bdf791c73fa95819f55e"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Italic
                    (⌘I)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e9b87b8d5ccd1bdf791c73fa95819f55e"
                >
                  Italic
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ee3f30b2839c76f2832191392983d8f73"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Link
                    (⌘K)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ee3f30b2839c76f2832191392983d8f73"
                >
                  Link
                </span>
              </button>
              <span
                className="ck ck-toolbar__separator"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e032135c26289ce5262c87f9de9edbe46"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bulleted
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e032135c26289ce5262c87f9de9edbe46"
                >
                  Bulleted List
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e1a17829f5bd113c976b431a185714507"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Numbered
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e1a17829f5bd113c976b431a185714507"
                >
                  Numbered List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ck ck-reset_all ck-body ck-rounded-corners" dir="ltr">
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-balloon-panel_with-arrow" style={{ top: 0, left: 0 }}>
          <div className="ck ck-balloon-rotator" z-index="-1">
            <div className="ck-balloon-rotator__navigation ck-hidden">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ed3f40e537495d1ae523f5dfd108640f3"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Previous</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ed3f40e537495d1ae523f5dfd108640f3"
                >
                  Previous
                </span>
              </button>
              <span
                className="ck-balloon-rotator__counter"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e39225fb6b45306dc810a6e30918050fb"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Next</span></span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e39225fb6b45306dc810a6e30918050fb"
                >
                  Next
                </span>
              </button>
            </div>
            <div className="ck-balloon-rotator__content" />
          </div>
        </div>
        <div
          className="ck-fake-panel ck-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
          }}
        />
        <div className="ck ck-balloon-panel ck-balloon-panel_arrow_nw ck-toolbar-container" style={{ top: 0, left: 0 }}>
          <div className="ck ck-toolbar ck-toolbar_floating" role="toolbar" aria-label="Editor toolbar">
            <div className="ck ck-toolbar__items">
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e50c43c53c0ade510a1da662d21d28dcd"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bold
                    (⌘B)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e50c43c53c0ade510a1da662d21d28dcd"
                >
                  Bold
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e7a72ba719ecbfdc722a768f1183bf18e"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Italic
                    (⌘I)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e7a72ba719ecbfdc722a768f1183bf18e"
                >
                  Italic
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e635e2466905d3e39ab2297b691a2c68a"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Link
                    (⌘K)
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e635e2466905d3e39ab2297b691a2c68a"
                >
                  Link
                </span>
              </button>
              <span
                className="ck ck-toolbar__separator"
              />
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_e034d133bb0a6ab27db067aa70eae7c18"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Bulleted
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_e034d133bb0a6ab27db067aa70eae7c18"
                >
                  Bulleted List
                </span>
              </button>
              <button
                className="ck ck-button ck-off"
                type="button"
                tabIndex={-1}
                aria-labelledby="ck-editor__aria-label_ef8059e0b0fe5d00f597845e7c2f5d9e6"
                aria-pressed="false"
              >
                <svg
                  className="ck ck-icon ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                  />
                </svg>
                <span className="ck ck-tooltip ck-tooltip_s">
                  <span className="ck ck-tooltip__text">
                    Numbered
                    List
                  </span>
                </span>
                <span
                  className="ck ck-button__label"
                  id="ck-editor__aria-label_ef8059e0b0fe5d00f597845e7c2f5d9e6"
                >
                  Numbered List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
