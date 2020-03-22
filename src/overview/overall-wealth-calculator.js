export function generateOverallWealthData(
    overallWealthData,
    totalIncomeData,
    totalAssetData,
    totalExpenseData,
    years
) {
    // If all 3 data arrays are empty, return
    if (totalIncomeData.length <= 0 && totalAssetData.length <= 0 && totalExpenseData.length <= 0) {
        return []
    }

    let incomeData = getArrayData(totalIncomeData, years)
    let assetData = getArrayData(totalAssetData, years)
    let expenseData = getArrayData(totalExpenseData, years)

    for (let i = 0; i < years; i++) {
        let wealthForCurrentYear = incomeData[i] + assetData[i] - expenseData[i]
        overallWealthData.push({
            year: i + 1,
            amount: wealthForCurrentYear
        })
    }
}

/* Takes in an array of objects, extracts the value for 'amount', and puts the data in an array
Input: 
[{
    year: ..., 
    amount: number
}, {...}, {...}, ...]

Output:
[number, number, number, ...]
*/
function getArrayData(array, years) {
    let data = []

    for (let i = 0; i < years; i++) {
        if (!array[i]) {
            data.push(0)
        } else {
            data.push(array[i].amount)
        }
    }

    return data
}