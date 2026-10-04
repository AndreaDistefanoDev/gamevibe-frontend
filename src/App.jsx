import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import VideogamePage from './pages/VideogamePage.jsx'

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">GameVibe</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videogames/:id" element={<VideogamePage />} />
      </Routes>
    </div>
  )
}

export default App