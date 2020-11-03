import {Box, Button, makeStyles, Theme, Typography} from '@material-ui/core'
import React, {useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import { ParkingSpotData } from '../../types'


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
    justifyContent: 'space-between',
    width: '400px',
    height: '450px',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
  },
  modalContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  closeContainer: {
    width: '100%',
    borderTop: `1px solid #ffdddd`,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #ddd',
    padding: `${theme.spacing(1)}px 0px`,
    borderRadius: '8px 8px 0px 0px',
    marginBottom: theme.spacing(1),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[600],
  },
  textBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  textType: {
    fontWeight: 'bold',
  },
}))

const DetailModal = ({properties, handleClose}: DetailModalProps) => {
  const {name, address,parking_type, num_of_free_places, total_num_of_places} = properties
  const classes = styles()
  const {t} = useTranslation()
  const stopPropagation = useCallback((e) => {
    e.stopPropagation()
  }, [])

  return (
    <Box className={classes.backdrop} onClick={handleClose}>
      <Box className={classes.modalBody} onClick={stopPropagation}>
        <Box className={classes.title}>
          <Typography variant={'h4'}>{name}</Typography>
        </Box>
        <Box className={classes.modalContent}>
          <Box className={classes.textBox}>
            <Box mr={1}>
              <Typography className={classes.textType}>{`${t(
                'city',
              )}:`}</Typography>
            </Box>
            <Typography>{`${address.address_locality}`}</Typography>
          </Box>

          <Box className={classes.textBox}>
            <Box mr={1}>
              <Typography className={classes.textType}>{`${t(
                'address',
              )}:`}</Typography>
            </Box>
            <Typography>{`${address.street_address}`}</Typography>
          </Box>

          <Box className={classes.textBox}>
            <Box mr={1}>
              <Typography className={classes.textType}>{`${t(
                'type',
              )}:`}</Typography>
            </Box>
            <Typography>{`${parking_type.description}`}</Typography>
          </Box>

          <Box className={classes.textBox}>
            <Box mr={1}>
              <Typography className={classes.textType}>{`${t(
                'occupancy',
              )}:`}</Typography>
            </Box>
            <Typography>{`${num_of_free_places} / ${total_num_of_places}`}</Typography>
          </Box>
        </Box>
        <Box className={classes.closeContainer}>
          <Button fullWidth color={'secondary'} onClick={handleClose}>
            {t('close')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailModal
