import React from 'react'
import '../components/card.css'
import { numberWithCommas } from '../utils/utility'

export default function IncomeCard(props) {
    const {
        incomeName,
        incomeAmount,
        incomeFrequency,
        incomePercentageChange,
    } = props.income

    const percentageStyle = (Number(incomePercentageChange) >= 0) ? 'positive' : 'negative'

    return (
        <div className='card'>
            <div className='card-title'>{incomeName}</div>
            <div className='primary-information-container'>
                <div className='currency'>$</div>
                <div className='primary-information-value'>{`${numberWithCommas(incomeAmount)}`}</div>
                <div className='supplementary-text'>{` per ${incomeFrequency}`}</div>
            </div>
            <div className='secondary-information-container'>
                <div className={percentageStyle}>
                    {incomePercentageChange >= 0 && '+'}
                    {`${incomePercentageChange}%`}
                </div>
                <div className='supplementary-text'>{` income per ${incomeFrequency}`}</div>
            </div>
        </div>
    )
}