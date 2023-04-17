import React from "react"
import {MemoryRouter, Routes, Route} from "react-router-dom"

import HomePage from "./pages/Home";
import Coin from "./pages/Coin";
import NewsPage from "./pages/News";

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:coinId" element={<Coin />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </MemoryRouter>
  )
}
