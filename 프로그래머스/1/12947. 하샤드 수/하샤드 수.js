function solution(x) {
    let sum = 0;
    var answer = x.toString().split('')
    for(let i = 0; i < answer.length; i++) {
        sum += parseInt(answer[i])
    }
    return x % sum === 0 ? true : false
}