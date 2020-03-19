import React from 'react'
import Container from '../components/Container'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import UtilityBar from '../components/UtilityBar'
import AddAssetModal from './AddAssetModal'

export default function Assets(props) {
    const [showModal, setShowModal] = React.useState(false)
    const [assets, setAssets] = React.useState(props.assets)

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
                                    setShowModal={setShowModal}
                                />
                            }
                        />
                    }
                />
            }
            modal={
                <AddAssetModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    assets={assets}
                    setAssets={setAssets}
                    saveAssetsToApp={props.saveAssetsToApp}
                />
            }
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
