import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'

// Constatantes Auth0
const domain = "dev-r2y45yevftqjjhfj.us.auth0.com";
const clientId = "kKmAyyvEcfXU5FK5KEZFtzHKJfw1m4z5";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
