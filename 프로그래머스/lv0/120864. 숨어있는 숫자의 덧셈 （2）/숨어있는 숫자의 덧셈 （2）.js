function solution(my_string) {
    let result = my_string.match(/[0-9]+/g)
    return result ? result.map((n) => Number(n)).reduce((a,c) => a + c, 0)  : 0
}