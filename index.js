function mapToNegativize(sourceArray){
    const newArr = sourceArray.map(ele => ele * -1)
    return newArr
}

function mapToNoChange(sourceArray){
    const sameArr = sourceArray.map(ele => ele)
    return sameArr
}

function mapToDouble(sourceArray){
    const newArr = sourceArray.map(ele => ele * 2)
    return newArr
}

function mapToSquare(sourceArray){
    const newArr = sourceArray.map(ele => ele ** 2)
    return newArr
}

function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce(reduceFunction, startingPoint)
    
    function reduceFunction(total, num){
        return total + num
    }
}

function reduceToAllTrue(sourceArray){
    let found = false
    sourceArray.forEach(ele => {
        if(ele){
            found = true
        } else {
            found = false
        }
    })
    return found
}

function reduceToAnyTrue(sourceArray){
    let found = false
    sourceArray.forEach(ele => {
        if(ele){
            found = true
        } else {
            found = false
        }
    })
    return found
}
