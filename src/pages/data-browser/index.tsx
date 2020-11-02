import React from 'react'
import {Box, makeStyles} from '@material-ui/core'
import DataBox from '../../components/data-box'
import Footer from '../../components/footer'
import Header from '../../components/header'

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
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '100%',
    overflow: 'scroll',
    overflowX: 'hidden',
  },
}))

const DataBrowser = () => {
  const classes = pageStyles()
  return (
    <Box className={classes.outerSpace}>
      <Box className={classes.mainContainer}>
        <Header />
        <Box className={classes.contentBox}>
          <DataBox />
          <DataBox />
          <DataBox />
          <DataBox />
          <DataBox />
          <DataBox /> 
          <DataBox />
          <DataBox />
          <DataBox />          
          <DataBox />
          <DataBox />
          <DataBox />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default DataBrowser
