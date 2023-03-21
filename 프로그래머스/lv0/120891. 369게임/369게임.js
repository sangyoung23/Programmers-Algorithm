function solution(order) {
    return order.toString().split("").filter((n) => Number(n) % 3 === 0 && Number(n) !== 0).length
}