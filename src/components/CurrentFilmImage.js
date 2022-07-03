import React from 'react'

const CurrentFilmImage = ({ currentGhibli }) => {
    return (
        <img src={currentGhibli.image} />
    )
}

export default CurrentFilmImage