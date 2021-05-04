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
export const actionUpload = (payload: any, id: string) => async (dispatch: any) => {
  console.log('payload', payload)
  try {
    const response: any = await api.post(`/image/${id}`, payload)
    console.log('response.actionUpload', response?.data?.result)
    if (response?.data?.result?.user) {
      await dispatch(saveLoginInfo(response?.data?.result?.user))
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.result?.user))
    }
    return response?.data
  } catch (error) {
    console.log('error.actionUpload', error)
    //
  }
}
export const actionUploadImage = (payload: any, id: string) => async () => {
  console.log('payload', payload)
  try {
    const response: any = await api.post(`/resume/image/${id}`, payload)
    console.log('response.actionUploadImage', response?.data?.result)
    return response?.data
  } catch (error) {
    console.log('error.actionUploadImage', error)
    //
  }
}
