import React from 'react'
import ChartCard from './ChartCard'
import './chart-container.css'

export default function ChartContainer(props) {
    let lineChartsForIndividualItems = []
    let totalItemsAmountData = []

    // Generate item data and chart for each and every individual item (expenses, assets or incomes)
    props.items.map(item => {
        let itemData = props.generateData(item, totalItemsAmountData)
        lineChartsForIndividualItems.push(
            <ChartCard
                title={item.expenseName || item.assetName} //TODO
                data={itemData}
            />
        )
    })

    // Create chart for total items amount data (refers to the sum of all expenses, assets or incomes)
    let lineChartForTotalItemsAmount =
        (totalItemsAmountData.length > 0)
            ? <ChartCard
                title={`Total ${props.title}`}
                data={totalItemsAmountData}
            />
            : null

    return (
        <>
            <div className='chart-container-title'>{props.title}</div>
            <div className='chart-container'>
                {lineChartForTotalItemsAmount}
                {lineChartsForIndividualItems}
            </div>
        </>
    )
}