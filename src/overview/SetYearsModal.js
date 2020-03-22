import React from 'react'
import { Modal } from 'react-bootstrap'
import ModalHeader from '../modal/ModalHeader'
import { Form } from 'react-bootstrap'
import ModalTextInput from '../modal/ModalTextInput'
import { Button } from 'react-bootstrap'
import { isValidPositiveNumber } from '../forms/input-validation'

export default function SetYearsModal(props) {
    const [years, setYears] = React.useState(props)

    React.useEffect(() => {
        setYears(props.years)
    }, [props])

    const submitYears = (e) => {
        e.preventDefault()

        // Check for errors
        if (!allInputsValid()) {
            return
        }

        // Save changes
        props.saveToOverview(years)
        props.saveToApp(years)

        clearModalState()
        props.onHide()
    }

    const allInputsValid = () => {
        return isValidPositiveNumber(years) && years <= 100
    }

    const clearModalState = () => {
        setYears(0)
    }

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
            <Form onSubmit={submitYears}>
                <Modal.Body className='modal-body'>
                    <ModalTextInput
                        controlId={'expenseName'}
                        placeholder={'Enter time period in years'}
                        defaultValue={props.years}
                        onChange={e => setYears(e.target.value)}
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
