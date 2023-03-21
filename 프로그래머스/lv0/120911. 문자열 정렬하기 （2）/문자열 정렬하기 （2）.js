function solution(my_string) {
    var result = my_string.toLowerCase();
    return result.split("").sort().join("")
}