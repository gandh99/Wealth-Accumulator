import React from 'react'
import './modal-background.css'

export default function ModalBackground(props) {
    const modalBackgroundStyle = {
        visibility: props.show ? 'visible' : 'hidden'
    }

    return (
        <div
            className='modal-background'
            style={modalBackgroundStyle}
            onClick={props.toggleVisibility.bind(this, false)}
        >
        </div>
    )
}
