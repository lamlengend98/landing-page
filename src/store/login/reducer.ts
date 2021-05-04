import { Reducer } from 'redux'
import { Types } from './types'
import States from './states'

const initialState: States = {
  loginInfo: null,
}
const loginReducer: Reducer<States> = (state = initialState, action) => {
  switch (action.type) {
    case Types.SAVE_LOGIN_INFO:
      console.log('action', action);
      return {
        ...initialState,
        loginInfo: action.payload,
      }
    default:
      return state
  }
}
export default loginReducer
