import React from 'react'
import './add-button.css'
import Add from '../images/add.png'

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
