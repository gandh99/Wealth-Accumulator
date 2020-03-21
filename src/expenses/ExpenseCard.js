import React from 'react'
import '../components/card.css'
import { numberWithCommas } from '../utils/utility'
import Edit from '../images/edit.png'
import Trash from '../images/trash.png'

export default function ExpenseCard(props) {
    const {
        expenseName,
        expenseAmount,
        expenseFrequency,
        expensePercentageChange,
    } = props.expense

    const percentageStyle = (Number(expensePercentageChange) >= 0) ? 'positive' : 'negative'

    return (
        <div className='card'>
            <div className='card-utility-bar'>
                <img src={Trash} className='delete-card' />
                <img src={Edit} className='edit-card' onClick={props.showModal} />
            </div>
            <div className='card-title'>{expenseName}</div>
            <div className='primary-information-container'>
                <div className='currency'>$</div>
                <div className='primary-information-value'>{`${numberWithCommas(expenseAmount)}`}</div>
                <div className='supplementary-text'>{` per ${expenseFrequency}`}</div>
            </div>
            <div className='secondary-information-container'>
                <div className={percentageStyle}>
                    {expensePercentageChange >= 0 && '+'}
                    {`${expensePercentageChange}%`}
                </div>
                <div className='supplementary-text'>{` expenditure per ${expenseFrequency}`}</div>
            </div>
        </div>
    )
}