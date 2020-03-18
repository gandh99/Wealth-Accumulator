import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'

export default function AddExpensesModal(props) {
    const [expenseName, setExpenseName] = React.useState('')
    const [expenseAmount, setExpenseAmount] = React.useState(0)
    const [expenseFrequency, setExpenseFrequency] = React.useState('')
    const [expensePercentageChange, setExpensePercentageChange] = React.useState(0)
    const [expensePercentageChangeFrequency, setExpensePercentageChangeFrequency] = React.useState('')

    const submitExpenses = (e) => {
        e.preventDefault()
        const expensesData = {
            expenseName,
            expenseAmount,
            expenseFrequency,
            expensePercentageChange,
            expensePercentageChangeFrequency
        }
        props.setExpenses([
            ...props.expenses, expensesData
        ])
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal'
        >
            <Modal.Header
                // closeButton
                className='modal-header'
            >
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className='modal-title'
                >
                    Add Expense
                </Modal.Title>
            </Modal.Header>
            <Form
                onSubmit={submitExpenses}
            >
                <Modal.Body
                    className='modal-body'
                >
                    <Form.Group controlId="expenseName">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter name of expense"
                            onChange={(e) => setExpenseName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="expenseAmount">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter expense amount"
                            onChange={(e) => setExpenseAmount(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'expenseFrequency'}
                        options={['Monthly', 'Yearly']}
                    />
                    <Form.Group controlId="expensePercentageChange">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter percentage change"
                            onChange={(e) => setExpensePercentageChange(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'expensePercentageChangeFrequency'}
                        options={['Monthly', 'Yearly']}
                    />
                </Modal.Body>
                <Modal.Footer
                    className='modal-footer'
                >
                    <Button
                        type='submit'
                        onClick={props.onHide}
                        className='modal-button'
                    >
                        Add
                </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

const radioFormStyle = {
    marginRight: '1rem',
    marginLeft: '0.5rem',
}