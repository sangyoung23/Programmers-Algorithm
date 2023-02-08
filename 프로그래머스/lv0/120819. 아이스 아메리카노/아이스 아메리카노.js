function solution(money) {
    if (money > 0 && money <= 1000000) {
        let coffee = Math.floor(money/5500);
        let sum = money - (5500 * coffee);
        let answer = [coffee, sum];
        return answer;
    }
}