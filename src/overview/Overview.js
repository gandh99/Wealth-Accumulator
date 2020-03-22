import React from 'react'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
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
    const [totalIncomeData, setTotalIncomeData] = React.useState([])
    const [totalAssetData, setTotalAssetData] = React.useState([])
    const [totalExpenseData, setTotalExpenseData] = React.useState([])
   
    const chartContainers = [
        <OverallChartContainer 
            title={'Overall Wealth'}
            data={{totalIncomeData, totalAssetData, totalExpenseData}}
            chartColor={style.getPropertyValue('--primary-component-color')}
        />,
        <ChartContainer
            title={'Incomes'}
            items={props.incomes}
            chartColor={style.getPropertyValue('--increase-text-color')}
            generateData={generateIncomeData}
            saveTotalAmountData={setTotalIncomeData}
        />,
        <ChartContainer
            title={'Assets'}
            items={props.assets}
            chartColor={style.getPropertyValue('--secondary-component-color')}
            generateData={generateAssetData}
            saveTotalAmountData={setTotalAssetData}
        />,
        <ChartContainer
            title={'Expenses'}
            items={props.expenses}
            chartColor={style.getPropertyValue('--tertiary-component-color')}
            generateData={generateExpenseData}
            saveTotalAmountData={setTotalExpenseData}
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
