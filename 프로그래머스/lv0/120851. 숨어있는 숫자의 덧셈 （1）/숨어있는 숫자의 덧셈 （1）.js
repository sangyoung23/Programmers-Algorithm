function solution(my_string) {
    let num = my_string.replace(/[^0-9]/g,"").split("").map(n => Number(n));
    var answer = num.reduce((a,b) => a + b);
    return answer;
}
