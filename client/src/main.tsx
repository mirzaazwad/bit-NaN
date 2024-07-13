import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { Provider } from 'react-redux'
import { CustomProvider } from 'rsuite'
import { appStore } from './stores/redux-store.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={appStore}>
        <CustomProvider theme='light'>
          <App />
        </CustomProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
