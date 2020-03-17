import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function AddExpensesModal(props) {
    const [expenseAmount, setExpenseAmount] = React.useState(0)
    const [expenseFrequency, setExpenseFrequency] = React.useState('')
    const [expensePercentageChange, setExpensePercentageChange] = React.useState(0)
    const [expensePercentageChangeFrequency, setExpensePercentageChangeFrequency] = React.useState('')

    const submitExpenses = (e) => {
        e.preventDefault()
        props.setExpenses({
            expenseAmount,
            expenseFrequency,
            expensePercentageChange,
            expensePercentageChangeFrequency
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Expense
                </Modal.Title>
            </Modal.Header>
            <Form
                onSubmit={submitExpenses}
            >
                <Modal.Body>
                    <Form.Group controlId="expenseAmount">
                        <Form.Label>Expense</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter expense"
                            onChange={(e) => setExpenseAmount(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group id="expenseFrequency">
                        <Form.Check
                            required
                            inline
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
                            type="radio"
                            label="Annual"
                            name="expenseFrequencyRadio"
                            id="annual"
                            onChange={(e) => setExpenseFrequency(e.target.id)}
                            style={radioFormStyle}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Body>
                    <Form.Group controlId="expensePercentageChange">
                        <Form.Label>Percentage Change</Form.Label>
                        <Form.Control
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
                            label="Annual"
                            name="expensePercentageChangeRadio"
                            id="annual"
                            onChange={(e) => setExpensePercentageChangeFrequency(e.target.id)}
                            style={radioFormStyle}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type='submit'
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