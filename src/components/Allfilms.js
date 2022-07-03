import React from 'react'
import ListItem from './ListItem'

const AllFilms = ({
    ghiblies,
    onGhibliClick,
    ghibliTomatoNumber,
}) => {

    const ghibliesItems = ghiblies.map((ghibli) => {
        if (ghibli.rt_score > parseInt(ghibliTomatoNumber))
            return <ListItem
                ghibli={ghibli}
                key={ghibli.id}
                onGhibliClick={onGhibliClick} />
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