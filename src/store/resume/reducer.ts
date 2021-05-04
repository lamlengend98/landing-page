import { Reducer } from 'redux'
import { Types } from './types'
import States from './states'

const initialState: States = {
  resumeInfo: {},
}

const ToolbarReducer: Reducer<States> = (state = initialState, action) => {
  switch (action.type) {
    case Types.INIT_RESUME:
      return {
        ...state,
        resumeInfo: action.payload,
      }
    default:
      return state
  }
}
export default ToolbarReducer
