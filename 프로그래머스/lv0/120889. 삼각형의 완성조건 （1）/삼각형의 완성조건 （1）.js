function solution(sides) {
    let fixedSides = sides.sort((a,b) => b - a);
    return fixedSides[0] < fixedSides[1] + fixedSides[2] ? 1 : 2;
}