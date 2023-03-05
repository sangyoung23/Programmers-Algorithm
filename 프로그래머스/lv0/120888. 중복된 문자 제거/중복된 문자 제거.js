function solution(my_string) {
    const set = new Set(my_string);
    const newArr = [...set];
    return newArr.join('')
}