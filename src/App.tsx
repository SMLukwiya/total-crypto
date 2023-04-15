import React from "react"
import {MemoryRouter, Routes, Route} from "react-router-dom"

import HomePage from "./pages/Home"

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MemoryRouter>
  )
}
