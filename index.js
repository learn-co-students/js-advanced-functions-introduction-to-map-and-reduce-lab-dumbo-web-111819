// Your code here

const mapToNegativize=(arr) => {
    const emptyArr=[]
    arr.forEach(element => emptyArr.push(element*-1))
    return emptyArr
}

const mapToNoChange=(arr) => {
    const emptyArr=[]
    arr.forEach(element => emptyArr.push(element))
    return emptyArr
}

const mapToDouble=(arr) => {
    const emptyArr=[]
    arr.forEach(element => emptyArr.push(element*2))
    return emptyArr
}

const mapToSquare=(arr) => {
    const emptyArr=[]
    arr.forEach(element => emptyArr.push(element**2))
    return emptyArr
}
const reduceToTotal=(arr,start=0) => {
    let sum=start
    arr.forEach(element=> sum+=element )
    return sum
}

const reduceToAllTrue=(arr) => {
    return arr.every(element=>Boolean(element)===true)

    
}
const reduceToAnyTrue=(arr) => {
    return arr.some(element=>Boolean(element)===true)
}
// reduceToAllTrue(sourceArray)
// reduceToAnyTrue(sourceArray)mapToSquare(sourceArray)