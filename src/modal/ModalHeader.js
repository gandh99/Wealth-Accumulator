import React from 'react'
import { Modal } from 'react-bootstrap'

export default function ModalHeader(props) {
    return (
        <Modal.Header className='modal-header'>
            <Modal.Title id="contained-modal-title-vcenter" className='modal-title'>
                {props.title}
            </Modal.Title>
        </Modal.Header>
    )
}
