import { convertFrequencyToQuantityPerYear } from "../utils/utility"

/* 
Input for variable asset: 
[{ 
    assetAmount: ...,
    assetContributionAmount: ...,
    assetContributionFrequency: ...,
    assetAnnualPayout: ...,
    assetAnnualPayoutType: ...,
    assetAnnualPercentageChange: ...,
    assetName: (not used)
}, {...}, {...}, ...]

Output for assetData:
[{
    year: ...,
    amount: ...
}, {...}, {...}, ...]
*/
export function generateAssetData(metadataForEachAssetItem, years, dataForEachAssetItem, dataForTotalAsset) {
    metadataForEachAssetItem.map(metadataForSingleAssetItem => (
        generateDataForSingleAssetItem(
            metadataForSingleAssetItem,
            years,
            dataForEachAssetItem,
            dataForTotalAsset
        )
    ))
}

function generateDataForSingleAssetItem(
    metadataForSingleAssetItem,
    years,
    dataForEachAssetItem,
    dataForTotalAsset
) {
    let {
        assetName,
        assetAmount,
        assetContributionAmount,
        assetContributionFrequency,
        assetAnnualPayout,
        assetAnnualPayoutType,
        assetAnnualPercentageChange
    } = metadataForSingleAssetItem

    // Convert to number
    assetAmount = Number(assetAmount)
    assetContributionAmount = Number(assetContributionAmount)
    assetAnnualPayout = Number(assetAnnualPayout)
    assetAnnualPercentageChange = Number(assetAnnualPercentageChange)

    let assetData = []
    let contributionFrequency = convertFrequencyToQuantityPerYear(assetContributionFrequency)
    let cumulativeAmount = assetAmount

    // Initialise total asset
    if (dataForTotalAsset.length <= 0) {
        initTotalAsset(dataForTotalAsset, years)
    }

    for (let i = 0; i < years; i++) {
        // Compute the new cumulative amount for the current year
        let contributionAmount = assetContributionAmount * contributionFrequency
        let payoutAmount = calculatePayoutAmount(assetAnnualPayout, assetAnnualPayoutType, cumulativeAmount)
        cumulativeAmount += contributionAmount + payoutAmount
        cumulativeAmount += (assetAnnualPercentageChange / 100) * (cumulativeAmount)

        assetData.push({
            year: i + 1,
            amount: Math.round(cumulativeAmount)
        })

        // Update the total asset data
        dataForTotalAsset[i].amount += Math.round(cumulativeAmount)
    }

    // Update the individual asset data
    dataForEachAssetItem.push({
        assetName,
        data: assetData
    })
}

/* payoutType can be 'fixed' or 'percent'
'fixed': Payout is a constant amount every year
'percent': Payout is a percentage of the current asset value in that year
*/
function calculatePayoutAmount(payoutAmount, payoutType, currentAssetValue) {
    if (payoutType === 'fixed') {
        return payoutAmount
    } else if (payoutType === 'percent') {
        return currentAssetValue * (payoutAmount / 100)
    }
}

function initTotalAsset(totalAsset, years) {
    for (let i = 0; i < years; i++) {
        totalAsset.push({
            year: i + 1,
            amount: 0
        })
    }
}