import React from 'react'
import './set-years-button.css'

export default function SetYearsButton(props) {
    return (
        <div
            className='button'
            onClick={() => props.setShowSetYearsModal(true)}
        >
            <div className='button-text' id='set-years-button-text'>{props.text}</div>
        </div>
    )
}
