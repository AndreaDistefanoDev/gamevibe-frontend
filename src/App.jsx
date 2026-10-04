import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">GameVibe</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App