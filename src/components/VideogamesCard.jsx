import { Link } from 'react-router-dom'

function VideogameCard({ videogame }) {
    return (
        <div className="card h-100 shadow-sm">
            {videogame.image && (
                <div className="p-3 pb-0">
                    <div className="ratio mx-auto bg-body-secondary rounded" style={{ '--bs-aspect-ratio': '150%', maxWidth: '170px' }}>
                        <img
                            src={`http://localhost:8000/storage/${videogame.image}`}
                            alt={videogame.title}
                            className="object-fit-contain rounded"
                        />
                    </div>
                </div>
            )}
            <div className="card-body">
                <h5 className="card-title">{videogame.title}</h5>
                <span className="badge text-bg-primary mb-2">{videogame.genre.name}</span>
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
                <Link to={`/videogames/${videogame.id}`} className="btn btn-dark btn-sm">Dettagli</Link>
            </div>
        </div>
    )
}

export default VideogameCard