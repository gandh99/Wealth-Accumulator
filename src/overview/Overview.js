import React from 'react'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import ChartContainer from './ChartContainer'
import { generateExpenseData } from '../expenses/expense-calculator'
import { generateAssetData } from '../assets/asset-calculator'
import { generateIncomeData } from '../income/income-calculator'

export default function Overview(props) {
    const style = getComputedStyle(document.documentElement)

    // Use this to track overall wealth
    const [totalIncomeData, setTotalIncomeData] = React.useState([])
    const [totalAssetData, setTotalAssetData] = React.useState([])
    const [totalExpenseData, setTotalExpenseData] = React.useState([])
   
    const chartContainers = [
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
                                <AddButton
                                    text={'Overview'}
                                    setShowModal={null}
                                />
                            }
                        />
                    }
                />
            }
            chartContainer={chartContainers}
        />
    )
}
