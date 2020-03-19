import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { generateExpenseData } from '../expenses/expense-calculator'

export default function ChartContainer(props) {
    let lineCharts = []

    props.expenses.map(expense => {
        let expenseData = generateExpenseData(expense)
        lineCharts.push(
            <LineChart
                width={500}
                height={300}
                data={expenseData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>)
    })
    console.log(lineCharts)

    return (lineCharts) ? lineCharts : null

    // return (
    //     <LineChart
    //         width={500}
    //         height={300}
    //         data={data}
    //         margin={{
    //             top: 5, right: 30, left: 20, bottom: 5,
    //         }}
    //     >
    //         {/* <CartesianGrid strokeDasharray="0 0" /> */}
    //         <XAxis dataKey="year" />
    //         <YAxis />
    //         <Tooltip />
    //         <Legend />
    //         <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
    //         {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    //     </LineChart>
    // )
}