import React from 'react'
import { generateExpenseData } from '../expenses/expense-calculator'
import ChartCard from './ChartCard'
import './chart-container.css'

export default function ChartContainer(props) {
    let lineChartsForIndividualExpenses = []
    let totalExpenseData = []

    // Generate expense data for each and every individual expense
    props.expenses.map(expense => {
        let expenseData = generateExpenseData(expense, totalExpenseData)
        lineChartsForIndividualExpenses.push(
            <ChartCard
                title={expense.expenseName}
                data={expenseData}
            />
        )
    })

    // Create chart for total expense data
    let lineChartForTotalExpenses =
        (totalExpenseData.length > 0)
            ? <ChartCard
                title={`Total ${props.title}`}
                data={totalExpenseData}
            />
            : null

    return (
        <>
            <div className='chart-container-title'>{props.title}</div>
            <div className='chart-container'>
                {lineChartForTotalExpenses}
                {lineChartsForIndividualExpenses}
            </div>
        </>
    )
}