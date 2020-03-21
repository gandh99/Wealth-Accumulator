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

    // For displaying the income data in the cards
    const [allIncomes, setAllIncomes] = React.useState(props.allIncomes)

    // Tracks the current income data being edited (if any)
    const [isEditing, setIsEditing] = React.useState(false)
    const [currentEditData, setCurrentEditData] = React.useState({})

    // Function to delete an income
    const deleteWithId = (targetId) => {
        let filteredAllIncomesData = allIncomes.filter(income => income.id !== targetId)
        setAllIncomes(filteredAllIncomesData)
        props.saveToApp(filteredAllIncomesData)
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
            modal={
                <AddIncomeModal
                    show={showModal}
                    onHide={() => {
                        setIsEditing(false)
                        setCurrentEditData({})
                        setShowModal(false)
                    }}
                    allIncomes={allIncomes}
                    setAllIncomes={(allIncomesData) => {
                        setAllIncomes(allIncomesData)
                        props.saveToApp(allIncomesData)
                    }}
                    isEditing={isEditing}
                    editData={currentEditData}  // in case the modal is opened for editing instead of adding
                />
            }
            cardContainer={
                <CardContainer
                    cards={
                        allIncomes.map(income => (
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
