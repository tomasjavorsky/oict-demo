import {
  CommonActions,
  CommonActionTypes,
  GetDataFailureAction,
  GetDataSuccessAction,
} from './actions'

export const getDataWithApiKey = (StoreApi: any) => (next: any) => (
  action: CommonActions,
) => {
  if (action.type === CommonActionTypes.GET_DATA && action.payload.apiKey) {
    fetch('https://api.golemio.cz/v2/parkings/?offset=0&limit=15', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': action.payload.apiKey,
      },
    }).then((response) => {
      let dataPromise = null
      if (!response.ok) {
        StoreApi.dispatch(GetDataFailureAction())
        return
      } else {
        dataPromise = response.json()
        return dataPromise.then((data) =>
          StoreApi.dispatch(GetDataSuccessAction(data.features)),
        )
      }
    })
  }
  return next(action)
}
