function solution(s){
    let result = s.toLowerCase()
    
    let p = result.split('p').length
    let y = result.split('y').length
    
    return p === y ? true : false
}