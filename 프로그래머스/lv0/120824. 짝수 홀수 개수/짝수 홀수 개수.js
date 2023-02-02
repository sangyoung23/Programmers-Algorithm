function solution(num_list) {
    let evenLength = num_list.filter((e)=> e % 2 ===0).length;
    let answer = [evenLength, num_list.length - evenLength]
    return answer;
}