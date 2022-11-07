import React from 'react'

const Inputs = ({ onGhibliSet }) => {
    function onChange(event) {
        onGhibliSet(event.target.value)
    }


    return (
        <form>
            <p>
                Enter a number to return all Ghiblies over a given Tomato rating
            </p>
            <input onChange={onChange} type='number' defaultValue='0' />
        </form>
    )
}

export default Inputs