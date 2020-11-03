import { Languages, ParkingSpotData } from '../types'
import {ReduxStoreType} from './reducer'

export const selectLanguage = (store: ReduxStoreType): Languages => store.language

export const selectApiKey = (store: ReduxStoreType): string => store.apiKey

export const selectIsLoading = (store: ReduxStoreType): boolean => store.isLoading

export const selectParkingSpotData = (store: ReduxStoreType): ParkingSpotData[] | null => store.data

export const selectError = (store: ReduxStoreType): boolean => store.error