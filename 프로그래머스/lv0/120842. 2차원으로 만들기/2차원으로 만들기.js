function solution(num_list, n) {
    let arr = []
    
    while(num_list.length) {
        arr.push(num_list.splice(0,n))
    }
    
    return arr
}