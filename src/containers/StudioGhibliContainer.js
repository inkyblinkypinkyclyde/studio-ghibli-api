import React, { useState, useEffect } from 'react'
import Films from '../components/Films'

const StudioGhibliContainer = () => {
    const [ghiblies, setGhiblies] = useState([])
    const [currentGhibli, setSelectedGhibli] = useState(null)

    useEffect(() => {
        getGhiblies();
    }, [])

    const onGhibliClick = function (ghibli) {
        setSelectedGhibli(ghibli)
    }

    const getGhiblies = function () {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(ghiblies => setGhiblies(ghiblies))
    }

    return (
        <>
            <h1>Studio Ghibli Filmography</h1>
            <Films ghiblies={ghiblies} onGhibliClick={onGhibliClick} currentGhibli={currentGhibli} />
        </>
    )
}

export default StudioGhibliContainer