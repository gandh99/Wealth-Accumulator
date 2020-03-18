export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function transformArraysToObject(nameArray, valueArray) {
    let obj = []
    for (let i = 0; i < nameArray.length; i++) {
        obj.push({
            name: nameArray[i],
            value: (valueArray[i]) ? valueArray[i] : nameArray[i],
        })
    }
    
    return obj
}