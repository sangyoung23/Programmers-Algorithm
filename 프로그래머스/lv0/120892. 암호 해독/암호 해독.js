function solution(cipher, code) {
    return cipher.split("").filter((v, index) => (index+1)%code === 0).join("");
}