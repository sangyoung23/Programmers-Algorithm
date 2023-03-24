function solution(my_string) {
    let splitSt = my_string.split(' ')
    let cnt = Number(splitSt[0]);
    splitSt.forEach((item,idx) => {
        if (item === "+") {
            cnt += Number(splitSt[idx + 1])
        }
        if (item === "-") {
            cnt -= Number(splitSt[idx + 1])
        }
    })
    return cnt
}