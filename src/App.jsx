import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import VideogamePage from './pages/VideogamePage.jsx'

function App() {
  return (

    <div className="bg-body-tertiary min-vh-100">
      <nav className="navbar navbar-expand-lg bg-dark mb-4" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-controller me-2"></i>GameVibe
          </Link>
        </div>
      </nav>

      <main className="container pb-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videogames/:id" element={<VideogamePage />} />
        </Routes>
      </main>
    </div>

  )
}

export default App