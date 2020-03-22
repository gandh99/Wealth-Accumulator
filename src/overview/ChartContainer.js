import React from 'react'
import ChartCard from './ChartCard'
import './chart-container.css'

export default function ChartContainer(props) {
    let lineChartsForIndividualItems = []

    props.dataForEachItem.map(dataForSingleItem => {
        lineChartsForIndividualItems.push(
            <ChartCard
                title={dataForSingleItem.incomeName || dataForSingleItem.assetName || dataForSingleItem.expenseName}
                data={dataForSingleItem.data}
                chartColor={props.chartColor}
            />
        )
    })
    
    // Create chart for total items amount data (refers to the sum of all expenses, assets or incomes)
    let lineChartForTotalItemsAmount =
        (props.dataForItemsTotal.length > 0)
            ? <ChartCard
                title={`Total ${props.title}`}
                data={props.dataForItemsTotal}
                chartColor={props.chartColor}
            />
            : null

    // Decide what to render
    let renderChart =
        <div className='chart-container'>
            {lineChartForTotalItemsAmount}
            {lineChartsForIndividualItems}
        </div>
    let renderErrorMessage =
        <div className='chart-error-message'>No {props.title.toLowerCase()} to show</div>
    let renderElement =
        (lineChartForTotalItemsAmount && lineChartsForIndividualItems)
            ? renderChart
            : renderErrorMessage

    return (
        <>
            <div className='chart-container-title'>{props.title}</div>
            {renderElement}
        </>
    )
}