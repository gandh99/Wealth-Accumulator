export function generateOverallWealthData(totalIncomeData, totalAssetData, totalExpenseData) {
    // If all 3 data arrays are empty, return
    if (totalIncomeData.length <= 0 && totalAssetData.length <= 0 && totalExpenseData.length <= 0) {
        return []
    }

    let overallWealthData = []
    let incomeData = getArrayData(totalIncomeData)
    let assetData = getArrayData(totalAssetData)
    let expenseData = getArrayData(totalExpenseData)

    for (let i = 0; i < 10; i++) {  //TODO
        let wealthForCurrentYear = incomeData[i] + assetData[i] - expenseData[i]
        overallWealthData.push({
            year: i + 1,
            amount: wealthForCurrentYear
        })
    }
    console.log(overallWealthData)
    return overallWealthData
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
function getArrayData(array) {
    let data = []

    for (let i = 0; i < 10; i++) {  //TODO
        if (!array[i]) {
            data.push(0)
        } else {
            data.push(array[i].amount)
        }
    }

    return data
}