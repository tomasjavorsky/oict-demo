import { Languages } from '../types'
import {ReduxStoreType} from './reducer'

export const selectLanguage = (store: ReduxStoreType): Languages => store.language

export const selectApiKey = (store: ReduxStoreType): string => store.apiKey