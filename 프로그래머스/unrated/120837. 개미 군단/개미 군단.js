function solution(hp) {
    var answer = 0;
    answer = Math.trunc(hp / 5)
    console.log(answer) // 4
    let remain = hp % 5 
    console.log(remain) // 4
    if(remain < 3) {
        answer += remain
    }
    if(remain == 3) {
        answer += 1;
    }
    if(remain > 3) {
        answer += 2
    }
    console.log(answer) // 6
    return answer;
}