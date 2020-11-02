import React, {useCallback, useState} from 'react'
import {Box, Button, makeStyles, TextField, Theme} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

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

type Languages = 'cs' | 'en'

const Footer = () => {
  const classes = pageStyles()
  const { t, i18n } = useTranslation();
  const [apiKey, setApiKey] = useState('')
  const [currentLanguage, setCurrentLanguage] = useState<Languages>('en')

  const handleUseApiKey = useCallback(() => {
    //TODO
  }, [])

  const handleLanguageChange = useCallback(() => {
    switch (currentLanguage) {
      case 'cs': {
        setCurrentLanguage('en')
        i18n.changeLanguage('en')
        break
      }
      case 'en': {
        setCurrentLanguage('cs')
        i18n.changeLanguage('cs')
        break
      }
      default: {
        setCurrentLanguage('en')
        i18n.changeLanguage('en')
      }
    }
  }, [currentLanguage, i18n])

  return (
    <Box className={classes.footer}>
      <Box className={classes.inputBox}>
        <Box marginX={1}>
          <TextField
            id='outlined-basic'
            variant={'outlined'}
            label={t('apiKey')}
            size={'small'}
            margin={'none'}
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
          />
        </Box>
        <Button variant='contained' onClick={handleUseApiKey}>
          {t('use')}
        </Button>
      </Box>
      <Button
        className={classes.languageToggle}
        color={'primary'}
        onClick={handleLanguageChange}
      >
        {'CS/EN'}
      </Button>
    </Box>
  )
}

export default Footer
