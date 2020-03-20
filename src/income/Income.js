import React from 'react'
import Container from '../components/Container'
import UtilityBar from '../components/UtilityBar'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import AddIncomeModal from './AddIncomeModal'
import CardContainer from '../components/CardContainer'
import IncomeCard from './IncomeCard'

export default function Income(props) {
    const [showModal, setShowModal] = React.useState(false)
    const [incomes, setIncomes] = React.useState(props.incomes)

    return (
        <Container
            utilityBar={
                <UtilityBar
                    pageTitle={'Incomes'}
                    buttonGroup={
                        <ButtonGroup
                            button={
                                <AddButton
                                    text={'Income'}
                                    setShowModal={setShowModal}
                                />
                            }
                        />
                    }
                />
            }
            modal={
                <AddIncomeModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    incomes={incomes}
                    setIncomes={setIncomes}
                    saveIncomesToApp={props.saveIncomesToApp}
                />
            }
            cardContainer={
                <CardContainer
                    cards={
                        incomes.map(income => (
                            <IncomeCard
                                income={income}
                            />
                        ))
                    }
                />
            }
        />
    )
}
