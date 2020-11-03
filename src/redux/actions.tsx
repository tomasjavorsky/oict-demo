import {Languages} from '../types'

// ---------- Action types ----------

export enum CommonActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_API_KEY = 'SET_API_KEY',
}

interface SetLanguage {
    type: typeof CommonActionTypes.SET_LANGUAGE
    payload: {
        language: Languages
    }
}

interface SetApiKey {
  type: typeof CommonActionTypes.SET_API_KEY
  payload: {
      apiKey: string
  }
}

// ---------- Actions ----------

export type CommonActions = SetLanguage | SetApiKey

export const SetLanguageAction = (language: Languages) => ({
  type: CommonActionTypes.SET_LANGUAGE,
  payload: {
    language,
  },
})

export const SetApiKeyAction = (apiKey: string) => ({
  type: CommonActionTypes.SET_API_KEY,
  payload: {
    apiKey,
  },
})
