import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../styles/expenses/expense-card.css'

export default function ExpenseCard(props) {
    const {
        expenseName,
        expenseAmount,
        expenseFrequency,
        expensePercentageChange,
        expensePercentageChangeFrequency
    } = props.expense

    const cardStyle = {
        maxWidth: '20rem'
    }
    
    const percentageStyle = (Number(expensePercentageChange) > 0) ? 'positive' : 'negative'

    return (
        <div className='card' style={cardStyle}>
            <div className='card-title'>{expenseName}</div>
            <div className='expense-amount-container'>
                <div className='expense-amount'>{`$${expenseAmount}`}</div>
                <div className='expense-frequency'>{` per ${expenseFrequency}`}</div>
            </div>
            <div className='expense-percentage-change-container'>
                <div className={'expense-percentage-change ' + percentageStyle}>
                    {expensePercentageChange > 0 && '+'}
                    {`${expensePercentageChange}% per ${expensePercentageChangeFrequency}`}
                </div>
            </div>
        </div>
    )
}