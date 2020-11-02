import React from 'react'
import {Box, makeStyles, Theme, Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

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
  const {t} = useTranslation()
return <Box className={classes.header}><Typography>{t('header')}</Typography></Box>
}

export default Header
