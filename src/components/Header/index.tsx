/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/alt-text */
import { Dropdown } from 'antd'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { default_avatar, logo } from '../../assets/images'
import { actionGetUserInfo } from '../../store/login/actions'
import { actionSetLoading } from '../../store/ui/actions'
import { UserInfo } from '../../utils/types/user'

interface HeaderProps {
  hasInfo?: boolean;
  userInfo?: boolean;
  tab: 'Home' | 'MyCV' | 'MyProfile';
}

export const Header = ({ hasInfo = false, userInfo, tab }: HeaderProps) => {
  const dispatch = useDispatch()

  const loginInfo1: UserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const { loginInfo } = useSelector((store: any) => store.login)
  const id = useMemo(() => loginInfo1?._id, [])
  const getInfo = async () => {
    dispatch(actionGetUserInfo(id))
  }

  console.log('====================================')
  console.log('loginInfo.Routes', loginInfo)
  console.log('====================================')

  useEffect(() => {
    if (!hasInfo) getInfo()
  }, [])

  const info = useMemo(() => {
    if (hasInfo) return userInfo
    return loginInfo || loginInfo1
  }, [hasInfo, userInfo, loginInfo, loginInfo1])

  const menu = (
    <ul
      className="ant-dropdown-menu header__dropdown ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical"
      role="menu"
      tabIndex={0}
    >
      <li className="ant-dropdown-menu-item" role="menuitem">
        {tab !== 'MyProfile' ? (
          <a className="flex items-center" href="/my-profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M18 14.2367V19.1379H16.9885V14.2367C16.9885 12.7563 15.7839 11.5517 14.3034 11.5517H9.69655C8.21609 11.5517 7.01149 12.7563 7.01149 14.2367V19.1379H6V14.2367C6 12.1999 7.65977 10.5402 9.69655 10.5402H14.3034C16.3402 10.5402 18 12.1999 18 14.2367Z"
                  fill="#758191"
                />
                <path
                  d="M12 3C10.1471 3 8.64368 4.50345 8.64368 6.35632C8.64368 8.2092 10.1471 9.71264 12 9.71264C13.8529 9.71264 15.3563 8.2092 15.3563 6.35632C15.3563 4.50345 13.8529 3 12 3ZM12 8.70115C10.7034 8.70115 9.65517 7.65287 9.65517 6.35632C9.65517 5.05977 10.7034 4.01149 12 4.01149C13.2966 4.01149 14.3448 5.05977 14.3448 6.35632C14.3448 7.65287 13.2966 8.70115 12 8.70115Z"
                  fill="#758191"
                />
              </g>
            </svg>
            <span className="ml-3">My Profile</span>
          </a>
        ) : (
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M18 14.2367V19.1379H16.9885V14.2367C16.9885 12.7563 15.7839 11.5517 14.3034 11.5517H9.69655C8.21609 11.5517 7.01149 12.7563 7.01149 14.2367V19.1379H6V14.2367C6 12.1999 7.65977 10.5402 9.69655 10.5402H14.3034C16.3402 10.5402 18 12.1999 18 14.2367Z"
                  fill="#758191"
                />
                <path
                  d="M12 3C10.1471 3 8.64368 4.50345 8.64368 6.35632C8.64368 8.2092 10.1471 9.71264 12 9.71264C13.8529 9.71264 15.3563 8.2092 15.3563 6.35632C15.3563 4.50345 13.8529 3 12 3ZM12 8.70115C10.7034 8.70115 9.65517 7.65287 9.65517 6.35632C9.65517 5.05977 10.7034 4.01149 12 4.01149C13.2966 4.01149 14.3448 5.05977 14.3448 6.35632C14.3448 7.65287 13.2966 8.70115 12 8.70115Z"
                  fill="#758191"
                />
              </g>
            </svg>
            <span className="ml-3">My Profile</span>
          </div>
        )}
      </li>
      <li className="ant-dropdown-menu-item" role="menuitem">
        <a
          href="/login"
          className="flex items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M11.6978 18.0905H7.78544C6.74987 18.0905 5.90951 17.2471 5.90951 16.2146V6.78544C5.90951 5.74987 6.75294 4.90951 7.78544 4.90951H11.7615C12.0278 4.90951 12.2412 4.69612 12.2412 4.42975C12.2412 4.16339 12.0278 3.95 11.7615 3.95H7.78544C6.22023 3.95 4.95 5.22348 4.95 6.78544V16.2146C4.95 17.7798 6.22348 19.05 7.78544 19.05H11.6978C11.9642 19.05 12.1775 18.8366 12.1775 18.5702C12.1775 18.3036 11.9607 18.0905 11.6978 18.0905Z"
                fill="#758191"
                stroke="#758191"
                strokeWidth="0.1"
              />
              <path
                d="M18.8126 11.1619L16.0817 8.4309C15.8934 8.24266 15.5912 8.24266 15.4029 8.4309C15.2147 8.61915 15.2147 8.92139 15.4029 9.10964L17.3167 11.0234H8.71821C8.45184 11.0234 8.23845 11.2368 8.23845 11.5032C8.23845 11.7696 8.45184 11.9829 8.71821 11.9829H17.3167L15.4029 13.8967C15.2147 14.085 15.2147 14.3872 15.4029 14.5755C15.495 14.6676 15.6191 14.7174 15.7407 14.7174C15.8613 14.7174 15.9859 14.6714 16.0788 14.5752C16.0789 14.575 16.079 14.5749 16.0791 14.5748L18.8098 11.8441C19.0007 11.6532 19.0018 11.3476 18.8128 11.1621C18.8128 11.162 18.8127 11.162 18.8126 11.1619Z"
                fill="#758191"
                stroke="#758191"
                strokeWidth="0.1"
              />
            </g>
          </svg>
          <span className="ml-3">Logout</span>
        </a>
      </li>
    </ul>
  )
  return (
    <div>
      <div className="header" style={{ height: 56 }}>
        <div className="header__wraper">
          <div className="header__left-side">
            <div className="header__logo">
              <a href="/">
                <img src={logo} />
              </a>
            </div>
            <div className="header__nav">
              <a href="/" className={`${tab === 'Home' && 'header__nav--active'} `}>
                Home
              </a>
              {
                tab === 'Home' && (
                <div
                  className="header__nav-slider"
                  style={{ width: 43, left: 0 }}
                />
                )
              }
              <a href="/my-cv" className={`${tab === 'MyCV' && 'header__nav--active'} `}>
                My CV
                {
                tab === 'MyCV' && (
                <div
                  className="header__nav-slider"
                  style={{ width: 47, left: 93 }}
                />
                )
              }
              </a>
              <a
                href="/my-profile"
                className={`${tab === 'MyProfile' && 'header__nav--active'} `}
              >
                My Profile
                {
                tab === 'MyProfile' && (
                <div
                  className="header__nav-slider"
                  style={{ width: 74, left: 190 }}
                />
                )
              }
              </a>

            </div>
          </div>
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="header__right-side">
              <a className="text-black ant-dropdown-trigger">
                <span
                  className="ant-avatar ant-avatar-circle ant-avatar-image"
                  style={{
                    width: 40,
                    height: 40,
                    lineHeight: 40,
                    fontSize: 18,
                  }}
                >
                  <img src={info?.avatar || default_avatar} />
                </span>
                <span>{info?.name}</span>
                <span
                  role="img"
                  aria-label="caret-down"
                  className="anticon anticon-caret-down"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    className=""
                    data-icon="caret-down"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                  </svg>
                </span>
              </a>
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="sm-header" style={{ height: 56 }}>
        <div className="sm-header__top">
          <div className="sm-header__top__btn-nav sm-header__top__btn-nav--left">
            <i className="fas fa-align-left" />
          </div>
          <div className="sm-header__top__logo">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <div className="sm-header__top__right-side">
            <a className="text-black ant-dropdown-trigger">
              <span
                className="ant-avatar ant-avatar-circle ant-avatar-image"
                style={{
                  width: 40,
                  height: 40,
                  lineHeight: 40,
                  fontSize: 18,
                }}
              >
                <img src={info?.avatar || default_avatar} />
              </span>
              <span>{info?.name}</span>
              <span
                role="img"
                aria-label="caret-down"
                className="anticon anticon-caret-down"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  className=""
                  data-icon="caret-down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
