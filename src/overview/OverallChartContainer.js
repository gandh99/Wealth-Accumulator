import React from 'react'
import ChartCard from './ChartCard'
import './chart-container.css'
import { generateOverallWealthData } from './overall-wealth-calculator'

export default function OverallChartContainer(props) {
    // Generate item data and chart for total wealth (sum of income, asset and expense data)
    const { totalIncomeData, totalAssetData, totalExpenseData } = props.data
    let totalItemsAmountData = generateOverallWealthData(totalIncomeData, totalAssetData, totalExpenseData)

    // Create chart for total items amount data (refers to the incomes + assets - expenses)
    let lineChartForTotalItemsAmount =
        (totalItemsAmountData.length > 0)
            ? <ChartCard
                title={`Total ${props.title}`}
                data={totalItemsAmountData}
                chartColor={props.chartColor}
            />
            : null

    // Decide what to render
    let renderChart =
        <div className='chart-container'>
            {lineChartForTotalItemsAmount}
        </div>
    let renderErrorMessage =
        <div className='chart-error-message'>Nothing to show</div>
    let renderElement =
        (lineChartForTotalItemsAmount)
            ? renderChart
            : renderErrorMessage

    return (
        <>
            <div className='chart-container-title'>{props.title}</div>
            {renderElement}
        </>
    )
}