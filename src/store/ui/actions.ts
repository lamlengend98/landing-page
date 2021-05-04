import { Types } from './types'

export const actionSetLoading = (payload: boolean) => ({
  type: Types.LOADING,
  payload,
})
