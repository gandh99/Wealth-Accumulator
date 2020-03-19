import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

export default function ChartContainer(props) {
    let data = generateExpenseData(props.expenses)
    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            {/* <CartesianGrid strokeDasharray="0 0" /> */}
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
    )
}

function generateExpenseData(expense) {
    if (!expense || expense.length <= 0) return
    let testExpense = expense[0]
    let {
        expenseAmount, expenseFrequency, expensePercentageChange, expensePercentageChangeFrequency
    } = testExpense
    
    // Convert to number
    expenseAmount = Number(expenseAmount)
    expensePercentageChange = Number(expensePercentageChange)

    let data = []
    let years = 10  
    let currentAmount = expenseAmount
    let numOfExpensesPerYear = convertFrequencyToQuantityPerYear(expenseFrequency)
    for (let i = 0; i <= years; i++) {
        data.push({
            year: i,
            amount: currentAmount * numOfExpensesPerYear
        })
        currentAmount += currentAmount * (expensePercentageChange / 100)
    }

    return data
}

function convertFrequencyToQuantityPerYear(frequency) {
    const frequencyToQuantityPerYear = {
        month: 12,
        year: 1
    }

    return frequencyToQuantityPerYear[frequency]
}