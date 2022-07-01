import React from 'react'
import ListItem from './ListItem'

const AllFilms = ({ ghiblies }) => {

    const ghibliesItems = ghiblies.map((ghibli, index) => {
        return <ListItem ghibli={ghibli} key={index} />
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