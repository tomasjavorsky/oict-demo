import React from 'react'
import {Box, makeStyles, Theme, Typography} from '@material-ui/core'

const pageStyles = makeStyles((theme: Theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        height: '50px',
        width: '100%',
        marginBottom: theme.spacing(1)
      },
}))

const Header = () => {
  const classes = pageStyles()
return <Box className={classes.header}><Typography>{'Data type'}</Typography></Box>
}

export default Header
