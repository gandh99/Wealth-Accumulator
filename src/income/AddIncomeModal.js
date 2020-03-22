import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import '../components/modal.css'
import '../forms/form.css'
import uuid from 'react-uuid'
import RadioGroup from '../forms/RadioGroup'
import { isValidName, isValidPositiveNumber, isValidPercentage, isValidOption } from '../forms/input-validation'
import ModalTextInput from '../modal/ModalTextInput'
import ModalHeader from '../modal/ModalHeader'

export default function AddIncomeModal(props) {
    // Incomes state
    const [incomeName, setIncomeName] = React.useState(props)
    const [incomeAmount, setIncomeAmount] = React.useState(props)
    const [incomeFrequency, setIncomeFrequency] = React.useState(props)
    const [incomePercentageChange, setIncomePercentageChange] = React.useState(props)

    // Reference: https://learnwithparam.com/blog/how-to-pass-props-to-state-properly-in-react-hooks/
    React.useEffect(() => {
        setIncomeName(props.editData.incomeName)
        setIncomeAmount(props.editData.incomeAmount)
        setIncomeFrequency(props.editData.incomeFrequency)
        setIncomePercentageChange(props.editData.incomePercentageChange)
    }, [props])

    const submitIncomes = (e) => {
        e.preventDefault()

        // Check for errors
        if (!allInputsValid()) {
            return
        }

        // Add/modify incomes
        if (props.isEditing) {
            modifyIncome()
        } else {
            addIncome()
        }

        // Clear modal state
        clearModalState()

        // Close modal
        props.onHide()
    }

    const addIncome = () => {
        props.setMetadataForEachIncomeItem([
            ...props.metadataForEachIncomeItem,
            {
                id: uuid(),
                incomeName,
                incomeAmount,
                incomeFrequency,
                incomePercentageChange,
            }
        ])
    }

    const modifyIncome = () => {
        let incomeData = props.metadataForEachIncomeItem
        for (let i = 0; i < incomeData.length; i++) {
            if (incomeData[i].id === props.editData.id) {
                incomeData[i] = {
                    id: uuid(),
                    incomeName,
                    incomeAmount,
                    incomeFrequency,
                    incomePercentageChange,
                }
                break
            }
        }
        props.setMetadataForEachIncomeItem(incomeData)
    }

    const allInputsValid = () => {
        return (isValidName(incomeName)
            && isValidPositiveNumber(incomeAmount)
            && isValidPercentage(incomePercentageChange)
            && isValidOption(incomeFrequency))
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
            <ModalHeader
                title={`${(props.isEditing) ? 'Edit' : 'Add'} Income`}
            />
            <Form onSubmit={submitIncomes}>
                <Modal.Body className='modal-body'>
                    <ModalTextInput
                        controlId={'incomeName'}
                        placeholder={'Enter name of income'}
                        defaultValue={props.editData.incomeName}
                        onChange={e => setIncomeName(e.target.value)}
                    />
                    <ModalTextInput
                        controlId={'incomeAmount'}
                        placeholder={'Enter income amount'}
                        defaultValue={props.editData.incomeAmount}
                        onChange={e => setIncomeAmount(e.target.value)}
                    />
                    <RadioGroup
                        id={'incomeFrequency'}
                        optionNames={['Monthly', 'Yearly']}
                        optionValues={['month', 'year']}
                        defaultValue={props.editData.incomeFrequency}
                        hasBeenClicked={(incomeFrequency) ? true : false}
                        onRadioSelect={frequency => setIncomeFrequency(frequency)}
                    />
                    <ModalTextInput
                        controlId={'incomePercentageChange'}
                        placeholder={'Enter percentage change'}
                        defaultValue={props.editData.incomePercentageChange}
                        onChange={e => setIncomePercentageChange(e.target.value)}
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