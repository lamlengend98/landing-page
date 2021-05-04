import { Reducer } from 'redux'
import { Types } from './types'
import States from './states'

const initialState: States = {
  loading: false,
}

const ToolbarReducer: Reducer<States> = (state = initialState, action) => {
  console.log('action', action);
  
  switch (action.type) {
    case Types.LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
export default ToolbarReducer
