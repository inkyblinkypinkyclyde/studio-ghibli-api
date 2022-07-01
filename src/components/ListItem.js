import React from 'react'

const ListItem = ({ ghibli, onGhibliClick }) => {

    const handleClick = function () {
        onGhibliClick(ghibli)
    }

    return (
        <li onClick={handleClick}><b>{ghibli.title}</b> {ghibli.release_date}</li>
    )
}

export default ListItem