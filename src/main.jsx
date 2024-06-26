import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FireBaseProvider from './context/fireBaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FireBaseProvider>
      <App />
    </FireBaseProvider>
)
