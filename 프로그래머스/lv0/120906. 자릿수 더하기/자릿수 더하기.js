function solution(n) {
    let result = n.toString().split("").map(x => Number(x));
    var answer = result.reduce((a,b) => a + b);
    return answer;
}