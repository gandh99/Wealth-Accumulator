import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import RadioGroup from '../forms/RadioGroup'
import uuid from 'react-uuid'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'
import ModalHeader from '../modal/ModalHeader'
import ModalTextInput from '../modal/ModalTextInput'

export default function AddAssetModal(props) {
    // Asset state
    const [assetName, setAssetName] = React.useState(props)
    const [assetAmount, setAssetAmount] = React.useState(props)
    const [assetContributionAmount, setAssetContributionAmount] = React.useState(props)
    const [assetContributionFrequency, setAssetContributionFrequency] = React.useState(props)
    const [assetAnnualPayout, setAssetAnnualPayout] = React.useState(props)
    const [assetAnnualPayoutType, setAssetAnnualPayoutType] = React.useState(props)
    const [assetAnnualPercentageChange, setAssetAnnualPercentageChange] = React.useState(props)

    // Reference: https://learnwithparam.com/blog/how-to-pass-props-to-state-properly-in-react-hooks/
    React.useEffect(() => {
        setAssetName(props.editData.assetName)
        setAssetAmount(props.editData.assetAmount)
        setAssetContributionAmount(props.editData.assetContributionAmount)
        setAssetContributionFrequency(props.editData.assetContributionFrequency)
        setAssetAnnualPayout(props.editData.assetAnnualPayout)
        setAssetAnnualPayoutType(props.editData.assetAnnualPayoutType)
        setAssetAnnualPercentageChange(props.editData.assetAnnualPercentageChange)
    }, [props])

    const submitAssets = (e) => {
        e.preventDefault()

        // Check for errors
        if (!allInputsValid()) {
            return
        }

        // Add/modify assets
        if (props.isEditing) {
            modifyAsset()
        } else {
            addAsset()
        }

        // Clear modal state
        clearModalState()

        // Close modal
        props.onHide()
    }

    const addAsset = () => {
        props.setAllAssets([
            ...props.allAssets,
            {
                id: uuid(),
                assetName,
                assetAmount,
                assetContributionAmount,
                assetContributionFrequency,
                assetAnnualPayout,
                assetAnnualPayoutType,
                assetAnnualPercentageChange,
            }
        ])
    }

    const modifyAsset = () => {
        let assetData = props.allAssets
        for (let i = 0; i < assetData.length; i++) {
            if (assetData[i].id === props.editData.id) {
                assetData[i] = {
                    id: uuid(),
                    assetName,
                    assetAmount,
                    assetContributionAmount,
                    assetContributionFrequency,
                    assetAnnualPayout,
                    assetAnnualPayoutType,
                    assetAnnualPercentageChange,
                }
                break
            }
        }
        props.setAllAssets(assetData)
    }

    const allInputsValid = () => {
        return (isValidName(assetName)
            && isValidPositiveNumber(assetAmount)
            && isValidPositiveNumber(assetContributionAmount)
            && isValidOption(assetContributionFrequency)
            && isValidPositiveNumber(assetAnnualPayout)
            && isValidOption(assetAnnualPayoutType)
            && isValidPercentage(assetAnnualPercentageChange))
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
            <ModalHeader
                title={`${(props.isEditing) ? 'Edit' : 'Add'} Asset`}
            />
            <Form onSubmit={submitAssets}>
                <Modal.Body className='modal-body'>
                    <ModalTextInput
                        controlId={'assetName'}
                        placeholder={'Enter name of asset'}
                        defaultValue={props.editData.assetName}
                        onChange={e => setAssetName(e.target.value)}
                    />
                    <ModalTextInput
                        controlId={'assetAmount'}
                        placeholder={'Enter current asset value'}
                        defaultValue={props.editData.assetAmount}
                        onChange={e => setAssetAmount(e.target.value)}
                    />
                    <ModalTextInput
                        controlId={'assetContribution'}
                        placeholder={'Enter amount of periodic contribution'}
                        defaultValue={props.editData.assetContributionAmount}
                        onChange={e => setAssetContributionAmount(e.target.value)}
                    />
                    <RadioGroup
                        id={'assetContributionFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        defaultValue={props.editData.assetContributionFrequency}
                        hasBeenClicked={(assetContributionFrequency) ? true : false}
                        onRadioSelect={frequency => setAssetContributionFrequency(frequency)}
                    />
                    <ModalTextInput
                        controlId={'assetAnnualPayout'}
                        placeholder={'Enter amount of annual payout'}
                        defaultValue={props.editData.assetAnnualPayout}
                        onChange={e => setAssetAnnualPayout(e.target.value)}
                    />
                    <RadioGroup
                        id={'assetAnnualPayoutType'}
                        optionNames={['Fixed Value', '% of Asset Value']}
                        optionValues={['fixed', 'percent']}
                        defaultValue={props.editData.assetAnnualPayoutType}
                        hasBeenClicked={(assetAnnualPayoutType) ? true : false}
                        onRadioSelect={frequency => setAssetAnnualPayoutType(frequency)}
                    />
                    <ModalTextInput
                        controlId={'assetAnnualPercentageChange'}
                        placeholder={'Enter annual percentage change of asset value'}
                        defaultValue={props.editData.assetAnnualPercentageChange}
                        onChange={e => setAssetAnnualPercentageChange(e.target.value)}
                    />
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