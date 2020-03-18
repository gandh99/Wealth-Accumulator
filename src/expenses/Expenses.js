import React from 'react'
import '../styles/expenses/expenses.css'
import AddButton from '../components/AddButton'
import AddExpenseModal from './AddExpenseModal'
import ExpenseCard from './ExpenseCard'
import { CardDeck } from 'react-bootstrap'

export default function Expenses() {
    const [showModal, setShowModal] = React.useState(false)
    const [expenses, setExpenses] = React.useState([])

    return (
        <div className='container'>
            <div className='utility-bar'>
                <div className='page-title'>
                    Expenses
                </div>
                <AddButton
                    text={'+ Expense'}
                    setShowModal={setShowModal}
                />
            </div>
            <div className='card-container'>
                <AddExpenseModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    expenses={expenses}
                    setExpenses={setExpenses}
                />
                <div className='card-deck'>
                    {expenses.map(expense => (
                        <ExpenseCard
                            expense={expense}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
