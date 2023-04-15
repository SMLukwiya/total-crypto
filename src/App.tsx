import React from "react"
import {MemoryRouter, Routes, Route} from "react-router-dom"

import HomePage from "./pages/Home";
import Coin from "./pages/Coin";

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </MemoryRouter>
  )
}
