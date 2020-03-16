import React, { Component } from 'react'
import '../styles/components/add-button.css'

export class AddButton extends Component {
    render() {
        return (
            <div className='button'>
                {this.props.text}
            </div>
        )
    }
}

export default AddButton
