import React, {useCallback} from 'react'
import {Box, CircularProgress, makeStyles, Typography} from '@material-ui/core'
import Footer from '../../components/footer'
import Header from '../../components/header'
import {useSelector} from 'react-redux'
import {
  selectApiKey,
  selectError,
  selectIsLoading,
  selectParkingSpotData,
} from '../../redux/selectors'
import {mockData} from '../../mockData'
import DataBox from '../../components/data-box'
import {useTranslation} from 'react-i18next'

const pageStyles = makeStyles(() => ({
  outerSpace: {
    backgroundColor: '#e5e5e5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: '450px',
    height: '500px',
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    height: '100%',
    overflow: 'scroll',
    overflowX: 'hidden',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
}))

const DataBrowser = () => {
  const classes = pageStyles()
  const hasApiKey = !!useSelector(selectApiKey)
  const isLoading = useSelector(selectIsLoading)
  const hasError = useSelector(selectError)
  const parkingSpotData = useSelector(selectParkingSpotData)
  const {t} = useTranslation()

  const visualizeData = useCallback(() => {
    if (hasApiKey) {
      return (
        <>
          {isLoading && (
            <Box className={classes.center}>
              <CircularProgress />
            </Box>
          )}
          {hasError && (
            <Box className={classes.center}>
              <Typography>{`${t('fetchError')} :'(`}</Typography>
            </Box>
          )}
          {!hasError &&
            !isLoading &&
            parkingSpotData?.map((parkingSpot, index) => (
              <DataBox
                index={index}
                name={parkingSpot.properties.name}
                description={String(parkingSpot.properties.num_of_free_places)}
                data={parkingSpot}
              />
            ))}
        </>
      )
    } else {
      return mockData.features.map((feature, index) => (
        <DataBox
          index={index}
          name={feature.properties.name}
          description={String(feature.properties.num_of_free_places)}
          data={feature}
        />
      ))
    }
  }, [hasApiKey, hasError, isLoading, t, classes.center])

  return (
    <Box className={classes.outerSpace}>
      <Box className={classes.mainContainer}>
        <Header />
        <Box className={classes.contentBox}>{visualizeData()}</Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default DataBrowser
