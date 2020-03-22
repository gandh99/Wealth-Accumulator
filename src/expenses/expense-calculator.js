import { convertFrequencyToQuantityPerYear } from "../utils/utility"

/* 
Input for variable expense: 
[{ 
    expenseAmount: ...,
    expenseFrequency: ...,
    expensePercentageChange: ...,
    expenseName: (not used)
}, {...}, {...}, ...]

Output for expenseData:
[{
    year: ...,
    amount: ...
}, {...}, {...}, ...]
*/
export function generateExpenseData(metadataForEachExpenseItem, years, dataForEachExpenseItem, dataForTotalExpense) {
    metadataForEachExpenseItem.map(metadataForSingleExpenseItem => (
        generateDataForSingleExpenseItem(
            metadataForSingleExpenseItem,
            years,
            dataForEachExpenseItem,
            dataForTotalExpense
        )
    ))
}

function generateDataForSingleExpenseItem(
    metadataForSingleExpenseItem,
    years,
    dataForEachExpenseItem,
    dataForTotalExpense
) {
    let {
        expenseName, expenseAmount, expenseFrequency, expensePercentageChange
    } = metadataForSingleExpenseItem

    // Convert to number
    expenseAmount = Number(expenseAmount)
    expensePercentageChange = Number(expensePercentageChange)

    let expenseData = []
    let frequency = convertFrequencyToQuantityPerYear(expenseFrequency)
    let cumulativeAmount = expenseAmount * frequency

    // Initialise total expense
    if (dataForTotalExpense.length <= 0) {
        initTotalExpense(dataForTotalExpense, years)
    }

    for (let i = 0; i < years; i++) {
        expenseData.push({
            year: i + 1,
            amount: Math.round(cumulativeAmount)
        })

        // Update the total expense data
        dataForTotalExpense[i].amount += Math.round(cumulativeAmount)

        // Compute the new cumulative amount for the following year
        expenseAmount += expenseAmount * (expensePercentageChange / 100)
        cumulativeAmount += expenseAmount * frequency
    }

    // Update the individual expense data
    dataForEachExpenseItem.push({
        expenseName,
        data: expenseData
    })
}

function initTotalExpense(totalExpense, years) {
    for (let i = 0; i < years; i++) {
        totalExpense.push({
            year: i + 1,
            amount: 0
        })
    }
}