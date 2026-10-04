import { Link } from 'react-router-dom'

function VideogameCard({ videogame }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{videogame.title}</h5>
                <span className="badge text-bg-secondary mb-2">{videogame.genre.name}</span>
                <div className="mb-2">
                    {videogame.platforms.map(platform => (
                        <span
                            key={platform.id}
                            className="badge me-1"
                            style={{ backgroundColor: platform.color }}
                        >
                            {platform.name}
                        </span>
                    ))}
                </div>
                <p className="card-text">{videogame.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <span>{videogame.price}</span>
                <Link to={`/videogames/${videogame.id}`} className="btn btn-primary btn-sm">Dettagli</Link>
            </div>
        </div>
    )
}

export default VideogameCard