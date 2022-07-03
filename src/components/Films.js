import React from 'react'
import AllFilms from './Allfilms'
import CurrentFilm from './CurrentFilm'
import Inputs from './inputs'


const Films = ({
    ghiblies,
    onGhibliClick,
    currentGhibli,
    ghibliTomatoNumber,
    onGhibliSet
}) => {
    return (
        <div>
            <h3>All films</h3>
            <Inputs
                onGhibliSet={onGhibliSet}
            />
            <div>
                <AllFilms
                    ghiblies={ghiblies}
                    onGhibliClick={onGhibliClick}
                    ghibliTomatoNumber={ghibliTomatoNumber}
                />

            </div>
            <div>

                {currentGhibli ? <CurrentFilm currentGhibli={currentGhibli} /> : null}
            </div>
        </div>
    )
}

export default Films