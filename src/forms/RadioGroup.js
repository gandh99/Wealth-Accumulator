import React from 'react'
import './radio-button.css'

export default function RadioGroup(props) {
    return (
        <div class='radio-group-container'>
            {props.options.map(option => (
                <label class="radio-button-container">
                    <input type="radio" checked="checked" name={props.id} />
                    <span class='radio-button-text'>{option}</span>
                    <span class="checkmark"></span>
                </label>
            ))}
        </div>
    )
}
