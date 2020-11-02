import { Languages } from '../types'
import {ReduxStoreType} from './reducer'

export const selectLanguage = (store: ReduxStoreType): Languages => store.language