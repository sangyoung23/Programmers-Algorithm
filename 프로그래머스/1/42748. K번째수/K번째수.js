function solution(array, commands) {
    let result = []
    
    commands.forEach((item) => {
        let newArr = array.slice(item[0] -1, item[1])
        newArr.sort((a, b) => a - b)
        result.push(newArr[item[2] - 1])
    })
    
    return result
}