function solution(array) {
    let result = [];
    let max = Math.max(...array)
    let index = array.indexOf(max)
    result.push(max, index)
    return result
}