import { api } from '../../utils'
import { UserInfo } from '../../utils/types/user'
import { actionSetLoading } from '../ui/actions'
import { Types } from './types'

// resultImage
export const saveLoginInfo = (payload: any) => ({
  type: Types.SAVE_LOGIN_INFO,
  payload,
})

// actionImage
export const actionLogin = (payload: any) => async (dispatch: any) => {
  console.log('payload', payload)
  try {
    dispatch(actionSetLoading(true))
    const response: any = await api.post('/login', payload)
    console.log('response.actionLogin', response?.data?.result?.user)
    if (response?.data?.result?.user) {
      await dispatch(saveLoginInfo(response?.data?.result?.user))
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.result?.user))
    }
    return response?.data
  } catch (error) {
    console.log('error.actionLogin', error)
    //
  } finally {
    dispatch(actionSetLoading(false))
  }
}
export const actionGetUserInfo = (id: any) => async (dispatch: any) => {
  console.log('id', id)
  try {
    dispatch(actionSetLoading(true))
    const response: any = await api.get(`/user/${id}`)
    console.log('response.actionGetUserInfo', response?.data)
    if (response?.data?.result?.user) {
      dispatch(saveLoginInfo(response?.data?.result?.user))
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.result?.user))
    }
    const result: UserInfo = response?.data?.result?.user
    return result
  } catch (error) {
    console.log('error.actionGetUserInfo', error)
    //
  } finally {
    dispatch(actionSetLoading(false))
  }
}
export const actionUpdateUserInfo = (id: any, body: any) => async (dispatch: any) => {
  console.log('id', id)
  console.log('body', body)
  try {
    dispatch(actionSetLoading(true))
    const response: any = await api.put(`/user/${id}`, body)
    console.log('response.actionUpdateUserInfo', response?.data)
    if (response?.data?.result?.user) {
      dispatch(saveLoginInfo(response?.data?.result?.user))
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.result?.user))
    }
    return response?.data
  } catch (error) {
    console.log('error.actionUpdateUserInfo', error)
    //
  } finally {
    dispatch(actionSetLoading(false))
  }
}
export const actionRegister = (body: any) => async (dispatch: any) => {
  console.log('body', body)
  try {
    dispatch(actionSetLoading(true))
    const response: any = await api.post('/user/', body)
    console.log('response.actionRegister', response?.data)
    return response?.data
  } catch (error) {
    console.log('error.actionRegister', error)
    //
  } finally {
    dispatch(actionSetLoading(false))
  }
}
