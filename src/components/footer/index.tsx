import React, {useCallback, useState} from 'react'
import {Box, Button, makeStyles, TextField, Theme} from '@material-ui/core'

const pageStyles = makeStyles((theme: Theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#c4c4c4',
    height: '60px',
    width: '100%',
  },
  inputBox: {
    display: 'flex',
  },
  languageToggle: {
    marginRight: theme.spacing(1),
  },
}))

const Footer = () => {
  const classes = pageStyles()
  const [apiKey, setApiKey] = useState('')
  const handleUseApiKey = useCallback(() => {
    console.log(apiKey)
  }, [apiKey])

  return (
    <Box className={classes.footer}>
      <Box className={classes.inputBox}>
        <Box marginX={1}>
          <TextField
            id='outlined-basic'
            variant={'outlined'}
            label='Api key'
            size={'small'}
            margin={'none'}
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
          />
        </Box>
        <Button variant='contained' onClick={handleUseApiKey}>{'Use'}</Button>
      </Box>
      <Button className={classes.languageToggle} color={'primary'}>
        {'CS/EN'}
      </Button>
    </Box>
  )
}

export default Footer
