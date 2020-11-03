
import {Languages, ParkingSpotData} from '../types'

// ---------- Action types ----------

export enum CommonActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
  GET_DATA = 'SET_API_KEY',
  GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
  GET_DATA_FAILURE = 'GET_DATA_FAILURE',
}

interface SetLanguage {
  type: typeof CommonActionTypes.SET_LANGUAGE
  payload: {
    language: Languages
  }
}

interface GetData {
  type: typeof CommonActionTypes.GET_DATA
  payload: {
    apiKey: string
  }
}

interface GetDataSuccess {
  type: typeof CommonActionTypes.GET_DATA_SUCCESS
  payload: {
    data: ParkingSpotData[]
  }
}

interface GetDataFailure {
  type: typeof CommonActionTypes.GET_DATA_FAILURE
}

// ---------- Actions ----------

export type CommonActions = SetLanguage | GetData | GetDataSuccess | GetDataFailure

export const SetLanguageAction = (language: Languages) => ({
  type: CommonActionTypes.SET_LANGUAGE,
  payload: {
    language,
  },
})

export const GetDataAction = (apiKey: string) => ({
  type: CommonActionTypes.GET_DATA,
  payload: {
    apiKey,
  },
})

export const GetDataSuccessAction = (data: ParkingSpotData) => ({
  type: CommonActionTypes.GET_DATA_SUCCESS,
  payload: {
    data,
  },
})

export const GetDataFailureAction = () => ({
  type: CommonActionTypes.GET_DATA_FAILURE,
})
