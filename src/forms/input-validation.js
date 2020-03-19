export function isValidName(name) {
    const validPattern = /^[\w\d&.\-_ ]+$/;
    return name.length > 0 && name.match(validPattern)
}

export function isValidPositiveNumber(value) {
    return Number(value) && value >= 0.0
}

export function isValidPercentage(value) {
    return Number(value) || value == '0'
}

export function isValidOption(option) {
    return option && option.length > 0
}