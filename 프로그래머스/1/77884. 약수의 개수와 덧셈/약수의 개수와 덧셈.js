function solution(left, right) {
    
    // left와 rigth 사이의 수를 구함
    let result = [left, right]
    
    for (let i = 1; i < right - left; i++){
        result.push(left + i)
    }
    
    let sum = 0
    
    // left와 right 사이의 수가 들어있는 배열을 순회
    for (const item of result) {
        let count = 0
        // 1부터 result배열의 값까지 약수를 구하고 약수가 있을때 count++
        for (let i = 1; i <= item; i++) {
            if (item % i === 0) count++;
    }
        // count가 짝수이면 더하고 홀수이면 빼기
        count % 2 === 0 ? sum += item : sum -= item
}
    
    // 결과
    return sum
}