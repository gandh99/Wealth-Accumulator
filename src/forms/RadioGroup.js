import React from 'react'
import './radio-button.css'

export default function RadioGroup(props) {
    const options = transform(props.optionNames, props.optionValues)
    
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

function transform(nameArray, valueArray) {
    let obj = []
    for (let i = 0; i < nameArray.length; i++) {
        obj.push({
            name: nameArray[i],
            value: (valueArray[i]) ? valueArray[i] : nameArray[i],
        })
    }
    
    return obj
}