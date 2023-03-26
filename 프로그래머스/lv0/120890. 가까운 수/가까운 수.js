function solution(array, n) {
    let result = Math.min(...array.map((v) => Math.abs(v - n)));
    return answer = array
    .sort((a, b) => a - b)
    .find((a) => Math.abs(a - n) === result);
}