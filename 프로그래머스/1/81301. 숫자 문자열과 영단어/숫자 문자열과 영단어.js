function solution(s) {
    var answer = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    answer.forEach((i, idx) => {
         s = s.split(i).join(idx)
    })
    
    return Number(s)
}