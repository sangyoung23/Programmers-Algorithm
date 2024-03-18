function solution(phone_number) {
    // split로 배열로 변경하고 쪼갠 뒤 fill 메서드로 원하는 원하는 index까지 변경 후 join으로 문자열 변환
    return phone_number.split("").fill("*", 0, phone_number.length -4).join("")
}