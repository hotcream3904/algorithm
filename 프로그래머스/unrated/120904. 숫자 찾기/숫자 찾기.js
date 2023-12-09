function solution(num, k) {
    var answer = 0;
    let strNum = num.toString()
    for(let i=0; i<strNum.length; i++) {
        if(strNum[i] == k) {
            answer = i+1
            break;
        } else answer = -1
    }
    return answer;
}