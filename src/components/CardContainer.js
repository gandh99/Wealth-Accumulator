import React from 'react'
import './container.css'

export default function CardContainer(props) {
    return (
        <div className='card-container'>
            {props.cards}
        </div>
    )
}
