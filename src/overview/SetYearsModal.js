import React from 'react'
import { Modal } from 'react-bootstrap'
import ModalHeader from '../modal/ModalHeader'
import { Form } from 'react-bootstrap'
import ModalTextInput from '../modal/ModalTextInput'
import { Button } from 'react-bootstrap'

export default function SetYearsModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal'
        >
            <ModalHeader
                title={`Set Time Period in Years`}
            />
            <Form onSubmit={null}>
                <Modal.Body className='modal-body'>
                    <ModalTextInput
                        controlId={'expenseName'}
                        placeholder={'Enter time period in years'}
                        // defaultValue={props.editData.expenseName}
                        // onChange={e => setExpenseName(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button type='submit' className='modal-button'>
                        Set
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
