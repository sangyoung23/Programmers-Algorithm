function solution(n)
{
    let sum = 0
    let result = String(n)
    
    for(let i = 0; i < result.length; i++) {
        sum += parseInt(result[i])
    }
    return sum
}