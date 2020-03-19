import { convertFrequencyToQuantityPerYear } from "../utils/utility"

export function generateExpenseData(expense) {
    let {
        expenseAmount, expenseFrequency, expensePercentageChange, expensePercentageChangeFrequency
    } = expense
    
    // Convert to number
    expenseAmount = Number(expenseAmount)
    expensePercentageChange = Number(expensePercentageChange)

    let data = []
    let years = 10  
    let frequency = convertFrequencyToQuantityPerYear(expenseFrequency)
    let cumulativeAmount = expenseAmount * frequency

    for (let i = 1; i <= years; i++) {
        data.push({
            year: i,
            amount: cumulativeAmount
        })
        expenseAmount += expenseAmount * (expensePercentageChange / 100)
        cumulativeAmount += expenseAmount * frequency
    }

    return data
}