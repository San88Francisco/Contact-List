import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './assets/style/01-Index.scss'
import {Provider} from 'react-redux'
import {store} from './assets/redux/store'

const root = document.getElementById('root')

createRoot(root).render(
   <Provider store={store}>
      <App />
   </Provider>
)
