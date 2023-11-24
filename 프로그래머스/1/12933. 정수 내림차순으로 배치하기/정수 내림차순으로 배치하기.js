function solution(n) {
    return parseInt(Array.from(n.toString()).sort((a, b) => b - a).toString().replace(/,/g, ""))
}