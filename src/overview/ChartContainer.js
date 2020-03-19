import React from 'react'
import { generateExpenseData } from '../expenses/expense-calculator'
import ChartCard from './ChartCard'
import './chart-container.css'

export default function ChartContainer(props) {
    let lineCharts = []
    let totalExpenseData = []

    // Generate expense data for each and every individual expense
    props.expenses.map(expense => {
        let expenseData = generateExpenseData(expense, totalExpenseData)
        lineCharts.push(
            <ChartCard
                data={expenseData}
            />
        )
    })

    return (
        <div className='chart-container'>
            {lineCharts}
        </div>
    )
}