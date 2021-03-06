/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react'

import './mix/css/all.css'
import './mix/css/animate.min.css'
import './mix/css/landing-page.css'
import './style.scss'
// import './favicon.png'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Login'
import { Register } from '../Register'
import {
  iconTick, bg2, bg1, bg3, bg4,
} from '../../assets/images'

export const Landing = () => (
  <div className="landing">
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
    <section className="header">
      <button
        className="navbar-toggler header__nav--button"
        type="button"
        data-toggle="collapse"
        data-target="#header-menu-button"
        aria-controls="header-menu-button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="header-button-handle"
      >
        <span className="header__nav--three-line">
          <i className="fas fa-align-left" />
        </span>
      </button>
      <div className="collapse navbar-collapse header__nav--container" id="header-menu-button">
        <a className="header__nav--container--logo" href="index.html" />
        <span className="header__nav--container--close">X</span>
        <div className="header__nav--container--menu">
          <div className="menu-item">
            <a className="mobile-menu-item" data-target="#introduction-container">
              About us
            </a>
          </div>
          <div className="menu-item">
            <a
              className="mobile-menu-item"
              href="https://accounts.viblo.asia/login?service=cv&amp;continue=https://cv.viblo.asia/"
            >
              Create CV
            </a>
          </div>
          <div className="menu-item">
            <a className="mobile-menu-item" data-target="#diversity-container">
              Template
            </a>
          </div>
          <div className="menu-item">
            <a className="mobile-menu-item" data-target="#free-container">
              Free
            </a>
          </div>
          <div className="menu-item">
            <a className="mobile-menu-item" data-target="#private-container">
              Privacy
            </a>
          </div>
          <div className="header__nav--container--language">
            <a className="language-item " href="landing.html?language=vi" title="Vietnamese">
              Vietnamese
            </a>
            <a className="language-item active" href="landing.html?language=en" title="English">
              English
            </a>
          </div>
        </div>
      </div>
      <div className="header__navbar" style={{position: 'fixed', height: 0}}>
        <div className="container z-index-10 position-relative">
          <a className="navbar-brand header__navbar--logo" href="index.html" />
          <nav className="navbar navbar-expand-lg navbar-dark header__nav">
            <div className="header__nav--desktop w-100">
              <div className="d-flex w-100">
                <ul className="navbar-nav form-inline text-right">
                  <li className="nav-item header__nav--desktop--item" id="target-1">
                    <a
                      className="mobile-menu-item"
                      data-target="#introduction-container"
                    >
                      About us
                    </a>
                  </li>
                  <li className="nav-item header__nav--desktop--item" id="target-2">
                    <a
                      className="mobile-menu-item"
                      data-target="#easily-container"
                    >
                      Create CV
                    </a>
                  </li>
                  <li className="nav-item header__nav--desktop--item" id="target-3">
                    <a
                      className="mobile-menu-item"
                      data-target="#diversity-container"
                    >
                      Template
                    </a>
                  </li>
                  <li className="nav-item header__nav--desktop--item" id="target-4">
                    <a
                      className="mobile-menu-item"
                      data-target="#free-container"
                    >
                      Free
                    </a>
                  </li>
                  <li className="nav-item header__nav--desktop--item" id="target-5">
                    <a
                      className="mobile-menu-item"
                      data-target="#private-container"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
                <div className="header__nav--desktop__right">
                  <a
                    className="landing-button button-bg-white"
                    href="/login"
                  >
                    Create CV
                  </a>
                  <div className="bg-right" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
      <div className="container header__content z-index-10 position-relative">
        <div
          className="header__content__left wow bounceInDown animated"
          data-wow-duration="1s"
          style={{visibility: 'visible', animationDuration: '1s', animationName: 'bounceInDown'}}
        >
          <div className="slogan slogan-line-1">A good CV</div>
          <div className="slogan slogan-line-1">Make your life</div>
          <div className="slogan slogan-line-2">Easier</div>
          <div
            className="content mt-4 wow fadeInUp animated"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
            style={{visibility: 'visible', animationDuration: '1.5s', animationName: 'fadeInUp', animationDelay: '0.5s'}}
          >
            Pick a resume template below that represents your skills and work experience the best.
          </div>
          <a
            className="landing-button button-bg-blue mt-5"
            href="https://accounts.viblo.asia/login?service=cv&amp;continue=https://cv.viblo.asia/"
          >
            Create CV
          </a>
        </div>
        <div className="header__content__right">
          <img src={require('./mix/images/landing-page/bg-header.png')} />
        </div>
      </div>
    <div id="introduction-container" />
    <section className="introduction">
      <div className="introduction__content z-index-10 position-relative d-flex justify-content-center">
        <div className="introduction__content--background d-flex align-items-center">
          <div className="introduction__left">
            <img src={bg1} />
          </div>
          <div className="introduction__right wow bounceInRight" data-wow-duration="1.5s">
            <div className="landing-title">
              About Viblo Cv
            </div>
            <div className="introduction__description-1">
              Viblo CV is a product of Viblo Platform, a learning platform for Vietnamese people to share
              their IT knowledge and learn from other people
            </div>
            <div className="introduction__description-2">
              Viblo CV allows you to create free CVs online according to your preferences, with many
              beautiful and modern CV templates
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="easily-container" />
    <section className="usable">
      <div className="container">
        <div className="usable__content">
          <div className="usable__title landing-title">
            Create a CV Easily
          </div>
          <div className="usable__list-items wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
            <div className="usable__item">
              <div className="icon">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.9315 8.30532C42.6247 2.92971 53.1426 13.5831 47.9315 8.30532C40.9388 1.222 30.2196 -1.65892 20.6155 0.945148C11.6626 3.37276 4.29555 10.4877 1.40864 19.2826C-0.346059 24.6274 -0.478078 30.5093 1.10615 35.9118C3.64699 44.5777 10.6243 51.7144 19.1693 54.5863C28.285 57.6501 38.706 55.5801 46.0538 49.406C48.0977 47.6885 49.9109 45.6445 51.382 43.419C51.5029 43.2357 51.6225 43.0507 51.737 42.8683C52.0647 42.3466 51.907 41.6579 51.3849 41.3302C50.8633 41.002 50.1746 41.1597 49.8464 41.6818C49.7396 41.8523 49.6307 42.0215 49.52 42.1889C48.7095 43.4147 47.7918 44.5743 46.7831 45.6475L42.6525 41.5173C43.8449 40.2283 44.8682 38.7834 45.6829 37.2278C46.5212 35.626 47.1368 33.9093 47.5094 32.1405C47.6961 31.254 47.823 30.3542 47.8871 29.4506H53.7374C53.6502 31.0032 53.4246 32.5434 53.0636 34.0435C52.9196 34.6429 53.2883 35.2453 53.8878 35.3897C54.4863 35.5337 55.0892 35.165 55.2336 34.5656C57.4852 25.2021 54.6944 15.1549 47.9315 8.30532ZM41.416 13.2328C40.0928 12.0249 38.6077 10.9948 37.0107 10.1831C35.3636 9.34566 33.5987 8.74453 31.7842 8.3976C30.8681 8.22243 29.9397 8.11178 29.0079 8.06563V2.22048C35.2068 2.45845 41.0097 4.87282 45.5483 9.10042L41.416 13.2328ZM26.776 8.07802C26.0138 8.12417 25.2546 8.21346 24.5082 8.34505C23.9015 8.45187 23.496 9.03078 23.6028 9.63747C23.7101 10.2446 24.289 10.6496 24.8957 10.5428C27.2951 10.1194 29.8205 10.1638 32.19 10.7432C34.2289 11.2414 36.1656 12.1287 37.8887 13.3255C39.6006 14.5153 41.1007 16.006 42.3098 17.7039C43.5283 19.415 44.4503 21.3363 45.0091 23.3615C45.4112 24.8188 45.624 26.3278 45.6355 27.8394C45.6731 32.6434 43.7701 37.3752 40.3077 40.7239C33.9896 46.8348 23.4558 47.2604 16.7028 41.6122C11.4618 37.2286 9.13839 29.7531 10.9982 23.1752C12.0398 19.4911 14.2547 16.1675 17.3125 13.8531C17.8038 13.481 17.9008 12.7812 17.5287 12.2898C17.1569 11.7985 16.4567 11.7015 15.9654 12.0736C15.4467 12.4663 14.9447 12.8863 14.4649 13.3293L10.3334 9.19784C14.8357 4.95742 20.6018 2.51442 26.7764 2.22988V8.07802H26.776ZM26.776 53.7477C20.7791 53.47 15.1416 51.1444 10.6931 47.1121L14.8285 42.9764C16.2179 44.1991 17.776 45.2288 19.4478 46.0222C20.8889 46.7062 22.4134 47.2146 23.9767 47.5329C24.8995 47.7209 25.836 47.8435 26.7764 47.8999V53.7477H26.776ZM8.77437 10.7953L12.911 14.9319C11.7852 16.2299 10.8264 17.6718 10.0698 19.2146C9.28621 20.8121 8.72054 22.5147 8.39071 24.263C8.20699 25.2384 8.09633 26.227 8.05873 27.2187H2.21571C2.39473 21.1078 4.70015 15.3412 8.77437 10.7953ZM8.09804 29.4506C8.2181 31.1216 8.54836 32.7776 9.08242 34.3656C9.66176 36.0891 10.4812 37.7302 11.5083 39.2307C12.033 39.9967 12.611 40.726 13.2365 41.4122L9.10421 45.5445C4.98683 41.1221 2.58272 35.4799 2.24733 29.4506H8.09804ZM29.0079 47.9119C30.7481 47.8252 32.4759 47.5107 34.134 46.9758C35.7917 46.4409 37.3772 45.6855 38.8376 44.7362C39.6122 44.2329 40.3517 43.6758 41.0494 43.0704L45.186 47.2069C40.7012 51.2269 35.0278 53.5246 29.0079 53.7571V47.9119ZM47.9264 27.2191C47.8614 25.4977 47.5752 23.7849 47.0719 22.1374C46.5327 20.3737 45.7449 18.6878 44.7396 17.1416C44.2106 16.3281 43.6215 15.5531 42.9802 14.8247L47.1159 10.6894C51.2499 15.2502 53.5891 21.0556 53.7694 27.2187H47.9264V27.2191Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M26.9601 21.2974C26.9601 20.7758 26.3449 20.6348 25.927 20.6348C25.5092 20.6343 24.8944 20.7762 24.8944 21.2974V30.6516C24.8944 31.5612 24.6244 32.5242 23.7344 32.9326C22.8829 33.324 21.5358 33.2791 20.8236 32.6242C20.1545 32.0089 20.1092 30.9869 20.1109 30.0786C20.1156 27.2344 20.1199 24.3903 20.1246 21.5465C20.125 21.3645 20.1229 21.1731 20.0336 21.0146C19.8499 20.689 19.4043 20.6497 19.0304 20.6587C18.6673 20.6672 18.2264 20.7369 18.0935 21.0753C18.0499 21.1859 18.0495 21.3077 18.0499 21.4265C18.0533 24.2886 18.0572 27.1507 18.061 30.0128C18.0627 31.2245 18.0948 32.5306 18.8245 33.4974C19.9272 34.9582 22.2156 35.2287 23.8827 34.8544C24.7316 34.6634 25.566 34.2409 26.1202 33.5538C26.7734 32.7438 26.9601 31.6663 26.9601 30.6516V21.2974Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M32.0268 27.748C32.0268 27.748 28.6678 33.4953 28.6554 33.5162C28.0556 34.5425 29.953 35.453 30.5263 34.4716L33.3714 29.2874C33.3714 29.2874 36.2382 34.4395 36.2557 34.4711C36.8235 35.4918 38.7132 34.5527 38.1074 33.5162L34.736 27.748C34.736 27.748 38.0044 22.0276 38.01 22.0182C38.6718 20.8599 36.7197 20.0277 36.0998 21.1607L33.3714 26.1497C33.3714 26.1497 30.69 21.1752 30.6823 21.1607C30.0782 20.0401 28.0701 20.827 28.7528 22.0182L32.0268 27.748Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M19.4184 11.0849C19.6465 11.6493 20.3258 11.9296 20.8868 11.6942C21.4632 11.4523 21.7046 10.776 21.4721 10.2112C21.2401 9.63654 20.5416 9.35669 19.9772 9.61346C19.4192 9.86682 19.1902 10.5295 19.4184 11.0849Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M53.8109 37.9963C53.5827 37.4328 52.9218 37.1525 52.3578 37.3802C51.7938 37.6084 51.5136 38.2693 51.7417 38.8333L51.7567 38.8704C51.9981 39.4673 52.7184 39.7382 53.2943 39.4481C53.8062 39.19 54.0403 38.5641 53.8258 38.0335L53.8109 37.9963Z"
                    fill="#B5BCC6"
                  />
                </svg>

              </div>
              <div className="text">
                Friendly user experience
              </div>
              <div className="border-hover" />
            </div>
            <div className="usable__item">
              <div className="icon">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28" cy="28" r="26.75" stroke="#B5BCC6" strokeWidth="2.5" />
                  <path
                    d="M44.6486 28.3784C44.6486 27.7515 45.1568 27.2433 45.7838 27.2433H48.054C48.6809 27.2433 49.1892 27.7515 49.1892 28.3784C49.1892 29.0053 48.6809 29.5136 48.054 29.5136H45.7838C45.1568 29.5136 44.6486 29.0053 44.6486 28.3784Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M6.81079 28.3784C6.81079 27.7515 7.31901 27.2433 7.94593 27.2433H10.2162C10.8431 27.2433 11.3513 27.7515 11.3513 28.3784C11.3513 29.0053 10.8431 29.5136 10.2162 29.5136H7.94593C7.31901 29.5136 6.81079 29.0053 6.81079 28.3784Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M27.6216 10.5946C26.9947 10.5946 26.4865 10.0864 26.4865 9.45947L26.4865 7.1892C26.4865 6.56228 26.9947 6.05406 27.6216 6.05406C28.2486 6.05406 28.7568 6.56228 28.7568 7.1892L28.7568 9.45947C28.7568 10.0864 28.2486 10.5946 27.6216 10.5946Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M27.6216 49.1892C26.9947 49.1892 26.4865 48.681 26.4865 48.0541L26.4865 45.7838C26.4865 45.1569 26.9947 44.6487 27.6216 44.6487C28.2486 44.6487 28.7568 45.1569 28.7568 45.7838L28.7568 48.0541C28.7568 48.681 28.2486 49.1892 27.6216 49.1892Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M39.4062 15.416C38.958 14.9846 38.9442 14.2717 39.3754 13.8237L40.9741 12.163C41.4053 11.715 42.1183 11.7015 42.5665 12.1329V12.1329C43.0148 12.5643 43.0285 13.2772 42.5973 13.7252L40.9987 15.3859C40.5674 15.8339 39.8545 15.8473 39.4062 15.416V15.416Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M12.9196 43.416C12.4714 42.9846 12.4576 42.2719 12.8888 41.824L14.4871 40.1636C14.9182 39.7157 15.6311 39.7022 16.0793 40.1336V40.1336C16.5274 40.5649 16.5412 41.2776 16.11 41.7255L14.5118 43.3859C14.0806 43.8338 13.3677 43.8473 12.9196 43.416V43.416Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M15.9872 16.2788C15.5287 16.6842 14.8282 16.6422 14.4226 16.185L12.843 14.4046C12.4374 13.9475 12.4803 13.2482 12.9388 12.8428V12.8428C13.3972 12.4374 14.0977 12.4794 14.5033 12.9366L16.0829 14.7169C16.4885 15.1741 16.4456 15.8734 15.9872 16.2788V16.2788Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M43.2304 43.5221C42.7719 43.9275 42.0714 43.8855 41.6658 43.4283L40.0863 41.6479C39.6807 41.1907 39.7236 40.4915 40.182 40.0861V40.0861C40.6405 39.6807 41.341 39.7227 41.7466 40.1798L43.3261 41.9602C43.7317 42.4174 43.6889 43.1167 43.2304 43.5221V43.5221Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M39.5819 28.4419C39.5819 29.1039 39.0453 29.6405 38.3833 29.6405H26.3594V17.6167C26.3594 16.9546 26.896 16.418 27.5581 16.418C28.2201 16.418 28.7568 16.9546 28.7568 17.6167V27.2432H38.3833C39.0453 27.2432 39.5819 27.7799 39.5819 28.4419Z"
                    fill="#B5BCC6"
                  />
                </svg>
              </div>
              <div className="text">
                Quickly create a CV in only 10 minutes
              </div>
              <div className="border-hover" />
            </div>
            <div className="usable__item">
              <div className="icon">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.695 7.95198L41.0132 1.26453C39.3297 -0.420432 36.401 -0.423669 34.7109 1.26777L4.77782 31.4964C4.64513 31.6302 4.54939 31.7947 4.49719 31.9753L0.0427431 47.5795C-0.068237 47.9681 0.0405506 48.3872 0.326614 48.6734C0.538656 48.8857 0.822527 49 1.11402 49C1.21623 49 1.31959 48.9858 1.41961 48.9575L17.0104 44.4992C17.1909 44.447 17.3551 44.3511 17.4889 44.2183L47.695 14.2564C48.5368 13.4139 49 12.2949 49 11.1042C49 9.91351 48.5368 8.79441 47.695 7.95198ZM29.8581 9.36863L33.9573 13.4679L12.5552 34.8703L11.0192 31.7973C10.8299 31.4198 10.445 31.1817 10.023 31.1817H8.23961L29.8581 9.36863ZM2.7355 46.2647L4.18607 41.1869L7.81323 44.8141L2.7355 46.2647ZM15.5911 42.5921L10.2629 44.1142L4.88588 38.7372L6.40797 33.4089H9.33448L11.2539 37.248C11.3616 37.4633 11.5366 37.6384 11.752 37.7461L15.591 39.6655V42.5921H15.5911ZM17.8185 40.7606V38.9772C17.8185 38.5552 17.5803 38.1702 17.2029 37.981L14.1299 36.445L35.532 15.0427L39.6313 19.142L17.8185 40.7606ZM46.1235 12.7078L41.2131 17.5743L31.4257 7.78681L36.289 2.87976C37.1308 2.03795 38.5967 2.03795 39.4385 2.87976L46.1203 9.56156C46.5411 9.98241 46.7728 10.5414 46.7728 11.1363C46.7728 11.7312 46.5411 12.2901 46.1235 12.7078Z"
                    fill="#B5BCC6"
                  />
                </svg>
              </div>
              <div className="text">
                Easy maneuvering and altering information
              </div>
              <div className="border-hover" />
            </div>
            <div className="usable__item">
              <div className="icon">
                <svg
                  width="37"
                  height="46"
                  viewBox="0 0 37 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0208 8.04492H3.6363C1.62974 8.04492 0 9.67466 0 11.6812V42.3637C0 44.3702 1.62974 46 3.6363 46H25.0208C27.0273 46 28.6571 44.3702 28.6571 42.3637V11.6812C28.6476 9.67466 27.0179 8.04492 25.0208 8.04492ZM26.1041 42.3543C26.1041 42.9572 25.6143 43.447 25.0113 43.447H3.62688C3.02397 43.447 2.53411 42.9572 2.53411 42.3543V11.6812C2.53411 11.0783 3.02397 10.5884 3.62688 10.5884H25.0113C25.6143 10.5884 26.1041 11.0783 26.1041 11.6812V42.3543Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M33.1978 0H11.8133C9.80674 0 8.177 1.62974 8.177 3.6363C8.177 4.34284 8.74223 4.90806 9.44877 4.90806C10.1553 4.90806 10.7205 4.34284 10.7205 3.6363C10.7205 3.03339 11.2104 2.54353 11.8133 2.54353H33.1978C33.8007 2.54353 34.2905 3.03339 34.2905 3.6363V34.3188C34.2905 34.9217 33.8007 35.4115 33.1978 35.4115C32.4912 35.4115 31.926 35.9768 31.926 36.6833C31.926 37.3898 32.4912 37.9551 33.1978 37.9551C35.2043 37.9551 36.8341 36.3253 36.8341 34.3188V3.6363C36.8341 1.62974 35.2043 0 33.1978 0Z"
                    fill="#B5BCC6"
                  />
                </svg>
              </div>
              <div className="text">
                Accurate, effective and fully automated page separation function
              </div>
              <div className="border-hover" />
            </div>
            <div className="usable__item">
              <div className="icon">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9995 13.4812C19.9937 13.4812 13.4812 19.9937 13.4812 27.9995C13.4812 36.0052 19.9937 42.5177 27.9995 42.5177C36.0052 42.5177 42.5177 36.0052 42.5177 27.9995C42.5177 19.9937 36.0052 13.4812 27.9995 13.4812ZM27.9995 40.4437C21.1375 40.4437 15.5552 34.8614 15.5552 27.9995C15.5552 21.1375 21.1375 15.5552 27.9995 15.5552C34.8614 15.5552 40.4437 21.1375 40.4437 27.9995C40.4437 34.8614 34.8614 40.4437 27.9995 40.4437Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M53.1161 21.7774H51.0233C50.4893 19.7946 49.7043 17.8969 48.6797 16.1184L50.1585 14.6396C50.7029 14.0951 51.0026 13.3703 51.0026 12.6008C51.0026 11.8303 50.7029 11.1065 50.1585 10.561L45.4369 5.83945C44.3481 4.75162 42.4493 4.74954 41.3583 5.83945L39.8796 7.31823C38.1 6.2947 36.2033 5.50968 34.2216 4.97561V2.88291C34.2216 1.29316 32.9284 0 31.3387 0H24.6603C23.0705 0 21.7774 1.29316 21.7774 2.88291V4.97561C19.7956 5.50968 17.8989 6.2947 16.1184 7.31927L14.6396 5.84048C13.5497 4.74954 11.6499 4.75162 10.561 5.84048L5.83945 10.562C5.29501 11.1065 4.99531 11.8313 4.99531 12.6018C4.99531 13.3713 5.29501 14.0951 5.83945 14.6406L7.31823 16.1194C6.2947 17.8969 5.50864 19.7946 4.97561 21.7774H2.88291C1.29316 21.7774 0 23.0705 0 24.6603V31.3376C0 32.9284 1.29316 34.2216 2.88291 34.2216H4.97561C5.50968 36.2033 6.2947 38.1 7.31927 39.8806L5.84048 41.3594C5.29605 41.9038 4.99635 42.6287 4.99635 43.3982C4.99635 44.1687 5.29605 44.8925 5.84048 45.438L10.562 50.1595C11.6509 51.2494 13.5507 51.2505 14.6406 50.1595L16.1194 48.6807C17.9 49.7043 19.7967 50.4903 21.7784 51.0244V53.1171C21.7784 54.7068 23.0716 56 24.6613 56H31.3387C32.9284 56 34.2216 54.7068 34.2216 53.1171V51.0244C36.2033 50.4903 38.1 49.7053 39.8806 48.6807L41.3594 50.1595C42.4503 51.2505 44.3481 51.2484 45.438 50.1595L50.1595 45.438C50.7039 44.8935 51.0036 44.1687 51.0036 43.3982C51.0036 42.6287 50.7039 41.9049 50.1595 41.3594L48.6807 39.8806C49.7043 38.1 50.4903 36.2033 51.0244 34.2216H53.1171C54.7068 34.2216 56 32.9284 56 31.3387V24.6603C55.999 23.0705 54.7058 21.7774 53.1161 21.7774ZM53.9249 31.3387C53.9249 31.7846 53.562 32.1476 53.1161 32.1476H49.3911L49.2044 32.9492C48.6641 35.269 47.7536 37.4706 46.4947 39.4938L46.0591 40.1927L48.6921 42.8257C49.0084 43.142 49.0084 43.6553 48.6921 43.9706L43.9706 48.6921C43.6553 49.0074 43.142 49.0095 42.8257 48.6921L40.1927 46.0591L39.4938 46.4947C37.4716 47.7536 35.27 48.6652 32.9492 49.2044L32.1476 49.3911V53.1161C32.1476 53.562 31.7846 53.9249 31.3387 53.9249H24.6603C24.2144 53.9249 23.8514 53.562 23.8514 53.1161V49.3911L23.0498 49.2044C20.73 48.6641 18.5284 47.7536 16.5052 46.4947L15.8062 46.0591L13.1732 48.6921C12.8559 49.0095 12.3426 49.0074 12.0284 48.6921L7.30683 43.9706C6.99054 43.6543 6.99054 43.141 7.30683 42.8257L9.93982 40.1927L9.50427 39.4938C8.24533 37.4716 7.33379 35.27 6.79454 32.9492L6.60788 32.1476H2.88291C2.43699 32.1476 2.07404 31.7846 2.07404 31.3387V24.6603C2.07404 24.2144 2.43699 23.8514 2.88291 23.8514H6.60788L6.79454 23.0498C7.33483 20.7289 8.24533 18.5274 9.50427 16.5052L9.93982 15.8062L7.30683 13.1732C6.99054 12.8569 6.99054 12.3436 7.30683 12.0284L12.0284 7.30683C12.3436 6.99157 12.8569 6.9895 13.1732 7.30683L15.8062 9.93982L16.5052 9.50427C18.5274 8.24533 20.7289 7.33379 23.0498 6.79454L23.8514 6.60788V2.88291C23.8514 2.43699 24.2144 2.07404 24.6603 2.07404H31.3376C31.7846 2.07404 32.1476 2.43699 32.1476 2.88291V6.60788L32.9492 6.79454C35.269 7.33483 37.4706 8.24533 39.4938 9.50427L40.1927 9.93982L42.8257 7.30683C43.1431 6.9895 43.6564 6.99157 43.9706 7.30683L48.6921 12.0284C49.0084 12.3447 49.0084 12.858 48.6921 13.1732L46.0591 15.8062L46.4947 16.5052C47.7536 18.5263 48.6652 20.7279 49.2044 23.0498L49.3911 23.8514H53.1161C53.562 23.8514 53.9249 24.2144 53.9249 24.6603V31.3387Z"
                    fill="#B5BCC6"
                  />
                  <path
                    d="M27.9995 17.6293C22.2813 17.6293 17.6293 22.2813 17.6293 27.9995C17.6293 33.7176 22.2813 38.3696 27.9995 38.3696C33.7176 38.3696 38.3696 33.7176 38.3696 27.9995C38.3696 22.2813 33.7176 17.6293 27.9995 17.6293ZM27.9995 36.2956C23.4252 36.2956 19.7033 32.5737 19.7033 27.9995C19.7033 23.4252 23.4252 19.7033 27.9995 19.7033C32.5737 19.7033 36.2956 23.4252 36.2956 27.9995C36.2956 32.5737 32.5737 36.2956 27.9995 36.2956Z"
                    fill="#B5BCC6"
                  />
                </svg>
              </div>
              <div className="text">
                Customizable privacy settings to share or public your CV to your targeted audience
              </div>
              <div className="border-hover" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="diversity-container" />
    <section className="diversity">
      <div className="diversity__content">
        <div className="container">
          <div className="diversity__title landing-title">
            Varied Template
          </div>
          <div className="diversity__main">
            <div className="diversity__left wow fadeInDown" data-wow-duration="2s">
              <div className="diversity__item d-flex align-items-center">
                <img src={iconTick} />
                <div className="text">
                  Templates are tailored and optimized for IT positions
                </div>
              </div>
              <div className="diversity__item d-flex align-items-center">
                <img src={iconTick} />
                <div className="text">
                  Many options to personalize your CV templates according to your preferences and
                  personal needs
                </div>
              </div>
              <div className="diversity__item d-flex align-items-center">
                <img src={iconTick} />
                <div className="text">
                  Switch between templates easily and quickly
                </div>
              </div>
              <div className="diversity__item d-flex align-items-center">
                <img src={iconTick} />
                <div className="text">
                  Beautiful and modern CV templates
                </div>
              </div>
            </div>
            <div className="diversity__right">
              <img src={bg2} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="free-container" />
    <section className="free">
      <div className="container">
        <div className="free__content">
          <div className="free__title landing-title">
            Completely Free
          </div>
          <div className="free__list-items wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
            <div className="free__item">
              <div className="icon d-flex justify-content-center align-items-center">
                <div className="position">1</div>
              </div>
              <div className="text">
                Unlimited number of CVs to create
              </div>
              <div className="border-hover" />
            </div>
            <div className="free__item">
              <div className="icon d-flex justify-content-center align-items-center">
                <div className="position">2</div>
              </div>
              <div className="text">
                Unlimited CVs to share
              </div>
              <div className="border-hover" />
            </div>
            <div className="free__item">
              <div className="icon d-flex justify-content-center align-items-center">
                <div className="position">3</div>
              </div>
              <div className="text">
                Unlimited templates to use
              </div>
              <div className="border-hover" />
            </div>
            <div className="free__item">
              <div className="icon d-flex justify-content-center align-items-center">
                <div className="position">4</div>
              </div>
              <div className="text">
                Unlimited icon sets to choose from
              </div>
              <div className="border-hover" />
            </div>
            <div className="free__item">
              <div className="icon d-flex justify-content-center align-items-center">
                <div className="position">5</div>
              </div>
              <div className="text">
                All functions are completely free of charge
              </div>
              <div className="border-hover" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="private-container" />
    <section className="privacy">
      <div className="privacy__content">
        <div className="container">
          <div className="privacy__title landing-title">
            Privacy Guaranteed
          </div>
          <div className="privacy__main">
            <div className="privacy__left">
              <img src={bg3} />
            </div>
            <div className="privacy__right wow bounceInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
              <div className="privacy__item">
                <img src={iconTick} />
                <div className="text">
                  Users have full access and ownership of their own data
                </div>
              </div>
              <div className="privacy__item">
                <img src={iconTick} />
                <div className="text">
                  Viblo CV absolutely does not sell, or share user data with recruitment companies
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
    <section className="slogan-footer">
      <div className="slogan-footer__content d-flex">
        <div className="slogan-footer__left">
          <div className="text">
            <span className="slogan-text good-cv">A GOOD CV</span>
            <span className="slogan-text">
              {' '}
              makes your life
              EASIER
            </span>
            <div className="slogan-text">whereas a Bad CV makes it a disaster</div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <a
              className="landing-button button-bg-blue"
              href="https://accounts.viblo.asia/login?service=cv&amp;continue=https://cv.viblo.asia/"
            >
              Create CV
            </a>
          </div>
        </div>
        <div className="slogan-footer__right">
          <img src={bg4} />
        </div>
      </div>
    </section>
    <div className="footer">
      ?? 2021 Viblo Team. A product of Viblo Platform. All rights reserved.
    </div>
    <a id="back-to-top" href="#" className="back-to-top" role="button" title="Click to return on the top page">
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.165441 5.56606C-0.0628625 5.80489 -0.0538623 6.18361 0.186141 6.41109C0.426144 6.63886 0.805949 6.62929 1.03455 6.39046L5.39991 1.80454L5.39991 21.4022C5.39991 21.7322 5.66872 22 5.99992 22C6.33112 22 6.59993 21.7322 6.59993 21.4022L6.59993 1.82367L10.9656 6.39046C11.1942 6.62959 11.574 6.63886 11.814 6.41109C11.9376 6.29361 12 6.13609 12 5.97826C12 5.83 11.9451 5.68174 11.8344 5.56606L6.84833 0.350326C6.62183 0.124347 6.32062 -2.76283e-07 5.99992 -2.62265e-07C5.67921 -2.48246e-07 5.37801 0.124347 5.14131 0.360788L0.165441 5.56606Z"
          fill="white"
        />
      </svg>
    </a>
  </div>
)
