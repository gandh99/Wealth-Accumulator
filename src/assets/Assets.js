import React from 'react'
import Container from '../components/Container'
import ButtonGroup from '../components/ButtonGroup'
import AddButton from '../components/AddButton'
import UtilityBar from '../components/UtilityBar'
import AddAssetModal from './AddAssetModal'
import AssetCard from './AssetCard'
import CardContainer from '../components/CardContainer'

export default function Assets(props) {
    const [showModal, setShowModal] = React.useState(false)

    // For displaying the expense data in the cards
    const [allAssets, setAllAssets] = React.useState(props.allAssets)

    // Tracks the current expense data being edited (if any)
    const [isEditing, setIsEditing] = React.useState(false)
    const [currentEditData, setCurrentEditData] = React.useState({})

    // Function to delete an asset
    const deleteWithId = (targetId) => {
        let filteredAllAssetsData = allAssets.filter(asset => asset.id !== targetId)
        setAllAssets(filteredAllAssetsData)
        props.saveToApp(filteredAllAssetsData)
    }

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
            addEditItemModal={
                <AddAssetModal
                    show={showModal}
                    onHide={() => {
                        setIsEditing(false)
                        setCurrentEditData({})
                        setShowModal(false)
                    }}
                    allAssets={allAssets}
                    setAllAssets={(allAssetData) => {
                        setAllAssets(allAssetData)
                        props.saveToApp(allAssetData)
                    }}
                    isEditing={isEditing}
                    editData={currentEditData}  // in case the modal is opened for editing instead of adding
                />
            }
            cardContainer={
                <CardContainer
                    cards={
                        allAssets.map(asset => (
                            <AssetCard
                                asset={asset}
                                showModal={(data) => {
                                    setIsEditing(true)
                                    setCurrentEditData(data)
                                    setShowModal(true)
                                }}
                                deleteAssetWithId={deleteWithId}
                            />
                        ))
                    }
                />
            }
        />
    )
}
