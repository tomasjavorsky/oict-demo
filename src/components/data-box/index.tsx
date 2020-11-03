import React, {useCallback, useState} from 'react'
import {Box, Button, makeStyles, Theme, Typography} from '@material-ui/core'
import {useTranslation} from 'react-i18next'
import DetailModal from '../detailModal'
import {ParkingSpotData} from '../../types'

const styles = makeStyles((theme: Theme) => ({
  boxBody: {
    width: '130px',
    height: '100px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#f7f7f7',
    marginBottom: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#e0e0e0',
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
  data: ParkingSpotData
  index: number
}

const DataBox = ({name, description, data, index}: DataBoxProps) => {
  const classes = styles()
  const {t} = useTranslation()
  const [showDetail, setShowDetail] = useState(false)
  const handleShowDetail = useCallback(() => {
    setShowDetail(true)
  }, [])
  const handleHideDetail = useCallback(() => {
    setShowDetail(false)
  }, [])

  return (
      <div key={name}>
        {showDetail && (
          <DetailModal
            properties={data.properties}
            handleClose={handleHideDetail}
          />
        )}
        <Button className={classes.boxBody} onClick={handleShowDetail}>
          <Box className={classes.boxContent}>
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.description}>{`${t(
              'freeSpots',
            )}: ${description}`}</Typography>
          </Box>
        </Button>
      </div>
  )
}

export default DataBox
