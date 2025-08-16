function validateUnionType(variable: any, types: string[]):boolean {
    return types.some(type => typeof variable === type)
}

console.log(validateUnionType(1, ['number', 'string', 'Array']))
console.log(validateUnionType('Alice', ['boolean', 'string', 'number']))
console.log(validateUnionType(2, ['boolean', 'string', 'undefined']))