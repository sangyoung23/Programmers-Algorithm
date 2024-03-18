function solution(s) {
    // sort 내림차순을 사용하면 대문자가 소문자보다 뒤에 오게 된다.
    return s.split("").sort((a, b)=> a > b ? -1 : 1).join("")
}