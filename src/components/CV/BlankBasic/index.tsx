/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
import { DatePicker, Modal, Popover, Spin } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { CVTypes } from '../../../utils/common'
import './style.css'
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import 'react-quill/dist/quill.bubble.css';
import { config } from '../../../config/editorConfig'
import ReactQuill from 'react-quill';
import { SettingContent } from '../../SettingContent'
import html2canvas from 'html2canvas'
import jsPdf from "jspdf";
import Printer, { print } from 'react-pdf-print'

// import Editor from '../../Editor'

export const BlankBasic = ({
  userInfo, onUploadAvatar, handleChange, setFieldValue, onClickAvatar, loading,
}: CVTypes) => {
  BalloonEditor.defaultConfig = config
  const { block1, block2, block3, educations, achievements, career_goal, experiences, hobbies, languages, projects, skills, avatar } = userInfo

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [blockName, setBlockName] = useState('');

  const handleOk = () => {
    setFieldValue(blockName, false)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const content = (block: any) => {
    const onClick = () => {
      setIsModalVisible(true)
    }
    return (
      <SettingContent onClick={onClick} />
    )
  };
  console.log('blockName', blockName);

  return (
    <div className="cv-content" id="print_area">
      <Printer>
        <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p style={{ fontWeight: 'bold', fontSize: 18 }}>Bạn có muốn xoá mục này???</p>
        </Modal>
        <button
          type="button"
          onClick={() => {
            print(["print_area"])
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
        <div className="row__single">
          {block1.setting.isShow && <Popover onVisibleChange={() => setBlockName("block1.setting.isShow")} content={content} trigger="click">
            <div className="row__single--left">
              <div className="introduction-black section" style={{ color: '#000' }}>
                <div className="introduction-black__container" />
                <div className="introduction-black__introduction__name">
                  <div className="textarea-field introduction-black__introduction__title">
                    <div
                      className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                      lang="en"
                      dir="ltr"
                      role="textbox"
                      id="name"
                      aria-label="Rich Text Editor, main"
                      contentEditable="true"
                    >
                      <p
                        onChange={(event) => console.log('event', event)}
                        style={{
                          color: block1?.setting?.color,
                          fontStyle: block1.data.name.isItalic ? 'italic' : 'normal',
                          fontWeight: block1.data.name.isBold ? 'bold' : 'normal'
                        }}
                        data-placeholder="Your name">
                        {block1?.data?.name?.content}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="introduction-black__introduction__position">
                  <div className="textarea-field introduction-black__introduction__position">
                    <div
                      className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                      lang="en"
                      dir="ltr"
                      role="textbox"
                      id="name"
                      aria-label="Rich Text Editor, main"
                      contentEditable="true"
                    >
                      <p
                        onChange={(event) => console.log('event', event)}
                        style={{
                          color: block1?.setting?.color,
                          fontStyle: block1.data.position.isItalic ? 'italic' : 'normal',
                          fontWeight: block1.data.position.isBold ? 'bold' : 'normal'
                        }}
                        data-placeholder="Your position">
                        {block1?.data?.position?.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover>}
        </div>
        <div className="row__tripple">
          <div className="row__tripple--left">
            {block2.setting.isShow && <Popover onVisibleChange={() => setBlockName("block2.setting.isShow")} content={content} trigger="click">
              <div className="information-black section" style={{ color: '#000' }}>
                <div className="information-black__content">
                  <div className="information-black__row">
                    <div className="information-black__input-icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.875 0C11.1875 0 11.4531 0.109375 11.6719 0.328125C11.8906 0.546875 12 0.8125 12 1.125V7.875C12 8.1875 11.8906 8.45312 11.6719 8.67188C11.4531 8.89062 11.1875 9 10.875 9H1.125C0.8125 9 0.546875 8.89062 0.328125 8.67188C0.109375 8.45312 0 8.1875 0 7.875V1.125C0 0.8125 0.109375 0.546875 0.328125 0.328125C0.546875 0.109375 0.8125 0 1.125 0H10.875ZM10.875 1.125H1.125V2.08594C1.67188 2.52344 2.72656 3.35156 4.28906 4.57031C4.28906 4.58594 4.39844 4.6875 4.61719 4.875C4.83594 5.04688 5 5.17188 5.10938 5.25C5.21875 5.3125 5.35938 5.39062 5.53125 5.48438C5.71875 5.57812 5.875 5.625 6 5.625C6.125 5.625 6.27344 5.57812 6.44531 5.48438C6.63281 5.39062 6.78125 5.3125 6.89062 5.25C7 5.17188 7.16406 5.04688 7.38281 4.875C7.60156 4.6875 7.71094 4.58594 7.71094 4.57031C9.27344 3.35156 10.3281 2.52344 10.875 2.08594V1.125ZM1.125 7.875H10.875V3.51562C10.3281 3.95312 9.50781 4.60156 8.41406 5.46094C8.38281 5.47656 8.26562 5.57031 8.0625 5.74219C7.875 5.91406 7.72656 6.03906 7.61719 6.11719C7.50781 6.19531 7.35156 6.29688 7.14844 6.42188C6.94531 6.53125 6.75 6.61719 6.5625 6.67969C6.375 6.72656 6.1875 6.75 6 6.75C5.8125 6.75 5.61719 6.72656 5.41406 6.67969C5.22656 6.61719 5.03125 6.52344 4.82812 6.39844C4.64062 6.27344 4.49219 6.17188 4.38281 6.09375C4.27344 6.01562 4.11719 5.89844 3.91406 5.74219C3.72656 5.57031 3.61719 5.47656 3.58594 5.46094C2.49219 4.60156 1.67188 3.95312 1.125 3.51562V7.875Z"
                          fill="#758190"
                        />
                      </svg>
                      <div className="textarea-field information-black__other">
                        <TextArea
                          placeholder="Your Email"
                          className="ant-input"
                          value={block2.data.email.content}
                          onChange={handleChange('block2.data.email.content')}
                          contentEditable
                          suppressContentEditableWarning
                          style={{ height: 32, maxHeight: 9.0072e+15 }}
                        />
                      </div>
                    </div>
                    <div className="information-black__input-icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 2C5.25 1.78125 5.375 1.5625 5.625 1.34375C5.875 1.125 6 0.84375 6 0.5C6.15625 0.5 6.32031 0.648438 6.49219 0.945312C6.66406 1.22656 6.75 1.51562 6.75 1.8125C6.75 2.10938 6.67969 2.34375 6.53906 2.51562C6.39844 2.67188 6.21875 2.75 6 2.75C5.79688 2.75 5.61719 2.67969 5.46094 2.53906C5.32031 2.38281 5.25 2.20312 5.25 2ZM9 2.75C8.79688 2.75 8.61719 2.67969 8.46094 2.53906C8.32031 2.38281 8.25 2.20312 8.25 2C8.25 1.78125 8.375 1.5625 8.625 1.34375C8.875 1.125 9 0.84375 9 0.5C9.15625 0.5 9.32031 0.648438 9.49219 0.945312C9.66406 1.22656 9.75 1.51562 9.75 1.8125C9.75 2.10938 9.67969 2.34375 9.53906 2.51562C9.39844 2.67188 9.21875 2.75 9 2.75ZM11.25 6.875V12.5H0.75V6.875C0.75 6.5625 0.859375 6.29688 1.07812 6.07812C1.29688 5.85938 1.5625 5.75 1.875 5.75H2.4375V3.125H3.5625V5.75H5.4375V3.125H6.5625V5.75H8.4375V3.125H9.5625V5.75H10.125C10.4375 5.75 10.7031 5.85938 10.9219 6.07812C11.1406 6.29688 11.25 6.5625 11.25 6.875ZM1.875 7.01562V8.35156C2.125 8.55469 2.33594 8.65625 2.50781 8.65625C2.66406 8.65625 2.89844 8.53125 3.21094 8.28125C3.52344 8.03125 3.875 7.90625 4.26562 7.90625C4.64062 7.90625 4.98438 8.03125 5.29688 8.28125C5.60938 8.53125 5.84375 8.65625 6 8.65625C6.15625 8.65625 6.39062 8.53125 6.70312 8.28125C7.01562 8.03125 7.36719 7.90625 7.75781 7.90625C8.05469 7.90625 8.30469 7.96875 8.50781 8.09375C8.71094 8.21875 8.88281 8.34375 9.02344 8.46875C9.17969 8.59375 9.34375 8.65625 9.51562 8.65625C9.67188 8.65625 9.875 8.55469 10.125 8.35156V7.01562C10.125 6.92188 10.0781 6.875 9.98438 6.875H2.01562C1.92188 6.875 1.875 6.92188 1.875 7.01562ZM10.125 11.375V9.47656C9.9375 9.55469 9.73438 9.59375 9.51562 9.59375C9.125 9.59375 8.77344 9.46875 8.46094 9.21875C8.14844 8.96875 7.91406 8.84375 7.75781 8.84375C7.60156 8.84375 7.36719 8.96875 7.05469 9.21875C6.74219 9.46875 6.39062 9.59375 6 9.59375C5.625 9.59375 5.27344 9.46875 4.94531 9.21875C4.63281 8.96875 4.40625 8.84375 4.26562 8.84375C4.09375 8.84375 3.85156 8.96875 3.53906 9.21875C3.22656 9.46875 2.88281 9.59375 2.50781 9.59375C2.27344 9.59375 2.0625 9.55469 1.875 9.47656V11.375H10.125ZM3 2.75C2.79688 2.75 2.61719 2.67969 2.46094 2.53906C2.32031 2.38281 2.25 2.20312 2.25 2C2.25 1.78125 2.375 1.5625 2.625 1.34375C2.875 1.125 3 0.84375 3 0.5C3.15625 0.5 3.32031 0.648438 3.49219 0.945312C3.66406 1.22656 3.75 1.51562 3.75 1.8125C3.75 2.10938 3.67969 2.34375 3.53906 2.51562C3.39844 2.67188 3.21875 2.75 3 2.75Z"
                          fill="#758190"
                        />
                      </svg>
                      <div className="textarea-field information-black__other">
                        <textarea
                          placeholder="Your Birthday"
                          className="ant-input"
                          value={block2.data.birthday.content}
                          onChange={handleChange('block2.data.birthday.content')}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                          suppressContentEditableWarning={true}
                          contentEditable={true}
                        />
                      </div>
                    </div>
                    <div className="information-black__input-icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1796 1.03906C11.4296 1.08594 11.6327 1.21094 11.789 1.41406C11.9452 1.60156 12.0233 1.82812 12.0233 2.09375C12.0233 3.5 11.7421 4.85156 11.1796 6.14844C10.6327 7.42969 9.89054 8.53906 8.95304 9.47656C8.03116 10.3984 6.9296 11.1328 5.64835 11.6797C4.3671 12.2266 3.01554 12.5 1.59366 12.5C1.34366 12.5 1.1171 12.4219 0.913974 12.2656C0.726474 12.1094 0.609286 11.9062 0.562411 11.6562L0.0467862 9.45312C-0.0157138 9.20312 0.00772372 8.96094 0.117099 8.72656C0.242099 8.49219 0.429599 8.32812 0.679599 8.23438L3.04679 7.20312C3.26554 7.10938 3.4921 7.09375 3.72647 7.15625C3.96085 7.21875 4.15616 7.34375 4.31241 7.53125L5.06241 8.46875C6.32804 7.78125 7.3046 6.80469 7.9921 5.53906L7.0546 4.78906C6.8671 4.63281 6.7421 4.4375 6.6796 4.20312C6.63272 3.96875 6.64835 3.74219 6.72647 3.52344L7.75772 1.15625C7.8671 0.90625 8.03116 0.726562 8.24991 0.617188C8.48429 0.492188 8.72647 0.460938 8.97647 0.523438L11.1796 1.03906ZM1.64054 11.375C3.31241 11.375 4.85929 10.9609 6.28116 10.1328C7.70304 9.30469 8.82804 8.17969 9.65616 6.75781C10.4843 5.33594 10.8983 3.78906 10.8983 2.11719L8.76554 1.625L7.78116 3.94531L9.37491 5.23438C8.84366 6.39062 8.22647 7.3125 7.52335 8C6.83585 8.6875 5.91397 9.30469 4.75772 9.85156L3.46866 8.25781L1.14835 9.24219L1.64054 11.375Z"
                          fill="#758190"
                        />
                      </svg>
                      <div className="textarea-field information-black__other">
                        <textarea
                          placeholder="Your Phone Number"
                          className="ant-input"
                          value={block2.data.phone.content}
                          onChange={handleChange('block2.data.phone.content')}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
                    </div>
                    <div className="information-black__input-icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.8125 1.8125C2.6875 0.9375 3.75 0.5 5 0.5C6.25 0.5 7.3125 0.9375 8.1875 1.8125C9.0625 2.6875 9.5 3.75 9.5 5C9.5 5.25 9.49219 5.46875 9.47656 5.65625C9.46094 5.82812 9.40625 6.03906 9.3125 6.28906C9.21875 6.53906 9.13281 6.75 9.05469 6.92188C8.97656 7.09375 8.82031 7.375 8.58594 7.76562C8.35156 8.15625 8.14062 8.49219 7.95312 8.77344C7.78125 9.05469 7.48438 9.52344 7.0625 10.1797C6.65625 10.8359 6.28906 11.4297 5.96094 11.9609C5.74219 12.3203 5.42188 12.5 5 12.5C4.57812 12.5 4.25781 12.3203 4.03906 11.9609C3.71094 11.4297 3.33594 10.8359 2.91406 10.1797C2.50781 9.52344 2.21094 9.05469 2.02344 8.77344C1.85156 8.49219 1.64844 8.15625 1.41406 7.76562C1.17969 7.375 1.02344 7.09375 0.945312 6.92188C0.867188 6.75 0.78125 6.53906 0.6875 6.28906C0.59375 6.03906 0.539062 5.82812 0.523438 5.65625C0.507812 5.46875 0.5 5.25 0.5 5C0.5 3.75 0.9375 2.6875 1.8125 1.8125ZM5 11.375C5.3125 10.875 5.64844 10.3438 6.00781 9.78125C6.36719 9.21875 6.63281 8.79688 6.80469 8.51562C6.99219 8.21875 7.1875 7.90625 7.39062 7.57812C7.59375 7.25 7.73438 7.00781 7.8125 6.85156C7.90625 6.67969 8 6.5 8.09375 6.3125C8.1875 6.125 8.25 5.96875 8.28125 5.84375C8.3125 5.71875 8.33594 5.59375 8.35156 5.46875C8.36719 5.32812 8.375 5.17188 8.375 5C8.375 4.0625 8.04688 3.26562 7.39062 2.60938C6.73438 1.95312 5.9375 1.625 5 1.625C4.0625 1.625 3.26562 1.95312 2.60938 2.60938C1.95312 3.26562 1.625 4.0625 1.625 5C1.625 5.17188 1.63281 5.32812 1.64844 5.46875C1.66406 5.59375 1.6875 5.72656 1.71875 5.86719C1.75 5.99219 1.8125 6.14844 1.90625 6.33594C2 6.52344 2.09375 6.70312 2.1875 6.875C2.28125 7.03125 2.42969 7.27344 2.63281 7.60156C2.83594 7.92969 3.02344 8.24219 3.19531 8.53906C3.38281 8.82031 3.64844 9.24219 3.99219 9.80469C4.35156 10.3516 4.6875 10.875 5 11.375ZM3.66406 6.33594C3.30469 5.96094 3.125 5.51562 3.125 5C3.125 4.48438 3.30469 4.04688 3.66406 3.6875C4.03906 3.3125 4.48438 3.125 5 3.125C5.51562 3.125 5.95312 3.3125 6.3125 3.6875C6.6875 4.04688 6.875 4.48438 6.875 5C6.875 5.51562 6.6875 5.96094 6.3125 6.33594C5.95312 6.69531 5.51562 6.875 5 6.875C4.48438 6.875 4.03906 6.69531 3.66406 6.33594Z"
                          fill="#758190"
                        />
                      </svg>
                      <div className="textarea-field information-black__other">
                        <textarea
                          placeholder="Your address"
                          className="ant-input"
                          value={block2.data.address.content}
                          onChange={handleChange('block2.data.address.content')}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popover>}
          </div>
          <div className="row__tripple--middle">
            {avatar.setting.isShow && <Popover onVisibleChange={() => setBlockName("avatar.setting.isShow")} content={content} trigger="click">
              <div className="avatar-black section" style={{ color: '#000' }}>
                <div className="avatar-black__content">
                  <div className="avatar-black__row__center">
                    <div className="avatar-black__row__center__avatar">
                      <div className="upload-avatar">
                        <div className="flex flex-col avatar-circle">
                          <div className="flex justify-center cursor-pointer upload-avatar__img">
                            {loading ? <div style={{ width: 200, height: 200 }}><Spin /></div> : (
                              <img
                                src={avatar.data}
                                style={{ width: 200, height: 200 }}
                              />
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            id="uploadAvatar"
                            style={{
                              height: 1, width: 1, overflow: 'hidden', marginLeft: -99999, position: 'absolute',
                            }}
                            onChange={onUploadAvatar}
                          />
                          <div className="upload-avatar__btn-upload cursor-pointer item-circle" onClick={onClickAvatar} style={{ width: 200, height: 100 }}>
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
                  </div>
                </div>
              </div>
            </Popover>}
          </div>
          <div className="row__tripple--right">
            <div className="contact-black section" style={{ color: '#000' }}>
              <div className="contact-black__content">
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
                {block3.setting.isShow && <Popover onVisibleChange={() => setBlockName("block3.setting.isShow")} content={content} trigger="click">
                  <div className="contact-black__row">
                    <div className="contact-black__input-icon">
                      <div className="textarea-field contact-black__other contact-link-input">
                        <textarea
                          placeholder="Paste your Website link"
                          value={block3.data.website.content}
                          onChange={handleChange('block3.data.website.content')}
                          className="ant-input"
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
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
                      <a className="contact-link-view" href="" target="_blank" rel="noopener noreferrer">
                        <div className="cv-text-box ">
                          <textarea
                            readOnly
                            className="ant-input"
                            style={{ height: 16, maxHeight: 9.0072e+15 }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="contact-black__input-icon">
                      <div className="textarea-field contact-black__other contact-link-input">
                        <textarea
                          placeholder="Paste your LinkedIn link"
                          className="ant-input"
                          value={block3.data.linkedln.content}
                          onChange={handleChange('block3.data.linkedln.content')}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
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
                      <a
                        className="contact-link-view"
                        href="https://linkedin.com/in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="cv-text-box ">
                          <textarea
                            readOnly
                            className="ant-input"
                            style={{ height: 16, maxHeight: 9.0072e+15 }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="contact-black__input-icon">
                      <div className="textarea-field contact-black__other contact-link-input">
                        <textarea
                          placeholder="Paste your Github link"
                          className="ant-input"
                          value={block3.data.github.content}
                          onChange={handleChange('block3.data.github.content')}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
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
                      <a className="contact-link-view" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <div className="cv-text-box ">
                          <textarea
                            readOnly
                            className="ant-input"
                            style={{ height: 16, maxHeight: 9.0072e+15 }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="contact-black__input-icon">
                      <div className="textarea-field contact-black__other contact-link-input">
                        <textarea
                          placeholder="Paste your Viblo link"
                          className="ant-input"
                          value={block3.data.viblo.content}
                          onChange={handleChange('block3.data.viblo.content')}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
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
                      <a className="contact-link-view" href="https://viblo.asia/u/" target="_blank" rel="noopener noreferrer">
                        <div className="cv-text-box ">
                          <textarea
                            readOnly
                            className="ant-input"
                            style={{ height: 16, maxHeight: 9.0072e+15 }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="contact-black__input-icon">
                      <div className="textarea-field contact-black__other contact-link-input">
                        <textarea
                          placeholder="Paste your Instagram link"
                          className="ant-input"
                          value={block3.data.instagram.content}
                          onChange={handleChange('block3.data.instagram.content')}
                          style={{ height: 32, maxHeight: 9.0072e+15 }}
                        />
                      </div>
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
                      <a
                        className="contact-link-view"
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="cv-text-box ">
                          <textarea
                            readOnly
                            className="ant-input"
                            style={{ height: 16, maxHeight: 9.0072e+15 }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="contact-black__input-icon">
                      <div className="textarea-field contact-black__other contact-link-input">
                        <textarea
                          placeholder="Paste your Skype link"
                          className="ant-input"
                          value={block3.data.skype.content}
                          onChange={handleChange('block3.data.skype.content')}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
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
                      <div className="cv-text-box contact-link-view">
                        <textarea
                          readOnly
                          className="ant-input"
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
                    </div>
                    <div className="contact-black__input-icon">
                      <div className="textarea-field contact-black__other contact-link-input">
                        <textarea
                          placeholder="Paste your Facebook link"
                          className="ant-input"
                          onChange={handleChange('block3.data.facebook.content')}
                          value={block3.data.facebook.content}
                          style={{ height: 32, maxHeight: 9.0072e+15 }}
                        />
                      </div>
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
                      <a className="contact-link-view" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <div className="cv-text-box ">
                          <textarea
                            readOnly
                            className="ant-input"
                            style={{ height: 16, maxHeight: 9.0072e+15 }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Popover>}
              </div>
            </div>
          </div>
        </div>
        <div className="row__double">
          <div className="row__double--left">
            {career_goal?.setting?.isShow && <Popover onVisibleChange={() => setBlockName("career_goal.setting.isShow")} content={content} trigger="click">
              <div className="career-goal-black section-ttl" style={{ color: '#424B59' }}>
                <div className="career-goal-black__container" />
                <div>
                  <div className="career-goal-black__header">
                    <div className="textarea-field career-goal-black__title">
                      <div
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15 }}
                      >
                        CAREER GOAL
                  </div>
                    </div>
                  </div>
                </div>
                <div className="career-goal-black__item">
                  <div className="textarea-field career-goal-black__desc">
                    <div
                      className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                      lang="en"
                      dir="ltr"
                      role="textbox"
                      aria-label="Rich Text Editor, main"
                      contentEditable="true"
                    >
                      <textarea
                        placeholder="Career Goal"
                        className="ant-input"
                        onChange={handleChange('career_goal.data.content')}
                        value={career_goal?.data?.content}
                        style={{ height: 25, maxHeight: 9.0072e+15, fontSize: 14 }}
                      />
                      {/* <p className="ck-placeholder" data-placeholder="Career Goal">
                    <br data-cke-filler="true" />

                  </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </Popover>}
            {educations?.setting?.isShow && <Popover onVisibleChange={() => setBlockName("educations.setting.isShow")} content={content} trigger="click">
              <div className="education-black section-ttl" style={{ color: '#424B59' }}>
                <div className="education-black__container" />
                <div>
                  <div className="education-black__header">
                    <div className="textarea-field education-black__title">
                      <div
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15 }}
                      >
                        EDUCATION
                  </div>
                    </div>
                  </div>
                </div>
                {educations?.data?.map((item, index) => (
                  <div className="education-black__item section">
                    <div className="education-black__group">
                      <div className="education-black__left">
                        <div className="education-black__time" style={{ marginBottom: 5 }}>
                          <div className="education-black__time-from">From</div>
                          <div className="input-field education-black__from">
                            <input
                              placeholder="Start time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.startTime}
                              onChange={handleChange(`educations.data[${index}].startTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                          <div className="education-black__time-divide">to</div>
                          <div className="input-field education-black__to">
                            <input
                              placeholder="End time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.endTime}
                              onChange={handleChange(`educations.data[${index}].endTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                        </div>
                        <div className="input-field education-black__position">
                          <input
                            placeholder="Major"
                            type="text"
                            className="ant-input"
                            value={item.major}
                            onChange={handleChange(`educations.data[${index}].major`)}
                            style={{ fontSize: 14 }}
                          />
                        </div>
                        <div className="textarea-field education-black__company">
                          <textarea
                            placeholder="School name"
                            className="ant-input"
                            value={item.school}
                            onChange={handleChange(`educations.data[${index}].school`)}
                            style={{ height: 18, maxHeight: 9.0072e+15 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>}
            {skills.setting.isShow && <Popover onVisibleChange={() => setBlockName("skills.setting.isShow")} content={content} trigger="click">
              <div className="skill-black section-ttl" style={{ color: '#7A7A7A' }}>
                <div className="skill-black__container" />
                <div>
                  <div className="skill-black__header">
                    <div className="textarea-field skill-black__title">
                      <div
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15 }}
                      >
                        SKILL
                  </div>
                    </div>
                  </div>
                </div>
                {skills.data?.map((item, index) => (
                  <div className="skill-black__content">
                    <div className="skill-black__item section">
                      <div className="textarea-field skill-black__item__name">
                        <textarea
                          placeholder="Skill"
                          className="ant-input"
                          value={item.skill}
                          onChange={handleChange(`skills.data[${index}].skill`)}
                          style={{ height: 16, maxHeight: 9.0072e+15 }}
                        />
                      </div>
                      <div className="skill-black__item__level">
                        <div className="slider-field skill-black__value">
                          <div className="ant-slider">
                            <div className="ant-slider-rail" />
                            <div className="ant-slider-track" style={{ left: 0, right: 0, width: 0 }} />
                            <div className="ant-slider-step" />
                            <div
                              tabIndex={0}
                              className="ant-slider-handle"
                              role="slider"
                              aria-valuemin={0}
                              aria-valuemax={10}
                              aria-valuenow={0}
                              aria-disabled="false"
                              style={{ left: 0, right: 'auto', transform: 'translateX(-50%)' }}
                            />
                            <div className="ant-slider-mark" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>}
            {languages.setting.isShow && <Popover onVisibleChange={() => setBlockName("languages.setting.isShow")} content={content} trigger="click">
              <div className="language-black section-ttl" style={{ color: '#000' }}>
                <div className="language-black__container" />
                <div>
                  <div className="language-black__header">
                    <div className="textarea-field language-black__title">
                      <div
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15 }}
                      >
                        FOREIGN LANGUAGE
                  </div>
                    </div>
                  </div>
                </div>
                <div className="language-black__content">
                  <div className="language-green-and-young__item section">
                    <div className="language-green-and-young__item__content">
                      <div
                        className="ant-progress ant-progress-circle ant-progress-status-normal ant-progress-show-info ant-progress-default"
                      >
                        <div className="ant-progress-inner" style={{ width: 120, height: 120, fontSize: 24 }}>
                          <svg
                            className="ant-progress-circle "
                            viewBox="0 0 100 100"
                          >
                            <path
                              className="ant-progress-circle-trail"
                              d=" M 50,50 m 0,-49
                            a 49,49 0 1 1 0,98
                            a 49,49 0 1 1 0,-98"
                              stroke="#f3f3f3"
                              strokeLinecap="round"
                              strokeWidth="2"
                              fillOpacity="0"
                              style={{
                                stroke: 'rgb(243, 243, 243)', strokeDasharray: '307.876px, 307.876px', strokeDashoffset: 0, transition: 'stroke-dashoffset 0.3s ease 0s , stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s',
                              }}
                            />
                            <path
                              className="ant-progress-circle-path"
                              d=" M 50,50 m 0,-49
                            a 49,49 0 1 1 0,98
                            a 49,49 0 1 1 0,-98"
                              stroke=""
                              strokeLinecap="round"
                              strokeWidth="0"
                              fillOpacity="0"
                              style={{
                                stroke: 'rgb(16, 142, 233)', strokeDasharray: '0px, 307.876px', strokeDashoffset: 0, transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s',
                              }}
                            />
                          </svg>
                          <span className="ant-progress-text">
                            <div>
                              <div className="textarea-field progress-circle__name">
                                <textarea
                                  placeholder="Language"
                                  className="ant-input"
                                  style={{ height: 22, maxHeight: 9.0072e+15 }}
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
                        <button type="button" className="ant-btn ant-btn-icon-only">
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
              </div>
            </Popover>
            }
            {hobbies.setting.isShow && <Popover onVisibleChange={() => setBlockName("hobbies.setting.isShow")} content={content} trigger="click">
              <div className="hobby-black section-ttl" style={{ color: '#9E9E9E' }}>
                <div className="hobby-black__container" />
                <div>
                  <div className="hobby-black__header">
                    <div className="textarea-field hobby-black__title">
                      <div
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15 }}
                      >
                        HOBBY
                  </div>
                    </div>
                  </div>
                </div>
                {hobbies?.data?.map((item, index) => (
                  <div className="hobby-black__content hobby-black__list ">
                    <div className="hobby-black__item section">
                      <div className="hobby-black__group">
                        <div className="hobby-black__left">
                          <div className="hobby-black__input-item">
                            <div className="textarea-field hobby-black__name">
                              <textarea
                                placeholder="Hobby..."
                                className="ant-input"
                                value={item}
                                onChange={handleChange(`hobbies.data[${index}]`)}
                                style={{ height: 16, maxHeight: 9.0072e+15, fontSize: 14 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>}
          </div>
          <div className="row__double--right">
            {experiences.setting.isShow && <Popover onVisibleChange={() => setBlockName("experiences.setting.isShow")} content={content} trigger="click">
              <div className="experience-black section-ttl" style={{ color: '#7A7A7A' }}>
                <div className="experience-black__container" />
                <div>
                  <div className="experience-black__header">
                    <div className="textarea-field experience-black__title">
                      <div
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15 }}
                      >
                        EXPERIENCE
                  </div>
                    </div>
                  </div>
                </div>
                {experiences?.data?.map((item, index) => (
                  <div className="experience-black__item section">
                    <div className="experience-black__group">
                      <div className="experience-black__left">
                        <div className="experience-black__time" style={{ marginBottom: 5 }}>
                          <div className="experience-black__time-from">From</div>
                          <div className="input-field experience-black__from">
                            <input
                              placeholder="Start time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.startTime}
                              onChange={handleChange(`experiences.data[${index}].startTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                          <div className="experience-black__time-divide">to</div>
                          <div className="input-field experience-black__to">
                            <input
                              placeholder="End time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.endTime}
                              onChange={handleChange(`experiences.data[${index}].endTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                        </div>
                        <div className="input-field experience-black__position">
                          <input
                            placeholder="Your position"
                            type="text"
                            className="ant-input"
                            value={item.position}
                            style={{ height: 25, maxHeight: 9.0072e+15, textAlign: 'start', fontSize: 13 }}
                            onChange={handleChange(`experiences.data[${index}].position`)}
                          />
                        </div>
                        <div className="textarea-field experience-black__company">
                          <textarea
                            placeholder="Company name"
                            className="ant-input"
                            value={item.company}
                            style={{ textAlign: 'start' }}
                            onChange={handleChange(`experiences.data[${index}].company`)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="textarea-field experience-black__desc">
                      <div
                        className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                        lang="en"
                        dir="ltr"
                        role="textbox"
                        aria-label="Rich Text Editor, main"
                        contentEditable="true"
                      >
                        <p className="ck-placeholder" style={{ textAlign: 'start', fontSize: 14 }} data-placeholder="">
                          <br data-cke-filler="true" />
                          {item.description.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>}
            {projects.setting.isShow && <Popover onVisibleChange={() => setBlockName("projects.setting.isShow")} content={content} trigger="click">
              <div className="project-black section-ttl" style={{ color: '#7A7A7A' }}>
                <div className="project-black__container" />
                <div>
                  <div className="project-black__header">
                    <div className="textarea-field project-black__title">
                      <textarea
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15, textAlign: 'start' }}
                      >
                        PROJECT
                  </textarea>
                    </div>
                  </div>
                </div>
                {projects?.data?.map((item, index) => (
                  <div className="project-black__item section">
                    <div className="project-black__group">
                      <div className="project-black__left">
                        <div className="project-black__time" style={{ marginBottom: 5 }}>
                          <div className="project-black__time-from">From</div>
                          <div className="input-field project-black__from">
                            <input
                              placeholder="Start time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.startTime}
                              onChange={handleChange(`projects.data[${index}].startTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                          <div className="project-black__time-divide">to</div>
                          <div className="input-field project-black__to">
                            <input
                              placeholder="End time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.endTime}
                              onChange={handleChange(`projects.data[${index}].endTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                        </div>
                        <div className="input-field project-black__position">
                          <input
                            placeholder="Your position"
                            type="text"
                            className="ant-input"
                            value={item.position}
                            onChange={handleChange(`projects.data[${index}].position`)}
                            style={{ height: 25, maxHeight: 9.0072e+15, textAlign: 'start' }}
                          />
                        </div>
                        <div className="textarea-field project-black__company">
                          <textarea
                            placeholder="Project name"
                            className="ant-input"
                            value={item.pjName}
                            style={{ height: 25, maxHeight: 9.0072e+15, textAlign: 'start' }}
                            onChange={handleChange(`projects.data[${index}].pjName`)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="textarea-field project-black__desc">
                      <div
                        className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                        lang="en"
                        dir="ltr"
                        role="textbox"
                        aria-label="Rich Text Editor, main"
                        contentEditable="true"
                      >
                        <p className="ck-placeholder" style={{ fontSize: 14 }} data-placeholder="">
                          <br data-cke-filler="true" />
                          {item.description.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>}
            {achievements.setting.isShow && <Popover onVisibleChange={() => setBlockName("achievements.setting.isShow")} content={content} trigger="click">
              <div className="achievement-black section-ttl" style={{ color: '#424B59' }}>
                <div className="achievement-black__container" />
                <div>
                  <div className="achievement-black__header">
                    <div className="textarea-field achievement-black__title">
                      <textarea
                        placeholder="Section name"
                        className="ant-input"
                        style={{ height: 25, maxHeight: 9.0072e+15, textAlign: 'start' }}
                      >
                        ACHIEVEMENT
                  </textarea>
                    </div>
                  </div>
                </div>
                {achievements?.data?.map((item, index) => (
                  <div className="achievement-black__item section">
                    <div className="achievement-black__group">
                      <div className="achievement-black__left">
                        <div className="textarea-field achievement-black__company">
                          <textarea
                            placeholder="Achievement Name"
                            className="ant-input"
                            value={item.achievementName}
                            style={{ height: 20, maxHeight: 9.0072e+15, textAlign: 'start' }}
                            onChange={handleChange(`achievements.data[${index}].achievementName`)}
                          />
                        </div>
                        <div className="achievement-black__time" style={{ marginBottom: 5 }}>
                          <div className="achievement-black__time-from">From</div>
                          <div className="input-field achievement-black__from">
                            <input
                              placeholder="Start time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.startTime}
                              onChange={handleChange(`achievements.data[${index}].startTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                          <div className="achievement-black__time-divide">to</div>
                          <div className="input-field achievement-black__to">
                            <input
                              placeholder="Start time"
                              style={{ height: 16, maxHeight: 9.0072e+15 }}
                              value={item?.endTime}
                              onChange={handleChange(`achievements.data[${index}].endTime`)}
                              type="text"
                              className="ant-input" />
                          </div>
                        </div>
                        <div className="textarea-field achievement-black__desc">
                          <div
                            className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                            lang="en"
                            dir="ltr"
                            role="textbox"
                            aria-label="Rich Text Editor, main"
                            contentEditable="true"
                          >
                            <p className="ck-placeholder" style={{ fontSize: 14 }} data-placeholder="">
                              <br data-cke-filler="true" />
                              {item.description.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>}
          </div>
        </div>
      </Printer>
    </div >
  )
}

BlankBasic.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

BlankBasic.modules = {
  toolbar: [
    ['bold', 'italic', 'link'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}