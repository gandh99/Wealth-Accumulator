import React from 'react'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import ChartContainer from './ChartContainer'
import { generateExpenseData } from '../expenses/expense-calculator'
import { generateAssetData } from '../assets/asset-calculator'

export default function Overview(props) {
    const chartContainers = [
        <ChartContainer
            title={'Assets'}
            items={props.assets}
            generateData={generateAssetData}
        />,
        <ChartContainer
            title={'Expenses'}
            items={props.expenses}
            generateData={generateExpenseData}
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
