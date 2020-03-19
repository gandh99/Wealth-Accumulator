import { convertFrequencyToQuantityPerYear } from "../utils/utility"

/* 
Input for variable expense: 
[{ 
    expenseAmount: ...,
    expenseFrequency: ...,
    expensePercentageChange: ...,
    expensePercentageChangeFrequency: ...,
    expenseName: (not used)
}, {...}, {...}, ...]

Output for expenseData:
[{
    year: ...,
    amount: ...
}, {...}, {...}, ...]
*/
export function generateExpenseData(expense, totalExpense) {
    let {
        expenseAmount, expenseFrequency, expensePercentageChange, expensePercentageChangeFrequency
    } = expense

    // Convert to number
    expenseAmount = Number(expenseAmount)
    expensePercentageChange = Number(expensePercentageChange)

    let expenseData = []
    let years = 10  // to be modified later
    let frequency = convertFrequencyToQuantityPerYear(expenseFrequency)
    let cumulativeAmount = expenseAmount * frequency
    
    // Initialise total expense
    if (totalExpense.length <= 0) {
        initTotalExpense(totalExpense, years)
    }

    for (let i = 0; i < years; i++) {
        // Update the individual expense data
        expenseData.push({
            year: i + 1,
            amount: cumulativeAmount
        })

        // Update the total expense data
        totalExpense[i].amount += cumulativeAmount

        // Compute the new cumulative amount for the following year
        expenseAmount += expenseAmount * (expensePercentageChange / 100)
        cumulativeAmount += expenseAmount * frequency
    }

    return expenseData
}

function initTotalExpense(totalExpense, years) {
    for (let i = 0; i < years; i++) {
        totalExpense.push({
            year: i,
            amount: 0
        })
    }
}