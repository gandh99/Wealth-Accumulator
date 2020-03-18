import React from 'react'
import './radio-button.css'
import { transformArraysToObject } from '../utils/utility'

export default function RadioGroup(props) {
    const options = transformArraysToObject(props.optionNames, props.optionValues)
    
    return (
        <div class='radio-group-container'>
            {options.map(option => (
                <label class="radio-button-container">
                    <input
                        type="radio"
                        name={props.id}
                        onClick={() => props.onRadioSelect(option.value)}
                    />
                    <span class='radio-button-text'>{option.name}</span>
                    <span class="checkmark"></span>
                </label>
            ))}
        </div>
    )
}