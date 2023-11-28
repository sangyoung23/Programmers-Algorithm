function solution(s) {
    if ((s.length === 4 || s.length === 6) && (/[a-zA-Z]/g.test(s) === false) ) {
        return true
    } else {
        return false
    }
}