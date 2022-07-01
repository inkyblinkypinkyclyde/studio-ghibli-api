import React from 'react'
import ListItem from './ListItem'

const AllFilms = ({ ghiblies, onGhibliClick }) => {

    const ghibliesItems = ghiblies.map((ghibli) => {
        return <ListItem ghibli={ghibli} key={ghibli.id} onGhibliClick={onGhibliClick} />
    })
    return (
        <>
            <ul>
                {ghibliesItems}
            </ul>
        </>
    )
}

export default AllFilms