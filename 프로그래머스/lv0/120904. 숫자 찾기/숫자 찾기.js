function solution(num, k) {
    let stringNum = num.toString();
  let stringK = k.toString();
  let result = stringNum.indexOf(stringK)
  if (stringNum.indexOf(stringK) === -1) {
      return -1
  } else {
      return result + 1
  }
}