import React from 'react'
import '../styles/expenses/expenses.css'
import AddButton from '../components/AddButton'
import AddExpenseModal from './AddExpenseModal'

export default function Expenses() {
    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className='container'>
            <div className='utility-bar'>
                <AddButton
                    text={'Add Expense'}
                    setShowModal={setShowModal}
                />
            </div>
            <div className='card-container'>
                <AddExpenseModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                />
            </div>
        </div>
    )
}
