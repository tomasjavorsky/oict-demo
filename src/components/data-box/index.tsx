import React from 'react'
import {Box, Button, makeStyles, Theme, Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

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
  name: {
    color: 'black',
  },
  description: {
    color: 'gray',
    fontSize: 12,
  },
}))

interface DataBoxProps {
  name: string
  description: string
}

const DataBox = ({name, description}: DataBoxProps) => {
  const classes = pageStyles()
  const {t} = useTranslation()

  return (
    <Button className={classes.boxBody}>
      <Box className={classes.boxContent}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.description}>{`${t('freeSpots')}: ${description}`}</Typography>
      </Box>
    </Button>
  )
}

export default DataBox
