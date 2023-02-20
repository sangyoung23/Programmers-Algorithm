function solution(n) {
    let sum = Math.sqrt(n)
    var answer = sum % 1 === 0 ? 1 : 2
    return answer;
}