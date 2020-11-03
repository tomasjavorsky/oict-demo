import React, {useCallback} from 'react'
import {Box, makeStyles} from '@material-ui/core'
import Footer from '../../components/footer'
import Header from '../../components/header'
import {useSelector} from 'react-redux'
import {selectApiKey} from '../../redux/selectors'
import {mockData} from '../../mockData'
import DataBox from '../../components/data-box'

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
}))

const DataBrowser = () => {
  const classes = pageStyles()
  const hasApiKey = !!useSelector(selectApiKey)
  const visualizeData = useCallback(() => {
    if (hasApiKey) {
      return null
    } else {
      return mockData.features.map((feature) => (
        <DataBox
          name={feature.properties.name}
          description={String(feature.properties.num_of_free_places)}
          data={feature}
        />
      ))
    }
  }, [hasApiKey])
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
