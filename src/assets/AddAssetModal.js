import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'

export default function AddAssetModal(props) {
    // Expenses state
    const [assetName, setAssetName] = React.useState('')
    const [assetAmount, setAssetAmount] = React.useState(0)
    const [expenseFrequency, setExpenseFrequency] = React.useState('')
    const [expensePercentageChange, setExpensePercentageChange] = React.useState(0)

    const submitAssets = (e) => {
        e.preventDefault()

        // Check for errors
        if (!isValidName(assetName)
            || !isValidPositiveNumber(assetAmount)
            || !isValidPercentage(expensePercentageChange)
            || !isValidOption(expenseFrequency)) {
            return
        }

        // Update expenses in parents
        const expensesData = {
            expenseName: assetName,
            expenseAmount: assetAmount,
            expenseFrequency,
            expensePercentageChange,
        }
        props.setAssets([
            ...props.assets, expensesData
        ])
        props.saveAssetsToApp([
            ...props.assets, expensesData
        ])

        // Clear modal state
        clearModalState()

        // Close modal
        props.onHide()
    }

    const clearModalState = () => {
        setAssetName('')
        setAssetAmount(0)
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
                    Add Asset
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={submitAssets}>
                <Modal.Body className='modal-body'>
                    <Form.Group controlId="assetName">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter name of asset"
                            onChange={(e) => setAssetName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="assetAmount">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter current asset value"
                            onChange={(e) => setAssetAmount(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="assetContribution">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter amount of periodic contribution"
                            onChange={(e) => setAssetAmount(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'assetContributionFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        onRadioSelect={(frequency) => {
                            // This radio group will set the frequency for both expense amount and % change
                            setExpenseFrequency(frequency)
                        }}
                    />
                    <Form.Group controlId="assetPayout">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter amount of annual yield"
                            onChange={(e) => setAssetAmount(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'assetAnnualYield'}
                        optionNames={['Fixed Value', '% of Asset Value']}
                        optionValues={['fixed', 'percent']}
                        onRadioSelect={(frequency) => {
                            // This radio group will set the frequency for both expense amount and % change
                            setExpenseFrequency(frequency)
                        }}
                    />
                    <Form.Group controlId="expensePercentageChange">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter annual percentage change of asset value"
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