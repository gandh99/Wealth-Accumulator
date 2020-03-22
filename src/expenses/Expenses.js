import React from 'react'
import './expenses.css'
import AddButton from '../components/AddButton'
import ExpenseCard from './ExpenseCard'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import CardContainer from '../components/CardContainer'
import AddExpenseModal from './AddExpenseModal'

export default function Expenses(props) {
    const [showModal, setShowModal] = React.useState(false)

    // For displaying the expense data in the cards
    const [allExpenses, setAllExpenses] = React.useState(props.allExpenses)

    // Tracks the current expense data being edited (if any)
    const [isEditing, setIsEditing] = React.useState(false)
    const [currentEditData, setCurrentEditData] = React.useState({})

    // Function to delete an expense
    const deleteWithId = (targetId) => {
        let filteredAllExpensesData = allExpenses.filter(expense => expense.id !== targetId)
        setAllExpenses(filteredAllExpensesData)
        props.saveToApp(filteredAllExpensesData)
    }

    return (
        <Container
            utilityBar={
                <UtilityBar
                    pageTitle={'Expenses'}
                    buttonGroup={
                        <ButtonGroup
                            button={
                                <AddButton
                                    text={'Expense'}
                                    setShowModal={setShowModal}
                                />
                            }
                        />
                    }
                />
            }
            addEditItemModal={
                <AddExpenseModal
                    show={showModal}
                    onHide={() => {
                        setIsEditing(false)
                        setCurrentEditData({})
                        setShowModal(false)
                    }}
                    allExpenses={allExpenses}
                    setAllExpenses={(allExpenseData) => {
                        setAllExpenses(allExpenseData)
                        props.saveToApp(allExpenseData)
                    }}
                    isEditing={isEditing}
                    editData={currentEditData}  // in case the modal is opened for editing instead of adding
                />
            }
            cardContainer={
                <CardContainer
                    cards={
                        allExpenses.map(expense => (
                            <ExpenseCard
                                expense={expense}
                                showModal={(data) => {
                                    setIsEditing(true)
                                    setCurrentEditData(data)
                                    setShowModal(true)
                                }}
                                deleteExpenseWithId={deleteWithId}
                            />
                        ))
                    }
                />
            }
        />
    )
}