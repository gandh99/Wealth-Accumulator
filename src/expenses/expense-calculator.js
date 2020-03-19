export function generateExpenseData(expense) {
    if (!expense || expense.length <= 0) return

    // Can only handle 1 instance of expense for now
    let testExpense = expense[0]
    let {
        expenseAmount, expenseFrequency, expensePercentageChange, expensePercentageChangeFrequency
    } = testExpense
    
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

function convertFrequencyToQuantityPerYear(frequency) {
    const frequencyToQuantityPerYear = {
        month: 12,
        year: 1
    }

    return frequencyToQuantityPerYear[frequency]
}