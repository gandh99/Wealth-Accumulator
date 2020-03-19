import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { generateExpenseData } from '../expenses/expense-calculator'
import ChartCard from './ChartCard'
import './chart-container.css'

export default function ChartContainer(props) {
    let lineCharts = []

    props.expenses.map(expense => {
        let expenseData = generateExpenseData(expense)
        lineCharts.push(
            <ChartCard
                data={expenseData}
            />
        )
    })

    // return (lineCharts) ? lineCharts : null

    return (
        <div className='chart-container'>
            {lineCharts}
        </div>
    )
}