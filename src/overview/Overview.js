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

    // Use this to track overall wealth
    // const [totalIncomeData, setTotalIncomeData] = React.useState([])
    const [totalAssetData, setTotalAssetData] = React.useState([])
    const [totalExpenseData, setTotalExpenseData] = React.useState([])

    let dataForEachIncomeItem = []  // array of objects
    let dataForTotalIncome = [] 
    generateIncomeData(props.metadataForEachIncomeItem, props.years, dataForEachIncomeItem, dataForTotalIncome)

    const chartContainers = [
        <OverallChartContainer
            title={'Overall Wealth'}
            data={{ totalIncomeData: dataForTotalIncome, totalAssetData, totalExpenseData }}
            chartColor={style.getPropertyValue('--primary-component-color')}
            years={props.years}
        />,
        <ChartContainer
            title={'Incomes'}
            dataForEachItem={dataForEachIncomeItem}
            dataForItemsTotal={dataForTotalIncome}
            chartColor={style.getPropertyValue('--increase-text-color')}
            // generateData={
            //     (item, totalItemsAmountData) => generateIncomeData(item, totalItemsAmountData, props.years)
            // }
            // saveTotalAmountData={setTotalIncomeData}
        />,
        // <ChartContainer
        //     title={'Assets'}
        //     items={props.assets}
        //     chartColor={style.getPropertyValue('--secondary-component-color')}
        //     generateData={
        //         (item, totalItemsAmountData) => generateAssetData(item, totalItemsAmountData, props.years)
        //     }
        //     saveTotalAmountData={setTotalAssetData}
        // />,
        // <ChartContainer
        //     title={'Expenses'}
        //     items={props.expenses}
        //     chartColor={style.getPropertyValue('--tertiary-component-color')}
        //     generateData={
        //         (item, totalItemsAmountData) => generateExpenseData(item, totalItemsAmountData, props.years)
        //     }
        //     saveTotalAmountData={setTotalExpenseData}
        // />,
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
