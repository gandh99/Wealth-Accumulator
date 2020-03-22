import React from 'react'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import AddIncomeModal from './AddIncomeModal'
import CardContainer from '../components/CardContainer'
import IncomeCard from './IncomeCard'

export default function Income(props) {
    const [showModal, setShowModal] = React.useState(false)

    // For displaying the income metadata in the cards
    const [metadataForEachIncomeItem, setMetadataForEachIncomeItem] = React.useState(props.metadataForEachIncomeItem)

    // Tracks the current income metadata being edited (if any)
    const [isEditing, setIsEditing] = React.useState(false)
    const [currentEditData, setCurrentEditData] = React.useState({})

    // Function to delete an income
    const deleteWithId = (targetId) => {
        let filteredMetadataForEachIncomeItem
            = metadataForEachIncomeItem.filter(metadata => metadata.id !== targetId)
        setMetadataForEachIncomeItem(filteredMetadataForEachIncomeItem)
        props.saveToApp(filteredMetadataForEachIncomeItem)
    }

    return (
        <Container
            utilityBar={
                <UtilityBar
                    pageTitle={'Incomes'}
                    buttonGroup={
                        <ButtonGroup
                            button={
                                <AddButton
                                    text={'Income'}
                                    setShowModal={setShowModal}
                                />
                            }
                        />
                    }
                />
            }
            addEditItemModal={
                <AddIncomeModal
                    show={showModal}
                    onHide={() => {
                        setIsEditing(false)
                        setCurrentEditData({})
                        setShowModal(false)
                    }}
                    metadataForEachIncomeItem={metadataForEachIncomeItem}
                    setMetadataForEachIncomeItem={(allIncomesData) => {
                        setMetadataForEachIncomeItem(allIncomesData)
                        props.saveToApp(allIncomesData)
                    }}
                    isEditing={isEditing}
                    editData={currentEditData}  // in case the modal is opened for editing instead of adding
                />
            }
            cardContainer={
                <CardContainer
                    cards={
                        metadataForEachIncomeItem.map(income => (
                            <IncomeCard
                                income={income}
                                showModal={(data) => {
                                    setIsEditing(true)
                                    setCurrentEditData(data)
                                    setShowModal(true)
                                }}
                                deleteIncomeWithId={deleteWithId}
                            />
                        ))
                    }
                />
            }
        />
    )
}
