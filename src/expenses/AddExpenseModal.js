import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'
import uuid from 'react-uuid'
import ModalHeader from '../modal/ModalHeader'
import ModalTextInput from '../modal/ModalTextInput'

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
    }, [props])

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
            <ModalHeader
                title={`${(props.isEditing) ? 'Edit' : 'Add'} Expense`}
            />
            <Form onSubmit={submitExpenses}>
                <Modal.Body className='modal-body'>
                    <ModalTextInput
                        controlId={'expenseName'}
                        placeholder={'Enter name of expense'}
                        defaultValue={props.editData.expenseName}
                        onChange={e => setExpenseName(e.target.value)}
                    />
                    <ModalTextInput
                        controlId={'expenseAmount'}
                        placeholder={'Enter expense amount'}
                        defaultValue={props.editData.expenseAmount}
                        onChange={e => setExpenseAmount(e.target.value)}
                    />
                    <RadioGroup
                        id={'expenseFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        defaultValue={props.editData.expenseFrequency}
                        hasBeenClicked={(expenseFrequency) ? true : false}
                        onRadioSelect={frequency => setExpenseFrequency(frequency)}
                    />
                    <ModalTextInput
                        controlId={'expensePercentageChange'}
                        placeholder={'Enter percentage change'}
                        defaultValue={props.editData.expensePercentageChange}
                        onChange={e => setExpensePercentageChange(e.target.value)}
                    />
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