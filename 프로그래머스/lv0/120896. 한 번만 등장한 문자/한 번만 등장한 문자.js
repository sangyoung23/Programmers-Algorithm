function solution(s) {
    let arr = []
    for (let e of s) {
        s.indexOf(e) === s.lastIndexOf(e) ? arr.push(e) : null
    }
    return arr.sort().join("")
}