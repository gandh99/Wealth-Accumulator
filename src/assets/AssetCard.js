import React from 'react'
import './asset-card.css'
import { numberWithCommas } from '../utils/utility'
import Edit from '../images/edit.png'
import Trash from '../images/trash.png'

export default function AssetCard(props) {
    const {
        id,
        assetName,
        assetAmount,
        assetContributionAmount,
        assetContributionFrequency,
        assetAnnualPayout,
        assetAnnualPayoutType,
        assetAnnualPercentageChange
    } = props.asset

    const percentageStyle = (Number(assetAnnualPercentageChange) >= 0) ? 'positive' : 'negative'

    return (
        <div className='card'>
            <div className='card-utility-bar'>
                <img src={Trash} className='delete-card' onClick={() => props.deleteAssetWithId(id)} />
                <img src={Edit} className='edit-card' onClick={() => props.showModal(props.asset)} />
            </div>
            <div className='card-title'>{assetName}</div>
            <div className='primary-information-container'>
                <div className='currency'>$</div>
                <div className='primary-information-value'>{`${numberWithCommas(assetAmount)}`}</div>
            </div>
            <div className='secondary-information-container asset-contribution-container'>
                <div className='asset-currency'>+$</div>
                <div className='asset-contribution-amount'>
                    {`${numberWithCommas(assetContributionAmount)}`}
                </div>
                <div className='supplementary-text'>{` contribution per ${assetContributionFrequency}`}</div>
            </div>
            <div className='secondary-information-container asset-annual-payout-container'>
                <div className='asset-annual-payout-amount'>
                    {`+${formatAnnualPayoutText(assetAnnualPayout, assetAnnualPayoutType)}`}
                </div>
                <div className='supplementary-text'>{` annual payout`}</div>
            </div>
            <div className='secondary-information-container'>
                <div className={'asset-annual-percentage-change ' + percentageStyle}>
                    {assetAnnualPercentageChange >= 0 && '+'}
                    {`${assetAnnualPercentageChange}%`}
                </div>
                <div className='supplementary-text'>{` asset value per year`}</div>
            </div>
        </div>
    )
}

function formatAnnualPayoutText(assetAnnualPayout, assetAnnualPayoutType) {
    if (assetAnnualPayoutType === 'fixed') {
        return `$${numberWithCommas(assetAnnualPayout)}`
    } else if (assetAnnualPayoutType === 'percent') {
        return `${numberWithCommas(assetAnnualPayout)}%`
    }
}