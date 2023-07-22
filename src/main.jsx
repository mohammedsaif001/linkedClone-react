/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'

function Fallback({ error, }) {
  return (
    <div role="alert" style={{ display: "flex", flexDirection: "column", margin: "2rem" }}>
      <h2>Something went wrong:</h2>
      <pre style={{ color: "red", marginTop: "1rem", fontFamily: "sans-serif" }}>{error.stack}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
