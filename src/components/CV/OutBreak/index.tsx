/* eslint-disable jsx-a11y/alt-text */
import Rating from '@material-ui/lab/Rating'
import React from 'react'
import { CVTypes } from '../../../utils/common'

export const OutBreak = ({ userInfo, onUploadAvatar }: CVTypes) => (
  <div className="cv-content">
    {/* <div className="row__double">
      <div className="row__double--left">
        <div className="information-outbreak section">
          <div className="information-outbreak__content">
            <div>
              <div className="information-outbreak__header">
                <div className="textarea-field title">
                  <textarea
                    placeholder="Section name"
                    className="ant-input"
                    style={{ height: 34, maxHeight: 0.0072e+15 }}
                  >
                    CONTACT
                  </textarea>
                </div>
              </div>
            </div>
            <div className="information-outbreak__row">
              <div className="information-outbreak__row__left">
                <div className="information-outbreak__input-icon">
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="envelope"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    />
                  </svg>
                  <div className="textarea-field information-outbreak__other">
                    <textarea
                      placeholder="Your Email"
                      className="ant-input"
                      style={{ height: 32, maxHeight: 9.0072e+15 }}
                    >
                      {userInfo?.email}
                    </textarea>
                  </div>
                </div>
                <div className="information-outbreak__input-icon">
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="birthday-cake"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"
                    />
                  </svg>
                  <div className="textarea-field information-outbreak__other">
                    <textarea
                      placeholder="Your Date of Birth"
                      className="ant-input"
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    >
                      {userInfo?.birthday}
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="information-outbreak__row__right">
                <div className="information-outbreak__input-icon">
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="phone"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    />
                  </svg>
                  <div className="textarea-field information-outbreak__other">
                    <textarea
                      placeholder="Your Phone Number"
                      className="ant-input"
                      value={userInfo?.phone}
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </div>
                <div className="information-outbreak__input-icon">
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="map-marker-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    />
                  </svg>
                  <div className="textarea-field information-outbreak__other">
                    <textarea
                      placeholder="Your Address"
                      className="ant-input"
                      value={userInfo?.address}
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-outbreak section">
          <div className="contact-outbreak__content">
            <div className="toolbar information-toolbar">
              <div className="toolbar__item-position">
                <div className="toolbar__item-setting" title="Remove section">
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2132 3.35278L11.882 2.36C11.7558 1.98189 11.4033 1.72783 11.0048 1.72783H8.22122V0.821571C8.22122 0.368614 7.85295 0 7.40011 0H4.85105C4.39832 0 4.02994 0.368614 4.02994 0.821571V1.72783H1.24651C0.847909 1.72783 0.495316 1.98189 0.369202 2.36L0.0380105 3.35278C-0.0374061 3.5788 0.000817208 3.82908 0.140092 4.02237C0.279366 4.21566 0.504701 4.33113 0.742967 4.33113H1.08915L1.8511 13.7532C1.90775 14.4523 2.50101 15 3.20196 15H9.20381C9.90465 15 10.498 14.4523 10.5546 13.7531L11.3165 4.33113H11.5082C11.7465 4.33113 11.9718 4.21566 12.1111 4.02248C12.2503 3.82919 12.2886 3.5788 12.2132 3.35278ZM4.90884 0.878906H7.34232V1.72783H4.90884V0.878906ZM9.67851 13.6822C9.6586 13.9284 9.45009 14.1211 9.20381 14.1211H3.20196C2.95568 14.1211 2.74717 13.9284 2.72726 13.6822L1.97092 4.33113H10.4347L9.67851 13.6822ZM0.931451 3.45222L1.20302 2.63809C1.2092 2.61932 1.22671 2.60674 1.24651 2.60674H11.0048C11.0246 2.60674 11.042 2.61932 11.0483 2.63809L11.3198 3.45222H0.931451Z"
                      fill="#E73232"
                    />
                    <path
                      d="M8.27695 13.6511C8.28473 13.6515 8.2924 13.6516 8.30018 13.6516C8.53238 13.6516 8.72647 13.4697 8.7386 13.2351L9.15128 5.31323C9.16387 5.07085 8.97756 4.86405 8.73529 4.85146C8.49233 4.83853 8.28622 5.02507 8.27351 5.26746L7.86095 13.1893C7.84837 13.4317 8.03456 13.6385 8.27695 13.6511Z"
                      fill="#E73232"
                    />
                    <path
                      d="M3.5324 13.2361C3.54521 13.4704 3.73908 13.6517 3.97082 13.6517C3.97883 13.6517 3.98707 13.6514 3.99519 13.651C4.23746 13.6378 4.4232 13.4307 4.41004 13.1883L3.9778 5.26647C3.96464 5.02408 3.7575 4.83835 3.51512 4.85162C3.27284 4.86478 3.08711 5.07192 3.10027 5.31431L3.5324 13.2361Z"
                      fill="#E73232"
                    />
                    <path
                      d="M6.13086 13.6517C6.37359 13.6517 6.57031 13.455 6.57031 13.2122V5.29041C6.57031 5.04768 6.37359 4.85095 6.13086 4.85095C5.88813 4.85095 5.69141 5.04768 5.69141 5.29041V13.2122C5.69141 13.455 5.88813 13.6517 6.13086 13.6517Z"
                      fill="#E73232"
                    />
                  </svg>
                </div>
              </div>
              <div className="toolbar__item-setting" title="Theme Setting">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="#eee"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="1.45996" y="0.5" width="3.8" height="14" rx="0.5" stroke="#758191" />
                  <rect x="7.45898" y="0.5" width="7.4" height="3.2" rx="0.5" stroke="#758191" />
                  <rect x="7.45898" y="6.5" width="7.4" height="8" rx="0.5" stroke="#758191" />
                </svg>
              </div>
              <div className="toolbar__item-setting" title="Content Setting">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="#eee"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6934 6.70125L15.8156 6.55238C15.7375 6.33485 15.6492 6.12144 15.5516 5.91394L16.0685 5.19077C16.5182 4.55891 16.446 3.70555 15.8985 3.16338L14.8436 2.10841C14.5455 1.81027 14.1503 1.64603 13.7308 1.64603C13.4006 1.64603 13.0847 1.74779 12.8197 1.93854L12.0937 2.45558C11.8692 2.34943 11.6414 2.25563 11.412 2.17461L11.2669 1.31451C11.1392 0.55275 10.4858 0 9.71315 0H8.22285C7.45038 0 6.79697 0.55275 6.66952 1.313L6.51695 2.20674C6.30148 2.28543 6.08903 2.37483 5.88098 2.47467L5.16824 1.96133C4.901 1.76894 4.58391 1.66731 4.25116 1.66731C3.82764 1.66731 3.43227 1.83183 3.13742 2.13066L2.08012 3.18452C1.5341 3.73055 1.46255 4.58322 1.91011 5.21191L2.43539 5.94992C2.33858 6.15825 2.25151 6.37262 2.17461 6.59138L1.31438 6.73654C0.55275 6.8644 0 7.51781 0 8.29028V9.78058C0 10.5531 0.55275 11.2065 1.313 11.334L2.20674 11.4865C2.28543 11.7021 2.37497 11.9147 2.47467 12.1226L1.96326 12.834C1.5135 13.4658 1.58574 14.3193 2.13327 14.8613L3.18809 15.9163C3.48624 16.2144 3.88147 16.3787 4.30087 16.3787C4.63115 16.3787 4.94701 16.2769 5.21191 16.0863L5.94992 15.561C6.14383 15.6511 6.34488 15.7337 6.55128 15.808L6.69754 16.6856C6.82539 17.4473 7.4788 18 8.25128 18H9.74501C10.5175 18 11.171 17.4473 11.2986 16.6866L11.4475 15.8086C11.665 15.7305 11.8784 15.6422 12.0859 15.5446L12.8068 16.0598C13.074 16.2522 13.3911 16.354 13.7238 16.354C14.1431 16.354 14.5383 16.1897 14.8365 15.8916L15.8913 14.8366C16.4375 14.2906 16.5089 13.4379 16.0613 12.8092L15.5439 12.0826C15.6441 11.8703 15.7327 11.657 15.8089 11.445L16.6855 11.2989C17.4471 11.171 17.9999 10.5176 17.9999 9.74515V8.25787C18.0085 7.48457 17.4597 6.83034 16.6934 6.70125ZM16.9452 9.74515C16.9452 10.0004 16.7625 10.2165 16.5115 10.2586L15.3489 10.4524C15.1344 10.4881 14.9613 10.6394 14.8969 10.8475C14.7936 11.1822 14.6518 11.5242 14.4756 11.8637C14.3759 12.0552 14.3918 12.2833 14.5171 12.4588L15.2022 13.4209C15.35 13.6285 15.3262 13.9103 15.1456 14.0909L14.0908 15.1458C13.9904 15.2461 13.8635 15.2993 13.7238 15.2993C13.6137 15.2993 13.5097 15.2663 13.4216 15.2029L12.4636 14.5182C12.2874 14.3917 12.0583 14.3757 11.8659 14.4764C11.5437 14.6451 11.2014 14.7869 10.8483 14.8977C10.6423 14.9623 10.4919 15.1348 10.4561 15.3471L10.2586 16.5109C10.2165 16.7627 10.0004 16.9453 9.74501 16.9453H8.25128C7.99585 16.9453 7.77997 16.7627 7.73781 16.5116L7.54404 15.349C7.50861 15.1359 7.35864 14.9631 7.15265 14.898C6.80466 14.7881 6.47328 14.6519 6.16745 14.493C6.08409 14.4498 5.99387 14.4285 5.90405 14.4285C5.78787 14.4285 5.67224 14.4642 5.57323 14.5346L4.59805 15.2287C4.51016 15.292 4.41019 15.324 4.30087 15.324C4.16121 15.324 4.03432 15.271 3.93393 15.1705L2.87718 14.1139C2.69687 13.9353 2.67393 13.6544 2.82101 13.4477L3.50203 12.5004C3.63016 12.3225 3.64581 12.0918 3.54254 11.8978C3.36937 11.573 3.22586 11.2324 3.11586 10.8854C3.05077 10.6808 2.87897 10.5312 2.66748 10.4951L1.48892 10.2942C1.23734 10.2519 1.05469 10.0359 1.05469 9.78058V8.29028C1.05469 8.03499 1.23734 7.81897 1.48933 7.77667L2.63768 7.5829C2.85233 7.54678 3.02522 7.39503 3.08908 7.18629C3.19743 6.83171 3.33682 6.4888 3.5034 6.16745C3.60255 5.97643 3.58662 5.74887 3.46179 5.57323L2.76938 4.60039C2.62147 4.39275 2.64523 4.11095 2.82527 3.93091L3.88367 2.87608L3.88751 2.8721C3.98268 2.77528 4.11177 2.722 4.25116 2.722C4.3613 2.722 4.46539 2.75496 4.55191 2.81731L5.50333 3.50217C5.68144 3.63043 5.91243 3.64581 6.10579 3.54254C6.43057 3.36937 6.77115 3.22586 7.11777 3.116C7.32239 3.05104 7.47194 2.87952 7.50833 2.66748L7.70938 1.48892C7.75154 1.23734 7.96756 1.05469 8.22299 1.05469H9.71329C9.96858 1.05469 10.1846 1.23734 10.2269 1.48933L10.4207 2.63809C10.4569 2.85287 10.6089 3.02563 10.8178 3.08936C11.1739 3.19757 11.5291 3.34369 11.8736 3.52386C12.065 3.62384 12.2932 3.60818 12.4695 3.4828L13.4338 2.79602C13.5216 2.73271 13.6215 2.70071 13.731 2.70071C13.8705 2.70071 13.9974 2.75372 14.0979 2.85425L15.1545 3.91086C15.3349 4.08939 15.3579 4.37036 15.2099 4.57814L14.5245 5.53711C14.3987 5.71344 14.383 5.94223 14.4834 6.13394C14.6522 6.45612 14.7939 6.79848 14.9049 7.15169C14.9696 7.35768 15.1419 7.50792 15.3542 7.54376L16.5171 7.7411L16.5181 7.74124C16.769 7.7834 16.9487 7.99626 16.9452 8.24744V9.74515Z"
                    fill="#758191"
                  />
                  <path
                    d="M8.99969 5.50024C7.06995 5.50024 5.5 7.07019 5.5 8.99994C5.5 10.9297 7.06995 12.4996 8.99969 12.4996C10.9294 12.4996 12.4994 10.9297 12.4994 8.99994C12.4994 7.07019 10.9294 5.50024 8.99969 5.50024ZM8.99969 11.4449C7.65153 11.4449 6.55469 10.3481 6.55469 8.99994C6.55469 7.65178 7.65153 6.55493 8.99969 6.55493C10.3479 6.55493 11.4447 7.65178 11.4447 8.99994C11.4447 10.3481 10.3479 11.4449 8.99969 11.4449Z"
                    fill="#758191"
                  />
                </svg>
              </div>
            </div>
            <div className="contact-outbreak__row">
              <div className="contact-outbreak__input-icon">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
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
                <div className="textarea-field contact-outbreak__other contact-link-input">
                  <textarea
                    placeholder="Paste your Website link"
                    className="ant-input"
                    value={userInfo?.website}
                    style={{ height: 16, maxHeight: 9.0072e+15 }}
                  />
                </div>
                <a
                  className="contact-link-view"
                  href="/resumes/edit/eaa42298-10a8-356f-ae40-bf21adc45525"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cv-text-box ">
                    <textarea
                      readOnly={false}
                      className="ant-input"
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </a>
              </div>
              <div className="contact-outbreak__input-icon">
                <svg
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="linkedin"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <div className="textarea-field contact-outbreak__other contact-link-input">
                  <textarea
                    placeholder="Paste your LinkedIn link"
                    className="ant-input"
                    value={userInfo?.linkedln}
                    style={{ height: 16, maxHeight: 9.0072e+15 }}
                  />
                </div>
                <a
                  className="contact-link-view"
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cv-text-box ">
                    <textarea
                      readOnly={false}
                      className="ant-input"
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </a>
              </div>
              <div className="contact-outbreak__input-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
                <div className="textarea-field contact-outbreak__other contact-link-input">
                  <textarea
                    placeholder="Paste your Github link"
                    className="ant-input"
                    value={userInfo?.github}
                    style={{ height: 16, maxHeight: 9.0072e+15 }}
                  />
                </div>
                <a
                  className="contact-link-view"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cv-text-box ">
                    <textarea
                      readOnly={false}
                      className="ant-input"
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </a>
              </div>
              <div className="contact-outbreak__input-icon">
                <svg
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="viblo"
                  className="svg-inline--fa fa-viblo fa-w-15 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 370 400"
                >
                  <path
                    fill="currentColor"
                    d="M144,333h48.4L328.2,5.3L279.6,5l-73.8,177.8h-76.2L56.1,5H7.5L144,333z M27,363.9h281.8V405H27V363.9z"
                  />
                </svg>
                <div className="textarea-field contact-outbreak__other contact-link-input">
                  <textarea
                    placeholder="Paste your Viblo link"
                    className="ant-input"
                    value={userInfo?.viblo}
                    style={{ height: 16, maxHeight: 9.0072e+15 }}
                  />
                </div>
                <a
                  className="contact-link-view"
                  href="https://viblo.asia/u/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cv-text-box ">
                    <textarea
                      readOnly={false}
                      className="ant-input"
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </a>
              </div>
              <div className="contact-outbreak__input-icon">
                <svg
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="instagram"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
                <div className="textarea-field contact-outbreak__other contact-link-input">
                  <textarea
                    placeholder="Paste your Instagram link"
                    className="ant-input"
                    value={userInfo?.instagram}
                    style={{ height: 32, maxHeight: 9.0072e+15 }}
                  />
                </div>
                <a
                  className="contact-link-view"
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cv-text-box ">
                    <textarea
                      readOnly={false}
                      className="ant-input"
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </a>
              </div>
              <div className="contact-outbreak__input-icon">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="skype"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-88.1 216C766.9 823.4 729 839 688.4 839c-26.1 0-51.8-6.8-74.6-19.7l-22.5-12.7-25.5 4.5c-17.8 3.2-35.8 4.8-53.6 4.8-41.4 0-81.3-8.1-119.1-24.1-36.3-15.3-69-37.3-97.2-65.5a304.29 304.29 0 0 1-65.5-97.1c-16-37.7-24-77.6-24-119 0-17.4 1.6-35.2 4.6-52.8l4.4-25.1L203 410a151.02 151.02 0 0 1-19.1-73.4c0-40.6 15.7-78.5 44.4-107.2C257.1 200.7 295 185 335.6 185a153 153 0 0 1 71.4 17.9l22.4 11.8 24.8-4.8c18.9-3.6 38.4-5.5 58-5.5 41.4 0 81.3 8.1 119 24 36.5 15.4 69.1 37.4 97.2 65.5 28.2 28.1 50.2 60.8 65.6 97.2 16 37.7 24 77.6 24 119 0 18.4-1.7 37-5.1 55.5l-4.7 25.5 12.6 22.6c12.6 22.5 19.2 48 19.2 73.7 0 40.7-15.7 78.5-44.4 107.2zM583.4 466.2L495 446.6c-33.6-7.7-72.3-17.8-72.3-49.5s27.1-53.9 76.1-53.9c98.7 0 89.7 67.8 138.7 67.8 25.8 0 48.4-15.2 48.4-41.2 0-60.8-97.4-106.5-180-106.5-89.7 0-185.2 38.1-185.2 139.5 0 48.8 17.4 100.8 113.6 124.9l119.4 29.8c36.1 8.9 45.2 29.2 45.2 47.6 0 30.5-30.3 60.3-85.2 60.3-107.2 0-92.3-82.5-149.7-82.5-25.8 0-44.5 17.8-44.5 43.1 0 49.4 60 115.4 194.2 115.4 127.7 0 191-61.5 191-144 0-53.1-24.5-109.6-121.3-131.2z"
                  />
                </svg>
                <div className="textarea-field contact-outbreak__other contact-link-input">
                  <textarea
                    placeholder="Paste your Skype link"
                    className="ant-input"
                    value={userInfo?.skype}
                    style={{ height: 16, maxHeight: 9.0072e+15 }}
                  />
                </div>
                <div className="cv-text-box contact-link-view">
                  <textarea
                    readOnly={false}
                    className="ant-input"
                    style={{ height: 16, maxHeight: 9.0072e+15 }}
                  />
                </div>
              </div>
              <div className="contact-outbreak__input-icon">
                <svg
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="facebook"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                  />
                </svg>
                <div className="textarea-field contact-outbreak__other contact-link-input">
                  <textarea
                    placeholder="Paste your Facebook link"
                    className="ant-input"
                    value={userInfo?.facebook}
                    style={{ height: 32, maxHeight: 9.0072e+15 }}
                  />
                </div>
                <a
                  className="contact-link-view"
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cv-text-box ">
                    <textarea
                      readOnly={false}
                      className="ant-input"
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row__double--right">
        <div className="avatar-outbreak section">
          <div className="avatar-outbreak__content">
            <div className="upload-avatar">
              <div className="flex flex-col avatar-square">
                <div className="flex justify-center cursor-pointer upload-avatar__img">
                  <img
                    src={userInfo?.avatar}
                    style={{ width: 246, height: 246 }}
                  />
                </div>
                <input type="file" id="imgUpload" style={{ display: 'none' }} />
                <div
                  className="upload-avatar__btn-upload cursor-pointer item-square"
                  style={{ width: 246 }}
                  onClick={onUploadAvatar}
                >
                  <i
                    aria-label="icon: camera"
                    className="anticon anticon-camera text-3xl text-white flex justify-center h-full items-center"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      className=""
                      data-icon="camera"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="avatar-outbreak__intro">
            <div className="name">
              <div className="textarea-field title">
                <div
                  className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                  lang="en"
                  dir="ltr"
                  role="textbox"
                  aria-label="Rich Text Editor, main"
                  contentEditable="true"
                >
                  <p>
                    {userInfo?.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="position">
              <div className="textarea-field title">
                <div
                  className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                  lang="en"
                  dir="ltr"
                  role="textbox"
                  aria-label="Rich Text Editor, main"
                  contentEditable="true"
                >
                  <p className="ck-placeholder" data-placeholder={userInfo?.position}>
                    <br
                      data-cke-filler="true"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row__double">
      <div className="row__double--left">
        <div className="career-goal-outbreak section-ttl">
          <div className="career-goal-outbreak__container" />
          <div>
            <div className="career-goal-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 34, maxHeight: 0.0072e+15 }}
                >
                  CAREER GOAL
                </textarea>
              </div>
            </div>
          </div>
          <div className="career-goal-outbreak__item">
            <div className="textarea-field career-goal-outbreak__desc">
              <div
                className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                lang="en"
                dir="ltr"
                role="textbox"
                aria-label="Rich Text Editor, main"
                contentEditable="true"
                id="career_goal"
              >
                <p>{userInfo?.career_goal}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-outbreak section-ttl">
          <div className="education-outbreak__container" />
          <div>
            <div className="education-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 34, maxHeight: 0.0072e+15 }}
                >
                  EDUCATION
                </textarea>
              </div>
            </div>
          </div>
          {userInfo?.educations?.map((item: any) => (
            <div className="education-outbreak__item section">
              <div className="education-outbreak__group">
                <div className="left">
                  <div className="textarea-field education-outbreak__position">
                    <textarea
                      placeholder="Major"
                      className="ant-input"
                      value={item?.major}
                      style={{ height: 20, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                  <div className="education-outbreak__time">
                    <div className="input-field education-outbreak__from">
                      <input
                        placeholder="Year"
                        type="text"
                        className="ant-input"
                        value={item?.startTime}
                      />
                    </div>
                    <div className="education-outbreak__time-divide">-</div>
                    <div className="input-field education-outbreak__to">
                      <input
                        placeholder="Year"
                        type="text"
                        className="ant-input"
                        value={item?.endTime}
                      />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="textarea-field education-outbreak__company">
                    <textarea
                      placeholder="School name"
                      className="ant-input"
                      value={item?.school}
                      style={{ height: 20, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                  <div className="textarea-field education-outbreak__desc">
                    <div
                      className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                      lang="en"
                      dir="ltr"
                      role="textbox"
                      aria-label="Rich Text Editor, main"
                      contentEditable="true"
                    >
                      <p className="ck-placeholder" data-placeholder={item?.description}>

                        <br
                          data-cke-filler="true"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row__double--right">
        <div className="experience-outbreak section-ttl">
          <div className="experience-outbreak__container" />
          <div>
            <div className="experience-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 34, maxHeight: 0.0072e+15 }}
                >
                  WORK EXPERIENCE
                </textarea>
              </div>
            </div>
          </div>
          {userInfo?.experiences?.map((item: any) => (
            <div className="experience-outbreak__item section">
              <div className="experience-outbreak__group">
                <div className="left">
                  <div className="textarea-field experience-outbreak__position">
                    <textarea
                      placeholder="Your position"
                      className="ant-input"
                      value={item?.position}
                      style={{ height: 20, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                  <div className="experience-outbreak__time">
                    <div className="input-field experience-outbreak__from">
                      <input
                        placeholder="Year"
                        type="text"
                        className="ant-input"
                        value={item?.startTime}
                      />
                    </div>
                    <div className="experience-outbreak__time-divide">-</div>
                    <div className="input-field experience-outbreak__to">
                      <input
                        placeholder="Year"
                        type="text"
                        className="ant-input"
                        value={item?.endTime}
                      />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="textarea-field experience-outbreak__company">
                    <textarea
                      placeholder="Company name"
                      className="ant-input"
                      value={item?.company}
                      style={{ height: 20, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                  <div className="textarea-field experience-outbreak__desc">
                    <div
                      className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                      lang="en"
                      dir="ltr"
                      role="textbox"
                      aria-label="Rich Text Editor, main"
                      contentEditable="true"
                    >
                      <p className="ck-placeholder" data-placeholder={item?.description}>

                        <br
                          data-cke-filler="true"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="project-outbreak section-ttl">
          <div className="project-outbreak__container" />
          <div>
            <div className="project-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 34, maxHeight: 0.0072e+15 }}
                >
                  PROJECT
                </textarea>
              </div>
            </div>
          </div>
          {userInfo?.projects?.map((item: any) => (
            <div className="project-outbreak__item section">
              <div className="project-outbreak__group">
                <div className="left">
                  <div className="textarea-field project-outbreak__position">
                    <textarea
                      placeholder="Your position"
                      className="ant-input"
                      value={item?.position}
                      style={{ height: 20, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                  <div className="project-outbreak__time">
                    <div className="input-field project-outbreak__from">
                      <input
                        placeholder="Year"
                        type="text"
                        className="ant-input"
                        value={item?.startTime}
                      />
                    </div>
                    <div className="project-outbreak__time-divide">-</div>
                    <div className="input-field project-outbreak__to">
                      <input
                        placeholder="Year"
                        type="text"
                        className="ant-input"
                        value={item?.endTime}
                      />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="textarea-field project-outbreak__company">
                    <textarea
                      placeholder="Project name"
                      className="ant-input"
                      value={item?.pjName}
                      style={{ height: 20, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                  <div className="textarea-field project-outbreak__desc">
                    <div
                      className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                      lang="en"
                      dir="ltr"
                      role="textbox"
                      aria-label="Rich Text Editor, main"
                      contentEditable="true"
                    >
                      <p className="ck-placeholder" data-placeholder={item?.description}>

                        <br
                          data-cke-filler="true"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="row__single">
      <div className="row__single--left">
        <div className="achievement-outbreak section-ttl">
          <div className="achievement-outbreak__container" />
          <div>
            <div className="achievement-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 34, maxHeight: 0.0072e+15 }}
                >
                  ACHIEVEMENT
                </textarea>
              </div>
            </div>
          </div>
          {userInfo?.achievements?.map((item: any) => (
            <div className="achievement-outbreak__list">
              <div className="achievement-outbreak__item section">
                <div className="achievement-outbreak__group">
                  <div className="left">
                    <div className="icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36.4844 0H3.51562C1.57715 0 0 1.57715 0 3.51562V5.3009C0 8.19275 0.995483 11.03 2.80151 13.2889C4.34418 15.2173 6.39954 16.6489 8.74329 17.4304L9.98718 17.8455C11.4301 20.1944 13.6902 22.005 16.4062 22.8653V24.6875C16.4062 25.3342 15.8798 25.8594 15.2344 25.8594C13.2959 25.8594 11.7188 27.4365 11.7188 29.375V30.5469H28.2812V29.375C28.2812 27.4365 26.7041 25.8594 24.7656 25.8594C24.1202 25.8594 23.5938 25.3342 23.5938 24.6875V22.8653C26.3098 22.0047 28.5699 20.1944 30.0128 17.8455L31.2567 17.4304C33.6005 16.6489 35.6558 15.2173 37.1985 13.2889C39.0045 11.03 40 8.19275 40 5.3009V3.51562C40 1.57715 38.4229 0 36.4844 0ZM4.63257 11.824C3.15613 9.97925 2.34375 7.66296 2.34375 5.3009V3.51562C2.34375 2.86896 2.87018 2.34375 3.51562 2.34375H7.15393L8.34747 13.0771C8.41614 13.6957 8.54187 14.2969 8.70483 14.884C7.11945 14.2087 5.71472 13.1775 4.63257 11.824ZM25.4956 10.0342L23.6072 11.8311L24.0512 14.3625C24.129 14.7995 23.9505 15.2435 23.5934 15.5078C23.2343 15.7712 22.7582 15.8124 22.3621 15.6073L20 14.3942L17.6379 15.6073C17.2421 15.8105 16.7642 15.7721 16.4066 15.5078C16.0495 15.2448 15.871 14.8007 15.9488 14.3625L16.3928 11.8311L14.5047 10.0342C14.1797 9.72412 14.0607 9.25598 14.1956 8.82812C14.3329 8.39996 14.7037 8.08746 15.1477 8.0246L17.7823 7.65045L18.9542 5.33081C19.3524 4.54132 20.6479 4.54132 21.0461 5.33081L22.218 7.65045L24.8523 8.0246C25.2966 8.08777 25.6671 8.39996 25.8047 8.82812C25.9393 9.25598 25.8206 9.72412 25.4956 10.0342ZM37.6562 5.3009C37.6562 7.66296 36.8439 9.97925 35.3674 11.824C34.2853 13.1775 32.8806 14.2087 31.2952 14.884C31.4581 14.2969 31.5839 13.6957 31.6525 13.0771L32.8461 2.34375H36.4844C37.1298 2.34375 37.6562 2.86896 37.6562 3.51562V5.3009ZM31.7188 37.6562H30.5469V34.0625C30.5469 33.4152 30.0223 32.8906 29.375 32.8906H10.625C9.97772 32.8906 9.45312 33.4152 9.45312 34.0625V37.6562H8.28125C7.63367 37.6562 7.10938 38.1805 7.10938 38.8281C7.10938 39.4757 7.63367 40 8.28125 40H31.7188C32.3663 40 32.8906 39.4757 32.8906 38.8281C32.8906 38.1805 32.3663 37.6562 31.7188 37.6562ZM20.0001 8.45736L20.4029 9.25357C20.5768 9.59597 20.904 9.83157 21.2842 9.88528L22.1265 10.0043L21.536 10.5661C21.2522 10.8374 21.1216 11.2323 21.1903 11.6181L21.3346 12.4454L20.5356 12.0346C20.2015 11.8628 19.8032 11.8628 19.4645 12.0346L18.6658 12.4454L18.8099 11.6181C18.8785 11.2323 18.7482 10.8374 18.4644 10.5661L17.8739 10.0043L18.7162 9.88528C19.0961 9.83157 19.4233 9.59597 19.5972 9.25357L20.0001 8.45736Z"
                          fill="#FCD900"
                        />
                      </svg>
                    </div>
                    <div className="textarea-field achievement-outbreak__time">
                      <textarea
                        placeholder="Time"
                        className="ant-input"
                        value={item?.endTime}
                        style={{ height: 19, maxHeight: 9.0072e+15 }}
                      />
                    </div>
                  </div>
                  <div className="right">
                    <div className="name-and-time">
                      <div className="textarea-field achievement-outbreak__position">
                        <textarea
                          placeholder="Achievement Name"
                          className="ant-input"
                          value={item?.achievementName}
                          style={{ height: 20, maxHeight: 9.0072e+15 }}
                        />
                      </div>
                    </div>
                    <div className="textarea-field achievement-outbreak__desc">
                      <div
                        className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                        lang="en"
                        dir="ltr"
                        role="textbox"
                        aria-label="Rich Text Editor, main"
                        contentEditable="true"
                      >
                        <p className="ck-placeholder" data-placeholder={item?.description}>

                          <br
                            data-cke-filler="true"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="row__tripple">
      <div className="row__tripple--left">
        <div className="skill-outbreak section-ttl">
          <div className="skill-outbreak__container" />
          <div>
            <div className="skill-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 34, maxHeight: 0.0072e+15 }}
                >
                  SKILL
                </textarea>
              </div>
            </div>
          </div>
          {userInfo?.skills?.map((item: any) => (
            <div className="skill-outbreak__content">
              <div className="skill-outbreak__item section">
                <div className="skill-outbreak__item__content">
                  <div
                    className="ant-progress ant-progress-circle ant-progress-status-normal ant-progress-show-info ant-progress-default"
                  >
                    <div
                      className="ant-progress-inner"
                      style={{ width: 120, height: 120, fontSize: 24 }}
                    >
                      <svg
                        className="ant-progress-circle "
                        viewBox="0 0 100 100"
                      >
                        <path
                          className="ant-progress-circle-trail"
                          d="M 50,50 m 0,-49
                                                  a 49,49 0 1 1 0,98
                                                  a 49,49 0 1 1 0,-98"
                          stroke="#f3f3f3"
                          strokeLinecap="round"
                          strokeWidth="2"
                          fillOpacity="0"
                          style={{ stroke: 'rgb(243, 243, 243)', strokeDasharray: 307.876, strokeDashoffset: 0 }}
                        />
                        <path
                          className="ant-progress-circle-path"
                          d="M 50,50 m 0,-49
                                                  a 49,49 0 1 1 0,98
                                                  a 49,49 0 1 1 0,-98"
                          stroke=""
                          strokeLinecap="round"
                          strokeWidth="0"
                          fillOpacity="0"
                          style={{ stroke: 'rgb(16, 142, 233)', strokeDasharray: 307.876, strokeDashoffset: 0 }}
                        />
                      </svg>
                      <span className="ant-progress-text">
                        <div>
                          <div className="textarea-field progress-circle__name">
                            <textarea
                              placeholder="Skill"
                              className="ant-input"
                              value={item?.skill}
                              style={{ height: 18, maxHeight: 9.0072e+15 }}
                            />
                          </div>
                          <b
                            className="text-xs progress-circle__level"
                          >
                            0%
                          </b>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="ant-btn-group language-action">
                    <button
                      type="button"
                      className="ant-btn ant-btn-icon-only"
                    >
                      <i
                        aria-label="icon: minus"
                        className="anticon anticon-minus"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className=""
                          data-icon="minus"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
                          />
                        </svg>
                      </i>
                    </button>
                    <button type="button" className="ant-btn ant-btn-icon-only">
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row__tripple--middle">
        <div className="language-outbreak section-ttl">
          <div className="language-outbreak__container" />
          <div>
            <div className="language-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 33, maxHeight: 9.0072e+15 }}
                >
                  LANGUAGES
                </textarea>
              </div>
            </div>
          </div>
          {userInfo?.languages?.map((item: any) => (
            <div className="language-outbreak__content">
              <div className="language-outbreak__item section">
                <div className="language-outbreak__group">
                  <div className="textarea-field language-outbreak__name">
                    <textarea
                      placeholder="Language&#39;s name"
                      className="ant-input"
                      value={item?.language}
                      style={{ height: 16, maxHeight: 9.0072e+15 }}
                    />
                  </div>
                </div>
              </div>
              <Rating
                precision={0.5}
                value={item?.level}
                disabled
                size="large"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="row__tripple--right">
        <div className="hobby-outbreak section-ttl">
          <div className="hobby-outbreak__container" />
          <div>
            <div className="hobby-outbreak__header">
              <div className="textarea-field title">
                <textarea
                  placeholder="Section name"
                  className="ant-input"
                  style={{ height: 34, maxHeight: 0.0072e+15 }}
                >
                  HOBBY
                </textarea>
              </div>
            </div>
          </div>
          {userInfo?.hobbies?.map((item: any) => (
            <div className="hobby-outbreak__content hobby-outbreak__list ">
              <div className="hobby-outbreak__item section">
                <div className="hobby-outbreak__group">
                  <div className="hobby-outbreak__left">
                    <div className="hobby-outbreak__input-item">
                      <div className="textarea-field hobby-outbreak__name">
                        <textarea
                          placeholder="Hobby..."
                          className="ant-input"
                          value={item}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
  </div>
)
