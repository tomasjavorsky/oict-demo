import {Languages, ParkingSpotData} from '../types'
import {CommonActions, CommonActionTypes} from './actions'

export interface ReduxStoreType {
  language: Languages
  apiKey: string | null
  isLoading: boolean
  error: boolean
  data: ParkingSpotData[] | null
}

const initialState: ReduxStoreType = {
  language: 'en' as Languages,
  apiKey: null,
  isLoading: false,
  error: false,
  data: null,
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
    case CommonActionTypes.GET_DATA: {
      const {apiKey} = action.payload
      return {
        ...state,
        apiKey,
        isLoading: true,
        error: false,
        data: null,
      }
    }
    case CommonActionTypes.GET_DATA_SUCCESS: {
      const {data} = action.payload
      return {
        ...state,
        isLoading: false,
        data,
      }
    }
    case CommonActionTypes.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    }
    case CommonActionTypes.CLEAR_API_KEY: {
      return {
        ...state,
        apiKey: null,
      }
    }
    default:
      return state
  }
}
