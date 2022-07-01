import React from 'react'
import AllFilms from './Allfilms'


const Films = ({ ghiblies }) => {
    return (
        <>
            <h1>I'm some films</h1>
            <AllFilms ghiblies={ghiblies} />
        </>
    )
}

export default Films