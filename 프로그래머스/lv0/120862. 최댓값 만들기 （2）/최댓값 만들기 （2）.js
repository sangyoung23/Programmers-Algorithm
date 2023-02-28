function solution(numbers) {
    let sortNumbers = numbers.sort((a, b) => b - a);
    let first = sortNumbers[0] * sortNumbers[1];
    let second = sortNumbers[numbers.length-1] * sortNumbers[numbers.length-2];
    return Math.max(first, second);
}