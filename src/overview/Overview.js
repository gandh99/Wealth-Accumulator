import React from 'react'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import ChartContainer from './ChartContainer'

export default function Overview(props) {
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
            chartContainer={
                <ChartContainer
                    title={'Expenses'} 
                    expenses={props.expenses}
                />
            }
        />
    )
}
