import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'

export default function AddAssetModal(props) {
    // Asset state
    const [assetName, setAssetName] = React.useState('')
    const [assetAmount, setAssetAmount] = React.useState(0)
    const [assetContributionAmount, setAssetContributionAmount] = React.useState(0)
    const [assetContributionFrequency, setAssetContributionFrequency] = React.useState('')
    const [assetAnnualPayout, setAssetAnnualPayout] = React.useState(0)
    const [assetAnnualPayoutType, setAssetAnnualPayoutType] = React.useState('')
    const [assetAnnualPercentageChange, setAssetAnnualPercentageChange] = React.useState(0)

    const submitAssets = (e) => {
        e.preventDefault()

        // Check for errors
        if (!isValidName(assetName)
            || !isValidPositiveNumber(assetAmount)
            || !isValidPositiveNumber(assetContributionAmount)
            || !isValidOption(assetContributionFrequency)
            || !isValidPositiveNumber(assetAnnualPayout)
            || !isValidOption(assetAnnualPayoutType)
            || !isValidPercentage(assetAnnualPercentageChange)) {
            return
        }

        // Update assets in parents
        const assetData = {
            assetName,
            assetAmount,
            assetContributionAmount,
            assetContributionFrequency,
            assetAnnualPayout,
            assetAnnualPayoutType,
            assetAnnualPercentageChange,
        }
        props.setAssets([
            ...props.assets, assetData
        ])
        props.saveAssetsToApp([
            ...props.assets, assetData
        ])

        // Clear modal state
        clearModalState()

        // Close modal
        props.onHide()
    }

    const clearModalState = () => {
        setAssetName('')
        setAssetAmount(0)
        setAssetContributionAmount(0)
        setAssetContributionFrequency('')
        setAssetAnnualPayout(0)
        setAssetAnnualPayoutType('')
        setAssetAnnualPercentageChange(0)
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
                            onChange={(e) => setAssetContributionAmount(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'assetContributionFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        onRadioSelect={(frequency) => {
                            setAssetContributionFrequency(frequency)
                        }}
                    />
                    <Form.Group controlId="assetAnnualPayout">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter amount of annual payout"
                            onChange={(e) => setAssetAnnualPayout(e.target.value)}
                        />
                    </Form.Group>
                    <RadioGroup
                        id={'assetAnnualPayoutType'}
                        optionNames={['Fixed Value', '% of Asset Value']}
                        optionValues={['fixed', 'percent']}
                        onRadioSelect={(payoutType) => {
                            setAssetAnnualPayoutType(payoutType)
                        }}
                    />
                    <Form.Group controlId="assetAnnualPercentageChange">
                        <Form.Control
                            className='form-text-input'
                            type="text"
                            placeholder="Enter annual percentage change of asset value"
                            onChange={(e) => setAssetAnnualPercentageChange(e.target.value)}
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