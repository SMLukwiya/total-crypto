import React from "react"
import {createBrowserRouter} from "react-router-dom"

import HomePage from "./pages/Home"

function App() {
  return (
    <></>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])
