// Your code here
function mapToNegativize(array) { 
    let newArray = []
    for(let i=0;i<array.length;i++) {
     newArray.push(-1 * array[i])
    } return newArray
}
function mapToNoChange(array) { 
    return array
}
function mapToDouble(array) { 
    let newArray = []
    for(let i=0;i<array.length;i++) {
     newArray.push(2 * array[i])
    } return newArray
}
function mapToSquare(array) { 
    let newArray = []
    for(let i=0;i<array.length;i++) {
     newArray.push(array[i] * array[i])
    } return newArray
}
function reduceToTotal(array,startingPoint=0) { 
    let newNumber = startingPoint
    for(let i=0;i<array.length;i++) {
     newNumber += array[i]
    } return newNumber
}
function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }