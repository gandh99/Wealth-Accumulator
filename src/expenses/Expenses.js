import React, { Component } from 'react'
import '../styles/expenses/expenses.css'
import AddButton from '../components/AddButton'

export class Expenses extends Component {
    render() {
        return (
            <div className='container'>
                <div className='utility-bar'>
                    <AddButton
                        text={'Add Expense'}
                    />
                </div>
                <div className='card-container'>
                    hi
                </div>
            </div>
        )
    }
}

export default Expenses
