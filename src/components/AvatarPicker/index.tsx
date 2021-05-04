/* eslint-disable no-unused-expressions */
import { Spin } from 'antd'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { actionUpload } from '../../store/user/actions'
import { UserInfo } from '../../utils/types/user'
import './style.css'

export const AvatarPicker = () => {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    error: false,
    message: '',
  })
  const dispatch = useDispatch()

  const loginInfo: UserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const onClickAvatar = () => {
    const uploadAvatar = document.getElementById('uploadAvatar')
    uploadAvatar?.click()
  }
  const onChooseAvatar = (input: any) => {
    console.log('====================================')
    console.log('input', input?.target?.files[0])
    console.log('====================================')
    if (input?.target?.files[0]) {
      setImage(input?.target?.files[0])
    }
  }
  const onUpload = async () => {
    const id = loginInfo._id
    const formData = new FormData()
    formData.append('file', image)
    setLoading(true)
    const res: any = await dispatch(actionUpload(formData, id))
    console.log('====================================')
    console.log('res', res)
    console.log('====================================')
    if (res?.status === '0') {
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
      userInfo.avatar = res.result.user.avatar
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      window.location.reload()
    } else {
      setError({
        error: true,
        message: res.message,
      })
    }
    setLoading(false)
  }
  return (
    <>
      <div style={{
        position: 'fixed', width: '100%', height: '100%', backgroundColor: 'black', zIndex: 10000, opacity: 0.5,
      }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="dialog"
        className="el-dialog"
        style={{
          marginTop: '15vh', position: 'fixed', zIndex: 10000, left: '25%',
        }}
      >
        {error.error
        && <Alert variant="danger" style={{ textAlign: 'center' }}>{error.message}</Alert>}
        <div className="el-dialog__header">
          <div style={{ textAlign: 'center' }}>
            Update Profile Picture
          </div>
        </div>
        <div className="el-dialog__body">
          <div className="picture-picker text-center">
            <div className="croppa-container">
              <input
                type="file"
                accept="image/*"
                id="uploadAvatar"
                style={{
                  height: 1, width: 1, overflow: 'hidden', marginLeft: -99999, position: 'absolute',
                }}
                onChange={onChooseAvatar}
              />
              {image ? <div><img alt="avatar" style={{ height: 400 }} onClick={onClickAvatar} src={URL.createObjectURL(image)} /></div>
                : (
                  <div
                    style={{
                      width: 300, height: 300, backgroundColor: '#e6e6e6', borderRadius: 150,
                    }}
                    className="avatar__hover"
                    onClick={onClickAvatar}
                  />
                )}

            </div>
          </div>
          <p className="text-center mt-1"><small>Tips: Use scroll wheel to zoom, drag to move profile picture.</small></p>
          <div className="picture-toolbox text-center mt-4">
            <div className="el-button-group">
              <button onClick={onUpload} type="button" className={`el-button el-button--primary ${!image ? 'is-disabled' : ''}`} disabled={!image ? true : false}>
                {loading ? <Spin />
                  : (
                    <span>
                      Save
                    </span>
                  )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
