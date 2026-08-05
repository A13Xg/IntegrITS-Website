import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="container">Welcome to IntegrITS Design Showcase</div>} />
    </Routes>
  )
}

export default App
