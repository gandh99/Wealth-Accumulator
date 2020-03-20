import React from 'react'
import './radio-button.css'
import { transformArraysToObject } from '../utils/utility'

export default function RadioGroup(props) {
    // options = [{name: optionName1, value: optionValue1}, {name: optionName2, value: optionValue2}, ...]
    const options = transformArraysToObject(props.optionNames, props.optionValues)
    
    return (
        <div className='radio-group-container'>
            {options.map(option => (
                <label className="radio-button-container">
                    <input
                        type="radio"
                        name={props.id}
                        onClick={() => props.onRadioSelect(option.value)}
                    />
                    <span className='radio-button-text'>{option.name}</span>
                    <span className="checkmark"></span>
                </label>
            ))}
        </div>
    )
}