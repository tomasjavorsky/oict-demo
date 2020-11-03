import {Box, Button, makeStyles, Theme, Typography} from '@material-ui/core'
import React, {useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {ParkingSpotData} from '../data-box'

interface DetailModalProps extends ParkingSpotData {
  handleClose: () => void
}

const styles = makeStyles((theme: Theme) => ({
  backdrop: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#2b2b2bcc',
  },
  modalBody: {
    zIndex: 30,
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '450px',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}))

const DetailModal = ({properties, handleClose}: DetailModalProps) => {
  const classes = styles()
  const {t} = useTranslation()
  const stopPropagation = useCallback((e) => {
    e.stopPropagation()
  }, [])
  
  return (
    <Box className={classes.backdrop} onClick={handleClose}>
      <Box className={classes.modalBody} onClick={stopPropagation}>
        <Typography variant={'h4'}>{properties.name}</Typography>
        <Typography>{`${t('city')}: ${
          properties.address.address_locality
        }`}</Typography>
        <Typography>{`${t('address')}: ${
          properties.address.street_address
        }`}</Typography>
        <Button color={'secondary'} onClick={handleClose}>
          {t('close')}
        </Button>
      </Box>
    </Box>
  )
}

export default DetailModal
