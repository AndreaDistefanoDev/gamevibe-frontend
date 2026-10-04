import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function VideogamePage() {
    const { id } = useParams()
    const [videogame, setVideogame] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/videogames/${id}`)
            .then(response => {
                setVideogame(response.data.data)
            })
    }, [id])

    if (!videogame) {
        return <p>Caricamento...</p>
    }

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{videogame.title}</h2>
                <span className="badge text-bg-secondary mb-3">{videogame.genre.name}</span>
                <div className="mb-3">
                    {videogame.platforms.map(platform => (
                        <span key={platform.id} className="badge me-1" style={{ backgroundColor: platform.color }}>
                            {platform.name}
                        </span>
                    ))}
                </div>
                <p className="card-text">{videogame.description}</p>
                <p className="text-muted">Data di uscita: {videogame.release_date}</p>
                <p className="fw-bold">{videogame.price}</p>
                <Link to="/" className="btn btn-outline-secondary">Torna alla lista</Link>
            </div>
        </div>
    )
}

export default VideogamePage