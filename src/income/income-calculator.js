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
export function generateIncomeData(income, totalIncome, years) {
    let {
        incomeAmount, incomeFrequency, incomePercentageChange
    } = income
    
    // Convert to number
    incomeAmount = Number(incomeAmount)
    incomePercentageChange = Number(incomePercentageChange)

    let incomeData = []
    let frequency = convertFrequencyToQuantityPerYear(incomeFrequency)
    let cumulativeAmount = incomeAmount * frequency
    
    // Initialise total income
    if (totalIncome.length <= 0) {
        initTotalIncome(totalIncome, years)
    }

    for (let i = 0; i < years; i++) {
        // Update the individual income data
        incomeData.push({
            year: i + 1,
            amount: Math.round(cumulativeAmount)
        })

        // Update the total income data
        totalIncome[i].amount += Math.round(cumulativeAmount)

        // Compute the new cumulative amount for the following year
        incomeAmount += incomeAmount * (incomePercentageChange / 100)
        cumulativeAmount += incomeAmount * frequency
    }

    return incomeData
}

function initTotalIncome(totalIncome, years) {
    for (let i = 0; i < years; i++) {
        totalIncome.push({
            year: i + 1,
            amount: 0
        })
    }
}