import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Archive } from './pages/Archive'
import { Delete } from './pages/Delete'
import { Important } from './pages/Important'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/important' element={<Important />} />
        <Route path='/bin' element={<Delete />} />
      </Routes>
    </>
  )
}

export default App
