import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'
import uuid from 'react-uuid'

export default function AddExpenseModal(props) {
    // Expenses state
    const [expenseName, setExpenseName] = React.useState('')
    const [expenseAmount, setExpenseAmount] = React.useState(0)
    const [expenseFrequency, setExpenseFrequency] = React.useState('')
    const [expensePercentageChange, setExpensePercentageChange] = React.useState(0)

    // React.useEffect(() => {
    //     setExpenseName(props.data.expenseName)
    // })

    const submitExpenses = (e) => {
        e.preventDefault()

        // Check for errors
        if (!allInputsValid()) {
            return
        }

        // Add expenses
        if (props.isEditing) {
            modifyExpense()
        } else {
            addExpense()
        }

        // Clear modal state
        clearModalState()

        // Close modal
        props.onHide()
    }

    const addExpense = () => {
        props.setExpenses([
            ...props.expenses,
            {
                id: uuid(),
                expenseName,
                expenseAmount,
                expenseFrequency,
                expensePercentageChange,
            }
        ])
    }

    const modifyExpense = () => {
        let expenseData = props.expenses
        for (let i = 0; i < expenseData.length; i++) {
            if (expenseData[i].id === props.data.id) {
                expenseData[i] = {
                    id: uuid(),
                    expenseName,
                    expenseAmount,
                    expenseFrequency,
                    expensePercentageChange,
                }
                break
            }
        }
        props.setExpenses(expenseData)
    }

    const allInputsValid = () => {
        return (isValidName(expenseName)
            && isValidPositiveNumber(expenseAmount)
            && isValidPercentage(expensePercentageChange)
            && isValidOption(expenseFrequency))
    }

    const clearModalState = () => {
        setExpenseName('')
        setExpenseAmount(0)
        setExpenseFrequency('')
        setExpensePercentageChange(0)
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
                    Add Expense
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={submitExpenses}>
                <Modal.Body className='modal-body'>
                    <Form.Group controlId="expenseName">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter name of expense"
                            // value={expenseName}
                            // onChange={(e) => {
                            //     console.log(e.target.value)
                            //     setExpenseName(e.target.value)
                            // }}
                            onChange={(e) => setExpenseName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="expenseAmount">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter expense amount"
                            // value={props.data.expenseAmount}
                            onChange={(e) => setExpenseAmount(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'expenseFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        value={props.data.expenseFrequency}
                        selected={expenseFrequency}
                        onRadioSelect={frequency => setExpenseFrequency(frequency)}
                    />
                    <Form.Group controlId="expensePercentageChange">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter percentage change"
                            // value={props.data.expensePercentageChange}
                            onChange={(e) => setExpensePercentageChange(e.target.value)}
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