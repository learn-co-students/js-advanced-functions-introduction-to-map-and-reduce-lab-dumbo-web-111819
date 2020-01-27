// Your code here
function mapToNegativize(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(-1 * arr[i])
  }
  return newArr
}

function mapToNoChange(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  return newArr
}

function mapToDouble(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr
}

function mapToSquare(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i])
  }
  return newArr
}

function reduceToTotal(arr, startingPoint = 0) {
  let total = startingPoint
  // if (startingPoint === 0) {
    for (let i = 0; i < arr.length; i++) {
      total += arr[i]
    }

  // }
  return total
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) return false
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return true
  }
  return false
}
