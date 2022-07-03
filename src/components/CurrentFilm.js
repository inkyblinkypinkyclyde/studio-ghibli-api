import React from 'react'
import CurrentFilmImage from './CurrentFilmImage'

const CurrentFilm = ({ currentGhibli }) => {
    return (
        <div>
            <h3>
                <b>
                    {currentGhibli.title}
                </b>
            </h3>
            <p>
                {currentGhibli.rt_score}/100 tomatoes
            </p>
            <CurrentFilmImage currentGhibli={currentGhibli} />
            <p>
                {currentGhibli.release_date}
            </p>
            {currentGhibli.description}
        </div>
    )
}
export default CurrentFilm