import React from 'react'
import Container from '../components/Container'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import UtilityBar from '../components/UtilityBar'

export default function Assets(props) {
    return (
        <Container
            utilityBar={
                <UtilityBar
                    pageTitle={'Assets'}
                    buttonGroup={
                        <ButtonGroup
                            button={
                                <AddButton
                                    text={'Asset'}
                                    // setShowModal={setShowModal}
                                />
                            }
                        />
                    }
                />
            }
            // modal={
            //     <AddExpensesModal
            //         show={showModal}
            //         onHide={() => setShowModal(false)}
            //         expenses={expenses}
            //         setExpenses={setExpenses}
            //         saveExpensesToApp={props.saveExpensesToApp}
            //     />
            // }
            // cardContainer={
            //     <CardContainer
            //         cards={
            //             expenses.map(expense => (
            //                 <ExpenseCard
            //                     expense={expense}
            //                 />
            //             ))
            //         }
            //     />
            // }
        />
    )
}
