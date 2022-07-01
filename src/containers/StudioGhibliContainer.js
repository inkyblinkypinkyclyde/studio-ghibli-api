import React, { useState, useEffect } from 'react'
import Films from '../components/Films'

const StudioGhibliContainer = () => {
    const [ghiblies, setGhiblies] = useState([])
    const [currentGhibli, setCurrentGhibli] = useState(null)

    useEffect(() => {
        getGhiblies();
    }, [])


    const getGhiblies = function () {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(ghiblies => setGhiblies(ghiblies))
    }

    return (
        <>
            <h1>Studio Ghibli Filmography</h1>
            <Films ghiblies={ghiblies} />
        </>
    )
}

export default StudioGhibliContainer