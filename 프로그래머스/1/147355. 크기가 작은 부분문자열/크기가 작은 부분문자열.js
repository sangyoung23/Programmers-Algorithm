function solution(t, p) {
    let tArr = t.split("")
    let result = []
    let sum = 0
    
    for(let i = 0; i < tArr.length; i++) {
        tArr.slice(i, i + p.length).join("").length === p.length ?
            result.push(tArr.slice(i, i + p.length).join(""))
        : ''
    }
    
    for(item of result) {
        if (item <= p) sum += 1
    }
    
    return sum
}