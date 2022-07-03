import React from 'react'

const Inputs = ({ onGhibliSet }) => {
    function onChange(event) {
        onGhibliSet(event.target.value)
    }


    return (
        <form>
            <input onChange={onChange} type='number' defaultValue='0' />
        </form>
    )
}

export default Inputs