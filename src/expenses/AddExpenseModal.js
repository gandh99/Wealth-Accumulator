import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'
import uuid from 'react-uuid'
import ModalHeader from '../modal/ModalHeader'

export default function AddExpenseModal(props) {
    // Expenses state
    const [expenseName, setExpenseName] = React.useState(props)
    const [expenseAmount, setExpenseAmount] = React.useState(props)
    const [expenseFrequency, setExpenseFrequency] = React.useState(props)
    const [expensePercentageChange, setExpensePercentageChange] = React.useState(props)
  
    // Reference: https://learnwithparam.com/blog/how-to-pass-props-to-state-properly-in-react-hooks/
    React.useEffect(() => {
        setExpenseName(props.editData.expenseName)
        setExpenseAmount(props.editData.expenseAmount)
        setExpenseFrequency(props.editData.expenseFrequency)
        setExpensePercentageChange(props.editData.expensePercentageChange)
    }, [props]);

    const submitExpenses = (e) => {
        e.preventDefault()
        
        // Check for errors
        if (!allInputsValid()) {
            return
        }

        // Add/modify expenses
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
        props.setAllExpenses([
            ...props.allExpenses,
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
        let expenseData = props.allExpenses
        for (let i = 0; i < expenseData.length; i++) {
            if (expenseData[i].id === props.editData.id) {
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
        props.setAllExpenses(expenseData)
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
            {/* <Modal.Header className='modal-header'>
                <Modal.Title id="contained-modal-title-vcenter" className='modal-title'>
                    {(props.isEditing) ? 'Edit' : 'Add'} Expense
                </Modal.Title>
            </Modal.Header> */}
            <ModalHeader 
                title={`${(props.isEditing) ? 'Edit' : 'Add'} Expense`}
            />
            <Form onSubmit={submitExpenses}>
                <Modal.Body className='modal-body'>
                    <Form.Group controlId="expenseName">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter name of expense"
                            defaultValue={props.editData.expenseName}
                            onChange={(e) => setExpenseName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="expenseAmount">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter expense amount"
                            defaultValue={props.editData.expenseAmount}
                            onChange={(e) => setExpenseAmount(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'expenseFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        defaultValue={props.editData.expenseFrequency}
                        hasBeenClicked={(expenseFrequency) ? true : false}
                        onRadioSelect={frequency => setExpenseFrequency(frequency)}
                    />
                    <Form.Group controlId="expensePercentageChange">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter percentage change"
                            defaultValue={props.editData.expensePercentageChange}
                            onChange={(e) => setExpensePercentageChange(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button type='submit' className='modal-button'>
                        {(props.isEditing) ? 'Edit' : 'Add'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}