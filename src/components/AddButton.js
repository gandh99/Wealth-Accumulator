import React from 'react'
import './add-button.css'

export default function AddButton(props) {
    return (
        <div
            className='button'
            onClick={() => props.setShowModal(true)}
        >
            <div className='button-text' id='add-button-text'>{props.text}</div>
        </div>
    )
}
