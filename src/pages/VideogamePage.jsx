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
        <div className="card shadow-sm overflow-hidden">
            <div className="row g-0">
                {videogame.image && (
                    <div className="col-md-3 bg-body-secondary">
                        <img
                            src={`http://localhost:8000/storage/${videogame.image}`}
                            alt={videogame.title}
                            className="img-fluid w-100 d-block"
                        />
                    </div>
                )}

                <div className={`${videogame.image ? 'col-md-9' : 'col-12'} d-flex flex-column`}>
                    <div className="card-body p-4 d-flex flex-column">
                        <h2 className="card-title mb-3">{videogame.title}</h2>

                        <div className="d-flex flex-wrap gap-5 mb-3">
                            <div>
                                <div className="text-body-secondary small text-uppercase fw-semibold mb-1">Genere</div>
                                <span className="badge text-bg-primary">{videogame.genre.name}</span>
                            </div>

                            {videogame.platforms.length > 0 && (
                                <div>
                                    <div className="text-body-secondary small text-uppercase fw-semibold mb-1">Piattaforme</div>
                                    {videogame.platforms.map(platform => (
                                        <span key={platform.id} className="badge me-1" style={{ backgroundColor: platform.color }}>
                                            {platform.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <div className="text-body-secondary small text-uppercase fw-semibold mb-1">Data di uscita</div>
                            <div>{videogame.release_date}</div>
                        </div>

                        <div className="mb-3">
                            <div className="text-body-secondary small text-uppercase fw-semibold mb-1">Descrizione</div>
                            <div>{videogame.description}</div>
                        </div>

                        <div className="mt-auto text-end">
                            <div className="text-body-secondary small text-uppercase fw-semibold">Prezzo</div>
                            <div className="fs-4 fw-bold">{videogame.price}</div>
                        </div>
                    </div>

                    <div className="card-footer bg-transparent p-3">
                        <Link to="/" className="btn btn-outline-secondary">
                            <i className="bi bi-arrow-left me-1"></i>Torna alla lista
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideogamePage