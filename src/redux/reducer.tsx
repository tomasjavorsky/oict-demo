import {Languages} from '../types'
import {CommonActions, CommonActionTypes} from './actions'

export interface ReduxStoreType {
  language: Languages
  apiKey: string
}

const initialState = {
  language: 'en' as Languages,
  apiKey: '',
}

export default function reducer(
  state = initialState,
  action: CommonActions,
): ReduxStoreType {
  switch (action.type) {
    case CommonActionTypes.SET_LANGUAGE: {
      const {language} = action.payload
      return {
        ...state,
        language,
      }
    }
    case CommonActionTypes.SET_API_KEY: {
      const {apiKey} = action.payload
      return {
        ...state,
        apiKey,
      }
    }
    default:
      return state
  }
}
