/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import * as React from 'react'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import './mix/all.css'
import './mix/app.184b906.css'
import './mix/user.184b906.css'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import {
  cv1, image1, cv2, cv3, cv4, cv5, cv6, cv7, cv8, cv9,
} from '../../assets/images'

export const Home = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')

  console.log('====================================');
  console.log('userInfo', userInfo);
  console.log('====================================');

  if (!userInfo) {
    window.location.href = 'login'
  }

  return (
    <div id="app">
      <div className="app">
        <Header tab="Home" />
        <div className="user-layout">
          <div className="user-layout__content">
            <div className="templates-container">
              <div className="templates-container__introduction">
                <div className="templates-container__introduction--left"><img src={image1} /></div>
                <div className="templates-container__introduction--right">
                  <h1>A GOOD CV MAKES YOUR LIFE EASIER</h1>
                  <p>Pick a resume template below that represents your skills and work experience the best.</p>
                </div>
              </div>
              <div className="templates-container__content">
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv1})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Black Basic</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv8})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Outbreak Style</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv9})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Retro And Simple</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv6})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Green and Young</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv7})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Modern Dark Basic</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv2})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Personalities Template</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv3})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Dynamic Template</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv4})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Modern Template 1</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="templates-container__content__item" style={{ backgroundImage: `url(${cv5})` }}>
                  <div className="templates-container__content__item--top" />
                  <div className="templates-container__content__item--bottom">
                    <div className="templates-container__content__item__title text-template">Modern Template 2</div>
                    <p className="templates-container__content__item__subtext text-template" />
                    <div className="templates-container__content__item__button text-template">
                      <div>
                        Try this template
                        <span
                          role="img"
                          aria-label="arrow-right"
                          className="anticon anticon-arrow-right"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className=""
                            data-icon="arrow-right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                            />
                          </svg>
                        </span>
                      </div>
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
    </div>
  )
}
