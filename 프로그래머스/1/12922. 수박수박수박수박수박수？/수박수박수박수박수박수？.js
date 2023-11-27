function solution(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            result.push("박")
        } else {
            result.push("수")
        }
    }
    return result.toString().replace(/,/g, "")
}