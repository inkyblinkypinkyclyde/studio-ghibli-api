import React from 'react'

const ListItem = ({ ghibli }) => {
    return (
        <li><b>{ghibli.title}</b> {ghibli.release_date}</li>
    )
}

export default ListItem