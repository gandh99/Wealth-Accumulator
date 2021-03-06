import React from 'react'
import './utility-bar.css'

export default function UtilityBar(props) {
    return (
        <div className='utility-bar'>
            <div className='page-title'>{props.pageTitle}</div>
            <div className='button-group'>{props.buttonGroup}</div>
        </div>
    )
}
