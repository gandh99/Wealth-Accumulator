import React from 'react'
import { Form } from 'react-bootstrap'

export default function ModalTextInput(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Control
                className='form-text-input'
                type="text"
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
            />
        </Form.Group>
    )
}
