import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'

export default function AddIncomeModal(props) {
    // Incomes state
    const [incomeName, setIncomeName] = React.useState('')
    const [incomeAmount, setIncomeAmount] = React.useState(0)
    const [incomeFrequency, setIncomeFrequency] = React.useState('')
    const [incomePercentageChange, setIncomePercentageChange] = React.useState(0)

    const submitIncomes = (e) => {
        e.preventDefault()

        // Check for errors
        if (!isValidName(incomeName)
            || !isValidPositiveNumber(incomeAmount)
            || !isValidPercentage(incomePercentageChange)
            || !isValidOption(incomeFrequency)) {
            return
        }

        // Update incomes in parents
        const incomesData = {
            incomeName,
            incomeAmount,
            incomeFrequency,
            incomePercentageChange,
        }
        props.setIncomes([
            ...props.incomes, incomesData
        ])
        props.saveIncomesToApp([
            ...props.incomes, incomesData
        ])

        // Clear modal state
        clearModalState()

        // Close modal
        props.onHide()
    }

    const clearModalState = () => {
        setIncomeName('')
        setIncomeAmount(0)
        setIncomeFrequency('')
        setIncomePercentageChange(0)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal'
        >
            <Modal.Header className='modal-header'>
                <Modal.Title id="contained-modal-title-vcenter" className='modal-title'>
                    Add Income
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={submitIncomes}>
                <Modal.Body className='modal-body'>
                    <Form.Group controlId="incomeName">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter name of income"
                            onChange={(e) => setIncomeName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="incomeAmount">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter income amount"
                            onChange={(e) => setIncomeAmount(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'incomeFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        onRadioSelect={frequency => setIncomeFrequency(frequency)}
                    />
                    <Form.Group controlId="incomePercentageChange">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter percentage change"
                            onChange={(e) => setIncomePercentageChange(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button type='submit' className='modal-button'>
                        Add
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}