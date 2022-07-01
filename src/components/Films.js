import React from 'react'
import AllFilms from './Allfilms'
import CurrentFilm from './CurrentFilm'


const Films = ({ ghiblies, onGhibliClick, currentGhibli }) => {
    return (
        <>
            <h3>All films</h3>
            <AllFilms ghiblies={ghiblies} onGhibliClick={onGhibliClick} />
            {currentGhibli ? <CurrentFilm currentGhibli={currentGhibli} /> : null}
        </>
    )
}

export default Films