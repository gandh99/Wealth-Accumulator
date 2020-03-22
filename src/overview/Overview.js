import React from 'react'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import ChartContainer from './ChartContainer'
import { generateExpenseData } from '../expenses/expense-calculator'
import { generateAssetData } from '../assets/asset-calculator'
import { generateIncomeData } from '../income/income-calculator'
import OverallChartContainer from './OverallChartContainer'
import SetYearsButton from '../components/SetYearsButton'
import SetYearsModal from './SetYearsModal'

export default function Overview(props) {
    const style = getComputedStyle(document.documentElement)

    // Track number of years selected
    const [years, setYears] = React.useState(props.years)

    // Set years modal
    const [showSetYearsModal, setShowSetYearsModal] = React.useState(false)

    // Used to hold the data points for generating the charts
    let dataForEachIncomeItem = []  // array of objects
    let dataForTotalIncome = []
    let dataForEachAssetItem = []  // array of objects
    let dataForTotalAsset = []
    let dataForEachExpenseItem = []  // array of objects
    let dataForTotalExpense = []

    // Generate the data points for the charts
    generateIncomeData(props.metadataForEachIncomeItem, props.years, dataForEachIncomeItem, dataForTotalIncome)
    generateAssetData(props.metadataForEachAssetItem, props.years, dataForEachAssetItem, dataForTotalAsset)
    generateExpenseData(props.metadataForEachExpenseItem, props.years, dataForEachExpenseItem, dataForTotalExpense)

    const chartContainers = [
        <OverallChartContainer
            title={'Overall Wealth'}
            data={{ dataForTotalIncome, dataForTotalAsset, dataForTotalExpense }}
            chartColor={style.getPropertyValue('--primary-component-color')}
            years={props.years}
        />,
        <ChartContainer
            title={'Incomes'}
            dataForEachItem={dataForEachIncomeItem}
            dataForItemsTotal={dataForTotalIncome}
            chartColor={style.getPropertyValue('--increase-text-color')}
        />,
        <ChartContainer
            title={'Assets'}
            dataForEachItem={dataForEachAssetItem}
            dataForItemsTotal={dataForTotalAsset}
            chartColor={style.getPropertyValue('--secondary-component-color')}
        />,
        <ChartContainer
            title={'Expenses'}
            dataForEachItem={dataForEachExpenseItem}
            dataForItemsTotal={dataForTotalExpense}
            chartColor={style.getPropertyValue('--tertiary-component-color')}
        />,
    ]

    return (
        <Container
            utilityBar={
                <UtilityBar
                    pageTitle={'Overview'}
                    buttonGroup={
                        <ButtonGroup
                            button={
                                <SetYearsButton
                                    text={`${years} Years`}
                                    setShowSetYearsModal={setShowSetYearsModal}
                                />
                            }
                        />
                    }
                />
            }
            setYearsModal={
                <SetYearsModal
                    show={showSetYearsModal}
                    onHide={() => setShowSetYearsModal(false)}
                    years={props.years}
                    saveToOverview={setYears}
                    saveToApp={props.saveToApp}
                />
            }
            chartContainer={chartContainers}
        />
    )
}
