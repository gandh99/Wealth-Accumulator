import React from 'react'
import ChartCard from './ChartCard'
import './chart-container.css'
import { generateOverallWealthData } from './overall-wealth-calculator'

export default function OverallChartContainer(props) {
    // Create chart for total items amount data (refers to the incomes + assets - expenses)
    let lineChartForTotalItemsAmount =
        (props.dataForOverallWealth.length > 0)
            ? <ChartCard
                title={props.title}
                data={props.dataForOverallWealth}
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