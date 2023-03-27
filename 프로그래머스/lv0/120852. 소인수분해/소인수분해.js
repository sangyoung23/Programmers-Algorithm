function solution(n) {
        let arr = [];
        let idx = 2;
        while(n >= 2) {
            if (n % idx === 0) {
                arr.push(idx)
                n = n / idx
            } else {
                idx += 1
            }
        }
    return [...new Set(arr)] 
    }
    
