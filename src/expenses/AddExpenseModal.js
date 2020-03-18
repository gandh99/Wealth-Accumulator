import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'

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
                    <Form.Group id="expenseFrequency">
                        <div class='radio-group-container'>
                            <label class="radio-button-container">
                                <input type="radio" checked="checked" name="radio" />
                                <span class='radio-button-text'>Monthly</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-button-container">
                                <input type="radio" checked="checked" name="radio" />
                                <span class='radio-button-text'>Yearly</span>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        {/* <Form.Check
                            required
                            inline
                            className='form-radio-input'
                            type="radio"
                            label="Monthly"
                            name="expenseFrequencyRadio"
                            id="month"
                            onChange={(e) => setExpenseFrequency(e.target.id)}
                            style={radioFormStyle}
                        />
                        <Form.Check
                            required
                            inline
                            className='form-radio-input'
                            type="radio"
                            label="Yearly"
                            name="expenseFrequencyRadio"
                            id="year"
                            onChange={(e) => setExpenseFrequency(e.target.id)}
                            style={radioFormStyle}
                        /> */}
                    </Form.Group>
                    <Form.Group controlId="expensePercentageChange">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter percentage change"
                            onChange={(e) => setExpensePercentageChange(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group id="expensePercentageChangeFrequency">
                        <Form.Check
                            required
                            inline
                            type="radio"
                            label="Monthly"
                            name="expensePercentageChangeRadio"
                            id="month"
                            onChange={(e) => setExpensePercentageChangeFrequency(e.target.id)}
                            style={radioFormStyle}
                        />
                        <Form.Check
                            required
                            inline
                            type="radio"
                            label="Yearly"
                            name="expensePercentageChangeRadio"
                            id="year"
                            onChange={(e) => setExpensePercentageChangeFrequency(e.target.id)}
                            style={radioFormStyle}
                        />
                    </Form.Group>
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