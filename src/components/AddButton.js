import React from 'react'
import '../styles/components/add-button.css'

export default function AddButton(props) {
    return (
        <div
            className='button'
            onClick={() => props.setShowModal(true)}
        >
            {props.text}
        </div>
    )
}
