import React from 'react'
import './card-container.css'

export default function CardContainer(props) {
    return (
        <div className='card-container'>
            <div className='card-deck'>
                {props.cards}
            </div>
        </div>
    )
}
