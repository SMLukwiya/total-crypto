import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { router } from './App'
import './index.css'
import store from './services/store/store'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)
