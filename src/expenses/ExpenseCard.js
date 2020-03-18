import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './expense-card.css'
import { numberWithCommas } from '../utils/utility'

export default function ExpenseCard(props) {
    const {
        expenseName,
        expenseAmount,
        expenseFrequency,
        expensePercentageChange,
        expensePercentageChangeFrequency
    } = props.expense

    const percentageStyle = (Number(expensePercentageChange) >= 0) ? 'positive' : 'negative'

    return (
        <div className='card'>
            <div className='card-title'>{expenseName}</div>
            <div className='expense-amount-container'>
                <div className='expense-currency'>$</div>
                <div className='expense-amount'>{`${numberWithCommas(expenseAmount)}`}</div>
                <div className='expense-frequency'>{` per ${expenseFrequency}`}</div>
            </div>
            <div className='expense-percentage-change-container'>
                <div className={'expense-percentage-change ' + percentageStyle}>
                    {expensePercentageChange >= 0 && '+'}
                    {`${expensePercentageChange}% per ${expensePercentageChangeFrequency}`}
                </div>
            </div>
        </div>
    )
}