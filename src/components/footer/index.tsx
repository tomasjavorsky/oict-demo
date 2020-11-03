import React, {useCallback, useState} from 'react'
import {Box, Button, makeStyles, TextField, Theme} from '@material-ui/core'
import {useTranslation} from 'react-i18next'
import {selectLanguage} from '../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {
  ClearApiKeyAction,
  GetDataAction,
  SetLanguageAction,
} from '../../redux/actions'

const styles = makeStyles((theme: Theme) => ({
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
  const classes = styles()
  const dispatch = useDispatch()
  const currentLanguage = useSelector(selectLanguage)
  const {t, i18n} = useTranslation()
  const [apiKey, setApiKey] = useState('')

  const handleUseApiKey = useCallback(() => {
    if (apiKey) {
      dispatch(GetDataAction(apiKey))
    } else {
      dispatch(ClearApiKeyAction())
    }
  }, [dispatch, apiKey])

  const handleLanguageChange = useCallback(() => {
    switch (currentLanguage) {
      case 'cs': {
        dispatch(SetLanguageAction('en'))
        i18n.changeLanguage('en')
        break
      }
      case 'en': {
        dispatch(SetLanguageAction('cs'))
        i18n.changeLanguage('cs')
        break
      }
      default: {
        dispatch(SetLanguageAction('en'))
        i18n.changeLanguage('en')
      }
    }
  }, [currentLanguage, i18n, dispatch])

  return (
    <Box className={classes.footer}>
      <Box className={classes.inputBox}>
        <Box marginX={1}>
          <TextField
            id={'outlined-basic'}
            variant={'outlined'}
            label={t('apiKey')}
            size={'small'}
            margin={'none'}
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
          />
        </Box>
        <Button variant={'contained'} onClick={handleUseApiKey}>
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
