function solution(sides) {
    var answer = 0;
    let newSides = [];
    newSides = sides.sort((a,b)=>a-b)
    if( newSides[2] < newSides[0] + newSides[1] ) {
        answer = 1
    } else answer = 2
    return answer;
}