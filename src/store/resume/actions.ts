import { api } from '../../utils'
import { actionSetLoading } from '../ui/actions'
import { Types } from './types'

export const saveResume = (payload: boolean) => ({
  type: Types.INIT_RESUME,
  payload,
})

export const initResume = (id: any) => async (dispatch: any) => {
  console.log('id', id)
  try {
    dispatch(actionSetLoading(true))
    const response: any = await api.get(`/resume/${id}`)
    console.log('response.initResume', response?.data?.result?.resume)
    if (response?.data?.result?.resume) {
      await dispatch(saveResume(response?.data?.result?.resume))
      localStorage.setItem('resumeInfo', JSON.stringify(response?.data?.result?.resume))
    }
    return response?.data?.result?.resume
  } catch (error) {
    console.log('error.initResume', error)
    //
  } finally {
    dispatch(actionSetLoading(false))
  }
}
