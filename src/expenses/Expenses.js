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
    const [expenses, setExpenses] = React.useState(props.expenses)

    // Tracks the current expense data being edited (if any)
    const [currentEditData, setCurrentEditData] = React.useState({})

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
            modal={
                <AddExpenseModal
                    show={showModal}
                    onHide={() => {
                        setCurrentEditData({})
                        setShowModal(false)
                    }}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    saveExpensesToApp={props.saveExpensesToApp}
                    data={currentEditData}
                />
            }
            cardContainer={
                <CardContainer
                    cards={
                        expenses.map(expense => (
                            <ExpenseCard
                                expense={expense}
                                showModal={(data) => {
                                    setCurrentEditData(data)
                                    setShowModal(true)
                                }}
                            />
                        ))
                    }
                />
            }
        />
    )
}
