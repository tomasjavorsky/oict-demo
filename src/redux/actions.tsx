import {Languages} from '../types'

// ---------- Action types ----------

export enum CommonActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
}

interface SetLanguage {
    type: typeof CommonActionTypes.SET_LANGUAGE
    payload: {
        language: Languages
    }
}

// ---------- Actions ----------

export type CommonActions = SetLanguage

export const SetLanguageAction = (language: Languages) => ({
  type: CommonActionTypes.SET_LANGUAGE,
  payload: {
    language,
  },
})
