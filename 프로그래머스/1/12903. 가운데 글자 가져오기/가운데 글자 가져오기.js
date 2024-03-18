function solution(s) {
    let half =  s.length / 2
    if (s.length % 2 === 0) {
        return s.split("")[half -1] + s.split("")[half]
    } else {
        return s.split("")[half - 0.5]
    }
}