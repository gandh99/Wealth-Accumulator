import { convertFrequencyToQuantityPerYear } from "../utils/utility"

/* 
Input for variable income: 
[{ 
    incomeAmount: ...,
    incomeFrequency: ...,
    incomePercentageChange: ...,
    incomeName: (not used)
}, {...}, {...}, ...]

Output for incomeData:
[{
    year: ...,
    amount: ...
}, {...}, {...}, ...]
*/
export function generateIncomeData(metadataForEachIncomeItem, years, dataForEachIncomeItem, dataForTotalIncome) {
    metadataForEachIncomeItem.map(metadataForSingleIncomeItem => (
        generateDataForSingleIncomeItem(
            metadataForSingleIncomeItem,
            years,
            dataForEachIncomeItem,
            dataForTotalIncome
        )
    ))
}

function generateDataForSingleIncomeItem(
    metadataForSingleIncomeItem,
    years,
    dataForEachIncomeItem,
    dataForTotalIncome
) {
    let {
        incomeName, incomeAmount, incomeFrequency, incomePercentageChange
    } = metadataForSingleIncomeItem

    // Convert to number
    incomeAmount = Number(incomeAmount)
    incomePercentageChange = Number(incomePercentageChange)

    let incomeData = []
    let frequency = convertFrequencyToQuantityPerYear(incomeFrequency)
    let cumulativeAmount = incomeAmount * frequency

    // Initialise total income
    if (dataForTotalIncome.length <= 0) {
        initTotalIncome(dataForTotalIncome, years)
    }

    for (let i = 0; i < years; i++) {
        incomeData.push({
            year: i + 1,
            amount: Math.round(cumulativeAmount)
        })

        // Update the total income data
        dataForTotalIncome[i].amount += Math.round(cumulativeAmount)

        // Compute the new cumulative amount for the following year
        incomeAmount += incomeAmount * (incomePercentageChange / 100)
        cumulativeAmount += incomeAmount * frequency
    }

    // Update the individual income data
    dataForEachIncomeItem.push({
        incomeName,
        data: incomeData
    })
}

function initTotalIncome(totalIncome, years) {
    for (let i = 0; i < years; i++) {
        totalIncome.push({
            year: i + 1,
            amount: 0
        })
    }
}