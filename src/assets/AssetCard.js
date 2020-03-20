import React from 'react'
import './asset-card.css'
import { numberWithCommas } from '../utils/utility'

export default function AssetCard(props) {
    const {
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
            <div className='card-title'>{assetName}</div>
            <div className='primary-information-container'>
                <div className='asset-currency'>$</div>
                <div className='asset-amount'>{`${numberWithCommas(assetAmount)}`}</div>
            </div>
            <div className='secondary-information-container asset-contribution-container'>
                <div className='asset-currency'>+$</div>
                <div className='asset-contribution-amount'>
                    {`${numberWithCommas(assetContributionAmount)}`}
                </div>
                <div className='asset-contribution-frequency'>{` per ${assetContributionFrequency}`}</div>
            </div>
            <div className='secondary-information-container asset-annual-payout-container'>
                <div className='asset-annual-payout-amount'>
                    {`+${formatAnnualPayoutText(assetAnnualPayout, assetAnnualPayoutType)}`}
                </div>
                <div className='asset-annual-payout-type'>{` annual payout`}</div>
            </div>
            <div className='secondary-information-container'>
                <div className={'asset-annual-percentage-change ' + percentageStyle}>
                    {assetAnnualPercentageChange >= 0 && '+'}
                    {`${assetAnnualPercentageChange}% asset value per year`}
                </div>
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