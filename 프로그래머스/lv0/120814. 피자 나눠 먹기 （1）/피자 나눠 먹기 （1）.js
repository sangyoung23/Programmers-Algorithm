function solution(n) {
    var answer = n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
    return answer;
}