function solution(price, money, count) {
    let sum = 0
    for (let i = 1; i <= count; i++) {
        sum += price * i
    }
    if (sum <= money) {
        return 0
    } else {
        return sum - money
    }
}