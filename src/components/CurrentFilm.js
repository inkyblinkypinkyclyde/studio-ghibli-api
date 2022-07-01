import React from 'react'

const CurrentFilm = ({ currentGhibli }) => {
    return (
        <>
            <h3>
                <b>
                    {currentGhibli.title}
                </b>
            </h3>
            <p>
                {currentGhibli.release_date}
            </p>
            {currentGhibli.description}
        </>
    )
}
export default CurrentFilm