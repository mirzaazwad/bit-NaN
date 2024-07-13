import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { Provider } from 'react-redux'
import { CustomProvider } from 'rsuite'
import { appStore } from './stores/redux-store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <CustomProvider>
        <App />
      </CustomProvider>
    </Provider>
  </React.StrictMode>,
)
