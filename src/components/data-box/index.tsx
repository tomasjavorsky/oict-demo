import React from 'react'
import {Box, Button, makeStyles, Theme, Typography} from '@material-ui/core'

const pageStyles = makeStyles((theme: Theme) => ({
  boxBody: {
    width: '130px',
    height: '100px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#f7f7f7',
    marginBottom: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const DataBox = () => {
  const classes = pageStyles()
  return (
    <Button className={classes.boxBody}>
      <Box className={classes.boxContent}>
        <Typography>{'Title'}</Typography>
        <Typography>{'Basic info'}</Typography>
      </Box>
    </Button>
  )
}

export default DataBox
