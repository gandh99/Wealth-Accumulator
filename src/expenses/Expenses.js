import React from 'react'
import './expenses.css'
import AddButton from '../components/AddButton'
import AddExpenseModal from './AddExpenseModal'
import ExpenseCard from './ExpenseCard'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import CardContainer from '../components/CardContainer'
import AddExpensesModal from './AddExpenseModal'

export default function Expenses(props) {
    const [showModal, setShowModal] = React.useState(false)
    const [expenses, setExpenses] = React.useState(props.expenses)

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
                <AddExpensesModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    saveExpensesToApp={props.saveExpensesToApp}
                />
            }
            cardContainer={
                <CardContainer
                    cards={
                        expenses.map(expense => (
                            <ExpenseCard
                                expense={expense}
                            />
                        ))
                    }
                />
            }
        />
    )
}
