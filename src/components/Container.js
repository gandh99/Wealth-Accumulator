import React from 'react'
import './container.css'

export default function Container(props) {
    return (
        <div className='container'>
            {props.utilityBar}
            {props.addEditItemModal}
            {props.setYearsModal}
            {props.cardContainer}
            {props.chartContainer}
        </div>
    )
}
