import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { InstantNoodles, updateConfig } from "instant-noodles"
import "./globals.css"

const config = { verbose: true, debug: true }

updateConfig(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* Leave this here for live test environment */}
    <InstantNoodles RootComponent={App} config={config} />
  </React.StrictMode>,
  document.getElementById("root")
)
