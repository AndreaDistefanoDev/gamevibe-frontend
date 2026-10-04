import { useState, useEffect } from 'react'
import axios from 'axios'
import VideogamesCard from '../components/VideogamesCard.jsx'

function HomePage() {
    const [videogames, setVideogames] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/videogames')
            .then(response => {
                setVideogames(response.data.data)
            })
    }, [])

    return (
        <div className="row g-4">
            {videogames.map(videogame => (
                <div key={videogame.id} className="col-12 col-md-6 col-lg-4">
                    <VideogamesCard videogame={videogame} />
                </div>
            ))}
        </div>
    )
}

export default HomePage