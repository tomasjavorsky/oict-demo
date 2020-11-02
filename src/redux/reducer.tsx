import {Languages} from '../types'
import {CommonActions, CommonActionTypes} from './actions'

export interface ReduxStoreType {
  language: Languages
}

const initialState = {
  language: 'en' as Languages,
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
    default:
      return state
  }
}
