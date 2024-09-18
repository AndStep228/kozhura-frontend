import React from 'react'

export default function Button(props) {
    return (
        <button type='button' className='button'>
            {props.buttonTxt}
        </button>
    )
}


