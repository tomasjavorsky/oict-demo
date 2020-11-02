import React, {Suspense} from 'react'
import DataBrowser from './pages/data-browser'

const App = () => {
  return (
    <Suspense fallback='loading'>
      <DataBrowser />
    </Suspense>
  )
}

export default App
